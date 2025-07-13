import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Footer from './sections/Footer'
import StarField from './components/StarField'
import './styles/globals.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white transition-colors duration-300">
      <StarField />
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
