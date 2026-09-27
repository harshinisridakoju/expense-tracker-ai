import { PlusCircle, BrainCircuit, Target, TrendingUp } from 'lucide-react'
import Reveal from './Reveal'

const STEPS = [
  { icon: PlusCircle, title: 'Add your expenses', text: 'Log spending in seconds, whenever it happens.' },
  { icon: BrainCircuit, title: 'AI understands your spending', text: 'Patterns and categories are detected automatically.' },
  { icon: Target, title: 'Set budgets & goals', text: 'Define limits and savings targets that fit your life.' },
  { icon: TrendingUp, title: 'Spend smarter & save more', text: 'Follow personalized nudges and watch your savings grow.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-white">
      <div className="container-max">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">Simple. Smart. Effective.</h2>
        </Reveal>

        <div className="relative mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-green" aria-hidden="true" />
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100} className="relative text-center lg:text-left">
              <div className="w-14 h-14 rounded-2xl bg-white border-2 border-brand-blue/20 shadow-card flex items-center justify-center mx-auto lg:mx-0 relative z-10">
                <step.icon size={24} className="text-brand-blue" />
              </div>
              <p className="font-display text-sm font-semibold text-brand-blue/60 mt-5">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="font-display font-semibold text-brand-navy mt-1">{step.title}</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-[220px] mx-auto lg:mx-0">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
