export default function SupportPage() {
  const gold = '#C9A84C'
  const dim = '#A89060'

  return (
    <main style={{ backgroundColor: '#0F0E0C', minHeight: '100vh', color: '#E8E0D0', fontFamily: 'Georgia, serif' }}>
      {/* Page Header */}
      <div style={{ borderBottom: `1px solid ${gold}`, padding: '48px 24px 36px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '3px', color: dim, marginBottom: 12, textTransform: 'uppercase' }}>
          Elevanta Inc
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 12, letterSpacing: '1px' }}>
          Support
        </h1>
        <p style={{ fontSize: '0.9rem', color: dim, letterSpacing: '0.5px' }}>
          We are here to help
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* Contact Us */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: gold, fontWeight: 600, marginBottom: 12, letterSpacing: '0.5px' }}>
            Contact Us
          </h2>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#C8BEA8' }}>
            For any questions, billing issues, or technical problems, email us at{' '}
            <a href="mailto:support@elevainta.com" style={{ color: gold, textDecoration: 'underline' }}>support@elevainta.com</a>.
            {' '}We respond within 2 business days.
          </p>
        </div>

        {/* Fail-Free Guarantee — gold border box */}
        <div style={{ border: `1px solid ${gold}`, borderRadius: 4, padding: '28px', marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: gold, fontWeight: 600, marginBottom: 12, letterSpacing: '0.5px' }}>
            Fail-Free Guarantee
          </h2>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#C8BEA8', margin: 0 }}>
            If you held an active paid subscription, sat for the NBDHE, and did not pass, you are eligible for 2 months of free access.
            To claim, email{' '}
            <a href="mailto:support@elevainta.com" style={{ color: gold, textDecoration: 'underline' }}>support@elevainta.com</a>
            {' '}with your account email and official NBDHE score report. Claims are processed within 5 business days.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: gold, fontWeight: 600, marginBottom: 24, letterSpacing: '0.5px' }}>
            Frequently Asked Questions
          </h2>

          <FAQ
            question="How do I cancel my subscription?"
            answer="Log into your account, go to settings, and select Cancel Subscription. Your access continues until the end of your billing period."
            gold={gold}
          />
          <FAQ
            question="How do I reset my password?"
            answer="On the login page, click Forgot Password and follow the instructions sent to your email."
            gold={gold}
          />
          <FAQ
            question="What is included in the free tier?"
            answer="50 practice questions, weak area identification, and automatic flashcard generation. No credit card required."
            gold={gold}
          />
          <FAQ
            question="How do I upgrade my plan?"
            answer="Log into your account and go to settings to view and change your subscription plan."
            gold={gold}
          />
          <FAQ
            question="I was charged after cancelling. What do I do?"
            answer={
              <>
                Email{' '}
                <a href="mailto:support@elevainta.com" style={{ color: gold, textDecoration: 'underline' }}>support@elevainta.com</a>
                {' '}within 7 days of the charge with your account email and the charge date.
              </>
            }
            gold={gold}
          />
        </div>

        <LegalFooter gold={gold} />
      </div>
    </main>
  )
}

function FAQ({ question, answer, gold }: { question: string; answer: React.ReactNode; gold: string }) {
  return (
    <div style={{ borderBottom: '1px solid #2A2820', padding: '20px 0' }}>
      <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#E8E0D0', marginBottom: 8 }}>
        {question}
      </p>
      <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: '#C8BEA8', margin: 0 }}>
        {answer}
      </p>
    </div>
  )
}

function LegalFooter({ gold }: { gold: string }) {
  return (
    <div style={{ borderTop: '1px solid #2A2820', paddingTop: 32, marginTop: 48, textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 16 }}>
        <a href="/terms" style={{ color: gold, textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.5px' }}>Terms of Service</a>
        <a href="/privacy" style={{ color: gold, textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.5px' }}>Privacy Policy</a>
        <a href="/refund" style={{ color: gold, textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.5px' }}>Refund Policy</a>
        <a href="mailto:support@elevainta.com" style={{ color: gold, textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.5px' }}>support@elevainta.com</a>
      </div>
      <p style={{ fontSize: '0.75rem', color: '#5A5040' }}>© 2026 Elevanta Inc. All rights reserved.</p>
    </div>
  )
}
