import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { timingSafeEqual } from 'crypto'

// RevenueCat's dashboard lets you set a fixed "Authorization Header" value
// that it echoes back verbatim on every webhook call — this is RevenueCat's
// documented webhook auth mechanism (a shared-secret comparison), not an
// HMAC-signed header like Stripe's `Stripe-Signature`. Compared timing-safely
// even though it's a plain string match, since it's still a security check.
function isAuthorized(req: NextRequest): boolean {
  const expected = process.env.REVENUECAT_WEBHOOK_SECRET
  if (!expected) return false

  const received = req.headers.get('authorization') ?? ''
  const expectedBuf = Buffer.from(expected)
  const receivedBuf = Buffer.from(received)
  if (expectedBuf.length !== receivedBuf.length) return false
  return timingSafeEqual(expectedBuf, receivedBuf)
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const body = await req.json()
  const event = body?.event

  if (!event?.type || !event?.app_user_id) {
    return NextResponse.json({ received: true, warning: 'Missing event.type or app_user_id' }, { status: 200 })
  }

  const supabaseUserId = event.app_user_id as string

  switch (event.type) {
    case 'INITIAL_PURCHASE':
    case 'RENEWAL':
    case 'UNCANCELLATION': {
      const expirationMs = event.expiration_at_ms as number | undefined
      const payload: Record<string, string | null> = {
        subscription_status: 'active',
        subscription_provider: 'google_play',
        subscription_end_date: expirationMs ? new Date(expirationMs).toISOString() : null,
      }

      const { data, error } = await supabaseAdmin
        .from('profiles')
        .update(payload)
        .eq('id', supabaseUserId)
        .select('id')

      if (error) {
        console.error('RevenueCat webhook: Supabase update error', error)
        return NextResponse.json({ error: 'Failed to update subscription status' }, { status: 500 })
      }
      if (!data || data.length === 0) {
        console.error(`RevenueCat webhook: no profile matched app_user_id ${supabaseUserId}`)
      } else {
        console.log(`RevenueCat webhook: ${event.type} → activated ${supabaseUserId}`)
      }
      break
    }

    case 'EXPIRATION': {
      const { data, error } = await supabaseAdmin
        .from('profiles')
        .update({ subscription_status: 'free' })
        .eq('id', supabaseUserId)
        .select('id')

      if (error) {
        console.error('RevenueCat webhook: Supabase update error', error)
        return NextResponse.json({ error: 'Failed to update subscription status' }, { status: 500 })
      }
      if (!data || data.length === 0) {
        console.error(`RevenueCat webhook: no profile matched app_user_id ${supabaseUserId}`)
      } else {
        console.log(`RevenueCat webhook: EXPIRATION → deactivated ${supabaseUserId}`)
      }
      break
    }

    // CANCELLATION only means auto-renew was turned off — access continues
    // until EXPIRATION actually fires. BILLING_ISSUE is a grace-period signal,
    // not immediate loss of access. Everything else (TEST, analytics events,
    // etc.) is intentionally ignored, same as the Stripe webhook's default case.
    default:
      break
  }

  return NextResponse.json({ received: true }, { status: 200 })
}
