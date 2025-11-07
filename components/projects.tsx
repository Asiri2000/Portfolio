"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "MyCare",
    subtitle: "Online Healthcare Platform",
    description:
      "Comprehensive healthcare platform with patient dashboards, appointment scheduling, and medical records management.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "linear-gradient(135deg, from-blue-500 to-cyan-500)",
    links: { github: "#", demo: "#" },
  },
  {
    title: "CinemaGate",
    subtitle: "Movie Booking Platform",
    description:
      "Full-featured movie ticketing system with real-time seat selection, payment integration, and booking history.",
    technologies: ["React", "Express.js", "MySQL", "Stripe API"],
    image: "linear-gradient(135deg, from-indigo-500 to-purple-500)",
    links: { github: "#", demo: "#" },
  },
  {
    title: "Online Electronics Store",
    subtitle: "E-commerce Platform",
    description:
      "OOP-based PHP system with complete order management, inventory tracking, and customer authentication.",
    technologies: ["PHP", "MySQL", "Bootstrap", "Payment Gateway"],
    image: "linear-gradient(135deg, from-violet-500 to-indigo-500)",
    links: { github: "#", demo: "#" },
  },
]

export default function Projects() {
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Showcasing solutions built with modern technologies and best practices
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="group h-full">
              <div className="relative h-full bg-background border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col">
                {/* Project Image */}
                <div className="h-48 bg-cover bg-center relative overflow-hidden" style={{ background: project.image }}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-primary font-semibold mb-3 text-sm">{project.subtitle}</p>
                  <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.links.github}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.links.demo}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
