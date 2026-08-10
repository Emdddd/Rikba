"use client"

import { MaltaMap } from "./malta-map"
import { SparkleIcon } from "./comparison-section"
import { CarAnimation } from "./floating-badge"

export function BuiltForMalta() {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        {/* CONTAINER WITHOUT HEAVY DARK BOX */}
        <div className="relative p-6 md:p-12 text-center flex flex-col items-center justify-center">
          
          {/* ===== MALTA MAP BACKGROUND (BLEND & SEAMLESS) ===== */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
            <MaltaMap />
          </div>

          {/* ===== SUBTLE AMBIENT GLOW ===== */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-sky-400/10 rounded-full blur-[100px] pointer-events-none z-0" />

          {/* ===== MAIN CONTENT ===== */}
          <div className="relative z-10 flex flex-col items-center max-w-2xl">
            {/* ICON */}
            <div className="mb-6 w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-400/20 backdrop-blur-md flex items-center justify-center shadow-sm">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sky-500"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Built for{" "}
              <span className="text-sky-500">
                Malta.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
              Not copy-pasted from a megacity playbook. A Maltese team building for a Maltese island. Festa traffic, Sliema gridlock, and all.
            </p>

            {/* TRANSPARENT PILL BADGES */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                { text: "100% Maltese owned" },
                { text: "Local support team" },
                { text: "Island-wide coverage" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/5 backdrop-blur-sm px-4 py-2 text-xs md:text-sm font-medium text-sky-600 dark:text-sky-300 transition-all duration-300 hover:bg-sky-500/10"
                >
                  <SparkleIcon size={14} className="text-sky-500" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          {/* ===== ANIMATED CAR ===== */}
          <div className="mt-8 relative z-20 pointer-events-none w-full max-w-md">
            <CarAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}
