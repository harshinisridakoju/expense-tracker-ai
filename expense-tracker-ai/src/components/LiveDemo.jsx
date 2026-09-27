import { useState } from 'react'
import { Sparkles, Plus, UtensilsCrossed, ShoppingBag, Bus, Film } from 'lucide-react'

const CATEGORIES = [
  { name: 'Food', icon: UtensilsCrossed, color: '#3B82F6' },
  { name: 'Shopping', icon: ShoppingBag, color: '#7C3AED' },
  { name: 'Transport', icon: Bus, color: '#06B6D4' },
  { name: 'Fun', icon: Film, color: '#10B981' },
]

const INITIAL_SPENDING = { Food: 2350, Shopping: 1850, Transport: 1250, Fun: 970 }
const INITIAL_BUDGET = 15000

const formatRupees = (value) => `₹${value.toLocaleString('en-IN')}`

export default function LiveDemo() {
  const [amount, setAmount] = useState('250')
  const [category, setCategory] = useState('Food')
  const [budget, setBudget] = useState(String(INITIAL_BUDGET))
  const [categorySpending, setCategorySpending] = useState(INITIAL_SPENDING)
  const [transactions, setTransactions] = useState([])
  const [insight, setInsight] = useState("Add an expense below to see how the AI responds in real time.")
  const [error, setError] = useState('')

  const spent = Object.values(categorySpending).reduce((total, value) => total + value, 0)
  const budgetAmount = Math.max(Number(budget) || 0, 0)
  const savings = Math.max(budgetAmount - spent, 0)
  const budgetPct = budgetAmount > 0 ? Math.min(Math.round((spent / budgetAmount) * 100), 100) : 0
  const activeCategory = CATEGORIES.find((item) => item.name === category)
  const chartScale = Math.max(budgetAmount, ...Object.values(categorySpending), savings, 1)

  const handleAdd = (e) => {
    e.preventDefault()
    const value = Number(amount)
    if (!Number.isFinite(value) || value <= 0) {
      setError('Enter an expense amount greater than zero.')
      return
    }

    const nextSpent = spent + value
    setCategorySpending((current) => ({ ...current, [category]: current[category] + value }))
    setTransactions((current) => [{ id: Date.now(), category, amount: value }, ...current].slice(0, 4))
    setError('')
    setInsight(nextSpent > budgetAmount
      ? `This puts spending ${formatRupees(nextSpent - budgetAmount)} over budget. Adjust the budget or ease up on the next purchase.`
      : nextSpent / Math.max(budgetAmount, 1) >= 0.8
        ? `You're getting close to your budget. ${formatRupees(Math.max(budgetAmount - nextSpent, 0))} remains for the month.`
        : `Added ${formatRupees(value)} to ${category}. You have ${formatRupees(budgetAmount - nextSpent)} of your budget left.`)
    setAmount('')
  }

  return (
    <div id="demo" className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />

      <div className="flex items-center justify-between relative">
        <div>
          <p className="text-xs font-semibold text-brand-blue uppercase tracking-wide">Live demo</p>
          <h3 className="font-display font-semibold text-lg text-brand-navy mt-1">Add a sample expense</h3>
        </div>
        <span className="text-[11px] font-medium text-slate-400 bg-slate-100 rounded-full px-3 py-1">Monthly tracker</span>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <label htmlFor="demo-budget" className="text-sm font-medium text-slate-600">Monthly budget</label>
        <div className="relative sm:w-48">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-400">₹</span>
          <input
            id="demo-budget"
            type="number"
            min="1"
            step="100"
            inputMode="numeric"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            onBlur={() => {
              if (budgetAmount < 1) setBudget(String(INITIAL_BUDGET))
            }}
            className="w-full rounded-xl border border-slate-200 pl-8 pr-4 py-2.5 text-sm focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition"
          />
        </div>
      </div>

      <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-3 mt-6 relative">
        <div className="flex-1">
          <label htmlFor="demo-amount" className="sr-only">Expense amount in rupees</label>
          <input
            id="demo-amount"
            type="number"
            min="1"
            step="1"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount (₹)"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition"
          />
        </div>
        <div className="flex-1 relative">
          <label htmlFor="demo-category" className="sr-only">Expense category</label>
          {activeCategory && (
            <activeCategory.icon size={16} style={{ color: activeCategory.color }} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          )}
          <select
            id="demo-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-slate-200 pl-9 pr-4 py-3 text-sm focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition bg-white"
          >
            {CATEGORIES.map((c) => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn-primary !py-3 !px-6 whitespace-nowrap">
          <Plus size={17} /> Add expense
        </button>
      </form>

      {error && <p role="alert" className="text-xs text-red-600 mt-3">{error}</p>}

      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>Budget progress</span>
            <span className="text-brand-navy">{budgetPct}%</span>
          </div>
          <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full rounded-full bg-brand-blue transition-all duration-700 ease-out" style={{ width: `${budgetPct}%` }} />
          </div>
          <p className="text-[11px] text-slate-400 mt-2">{formatRupees(spent)} of {formatRupees(budgetAmount)}</p>
        </div>
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>Budget left · potential savings</span>
            <span className="text-brand-green">{formatRupees(savings)}</span>
          </div>
          <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full rounded-full bg-brand-green transition-all duration-700 ease-out" style={{ width: `${budgetAmount ? Math.round((savings / budgetAmount) * 100) : 0}%` }} />
          </div>
          <p className="text-[11px] text-slate-400 mt-2">{spent > budgetAmount ? `${formatRupees(spent - budgetAmount)} over budget` : 'Unspent budget this month'}</p>
        </div>
      </div>

      <div className="mt-7 rounded-2xl border border-slate-100 bg-white/70 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-sm font-semibold text-brand-navy">Where your budget goes</h4>
            <p className="text-[11px] text-slate-400 mt-1">Category spend and money left this month</p>
          </div>
          <span className="text-[11px] text-slate-400">{formatRupees(spent)} spent</span>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-5" role="img" aria-label="Bar chart of food, shopping, transport, fun, and remaining budget">
          {[
            ...CATEGORIES.map((item) => ({ name: item.name, amount: categorySpending[item.name], color: item.color })),
            { name: 'Savings', amount: savings, color: '#16A34A' },
          ].map((item) => {
            const height = item.amount ? Math.max(Math.round((item.amount / chartScale) * 100), 5) : 0
            return (
              <div key={item.name} className="min-w-0 text-center">
                <p className="truncate text-[10px] sm:text-[11px] font-medium text-slate-500">{formatRupees(item.amount)}</p>
                <div className="h-28 mt-2 flex items-end justify-center rounded-t-lg bg-slate-50/80">
                  <div className="w-7 sm:w-9 rounded-t-md transition-all duration-500" style={{ height: `${height}%`, backgroundColor: item.color }} />
                </div>
                <p className="mt-2 truncate text-[10px] sm:text-[11px] font-semibold text-slate-600">{item.name}</p>
              </div>
            )
          })}
        </div>
      </div>

      {transactions.length > 0 && (
        <div className="mt-6">
          <h4 className="text-xs font-semibold text-slate-500 mb-2">Recently added</h4>
          <ul className="divide-y divide-slate-100">
            {transactions.map((transaction) => (
              <li key={transaction.id} className="flex items-center justify-between py-2 text-xs">
                <span className="text-slate-600">{transaction.category}</span>
                <span className="font-semibold text-brand-navy">−{formatRupees(transaction.amount)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-2xl mt-6 p-4 bg-brand-navy text-white flex items-start gap-2.5 relative overflow-hidden">
        <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-brand-cyan/20 blur-2xl animate-glow" aria-hidden="true" />
        <Sparkles size={16} className="text-brand-cyan mt-0.5 shrink-0 relative" />
        <p aria-live="polite" className="text-[13px] leading-relaxed text-slate-200 relative">{insight}</p>
      </div>
    </div>
  )
}
