import React from 'react'
import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

const Experience = () => {
  return (
    <section id="experience" style={{ marginTop: 'clamp(80px, 15vh, 200px)' }}>
      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden w-full">

      <div
        className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
      >
        <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>experience.</span>
      </div>

      {/* Experience Timeline */}
      <div className="divide-y divide-black/[0.07] dark:divide-white/[0.07] transition-colors duration-500">
        {resumeData.experience.map((exp, i) => (
          <motion.div
            key={i}
            className="grid max-md:flex max-md:flex-col"
            style={{
              gridTemplateColumns: 'clamp(120px, 16vw, 220px) 1fr',
              gap: 'clamp(16px, 3vw, 48px)',
              paddingTop: 'clamp(24px, 4vh, 48px)',
              paddingBottom: 'clamp(24px, 4vh, 48px)',
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* PC: Grid layout with fixed width left col for date. Mobile (max-md): Flex column stack */}
            <div>
              <p
                className="font-semibold text-black/40 dark:text-white/40 uppercase tracking-[0.15em] transition-colors duration-500"
                style={{ fontSize: 'clamp(0.65rem, 0.95vw, 0.95rem)', paddingTop: '2px' }}
              >
                {exp.period}
              </p>
            </div>

            <div className="flex flex-col" style={{ gap: 'clamp(12px, 2vh, 24px)' }}>
              <div>
                <h3
                  className="font-bold uppercase tracking-tight text-black dark:text-white transition-colors duration-500"
                  style={{ fontSize: 'clamp(1rem, 1.6vw, 1.6rem)', lineHeight: 1.15 }}
                >
                  {exp.role}
                </h3>
                <p
                  className="font-medium text-black/50 dark:text-white/50 transition-colors duration-500"
                  style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1.1rem)', marginTop: '4px' }}
                >
                  {exp.company}
                </p>
              </div>

              <ul className="flex flex-col" style={{ gap: 'clamp(6px, 1vh, 10px)' }}>
                {exp.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="text-black/55 dark:text-white/50 font-normal leading-relaxed transition-colors duration-500"
                    style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1.1rem)' }}
                  >
                    — {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap" style={{ gap: 'clamp(4px, 0.5vw, 8px)' }}>
                {exp.stack.map((tech, j) => (
                  <span
                    key={j}
                    className="font-semibold uppercase tracking-[0.12em] text-black/80 dark:text-white/80 border border-black/10 dark:border-white/10 transition-colors duration-500"
                    style={{ fontSize: 'clamp(0.55rem, 0.75vw, 0.8rem)', padding: '3px clamp(6px, 0.8vw, 10px)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group w-fit"
                  style={{ marginTop: '8px' }}
                >
                  <span 
                    className="font-bold uppercase tracking-[0.1em] text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-all duration-300"
                    style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.9rem)' }}
                  >
                    View Certificate
                  </span>
                  <svg 
                    width="12" height="12" viewBox="0 0 12 12" fill="none" 
                    className="text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-all duration-300 rotate-45"
                  >
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
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
        <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>experience.</span>
      </div>

      {/* Experience Timeline */}
      <div className="divide-y divide-black/[0.07] dark:divide-white/[0.07] transition-colors duration-500">
        {resumeData.experience.map((exp, i) => (
          <motion.div
            key={i}
            className="grid max-md:flex max-md:flex-col"
            style={{
              gridTemplateColumns: 'clamp(120px, 16vw, 220px) 1fr',
              gap: 'clamp(16px, 3vw, 48px)',
              paddingTop: 'clamp(24px, 4vh, 48px)',
              paddingBottom: 'clamp(24px, 4vh, 48px)',
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* PC: Grid layout with fixed width left col for date. Mobile (max-md): Flex column stack */}
            <div>
              <p
                className="font-semibold text-black/40 dark:text-white/40 uppercase tracking-[0.15em] transition-colors duration-500"
                style={{ fontSize: 'clamp(0.6rem, 1vw, 1rem)', paddingTop: '2px' }}
              >
                {exp.period}
              </p>
            </div>

            <div className="flex flex-col" style={{ gap: 'clamp(12px, 2vh, 24px)' }}>
              <div>
                <h3
                  className="font-bold uppercase tracking-tight text-black dark:text-white transition-colors duration-500"
                  style={{ fontSize: 'clamp(1rem, 1.6vw, 1.6rem)', lineHeight: 1.15 }}
                >
                  {exp.role}
                </h3>
                <p
                  className="font-medium text-black/50 dark:text-white/50 transition-colors duration-500"
                  style={{ fontSize: 'clamp(0.78rem, 1vw, 1.2rem)', marginTop: '4px' }}
                >
                  {exp.company}
                </p>
              </div>

              <ul className="flex flex-col" style={{ gap: 'clamp(6px, 1vh, 10px)' }}>
                {exp.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="text-black/55 dark:text-white/50 font-normal leading-relaxed transition-colors duration-500"
                    style={{ fontSize: 'clamp(0.82rem, 1.1vw, 1.2rem)' }}
                  >
                    — {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap" style={{ gap: 'clamp(4px, 0.5vw, 8px)' }}>
                {exp.stack.map((tech, j) => (
                  <span
                    key={j}
                    className="font-bold uppercase tracking-[0.15em] text-black/80 dark:text-white/80 border border-black/10 dark:border-white/10 transition-colors duration-500"
                    style={{ fontSize: 'clamp(0.6rem, 0.8vw, 0.8rem)', padding: '3px clamp(6px, 0.8vw, 10px)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group w-fit"
                  style={{ marginTop: '12px' }}
                >
                  <span 
                    className="font-bold uppercase tracking-[0.1em] text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-all duration-300"
                    style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.9rem)' }}
                  >
                    View Certificate
                  </span>
                  <svg 
                    width="14" height="14" viewBox="0 0 12 12" fill="none" 
                    className="text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-white transition-all duration-300 rotate-45"
                  >
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    
      </div>
  </section>
  )
}

export default Experience
