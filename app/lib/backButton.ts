'use client'

import { useEffect } from 'react'
import { App } from '@capacitor/app'

type BackHandler = () => boolean

const overrides: BackHandler[] = []
let listenerRegistered = false

// Wires up the hardware/gesture back button (native Android only). Screens
// can call useBackButtonOverride() to intercept the event first (e.g. to
// step back within an in-page view); otherwise it falls back to normal
// history navigation, or exits the app when there's nowhere left to go back to.
export function registerBackButtonListener() {
  if (listenerRegistered) return
  listenerRegistered = true
  App.addListener('backButton', ({ canGoBack }) => {
    const handler = overrides[overrides.length - 1]
    if (handler && handler()) return
    if (canGoBack) {
      window.history.back()
    } else {
      App.exitApp()
    }
  })
}

// Lets the calling component intercept the back button while it's mounted.
// Return true from `handler` to consume the event and skip the default
// history-back/exit-app behavior.
export function useBackButtonOverride(handler: BackHandler) {
  useEffect(() => {
    overrides.push(handler)
    return () => {
      const idx = overrides.lastIndexOf(handler)
      if (idx !== -1) overrides.splice(idx, 1)
    }
  }, [handler])
}
