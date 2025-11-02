"use client"
import ProjectCard from "./project-card"

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with product catalog, shopping cart, and payment integration.",
    image: "/ecommerce-dashboard.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team collaboration features.",
    image: "/task-management-app.png",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application that displays real-time weather data and forecasts.",
    image: "/weather-dashboard-interface.png",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A modern blog platform with markdown support, comments, and SEO optimization.",
    image: "/blog-platform-interface.jpg",
    tech: ["Next.js", "Python", "PostgreSQL"],
    github: "#",
    live: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
