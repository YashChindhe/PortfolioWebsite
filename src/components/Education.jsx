import React from 'react'
import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

const Education = () => {
  return (
    <section id="education" style={{ marginTop: 'clamp(80px, 15vh, 200px)' }}>
      <div
        className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
      >
        <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>education.</span>
      </div>

      <div className="divide-y divide-black/[0.07] dark:divide-white/[0.07] transition-colors duration-500">
        {resumeData.education.map((edu, i) => (
          <motion.div
            key={i}
            className="grid max-md:flex max-md:flex-col"
            style={{
              gridTemplateColumns: 'clamp(120px, 16vw, 220px) 1fr',
              gap: 'clamp(16px, 3vw, 48px)',
              paddingTop: 'clamp(20px, 3.5vh, 40px)',
              paddingBottom: 'clamp(20px, 3.5vh, 40px)',
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p
              className="font-semibold text-black/40 dark:text-white/40 uppercase tracking-[0.15em] transition-colors duration-500"
              style={{ fontSize: 'clamp(0.65rem, 0.95vw, 0.95rem)', paddingTop: '2px' }}
            >
              {edu.period}
            </p>
            <div>
              <h3
                className="font-bold uppercase text-black dark:text-white transition-colors duration-500"
                style={{ fontSize: 'clamp(1rem, 1.6vw, 1.6rem)', lineHeight: 1.15 }}
              >
                {edu.degree}
              </h3>
              <p
                className="font-medium text-black/50 dark:text-white/50 transition-colors duration-500"
                style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1.1rem)', marginTop: '4px' }}
              >
                {edu.institution}
              </p>
              <p
                className="font-medium text-black/50 dark:text-white/50 transition-colors duration-500"
                style={{ fontSize: 'clamp(0.72rem, 0.9vw, 1rem)', marginTop: '4px' }}
              >
                {edu.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
