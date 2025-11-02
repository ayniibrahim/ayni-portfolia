"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
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
      label: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/ayni_ibrahim",
      color: "hover:text-blue-400",
    },
    {
      label: "Email",
      icon: Mail,
      href: "mailto:ayniibrahim68@gmail.com",
      color: "hover:text-indigo-600",
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 text-green-800 dark:text-green-300 rounded-lg text-sm">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Let's Connect</h3>
              <p className="text-foreground/70 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out through
                any of these channels.
              </p>

              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`flex items-center gap-3 text-foreground/70 ${social.color} transition-colors group`}
                      target={social.label !== "Email" ? "_blank" : undefined}
                      rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    >
                      <div className="p-2 rounded-lg bg-muted group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
                        <Icon className="w-5 h-5" />
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
