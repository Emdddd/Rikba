"use client"

import { useState } from "react"
import { AnimateOnScroll } from "./animate-on-scroll"

export function WaitlistSection() {
  const [role, setRole] = useState<"rider" | "driver">("rider")

  return (
    <section id="waitlist" className="py-20 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-center text-3xl md:text-5xl font-bold text-foreground text-balance leading-tight">
              Be first <span className="text-primary">in line.</span>
            </h2>
            <p className="mt-4 text-center text-muted-foreground text-lg leading-relaxed">
              Rikba launches Summer 2026. Get in before everyone else.
            </p>
          </AnimateOnScroll>

          {/* Counter */}
          <AnimateOnScroll animation="scale-in" delay={100}>
            <div className="mt-8 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Join 100+ riders and drivers already on the waitlist
              </span>
            </div>
          </AnimateOnScroll>

          {/* Role toggle */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="mt-8 flex items-center justify-center">
              <div className="inline-flex rounded-xl bg-secondary p-1 border border-border">
                <button
                  onClick={() => setRole("rider")}
                  className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all min-h-[44px] ${
                    role === "rider"
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  I want to ride
                </button>
                <button
                  onClick={() => setRole("driver")}
                  className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all min-h-[44px] ${
                    role === "driver"
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  I want to drive
                </button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8"
            >
              <label htmlFor="contact" className="block text-sm font-medium text-card-foreground mb-2">
                Your email or phone (or both)
              </label>
              <input
                id="contact"
                type="text"
                placeholder={role === "rider" ? "rider@email.com" : "driver@email.com"}
                className="w-full rounded-xl border border-border bg-input px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-base min-h-[48px]"
              />

              <label className="mt-4 flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-5 h-5 rounded border-border bg-input text-primary focus:ring-primary/50 accent-primary shrink-0"
                />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Send me updates, promotions, and offers from Rikba
                </span>
              </label>

              <button
                type="submit"
                className="group mt-6 w-full rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 min-h-[48px] inline-flex items-center justify-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-12">
                  <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" />
                </svg>
                Join the Waitlist
              </button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                We{"'"}ll only contact you about Rikba. No spam, ever.
              </p>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
