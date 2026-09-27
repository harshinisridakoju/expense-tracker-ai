import Logo from './Logo'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Contact', href: '#about' },
]

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="container-max px-6 sm:px-8 lg:px-12 py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div>
          <Logo size={34} dark />
          <p className="text-sm text-slate-400 mt-3">Track. Budget. Save Smarter.</p>
        </div>

        <ul className="flex flex-wrap gap-x-7 gap-y-3">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => scrollTo(e, link.href)} className="text-sm text-slate-300 hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/10">
        <p className="container-max px-6 sm:px-8 lg:px-12 py-6 text-xs text-slate-500">
          © 2026 Expense Tracker AI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
