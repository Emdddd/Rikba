"use client"

import { FloatingBadge } from "./floating-badge"

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      title: "Open the app",
      description: "Sign up in seconds. No paperwork.",
    },
    {
      step: "02",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Pick your destination",
      description: "See the price upfront. No surprises.",
    },
    {
      step: "03",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Your driver arrives",
      description: "Sit back. You're covered.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            Three taps
          </h2>

          <div className="mt-2 inline-flex items-center gap-2 text-sky-500 font-semibold text-lg md:text-xl">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            That's it.
          </div>
        </div>

        {/* STEPS GRID */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 max-w-4xl mx-auto relative">

          {/* CONNECTING LINE */}
          <div className="hidden md:block absolute top-[44px] left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-[1px] bg-gradient-to-r from-sky-500/20 via-sky-400/50 to-sky-500/20 z-0">
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          </div>

          {steps.map((step, index) => (
            <div key={step.step} className="relative z-10 text-center group">

              {/* ICON CONTAINER */}
              <div className="relative mx-auto mb-6 w-20 h-20 rounded-2xl bg-sky-500/10 border border-sky-400/20 backdrop-blur-md flex items-center justify-center text-sky-500 transition-all duration-300 group-hover:scale-105 group-hover:border-sky-400/40 shadow-sm">

                {step.icon}

                {/* STEP NUMBER BADGE */}
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-sky-400 text-black text-xs font-bold flex items-center justify-center shadow-md shadow-sky-500/20">
                  {step.step}
                </span>

                {/* FLOATING BADGES */}
                {index === 0 && (
                  <FloatingBadge
                    delay={0}
                    duration={4}
                    direction="y"
                    className="absolute -right-16 top-1/2 -translate-y-1/2 hidden md:flex pointer-events-none"
                  >
                    <div className="flex items-center gap-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 backdrop-blur-md px-3 py-1 shadow-sm">
                      <img
                        src="/Favecoiiin.png"
                        alt="Rikba"
                        className="w-4 h-4 object-contain"
                      />
                      <span className="text-[10px] font-semibold text-sky-400 whitespace-nowrap">
                        Rikba
                      </span>
                    </div>
                  </FloatingBadge>
                )}

                {index === 1 && (
                  <FloatingBadge
                    delay={0.3}
                    duration={3.5}
                    direction="y"
                    className="absolute -right-20 top-1/2 -translate-y-1/2 hidden md:flex pointer-events-none"
                  >
                    <span className="flex items-center gap-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 backdrop-blur-md px-3 py-1 shadow-sm">
                      <span className="text-[10px] text-muted-foreground font-medium">
                        EUR
                      </span>
                      <span className="text-xs font-bold text-sky-400">
                        7.80
                      </span>
                    </span>
                  </FloatingBadge>
                )}

                {index === 2 && (
                  <FloatingBadge
                    delay={0.2}
                    duration={4}
                    direction="y"
                    className="absolute -right-24 top-1/2 -translate-y-1/2 hidden md:flex pointer-events-none"
                  >
                    <div className="flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 backdrop-blur-md px-3 py-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-semibold text-sky-400 whitespace-nowrap">
                        1 min away
                      </span>
                    </div>
                  </FloatingBadge>
                )}

              </div>

              {/* TITLE */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 tracking-tight">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-normal">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
