import React from 'react'
import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-white"
      style={{ marginTop: 'clamp(80px, 15vh, 200px)' }}
    >
      <div
        className="max-w-[1440px] mx-auto"
        style={{ padding: 'clamp(40px, 8vh, 96px) clamp(20px, 5vw, 80px)' }}
      >
        {/* CTA row */}
        {/* ── MOBILE LAYOUT ── */}
        <motion.div
          className="md:hidden flex flex-col gap-6 border-b border-white/10 text-center"
          style={{ paddingBottom: 'clamp(30px, 5vh, 60px)', marginBottom: 'clamp(20px, 4vh, 40px)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-black uppercase text-white"
            style={{
              fontSize: 'clamp(1.8rem, 6vw, 3rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.05em',
            }}
          >
            Curious about what we can create together? Let's bring something extraordinary to life!
          </h2>

          <div className="flex flex-col items-center w-full" style={{ gap: '20px', flexShrink: 0 }}>
            <a
              href={`mailto:${resumeData.email}`}
              className="bg-white text-black font-bold uppercase hover:bg-white/90 transition-colors rounded-xl text-center"
              style={{
                fontSize: 'clamp(1rem, 3vw, 1rem)',
                letterSpacing: '0.15em',
                padding: 'clamp(20px, 3vh, 30px) clamp(30px, 5vw, 80px)',
                marginTop: 'clamp(30px, 4vh, 40px)',
              }}
            >
              Get in Touch
            </a>
            <div className="flex items-center" style={{ gap: '10px' }}>
              <span className="bg-green-400 inline-block" style={{ width: 8, height: 8, borderRadius: '50%' }}></span>
              <span
                className="font-semibold uppercase tracking-[0.15em] text-white/40"
                style={{ fontSize: 'clamp(0.8rem, 3vw, 0.8rem)' }}
              >
                Available For Work
              </span>
            </div>
            <div className="flex items-center gap-12 mt-12 text-white/80">
              <a href={resumeData.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href={resumeData.socials.x} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="X (Twitter)">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a href={resumeData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── DESKTOP LAYOUT ── */}
        <motion.div
          className="hidden md:flex items-stretch justify-between border-b border-white/10"
          style={{ paddingBottom: 'clamp(40px, 7vh, 80px)', marginBottom: 'clamp(28px, 5vh, 60px)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-black uppercase text-white lg:max-w-[14ch]"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 4rem)',
              lineHeight: 1,
              letterSpacing: '-0.05em',
            }}
          >
            Curious about what we can create together? Let's bring something extraordinary to life!
          </h2>

          {/* Changed items-end to items-stretch and w-auto to w-fit */}
          <div className="flex flex-col items-stretch justify-between w-fit py-1" style={{ flexShrink: 0 }}>
              
              <div className="flex flex-col items-center" style={{ gap: 'clamp(12px, 2vh, 20px)' }}>
                  <a
                      href={`mailto:${resumeData.email}`}
                      className="bg-white text-black font-bold uppercase hover:bg-white/90 transition-colors rounded-xl text-center"
                      style={{
                          fontSize: 'clamp(1rem, 1vw, 1.5rem)',
                          letterSpacing: '0.15em',
                          // This padding defines the "Master Width" of the stack
                          padding: 'clamp(20px, 3vh, 30px) clamp(30px, 5vw, 80px)', 
                      }}
                  >
                      Get in Touch
                  </a>
                  <div className="flex items-center justify-center" style={{ gap: 'clamp(12px, 2vh, 20px)' }}>
                      <span className="bg-green-400 inline-block" style={{ width: 10, height: 8, borderRadius: '50%' }}></span>
                      <span
                          className="font-semibold uppercase tracking-[0.15em] text-white/40"
                          style={{ fontSize: 'clamp(1rem, 1vw, 1rem)' }}
                      >
                          Available For Work
                      </span>
                  </div>
              </div>

              {/* This div will now automatically match the width of the button above */}
              <div className="flex items-center justify-between mt-auto text-white/80 pt-8">
                  <a href={resumeData.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                  <a href={resumeData.socials.x} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                  </a>
                  <a href={resumeData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
              </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
