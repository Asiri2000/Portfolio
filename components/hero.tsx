"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const titles = ["Full Stack Developer", "Tech Enthusiast", "Problem Solver"]
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const currentTitle = titles[titleIndex]

        if (!isDeleting) {
          if (charIndex < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentTitle.slice(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setIsDeleting(false)
            setTitleIndex((titleIndex + 1) % titles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, titleIndex])

  return (
    <section
      id="home"
      className="pt-32 section-padding bg-background min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        {/* Profile Image */}
        <div className="mb-8">
          <img
            src="/professional-headshot.jpg"
            alt="Asiri Weerasinghe"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto border-4 border-accent shadow-lg"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Asiri Weerasinghe</h1>

        {/* Animated Typing Title */}
        <div className="h-16 md:h-20 flex items-center justify-center">
          <p className="text-xl md:text-3xl text-accent min-h-[4rem] md:min-h-[5rem]">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Building innovative web solutions with modern technologies and creative problem-solving
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View My Work
          </Button>
          <Button size="lg" variant="outline">
            Download Resume
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  )
}
