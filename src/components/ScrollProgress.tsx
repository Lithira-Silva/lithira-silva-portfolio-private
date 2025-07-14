import React, { useState, useEffect } from 'react'

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <>
      {/* Main scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-white/60 via-white/80 to-white/60 transition-all duration-150 ease-out relative overflow-hidden"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
        </div>
      </div>
      
      {/* Side scroll indicator */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-white/10 rounded-full z-40 hidden lg:block">
        <div 
          className="w-full bg-gradient-to-b from-white/60 to-white/40 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
          style={{ height: `${scrollProgress}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
        </div>
      </div>
    </>
  )
}

export default ScrollProgress
