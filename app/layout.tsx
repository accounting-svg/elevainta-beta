'use client'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
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
          The Board Blueprint • A Coach Elevé Experience
        </footer>
      </body>
    </html>
  )
}