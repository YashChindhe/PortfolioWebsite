import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import ConsistencyDashboard from './components/ConsistencyDashboard'
import Recommendations from './components/Recommendations'
import Education from './components/Education'
import Publications from './components/Publications'
import Leadership from './components/Leadership'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      {/* Sticky navbar + scrollable content in padded container */}
      <div style={{ paddingLeft: 'clamp(16px, 5vw, 80px)', paddingRight: 'clamp(16px, 5vw, 80px)' }}>
        <Navbar />
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <ConsistencyDashboard />
        <Recommendations />
        <Education />
        <Publications />
        <Leadership />
        <Certifications />
      </div>
      {/* Footer breaks out of padding to be full-width */}
      <Footer />
    </div>
  )
}

export default App
