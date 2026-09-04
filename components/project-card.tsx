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
    <article
      ref={ref}
      className={`glass-card group overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="theme-media relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="space-y-5 p-6">
        <h3 className="theme-strong text-2xl font-semibold tracking-tight transition-colors group-hover:text-cyan-700 dark:group-hover:text-cyan-200">{project.title}</h3>

        <p className="theme-body leading-7">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="theme-border theme-surface theme-body rounded-full border px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="secondary-button !px-4 !py-2 !text-xs" aria-label={`${project.title} GitHub repository`}><Github className="h-4 w-4" /> Code</a>}
          {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="primary-button !px-4 !py-2 !text-xs" aria-label={`${project.title} live demo`}><ExternalLink className="h-4 w-4" /> Live Demo</a>}
        </div>
      </div>
    </article>
  )
}
