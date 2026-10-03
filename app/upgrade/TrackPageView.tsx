'use client'

import { useEffect } from 'react'
import { trackEvent } from '../lib/trackEvent'

export default function TrackPageView() {
  useEffect(() => {
    trackEvent('upgrade_page_viewed')
  }, [])

  return null
}
