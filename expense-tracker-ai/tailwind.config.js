/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2563EB',
        'brand-blue-bright': '#3B82F6',
        'brand-blue-deep': '#1D4ED8',
        'brand-cyan': '#06B6D4',
        'brand-green': '#10B981',
        'brand-purple': '#7C3AED',
        'brand-navy': '#0F172A',
        'brand-bg': '#F8FAFC',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(15, 23, 42, 0.12)',
        glow: '0 0 40px -8px rgba(37, 99, 235, 0.35)',
        card: '0 4px 20px -6px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #3B82F6 45%, #06B6D4 100%)',
        'brand-gradient-2': 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
        'mesh-light': 'radial-gradient(at 20% 0%, rgba(37,99,235,0.10) 0px, transparent 50%), radial-gradient(at 80% 10%, rgba(124,58,237,0.08) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(16,185,129,0.08) 0px, transparent 50%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        growBar: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        growBar: 'growBar 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        gradientMove: 'gradientMove 8s ease infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
