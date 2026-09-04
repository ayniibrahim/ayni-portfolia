"use client"

export default function About() {
  return (
    <section id="about" className="section-shell section-tint">
      <div className="content-width grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div className="section-heading">
          <p className="eyebrow">A little context</p>
          <h2>Building with curiosity and care.</h2>
        </div>
        <div>
          <p className="theme-body max-w-3xl text-xl leading-9">Computer Science graduate and Full-Stack Developer passionate about building modern web applications and solving real-world problems through technology.</p>
          <p className="theme-muted mt-6 max-w-3xl leading-8">My work spans frontend development, backend architecture, responsive UI, clean and maintainable code, problem solving, and continuous learning. I enjoy turning complex requirements into experiences that feel simple to use.</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {["5+ Projects", "Full-Stack Development", "Modern Web Technologies"].map((highlight) => <div key={highlight} className="theme-border theme-surface theme-body rounded-xl border px-4 py-4 text-sm font-medium">{highlight}</div>)}
          </div>
        </div>
      </div>
    </section>
  )
}
