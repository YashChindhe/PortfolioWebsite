import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'

const navLinks = [
  { label: 'about', href: '#about' },
  { label: 'experience', href: '#experience' },
  { label: 'skills', href: '#skills' },
  { label: 'publications', href: '#publications' },
  { label: 'recommendations', href: '#recommendations' },
  { label: 'work', href: '#work' },
  { label: 'consistency', href: '#consistency' },
  { label: 'contact', href: '#contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setIsDark(true)
    }
  }

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="flex items-center justify-between sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 transition-colors duration-500"
        style={{ padding: 'clamp(8px, 2vh, 16px) 0' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="font-black text-black dark:text-white tracking-tight transition-colors duration-500"
          style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.4rem)',  fontWeight: 700 }}
        >
          Hello :)
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center" style={{ gap: 'clamp(12px, 2.5vw, 32px)' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              className="font-bold uppercase text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors duration-300 tracking-[0.2em]"
              style={{ fontSize: 'clamp(0.6rem, 0.8vw, 0.75rem)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Theme & Mobile Menu) */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-black dark:text-white hover:opacity-50 transition-opacity"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-black dark:text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-black transition-colors duration-500 z-40 flex flex-col items-start justify-center px-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                  className="font-black uppercase text-black dark:text-white hover:opacity-40 transition-opacity"
                  style={{ fontSize: 'clamp(1.8rem, 8vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
