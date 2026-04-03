'use client'

export default function UpgradePage() {
  const features = [
    { label: '500+ exam-style questions' },
    { label: 'All 11 board domains covered' },
    { label: 'Detailed rationales for every answer' },
    { label: 'Opportunity Vault — curated board opportunity database' },
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
        <a
          href="https://buy.stripe.com/aFabIUfj292T0VnaxEeAg00"
          style={{
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
          }}
        >
          SUBSCRIBE FOR $49/MONTH
        </a>

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
