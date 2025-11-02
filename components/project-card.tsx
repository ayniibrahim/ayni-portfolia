"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  live: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group rounded-lg overflow-hidden border border-border hover:border-indigo-400 bg-card hover:shadow-xl transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Image Container with Lazy Loading */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold group-hover:text-indigo-600 transition-colors">{project.title}</h3>

        <p className="text-foreground/70 leading-relaxed">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          <a
            href={project.github}
            className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-lg text-foreground/70 hover:text-indigo-600 transition-colors"
            aria-label="GitHub repository"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm font-medium">Code</span>
          </a>
          <a
            href={project.live}
            className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-indigo-100 dark:hover:bg-indigo-900/30 rounded-lg text-foreground/70 hover:text-indigo-600 transition-colors"
            aria-label="Live demo"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm font-medium">Live</span>
          </a>
        </div>
      </div>
    </div>
  )
}
