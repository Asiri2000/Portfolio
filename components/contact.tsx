"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Zap, Send } from "lucide-react"

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#", color: "hover:bg-gray-600" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-blue-600" },
  { icon: Mail, label: "Email", href: "mailto:asiri@example.com", color: "hover:bg-red-600" },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's connect and create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {isSubmitted ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
              <p className="text-foreground/70 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-foreground/60 font-medium uppercase tracking-wider">Connect via</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-lg border border-primary/30 ${social.color} transition-all duration-300`}
                      aria-label={social.label}
                    >
                      <Icon size={24} />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Zap size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Quick Response</p>
                  <p className="text-sm text-foreground/70">
                    I typically respond to inquiries within 24-48 hours. Looking forward to connecting!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
