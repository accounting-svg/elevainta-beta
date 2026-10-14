import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

type RcEntitlement = {
  expires_date: string | null
  grace_period_expires_date?: string | null
  product_identifier?: string
}

type RcSubscription = {
  expires_date: string | null
  store?: string
}

// An entitlement with no expiry is a lifetime grant; otherwise it's active
// until its expiry (or the end of a billing grace period, if one is running).
function activeUntil(ent: RcEntitlement, now: number): number | null {
  if (ent.expires_date == null) return Infinity
  const expires = new Date(ent.expires_date).getTime()
  const grace = ent.grace_period_expires_date ? new Date(ent.grace_period_expires_date).getTime() : 0
  const until = Math.max(expires, grace)
  return until > now ? until : null
}

// The subscription record that backs an entitlement is normally keyed by the
// entitlement's product id, but Google Play ids can carry a base-plan suffix
// ("product:base-plan") on one side and not the other — so fall back to a
// prefix match, then to a matching expiry, then to the only subscription.
function findStore(ent: RcEntitlement, subscriptions: Record<string, RcSubscription>): string | undefined {
  const productId = ent.product_identifier
  const keys = Object.keys(subscriptions)

  if (productId && subscriptions[productId]) return subscriptions[productId].store

  if (productId) {
    const base = productId.split(':')[0]
    const prefixKey = keys.find((k) => k.split(':')[0] === base)
    if (prefixKey) return subscriptions[prefixKey].store
  }

  const sameExpiryKey = keys.find((k) => subscriptions[k].expires_date === ent.expires_date)
  if (sameExpiryKey) return subscriptions[sameExpiryKey].store

  if (keys.length === 1) return subscriptions[keys[0]].store
  return undefined
}

// Backup for the RevenueCat webhook: asks RevenueCat directly whether the
// signed-in user has an active entitlement and, if so, activates the profile
// exactly as the webhook would. It only ever upgrades — when nothing is active
// it writes nothing, so it can never downgrade a Stripe (web) subscriber, and
// expirations stay the webhook's job.
export async function POST(_req: NextRequest) {
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
      },
    }
  )

  // The user id comes only from the authenticated session — never from the
  // request — so one signed-in user can never sync or activate another account.
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const userId = user.id

  const apiKey = process.env.REVENUECAT_SECRET_API_KEY
  if (!apiKey) {
    console.error('RevenueCat sync: REVENUECAT_SECRET_API_KEY is not set')
    return NextResponse.json({ error: 'Sync is not configured' }, { status: 500 })
  }

  let subscriber: { entitlements?: Record<string, RcEntitlement>; subscriptions?: Record<string, RcSubscription> } | undefined
  try {
    const res = await fetch(`https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(userId)}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
      cache: 'no-store',
    })
    if (!res.ok) {
      console.error(`RevenueCat sync: RevenueCat API returned ${res.status} for ${userId}`)
      return NextResponse.json({ error: 'Failed to check subscription' }, { status: 502 })
    }
    subscriber = (await res.json())?.subscriber
  } catch (err) {
    console.error('RevenueCat sync: RevenueCat API request failed', err)
    return NextResponse.json({ error: 'Failed to check subscription' }, { status: 502 })
  }

  // Any active entitlement counts as subscribed (there is only one product),
  // matching how the app treats the purchase result. If several are active,
  // use the one that lasts longest.
  const now = Date.now()
  let best: { ent: RcEntitlement; until: number } | null = null
  for (const ent of Object.values(subscriber?.entitlements ?? {})) {
    const until = activeUntil(ent, now)
    if (until != null && (!best || until > best.until)) best = { ent, until }
  }

  if (!best) {
    return NextResponse.json({ active: false })
  }

  const store = findStore(best.ent, subscriber?.subscriptions ?? {})
  const subscriptionProvider =
    store === 'app_store' || store === 'mac_app_store' ? 'apple' :
    store === 'play_store' ? 'google_play' :
    null

  if (!subscriptionProvider) {
    console.error(`RevenueCat sync: unrecognized store "${store}" for ${userId}, leaving subscription_provider unchanged`)
  }

  const payload: Record<string, string | null> = {
    subscription_status: 'active',
    subscription_end_date: best.ent.expires_date ? new Date(best.ent.expires_date).toISOString() : null,
    ...(subscriptionProvider ? { subscription_provider: subscriptionProvider } : {}),
  }

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data, error } = await supabaseAdmin
    .from('profiles')
    .update(payload)
    .eq('id', userId)
    .select('id')

  if (error) {
    console.error('RevenueCat sync: Supabase update error', error)
    return NextResponse.json({ error: 'Failed to update subscription status' }, { status: 500 })
  }
  if (!data || data.length === 0) {
    console.error(`RevenueCat sync: no profile matched user ${userId}`)
    return NextResponse.json({ error: 'No profile found' }, { status: 500 })
  }

  console.log(`RevenueCat sync: activated ${userId}`)
  return NextResponse.json({ active: true })
}
