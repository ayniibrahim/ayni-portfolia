"use client"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="hero-grid relative overflow-hidden px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-32 lg:pt-40">
      <div className="content-width grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10 space-y-8">
          <div className="animate-fade-up space-y-6">
            <p className="eyebrow">Available for opportunities</p>
            <h1 className="theme-strong max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
              Hi, I&apos;m <span className="gradient-text">Ayni Ibrahim</span>
            </h1>
            <h2 className="theme-strong max-w-2xl text-2xl font-medium sm:text-3xl">Full-Stack Web Developer</h2>
            <p className="theme-body max-w-2xl text-lg leading-8 sm:text-xl">
              I build modern, responsive, and scalable web applications that combine thoughtful design with reliable functionality.
            </p>
          </div>

          <div className="animate-fade-up flex flex-wrap gap-4 [animation-delay:120ms]">
            <button onClick={scrollToProjects} className="primary-button">
              View My Projects <ArrowRight className="h-4 w-4" />
            </button>
            <a href="/Ayni_Ibrahim_Abdi_FullStack_CV.pdf" download className="secondary-button">
              Download CV <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="animate-fade-up theme-muted flex flex-wrap items-center gap-5 text-sm [animation-delay:240ms]">
            <a href="https://github.com/ayniibrahim" target="_blank" rel="noopener noreferrer" className="social-link"><Github className="h-4 w-4" /> GitHub</a>
            <a href="https://linkedin.com/in/ayni-ibrahim" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href="https://x.com/ayni_ibrahim" target="_blank" rel="noopener noreferrer" className="social-link"><span className="font-bold">X</span> X</a>
            <a href="mailto:ayniibrahim68@gmail.com" className="social-link"><Mail className="h-4 w-4" /> Email</a>
          </div>

          <p className="font-mono text-xs tracking-wide text-cyan-700 dark:text-cyan-200/60">React <span className="text-foreground/30">•</span> Next.js <span className="text-foreground/30">•</span> Node.js <span className="text-foreground/30">•</span> MongoDB <span className="text-foreground/30">•</span> JavaScript</p>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:180ms]">
          <div className="code-orbit absolute -inset-5 rounded-[2rem] border border-cyan-200/10" />
          <div className="glass-card relative overflow-hidden p-5 shadow-2xl shadow-cyan-950/30">
            <div className="theme-border mb-6 flex items-center justify-between border-b pb-4">
              <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-200/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" /></div>
              <span className="theme-muted font-mono text-[10px]">portfolio.tsx</span>
            </div>
            <pre className="theme-body overflow-x-auto font-mono text-sm leading-8"><code><span className="text-cyan-700 dark:text-cyan-200">const</span> developer = {'{'}{"\n"}  name: <span className="text-fuchsia-700 dark:text-fuchsia-200">&quot;Ayni Ibrahim&quot;</span>,{"\n"}  focus: <span className="text-fuchsia-700 dark:text-fuchsia-200">&quot;full-stack web&quot;</span>,{"\n"}  mindset: <span className="text-fuchsia-700 dark:text-fuchsia-200">&quot;build with purpose&quot;</span>,{"\n"}  available: <span className="text-emerald-700 dark:text-emerald-200">true</span>,{"\n"}{'}'}</code></pre>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-200/10 bg-emerald-200/5 px-4 py-3 text-xs text-emerald-100/75"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" /> Shipping thoughtful digital experiences</div>
          </div>
        </div>
      </div>
    </section>
  )
}
