"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto"
  }, [mobileMenuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 transition-all duration-300">
        <nav
          className={`w-full max-w-5xl rounded-full border transition-all duration-500 ${
            scrolled
              ? "border-white/15 bg-black/70 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-2xl py-2.5 px-6"
              : "border-white/10 bg-black/40 backdrop-blur-xl py-3 px-6"
          } flex items-center justify-between text-white`}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-400/20 group-hover:border-sky-400/50 transition-all duration-300">
              <img
                src="/Favecoiiin.png"
                alt="Rikba"
                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
              Rikba
            </span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-7">
            <a href="/#problem" className="text-xs font-medium text-neutral-300 hover:text-sky-400 transition-colors">
              Why Rikba
            </a>
            <a href="/#how-it-works" className="text-xs font-medium text-neutral-300 hover:text-sky-400 transition-colors">
              How it works
            </a>
            <a href="/#faq" className="text-xs font-medium text-neutral-300 hover:text-sky-400 transition-colors">
              FAQ
            </a>
            <Link href="/blog" className="text-xs font-medium text-neutral-300 hover:text-sky-400 transition-colors">
              Blog
            </Link>
            <Link href="/legal" className="text-xs font-medium text-neutral-300 hover:text-sky-400 transition-colors">
              Legal
            </Link>
            <Link href="/download" className="text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors">
              Download
            </Link>
          </div>

          {/* ACTION BUTTON */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/legal/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-2 text-xs font-semibold text-black transition-all duration-300 hover:bg-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-[1.03]"
            >
              Contact us
            </Link>
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden relative z-50 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >
            <div className="w-4 h-3 flex flex-col justify-between items-center">
              <span className={`w-full h-[1.5px] bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`w-full h-[1.5px] bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-[1.5px] bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
            </div>
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-2xl flex flex-col justify-center px-8 transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          <a href="/#problem" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-neutral-200">
            Why Rikba
          </a>
          <a href="/#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-neutral-200">
            How it works
          </a>
          <a href="/#faq" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-neutral-200">
            FAQ
          </a>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-neutral-200">
            Blog
          </Link>
          <Link href="/legal" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-neutral-200">
            Legal
          </Link>
          <Link href="/download" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-semibold text-sky-400">
            Download App
          </Link>
          <div className="pt-6 flex justify-center">
            <Link
              href="/legal/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full max-w-xs rounded-full bg-sky-400 py-3.5 font-semibold text-black shadow-lg shadow-sky-500/25"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
