"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* ===== ANIMATED MALTA MAP ===== */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[430px] overflow-hidden opacity-40 dark:opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.14),transparent_68%)]" />
        <div
          className="absolute left-1/2 bottom-[-70px] h-[430px] w-[760px] -translate-x-1/2 overflow-hidden bg-[repeating-linear-gradient(115deg,transparent_0px,transparent_17px,rgba(14,165,233,0.24)_18px,transparent_19px,transparent_34px)] animate-rikba-map-lines"
          style={{
            WebkitMaskImage: "url('/maltaHigh.svg')",
            maskImage: "url('/maltaHigh.svg')",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
        <div
          className="absolute left-1/2 bottom-[-70px] h-[430px] w-[760px] -translate-x-1/2 overflow-hidden bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_31px,rgba(56,189,248,0.16)_32px,transparent_33px,transparent_62px)] animate-rikba-map-lines-reverse"
          style={{
            WebkitMaskImage: "url('/maltaHigh.svg')",
            maskImage: "url('/maltaHigh.svg')",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
        <div className="absolute left-1/2 bottom-[55px] h-[1px] w-[520px] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-400/45 to-transparent blur-[1px] animate-rikba-map-beam" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* BRAND LOGO */}
          <Link href="/" className="flex items-center justify-center gap-2.5 group mb-4">
            <div className="w-9 h-9 rounded-full bg-sky-500/10 border border-sky-400/30 backdrop-blur-md flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110 shadow-sm">
              <img
                src="/Favecoiiin.png"
                alt="Rikba"
                className="w-full h-full object-contain"
              />
            </div>
            {/* NAME: SOLID HIGH-CONTRAST TEXT */}
            <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
              Rikba
            </span>
          </Link>

          {/* NAVIGATION LINKS */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-semibold text-slate-600 dark:text-neutral-400">
            <a
              href="/#problem"
              className="hover:text-sky-500 transition-colors duration-200"
            >
              Why Rikba
            </a>

            <a
              href="/#how-it-works"
              className="hover:text-sky-500 transition-colors duration-200"
            >
              How it works
            </a>

            <Link
              href="/blog"
              className="hover:text-sky-500 transition-colors duration-200"
            >
              Blog
            </Link>

            <Link
              href="/legal"
              className="hover:text-sky-500 transition-colors duration-200"
            >
              Legal
            </Link>

            <Link
              href="/legal/contact"
              className="hover:text-sky-500 transition-colors duration-200"
            >
              Contact us
            </Link>
          </div>

          {/* LIGHT TRANSPARENT DIVIDER */}
          <div className="my-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

          {/* COPYRIGHT & ADDRESS */}
          <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-neutral-400">
            &copy; 2026 Rikba. Made in Malta.
          </p>

          <p className="mt-2 text-[11px] font-mono text-slate-400 dark:text-neutral-500 tracking-wide max-w-md leading-relaxed">
            RIKBA Rides Ltd., 23, Triq Nofs in-Nhar, Valletta, VLT 1102, Malta
          </p>
        </div>
      </div>
    </footer>
  )
}
