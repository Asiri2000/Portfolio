"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  isDark: boolean
  onToggleDarkMode: () => void
}

export default function Navigation({ isDark, onToggleDarkMode }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold gradient-text">
          Asiri
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          <Button variant="outline" size="icon" onClick={onToggleDarkMode} className="rounded-full bg-transparent">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </nav>
  )
}
