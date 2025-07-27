import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import { HiEye, HiMail } from 'react-icons/hi'

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = [
    'Full Stack Developer',
    'Artificial Intelligence Enthusiast',
    'UI/UX Designer & Developer',
    'Mobile App Developer'
  ]

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayedText !== currentRole) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1))
      }, 100) // Typing speed
    } else if (!isDeleting && displayedText === currentRole) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000) // Pause duration
    } else if (isDeleting && displayedText !== '') {
      // Deleting effect
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1))
      }, 50) // Deleting speed (faster)
    } else if (isDeleting && displayedText === '') {
      // Move to next role
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRoleIndex, roles])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <div className="animate-slide-up mb-6">
            <p className="text-xl md:text-2xl text-contrast-soft mb-2 font-sans">Hello, I am</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white font-heading">
              <span className="text-white text-shadow-warm filter brightness-110">
                Lithira Silva
              </span>
            </h1>
          </div>

          {/* Subtitle with Typing Animation */}
          <div className="text-xl md:text-2xl text-contrast-soft mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200 font-heading font-light opacity-90">
            <span>Aspiring </span>
            <span 
              className="text-secondary-accessible text-shadow-warm font-medium"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #ea580c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'brightness(1.1) contrast(1.1)'
              }}
            >
              {displayedText}
              <span className="animate-pulse text-secondary ml-1">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-contrast-soft mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400 font-sans leading-relaxed opacity-80">
            I create digital experiences that are beautiful, functional, and user-centered. 
            Passionate about modern web technologies and clean code.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-600">
            <Button
              variant="primary"
              size="large"
              onClick={() => scrollToSection('projects')}
            >
              <span className="flex items-center gap-2">
                <HiEye className="w-5 h-5" />
                View My Work
              </span>
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={() => scrollToSection('contact')}
            >
              <span className="flex items-center gap-2">
                <HiMail className="w-5 h-5" />
                Get In Touch
              </span>
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6 animate-slide-up animation-delay-800">
            <a
              href="https://github.com/lithirasilva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-all duration-300 transform hover:scale-110 icon-hover"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/lithirasilva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-all duration-300 transform hover:scale-110 icon-hover"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-secondary transition-all duration-300 transform hover:scale-110 icon-hover"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Hero
