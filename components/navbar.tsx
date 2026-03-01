"use client"

import { useState, useEffect } from "react"
import ThemeToggle from "@/components/theme-toggle"
import { useTheme } from "next-themes"

export function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  /* LOCK SCROLL */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto"
  }, [mobileMenuOpen])

  const lightMenuActive =
    mobileMenuOpen && theme !== "dark"

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`
        fixed top-0 left-0 right-0 z-50 border-b border-border
        transition-all duration-500
        ${
          lightMenuActive
            ? "bg-white"
            : "bg-background/80 backdrop-blur-xl"
        }
      `}
      >
        <div className="mx-auto max-w-6xl px-5 flex items-center justify-between h-16">

          {/* LOGO */}
          <a href="#" className="flex items-center gap-[2px]">
            <img src="/Logoicon.PNG" className="w-9 h-9 object-contain" />
            <span className="font-bold text-xl">Rikba</span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">

            <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground">
              Why Rikba
            </a>

            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
              How it works
            </a>

            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">
              FAQ
            </a>

            <div className="flex items-center gap-3">

              <a
                href="mailto:info@rikba.eu"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Contact us
              </a>

              <ThemeToggle />

            </div>
          </div>

          {/* ================= HAMBURGER ================= */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden w-11 h-11 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-6 transform-gpu will-change-transform">

              {/* TOP */}
              <span
                className={`absolute left-0 w-full h-[2px] bg-current
                transition-[transform,opacity] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${mobileMenuOpen ? "rotate-45 top-3" : "top-1"}`}
              />

              {/* MIDDLE */}
              <span
                className={`absolute left-0 w-full h-[2px] bg-current
                transition-[transform,opacity] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${mobileMenuOpen ? "opacity-0" : "top-3"}`}
              />

              {/* BOTTOM */}
              <span
                className={`absolute left-0 w-full h-[2px] bg-current
                transition-[transform,opacity] duration-900 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${mobileMenuOpen ? "-rotate-45 top-3" : "top-5"}`}
              />

            </div>
          </button>

        </div>
      </nav>

      {/* ================= BLUR BACKDROP ================= */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`
        fixed inset-0 z-40 md:hidden
        transition-all duration-500
        ${
          mobileMenuOpen
            ? "opacity-100 backdrop-blur-xl bg-black/20"
            : "opacity-0 pointer-events-none"
        }
      `}
      />

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
        fixed top-16 left-0 right-0 z-50 md:hidden
        border-b border-border
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }
        ${
          theme === "dark"
            ? "bg-background/95 backdrop-blur-xl"
            : "bg-white"
        }
      >
        <div className="px-6 py-6 flex flex-col gap-6 text-center">

          <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="text-lg">
            Why Rikba
          </a>

          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-lg">
            How it works
          </a>

          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-lg">
            FAQ
          </a>

          <div className="flex justify-center items-center gap-3 pt-4">

            <a
              href="mailto:info@rikba.eu"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground"
            >
              Contact us
            </a>

            <ThemeToggle />

          </div>

        </div>
      </div>
    </>
  )
}
