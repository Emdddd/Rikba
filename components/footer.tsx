"use client"

import { AnimateOnScroll } from "./animate-on-scroll"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-5">

        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* BRAND */}
            <div className="flex flex-col items-center text-center">

              <div className="flex items-center gap-1 justify-center">
                <img
                  src="/5BDA6FFD-95DA-4CC6-9EAD-71BA2A8B75E0.png"
                  alt="Rikba"
                  className="w-7 h-7 rounded-lg object-contain"
                />

                <span className="text-foreground font-bold text-lg tracking-tight">
                  Rikba
                </span>
              </div>

              <a
                href="mailto:info@rikba.eu"
                className="mt-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact us
              </a>

            </div>

            <p className="text-sm text-muted-foreground text-center">
              &copy; 2026 Rikba. Made in Malta.
            </p>

          </div>
        </AnimateOnScroll>

      </div>
    </footer>
  )
}
