'use client'

import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // Scroll to top when component mounts (page loads/refreshes)
    window.scrollTo(0, 0)
    
    // Also prevent browser from restoring scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  return null // This component doesn't render anything
} 