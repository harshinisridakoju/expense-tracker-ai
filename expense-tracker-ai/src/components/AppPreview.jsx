import { Fingerprint, LayoutGrid, PlusCircle, Tags, PieChart, TrendingUp, Trophy, UserCircle2 } from 'lucide-react'
import Logo from './Logo'
import Reveal from './Reveal'

const SCREENS = [
  { name: 'Login', icon: Fingerprint },
  { name: 'Dashboard', icon: LayoutGrid },
  { name: 'Add expense', icon: PlusCircle },
  { name: 'AI categorization', icon: Tags },
  { name: 'Budget', icon: PieChart },
  { name: 'Spending insights', icon: TrendingUp },
  { name: 'Savings goals', icon: Trophy },
  { name: 'Profile', icon: UserCircle2 },
]

function MiniPhone({ name, Icon, index }) {
  return (
    <Reveal delay={index * 60} className="shrink-0 w-[168px] snap-center">
      <div className="rounded-[2rem] border-[6px] border-brand-navy bg-brand-navy shadow-soft">
        <div className="rounded-[1.5rem] overflow-hidden bg-white h-[340px] relative flex flex-col">
          <div className="flex items-center justify-between px-3.5 pt-3 pb-2">
            <Logo size={16} withWordmark={false} />
            <span className="w-8 h-1 rounded-full bg-slate-100" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-3 px-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
              <Icon size={22} className="text-brand-blue" />
            </div>
            <div className="w-full space-y-1.5">
              <div className="h-1.5 rounded-full bg-slate-100 w-full" />
              <div className="h-1.5 rounded-full bg-slate-100 w-3/4 mx-auto" />
              <div className="h-1.5 rounded-full bg-slate-100 w-5/6 mx-auto" />
            </div>
          </div>
          <div className="h-10 border-t border-slate-100 flex items-center justify-center gap-4 px-3">
            {[0, 1, 2, 3].map((d) => (
              <span key={d} className={`w-1.5 h-1.5 rounded-full ${d === 0 ? 'bg-brand-blue' : 'bg-slate-200'}`} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-sm font-medium text-slate-600 mt-4">{name}</p>
    </Reveal>
  )
}

export default function AppPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">A closer look inside the app</h2>
          <p className="text-slate-500 mt-4 text-lg leading-relaxed">Every screen, designed to keep spending clear and stress-free.</p>
        </Reveal>

        <div className="flex gap-6 mt-12 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0">
          {SCREENS.map((s, i) => (
            <MiniPhone key={s.name} name={s.name} Icon={s.icon} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
