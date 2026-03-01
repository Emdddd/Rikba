"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { ComparisonSection } from "@/components/comparison-section"
import { BuiltForMalta } from "@/components/built-for-malta"
import { HowItWorks } from "@/components/how-it-works"
import { SafetySection } from "@/components/safety-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative overflow-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* MOVING STRIP */}
      <Marquee />

      {/* COMPARISON */}
      <ComparisonSection />

      {/* BUILT FOR MALTA */}
      <BuiltForMalta />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* SAFETY */}
      <SafetySection />

      {/* WAITLIST */}
      <WaitlistSection />

      {/* FAQ */}
      <FaqSection />

      {/* FOOTER */}
      <Footer />

    </main>
  )
}
