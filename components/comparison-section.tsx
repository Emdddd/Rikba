"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { FloatingBadge } from "./floating-badge"

export function ComparisonSection() {
  return (
    <section id="problem" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5">

        {/* Section Header */}
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-foreground text-balance leading-tight">
            Why switch to <span className="text-primary">Rikba?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground text-lg leading-relaxed">
          
          </p>
        </AnimateOnScroll>

        {/* Comparison */}
        <div className="mt-14 grid gap-0 md:grid-cols-1 max-w-4xl mx-auto relative">

          {/* EUR badge */}
          <FloatingBadge
            delay={0}
            duration={3.5}
            direction="y"
            className="absolute -top-6 left-4 md:-top-8 md:left-8 z-20 pointer-events-none"
          >
            <span className="flex items-center justify-center w-14 h-10 md:w-16 md:h-12 rounded-2xl bg-card border border-border shadow-2xl text-base md:text-lg font-bold text-muted-foreground">
              EUR
            </span>
          </FloatingBadge>

          {/* -8% badge */}
          <FloatingBadge
            delay={1}
            duration={4}
            direction="rotate"
            className="absolute bottom-2 right-4 md:bottom-0 md:right-8 z-20 pointer-events-none"
          >
            <span className="flex flex-col items-center justify-center px-3 py-2 md:px-4 md:py-2.5 rounded-xl bg-primary shadow-2xl shadow-primary/30 text-primary-foreground">

              <span className="text-sm md:text-base font-bold">
                -8%
              </span>

              <div className="mt-1 text-[9px] font-medium text-primary-foreground/80 leading-none">
                with Rikba sticker
              </div>

              <div className="text-[8px] text-primary-foreground/60 leading-none mt-1">
                otherwise 12%
              </div>

            </span>
          </FloatingBadge>

          {/* ================= RIKBA ================= */}
          <div>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="rounded-2xl border border-primary/40 bg-primary/5 p-7 md:p-9 relative overflow-hidden h-full animate-glow-pulse">

                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/8 rounded-full blur-[60px]" />

                {/* Header */}
                <div className="relative flex items-center gap-3 mb-8">

                  <img
                    src="/A16AD795-F572-4489-AF30-87250463907F.png"
                    alt="Rikba"
                    className="w-11 h-11 object-contain drop-shadow-sm"
                  />

                  <span className="font-bold text-card-foreground text-xl">
                    Rikba
                  </span>

                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                    <SparkleIcon size={12} />
                    Recommended
                  </span>
                </div>

                {/* Rows */}
                <div className="space-y-5">
                  <ComparisonRow icon={<CheckIcon />} label="Pricing" value="Fair fares, Clear prices" positive />
                  <ComparisonRow icon={<CheckIcon />} label="Driver commission" value="Drivers keep 92%" positive />
                  <ComparisonRow icon={<CheckIcon />} label="Built for" value="100% designed for Malta" positive />
                  <ComparisonRow icon={<CheckIcon />} label="Money stays" value="Your money stays on the island" positive />
                  <ComparisonRow icon={<CheckIcon />} label="Transparency" value="Book a price, pay that price" positive />
                  <ComparisonRow icon={<CheckIcon />} label="Driver experience" value="Happy drivers, better rides" positive />
                </div>

                {/* Commission bar */}
                <div className="mt-8 pt-6 border-t border-primary/20">

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">
                      Driver keeps
                    </span>

                    <span className="text-sm font-bold text-primary">
                      92%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary animate-bar-fill-90" />
                  </div>

                </div>

              </div>
            </AnimateOnScroll>

            {/* Forever commission note BELOW card */}
            <div className="mt-5 flex justify-center">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary">

                Our commission will never increase.

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
