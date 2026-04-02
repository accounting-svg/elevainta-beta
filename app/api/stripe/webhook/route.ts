import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
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

  const subscription = event.data.object as Stripe.Subscription
  const customerId = subscription.customer as string

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
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
      // Unhandled event type — ignore
      break
  }

  return NextResponse.json({ received: true }, { status: 200 })
}
