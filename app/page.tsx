"use client"

import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { ComparisonSection } from "@/components/comparison-section"
import { HowItWorks } from "@/components/how-it-works"
import { BuiltForMalta } from "@/components/built-for-malta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative overflow-hidden">

      {/* ===== HERO ===== */}
      <Hero />

      {/* ===== MOVING STRIP ===== */}
      <Marquee />

      {/* ===== COMPARISON ===== */}
      <ComparisonSection />

      {/* ===== HOW IT WORKS ===== */}
      <HowItWorks />

      {/* ===== MALTA SECTION ===== */}
      <BuiltForMalta />

      {/* ===== FOOTER ===== */}
      <Footer />

    </main>
  )
}
