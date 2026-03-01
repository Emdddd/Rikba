"use client"

import { useState } from "react"
import ThemeToggle from "@/components/theme-toggle"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="mx-auto max-w-6xl px-5 flex items-center justify-between h-16">

        {/* ===== LOGO ===== */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/Logoicon.PNG"
            alt="Rikba Logo"
            className="w-9 h-9 object-contain"
          />

          <span className="text-foreground font-bold text-xl tracking-tight">
            Rikba
          </span>
        </a>

        {/* ===== Desktop Nav ===== */}
        <div className="hidden md:flex items-center gap-8">

          <a
            href="#problem"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center gap-1.5"
          >
            Why Rikba
          </a>

          <a
            href="#how-it-works"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center gap-1.5"
          >
            How it works
          </a>

          <a
            href="#faq"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center gap-1.5"
          >
            FAQ
          </a>

        </div>

        {/* ===== CTA + THEME ===== */}
        <div className="hidden md:flex items-center gap-3">

          {/* THEME SWITCH */}
          <ThemeToggle />

          <a
            href="#waitlist"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors min-h-[44px] shadow-md shadow-primary/25"
          >
            Join the Waitlist
          </a>

        </div>

        {/* ===== Mobile Menu Button ===== */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-foreground"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

      </div>

      {/* ===== Mobile Menu ===== */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-5 py-4 flex flex-col gap-4">

            <a href="#problem" onClick={() => setMobileMenuOpen(false)}>
              Why Rikba
            </a>

            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
              How it works
            </a>

            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>

            {/* MOBILE THEME TOGGLE */}
            <ThemeToggle />

            <a
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Join the Waitlist
            </a>

          </div>
        </div>
      )}
    </nav>
  )
}
