"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Leadership from "@/components/leadership"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", String(newDarkMode))

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  )
}
