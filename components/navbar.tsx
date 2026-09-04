"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun, Circle } from "lucide-react"

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    if (typeof window === "undefined") return
    const sections = navLinks.map((link) => document.querySelector(link.href))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: "-30% 0px -55%" },
    )
    sections.forEach((section) => section && observer.observe(section))
    return () => observer.disconnect()
  })

  return (
    <nav className="theme-nav sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="#home"
            className="theme-strong text-2xl font-bold tracking-tight transition-opacity hover:opacity-80"
          >
            Ayni<span className="text-cyan-300">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors duration-200 ${activeSection === link.href.slice(1) ? "theme-strong" : "theme-muted hover:text-foreground"}`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-cyan-300" />}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="theme-border theme-surface rounded-lg border p-2 text-foreground/70 transition-colors duration-200 hover:text-foreground"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5 text-cyan-300" /> : <Moon className="h-5 w-5 text-cyan-300" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200 sm:inline-flex"><Circle className="mr-1.5 h-2 w-2 fill-current" />Available for opportunities</span>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="theme-border theme-surface rounded-lg border p-2 text-foreground/70 transition-colors hover:text-foreground"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5 text-cyan-300" /> : <Moon className="h-5 w-5 text-cyan-300" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-foreground/80 transition-colors hover:bg-foreground/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="theme-border space-y-2 border-t pb-4 pt-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${activeSection === link.href.slice(1) ? "theme-surface theme-strong" : "theme-muted hover:bg-foreground/5 hover:text-foreground"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
