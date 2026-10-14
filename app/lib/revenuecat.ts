import { Capacitor } from '@capacitor/core'
import { Purchases } from '@revenuecat/purchases-capacitor'

let configured = false

// Idempotent: safe to call before every purchase/portal action rather than
// once at app startup, so a purchase can never race ahead of identification
// (which would attach it to RevenueCat's anonymous id instead of this user).
export async function ensureIdentified(supabaseUserId: string): Promise<void> {
  if (!Capacitor.isNativePlatform()) return

  if (!configured) {
    const platform = Capacitor.getPlatform()
    const apiKey =
      platform === 'android' ? process.env.NEXT_PUBLIC_REVENUECAT_ANDROID_API_KEY :
      platform === 'ios' ? process.env.NEXT_PUBLIC_REVENUECAT_IOS_API_KEY :
      undefined

    if (!apiKey) {
      throw new Error(`No RevenueCat API key configured for platform "${platform}"`)
    }

    await Purchases.configure({ apiKey })
    configured = true
  }

  await Purchases.logIn({ appUserID: supabaseUserId })
}

// Returns true if the purchase completed and granted an active entitlement.
// Throws if the user cancels or the purchase fails — callers should catch
// and ignore a user-initiated cancellation rather than surfacing an error.
export async function purchaseSubscription(supabaseUserId: string): Promise<boolean> {
  await ensureIdentified(supabaseUserId)

  const { current } = await Purchases.getOfferings()
  const pkg = current?.monthly ?? current?.availablePackages[0]
  if (!pkg) {
    throw new Error('No RevenueCat offering package available to purchase')
  }

  const { customerInfo } = await Purchases.purchasePackage({ aPackage: pkg })
  return Object.keys(customerInfo.entitlements.active).length > 0
}

// Re-attaches any subscription the device's store account already owns to
// this user in RevenueCat. Follow with syncSubscription() to unlock access.
export async function restorePurchases(supabaseUserId: string): Promise<void> {
  await ensureIdentified(supabaseUserId)
  await Purchases.restorePurchases()
}

// Asks the server to check RevenueCat directly and activate the signed-in
// user's profile if they have an active entitlement, instead of waiting on
// the webhook. Returns true if the profile is now active. Throws if the
// check itself failed — callers decide whether that should block anything.
export async function syncSubscription(): Promise<boolean> {
  const res = await fetch('/api/revenuecat/sync', { method: 'POST' })
  if (!res.ok) {
    throw new Error(`Subscription sync failed (${res.status})`)
  }
  const data = await res.json()
  return data?.active === true
}
