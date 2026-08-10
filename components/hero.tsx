"use client"

import { useState } from "react"
import Image from "next/image"

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 25
    const y = (e.clientY - rect.top - rect.height / 2) / 25
    setMousePos({ x, y })
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] pt-24 pb-24 md:pt-32 md:pb-36 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* ===== AMBIENT GLOW ===== */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <div className="w-[700px] h-[700px] md:w-[900px] md:h-[900px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent_65%)] blur-[140px] animate-pulse" />
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

        {/* ===== ABSTRACT 3D VISUAL ===== */}
        <div
          style={{
            transform: `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
            transition: "transform 0.1s ease-out"
          }}
          className="relative mt-16 w-full max-w-3xl h-[260px] md:h-[360px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-2xl p-6 shadow-2xl flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border border-sky-400/20 flex items-center justify-center shadow-[0_0_60px_rgba(56,189,248,0.12)] animate-[spin_30s_linear_infinite]">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border border-sky-300/15 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-sky-400/20 blur-2xl animate-pulse" />
            </div>
          </div>

          <div className="absolute bottom-5 flex items-center gap-2 text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
            Rikba Mobility Engine • Malta Network
          </div>
        </div>

      </div>
    </section>
  )
}
