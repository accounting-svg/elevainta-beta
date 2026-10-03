'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Capacitor } from '@capacitor/core'
import { PURCHASES_ERROR_CODE, type PurchasesError } from '@revenuecat/purchases-capacitor'
import { purchaseSubscription } from '../lib/revenuecat'
import { trackEvent } from '../lib/trackEvent'

const buttonStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '14px',
  backgroundColor: '#C5A46D',
  color: '#fff',
  border: 'none',
  borderRadius: 3,
  fontSize: '0.9rem',
  fontWeight: 'bold',
  letterSpacing: '1.5px',
  textAlign: 'center',
  textDecoration: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',
}

export default function SubscribeButton({ stripeUrl, userId }: { stripeUrl: string; userId: string }) {
  const router = useRouter()
  const [purchasing, setPurchasing] = useState(false)

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
      {purchasing ? 'PROCESSING…' : 'SUBSCRIBE FOR $49/MONTH'}
    </button>
  )
}
