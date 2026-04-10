import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  try {
    const { customerId } = await req.json()
    console.log('portal: incoming customerId', customerId)
    console.log('PORTAL DEBUG:', { customerId })
    console.log('STRIPE CUSTOMER ID:', customerId)

    if (!customerId) {
      console.error('portal: missing customerId')
      return NextResponse.json({ error: 'Missing customerId' }, { status: 400 })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2026-03-25.dahlia',
    })

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: process.env.NEXT_PUBLIC_APP_URL + '/board-pass',
    })

    console.log('portal: session created, url', portalSession.url)
    return NextResponse.json({ url: portalSession.url })
  } catch (err: any) {
    console.error('portal: error creating session', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
