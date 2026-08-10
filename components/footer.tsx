"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* ===== AMBIENT GLOW (SEAMLESS & BLENDED) ===== */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-sky-400/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* BRAND LOGO */}
          <Link href="/" className="flex items-center justify-center gap-2.5 group mb-4">
            <div className="w-9 h-9 rounded-full bg-sky-500/10 border border-sky-400/20 backdrop-blur-md flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110">
              <img
                src="/Favecoiiin.png"
                alt="Rikba"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-foreground font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
              Rikba
            </span>
          </Link>

          {/* NAVIGATION LINKS */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-medium text-muted-foreground">
            <a
              href="/#problem"
              className="hover:text-sky-400 transition-colors duration-200"
            >
              Why Rikba
            </a>

            <a
              href="/#how-it-works"
              className="hover:text-sky-400 transition-colors duration-200"
            >
              How it works
            </a>

            <Link
              href="/blog"
              className="hover:text-sky-400 transition-colors duration-200"
            >
              Blog
            </Link>

            <Link
              href="/legal"
              className="hover:text-sky-400 transition-colors duration-200"
            >
              Legal
            </Link>

            <Link
              href="/legal/contact"
              className="hover:text-sky-400 transition-colors duration-200"
            >
              Contact us
            </Link>
          </div>

          {/* LIGHT TRANSPARENT DIVIDER */}
          <div className="my-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

          {/* COPYRIGHT & ADDRESS */}
          <p className="text-xs md:text-sm font-medium text-muted-foreground">
            &copy; 2026 Rikba. Made in Malta.
          </p>

          <p className="mt-2 text-[11px] font-mono text-muted-foreground/70 tracking-wide max-w-md leading-relaxed">
            RIKBA Rides Ltd., 23, Triq Nofs in-Nhar, Valletta, VLT 1102, Malta
          </p>

        </div>
      </div>
    </footer>
  )
}
