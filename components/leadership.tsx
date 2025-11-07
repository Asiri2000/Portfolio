"use client"

import { motion } from "framer-motion"
import { Award, Users, Zap } from "lucide-react"

const leadershipRoles = [
  {
    year: "2025/2026",
    role: "Chair, IEEE Student Branch",
    organization: "Uva Wellassa University",
    description:
      "Driving the vision of the IEEE Student Branch by fostering innovation, collaboration, and professional growth among undergraduates. Leading initiatives that empower students through technology, research, and community impact while mentoring future leaders in tech and engineering.",
    icon: Award,
  },
  {
    year: "2024/2025",
    role: "Vice Chair, IEEE Student Branch",
    organization: "Uva Wellassa University",
    description:
      "Collaborated closely with the executive team to strengthen the branch’s technical and community presence. Played a key role in planning and executing hands-on workshops, tech talks, and innovation programs that inspired student engagement and leadership in emerging technologies.",
    icon: Award,
  },
 
{
    year: "2025/2026",
    role: "Vice Captain, Tennis Team",
    organization: "Uva Wellassa University",
    description:
      "Played a key role in leading and motivating the university tennis team, supporting strategic planning, training sessions, and fostering teamwork to achieve competitive excellence.",
    icon: Users,
  },


  {
    year: "2023",
    role: "Chair, Project Pillam",
    organization: "Rotaract Club of Uva Wellassa University",
    description:
      "Organized community service project focused on education and digital literacy for underprivileged school children.",
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
