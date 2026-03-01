"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">

      {/* ===== BLUE AMBIENT GLOW ===== */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">

        <div
          className="
          w-[900px] h-[900px]
          bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_70%)]
          blur-[160px]
          opacity-70
        "
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80" />

      </div>

      <div className="relative mx-auto max-w-6xl px-5 z-10">

        {/* ===== LOGO ===== */}
        <AnimateOnScroll animation="scale-in">
          <div className="flex justify-center mb-3 -mt-4">
            <div className="relative w-[260px] md:w-[360px] lg:w-[420px] xl:w-[480px]">
              <Image
                src="/IMG_2349.png"
                alt="Rikba logo"
                width={480}
                height={200}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* ===== HEADING ===== */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Malta deserves
            <br />
            <span className="text-primary inline-flex items-center gap-2 md:gap-3">
              <CarIcon />
              a better ride.
            </span>
          </h1>

          {/* ===== LAUNCH BADGE (رجعت زي ما كانت) ===== */}
          <div className="flex justify-center mt-4">
            <span className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/15 px-5 py-2 text-sm font-semibold text-primary shadow-lg backdrop-blur-md">

              <span className="relative flex w-2.5 h-2.5 shrink-0">
                <span className="animate-ping absolute inset-0 rounded-full bg-primary opacity-80" />
                <span className="relative rounded-full w-2.5 h-2.5 bg-primary" />
              </span>

              Launching Summer 2026
            </span>
          </div>
        </AnimateOnScroll>

        {/* ===== SUBTITLE ===== */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg md:text-xl text-muted-foreground leading-relaxed">
            Lower prices. Happier drivers. An app that's 100% Maltese and keeps
            your money on the island.
          </p>
        </AnimateOnScroll>

        {/* ===== CTA BUTTONS ===== */}
        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

            <a
              href="#waitlist"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 min-h-[48px]"
            >
              Join the Waitlist
            </a>

            <a
              href="#waitlist"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground hover:bg-secondary/80 hover:border-primary/40 transition-all min-h-[48px]"
            >
              I want to drive
            </a>

          </div>
        </AnimateOnScroll>

      </div>
    </section>
  )
}

/* ===== ORIGINAL CAR ICON (رجعناه) ===== */

function CarIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/>
      <circle cx="6.5" cy="16.5" r="2.5"/>
      <circle cx="16.5" cy="16.5" r="2.5"/>
    </svg>
  )
}
