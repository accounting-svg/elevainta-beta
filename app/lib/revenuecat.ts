import { Capacitor } from '@capacitor/core'
import { Purchases } from '@revenuecat/purchases-capacitor'

let configured = false

// Idempotent: safe to call before every purchase/portal action rather than
// once at app startup, so a purchase can never race ahead of identification
// (which would attach it to RevenueCat's anonymous id instead of this user).
export async function ensureIdentified(supabaseUserId: string): Promise<void> {
  if (!Capacitor.isNativePlatform()) return

  if (!configured) {
    await Purchases.configure({
      apiKey: process.env.NEXT_PUBLIC_REVENUECAT_ANDROID_API_KEY as string,
    })
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
