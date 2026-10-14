'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Capacitor } from '@capacitor/core'
import { registerBackButtonListener } from './lib/backButton'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      registerBackButtonListener()
    }

    // iOS app only: the web view runs edge to edge, under the status bar and
    // home indicator. Opt in to the safe-area insets and expose them through
    // --ios-safe-* variables. Web and Android never set these, so every
    // var(--ios-safe-*, 0px) below resolves to 0 there and nothing moves.
    if (Capacitor.getPlatform() === 'ios') {
      const viewport = document.querySelector('meta[name="viewport"]')
      const content = viewport?.getAttribute('content') ?? ''
      if (viewport && !content.includes('viewport-fit')) {
        viewport.setAttribute('content', `${content}, viewport-fit=cover`)
      }
      const root = document.documentElement.style
      root.setProperty('--ios-safe-top', 'env(safe-area-inset-top)')
      root.setProperty('--ios-safe-bottom', 'env(safe-area-inset-bottom)')
      root.setProperty('--ios-safe-left', 'env(safe-area-inset-left)')
      root.setProperty('--ios-safe-right', 'env(safe-area-inset-right)')
    }
  }, [])

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
        <meta name="google-site-verification" content="oRvC8FkniZPdM8v4eL3TN1PFz7ZnVTQyD99SYGvGol4" />
      </head>
      <body style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 'var(--ios-safe-left, 0px)',
        paddingRight: 'var(--ios-safe-right, 0px)',
      }}>
        {/* Top Branding Bar */}
        <header style={{
          padding: '15px 20px',
          paddingTop: 'calc(15px + var(--ios-safe-top, 0px))',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #C5A46D',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
          position: 'relative'
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
          <Link
            href="/settings"
            style={{
              position: 'absolute',
              right: 20,
              // Centered on the title row, below any status-bar inset
              top: 'calc(50% + var(--ios-safe-top, 0px) / 2)',
              transform: 'translateY(-50%)',
              color: '#666',
              textDecoration: 'none',
              fontSize: '0.8rem',
              letterSpacing: '0.5px'
            }}
          >
            Settings
          </Link>
        </header>

        {/* Main Content Area */}
        <div style={{ flex: 1 }}>
          {children}
        </div>

        {/* Subtle Footer */}
        <footer style={{
          padding: '20px',
          paddingBottom: 'calc(20px + var(--ios-safe-bottom, 0px))',
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
