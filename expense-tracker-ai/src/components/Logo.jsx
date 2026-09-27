// Recreated from the brand's promotional video: a white rounded-square icon
// containing a rising four-bar chart, gradient from blue to green.
export default function Logo({ size = 40, withWordmark = true, dark = false, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="etaBarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="55%" stopColor="#0EA5A0" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="#ffffff" />
        <rect x="12" y="38" width="8" height="14" rx="3" fill="url(#etaBarGrad)" />
        <rect x="24" y="26" width="8" height="26" rx="3" fill="url(#etaBarGrad)" />
        <rect x="36" y="32" width="8" height="20" rx="3" fill="url(#etaBarGrad)" />
        <rect x="48" y="20" width="8" height="32" rx="3" fill="url(#etaBarGrad)" />
      </svg>
      {withWordmark && (
        <span className={`font-display font-semibold tracking-tight ${dark ? 'text-white' : 'text-brand-navy'}`} style={{ fontSize: size * 0.42 }}>
          Expense Tracker <span className="text-brand-blue">AI</span>
        </span>
      )}
    </div>
  )
}
