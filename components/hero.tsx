"use client"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
              Ayni Ibrahim
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 text-balance max-w-2xl mx-auto leading-relaxed">
            A Full Stack Developer crafting beautiful and functional web experiences with modern technologies.
          </p>
        </div>

        <button
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          View My Work
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
