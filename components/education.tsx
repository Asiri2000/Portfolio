"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Calendar } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

            <div className="relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl">
                    <GraduationCap size={32} className="text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Bachelor of Science (Hons) in Computer Science and Technology
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-4">Uva Wellassa University of Sri Lanka</p>

                  <div className="flex flex-col gap-3 text-foreground/75">
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="text-accent" />
                      <span>Expected Graduation: 2026</span>
                    </div>
                    <div className="flex items-start gap-3 mt-2">
                      <BookOpen size={18} className="text-accent flex-shrink-0 mt-1" />
                      <p>
                        Focused on full-stack web development, emerging technologies, and practical software engineering
                        with emphasis on innovation and community impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
