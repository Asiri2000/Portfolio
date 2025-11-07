export default function About() {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="/developer-workspace.jpg" alt="Development workspace" className="rounded-lg shadow-lg" />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I'm a Computer Science student at Uva Wellassa University of Sri Lanka with a passion for creating
              innovative web solutions. My journey in technology has been driven by curiosity and a love for
              problem-solving.
            </p>

            <p className="text-lg text-muted-foreground">
              As a Full Stack Developer, I specialize in building responsive, user-centric applications using modern
              technologies. I'm constantly learning and exploring new frameworks and tools to stay at the forefront of
              web development.
            </p>

            <p className="text-lg text-muted-foreground">
              Beyond coding, I'm enthusiastic about tech innovation, open-source contributions, and sharing knowledge
              with fellow developers.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
