import React from 'react'
import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

const Skills = () => {
  const cats = [
    { label: 'Frontend', items: resumeData.skills.frontend },
    { label: 'Backend', items: resumeData.skills.backend },
    { label: 'AI', items: resumeData.skills.ai },
    { label: 'DevOps', items: resumeData.skills.devops },
    { label: 'Cloud', items: resumeData.skills.cloud },
    { label: 'Systems', items: resumeData.skills.systems },
    { label: 'Others', items: resumeData.skills.others },
    { label: 'Testing', items: resumeData.skills.testing }
  ]

  return (
    <section id="skills" style={{ marginTop: 'clamp(80px, 15vh, 200px)' }}>
      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden w-full">

      <div
        className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
      >
        <span className="dark:text-white" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>skills.</span>
      </div>

      {/* Skills Grid Layout */}
      {/* PC: 3 columns. Tablet (max-md): 2 columns. Mobile (max-sm): 1 column */}
      <div
        className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
        style={{ gap: 'clamp(24px, 4vw, 48px) clamp(16px, 3vw, 32px)' }}
      >
        {cats.map((cat, i) => (
          <motion.div
            key={i}
            className="flex flex-col"
            style={{ gap: 'clamp(10px, 1.5vh, 16px)' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <p
              className="font-semibold uppercase tracking-[0.15em] text-black/40 dark:text-white/40 transition-colors duration-500"
              style={{ fontSize: 'clamp(0.6rem, 1vw, 1rem)' }}
            >
              {cat.label}
            </p>
            <div className="flex flex-col" style={{ gap: 'clamp(3px, 0.5vh, 6px)' }}>
              {cat.items.map((item, j) => (
                <p
                  key={j}
                  className="font-semibold text-black dark:text-white transition-colors duration-500"
                  style={{ fontSize: 'clamp(0.82rem, 1.1vw, 1.2rem)' }}
                >
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ marginTop: 'clamp(40px, 8vh, 80px)', paddingTop: 'clamp(16px, 2.5vh, 28px)' }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p
          className="font-semibold text-black dark:text-white transition-colors duration-500"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', marginBottom: 'clamp(16px, 3vh, 28px)' }}
        >
          certifications.
        </p>
        <div className="flex flex-col" style={{ gap: 'clamp(2px, 0.4vh, 6px)' }}>
          {resumeData.certifications.map((cert, i) => (
            <motion.div 
              key={i} 
              className="flex items-center group"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + (i * 0.03) }}
            >
              {cert.link ? (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-1 group/link"
                >
                  <p
                    className="font-medium text-black/55 dark:text-white/50 group-hover/link:text-black dark:group-hover/link:text-white transition-colors duration-500"
                    style={{ fontSize: 'clamp(0.82rem, 1.1vw, 1.2rem)' }}
                  >
                    — {cert.title}
                  </p>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-black/30 dark:text-white/30 group-hover/link:text-black dark:group-hover/link:text-white rotate-45 transition-all duration-300">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ) : (
                <p
                  className="font-medium text-black/55 dark:text-white/50 py-1"
                  style={{ fontSize: 'clamp(0.82rem, 1.1vw, 1.2rem)' }}
                >
                  — {cert.title}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:block w-full">

      <div
        className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
      >
        <span className="dark:text-white" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>skills.</span>
      </div>

      {/* Skills Grid Layout */}
      {/* PC: 3 columns. Tablet (max-md): 2 columns. Mobile (max-sm): 1 column */}
      <div
        className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
        style={{ gap: 'clamp(24px, 4vw, 48px) clamp(16px, 3vw, 32px)' }}
      >
        {cats.map((cat, i) => (
          <motion.div
            key={i}
            className="flex flex-col"
            style={{ gap: 'clamp(10px, 1.5vh, 16px)' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <p
              className="font-semibold uppercase tracking-[0.15em] text-black/40 dark:text-white/40 transition-colors duration-500"
              style={{ fontSize: 'clamp(0.6rem, 1vw, 1rem)' }}
            >
              {cat.label}
            </p>
            <div className="flex flex-col" style={{ gap: 'clamp(3px, 0.5vh, 6px)' }}>
              {cat.items.map((item, j) => (
                <p
                  key={j}
                  className="font-semibold text-black dark:text-white transition-colors duration-500"
                  style={{ fontSize: 'clamp(0.82rem, 1.1vw, 1.2rem)' }}
                >
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ marginTop: 'clamp(40px, 8vh, 80px)', paddingTop: 'clamp(16px, 2.5vh, 28px)' }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p
          className="font-semibold text-black dark:text-white transition-colors duration-500"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', marginBottom: 'clamp(16px, 3vh, 28px)' }}
        >
          certifications.
        </p>
        <div className="flex flex-col" style={{ gap: 'clamp(2px, 0.4vh, 6px)' }}>
          {resumeData.certifications.map((cert, i) => (
            <motion.div 
              key={i} 
              className="flex items-center group"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + (i * 0.03) }}
            >
              {cert.link ? (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-1 group/link"
                >
                  <p
                    className="font-medium text-black/55 dark:text-white/50 group-hover/link:text-black dark:group-hover/link:text-white transition-colors duration-500"
                    style={{ fontSize: 'clamp(0.82rem, 1.1vw, 1.2rem)' }}
                  >
                    — {cert.title}
                  </p>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-black/30 dark:text-white/30 group-hover/link:text-black dark:group-hover/link:text-white rotate-45 transition-all duration-300">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ) : (
                <p
                  className="font-medium text-black/55 dark:text-white/50 py-1"
                  style={{ fontSize: 'clamp(0.82rem, 1.1vw, 1.2rem)' }}
                >
                  — {cert.title}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    
      </div>
  </section>
  )
}

export default Skills
