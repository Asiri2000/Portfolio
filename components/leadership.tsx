"use client"

import { motion } from "framer-motion"
import { Award, Users, Zap } from "lucide-react"

const leadershipRoles = [
  {
    year: "2025/2026",
    role: "Chair, IEEE Student Branch",
    organization: "Uva Wellassa University",
    description:
      "Leading a team of tech-driven students to organize impactful community-based innovation projects and mentor emerging tech leaders.",
    icon: Award,
  },
  {
    year: "2024/2025",
    role: "Vice Chair, IEEE Student Branch",
    organization: "Uva Wellassa University",
    description:
      "Contributed to strategic initiatives and supported leadership in organizing technical seminars and workshops for students.",
    icon: Users,
  },
  {
    year: "2024/2025",
    role: "Chair, Project Sihinayata Peraman",
    organization: "IEEE Sri Lanka Section SIGHT",
    description:
      "Championed a regional sustainability project bringing technology-driven solutions to communities across Sri Lanka.",
    icon: Zap,
  },
  {
    year: "2024/2025",
    role: "Chair, Project Pillam",
    organization: "Rotaract Club of Uva Wellassa University",
    description:
      "Organized community service initiatives in Kandy District, combining tech skills with social responsibility.",
    icon: Award,
  },
]

export default function Leadership() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Leadership & Volunteering
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Driving innovation through community leadership and impactful initiatives
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {leadershipRoles.map((role, index) => {
            const Icon = role.icon
            return (
              <motion.div key={index} variants={itemVariants} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

                <div className="relative bg-card border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg">
                        <Icon size={24} className="text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{role.role}</h3>
                        <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1 rounded-full w-fit">
                          {role.year}
                        </span>
                      </div>
                      <p className="text-foreground/60 font-medium mb-3">{role.organization}</p>
                      <p className="text-foreground/75 leading-relaxed">{role.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
