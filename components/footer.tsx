"use client"

import { AnimateOnScroll } from "./animate-on-scroll"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-5">
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/20">
                <span className="text-primary-foreground font-bold text-xs">R</span>
              </div>
              <span className="text-foreground font-bold text-lg tracking-tight">Rikba</span>
            </div>

            <p className="text-sm text-muted-foreground">
              &copy; 2026 Rikba. Made in Malta.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  )
}
