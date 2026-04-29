'use client'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C9A84C" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Coach Elevé" />
        <link rel="apple-touch-icon" href="/icons/icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-167x167.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png" />
      </head>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Top Branding Bar */}
        <header style={{ 
          padding: '15px 20px', 
          backgroundColor: '#ffffff', 
          borderBottom: '1px solid #C5A46D',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ 
              fontSize: '1.2rem', 
              fontWeight: 'bold', 
              letterSpacing: '2px', 
              color: '#171717' 
            }}>
              COACH <span style={{ color: '#C5A46D' }}>ELEVÉ</span>
            </span>
          </div>
        </header>

        {/* Main Content Area */}
        <div style={{ flex: 1 }}>
          {children}
        </div>

        {/* Subtle Footer */}
        <footer style={{
          padding: '20px',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: '#666',
          opacity: 0.7
        }}>
          <div>The Board Blueprint • A Coach Elevé Experience</div>
          <div style={{ marginTop: 8, display: 'flex', justifyContent: 'center', gap: 16 }}>
            <a href="/terms" style={{ color: '#888', textDecoration: 'none' }}>Terms of Service</a>
            <span>•</span>
            <a href="/privacy" style={{ color: '#888', textDecoration: 'none' }}>Privacy Policy</a>
            <span>•</span>
            <a href="/refund" style={{ color: '#888', textDecoration: 'none' }}>Refund Policy</a>
            <span>•</span>
            <a href="/support" style={{ color: '#888', textDecoration: 'none' }}>Support</a>
          </div>
        </footer>
      </body>
    </html>
  )
}