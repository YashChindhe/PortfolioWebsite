import React from 'react'
import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

const Publications = () => {
  return (
    <section id="publications" style={{ marginTop: 'clamp(80px, 15vh, 200px)' }}>
      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden w-full">
        <div
          className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
          style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
        >
          <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>publications.</span>
        </div>

        <div className="flex flex-col divide-y divide-black/[0.07] dark:divide-white/[0.07] transition-colors duration-500">
          {resumeData.publications.map((pub, i) => (
            <motion.div
              key={i}
              className="flex flex-col"
              style={{
                gap: 'clamp(12px, 2vh, 24px)',
                paddingTop: 'clamp(24px, 4vh, 48px)',
                paddingBottom: 'clamp(24px, 4vh, 48px)',
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <p
                  className="font-medium text-black/40 dark:text-white/40 tracking-[0.1em] transition-colors duration-500 uppercase"
                  style={{ fontSize: 'clamp(0.65rem, 0.95vw, 0.95rem)' }}
                >
                  {pub.year}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3
                    className="font-bold uppercase tracking-tight text-black dark:text-white transition-colors duration-500"
                    style={{ fontSize: 'clamp(1rem, 1.6vw, 1.6rem)', lineHeight: 1.15 }}
                  >
                    {pub.title}
                  </h3>
                  <p
                    className="font-medium text-black/50 dark:text-white/50 transition-colors duration-500"
                    style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1.1rem)', marginTop: '4px' }}
                  >
                    {pub.journal}
                  </p>
                </div>

                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 group w-fit"
                  >
                    <span 
                      className="font-bold uppercase tracking-[0.1em] text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-all duration-300"
                      style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.9rem)' }}
                    >
                      View Publication
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
          <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>publications.</span>
        </div>

        <div className="flex flex-col divide-y divide-black/[0.07] dark:divide-white/[0.07] transition-colors duration-500">
          {resumeData.publications.map((pub, i) => (
            <motion.div
              key={i}
              className="grid"
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
              <div>
                <p
                  className="font-semibold text-black/40 dark:text-white/40 tracking-[0.1em] transition-colors duration-500 uppercase"
                  style={{ fontSize: 'clamp(0.65rem, 0.95vw, 0.95rem)' }}
                >
                  {pub.year}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3
                    className="font-bold uppercase tracking-tight text-black dark:text-white transition-colors duration-500"
                    style={{ fontSize: 'clamp(1rem, 1.6vw, 1.6rem)', lineHeight: 1.15 }}
                  >
                    {pub.title}
                  </h3>
                  <p
                    className="font-medium text-black/50 dark:text-white/50 transition-colors duration-500"
                    style={{ fontSize: 'clamp(0.78rem, 1vw, 1.2rem)', marginTop: '4px' }}
                  >
                    {pub.journal}
                  </p>
                </div>

                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 group w-fit"
                  >
                    <span 
                      className="font-bold uppercase tracking-[0.1em] text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-all duration-300"
                      style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.9rem)' }}
                    >
                      View Publication
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

export default Publications
