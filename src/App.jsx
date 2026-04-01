import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Recommendations from './components/Recommendations'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      {/* Sticky navbar + scrollable content in padded container */}
      <div style={{ paddingLeft: 'clamp(16px, 5vw, 80px)', paddingRight: 'clamp(16px, 5vw, 80px)' }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Publications />
        <Recommendations />
        <Work />
      </div>
      {/* Footer breaks out of padding to be full-width */}
      <Footer />
    </div>
  )
}

export default App
