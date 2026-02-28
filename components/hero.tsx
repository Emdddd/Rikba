"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { FloatingBadge, PriceBadge } from "./floating-badge"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 z-10">

        {/* ===== LOGO ===== */}
        <AnimateOnScroll animation="scale-in">
          <div className="flex justify-center mb-3 -mt-4">
            <Image
              src="https://i.imgur.com/Nzf22Bx_d.webp?maxwidth=760&fidelity=grand"
              alt="Rikba logo"
              width={480}
              height={200}
              priority
              className="w-[320px] md:w-[420px] h-auto object-contain"
            />
          </div>
        </AnimateOnScroll>

        {/* ===== HEADING ===== */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Malta deserves
            <br />
            <span className="text-primary inline-flex items-center gap-3">
              <CarIcon />
              a better ride.
            </span>
          </h1>

          {/* Launch Badge */}
          <div className="flex justify-center mt-4">
            <span className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/15 px-5 py-2 text-sm font-semibold text-primary shadow-lg backdrop-blur-md">
              <span className="relative flex w-2.5 h-2.5">
                <span className="animate-ping absolute inset-0 rounded-full bg-primary opacity-80" />
                <span className="relative rounded-full w-2.5 h-2.5 bg-primary" />
              </span>
              Launching Summer 2026
            </span>
          </div>
        </AnimateOnScroll>

        {/* Subtitle */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg md:text-xl text-muted-foreground leading-relaxed">
            Lower prices. Happier drivers. An app that's 100% Maltese and keeps
            your money on the island.
          </p>
        </AnimateOnScroll>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
            >
              Join the Waitlist
            </a>

            <a
              href="#drivers"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground hover:bg-secondary/80 transition-all"
            >
              I want to drive
            </a>
          </div>
        </AnimateOnScroll>

      </div>

      {/* =============================== */}
      {/* ✅ MOVING TRUST BAR (FIXED) */}
      {/* =============================== */}

      <div className="mt-14 border-t border-border overflow-hidden">

        <div className="animate-ticker flex gap-16 whitespace-nowrap py-5 text-muted-foreground text-sm font-medium">

          <span className="flex items-center gap-2">◎ 100% Malta owned</span>
          <span className="flex items-center gap-2">$ Drivers keep way more</span>
          <span className="flex items-center gap-2">⚡ Fast pickups</span>
          <span className="flex items-center gap-2">🚗 Built for Malta</span>

          {/* duplicate for infinite loop */}
          <span className="flex items-center gap-2">◎ 100% Malta owned</span>
          <span className="flex items-center gap-2">$ Drivers keep way more</span>
          <span className="flex items-center gap-2">⚡ Fast pickups</span>
          <span className="flex items-center gap-2">🚗 Built for Malta</span>

        </div>

      </div>

    </section>
  )
}

/* ICON */
function CarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2">
      <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/>
      <circle cx="6.5" cy="16.5" r="2.5"/>
      <circle cx="16.5" cy="16.5" r="2.5"/>
    </svg>
  )
}
