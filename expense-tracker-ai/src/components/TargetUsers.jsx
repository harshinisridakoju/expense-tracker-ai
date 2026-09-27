import { GraduationCap, Briefcase } from 'lucide-react'
import Reveal from './Reveal'

export default function TargetUsers() {
  return (
    <section id="about" className="section-pad">
      <div className="container-max">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">Built for your everyday financial life</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          <Reveal className="relative rounded-3xl overflow-hidden bg-brand-gradient p-8 sm:p-10 text-white min-h-[280px] flex flex-col justify-end">
            <AbstractBlob className="absolute top-6 right-6 opacity-90" />
            <GraduationCap size={28} className="mb-4" />
            <h3 className="font-display text-2xl font-semibold">Students</h3>
            <p className="text-white/85 mt-2 max-w-xs">Manage daily spending, college expenses, food, shopping and savings.</p>
          </Reveal>

          <Reveal delay={100} className="relative rounded-3xl overflow-hidden bg-brand-gradient-2 p-8 sm:p-10 text-white min-h-[280px] flex flex-col justify-end">
            <AbstractBlob className="absolute top-6 right-6 opacity-90" variant="alt" />
            <Briefcase size={28} className="mb-4" />
            <h3 className="font-display text-2xl font-semibold">Young professionals</h3>
            <p className="text-white/85 mt-2 max-w-xs">Control monthly spending, manage budgets and work toward financial goals.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function AbstractBlob({ className = '', variant = 'default' }) {
  const ringColor = variant === 'alt' ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.4)'
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" className={className} aria-hidden="true">
      <circle cx="44" cy="44" r="42" stroke={ringColor} strokeWidth="1.5" fill="none" />
      <circle cx="44" cy="34" r="14" fill="rgba(255,255,255,0.9)" />
      <path d="M18 76c0-14 11.5-24 26-24s26 10 26 24" fill="rgba(255,255,255,0.35)" />
    </svg>
  )
}
