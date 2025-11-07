"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

interface NavbarProps {
  isDark: boolean
  toggleDarkMode: () => void
}

export default function Navbar({ isDark, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#leadership", label: "Leadership" },
    { href: "#contact", label: "Contact" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-primary-foreground tracking-tight">AW</span>
            </div>
            <Link
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
            >
              Asiri Weerasinghe
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex gap-10 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                variants={itemVariants}
                className="text-foreground/85 hover:text-primary transition-colors duration-300 text-base font-semibold relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.a>
            ))}

            {/* Dark mode toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 hover:bg-primary/10 rounded-lg transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Sun size={22} className="text-accent" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Moon size={22} />
                </motion.div>
              )}
            </motion.button>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 hover:bg-primary/10 rounded-lg transition-colors duration-300"
            >
              {isDark ? (
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Sun size={22} className="text-accent" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Moon size={22} />
                </motion.div>
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 hover:bg-primary/10 rounded-lg transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-foreground/85 hover:text-primary transition-colors px-3 py-2 text-sm font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
