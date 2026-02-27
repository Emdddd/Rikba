"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { FloatingBadge, PriceBadge } from "./floating-badge"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] pointer-events-none" />

      {/* === Floating elements anchored to center area only on lg === */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* container to constrain floaters */}
        <div className="relative mx-auto max-w-6xl h-full">
          {/* Location pin - left side, vertically centered */}
          <FloatingBadge delay={0} duration={6} direction="y" className="absolute top-1/2 -translate-y-1/2 left-0">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/50">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
          </FloatingBadge>

          {/* Shield - right side, vertically centered up slightly */}
          <FloatingBadge delay={1} duration={5} direction="rotate" className="absolute top-[38%] right-0">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/50">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
          </FloatingBadge>

          {/* Price badge - bottom left */}
          <FloatingBadge delay={2} duration={7} direction="y" className="absolute bottom-[12%] left-[6%]">
            <PriceBadge price="8.50" />
          </FloatingBadge>

          {/* Driver nearby - bottom right */}
          <FloatingBadge delay={0.5} duration={4.5} direction="rotate" className="absolute bottom-[16%] right-[4%]">
            <div className="flex items-center gap-1.5 rounded-xl bg-primary/15 border border-primary/25 px-3 py-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-primary">Driver nearby</span>
            </div>
          </FloatingBadge>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 z-10">
        {/* Badge */}
        <AnimateOnScroll animation="scale-in">
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-primary" />
              </span>
              Launching Summer 2026
            </span>
          </div>
        </AnimateOnScroll>

        {/* Heading */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-tight">
            Malta deserves
            <br />
            <span className="text-primary inline-flex items-center gap-2 md:gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-8 md:h-8 shrink-0 opacity-60">
                <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                <circle cx="6.5" cy="16.5" r="2.5" />
                <circle cx="16.5" cy="16.5" r="2.5" />
              </svg>
              a better ride.
            </span>
          </h1>
        </AnimateOnScroll>

        {/* Subtitle */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Lower prices. Happier drivers. An app that{"'"}s 100% Maltese and keeps your money on the island.
          </p>
        </AnimateOnScroll>

        {/* CTAs */}
        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 min-h-[48px] animate-glow-pulse"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-12">
                <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" />
              </svg>
              Join the Waitlist
            </a>
            <a
              href="#drivers"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground hover:bg-secondary/80 hover:border-primary/40 transition-all min-h-[48px]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform group-hover:translate-x-0.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
              I want to drive
            </a>
          </div>
        </AnimateOnScroll>

        {/* Trust badges */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { icon: <CoinIcon />, text: "Drivers keep more" },
              { icon: <TagIcon />, text: "Transparent pricing" },
              { icon: <PinIcon />, text: "Made in Malta" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary shrink-0">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

function CoinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <path d="M9.5 10c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5" />
    </svg>
  )
}

function TagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
