import { useMemo, useState } from 'react'
import { Bell, Plus, Sparkles, UtensilsCrossed, ShoppingBag, Bus, Film, ChevronRight } from 'lucide-react'
import Logo from './Logo'
import useCountUp from '../hooks/useCountUp'
import useReveal from '../hooks/useReveal'

const CATEGORY_META = {
  Food: { icon: UtensilsCrossed, color: '#3B82F6' },
  Shopping: { icon: ShoppingBag, color: '#7C3AED' },
  Transport: { icon: Bus, color: '#06B6D4' },
  Fun: { icon: Film, color: '#10B981' },
}

const INITIAL_CATEGORIES = [
  { name: 'Food', amount: 4820 },
  { name: 'Shopping', amount: 3150 },
  { name: 'Transport', amount: 1240 },
  { name: 'Fun', amount: 980 },
]

const TRANSACTIONS = [
  { name: 'Campus Cafe', category: 'Food', amount: 180, time: 'Today, 1:20 PM' },
  { name: 'Metro Card Recharge', category: 'Transport', amount: 300, time: 'Today, 9:05 AM' },
  { name: 'H&M', category: 'Shopping', amount: 1499, time: 'Yesterday' },
]

const BUDGET = 12000
const GOAL_TARGET = 25000

export default function DashboardMockup() {
  const [ref, visible] = useReveal(0.3)
  const [categories, setCategories] = useState(INITIAL_CATEGORIES)
  const [goalSaved, setGoalSaved] = useState(16250)
  const [pulse, setPulse] = useState(false)

  const spent = useMemo(() => categories.reduce((sum, c) => sum + c.amount, 0), [categories])
  const balance = 18450 - spent + 10190 // demo baseline so it stays positive and readable
  const budgetPct = Math.min(Math.round((spent / BUDGET) * 100), 100)
  const goalPct = Math.min(Math.round((goalSaved / GOAL_TARGET) * 100), 100)

  const animatedBalance = useCountUp(balance, visible)
  const animatedSpent = useCountUp(spent, visible)

  const addSampleExpense = () => {
    setCategories((prev) =>
      prev.map((c) => (c.name === 'Food' ? { ...c, amount: c.amount + 220 } : c))
    )
    setPulse(true)
    setTimeout(() => setPulse(false), 700)
  }

  return (
    <div ref={ref} className="relative select-none">
      {/* Phone frame */}
      <div className="relative w-[300px] sm:w-[320px] mx-auto rounded-[2.75rem] border-[8px] border-brand-navy bg-brand-navy shadow-2xl animate-float">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-28 h-6 bg-brand-navy rounded-b-2xl z-20" />
        <div className="rounded-[2.2rem] overflow-hidden bg-brand-bg h-[610px] relative">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-4 pb-1 text-[11px] font-semibold text-brand-navy">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="w-3.5 h-2.5 rounded-sm bg-brand-navy/70 inline-block" />
            </span>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-5 pt-2 pb-4">
            <Logo size={26} withWordmark={false} />
            <span className="font-display font-semibold text-sm text-brand-navy">Dashboard</span>
            <button aria-label="Notifications" className="w-8 h-8 rounded-full bg-white shadow-card flex items-center justify-center relative">
              <Bell size={15} className="text-brand-navy" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue" />
            </button>
          </div>

          <div className="px-5 pb-28 overflow-y-auto h-[calc(100%-84px)]">
            {/* Balance card */}
            <div className="rounded-2xl bg-brand-gradient bg-[length:200%_200%] animate-gradientMove p-5 text-white shadow-glow">
              <p className="text-xs text-white/80">Total balance</p>
              <p className="text-[28px] font-display font-bold leading-tight mt-1">
                ₹{animatedBalance.toLocaleString('en-IN')}
              </p>
              <div className="flex items-center justify-between mt-4 text-xs text-white/85">
                <span>Monthly spending</span>
                <span className={`font-semibold transition-transform ${pulse ? 'scale-125' : ''}`}>
                  ₹{animatedSpent.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Budget progress */}
            <div className="glass-card rounded-2xl p-4 mt-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
                <span>Monthly budget</span>
                <span className="text-brand-navy">{budgetPct}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-brand-blue origin-left transition-all duration-700 ease-out"
                  style={{ width: visible ? `${budgetPct}%` : '0%' }}
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-2">₹{spent.toLocaleString('en-IN')} of ₹{BUDGET.toLocaleString('en-IN')} spent</p>
            </div>

            {/* Categories */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-slate-500">Expense categories</p>
                <ChevronRight size={14} className="text-slate-400" />
              </div>
              <div className="space-y-2">
                {categories.map((c) => {
                  const meta = CATEGORY_META[c.name]
                  const Icon = meta.icon
                  return (
                    <div key={c.name} className="glass-card rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${meta.color}1A` }}>
                        <Icon size={15} style={{ color: meta.color }} />
                      </div>
                      <span className="text-[13px] font-medium text-slate-700 flex-1">{c.name}</span>
                      <span className="text-[13px] font-semibold text-brand-navy">₹{c.amount.toLocaleString('en-IN')}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Savings goal */}
            <div className="glass-card rounded-2xl p-4 mt-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
                <span>Savings goal · New laptop</span>
                <span className="text-brand-green">{goalPct}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-brand-green transition-all duration-700 ease-out"
                  style={{ width: visible ? `${goalPct}%` : '0%' }}
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-2">₹{goalSaved.toLocaleString('en-IN')} of ₹{GOAL_TARGET.toLocaleString('en-IN')} saved</p>
            </div>

            {/* AI insight */}
            <div className="rounded-2xl mt-4 p-4 bg-brand-navy text-white relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-brand-purple/30 blur-2xl animate-glow" />
              <div className="flex items-start gap-2 relative">
                <Sparkles size={16} className="text-brand-cyan mt-0.5 shrink-0" />
                <p className="text-[12px] leading-relaxed text-slate-200">
                  You're spending <span className="text-white font-semibold">18% more</span> on food this month. Try a weekly limit of ₹1,000.
                </p>
              </div>
            </div>

            {/* Recent transactions */}
            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-500 mb-2">Recent transactions</p>
              <div className="space-y-2">
                {TRANSACTIONS.map((t) => (
                  <div key={t.name} className="flex items-center justify-between py-1.5">
                    <div>
                      <p className="text-[13px] font-medium text-slate-700">{t.name}</p>
                      <p className="text-[10.5px] text-slate-400">{t.time}</p>
                    </div>
                    <span className="text-[13px] font-semibold text-brand-navy">−₹{t.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add expense floating button (demo interactive) */}
          <button
            onClick={addSampleExpense}
            className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-brand-blue text-white shadow-glow flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
            aria-label="Add a sample expense"
          >
            <Plus size={22} />
          </button>
        </div>
      </div>

      {/* Floating decorative badges */}
      <div className="hidden sm:flex absolute -left-10 top-16 glass-card rounded-2xl px-4 py-3 items-center gap-2 animate-floatSlow shadow-soft">
        <div className="w-8 h-8 rounded-full bg-brand-green/15 flex items-center justify-center">
          <span className="text-brand-green text-xs font-bold">₹</span>
        </div>
        <div>
          <p className="text-[10px] text-slate-400 leading-none">Saved this month</p>
          <p className="text-sm font-semibold text-brand-navy">₹3,250</p>
        </div>
      </div>
      <div
        className="hidden sm:flex absolute -right-8 bottom-24 glass-card rounded-2xl px-4 py-3 items-center gap-2 animate-floatSlow shadow-soft"
        style={{ animationDelay: '1.5s' }}
      >
        <Sparkles size={16} className="text-brand-purple" />
        <p className="text-sm font-semibold text-brand-navy">AI insight ready</p>
      </div>
    </div>
  )
}
