'use client'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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