// components/ConversionTracker.js
'use client'

import { useEffect } from 'react'

export default function ConversionTracker() {
  useEffect(() => {
    window.gtag?.('event', 'conversion', {
      send_to: 'AW-17050234458/B6_9CJvTnfgaENrcl8I_',
    })
  }, [])

  return null // pas d'affichage
}
