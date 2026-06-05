import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects'

const Work = () => {
  const [activeCard, setActiveCard] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)')
    setIsMobile(mediaQuery.matches)

    const handler = (e) => setIsMobile(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const handleCardClick = (e, index) => {
    // On devices roughly less than LG (desktop styling breakpoint)
    if (window.innerWidth < 1024) {
      if (activeCard !== index) {
        e.preventDefault()
        setActiveCard(index)
      }
    }
  }

  const limit = isMobile ? 2 : 6
  const displayedProjects = showAll ? projects : projects.slice(0, limit)
  const hasMore = projects.length > limit

  return (
    <section id="work" className="min-h-fit lg:h-screen flex flex-col overflow-hidden" style={{ paddingTop: 'clamp(40px, 6vh, 80px)', paddingBottom: 'clamp(40px, 6vh, 80px)' }}>
      {/* Header: 'work.' at the very top */}
      <div
        className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)' }}
      >
        <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>work.</span>
      </div>

      {/* Grid Container centered in the remaining height */}
      <div className="flex-1 flex flex-col justify-center items-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-[1400px] w-full">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={i}
              className="flex flex-col bg-white dark:bg-[#080808] border border-black/[0.08] dark:border-white/[0.08] rounded-xl overflow-hidden transition-all duration-500 hover:border-black/20 dark:hover:border-white/20 w-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Image Container */}
              <div className="aspect-[1.8/1] w-full overflow-hidden bg-black/[0.02] dark:bg-white/[0.02] p-1.5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <p className="text-black/40 dark:text-white/40 font-semibold uppercase tracking-[0.2em] text-[9px] md:text-[10px] mb-2 leading-none">
                  {project.category}
                </p>
                <h3 className="font-bold text-black dark:text-white uppercase mb-4 tracking-tight" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.6rem)' }}>
                  {project.title}
                </h3>
                
                <p className="text-black/50 dark:text-white/40 font-medium leading-[1.5] mb-8" style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1.1rem)' }}>
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.stack && project.stack.map((tech, j) => (
                    <span 
                      key={j}
                      className="bg-black/[0.04] dark:bg-white/[0.06] text-black/60 dark:text-white/60 px-2.5 py-1 rounded-md font-semibold border border-black/[0.01] dark:border-white/[0.01]"
                      style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.9rem)' }}
                    >
                      {tech.toLowerCase()}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#121212] dark:bg-white text-white dark:text-black py-2.5 rounded-lg font-bold text-[11px] md:text-[12px] hover:opacity-90 transition-opacity"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    Website
                  </a>
                  <a 
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#121212] dark:bg-white text-white dark:text-black py-2.5 rounded-lg font-bold text-[11px] md:text-[12px] hover:opacity-90 transition-opacity"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {hasMore && (
          <div className="flex justify-center mt-10 w-full">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 text-black dark:text-white rounded-lg font-bold text-[11px] uppercase tracking-wider transition-all duration-300 bg-transparent hover:opacity-75"
            >
              {showAll ? 'See Less' : 'See More'}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Work
