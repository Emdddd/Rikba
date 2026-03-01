import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Marquee from "@/components/marquee"
import ComparisonSection from "@/components/comparison-section"
import BuiltForMalta from "@/components/built-for-malta"
import HowItWorks from "@/components/how-it-works"
import SafetySection from "@/components/safety-section"
import WaitlistSection from "@/components/waitlist-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />

      <Marquee />

      <ComparisonSection />

      <BuiltForMalta />

      <HowItWorks />

      <SafetySection />

      <WaitlistSection />

      <FaqSection />

      <Footer />
    </main>
  )
}
