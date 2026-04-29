export default function RefundPage() {
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
          Refund &amp; Cancellation Policy
        </h1>
        <p style={{ fontSize: '0.8rem', color: dim, letterSpacing: '1px' }}>
          Effective Date: April 29, 2026
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 80px' }}>

        <Section title="1. Subscription Cancellation" gold={gold}>
          You may cancel your Coach Elevé subscription at any time. Upon cancellation:
          <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: '2' }}>
            <li>Access to paid features continues through the end of your current billing period.</li>
            <li>Your study history and account data are preserved and accessible if you resubscribe.</li>
            <li>No further charges will be made after the billing period ends.</li>
          </ul>
        </Section>

        <Section title="2. Refund Policy" gold={gold}>
          All subscription payments are non-refundable. Exceptions are made only in the following circumstances:
          <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: '2' }}>
            <li>A duplicate charge was made in error.</li>
            <li>Your account was charged after a confirmed cancellation.</li>
            <li>An extended technical outage prevented access to the Service for a significant portion of your billing period.</li>
          </ul>
          To request a refund under one of these exceptions, contact <EmailLink email="support@elevainta.com" gold={gold} /> within 7 days of the charge. Include your account email and a description of the issue.
        </Section>

        {/* Fail-Free Guarantee — highlighted box */}
        <div style={{ border: `1px solid ${gold}`, borderRadius: 4, padding: '28px 28px', marginBottom: 40 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: gold, fontWeight: 600, marginBottom: 12, letterSpacing: '0.5px' }}>
            3. Fail-Free Guarantee
          </h2>
          <div style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#C8BEA8' }}>
            <p style={{ marginBottom: 12 }}>
              The Fail-Free Guarantee is <strong style={{ color: '#FFFFFF' }}>not a refund</strong>. It is a service extension offered as a commitment to your success.
            </p>
            <p style={{ marginBottom: 12 }}>
              If you are an active paid subscriber and you fail the NBDHE examination, you are eligible to receive <strong style={{ color: gold }}>2 additional months of Coach Elevé access at no charge</strong>.
            </p>
            <p style={{ marginBottom: 0 }}>
              For full eligibility requirements, submission instructions, and conditions, see{' '}
              <a href="/terms" style={{ color: gold, textDecoration: 'underline' }}>Terms of Service, Section 6</a>. To claim, email <EmailLink email="support@elevainta.com" gold={gold} /> with your official NBDHE score report within 30 days of your exam date.
            </p>
          </div>
        </div>

        <Section title="4. Free Tier" gold={gold}>
          The free tier of Coach Elevé involves no payment and is not subject to this Refund and Cancellation Policy.
        </Section>

        <Section title="5. Plan Changes" gold={gold}>
          <ul style={{ marginTop: 0, paddingLeft: 20, lineHeight: '2' }}>
            <li><strong style={{ color: gold }}>Upgrades</strong> are applied immediately. You will be charged a prorated amount for the remainder of the current billing period.</li>
            <li><strong style={{ color: gold }}>Downgrades</strong> take effect at the start of your next billing period. No partial refunds are issued for the difference in plan cost.</li>
          </ul>
        </Section>

        <Section title="6. Contact" gold={gold}>
          For billing questions or to submit a refund request, contact us at <EmailLink email="support@elevainta.com" gold={gold} />. We respond to all billing inquiries within 2 business days.
        </Section>

        <LegalFooter gold={gold} current="refund" />
      </div>
    </main>
  )
}

function Section({ title, children, gold }: { title: string; children: React.ReactNode; gold: string }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: gold, fontWeight: 600, marginBottom: 12, letterSpacing: '0.5px' }}>
        {title}
      </h2>
      <div style={{ fontSize: '0.95rem', lineHeight: '1.8', color: '#C8BEA8' }}>
        {children}
      </div>
    </div>
  )
}

function EmailLink({ email, gold }: { email: string; gold: string }) {
  return <a href={`mailto:${email}`} style={{ color: gold, textDecoration: 'underline' }}>{email}</a>
}

function LegalFooter({ gold, current }: { gold: string; current: string }) {
  const links = [
    { href: '/terms', label: 'Terms of Service', key: 'terms' },
    { href: '/privacy', label: 'Privacy Policy', key: 'privacy' },
    { href: '/refund', label: 'Refund Policy', key: 'refund' },
  ]
  return (
    <div style={{ borderTop: '1px solid #2A2820', paddingTop: 32, marginTop: 48, textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 16 }}>
        {links.filter(l => l.key !== current).map(l => (
          <a key={l.key} href={l.href} style={{ color: gold, textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.5px' }}>
            {l.label}
          </a>
        ))}
        <a href="mailto:support@elevainta.com" style={{ color: gold, textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.5px' }}>
          support@elevainta.com
        </a>
      </div>
      <p style={{ fontSize: '0.75rem', color: '#5A5040' }}>© 2026 Elevanta Inc. All rights reserved.</p>
    </div>
  )
}
