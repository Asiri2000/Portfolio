import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "MyCare - Healthcare System",
    description:
      "A comprehensive healthcare management system with appointment scheduling, patient records, and medical history tracking.",
    image: "/healthcare-dashboard.jpg",
    tags: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "CinemaGate - Movie Booking Platform",
    description:
      "An online movie booking platform featuring seat selection, payment integration, and reservation management.",
    image: "/cinema-booking-app.jpg",
    tags: ["React", "PHP", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "TechStore - E-commerce Platform",
    description:
      "A full-featured online electronics store with product catalog, shopping cart, and secure checkout functionality.",
    image: "/ecommerce-store.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text">Featured Projects</h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-lg overflow-hidden border border-border hover:border-accent transition-colors card-hover bg-background"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-56 object-cover" />

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
