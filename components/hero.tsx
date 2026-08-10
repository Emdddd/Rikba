"use client"

import { useState } from "react"
import Image from "next/image"

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 30
    const y = (e.clientY - rect.top - rect.height / 2) / 30
    setMousePos({ x, y })
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* ===== AMBIENT GLOW ===== */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_65%)] blur-[130px] animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-90" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 z-10 text-center flex flex-col items-center">
        
        {/* ===== LOGO ===== */}
        <div className="mb-6 transition-all duration-700 transform hover:scale-105">
          <div className="relative w-[220px] md:w-[300px] lg:w-[360px] mx-auto">
            <Image
              src="/1CD50AD3-C98C-41E9-906E-DA7B306907D7.png"
              alt="Rikba logo"
              width={480}
              height={200}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]"
            />
          </div>
        </div>

        {/* ===== LAUNCH BADGE ===== */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-xl px-4 py-1.5 text-xs font-medium tracking-wide text-sky-400 shadow-lg shadow-sky-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
            </span>
            Launching Soon in Malta
          </span>
        </div>

        {/* ===== MAIN HEADING ===== */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] max-w-4xl">
          Malta deserves <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-white">
            a better ride.
          </span>
        </h1>

        {/* ===== SUBTITLE ===== */}
        <p className="mt-6 max-w-2xl text-base md:text-xl text-muted-foreground leading-relaxed font-normal">
          Fair prices. Happier drivers. An app that’s 100% Maltese and keeps your money on the island.
        </p>

        {/* ===== CTA BUTTONS ===== */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#waitlist"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-sky-400 px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-sky-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:scale-[1.02] active:scale-[0.98] min-h-[52px]"
          >
            Join the Waitlist
          </a>

          <a
            href="#waitlist"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:bg-white/10 hover:border-sky-500/30 hover:scale-[1.02] active:scale-[0.98] min-h-[52px]"
          >
            I want to drive
          </a>
        </div>

        {/* ===== BENTO HIGHLIGHT CARDS (REPLACES THE CIRCLE) ===== */}
        <div 
          style={{
            transform: `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
            transition: "transform 0.1s ease-out"
          }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl text-left"
        >
          {/* CARD 1 */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl p-6 shadow-xl transition-all duration-300 hover:border-sky-500/30">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground text-base mb-1">Transparent Fares</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">No surge surprises or hidden fees. What you see is what you pay.</p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl p-6 shadow-xl transition-all duration-300 hover:border-sky-500/30">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground text-base mb-1">Happier Drivers</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Drivers keep up to 92% of earnings, ensuring better service for passengers.</p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl p-6 shadow-xl transition-all duration-300 hover:border-sky-500/30">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground text-base mb-1">100% Maltese</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Local support, island-tailored tech, and keeping revenue local.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
