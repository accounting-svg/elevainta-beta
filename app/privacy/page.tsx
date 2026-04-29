export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ fontSize: '0.8rem', color: dim, letterSpacing: '1px' }}>
          Effective Date: April 29, 2026
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 80px' }}>

        <Section title="1. Overview" gold={gold}>
          Elevanta Inc operates Coach Elevé, an NBDHE board preparation platform. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our Service.
        </Section>

        <Section title="2. Information We Collect" gold={gold}>
          We collect the following categories of information:
          <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: '2' }}>
            <li><strong style={{ color: gold }}>Account Information</strong> — Name, email address, and password.</li>
            <li><strong style={{ color: gold }}>Payment Information</strong> — Processed and stored securely by Stripe. Elevanta Inc does not store raw card data.</li>
            <li><strong style={{ color: gold }}>Study Activity</strong> — Questions answered, scores, weak areas, and session history.</li>
            <li><strong style={{ color: gold }}>Subscription Status</strong> — Your current plan and billing period.</li>
            <li><strong style={{ color: gold }}>Technical Information</strong> — Device type, browser, IP address, and access timestamps.</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information" gold={gold}>
          We use the information we collect to:
          <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: '2' }}>
            <li>Provide and operate the Coach Elevé platform.</li>
            <li>Personalize your study experience and surface weak areas.</li>
            <li>Process subscription payments through Stripe.</li>
            <li>Send transactional emails such as receipts and account notifications.</li>
            <li>Respond to support requests and inquiries.</li>
            <li>Analyze aggregate usage patterns to improve the Service.</li>
            <li>Comply with applicable legal obligations.</li>
          </ul>
        </Section>

        <Section title="4. Data Storage" gold={gold}>
          Your data is stored on Supabase infrastructure with encryption at rest and in transit. Payment data is handled exclusively by Stripe and is subject to Stripe's Privacy Policy. Elevanta Inc does not store raw payment card information on its servers.
        </Section>

        <Section title="5. Data Sharing" gold={gold}>
          We do not sell your personal data. We share your information only with the following service providers, each bound by confidentiality obligations:
          <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: '2' }}>
            <li><strong style={{ color: gold }}>Stripe</strong> — Payment processing.</li>
            <li><strong style={{ color: gold }}>Supabase</strong> — Database and authentication infrastructure.</li>
            <li><strong style={{ color: gold }}>Vercel</strong> — Application hosting and delivery.</li>
            <li>Other confidential service providers as necessary to operate the platform.</li>
          </ul>
        </Section>

        <Section title="6. Your Rights" gold={gold}>
          You have the right to:
          <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: '2' }}>
            <li>Access the personal data we hold about you.</li>
            <li>Correct inaccurate or incomplete information.</li>
            <li>Request deletion of your personal data.</li>
            <li>Opt out of non-essential communications.</li>
          </ul>
          To exercise any of these rights, contact <EmailLink email="support@elevainta.com" gold={gold} />.
        </Section>

        <Section title="7. Data Retention" gold={gold}>
          We retain your data for as long as your account is active. Upon account deletion, your personal data will be deleted within 30 days, except where retention is required by law.
        </Section>

        <Section title="8. Children's Privacy" gold={gold}>
          Coach Elevé is not intended for individuals under the age of 18. We do not knowingly collect personal information from anyone under 18. If we become aware that a minor has provided us with personal data, we will delete it promptly.
        </Section>

        <Section title="9. Cookies" gold={gold}>
          We use only essential cookies necessary for authentication and core platform functionality. We do not use advertising cookies or third-party tracking cookies.
        </Section>

        <Section title="10. California Privacy Rights (CCPA)" gold={gold}>
          If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA). Elevanta Inc does not sell personal information as defined under the CCPA. To submit a privacy request, email <EmailLink email="support@elevainta.com" gold={gold} />.
        </Section>

        <Section title="11. Changes to This Policy" gold={gold}>
          We may update this Privacy Policy from time to time. We will notify you of material changes via email or an in-app notice before the changes take effect.
        </Section>

        <Section title="12. Contact" gold={gold}>
          For questions about this Privacy Policy, contact us at <EmailLink email="support@elevainta.com" gold={gold} />.
        </Section>

        <LegalFooter gold={gold} current="privacy" />
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
