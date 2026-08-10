"use client"

import { FloatingBadge } from "./floating-badge"

export function ComparisonSection() {
  return (
    <section id="problem" className="py-20 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 relative z-10">

        {/* ===== SECTION HEADER ===== */}
        <div className="text-center">
          <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight tracking-tight">
            Why switch to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-white">
              Rikba?
            </span>
          </h2>
        </div>

        {/* ===== COMPARISON CARD CONTAINER ===== */}
        <div className="mt-14 grid gap-0 md:grid-cols-1 max-w-3xl mx-auto relative">

          {/* Floating EUR Badge */}
          <FloatingBadge
            delay={0}
            duration={3.5}
            direction="y"
            className="absolute -top-6 left-4 md:-top-8 md:left-8 z-20 pointer-events-none"
          >
            <span className="flex items-center justify-center w-14 h-10 md:w-16 md:h-12 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-xl shadow-2xl text-base md:text-lg font-bold text-sky-400">
              EUR
            </span>
          </FloatingBadge>

          {/* Floating -8% Badge */}
          <FloatingBadge
            delay={1}
            duration={4}
            direction="rotate"
            className="absolute bottom-12 right-2 md:bottom-10 md:right-4 z-20 pointer-events-none"
          >
            <span className="flex flex-col items-center justify-center px-3 py-2 rounded-2xl bg-sky-400 border border-sky-300/40 shadow-[0_0_25px_rgba(56,189,248,0.4)] text-black">
              <span className="text-xs md:text-sm font-extrabold tracking-tight">
                -8%
              </span>
              <div className="mt-0.5 text-[8px] font-bold text-black/80 leading-none">
                with Rikba sticker
              </div>
              <div className="text-[7px] font-medium text-black/60 leading-none mt-1">
                otherwise 12%
              </div>
            </span>
          </FloatingBadge>

          {/* Main Card */}
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-2xl p-7 md:p-11 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20">

            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-[70px] pointer-events-none" />

            {/* Card Header */}
            <div className="relative flex items-center gap-3.5 mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/20 backdrop-blur-md flex items-center justify-center p-2 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                <img
                  src="/Favecoiiin.png"
                  alt="Rikba"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              <span className="font-bold text-foreground text-2xl tracking-tight">
                Rikba
              </span>

              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-xl px-3.5 py-1.5 text-xs font-semibold text-sky-400 shadow-sm">
                <SparkleIcon size={12} className="text-sky-400" />
                Recommended
              </span>
            </div>

            {/* Feature Rows */}
            <div className="space-y-6">
              <ComparisonRow
                icon={<CheckIcon />}
                label="Pricing"
                value="Fair fares, Clear prices"
              />

              <ComparisonRow
                icon={<CheckIcon />}
                label="Driver commission"
                value="Drivers keep 92%"
              />

              <ComparisonRow
                icon={<CheckIcon />}
                label="Built for"
                value="100% designed for Malta"
              />

              <ComparisonRow
                icon={<CheckIcon />}
                label="Money stays"
                value="Your money stays on the island"
              />

              <ComparisonRow
                icon={<CheckIcon />}
                label="Transparency"
                value="Book a price, pay that price"
              />

              <ComparisonRow
                icon={<CheckIcon />}
                label="Driver experience"
                value="Happy drivers, better rides"
              />
            </div>

            {/* Commission Bar Section */}
            <div className="mt-9 pt-7 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Driver keeps
                </span>
                <span className="text-base font-bold text-sky-400 tracking-tight">
                  92%
                </span>
              </div>

              <div className="h-3.5 rounded-full bg-white/5 border border-white/10 overflow-hidden p-0.5">
                <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 w-[92%] shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-1000" />
              </div>
            </div>

          </div>

          {/* Bottom Note Badge */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 backdrop-blur-md px-5 py-2 text-xs font-medium text-sky-300 shadow-sm">
              Our commission will never increase.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ================= ROW COMPONENT ================= */

function ComparisonRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3.5 group">
      <div className="mt-0.5 w-6 h-6 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-400 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <div>
        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-sky-400/80 block">
          {label}
        </span>
        <p className="text-sm md:text-base leading-relaxed text-foreground font-medium mt-0.5">
          {value}
        </p>
      </div>
    </div>
  )
}

/* ================= ICONS ================= */

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="10.5 4.5 5.75 9.5 3.5 7.25" />
    </svg>
  )
}

export function SparkleIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" />
    </svg>
  )
}
