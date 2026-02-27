"use client"

import { AnimateOnScroll } from "./animate-on-scroll"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-5">

        <AnimateOnScroll animation="fade-up">

          {/* CENTER EVERYTHING */}
          <div className="flex flex-col items-center text-center">

            {/* Logo + Name */}
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

            {/* Contact */}
            <a
              href="mailto:info@rikba.eu"
              className="mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact us
            </a>

            {/* Copyright */}
            <p className="mt-6 text-sm text-muted-foreground">
              &copy; 2026 Rikba. Made in Malta.
            </p>

          </div>

        </AnimateOnScroll>

      </div>
    </footer>
  )
}
