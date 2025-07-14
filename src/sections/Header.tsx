import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Simple Logo */}
          <div 
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Lithira Silva
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 font-medium focus:outline-none"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className="w-6 h-0.5 bg-current"></div>
              <div className="w-6 h-0.5 bg-current mt-1"></div>
              <div className="w-6 h-0.5 bg-current mt-1"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left p-2 text-gray-300 focus:outline-none"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
