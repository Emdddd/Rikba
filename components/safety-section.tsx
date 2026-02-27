"use client"

import { AnimateOnScroll } from "./animate-on-scroll"

export function SafetySection() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      badge: (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="text-primary">
          <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" />
        </svg>
      ),
      title: "Fully licensed",
      description: "Working with Malta's transport authorities to meet every requirement before launch. No shortcuts.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      badge: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Vetted drivers",
      description: "Background checks, driving record reviews, and in-person onboarding. Every driver, every time.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      badge: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Vehicle standards",
      description: "We set vehicle standards and hold every car on the platform to them.",
    },
  ]

  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-5">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-foreground text-balance leading-tight">
            Safe rides.{" "}
            <span className="text-primary inline-flex items-center gap-1.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 opacity-60">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Properly licensed.
            </span>
          </h2>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} animation="fade-up" delay={index * 120}>
              <div className="group rounded-2xl border border-border bg-card p-7 md:p-8 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-5 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2 inline-flex items-center gap-2">
                  {feature.title}
                  {feature.badge}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
