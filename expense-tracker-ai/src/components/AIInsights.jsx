import { Sparkles, TrendingUp, Wallet, Target } from 'lucide-react'
import Reveal from './Reveal'

const INSIGHTS = [
  { icon: TrendingUp, text: "You're spending 18% more on food this month.", tag: 'Spending pattern' },
  { icon: Wallet, text: 'You could save ₹1,200 by reducing unnecessary subscriptions.', tag: 'Saving suggestion' },
  { icon: Target, text: "You're on track to reach your savings goal.", tag: 'Goal progress' },
]

export default function AIInsights() {
  return (
    <section className="relative section-pad bg-brand-navy text-white overflow-hidden">
      <div className="absolute inset-0 bg-mesh-light opacity-40" aria-hidden="true" />
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-brand-purple/20 blur-[100px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-cyan/15 blur-[100px]" aria-hidden="true" />

      <div className="container-max relative">
        <Reveal className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
            <Sparkles size={13} />
            Powered by AI
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mt-5">Your money, with a smarter perspective</h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5 mt-12">
          {INSIGHTS.map((item, i) => (
            <Reveal
              key={item.text}
              delay={i * 100}
              className="group rounded-2xl bg-white/[0.06] border border-white/10 p-6 backdrop-blur-sm hover:bg-white/[0.1] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-brand-cyan/20 transition-colors">
                <item.icon size={18} className="text-brand-cyan" />
              </div>
              <p className="text-[11px] font-semibold text-slate-400">{item.tag}</p>
              <p className="text-[15px] leading-relaxed mt-2 text-slate-100">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
