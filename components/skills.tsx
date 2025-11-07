"use client"

import { motion } from "framer-motion"
import { Code2, Database, Zap } from "lucide-react"

const skillCategories = [
  {
    category: "Front-End",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","Bootstrap"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Back-End",
    icon: Database,
    skills: ["Node.js", "Express.js", "PHP", "SpringBoot" ],
    color: "from-indigo-500 to-blue-500",
  },
  {
    category: "Tools & Others",
    icon: Zap,
    skills: [ "GitHub", "Postman", "Figma"],
    color: "from-violet-500 to-indigo-500",
  },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            A diverse toolkit built through hands-on experience and continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div key={category.category} variants={itemVariants} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative bg-background border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Header with icon */}
                  <div className={`inline-flex p-3 bg-gradient-to-br ${category.color} rounded-lg mb-6`}>
                    <Icon size={28} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-6">{category.category}</h3>

                  {/* Skills grid */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/30 hover:bg-primary/20 transition-colors duration-300 cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
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
