"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { FloatingBadge, PriceBadge } from "./floating-badge"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      
      {/* Malta Map Background - Accurate SVG */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-black/30" />
        
        <div className="absolute inset-0 w-full h-full opacity-25 animate-map-float">
          <svg
            viewBox="0 0 800 1000"
            className="w-full h-full text-primary/50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* GOZO (Top) */}
            <path
              d="M320 140 
                 C380 110 470 110 530 140 
                 C590 170 610 220 580 260 
                 C540 310 450 320 380 290 
                 C320 260 300 200 320 140 Z"
              stroke="currentColor"
              strokeWidth="3"
              className="animate-malta-glow"
            />

            {/* COMINO (Middle small island) */}
            <ellipse
              cx="450"
              cy="340"
              rx="35"
              ry="20"
              stroke="currentColor"
              strokeWidth="3"
              className="animate-malta-glow delay-500"
            />

            {/* MALTA (Main Island - Bottom) */}
            <path
              d="M180 480
                 C160 420 200 360 280 330
                 C380 290 550 310 650 380
                 C720 430 760 500 740 560
                 C710 640 590 690 460 700
                 C330 710 240 680 200 620
                 C170 580 170 520 180 480 Z

                 M380 500
                 C420 470 490 470 530 510
                 C560 540 540 590 500 600
                 C450 610 400 580 380 540
                 C370 520 370 510 380 500 Z"
              stroke="currentColor"
              strokeWidth="3"
              className="animate-malta-glow delay-1000"
            />
          </svg>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] pointer-events-none" />

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
