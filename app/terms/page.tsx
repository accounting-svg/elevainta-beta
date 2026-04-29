export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p style={{ fontSize: '0.8rem', color: dim, letterSpacing: '1px' }}>
          Effective Date: April 29, 2026
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 80px' }}>

        <Section title="1. Acceptance of Terms" gold={gold}>
          By accessing or using Coach Elevé, you agree to be bound by these Terms of Service. Coach Elevé is a product of Elevanta Inc. If you do not agree to these terms, you may not use the platform.
        </Section>

        <Section title="2. Description of Service" gold={gold}>
          Coach Elevé is a National Board Dental Hygiene Examination (NBDHE) board preparation platform. The platform provides practice questions, weak area tracking, and flashcard tools to assist candidates preparing for the NBDHE.
        </Section>

        <Section title="3. Eligibility" gold={gold}>
          You must be at least 18 years of age to create an account or use the Service. By registering, you represent and warrant that you meet this requirement.
        </Section>

        <Section title="4. Account Registration" gold={gold}>
          You must create an account before accessing paid features. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.
        </Section>

        <Section title="5. Subscription Plans" gold={gold}>
          Coach Elevé offers the following plans:
          <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: '2' }}>
            <li><strong style={{ color: gold }}>Free</strong> — Access to 50 practice questions, no credit card required.</li>
            <li><strong style={{ color: gold }}>Student Mode</strong> — $19.99/month. Full question bank access with study tracking.</li>
            <li><strong style={{ color: gold }}>Board Prep Only</strong> — $49.00/month. Focused NBDHE preparation features.</li>
            <li><strong style={{ color: gold }}>Full Access Bundle</strong> — $59.99/month. Complete access to all platform features.</li>
          </ul>
          Prices are in USD and subject to change with notice. Subscriptions renew automatically unless cancelled.
        </Section>

        <Section title="6. Fail-Free Guarantee" gold={gold}>
          An active paid subscriber who fails the NBDHE examination may request two (2) months of complimentary service extension under the following conditions:
          <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: '2' }}>
            <li>The subscriber must submit an official NBDHE score report to Elevanta Inc within 30 days of the examination date.</li>
            <li>The guarantee is limited to one (1) use per account.</li>
            <li>The subscriber must be on an active paid plan at the time of the examination.</li>
          </ul>
          This is a service extension, not a monetary refund. To claim, email <EmailLink email="support@elevainta.com" gold={gold} /> with your score report attached.
        </Section>

        <Section title="7. Refund Policy" gold={gold}>
          All subscription payments are non-refundable except in cases of verifiable billing errors. If you believe a billing error has occurred, contact <EmailLink email="support@elevainta.com" gold={gold} /> within 7 days of the charge. See our{' '}
          <a href="/refund" style={{ color: gold, textDecoration: 'underline' }}>Refund and Cancellation Policy</a> for full details.
        </Section>

        <Section title="8. Intellectual Property" gold={gold}>
          All content on Coach Elevé, including but not limited to practice questions, rationales, graphics, and software, is owned by Elevanta Inc and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without prior written permission.
        </Section>

        <Section title="9. Acceptable Use" gold={gold}>
          You agree not to:
          <ul style={{ marginTop: 12, paddingLeft: 20, lineHeight: '2' }}>
            <li>Share your account credentials with any other person.</li>
            <li>Scrape, harvest, or systematically extract content from the platform.</li>
            <li>Use the Service for any unlawful purpose or in violation of any applicable law or regulation.</li>
          </ul>
        </Section>

        <Section title="10. Disclaimer of Warranties" gold={gold}>
          The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. Elevanta Inc does not guarantee that use of the platform will result in passing the NBDHE or any other examination.
        </Section>

        <Section title="11. Limitation of Liability" gold={gold}>
          To the fullest extent permitted by law, Elevanta Inc shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of the Service. Elevanta Inc's total liability to you for any claim shall not exceed the total amount you paid in the three (3) months preceding the claim.
        </Section>

        <Section title="12. Changes to Terms" gold={gold}>
          Elevanta Inc reserves the right to modify these Terms at any time. We will notify you of material changes via email or an in-app notice. Continued use of the Service after notice constitutes acceptance of the updated Terms.
        </Section>

        <Section title="13. Governing Law" gold={gold}>
          These Terms are governed by the laws of the state in which Elevanta Inc is incorporated, without regard to conflict of law principles.
        </Section>

        <Section title="14. Contact" gold={gold}>
          For questions about these Terms, contact us at <EmailLink email="support@elevainta.com" gold={gold} />.
        </Section>

        <LegalFooter gold={gold} current="terms" />
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
