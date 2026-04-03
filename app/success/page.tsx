export default function SuccessPage() {
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
          COACH ELEVÉ
        </p>

        {/* Checkmark */}
        <div style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          backgroundColor: '#C5A46D',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          fontSize: '1.75rem',
          color: '#fff',
        }}>
          ✓
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: '1.6rem',
          fontWeight: 'bold',
          letterSpacing: '1.5px',
          color: '#171717',
          marginBottom: 8,
        }}>
          YOU'RE IN!
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: '0.95rem',
          color: '#555',
          marginBottom: 8,
          lineHeight: 1.5,
        }}>
          Your subscription is active.
        </p>
        <p style={{
          fontSize: '0.875rem',
          color: '#888',
          marginBottom: 36,
          lineHeight: 1.5,
        }}>
          Full access has been unlocked — everything you need to pass your board exam is ready.
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

        {/* CTA */}
        <a
          href="/board-pass"
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
          START PRACTICING NOW
        </a>

        <p style={{
          fontSize: '0.8rem',
          color: '#999',
          marginTop: 12,
        }}>
          Cancel anytime from your account settings
        </p>
      </div>
    </main>
  )
}
