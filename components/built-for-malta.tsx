"use client"

import { MaltaMap } from "./malta-map"
import { SparkleIcon } from "./comparison-section"
import { AnimateOnScroll } from "./animate-on-scroll"
import { CarAnimation } from "./floating-badge"

export function BuiltForMalta() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-5">

        <AnimateOnScroll animation="fade-up">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14 text-center min-h-[400px] md:min-h-[480px] flex flex-col items-center justify-center">

            {/* ===== Malta Map Center Reveal ===== */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <div className="map-reveal-mask text-primary/40">
                <MaltaMap />
              </div>
            </div>

            {/* Gradient readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/70 via-card/50 to-card/80 pointer-events-none" />

            {/* ===== CONTENT ===== */}
            <div className="relative z-10">

              <div className="mb-6 mx-auto w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-card-foreground leading-tight">
                Built for <span className="text-primary">Malta.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
                Not copy-pasted from a megacity playbook. A Maltese team building
                for a Maltese island. Festa traffic, Sliema gridlock, and all.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                {[
                  { icon: <SparkleIcon size={14} />, text: "100% Maltese owned" },
                  { icon: <SparkleIcon size={14} />, text: "Local support team" },
                  { icon: <SparkleIcon size={14} />, text: "Island-wide coverage" },
                ].map((item) => (
                  <span
                    key={item.text}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {item.icon}
                    {item.text}
                  </span>
                ))}
              </div>

            </div>

            {/* ===== CAR ===== */}
            <div className="absolute bottom-6 left-0 right-0 z-10">
              <CarAnimation />
            </div>

          </div>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
