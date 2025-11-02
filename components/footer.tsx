"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">© {currentYear} Ayni Ibrahim. All rights reserved.</p>
          <p className="text-foreground/60 text-sm">Crafted with passion and modern technologies.</p>
        </div>
      </div>
    </footer>
  )
}
