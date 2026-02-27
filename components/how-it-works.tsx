"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { FloatingBadge } from "./floating-badge"

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      title: "Open the app",
      description: "Sign up in seconds. No paperwork.",
    },
    {
      step: "02",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Your driver arrives",
      description: "Sit back. You're covered.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-5">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-foreground text-balance leading-tight">
            Three taps.{" "}
            <span className="text-primary inline-flex items-center gap-1.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 opacity-60">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              That{"'"}s it.
            </span>
          </h2>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-8 md:grid-cols-3 max-w-4xl mx-auto relative">
          {/* Connecting line behind steps (desktop only) */}
          <div className="hidden md:block absolute top-[40px] left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-px bg-border z-0">
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-travel-dot" />
          </div>

          {steps.map((step, index) => (
            <AnimateOnScroll key={step.step} animation="fade-up" delay={index * 150}>
              <div className="relative z-10 text-center">
                {/* Icon with step number */}
                <div className="relative mx-auto mb-5 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                    {step.step}
                  </span>

                  {/* Small contextual animated chip next to icon */}
                  {index === 0 && (
                    <FloatingBadge delay={0} duration={4} direction="y" className="absolute -right-16 top-1/2 -translate-y-1/2 hidden md:flex">
                      <div className="flex items-center gap-1 rounded-lg bg-card border border-border shadow-md px-2 py-1">
                        <div className="w-4 h-4 rounded bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-[7px]">R</span>
                        </div>
                        <span className="text-[8px] font-semibold text-foreground whitespace-nowrap">rikba</span>
                      </div>
                    </FloatingBadge>
                  )}

                  {index === 1 && (
                    <FloatingBadge delay={0.3} duration={3.5} direction="y" className="absolute -right-20 top-1/2 -translate-y-1/2 hidden md:flex">
                      <span className="flex items-center gap-1 rounded-lg bg-card border border-border shadow-md px-2 py-1">
                        <span className="text-[8px] text-muted-foreground font-medium">EUR</span>
                        <span className="text-sm font-bold text-primary">8.50</span>
                      </span>
                    </FloatingBadge>
                  )}

                  {index === 2 && (
                    <FloatingBadge delay={0.2} duration={4} direction="y" className="absolute -right-24 top-1/2 -translate-y-1/2 hidden md:flex">
                      <div className="flex items-center gap-1.5 rounded-lg bg-card border border-border shadow-md px-2 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[8px] font-semibold text-foreground whitespace-nowrap">1 min away</span>
                      </div>
                    </FloatingBadge>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
