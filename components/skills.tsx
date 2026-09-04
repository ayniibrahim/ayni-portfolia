"use client"

const skillCategories = [
  { category: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", skills: ["Node.js", "Express.js", "Python", "REST APIs"] },
  { category: "Database", skills: ["MongoDB", "MySQL", "PostgreSQL", "SQL"] },
  { category: "Tools & Platforms", skills: ["Git", "GitHub", "Vercel", "Supabase", "VS Code"] },
]

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="content-width">
        <div className="section-heading mb-12"><p className="eyebrow">The toolkit</p><h2>Skills & technologies</h2><p>The tools I reach for when turning an idea into a dependable product.</p></div>
        <div className="grid gap-4 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="glass-card p-6"
            >
              <h3 className="theme-strong mb-5 text-xl font-semibold">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="theme-border theme-surface theme-body rounded-lg border px-3 py-2 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
