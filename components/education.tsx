import { Award } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-text">Education</h2>

        <div className="space-y-8">
          {/* Main Education */}
          <div className="border-l-4 border-accent pl-6 py-4">
            <h3 className="text-2xl font-bold mb-2">BSc. Computer Science and Technology</h3>
            <p className="text-lg text-accent font-semibold mb-1">Uva Wellassa University of Sri Lanka</p>
            <p className="text-muted-foreground">Currently Enrolled</p>
          </div>

          {/* Achievements */}
          <div className="pt-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" />
              Achievements & Certifications
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Top 10 Hackathon Participant",
                "Full Stack Development Certification",
                "Web Development Excellence Award",
                "GitHub Contributor Badge",
              ].map((achievement) => (
                <div
                  key={achievement}
                  className="p-4 rounded-lg bg-muted border border-border hover:border-accent transition-colors"
                >
                  <p className="font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
