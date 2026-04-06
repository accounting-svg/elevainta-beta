import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-03-25.dahlia',
  })

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: `Webhook signature verification failed: ${message}` }, { status: 400 })
  }

  switch (event.type) {

    // Fires when Payment Link checkout is completed — links Stripe customer to Supabase profile
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const customerId = session.customer as string
      const customerEmail = session.customer_details?.email
      // client_reference_id is the Supabase user ID passed by the /upgrade page.
      // This is the primary lookup key; email-based lookup is the fallback.
      const supabaseUserId = session.client_reference_id ?? null

      if (!customerEmail && !supabaseUserId) {
        console.error('No email or user ID found in checkout session')
        break
      }

      let profileId: string | null = null

      // Primary: look up by Supabase user ID (reliable, set by the /upgrade page)
      if (supabaseUserId) {
        const { data: profileRow, error: profileLookupError } = await supabaseAdmin
          .from('profiles')
          .select('id')
          .eq('id', supabaseUserId)
          .maybeSingle()

        if (profileLookupError) {
          console.error('Profile lookup by user ID error:', profileLookupError)
          return NextResponse.json({ error: 'Failed to look up user' }, { status: 500 })
        }

        if (profileRow) {
          profileId = profileRow.id
        } else {
          // Auth user exists (they were logged in to reach /upgrade) but profile is missing —
          // create it now so the subscription can be activated.
          console.warn(`Profile missing for auth user ${supabaseUserId} — creating it now`)
          const { error: createError } = await supabaseAdmin
            .from('profiles')
            .insert({ id: supabaseUserId, email: customerEmail ?? '', subscription_status: 'free' })

          if (createError) {
            console.error('Failed to create missing profile:', createError)
            return NextResponse.json({ error: 'Failed to create profile' }, { status: 500 })
          }
          profileId = supabaseUserId
        }
      } else {
        // Fallback: look up by email — avoids listUsers() pagination bug
        // (listUsers() defaults to 50 rows; users beyond page 1 were silently missed)
        const { data: profileRow, error: profileLookupError } = await supabaseAdmin
          .from('profiles')
          .select('id')
          .ilike('email', customerEmail!)
          .maybeSingle()

        if (profileLookupError) {
          console.error('Profile lookup by email error:', profileLookupError)
          return NextResponse.json({ error: 'Failed to look up user' }, { status: 500 })
        }

        if (!profileRow) {
          console.error('No profile found for email:', customerEmail)
          // Return 200 so Stripe does not keep retrying — user paid without signing up first
          return NextResponse.json({ received: true, warning: 'No matching user' }, { status: 200 })
        }

        profileId = profileRow.id
      }

      // Upsert so it works whether or not stripe_customer_id was set before
      const { error } = await supabaseAdmin
        .from('profiles')
        .update({
          stripe_customer_id: customerId,
          subscription_status: 'active',
        })
        .eq('id', profileId)

      if (error) {
        console.error('Supabase update error on checkout:', error)
        return NextResponse.json({ error: 'Failed to link customer' }, { status: 500 })
      }

      console.log(`Activated subscription for user ${profileId} (${customerEmail})`)
      break
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      const customerId = subscription.customer as string

      // Derive access from the actual Stripe status — never assume active.
      // 'deleted' events arrive with status 'canceled'; updated events cover
      // past_due, unpaid, paused, etc. All non-active states revoke access.
      const isActive = subscription.status === 'active' || subscription.status === 'trialing'
      const newStatus = isActive ? 'active' : 'free'

      const { error } = await supabaseAdmin
        .from('profiles')
        .update({ subscription_status: newStatus })
        .eq('stripe_customer_id', customerId)

      if (error) {
        console.error('Supabase update error:', error)
        return NextResponse.json({ error: 'Failed to update subscription status' }, { status: 500 })
      }

      console.log(`Subscription ${subscription.status} for customer ${customerId} → set to ${newStatus}`)
      break
    }

    default:
      break
  }

  return NextResponse.json({ received: true }, { status: 200 })
}