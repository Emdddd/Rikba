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
            Why switch to{" "}
            <span className="text-primary">Rikba?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground text-lg leading-relaxed">
            See how Rikba stacks up against other ride-hailing apps.
          </p>
        </AnimateOnScroll>

        {/* Comparison Table / Card */}
        <div className="mt-14 grid gap-0 md:grid-cols-2 max-w-4xl mx-auto relative">

          {/* Floating EUR badge - like kwip.eu */}
          <FloatingBadge delay={0} duration={3.5} direction="y" className="absolute -top-6 left-4 md:-top-8 md:left-8 z-20 pointer-events-none">
            <span className="flex items-center justify-center w-14 h-10 md:w-16 md:h-12 rounded-2xl bg-card border border-border shadow-2xl text-base md:text-lg font-bold text-muted-foreground">
              EUR
            </span>
          </FloatingBadge>

          {/* Floating -8% badge */}
          <FloatingBadge delay={1} duration={4} direction="rotate" className="absolute -bottom-5 right-4 md:-bottom-7 md:right-8 z-20 pointer-events-none">
            <span className="flex items-center justify-center px-3 py-2 md:px-4 md:py-2.5 rounded-xl bg-primary shadow-2xl shadow-primary/30 text-sm md:text-base font-bold text-primary-foreground">
              -8%
            </span>
          </FloatingBadge>

          {/* --- Other App Column --- */}
          <AnimateOnScroll animation="fade-right" delay={100}>
            <div className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none border border-border bg-card p-7 md:p-9 relative h-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                    <circle cx="10" cy="10" r="8" />
                    <line x1="6" y1="10" x2="14" y2="10" />
                  </svg>
                </div>
                <span className="font-bold text-card-foreground text-xl">Other App</span>
              </div>

              {/* Items */}
              <div className="space-y-5">
                <ComparisonRow icon={<CrossIcon />} label="Pricing" value="High fares with surge pricing" negative />
                <ComparisonRow icon={<CrossIcon />} label="Driver commission" value="Drivers keep only ~80%" negative />
                <ComparisonRow icon={<CrossIcon />} label="Built for" value="Global template, not Malta" negative />
                <ComparisonRow icon={<CrossIcon />} label="Money stays" value="Profits go overseas" negative />
                <ComparisonRow icon={<CrossIcon />} label="Transparency" value="Hidden fees after the ride" negative />
                <ComparisonRow icon={<CrossIcon />} label="Driver experience" value="Squeezed, overworked" negative />
              </div>

              {/* Commission bar */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Driver keeps</span>
                  <span className="text-sm font-bold text-muted-foreground">80%</span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-muted-foreground/25 animate-bar-fill-75" />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* --- Rikba Column --- */}
          <AnimateOnScroll animation="fade-left" delay={200}>
            <div className="rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none border border-primary/40 bg-primary/5 p-7 md:p-9 relative overflow-hidden h-full animate-glow-pulse">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/8 rounded-full blur-[60px] pointer-events-none" />

              {/* Header */}
              <div className="relative flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-primary-foreground font-bold text-sm">R</span>
                </div>
                <span className="font-bold text-card-foreground text-xl">Rikba</span>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                  <SparkleIcon size={12} />
                  Recommended
                </span>
              </div>

              {/* Items */}
              <div className="relative space-y-5">
                <ComparisonRow icon={<CheckIcon />} label="Pricing" value="Fair fares, Clear prices" positive />
                <ComparisonRow icon={<CheckIcon />} label="Driver commission" value="Drivers keep 92%" positive />
                <ComparisonRow icon={<CheckIcon />} label="Built for" value="100% designed for Malta" positive />
                <ComparisonRow icon={<CheckIcon />} label="Money stays" value="Your money stays on the island" positive />
                <ComparisonRow icon={<CheckIcon />} label="Transparency" value="Book a price, pay that price" positive />
                <ComparisonRow icon={<CheckIcon />} label="Driver experience" value="Happy drivers, better rides" positive />
              </div>

              {/* Commission bar */}
              <div className="relative mt-8 pt-6 border-t border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Driver keeps</span>
                  <span className="text-sm font-bold text-primary">92%</span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary animate-bar-fill-90" />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 min-h-[48px]"
            >
              <SparkleIcon size={16} />
              Join the Waitlist
            </a>
            <a
              href="#drivers"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-primary/10 px-8 py-4 text-base font-semibold text-primary hover:bg-primary/20 transition-all min-h-[48px]"
            >
              <CarIcon size={16} />
              Start Driving with Rikba
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

/* ---- Sub Components ---- */

function ComparisonRow({
  icon,
  label,
  value,
  positive,
  negative,
}: {
  icon: React.ReactNode
  label: string
  value: string
  positive?: boolean
  negative?: boolean
}) {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
        positive ? "bg-primary/15 text-primary" : "bg-destructive/10 text-destructive"
      }`}>
        {icon}
      </div>
      <div>
        <span className={`text-xs font-semibold uppercase tracking-wider ${
          positive ? "text-primary/70" : "text-muted-foreground/60"
        }`}>
          {label}
        </span>
        <p className={`text-sm leading-relaxed ${
          positive ? "text-card-foreground font-medium" : "text-muted-foreground"
        }`}>
          {value}
        </p>
      </div>
    </div>
  )
}

/* ---- Icons ---- */

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="10.5 4.5 5.75 9.5 3.5 7.25" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="10" y1="4" x2="4" y2="10" />
      <line x1="4" y1="4" x2="10" y2="10" />
    </svg>
  )
}

export function SparkleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" />
    </svg>
  )
}

export function CarIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
      <circle cx="6.5" cy="16.5" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
    </svg>
  )
}
