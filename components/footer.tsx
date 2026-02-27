"use client"

import { AnimateOnScroll } from "./animate-on-scroll"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-5">

        <AnimateOnScroll animation="fade-up">

          {/* Centered Footer */}
          <div className="flex flex-col items-center text-center">

            {/* Logo + Brand */}
            <div className="flex items-center justify-center gap-1">
              <img
                src="/Logoicon.PNG"
                alt="Rikba"
                className="w-7 h-7 object-contain"
              />

              <span className="text-foreground font-bold text-lg tracking-tight">
                Rikba
              </span>
            </div>

            {/* Contact */}
            <a
              href="mailto:info@rikba.eu"
              className="mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors translate-x-[4px]"
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
