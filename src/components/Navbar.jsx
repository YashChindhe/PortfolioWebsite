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
        className="flex items-center justify-between sticky top-0 bg-white dark:bg-black z-50 transition-colors duration-500"
        style={{ padding: 'clamp(12px, 5vh, 30px) 0' }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="font-black text-black dark:text-white tracking-tight transition-colors duration-500"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.8em)',  fontWeight: 600 }}
        >
          Hello :)
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center" style={{ gap: 'clamp(20px, 3vw, 48px)' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              className="font-semibold text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-300 tracking-widest"
              style={{ fontSize: 'clamp(1rem, 1.2vw, 1.2rem)' }}
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
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
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
