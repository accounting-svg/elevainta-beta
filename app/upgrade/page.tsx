import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import { redirect } from 'next/navigation'
import SubscribeButton from './SubscribeButton'

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/aFabIUfj292T0VnaxEeAg00'

export default async function UpgradePage() {
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Pass the Supabase user ID via client_reference_id so the webhook can
  // reliably link the Stripe customer to the correct Supabase account.
  const stripeUrl = `${STRIPE_PAYMENT_LINK}?client_reference_id=${user.id}&prefilled_email=${encodeURIComponent(user.email ?? '')}`

  const features = [
    { label: '500+ exam-style questions' },
    { label: 'All 11 board domains covered' },
    { label: 'Detailed rationales for every answer' },
    { label: 'Flashcards — reinforce weak areas with every missed question' },
    { label: 'Unlimited practice sessions' },
    { label: 'Performance tracking by topic' },
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
      }}>
        {/* Header */}
        <p style={{
          textAlign: 'center',
          fontSize: '0.75rem',
          letterSpacing: '2px',
          color: '#C5A46D',
          marginBottom: 8,
        }}>
          COACH ELEVÉ
        </p>
        <h1 style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          letterSpacing: '1.5px',
          color: '#171717',
          marginBottom: 8,
        }}>
          UNLOCK FULL ACCESS
        </h1>
        <p style={{
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#666',
          marginBottom: 36,
          lineHeight: 1.5,
        }}>
          Everything you need to pass your board exam with confidence.
        </p>

        {/* Feature list */}
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 36px 0',
        }}>
          {features.map((f) => (
            <li key={f.label} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              padding: '10px 0',
              borderBottom: '1px solid #f0ece4',
              fontSize: '0.9rem',
              color: '#333',
            }}>
              <span style={{ color: '#C5A46D', fontWeight: 'bold', flexShrink: 0 }}>✓</span>
              {f.label}
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div style={{
          textAlign: 'center',
          marginBottom: 20,
        }}>
          <span style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#171717',
            letterSpacing: '1px',
          }}>
            $49
          </span>
          <span style={{
            fontSize: '1rem',
            color: '#888',
            marginLeft: 4,
          }}>
            / month
          </span>
        </div>

        {/* CTA Button */}
        <SubscribeButton stripeUrl={stripeUrl} userId={user.id} />

        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#999', marginTop: 12, lineHeight: 1.6 }}>
          By subscribing, you agree to our{' '}
          <a href="/terms" style={{ color: '#C9A84C', textDecoration: 'none' }}>Terms of Service</a> and{' '}
          <a href="/refund" style={{ color: '#C9A84C', textDecoration: 'none' }}>Refund Policy</a>.
        </p>

        <p style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          color: '#999',
          marginTop: 12,
        }}>
          Cancel anytime from your account
        </p>
      </div>
    </main>
  )
}
