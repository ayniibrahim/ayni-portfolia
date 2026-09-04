"use client"
import ProjectCard from "./project-card"

const projectsData = [
  {
    id: 1,
    title: "VELORA — Curated Luxury Fashion",
    description: "A premium e-commerce experience for curated luxury fashion, featuring editorial collections, category browsing, product discovery, and a seamless shopping experience.",
    image: "/velora-hero.jpg",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/ayniibrahim/velora-store",
    live: "https://velora-store-nine.vercel.app/",
  },
  {
    id: 2,
    title: "Nexora Admin Panel",
    description: "A modern admin dashboard designed to monitor revenue, users, orders, transactions, activity, and business performance through a focused workspace.",
    image: "/nexora-dashboard.jpg",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/ayniibrahim/NEXORA-Admin-Panel",
    live: "https://nexora-admin-omega.vercel.app/",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application that provides current weather information and forecast data through a weather API.",
    image: "/weather-dashboard-interface.png",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/ayniibrahim/weather-app",
    live: "https://weather-app-topaz-beta-88.vercel.app/",
  },
  {
    id: 4,
    title: "Mira Café & Restaurant",
    description: "A warm and elegant café and restaurant experience featuring a refined menu, inviting atmosphere, reservations, online ordering, and a seamless browsing experience.",
    image: "/mira-cafe-gallery-preview.jpg",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/ayniibrahim/Mira-cafe-and-restaurant",
    live: "https://mira-cafe-restaurant.vercel.app/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-shell section-tint">
      <div className="content-width">
        <div className="section-heading mb-12"><p className="eyebrow">Selected work</p><h2>Featured Projects</h2><p>Selected projects showcasing my experience building modern web applications.</p></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
