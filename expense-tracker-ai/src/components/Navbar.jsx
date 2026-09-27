import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/75 backdrop-blur-xl shadow-soft border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-6 sm:px-8 lg:px-12 h-20" aria-label="Primary">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} aria-label="Expense Tracker AI home">
          <Logo size={36} />
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[15px] font-medium text-slate-600 hover:text-brand-blue transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#demo" onClick={(e) => handleNavClick(e, '#demo')} className="btn-primary !py-2.5 !px-6 text-sm">
            Try Demo
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-brand-navy"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-b border-slate-100 px-6 py-6 flex flex-col gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-3 text-base font-medium text-slate-700 border-b border-slate-100 last:border-none"
            >
              {link.label}
            </a>
          ))}
          <a href="#demo" onClick={(e) => handleNavClick(e, '#demo')} className="btn-primary mt-4 w-full">
            Try Demo
          </a>
        </div>
      </div>
    </header>
  )
}
