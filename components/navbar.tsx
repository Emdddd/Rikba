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

          <a href="#problem" className="text-muted-foreground hover:text-foreground text-sm">
            Why Rikba
          </a>

          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground text-sm">
            How it works
          </a>

          <a href="#faq" className="text-muted-foreground hover:text-foreground text-sm">
            FAQ
          </a>

        </div>

        {/* ===== RIGHT SIDE STACK ===== */}
        <div className="hidden md:flex flex-col items-center gap-2">

          {/* CONTACT BUTTON */}
          <a
            href="mailto:info@rikba.eu"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-md shadow-primary/25"
          >
            Contact us
          </a>

          {/* THEME SWITCH */}
          <ThemeToggle />

        </div>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-foreground"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* ===== MOBILE MENU ===== */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-5 py-6 flex flex-col items-center gap-5">

            <a href="#problem" onClick={() => setMobileMenuOpen(false)}>
              Why Rikba
            </a>

            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
              How it works
            </a>

            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>

            {/* CONTACT */}
            <a
              href="mailto:info@rikba.eu"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold"
            >
              Contact us
            </a>

            {/* THEME SWITCH */}
            <ThemeToggle />

          </div>
        </div>
      )}
    </nav>
  )
}
