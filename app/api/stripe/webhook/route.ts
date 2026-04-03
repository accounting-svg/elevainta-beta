import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
})

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
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

      if (!customerEmail) {
        console.error('No email found in checkout session')
        break
      }

      // Link stripe_customer_id to the profile by email, and activate subscription
      const { error } = await supabaseAdmin
        .from('profiles')
        .update({
          stripe_customer_id: customerId,
          subscription_status: 'active',
        })
        .eq('email', customerEmail)

      if (error) {
        console.error('Supabase update error on checkout:', error)
        return NextResponse.json({ error: 'Failed to link customer' }, { status: 500 })
      }
      break
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription
      const customerId = subscription.customer as string

      const { error } = await supabaseAdmin
        .from('profiles')
        .update({ subscription_status: 'active' })
        .eq('stripe_customer_id', customerId)

      if (error) {
        console.error('Supabase update error:', error)
        return NextResponse.json({ error: 'Failed to update subscription status' }, { status: 500 })
      }
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      const customerId = subscription.customer as string

      const { error } = await supabaseAdmin
        .from('profiles')
        .update({ subscription_status: 'free' })
        .eq('stripe_customer_id', customerId)

      if (error) {
        console.error('Supabase update error:', error)
        return NextResponse.json({ error: 'Failed to update subscription status' }, { status: 500 })
      }
      break
    }

    default:
      break
  }

  return NextResponse.json({ received: true }, { status: 200 })
}