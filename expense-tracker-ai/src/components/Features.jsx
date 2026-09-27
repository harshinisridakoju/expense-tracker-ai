import { Layers, Target, LineChart, BellRing, Trophy, Lightbulb } from 'lucide-react'
import Reveal from './Reveal'

const FEATURES = [
  { icon: Layers, title: 'AI expense categorization', text: 'Automatically organize expenses into meaningful categories.', accent: 'blue' },
  { icon: Target, title: 'Smart budget planning', text: 'Set budgets and monitor your spending progress.', accent: 'green' },
  { icon: LineChart, title: 'Personalized spending insights', text: 'Understand where your money goes and identify spending patterns.', accent: 'purple' },
  { icon: BellRing, title: 'Overspending alerts', text: 'Get notified when your spending moves beyond your planned budget.', accent: 'blue' },
  { icon: Trophy, title: 'Savings goals', text: 'Set financial goals and track your progress.', accent: 'green' },
  { icon: Lightbulb, title: 'AI saving suggestions', text: 'Receive practical suggestions based on your spending habits.', accent: 'purple' },
]

const ACCENTS = {
  blue: { bg: 'bg-brand-blue/10', text: 'text-brand-blue', ring: 'group-hover:ring-brand-blue/20' },
  green: { bg: 'bg-brand-green/10', text: 'text-brand-green', ring: 'group-hover:ring-brand-green/20' },
  purple: { bg: 'bg-brand-purple/10', text: 'text-brand-purple', ring: 'group-hover:ring-brand-purple/20' },
}

export default function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="container-max">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">Everything you need to spend smarter</h2>
          <p className="text-slate-500 mt-4 text-lg leading-relaxed">
            A complete toolkit, built around how students and young professionals actually manage money.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {FEATURES.map((f, i) => {
            const a = ACCENTS[f.accent]
            return (
              <Reveal key={f.title} delay={i * 60} className={`group rounded-2xl border border-slate-100 bg-white p-6 shadow-card hover:-translate-y-1.5 hover:shadow-soft ring-1 ring-transparent ${a.ring} transition-all duration-300`}>
                <div className={`w-11 h-11 rounded-xl ${a.bg} flex items-center justify-center mb-4`}>
                  <f.icon size={20} className={a.text} />
                </div>
                <h3 className="font-display font-semibold text-brand-navy">{f.title}</h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{f.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
