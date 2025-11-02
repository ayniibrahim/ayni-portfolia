"use client"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "SQL"],
  },
  {
    category: "Tools & Version Control",
    skills: ["Git", "GitHub"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-lg border border-border bg-card hover:border-indigo-400 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                    <span className="text-foreground/80">{skill}</span>
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
