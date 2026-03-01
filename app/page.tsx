"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { ComparisonSection } from "@/components/comparison-section"
import { HowItWorks } from "@/components/how-it-works"
import { BuiltForMalta } from "@/components/built-for-malta"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative overflow-hidden">

      <Navbar />

      <Hero />

      <Marquee />

      <ComparisonSection />

      <HowItWorks />

      <BuiltForMalta />

      {/* FAQ SECTION */}
      <FaqSection />

      <Footer />

    </main>
  )
}
