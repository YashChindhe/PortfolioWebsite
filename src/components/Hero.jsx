import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { resumeData } from '../data/resume'

const Hero = () => {
  return (
    <section
      className="hero-section relative flex flex-col"
    >

      {/* ── MOBILE layout: stacked ── */}
      {/* Mobile: Container is visible only on screens < sm (640px) and stacks items vertically */}
      <div className="flex flex-col sm:hidden">
        {/* 2. Name */}
        <motion.h1
          className="font-black text-black dark:text-white uppercase transition-colors duration-500"
          style={{
            fontSize: 'clamp(3.5rem, 5vw, 80px)',
            lineHeight: 0.88,
            letterSpacing: '-0.05em',
            marginTop: 'clamp(80px, 18vh, 100px)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          YASH<br />CHINDHE
        </motion.h1>

        {/* 3. Email */}
        <motion.a
          href={`mailto:${resumeData.email}`}
          className="flex items-center gap-1.5 font-semibold text-black dark:text-white hover:opacity-40 transition-opacity duration-500"
          style={{ fontSize: 'clamp(0.75rem, 3.5vw, 0.95rem)', marginTop: 'clamp(30px, 4vh, 40px)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {resumeData.email}
          <ArrowUpRight size={14} strokeWidth={2.5} opacity={0.5} />
        </motion.a>

        {/* 4. Intro text */}
        <motion.p
          className="font-medium text-black/60 dark:text-white/60 transition-colors duration-500"
          style={{
            fontSize: 'clamp(0.78rem, 3.5vw, 0.9rem)',
            lineHeight: 1.6,
            marginTop: 'clamp(30px, 5vh, 40px)',
            paddingBottom: 'clamp(24px, 4vh, 40px)',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {resumeData.intro}
        </motion.p>
      </div>

      {/* ── DESKTOP layout ── */}
      {/* PC: Container is hidden on mobile, block level as flex on sm+ screens, expanding to fill available space */}
      <div className="hidden sm:flex sm:flex-col sm:flex-1">
        {/* Name — massive, flush-left */}
        <motion.div
          style={{ marginTop: 'clamp(24px, 5vh, 60px)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-black text-black dark:text-white uppercase transition-colors duration-500"
            style={{
              marginTop: 'clamp(24px, 5vh, 60px)',
              fontSize: 'clamp(4rem, 10vw, 240px)',
              lineHeight: 0.88,
              letterSpacing: '-0.05em',
            }}
          >
            YASH<br />CHINDHE
          </h1>
        </motion.div>

        {/* Flex spacer */}
        <div className="flex-1" />

        {/* Bottom row: email left | intro right */}
        {/* PC layout uses flex items-end justify-between to push content to opposite bottom corners */}
        <div
          className="flex items-end justify-between"
          style={{ paddingBottom: 'clamp(24px, 4vh, 48px)', marginBottom: 'clamp(24px, 18vh, 300px)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href={`mailto:${resumeData.email}`}
              className="flex items-center gap-2 font-semibold text-black dark:text-white hover:opacity-40 transition-opacity duration-500"
              style={{ fontSize: 'clamp(0.8rem, 2vw, 2rem)' }}
            >
              {resumeData.email}
              <ArrowUpRight size={50} strokeWidth={2.5} opacity={0.5} />
            </a>
          </motion.div>

          <motion.p
            className="font-medium text-black/60 dark:text-white/60 transition-colors duration-500"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              lineHeight: 1.65,
              textAlign: 'left',
              maxWidth: 'clamp(260px, 40vw, 800px)',
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {resumeData.intro}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Hero
