import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import AIInsights from './components/AIInsights'
import Benefits from './components/Benefits'
import TargetUsers from './components/TargetUsers'
import ValueProp from './components/ValueProp'
import AppPreview from './components/AppPreview'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <Features />
        <HowItWorks />
        <AIInsights />
        <Benefits />
        <TargetUsers />
        <ValueProp />
        <AppPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
