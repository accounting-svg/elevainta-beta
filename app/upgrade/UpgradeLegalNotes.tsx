'use client'
import { Capacitor } from '@capacitor/core'

// The legal lines under the upgrade buttons. Web keeps them exactly as before;
// the native apps drop the Refund Policy link and the "Cancel anytime" line,
// since store purchases are refunded and canceled through Apple or Google.
export default function UpgradeLegalNotes() {
  const isNative = Capacitor.isNativePlatform()

  return (
    <>
      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#999', marginTop: 12, lineHeight: 1.6 }}>
        By subscribing, you agree to our{' '}
        <a href="/terms" style={{ color: '#C9A84C', textDecoration: 'none' }}>Terms of Service</a>
        {isNative ? '.' : <>
          {' '}and{' '}
          <a href="/refund" style={{ color: '#C9A84C', textDecoration: 'none' }}>Refund Policy</a>.
        </>}
      </p>

      {!isNative && (
        <p style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          color: '#999',
          marginTop: 12,
        }}>
          Cancel anytime from your account
        </p>
      )}
    </>
  )
}
