import { CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'
import LiveDemo from './LiveDemo'

const POINTS = [
  'Understands your spending automatically',
  'Builds budgets that fit your real habits',
  'Nudges you before you overspend',
]

export default function SolutionSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">Meet Expense Tracker AI</h2>
          <p className="text-slate-500 mt-5 text-lg leading-relaxed max-w-md">
            One intelligent app to track spending, understand your habits, manage your budget, and build better financial habits.
          </p>
          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-brand-green mt-0.5 shrink-0" />
                <span className="text-slate-600">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <LiveDemo />
        </Reveal>
      </div>
    </section>
  )
}
