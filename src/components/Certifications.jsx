import React from 'react'
import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

const Certifications = () => {
  return (
    <section id="certificates" style={{ marginTop: 'clamp(80px, 15vh, 200px)' }}>
      <div
        className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
      >
        <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>certificates.</span>
      </div>

      <div className="flex flex-col" style={{ gap: '2px' }}>
        {resumeData.certifications.map((cert, i) => (
          <motion.div 
            key={i} 
            className="group"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            {cert.link ? (
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2.5 border-b border-black/[0.05] dark:border-white/[0.05] group gap-4 px-1"
              >
                <p
                  className="font-semibold text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-all duration-300 flex-1"
                  style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1.15rem)' }}
                >
                  {cert.title}
                </p>
                <svg 
                  width="14" height="14" viewBox="0 0 12 12" fill="none" 
                  className="text-black/20 dark:text-white/20 group-hover:text-black dark:group-hover:text-white transition-all duration-300 rotate-45"
                >
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ) : (
              <div className="py-2.5 border-b border-black/[0.05] dark:border-white/[0.05]">
                <p
                  className="font-semibold text-black/60 dark:text-white/60"
                  style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1.15rem)' }}
                >
                  {cert.title}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
