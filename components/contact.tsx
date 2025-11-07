"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a
                    href="mailto:asiri@example.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    asiri@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <a href="tel:+94701234567" className="text-muted-foreground hover:text-accent transition-colors">
                    +94 70 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-muted-foreground">Badulla, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", url: "#" },
                  { name: "LinkedIn", url: "#" },
                  { name: "Twitter", url: "#" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Message</label>
              <textarea
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
