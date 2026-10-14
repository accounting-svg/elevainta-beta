'use client'
import { useEffect, useState } from 'react'
import { Capacitor } from '@capacitor/core'
import { createBrowserClient } from '@supabase/ssr'
import { getStorePriceString } from './revenuecat'

// One lookup per page load, shared by every component showing the price —
// several mounting at once must not each configure RevenueCat in parallel.
let pricePromise: Promise<string | null> | null = null

async function loadPrice(): Promise<string | null> {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null
  return getStorePriceString(user.id)
}

// Native apps show the store's real localized price; web keeps the fixed
// Stripe price. On native, `price` stays null until it loads (or if it can't
// be loaded) — callers then show no price rather than a possibly-wrong one.
export function useStorePrice(): { isNative: boolean; price: string | null } {
  const isNative = Capacitor.isNativePlatform()
  const [price, setPrice] = useState<string | null>(null)

  useEffect(() => {
    if (!isNative) return
    let cancelled = false
    if (!pricePromise) {
      pricePromise = loadPrice().catch((err) => {
        console.error('Could not load store price:', err)
        pricePromise = null
        return null
      })
    }
    pricePromise.then((p) => {
      if (!cancelled) setPrice(p)
    })
    return () => { cancelled = true }
  }, [isNative])

  return { isNative, price }
}
