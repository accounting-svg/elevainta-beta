'use client'

import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const signIn = async () => {
    setError(null)
    setLoading(true)

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })

    if (signInError) {
      setError(signInError.message)
      setLoading(false)
      return
    }

    router.push('/board-pass')
    router.refresh()
  }

  return (
    <main style={{
      minHeight: 'calc(100vh - 120px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fafaf8',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 400,
        padding: '40px 36px',
        backgroundColor: '#ffffff',
        border: '1px solid #C5A46D',
        borderRadius: 4,
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
      }}>
        <h1 style={{
          fontSize: '1.4rem',
          fontWeight: 'bold',
          letterSpacing: '1.5px',
          color: '#171717',
          textAlign: 'center',
          marginBottom: 6,
        }}>
          SIGN IN
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#C5A46D',
          fontSize: '0.85rem',
          letterSpacing: '1px',
          marginBottom: 28,
        }}>
          COACH ELEVÉ
        </p>

        <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '1px', color: '#555', marginBottom: 4 }}>
          EMAIL
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            display: 'block',
            width: '100%',
            padding: '10px 12px',
            marginBottom: 16,
            border: '1px solid #ddd',
            borderRadius: 3,
            fontSize: '0.95rem',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />

        <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '1px', color: '#555', marginBottom: 4 }}>
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && signIn()}
          style={{
            display: 'block',
            width: '100%',
            padding: '10px 12px',
            marginBottom: 24,
            border: '1px solid #ddd',
            borderRadius: 3,
            fontSize: '0.95rem',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />

        <button
          onClick={signIn}
          disabled={loading}
          className="gold-button"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: loading ? '#d4b98a' : '#C5A46D',
            color: '#fff',
            border: 'none',
            borderRadius: 3,
            fontSize: '0.9rem',
            fontWeight: 'bold',
            letterSpacing: '1.5px',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'SIGNING IN...' : 'SIGN IN'}
        </button>

        {error && (
          <p style={{ color: '#c0392b', fontSize: '0.85rem', marginTop: 14, textAlign: 'center' }}>
            {error}
          </p>
        )}

        <p style={{ textAlign: 'center', fontSize: '0.83rem', color: '#888', marginTop: 20 }}>
          Don&apos;t have an account?{' '}
          <a href="/signup" style={{ color: '#C5A46D', textDecoration: 'none', fontWeight: 600 }}>
            Create one
          </a>
        </p>
      </div>
    </main>
  )
}
