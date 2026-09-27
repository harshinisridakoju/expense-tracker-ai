import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import Reveal from './Reveal'

const PLANS = [
  {
    name: 'Starter',
    description: 'A clearer view of your everyday spending.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ['Expense and category tracking', 'One monthly budget', 'Monthly spending overview'],
    action: 'Choose Starter',
  },
  {
    name: 'Plus',
    description: 'Smarter tools to make your money go further.',
    monthlyPrice: 149,
    yearlyPrice: 119,
    features: ['Everything in Starter', 'AI spending insights', 'Unlimited budgets and savings goals'],
    action: 'Choose Plus',
    popular: true,
  },
  {
    name: 'Premium',
    description: 'More guidance for bigger financial goals.',
    monthlyPrice: 299,
    yearlyPrice: 239,
    features: ['Everything in Plus', 'Personalized saving suggestions', 'Advanced category insights'],
    action: 'Choose Premium',
  },
]

const formatPrice = (value) => `₹${value.toLocaleString('en-IN')}`

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [selectedPlan, setSelectedPlan] = useState('')

  const scrollToDemo = (event) => {
    event.preventDefault()
    document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="section-pad bg-[#F4F8F7]">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">Plans that grow with you</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">A little more clarity, at every stage</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Start free, then choose the level of guidance that fits your money goals.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3" aria-label="Billing frequency">
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              aria-pressed={billingCycle === 'monthly'}
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${billingCycle === 'monthly' ? 'bg-brand-navy text-white' : 'text-slate-500 hover:text-brand-navy'}`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={billingCycle === 'yearly'}
              onClick={() => setBillingCycle('yearly')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${billingCycle === 'yearly' ? 'bg-brand-navy text-white' : 'text-slate-500 hover:text-brand-navy'}`}
            >
              Yearly
            </button>
          </div>
          <span className="rounded-full bg-brand-green/10 px-3 py-1.5 text-xs font-semibold text-emerald-700">Save 20% yearly</span>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan, index) => {
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice
            const isSelected = selectedPlan === plan.name

            return (
              <Reveal key={plan.name} delay={index * 80} className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 sm:p-7 ${plan.popular ? 'border-brand-blue/50 shadow-lg shadow-brand-blue/10' : 'border-slate-200 hover:shadow-md'}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand-blue px-3 py-1 text-[11px] font-semibold text-white">
                    Most popular
                  </span>
                )}
                <div className="min-h-[105px]">
                  <h3 className="font-display text-lg font-semibold text-brand-navy">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{plan.description}</p>
                </div>

                <div className="mt-5 border-b border-slate-100 pb-5">
                  <p className="flex items-baseline gap-1.5">
                    <span className="font-display text-4xl font-bold text-brand-navy">{price === 0 ? 'Free' : formatPrice(price)}</span>
                    {price > 0 && <span className="text-sm text-slate-500">/ month</span>}
                  </p>
                  <p className="mt-1 min-h-4 text-xs text-slate-400">
                    {price === 0 ? 'No payment details needed' : billingCycle === 'yearly' ? `${formatPrice(price * 12)} billed yearly` : 'Billed monthly'}
                  </p>
                </div>

                <ul className="my-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand-green" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedPlan(plan.name)}
                  className={plan.popular ? 'btn-primary w-full !rounded-xl !py-3' : 'btn-secondary w-full !rounded-xl !py-3'}
                >
                  {isSelected ? 'Selected' : plan.action}
                </button>
              </Reveal>
            )
          })}
        </div>

        {selectedPlan ? (
          <div aria-live="polite" className="mx-auto mt-6 max-w-3xl rounded-xl border border-brand-blue/15 bg-white px-5 py-4 text-center shadow-sm">
            <p className="text-sm font-medium text-brand-navy">
              {selectedPlan} selected. Subscription checkout is not connected in this demo.
            </p>
            <a href="#demo" onClick={scrollToDemo} className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-blue-deep">
              Try the live demo <ArrowRight size={15} />
            </a>
          </div>
        ) : (
          <p className="mt-6 text-center text-xs text-slate-400">Example pricing in INR. Plan selection is a preview; checkout is not connected.</p>
        )}
      </div>
    </section>
  )
}