import React, { useState, useEffect, useCallback } from 'react'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  // Initialize active section on mount
  useEffect(() => {
    // Start with hero as active when page loads at the top
    const checkInitialPosition = () => {
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'contact']
      const headerHeight = 80
      
      // If we're at the very top, show hero as active
      if (window.scrollY < 100) {
        setActiveSection('hero')
        return
      }

      let foundActive = false
      for (const sectionId of sections.slice(1)) { // Skip hero, check others
        const element = document.getElementById(sectionId)
        if (element) {
          const elementTop = element.offsetTop - headerHeight - 100
          if (window.scrollY >= elementTop) {
            setActiveSection(sectionId)
            foundActive = true
          }
        }
      }

      if (!foundActive) {
        setActiveSection('hero') // Default to hero if no other section
      }
    }
    
    checkInitialPosition()
    // Small delay to ensure DOM is ready
    setTimeout(checkInitialPosition, 100)
  }, [])

  // Enhanced scroll detection with section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'contact']
      const headerHeight = 80
      const buffer = 150 // Buffer zone for section detection
      
      // If we're at the very top, show hero as active
      if (window.scrollY < 100) {
        setActiveSection('hero')
        return
      }
      
      // Check each section and set the active one based on scroll position
      let currentActiveSection = 'hero' // Default to hero
      
      for (let i = 1; i < sections.length; i++) { // Start from 1 to skip hero
        const element = document.getElementById(sections[i])
        if (element) {
          const elementTop = element.offsetTop - headerHeight - buffer
          const nextElement = i < sections.length - 1 ? document.getElementById(sections[i + 1]) : null
          const elementBottom = nextElement 
            ? nextElement.offsetTop - headerHeight - buffer
            : document.body.scrollHeight
          
          // If we're within the section bounds, set it as active
          if (window.scrollY >= elementTop && window.scrollY < elementBottom) {
            currentActiveSection = sections[i]
            break
          }
        }
      }
      
      setActiveSection(currentActiveSection)
    }

    handleScroll() // Run once on mount
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Enhanced intersection observer for better section detection
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-100px 0px -50% 0px', // Better margins for accurate detection
      threshold: [0.1, 0.5] // Multiple thresholds
    }

    const observer = new IntersectionObserver((entries) => {
      // Special handling for hero section
      const heroEntry = entries.find(entry => entry.target.id === 'hero')
      if (heroEntry && heroEntry.isIntersecting && window.scrollY < 200) {
        setActiveSection('hero')
        return
      }

      let mostVisibleSection = null
      let maxRatio = 0

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          
          // Track all navigation sections
          if (['hero', 'about', 'education', 'skills', 'projects', 'contact'].includes(sectionId)) {
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio
              mostVisibleSection = sectionId
            }
          }
        }
      })

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection)
      }
    }, observerOptions)

    // Observe all navigation sections including hero
    const sections = ['hero', 'about', 'education', 'skills', 'projects', 'contact']
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  // Simple reliable scroll function
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    // For hero section, scroll to top of page
    if (sectionId === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setActiveSection('')
      return
    }

    // Calculate proper scroll position
    const headerHeight = 80 // Fixed header height
    const extraOffset = 30 // Additional spacing for better visual separation
    
    // Get the element's position relative to the document
    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const elementTop = rect.top + scrollTop
    
    const targetPosition = elementTop - headerHeight - extraOffset

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth'
    })

    // Set active section immediately for better UX
    setActiveSection(sectionId)

    // Close mobile menu
    setIsMobileMenuOpen(false)
  }, [])

  // Simple mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 h-20 ${
        isScrolled 
          ? 'bg-black' 
          : 'bg-black/80'
      }`}
    >
      <nav className="container h-full px-6 py-4 mx-auto">
        <div className="flex items-center justify-between h-full">
          {/* Simple clean logo */}
          <div 
            className="text-xl font-bold text-white cursor-pointer"
            onClick={() => scrollToSection('hero')}
            role="button"
            aria-label="Scroll to top"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && scrollToSection('hero')}
          >
            <span className="tracking-wide">
              Lithira Silva
            </span>
          </div>

          {/* Clean Desktop Navigation */}
          <ul className="items-center hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none rounded-md ${
                    activeSection === item.id
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                  {/* Active indicator underline */}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white rounded-full"></div>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Simple Mobile Menu Button */}
          <button
            className="p-2 text-white md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="flex flex-col items-center justify-center w-6 h-6">
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></div>
            </div>
          </button>
        </div>

        {/* Simple Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-4 mt-4">
            <div className="p-4 bg-black border-t border-white/10">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`relative flex items-center justify-between w-full text-left py-3 px-4 text-base transition-all duration-200 focus:outline-none rounded-md ${
                        activeSection === item.id
                          ? 'text-white bg-white/10'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      <span>{item.label}</span>
                      {/* Active indicator dot */}
                      {activeSection === item.id && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
