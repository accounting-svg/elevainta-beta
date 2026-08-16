'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Capacitor } from '@capacitor/core'
import { purchaseSubscription } from '../lib/revenuecat'

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
    return (
      <a href={stripeUrl} style={buttonStyle}>
        SUBSCRIBE FOR $49/MONTH
      </a>
    )
  }

  const handlePurchase = async () => {
    setPurchasing(true)
    try {
      await purchaseSubscription(userId)
      router.push('/success')
    } catch (err) {
      // A user-cancelled purchase throws too — just let them try again rather
      // than surfacing an error for what may be intentional.
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
