import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CTA() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative section-pad overflow-hidden bg-brand-gradient-2 bg-[length:200%_200%] animate-gradientMove text-white text-center">
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl animate-floatSlow" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-white/10 blur-3xl animate-floatSlow" style={{ animationDelay: '2s' }} aria-hidden="true" />

      <div className="container-max relative">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto">
            Start building better financial habits today
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-white/90 mt-5 text-lg max-w-xl mx-auto leading-relaxed">
            Track your money. Understand your spending. Budget smarter. Save with confidence.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="flex flex-wrap justify-center gap-4 mt-9">
            <a href="#demo" onClick={(e) => scrollTo(e, '#demo')} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-blue-deep transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              Try Expense Tracker AI
              <ArrowRight size={18} />
            </a>
            <a href="#features" onClick={(e) => scrollTo(e, '#features')} className="btn-ghost-light">
              Learn more
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
