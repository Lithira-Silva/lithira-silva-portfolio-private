import React, { useState, useEffect, useCallback } from 'react'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  // Simple scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Simple intersection observer
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe all sections
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

    const headerHeight = 80
    const elementPosition = element.offsetTop - headerHeight

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })

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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled 
          ? 'bg-black' 
          : 'bg-black/80'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
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
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Simple Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
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
          <div className="mt-4 pb-4">
            <div className="bg-black border-t border-white/10 p-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left py-3 px-4 text-base transition-colors duration-200 focus:outline-none ${
                        activeSection === item.id
                          ? 'text-white'
                          : 'text-white/70 hover:text-white'
                      }`}
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      {item.label}
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
