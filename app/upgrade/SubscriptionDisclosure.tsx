'use client'
import { Capacitor } from '@capacitor/core'
import { useStorePrice } from '../lib/useStorePrice'

const APPLE_EULA_URL = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'

// Store subscription terms shown under the purchase buttons in the native
// apps (required by App Store / Google Play review). Renders nothing on web,
// where the Stripe checkout shows its own terms.
export default function SubscriptionDisclosure() {
  const { isNative, price } = useStorePrice()
  if (!isNative) return null

  const isIOS = Capacitor.getPlatform() === 'ios'
  const account = isIOS ? 'Apple ID' : 'Google Play account'
  const settings = isIOS ? 'App Store account settings' : 'Google Play subscription settings'
  const termsHref = isIOS ? APPLE_EULA_URL : '/terms'

  return (
    <div style={{ textAlign: 'center', marginTop: 16 }}>
      <p style={{ fontSize: '0.75rem', color: '#777', lineHeight: 1.6, margin: '0 0 8px' }}>
        Board Pass Monthly{price ? ` – ${price}/month` : ''}. Payment is charged to your {account} at
        confirmation of purchase. Subscription auto-renews monthly unless canceled at least 24 hours
        before the end of the current period. Manage or cancel anytime in your {settings}.
      </p>
      <p style={{ fontSize: '0.75rem', margin: 0 }}>
        <a href={termsHref} style={{ color: '#C9A84C', textDecoration: 'none' }}>Terms of Use</a>
        {' • '}
        <a href="/privacy" style={{ color: '#C9A84C', textDecoration: 'none' }}>Privacy Policy</a>
      </p>
    </div>
  )
}
