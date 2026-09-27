import { Wrench, Heart, TrendingUp } from 'lucide-react'
import Reveal from './Reveal'

const GROUPS = [
  {
    icon: Wrench,
    title: 'Functional',
    color: 'blue',
    points: ['Better expense tracking', 'Smarter budgeting', 'Spending visibility', 'Savings goals'],
  },
  {
    icon: Heart,
    title: 'Emotional',
    color: 'purple',
    points: ['More financial confidence', 'Less money-related stress', 'Better control', 'Peace of mind'],
  },
  {
    icon: TrendingUp,
    title: 'Long-term',
    color: 'green',
    points: ['Better financial habits', 'Increased savings', 'Improved financial awareness'],
  },
]

const ACCENTS = {
  blue: { bg: 'bg-brand-blue/10', text: 'text-brand-blue', dot: 'bg-brand-blue' },
  purple: { bg: 'bg-brand-purple/10', text: 'text-brand-purple', dot: 'bg-brand-purple' },
  green: { bg: 'bg-brand-green/10', text: 'text-brand-green', dot: 'bg-brand-green' },
}

export default function Benefits() {
  return (
    <section id="benefits" className="section-pad bg-white">
      <div className="container-max">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">More than an expense tracker</h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {GROUPS.map((g, i) => {
            const a = ACCENTS[g.color]
            return (
              <Reveal key={g.title} delay={i * 100} className="rounded-3xl border border-slate-100 p-8 shadow-card hover:shadow-soft transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${a.bg} flex items-center justify-center mb-6`}>
                  <g.icon size={22} className={a.text} />
                </div>
                <h3 className="font-display text-xl font-semibold text-brand-navy">{g.title}</h3>
                <ul className="mt-5 space-y-3">
                  {g.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-slate-600 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${a.dot} shrink-0`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
