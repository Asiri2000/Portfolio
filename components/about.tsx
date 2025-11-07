"use client"

import { motion } from "framer-motion"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
          </div>

          <motion.div
            className="space-y-6 text-foreground/80 leading-relaxed text-justify"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants}>
              II'm a Computer Science and Technology undergraduate at Uva Wellassa University of Sri Lanka, driven by a passion 
              for innovation, technology, and building digital solutions that make a real impact.
            </motion.p>
            <motion.p variants={itemVariants}>
             My journey in tech started with a simple curiosity about how technology shapes the world a curiosity that grew 
             into a deep commitment to full-stack web development, problem-solving, and exploring emerging technologies. Over time, 
             this passion evolved into creating meaningful projects that bridge creativity and purpose.
            </motion.p>
            <motion.p variants={itemVariants}>
              Beyond code, I believe true impact comes through leadership and community engagement. As the Chairperson of the 
              IEEE Student Branch of Uva Wellassa University, I’ve had the privilege of leading initiatives like Impetus 2026 
              International Research Symposium, Tech Talks, Volunteer Training Series, and Humanitarian Projects all focused 
              on empowering youth, driving innovation, and contributing to the betterment of both society and the university community.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
