"use client"

import { Code2, Database, LayoutPanelTop, Server } from "lucide-react"

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible, and polished interfaces using modern frontend technologies.",
    icon: LayoutPanelTop,
  },
  {
    title: "Full-Stack Development",
    description: "Developing complete web applications from user interfaces to backend APIs and databases.",
    icon: Code2,
  },
  {
    title: "Responsive Web Design",
    description: "Creating experiences that work beautifully across desktop, tablet, and mobile devices.",
    icon: Server,
  },
  {
    title: "API & Database Integration",
    description: "Connecting applications with APIs, databases, authentication, and backend services.",
    icon: Database,
  },
]

export default function WhatIDo() {
  return (
    <section id="services" className="section-shell">
      <div className="content-width">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>What I Do</h2>
          <p>From a polished interface to the systems behind it, I build digital products with care at every layer.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="glass-card group p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="theme-strong text-xl font-semibold">{service.title}</h3>
                <p className="theme-body mt-3 leading-7">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}