import { ArrowRight, Sparkles, Users } from 'lucide-react'
import DashboardMockup from './DashboardMockup'
import Reveal from './Reveal'

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-mesh-light">
      {/* Decorative floating blobs */}
      <div className="absolute top-24 -left-24 w-72 h-72 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-purple/10 blur-3xl" aria-hidden="true" />

      <div className="container-max px-6 sm:px-8 lg:px-12 relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
              <Sparkles size={13} className="text-brand-purple" />
              AI-powered personal finance
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-[2.6rem] sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight mt-6 text-brand-navy">
              Take control of your money with AI
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="text-lg text-slate-500 mt-6 max-w-lg leading-relaxed">
              Track your expenses, understand your spending, build smarter budgets, and save with confidence.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap gap-4 mt-9">
              <a href="#demo" onClick={(e) => scrollTo(e, '#demo')} className="btn-primary">
                Try Expense Tracker AI
                <ArrowRight size={18} />
              </a>
              <a href="#features" onClick={(e) => scrollTo(e, '#features')} className="btn-secondary">
                Explore Features
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="flex items-center gap-2 mt-9 text-sm text-slate-500">
              <Users size={16} className="text-brand-blue" />
              Built for students &amp; young professionals
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="flex justify-center">
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  )
}
