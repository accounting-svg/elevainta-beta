'use client'
import { useStorePrice } from '../lib/useStorePrice'

// The headline price on the upgrade page: fixed "$49" on web, the store's
// localized price in the native apps ("…" while it loads).
export default function PriceDisplay() {
  const { isNative, price } = useStorePrice()

  return (
    <>
      <span style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#171717',
        letterSpacing: '1px',
      }}>
        {isNative ? (price ?? '…') : '$49'}
      </span>
      <span style={{
        fontSize: '1rem',
        color: '#888',
        marginLeft: 4,
      }}>
        / month
      </span>
    </>
  )
}
