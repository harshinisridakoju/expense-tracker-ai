import { HelpCircle, TrendingDown, ClipboardX, BarChart3, PiggyBank } from 'lucide-react'
import Reveal from './Reveal'

const PROBLEMS = [
  { icon: HelpCircle, title: 'Forgotten daily expenses', text: 'Small purchases slip by unnoticed until the month adds up to a surprise.' },
  { icon: TrendingDown, title: 'Overspending without realizing', text: 'Without a clear picture, it is easy to spend more than planned.' },
  { icon: ClipboardX, title: 'Budgets that do not stick', text: 'Generic budgets rarely match how a student or young professional actually spends.' },
  { icon: BarChart3, title: 'No personalized insight', text: 'Bank statements show numbers, not the patterns behind them.' },
  { icon: PiggyBank, title: 'Inconsistent saving', text: 'Good intentions to save often fade without a system to support them.' },
]

export default function ProblemSection() {
  return (
    <section className="section-pad">
      <div className="container-max">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">Where does your money go?</h2>
          <p className="text-slate-500 mt-4 text-lg leading-relaxed">
            Students and young professionals share the same everyday money struggles.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:shadow-soft transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                <p.icon size={20} className="text-brand-blue" />
              </div>
              <h3 className="font-display font-semibold text-brand-navy">{p.title}</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
