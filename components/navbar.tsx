"use client"

import { useState, useEffect } from "react"
import ThemeToggle from "@/components/theme-toggle"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  /* LOCK SCROLL */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* ================= BACKDROP ================= */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`
          fixed inset-0 z-40
          transition-all duration-300 ease-out
          ${
            mobileMenuOpen
              ? "bg-black/30 backdrop-blur-sm opacity-100"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="mx-auto max-w-6xl px-5 flex items-center justify-between h-full">

          {/* LOGO */}
          <a href="#" className="flex items-center gap-2">
            <img src="/Logoicon.PNG" className="w-9 h-9" />
            <span className="font-bold text-xl text-foreground">Rikba</span>
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#problem">Why Rikba</a>
            <a href="#how-it-works">How it works</a>
            <a href="#faq">FAQ</a>
          </div>

          {/* RIGHT SIDE DESKTOP */}
          <div className="hidden md:flex flex-col items-center gap-1">
            <a
              href="mailto:info@rikba.eu"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold"
            >
              Contact us
            </a>

            <ThemeToggle />
          </div>

          {/* ================= HAMBURGER ================= */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-11 h-11 flex items-center justify-center"
          >
            <span className="relative w-6 h-5">

              {/* TOP */}
              <span
                className={`absolute top-0 w-full h-[2px] bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 top-[9px]" : ""
                }`}
              />

              {/* MIDDLE */}
              <span
                className={`absolute top-[9px] w-full h-[2px] bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />

              {/* BOTTOM */}
              <span
                className={`absolute bottom-0 w-full h-[2px] bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 bottom-[9px]" : ""
                }`}
              />

            </span>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed top-16 left-0 right-0 z-50
          md:hidden
          bg-background border-b border-border
          transition-all duration-300 ease-out
          ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="px-5 py-8 flex flex-col items-center gap-6 text-sm">

          <a href="#problem" onClick={() => setMobileMenuOpen(false)}>
            Why Rikba
          </a>

          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
            How it works
          </a>

          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </a>

          <a
            href="mailto:info@rikba.eu"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold"
          >
            Contact us
          </a>

          <ThemeToggle />

        </div>
      </div>
    </>
  )
}
