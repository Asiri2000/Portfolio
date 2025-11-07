import { Code2, Database, Globe, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Code2,
    skills: ["Node.js", "PHP", "REST APIs", "Authentication", "Server Management"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    title: "Tools & Others",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Linux", "Docker"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="p-6 rounded-lg bg-muted border border-border hover:border-accent transition-colors card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 mr-2 mb-2 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
