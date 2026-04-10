import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  console.log('WEBHOOK RECEIVED')

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

    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const customerId = session.customer as string
      const customerEmail = session.customer_details?.email ?? session.customer_email
      const supabaseUserId = session.client_reference_id ?? null

      console.log('WEBHOOK DEBUG:', {
        client_reference_id: session.client_reference_id,
        customer_details_email: session.customer_details?.email,
        customer_email: session.customer_email,
        customer: session.customer,
      })

      const payload = {
        stripe_customer_id: customerId,
        subscription_status: 'active',
      }

      let activated = false

      // Attempt 1: update by Supabase user ID (client_reference_id from Payment Link)
      if (supabaseUserId) {
        const { data, error } = await supabaseAdmin
          .from('profiles')
          .update(payload)
          .eq('id', supabaseUserId)
          .select('id')

        if (error) {
          console.error('Update by user ID error:', error)
        } else if (data && data.length > 0) {
          console.log(`SUCCESS via client_reference_id: activated user ${supabaseUserId}`)
          activated = true
        } else {
          console.warn(`Update by client_reference_id matched 0 rows for user ${supabaseUserId}`)
        }
      }

      // Attempt 2: update by email if attempt 1 failed or supabaseUserId was null
      if (!activated && customerEmail) {
        const { data, error } = await supabaseAdmin
          .from('profiles')
          .update(payload)
          .ilike('email', customerEmail)
          .select('id')

        if (error) {
          console.error('Update by email error:', error)
        } else if (data && data.length > 0) {
          console.log(`SUCCESS via email: activated user with email ${customerEmail}`)
          activated = true
        } else {
          console.warn(`Update by email matched 0 rows for email ${customerEmail}`)
        }
      }

      if (!activated) {
        console.error('FAILED to activate subscription — no matching profile found', {
          supabaseUserId,
          customerEmail,
          customerId,
        })
        // Return 200 so Stripe does not keep retrying an unresolvable case
        return NextResponse.json({ received: true, warning: 'No matching profile' }, { status: 200 })
      }

      break
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      const customerId = subscription.customer as string
      const isActive = subscription.status === 'active' || subscription.status === 'trialing'
      const newStatus = isActive ? 'active' : 'free'
      const rawEnd = (subscription as any).current_period_end
      const subscriptionEndDate = rawEnd ? new Date(rawEnd * 1000).toISOString() : null

      const updatePayload: Record<string, string> = { subscription_status: newStatus }
      if (subscriptionEndDate) updatePayload.subscription_end_date = subscriptionEndDate

      // Attempt 1: update by stripe_customer_id
      const { data: byCustomerId, error: error1 } = await supabaseAdmin
        .from('profiles')
        .update(updatePayload)
        .eq('stripe_customer_id', customerId)
        .select('id')

      if (error1) {
        console.error('Supabase update by stripe_customer_id error:', error1)
        return NextResponse.json({ error: 'Failed to update subscription status' }, { status: 500 })
      }

      if (byCustomerId && byCustomerId.length > 0) {
        console.log(`Subscription ${subscription.status} for customer ${customerId} → set to ${newStatus} (via stripe_customer_id)`)
        break
      }

      // Attempt 2: fall back to email lookup via Stripe
      console.warn(`stripe_customer_id matched 0 rows for ${customerId}, falling back to email`)

      const customer = await stripe.customers.retrieve(customerId)
      const customerEmail = !customer.deleted ? customer.email : null

      if (!customerEmail) {
        console.error(`Could not retrieve email for Stripe customer ${customerId}`)
        break
      }

      const { data: byEmail, error: error2 } = await supabaseAdmin
        .from('profiles')
        .update(updatePayload)
        .eq('email', customerEmail)
        .select('id')

      if (error2) {
        console.error('Supabase update by email error:', error2)
        return NextResponse.json({ error: 'Failed to update subscription status' }, { status: 500 })
      }

      if (byEmail && byEmail.length > 0) {
        console.log(`Subscription ${subscription.status} for customer ${customerId} → set to ${newStatus} (via email ${customerEmail})`)
      } else {
        console.error(`Failed to update subscription — no profile matched customer ${customerId} or email ${customerEmail}`)
      }

      break
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice
      const customerId = invoice.customer as string
      const customerEmail = (invoice as any).customer_email as string | null

      if (!customerEmail) {
        console.error('invoice.payment_succeeded: no customer_email on invoice', { customerId })
        break
      }

      const { data, error } = await supabaseAdmin
        .from('profiles')
        .update({ subscription_status: 'active', stripe_customer_id: customerId })
        .eq('email', customerEmail)
        .select('id')

      if (error) {
        console.error('invoice.payment_succeeded: Supabase update error', error)
      } else if (data && data.length > 0) {
        console.log(`invoice.payment_succeeded: activated user with email ${customerEmail}`)
      } else {
        console.error(`invoice.payment_succeeded: no profile matched email ${customerEmail}`)
      }

      break
    }

    default:
      break
  }

  return NextResponse.json({ received: true }, { status: 200 })
}
