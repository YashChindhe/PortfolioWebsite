import React from 'react'
import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

const Leadership = () => {
  return (
    <section id="leadership" style={{ marginTop: 'clamp(80px, 15vh, 200px)' }}>
      <div
        className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
      >
        <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>leadership.</span>
      </div>

      <div className="flex flex-col" style={{ gap: 'clamp(12px, 2vh, 24px)' }}>
        {resumeData.co_curricular.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 transition-colors duration-500"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="text-black/30 dark:text-white/30 font-bold" style={{ fontSize: '1.2rem', marginTop: '-2px' }}>—</span>
            <p
              className="font-medium text-black/70 dark:text-white/70 leading-relaxed transition-colors duration-500"
              style={{ fontSize: 'clamp(0.85rem, 1.05vw, 1.15rem)' }}
            >
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Leadership
