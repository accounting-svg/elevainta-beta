'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import { Capacitor } from '@capacitor/core'
import { restorePurchases, syncSubscription } from '../lib/revenuecat'
import { trackEvent } from '../lib/trackEvent'
import { secondaryButton } from '../lib/buttonStyles'

// Native only — store purchases don't exist on web, so this renders nothing
// there. `onRestored` runs once access is confirmed; without it the user is
// sent to /board-pass.
export default function RestorePurchasesButton({ onRestored }: { onRestored?: () => void | Promise<void> }) {
  const router = useRouter()
  const [restoring, setRestoring] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  if (!Capacitor.isNativePlatform()) return null

  const handleRestore = async () => {
    trackEvent('restore_tapped')
    setRestoring(true)
    setMessage(null)
    try {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        setMessage('Please sign in again, then try restoring.')
        return
      }

      await restorePurchases(user.id)
      const active = await syncSubscription()

      if (active) {
        trackEvent('restore_succeeded')
        if (onRestored) {
          await onRestored()
        } else {
          router.push('/board-pass')
        }
      } else {
        trackEvent('restore_not_found')
        const account = Capacitor.getPlatform() === 'ios' ? 'Apple ID' : 'Google account'
        setMessage(`No active subscription was found for this ${account}.`)
      }
    } catch (err) {
      console.error('RevenueCat restore failed:', err)
      setMessage('Could not restore purchases. Please check your connection and try again.')
    } finally {
      setRestoring(false)
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 16 }}>
      <button
        onClick={handleRestore}
        disabled={restoring}
        style={{ ...secondaryButton, opacity: restoring ? 0.7 : 1 }}
      >
        {restoring ? 'Restoring…' : 'Restore Purchases'}
      </button>
      {message && (
        <p style={{ fontSize: '0.85rem', color: '#555', marginTop: 10, lineHeight: 1.5 }}>
          {message}
        </p>
      )}
    </div>
  )
}
