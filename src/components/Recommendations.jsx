import React from 'react'
import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

const Recommendations = () => {
  return (
    <section id="recommendations" style={{ marginTop: 'clamp(80px, 15vh, 200px)' }}>
      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden w-full">
        <div
          className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
          style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
        >
          <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>recommendations.</span>
        </div>

        <div className="flex flex-col gap-16">
          {resumeData.recommendations.map((rec, i) => (
            <motion.div
              key={i}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p 
                className="text-black/70 dark:text-white/70 italic leading-relaxed mb-6"
                style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.25rem)' }}
              >
                "{rec.highlights}"
              </p>

              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <a 
                    href={rec.recommender_profile} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-black uppercase tracking-tight text-black dark:text-white hover:opacity-70 transition-all duration-300 flex items-center gap-2 group w-fit"
                    style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.3rem)' }}
                  >
                    {rec.name}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-0 group-hover:opacity-100 transition-all duration-300 rotate-45 transform translate-y-1">
                      <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <p 
                    className="font-medium text-black/50 dark:text-white/50"
                    style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', marginTop: '2px' }}
                  >
                    {rec.role} at {rec.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:block w-full">
        <div
          className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
          style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
        >
          <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>recommendations.</span>
        </div>

        <div className="grid grid-cols-2" style={{ gap: 'clamp(40px, 6vw, 100px)' }}>
          {resumeData.recommendations.map((rec, i) => (
            <motion.div
              key={i}
              className="flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p 
                className="text-black/70 dark:text-white/70 italic leading-relaxed mb-8 flex-grow"
                style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.25rem)' }}
              >
                "{rec.highlights}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="flex flex-col">
                  <a 
                    href={rec.recommender_profile} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-black uppercase tracking-tight text-black dark:text-white hover:opacity-70 transition-all duration-300 flex items-center gap-2 group w-fit"
                    style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.3rem)' }}
                  >
                    {rec.name}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-0 group-hover:opacity-100 transition-all duration-300 rotate-45 transform translate-y-1">
                      <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <p 
                    className="font-medium text-black/50 dark:text-white/50"
                    style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)', marginTop: '2px' }}
                  >
                    {rec.role} at {rec.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recommendations
