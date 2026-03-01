"use client"

import { useState, useRef, useEffect } from "react"
import ThemeToggle from "@/components/theme-toggle"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  /* ===============================
     CLOSE OUTSIDE + LOCK SCROLL
  =============================== */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* ================= BACKDROP ================= */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? "bg-black/30 backdrop-blur-sm opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ================= NAVBAR ================= */}
      <nav
        ref={menuRef}
        className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-xl border-b border-border"
      >
        <div className="mx-auto max-w-6xl px-5 flex items-center justify-between h-full">

          {/* LOGO */}
          <a href="#" className="flex items-center gap-2">
            <img src="/Logoicon.PNG" className="w-9 h-9" />
            <span className="font-bold text-xl text-foreground">
              Rikba
            </span>
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

          {/* ===== HAMBURGER ANIMATION ===== */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-11 h-11 flex items-center justify-center"
          >
            <span className="relative w-6 h-5">

              <span
                className={`absolute top-0 w-full h-[2px] bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 top-[9px]" : ""
                }`}
              />

              <span
                className={`absolute top-[9px] w-full h-[2px] bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`absolute bottom-0 w-full h-[2px] bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 bottom-[9px]" : ""
                }`}
              />

            </span>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU (SEPARATED) ================= */}
      <div
        className={`
          fixed top-16 left-0 right-0 z-40
          md:hidden
          bg-background border-b border-border
          transition-all duration-300
          ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="px-5 py-8 flex flex-col items-center gap-6 text-sm">

          <a onClick={()=>setMobileMenuOpen(false)} href="#problem">
            Why Rikba
          </a>

          <a onClick={()=>setMobileMenuOpen(false)} href="#how-it-works">
            How it works
          </a>

          <a onClick={()=>setMobileMenuOpen(false)} href="#faq">
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
