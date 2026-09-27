import { Check } from 'lucide-react'
import Reveal from './Reveal'

const ITEMS = [
  'Personalized spending analysis',
  'AI-based categorization',
  'Smart budget recommendations',
  'Practical saving suggestions',
  'Habit-based financial insights',
]

export default function ValueProp() {
  return (
    <section className="relative section-pad overflow-hidden bg-brand-gradient-2 bg-[length:200%_200%] animate-gradientMove text-white">
      <div className="absolute inset-0 bg-mesh-light mix-blend-overlay opacity-60" aria-hidden="true" />
      <div className="container-max relative">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Why Expense Tracker AI?</h2>
          <p className="text-white/90 mt-5 text-lg leading-relaxed">
            AI-powered personalized expense tracking with smart insights, budgeting, and saving guidance.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-10 max-w-2xl">
          {ITEMS.map((item, i) => (
            <Reveal key={item} delay={i * 70} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Check size={13} />
              </span>
              <span className="text-white/95">{item}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
