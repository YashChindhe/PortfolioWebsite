import React from 'react'
import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

const About = () => {
  return (
    <section id="about" style={{ marginTop: 'clamp(80px, 15vh, 200px)' }}>
      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden w-full">

      <div
        className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
      >
        <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>about.</span>
      </div>

      {/* Two justified paragraphs side by side */}
      {/* PC: Grid with 2 equal columns. Mobile (max-md): Reverts to 1 column vertical stack */}
      <motion.div
        className="grid grid-cols-2 max-md:grid-cols-1"
        style={{ gap: 'clamp(24px, 5vw, 80px)', marginBottom: 'clamp(40px, 8vh, 80px)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p
          className="font-medium text-black/70 dark:text-white/70 leading-[1.65] text-left transition-colors duration-500"
          style={{ fontSize: 'clamp(0.82rem, 1.1vw, 1.2rem)' }}
        >
          I collaborate with teams of all sizes, using the latest technologies to build intelligent systems. I'm dedicated to crafting solutions that are both highly functional and beautifully designed — seamlessly aligned with unique needs and long-term goals.
        </p>
        <p
          className="font-medium text-black/70 dark:text-white/70 leading-[1.65] text-left transition-colors duration-500"
          style={{ fontSize: 'clamp(0.82rem, 1.1vw, 1.2rem)' }}
        >
          As a Full Stack AI Developer, I specialize in automation, distributed systems, and intelligent data pipelines. My designs and engineered systems have earned recognition across multiple domains — always pushing the boundary of what machines can do.
        </p>
      </motion.div>

      {/* Education timeline */}
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
            {/* PC: Grid layout with fixed width left col. Mobile (max-md): Flex column stack */}
            <p
              className="font-semibold text-black/40 dark:text-white/40 uppercase tracking-[0.15em] transition-colors duration-500"
              style={{ fontSize: 'clamp(0.6rem, 1vw, 1rem)', paddingTop: '2px' }}
            >
              {edu.period}
            </p>
            <div>
              <h3
                className="font-black uppercase text-black dark:text-white transition-colors duration-500"
                style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.5rem)', lineHeight: 1.15 }}
              >
                {edu.degree}
              </h3>
              <p
                className="font-medium text-black/50 dark:text-white/50 transition-colors duration-500"
                style={{ fontSize: 'clamp(0.78rem, 1vw, 1.2rem)', marginTop: '4px' }}
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
    
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:block w-full">

      <div
        className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ paddingTop: 'clamp(16px, 2.5vh, 28px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
      >
        <span className="dark:text-white transition-colors duration-500" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', fontWeight: 600 }}>about.</span>
      </div>

      {/* Two justified paragraphs side by side */}
      {/* PC: Grid with 2 equal columns. Mobile (max-md): Reverts to 1 column vertical stack */}
      <motion.div
        className="grid grid-cols-2 max-md:grid-cols-1"
        style={{ gap: 'clamp(24px, 5vw, 80px)', marginBottom: 'clamp(40px, 8vh, 80px)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p
          className="font-medium text-black/70 dark:text-white/70 leading-[1.65] text-left transition-colors duration-500"
          style={{ fontSize: 'clamp(0.82rem, 1.1vw, 1.2rem)' }}
        >
          I collaborate with teams of all sizes, using the latest technologies to build intelligent systems. I'm dedicated to crafting solutions that are both highly functional and beautifully designed — seamlessly aligned with unique needs and long-term goals.
        </p>
        <p
          className="font-medium text-black/70 dark:text-white/70 leading-[1.65] text-left transition-colors duration-500"
          style={{ fontSize: 'clamp(0.82rem, 1.1vw, 1.2rem)' }}
        >
          As a Full Stack AI Developer, I specialize in automation, distributed systems, and intelligent data pipelines. My designs and engineered systems have earned recognition across multiple domains — always pushing the boundary of what machines can do.
        </p>
      </motion.div>

      {/* Education timeline */}
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
            {/* PC: Grid layout with fixed width left col. Mobile (max-md): Flex column stack */}
            <p
              className="font-semibold text-black/40 dark:text-white/40 uppercase tracking-[0.15em] transition-colors duration-500"
              style={{ fontSize: 'clamp(0.6rem, 1vw, 1rem)', paddingTop: '2px' }}
            >
              {edu.period}
            </p>
            <div>
              <h3
                className="font-black uppercase text-black dark:text-white transition-colors duration-500"
                style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.5rem)', lineHeight: 1.15 }}
              >
                {edu.degree}
              </h3>
              <p
                className="font-medium text-black/50 dark:text-white/50 transition-colors duration-500"
                style={{ fontSize: 'clamp(0.78rem, 1vw, 1.2rem)', marginTop: '4px' }}
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

      <motion.div
        className="border-t border-black/10 dark:border-white/10 transition-colors duration-500"
        style={{ marginTop: 'clamp(40px, 8vh, 80px)', paddingTop: 'clamp(16px, 2.5vh, 28px)' }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className="font-semibold text-black dark:text-white transition-colors duration-500"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', marginBottom: 'clamp(16px, 3vh, 28px)' }}
        >
          leadership.
        </p>
        <div className="flex flex-col" style={{ gap: 'clamp(8px, 1.2vh, 14px)' }}>
          {resumeData.co_curricular.map((item, i) => (
            <motion.p
              key={i}
              className="font-medium text-black/55 dark:text-white/50 transition-colors duration-500"
              style={{ fontSize: 'clamp(0.82rem, 1.1vw, 1.2rem)' }}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + (i * 0.05) }}
            >
              — {item}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default About
