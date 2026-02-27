"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { FloatingBadge, PriceBadge } from "./floating-badge"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">

      {/* === Malta Detailed Mainland Map Background === */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-black/30" />

        <div className="absolute inset-0 w-full h-full opacity-30 animate-map-float">
          <svg
            viewBox="0 0 1200 1800"
            className="w-full h-full text-primary/60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="terrainGradient" cx="50%" cy="40%" r="70%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.18"/>
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.05"/>
              </radialGradient>

              <filter id="softShadow">
                <feDropShadow dx="0" dy="8" stdDeviation="20" floodOpacity="0.15"/>
              </filter>
            </defs>

            {/* === MAINLAND COASTLINE === */}
            <path
              d="
              M500 180
              C440 200 380 250 350 320
              C320 390 310 470 330 550
              C350 630 390 700 420 770
              C450 840 470 900 460 970
              C450 1050 420 1120 450 1200
              C480 1280 540 1350 620 1400
              C700 1450 800 1470 870 1420
              C940 1370 970 1280 980 1180
              C990 1080 960 1000 930 930
              C900 860 890 800 920 740
              C950 680 1020 620 1040 560
              C1060 500 1030 440 980 400
              C930 360 860 340 800 320
              C740 300 690 270 650 240
              C600 200 550 180 500 180
              Z
              "
              fill="url(#terrainGradient)"
              stroke="currentColor"
              strokeWidth="3.5"
              filter="url(#softShadow)"
              className="animate-malta-glow"
            />

            {/* === Urban Highlight: Valletta / Sliema === */}
            <circle
              cx="870"
              cy="360"
              r="18"
              fill="currentColor"
              opacity="0.35"
            />

            {/* === Central Region (Birkirkara area) === */}
            <circle
              cx="720"
              cy="700"
              r="22"
              fill="currentColor"
              opacity="0.25"
            />

            {/* === South Region === */}
            <circle
              cx="650"
              cy="1150"
              r="20"
              fill="currentColor"
              opacity="0.22"
            />
          </svg>
        </div>
      </div>

      {/* Glow background effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] pointer-events-none" />

      {/* === CONTENT === */}
      <div className="relative mx-auto max-w-6xl px-5 z-10">

        <AnimateOnScroll animation="scale-in">
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Built for Malta
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Malta deserves
            <br />
            <span className="text-primary">
              a better ride.
            </span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg md:text-xl text-muted-foreground leading-relaxed">
            Lower prices. Happier drivers. An app that's 100% Maltese and keeps your money on the island.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 min-h-[48px]"
            >
              Join the Waitlist
            </a>

            <a
              href="#drivers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground hover:bg-secondary/80 hover:border-primary/40 transition-all min-h-[48px]"
            >
              I want to drive
            </a>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
