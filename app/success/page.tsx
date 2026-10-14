'use client'
import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Capacitor } from '@capacitor/core'
import { syncSubscription } from '../lib/revenuecat'
import { primaryButton, secondaryButton } from '../lib/buttonStyles'

export default function SuccessPage() {
  const [isActive, setIsActive] = useState(false)
  const [checking, setChecking] = useState(true)
  // Bumped by "Check again" to re-run the activation check below.
  const [checkRun, setCheckRun] = useState(0)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    let cancelled = false
    let attempts = 0
    // 10x/3s = 30s. Longer than Stripe alone needs (its webhook is near-instant),
    // but the Google Play path's chain (RTDN → RevenueCat → our webhook) is
    // slower and less deterministic, especially in license-tester mode. Stripe
    // users just finish polling sooner — no behavior change for them.
    const maxAttempts = 10

    const poll = async () => {
      if (cancelled) return
      attempts++
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        setChecking(false)
        return
      }
      const { data: profile } = await supabase
        .from('profiles')
        .select('subscription_status')
        .eq('id', user.id)
        .single()

      if (profile?.subscription_status === 'active') {
        setIsActive(true)
        setChecking(false)
        return
      }

      if (attempts < maxAttempts) {
        setTimeout(poll, 3000)
      } else {
        setChecking(false)
      }
    }

    const run = async () => {
      // Store purchases: ask RevenueCat directly first rather than relying on
      // the webhook having landed. Failure is fine — polling still follows.
      if (Capacitor.isNativePlatform()) {
        try {
          await syncSubscription()
        } catch (err) {
          console.error('RevenueCat sync on success page failed:', err)
        }
      }
      poll()
    }

    run()
    return () => { cancelled = true }
  }, [checkRun])

  const handleCheckAgain = () => {
    setChecking(true)
    setCheckRun((n) => n + 1)
  }

  const unlocked = [
    '500+ exam-style questions',
    'All 11 board domains covered',
    'Detailed rationales for every answer',
    'Flashcards — reinforce weak areas with every missed question',
    'Unlimited practice sessions',
    'Performance tracking by topic',
  ]

  return (
    <main style={{
      minHeight: 'calc(100vh - 120px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fafaf8',
      padding: '40px 20px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 480,
        backgroundColor: '#ffffff',
        border: '1px solid #C5A46D',
        borderRadius: 4,
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        padding: '48px 40px',
        textAlign: 'center',
      }}>
        {/* Logo */}
        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '2px',
          color: '#C5A46D',
          marginBottom: 8,
        }}>
          RDH RISING
        </p>

        {/* Checkmark — only once the subscription is confirmed active */}
        <div style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          backgroundColor: isActive ? '#C5A46D' : '#e0d6c2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          fontSize: '1.75rem',
          color: '#fff',
        }}>
          {isActive ? '✓' : '…'}
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: '1.6rem',
          fontWeight: 'bold',
          letterSpacing: '1.5px',
          color: '#171717',
          marginBottom: 8,
        }}>
          {isActive ? "YOU'RE IN!" : checking ? 'ALMOST THERE' : 'STILL ACTIVATING'}
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: '0.95rem',
          color: '#555',
          marginBottom: 8,
          lineHeight: 1.5,
        }}>
          {isActive
            ? 'Your subscription is active.'
            : checking
              ? 'Activating your subscription…'
              : 'Your purchase went through, but your account is still activating.'}
        </p>
        <p style={{
          fontSize: '0.875rem',
          color: '#888',
          marginBottom: 36,
          lineHeight: 1.5,
        }}>
          {isActive
            ? 'Full access has been unlocked — everything you need to pass your board exam is ready.'
            : checking
              ? 'This usually takes just a few seconds.'
              : 'This can take a minute. Tap "Check again" below — you won\'t be charged twice.'}
        </p>

        {/* What they unlocked */}
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 36px 0',
          textAlign: 'left',
        }}>
          {unlocked.map((item) => (
            <li key={item} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              padding: '10px 0',
              borderBottom: '1px solid #f0ece4',
              fontSize: '0.9rem',
              color: '#333',
            }}>
              <span style={{ color: '#C5A46D', fontWeight: 'bold', flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>

        {/* CTA — "start practicing" only once the subscription is confirmed active */}
        {checking ? (
          <p style={{
            fontSize: '0.9rem',
            color: '#888',
            padding: '14px 0',
            letterSpacing: '0.5px',
          }}>
            Activating your account…
          </p>
        ) : !isActive ? (
          <>
            <button
              onClick={handleCheckAgain}
              style={primaryButton}
            >
              CHECK AGAIN
            </button>
            <a
              href="/board-pass"
              style={{ ...secondaryButton, marginTop: 12 }}
            >
              Continue to the app
            </a>
          </>
        ) : (
          <a
            href="/board-pass"
            style={primaryButton}
          >
            START PRACTICING NOW
          </a>
        )}

        <p style={{
          fontSize: '0.8rem',
          color: '#999',
          marginTop: 12,
        }}>
          {!Capacitor.isNativePlatform()
            ? 'Cancel anytime from your account settings'
            : Capacitor.getPlatform() === 'ios'
              ? 'Manage or cancel anytime in your App Store settings'
              : 'Manage or cancel anytime in your Google Play settings'}
        </p>
      </div>
    </main>
  )
}
