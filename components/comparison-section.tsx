"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { FloatingBadge } from "./floating-badge"

export function ComparisonSection() {
  return (
    <section id="problem" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5">

        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-foreground">
            Why switch to <span className="text-primary">Rikba?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground text-lg">
            See how Rikba stacks up against other ride-hailing apps.
          </p>
        </AnimateOnScroll>

        {/* GRID */}
        <div className="mt-14 grid md:grid-cols-2 max-w-4xl mx-auto relative">

          {/* EUR badge */}
          <FloatingBadge delay={0} duration={3.5} direction="y"
            className="absolute -top-6 left-4 md:-top-8 md:left-8 z-20 pointer-events-none">
            <span className="flex items-center justify-center w-14 h-10 md:w-16 md:h-12 rounded-2xl bg-card border border-border shadow-2xl text-base md:text-lg font-bold text-muted-foreground">
              EUR
            </span>
          </FloatingBadge>

          {/* -8 badge */}
          <FloatingBadge delay={1} duration={4} direction="rotate"
            className="absolute -bottom-5 right-4 md:-bottom-7 md:right-8 z-20 pointer-events-none">
            <span className="flex items-center justify-center px-4 py-2 rounded-xl bg-primary shadow-2xl shadow-primary/30 text-sm font-bold text-primary-foreground">
              -8%
            </span>
          </FloatingBadge>

          {/* ================= OTHER APP ================= */}
          <AnimateOnScroll animation="fade-right">
            <div className="rounded-t-2xl md:rounded-l-2xl border border-border bg-card p-9 h-full">

              <Header title="Other App" />

              <Rows negative />

              {/* BAR */}
              <div className="mt-8 pt-6 border-t border-border">
                <Bar label="Driver keeps" value="80%" />
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-muted-foreground/25 animate-bar-other" />
                </div>
              </div>

            </div>
          </AnimateOnScroll>

          {/* ================= RIKBA ================= */}
          <AnimateOnScroll animation="fade-left">
            <div className="rounded-b-2xl md:rounded-r-2xl border border-primary/40 bg-primary/5 p-9 relative overflow-hidden h-full animate-glow-pulse">

              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />

              <Header title="Rikba" highlight />

              <Rows positive />

              {/* BAR */}
              <div className="mt-8 pt-6 border-t border-primary/20">
                <Bar label="Driver keeps" value="92%" primary />
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary animate-bar-rikba" />
                </div>
              </div>

            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  )
}

/* ================= COMPONENTS ================= */

function Header({ title, highlight }: any) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center
        ${highlight ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" : "bg-muted"}`}>
        R
      </div>

      <span className="font-bold text-xl">{title}</span>

      {highlight && (
        <span className="ml-auto text-xs bg-primary/15 text-primary px-3 py-1 rounded-full">
          Recommended
        </span>
      )}
    </div>
  )
}

function Rows({ positive, negative }: any) {

  const data = [
    ["Pricing","Fair fares, Clear prices"],
    ["Driver commission","Drivers keep 92%"],
    ["Built for","100% designed for Malta"],
    ["Money stays","Your money stays on the island"],
    ["Transparency","Book a price, pay that price"],
    ["Driver experience","Happy drivers, better rides"]
  ]

  return (
    <div className="space-y-5">
      {data.map(([label,value]) => (
        <div key={label} className="flex gap-3">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center
            ${positive ? "bg-primary/15 text-primary" : "bg-destructive/10 text-destructive"}`}>
            ✓
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground/60">
              {label}
            </span>
            <p className="text-sm">{value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function Bar({ label,value,primary }:any){
  return(
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`text-sm font-bold ${primary?"text-primary":"text-muted-foreground"}`}>
        {value}
      </span>
    </div>
  )
}
