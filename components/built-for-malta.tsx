"use client"

import { motion } from "framer-motion"
import { MaltaMap } from "./malta-map"
import { SparkleIcon } from "./comparison-section"
import { CarAnimation } from "./floating-badge"

export function BuiltForMalta() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-2xl p-8 md:p-16 text-center min-h-[440px] md:min-h-[540px] flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        >
          {/* ===== MALTA MAP BACKGROUND ===== */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
            <MaltaMap />
          </div>

          {/* ===== GRADIENT OVERLAY FOR READABILITY ===== */}
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(3,7,18,0.4)_0%,rgba(3,7,18,0.85)_100%)] pointer-events-none" />

          {/* ===== AMBIENT SKY BLUE GLOW ===== */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none z-[1]" />

          {/* ===== MAIN CONTENT ===== */}
          <div className="relative z-10 flex flex-col items-center">
            {/* ICON */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-400/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.15)]"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sky-400"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </motion.div>

            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
            >
              Built for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-white">
                Malta.
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mt-5 max-w-xl text-base md:text-xl text-muted-foreground leading-relaxed font-normal"
            >
              Not copy-pasted from a megacity playbook. A Maltese team building for a Maltese island. Festa traffic, Sliema gridlock, and all.
            </motion.p>

            {/* BADGES */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              {[
                { text: "100% Maltese owned" },
                { text: "Local support team" },
                { text: "Island-wide coverage" },
              ].map((item, idx) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 backdrop-blur-md px-4 py-2 text-xs md:text-sm font-medium text-sky-300 shadow-sm transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-500/20 hover:scale-[1.03]"
                >
                  <SparkleIcon size={14} className="text-sky-400" />
                  {item.text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ===== ANIMATED CAR ===== */}
          <div className="absolute bottom-6 left-0 right-0 z-20 pointer-events-none">
            <CarAnimation />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
