"use client"

export default function Footer() {
  return (
    <footer className="theme-border border-t px-4 py-10 sm:px-6 lg:px-8">
      <div className="content-width flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="theme-strong font-semibold">Ayni Ibrahim</p><p className="theme-muted mt-1 text-sm">Full-Stack Web Developer</p></div>
        <div className="theme-muted flex flex-wrap gap-5 text-sm"><a href="https://github.com/ayniibrahim" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a><a href="https://linkedin.com/in/ayni-ibrahim" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a><a href="https://x.com/ayni_ibrahim" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">X</a><a href="mailto:ayniibrahim68@gmail.com" className="hover:text-foreground">Email</a></div>
        <div className="theme-muted text-left text-sm sm:text-right"><p>© 2026 Ayni Ibrahim. All rights reserved.</p><p className="mt-1">Built with passion and modern web technologies.</p></div>
        </div>
    </footer>
  )
}
