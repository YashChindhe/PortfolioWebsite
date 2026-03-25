import React, { useState } from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects'

const Work = () => {
  const [activeCard, setActiveCard] = useState(null)

  const handleCardClick = (e, index) => {
    // On devices roughly less than LG (desktop styling breakpoint)
    if (window.innerWidth < 1024) {
      if (activeCard !== index) {
        e.preventDefault()
        setActiveCard(index)
      }
    }
  }

  return (
    <section id="work" style={{ marginTop: 'clamp(80px, 15vh, 200px)', marginBottom: 'clamp(80px, 15vh, 200px)' }}>
      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden w-full">

      {/* Header: 'work.' left, 'Show More' right */}
      <div
        className="flex items-center justify-between border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
      >
        <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>work.</span>
      </div>

      <div
        className="work-grid"
        style={{ gap: 'clamp(6px, 0.8vw, 12px)' }}
      >
        {projects.map((project, i) => {
          const isActive = activeCard === i
          return (
          <motion.a
            key={i}
            href={project.link}
            onClick={(e) => handleCardClick(e, i)}
            className="work-card group block relative overflow-hidden bg-black/5 dark:bg-white/5 w-full h-full transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-[1.04] ${isActive ? 'scale-[1.04]' : 'scale-100'}`}
            />
            {/* Hover overlay */}
            <div className={`absolute inset-0 transition-all duration-500 flex items-end ${isActive ? 'bg-black/45 backdrop-blur-sm' : 'bg-black/0'} lg:group-hover:bg-black/45 lg:group-hover:backdrop-blur-sm`}
              style={{ padding: 'clamp(12px, 2vw, 24px)' }}
            >
              <div className={`transition-all duration-400 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`} style={{ width: '70%' }}>
                <h3
                  className="text-white font-black uppercase tracking-tight leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-white/55 font-semibold uppercase tracking-widest"
                  style={{ fontSize: 'clamp(0.55rem, 0.7vw, 0.7rem)', marginTop: '4px' }}
                >
                  {project.category}
                </p>
                <p
                  className="text-white/75 font-medium"
                  style={{ fontSize: 'clamp(0.6rem, 0.9vw, 0.95rem)', marginTop: '6px', maxWidth: '100%' }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </motion.a>
        )})}
      </div>
    
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:block w-full">

      {/* Header: 'work.' left, 'Show More' right */}
      <div
        className="flex items-center justify-between border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
      >
        <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>work.</span>
      </div>

      <div
        className="work-grid"
        style={{ gap: 'clamp(6px, 0.8vw, 12px)' }}
      >
        {projects.map((project, i) => {
          const isActive = activeCard === i
          return (
          <motion.a
            key={i}
            href={project.link}
            onClick={(e) => handleCardClick(e, i)}
            className="work-card group block relative overflow-hidden bg-black/5 dark:bg-white/5 w-full h-full transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-[1.04] ${isActive ? 'scale-[1.04]' : 'scale-100'}`}
            />
            {/* Hover overlay */}
            <div className={`absolute inset-0 transition-all duration-500 flex items-end ${isActive ? 'bg-black/45 backdrop-blur-sm' : 'bg-black/0'} lg:group-hover:bg-black/45 lg:group-hover:backdrop-blur-sm`}
              style={{ padding: 'clamp(12px, 2vw, 24px)' }}
            >
              <div className={`transition-all duration-400 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`} style={{ width: '70%' }}>
                <h3
                  className="text-white font-black uppercase tracking-tight leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-white/55 font-semibold uppercase tracking-widest"
                  style={{ fontSize: 'clamp(0.55rem, 0.7vw, 0.7rem)', marginTop: '4px' }}
                >
                  {project.category}
                </p>
                <p
                  className="text-white/75 font-medium"
                  style={{ fontSize: 'clamp(0.6rem, 0.9vw, 0.95rem)', marginTop: '6px', maxWidth: '100%' }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </motion.a>
        )})}
      </div>
    
      </div>
  </section>
  )
}

export default Work
