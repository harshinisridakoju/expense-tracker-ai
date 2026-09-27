# Expense Tracker AI — Landing Page

A premium, animated landing page for **Expense Tracker AI**, an AI-powered personal finance app for students and young professionals. Built with React, Vite, and Tailwind CSS.

## What's inside

- Sticky, glassmorphic navbar with smooth-scroll links and a mobile hamburger menu
- Hero section with an animated, interactive phone dashboard mockup (tap the `+` button to add a sample expense)
- A fully working **live demo** widget (Solution section, `#demo`) — enter an amount and category and watch the budget bar, savings goal bar, and an AI insight message update instantly
- Problem / Solution / Features / How It Works / AI Insights / Benefits / Target Users / Value Proposition / App Preview / CTA / Footer sections, matching the full brief
- Brand logo recreated as a crisp SVG (rounded-square icon, rising blue-to-green bar chart), used consistently in the navbar, hero, app-preview mockups, and footer
- Scroll-reveal animations, hover states, gradient motion, and floating decorative elements
- Fully responsive: desktop, tablet, and mobile, with a working hamburger menu and stacked layouts
- Accessible: semantic HTML, visible keyboard focus states, `prefers-reduced-motion` support, labeled form fields
- SEO tags (title + meta description) already set in `index.html`

All financial data shown (balances, transactions, insights) is clearly **sample/demo data** — there is no real bank integration, no payment processing, and no authentication, as requested.

## Run it locally

You'll need [Node.js](https://nodejs.org) version 18 or newer installed.

1. Unzip this project and open a terminal in its folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local dev server:
   ```bash
   npm run dev
   ```
4. Open the URL it prints (usually `http://localhost:5173`) in your browser.

To build a production-ready version (for deploying anywhere, e.g. Vercel, Netlify, GitHub Pages):
```bash
npm run build
```
This creates a `dist/` folder with the final static site. Preview it locally with:
```bash
npm run preview
```

## Project structure

```
expense-tracker-ai/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── hooks/
    │   ├── useReveal.js        # scroll-reveal IntersectionObserver hook
    │   └── useCountUp.js       # animated number count-up hook
    └── components/
        ├── Logo.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── DashboardMockup.jsx # hero phone mockup
        ├── ProblemSection.jsx
        ├── SolutionSection.jsx
        ├── LiveDemo.jsx        # interactive expense-add demo
        ├── Features.jsx
        ├── HowItWorks.jsx
        ├── AIInsights.jsx
        ├── Benefits.jsx
        ├── TargetUsers.jsx
        ├── ValueProp.jsx
        ├── AppPreview.jsx      # multi-screen phone mockups
        ├── CTA.jsx
        ├── Footer.jsx
        └── Reveal.jsx          # scroll-reveal wrapper component
```

## Customizing

- **Colors** are defined once in `tailwind.config.js` under `theme.extend.colors` (`brand-blue`, `brand-green`, `brand-purple`, `brand-navy`, etc.) — change them there and the whole site updates.
- **Copy** for every section lives directly in its component file as plain arrays/strings — easy to edit without touching layout code.
- **Logo** lives in `src/components/Logo.jsx` as inline SVG, so it scales crisply at any size and is easy to recolor or swap later if you get a final brand asset.

## Notes on this build

This was verified with a full module-resolution and JSX syntax check before delivery. If `npm install` in your environment shows peer-dependency warnings from Tailwind/Vite/PostCSS, they're safe to ignore — the versions pinned in `package.json` are compatible with each other.
