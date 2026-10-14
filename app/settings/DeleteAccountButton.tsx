'use client'

import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import { secondaryButton, dangerButton, dangerSolidButton } from '../lib/buttonStyles'

export default function DeleteAccountButton({
  subscriptionProvider,
  subscriptionStatus,
}: {
  subscriptionProvider: string | null
  subscriptionStatus: string | null
}) {
  const router = useRouter()
  const [confirming, setConfirming] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const hasStoreSubscription =
    subscriptionStatus === 'active' &&
    (subscriptionProvider === 'google_play' || subscriptionProvider === 'apple')

  const storeName = subscriptionProvider === 'apple' ? 'App Store' : 'Google Play Store'

  const handleDelete = async () => {
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('/api/account/delete', { method: 'POST' })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Could not delete account. Please try again.')
        setLoading(false)
        return
      }

      await supabase.auth.signOut()
      router.replace('/login')
    } catch {
      setError('Could not delete account. Please try again.')
      setLoading(false)
    }
  }

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        style={{ ...dangerButton, marginTop: 12 }}
      >
        DELETE ACCOUNT
      </button>
    )
  }

  return (
    <div
      style={{
        marginTop: 12,
        padding: 16,
        border: '1px solid #c0392b',
        borderRadius: 3,
        backgroundColor: '#fdf2f1',
      }}
    >
      <p style={{ fontSize: '0.85rem', color: '#c0392b', fontWeight: 'bold', marginTop: 0, marginBottom: 8 }}>
        This will permanently delete your account and all of your data. This cannot be undone.
      </p>

      {hasStoreSubscription && (
        <p style={{ fontSize: '0.85rem', color: '#333', marginBottom: 8 }}>
          You&apos;ll also need to cancel your subscription in the {storeName}, since this app
          can&apos;t cancel it for you.
        </p>
      )}

      {error && (
        <p style={{ fontSize: '0.85rem', color: '#c0392b', marginBottom: 8 }}>
          {error}
        </p>
      )}

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          type="button"
          onClick={() => setConfirming(false)}
          disabled={loading}
          style={{
            ...secondaryButton,
            flex: 1,
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleDelete}
          disabled={loading}
          style={{
            ...dangerSolidButton,
            flex: 1,
            ...(loading ? { backgroundColor: '#e0a89f', borderColor: '#e0a89f' } : {}),
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'DELETING...' : 'Yes, delete my account'}
        </button>
      </div>
    </div>
  )
}
