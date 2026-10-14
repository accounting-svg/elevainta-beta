'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Capacitor } from '@capacitor/core'
import { PURCHASES_ERROR_CODE, type PurchasesError } from '@revenuecat/purchases-capacitor'
import { purchaseSubscription, syncSubscription } from '../lib/revenuecat'
import { trackEvent } from '../lib/trackEvent'
import { useStorePrice } from '../lib/useStorePrice'
import { primaryButton } from '../lib/buttonStyles'

const buttonStyle: React.CSSProperties = primaryButton

export default function SubscribeButton({ stripeUrl, userId }: { stripeUrl: string; userId: string }) {
  const router = useRouter()
  const [purchasing, setPurchasing] = useState(false)
  const { price } = useStorePrice()

  if (!Capacitor.isNativePlatform()) {
    const handleWebSubscribeClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      // Give tracking at most 1s to land before leaving the page — the
      // redirect to Stripe must never wait on it indefinitely.
      await Promise.race([
        trackEvent('subscribe_tapped'),
        new Promise((resolve) => setTimeout(resolve, 1000)),
      ])
      window.location.href = stripeUrl
    }

    return (
      <a href={stripeUrl} onClick={handleWebSubscribeClick} style={buttonStyle}>
        SUBSCRIBE FOR $49/MONTH
      </a>
    )
  }

  const handlePurchase = async () => {
    trackEvent('subscribe_tapped')
    setPurchasing(true)
    try {
      await purchaseSubscription(userId)
      trackEvent('purchase_succeeded')
      // Activate the profile now rather than waiting on the webhook. A failed
      // sync must not strand a paid user here — the webhook and the success
      // page's own check are still behind it.
      try {
        await syncSubscription()
      } catch (syncErr) {
        console.error('RevenueCat sync after purchase failed:', syncErr)
      }
      router.push('/success')
    } catch (err) {
      // A user-cancelled purchase throws too — just let them try again rather
      // than surfacing an error for what may be intentional. Only a real
      // failure (not a cancellation) is tracked as purchase_failed.
      const code = (err as PurchasesError)?.code
      if (code !== PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) {
        trackEvent('purchase_failed', (err as PurchasesError)?.message ?? String(err))
      }
      console.error('RevenueCat purchase failed or cancelled:', err)
      setPurchasing(false)
    }
  }

  return (
    <button onClick={handlePurchase} disabled={purchasing} style={{ ...buttonStyle, opacity: purchasing ? 0.7 : 1 }}>
      {purchasing ? 'PROCESSING…' : price ? `SUBSCRIBE FOR ${price}/MONTH` : 'SUBSCRIBE'}
    </button>
  )
}
