"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (formData.message.trim().length < 10) {
      setError("Please include a little more detail in your message.")
      return
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
    window.location.href = `mailto:ayniibrahim68@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const socialLinks = [
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/ayni-ibrahim",
      color: "hover:text-blue-600",
    },
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/ayniibrahim",
      color: "hover:text-gray-800 dark:hover:text-gray-300",
    },
    {
      label: "X",
      icon: Github,
      href: "https://x.com/ayni_ibrahim",
      color: "hover:text-foreground",
    },
    {
      label: "Email",
      icon: Mail,
      href: "mailto:ayniibrahim68@gmail.com",
      color: "hover:text-indigo-600",
    },
  ]

  return (
    <section id="contact" className="section-shell">
      <div className="content-width">
        <div className="section-heading mb-12"><p className="eyebrow">Start a conversation</p><h2>Let&apos;s Build Something Great</h2><p>Have a project, opportunity, or idea? I&apos;d love to hear about it.</p></div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6 sm:p-8">
              <div>
                  <label htmlFor="name" className="theme-strong mb-2 block text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="John Doe"
                />
              </div>

              <div>
                  <label htmlFor="email" className="theme-strong mb-2 block text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                  <label htmlFor="message" className="theme-strong mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="field-input resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="primary-button w-full justify-center"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              {submitted && (
                <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-800 dark:text-green-300">
                  Your email app is ready with the message. Send it there to reach me directly.
                </div>
              )}
              {error && <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-800 dark:text-rose-100">{error}</div>}
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="theme-strong text-2xl font-semibold">Find me online</h3>
              <p className="theme-body leading-8">I&apos;m always interested in hearing about new projects and opportunities. Reach out through any of these channels.</p>

              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`theme-muted flex items-center gap-3 ${social.color} transition-colors group`}
                      target={social.label !== "Email" ? "_blank" : undefined}
                      rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    >
                      <div className="theme-border theme-surface flex h-10 w-10 items-center justify-center rounded-xl border transition-colors group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10">
                        {social.label === "X" ? <span className="font-bold">X</span> : <Icon className="h-5 w-5" />}
                      </div>
                      <span className="font-medium">{social.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
