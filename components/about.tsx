"use client"

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">About Me</h2>

        <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
          <p>
            I'm an IT student and aspiring Full Stack Developer passionate about creating innovative digital solutions.
            With a strong foundation in both frontend and backend technologies, I love tackling complex problems and
            building applications that make a difference.
          </p>

          <p>
            My journey in tech has been driven by curiosity and a desire to continuously learn. I believe in writing
            clean, maintainable code and follow best practices in every project I undertake. Whether it's designing
            intuitive user interfaces or architecting robust backend systems, I'm committed to excellence.
          </p>

          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            collaborating with other developers to build something amazing. I'm always open to interesting opportunities
            and love connecting with fellow tech enthusiasts.
          </p>
        </div>
      </div>
    </section>
  )
}
