"use client"

import { useState } from "react"

const faqs = [
  {
    question: "When are you launching?",
    answer:
      "Rikba is launching in Summer 2026. Join the waitlist to be the first to know when we go live.",
  },
  {
    question: "How do I sign up as a driver?",
    answer:
      "Join the waitlist as a driver and we'll contact you with onboarding details as we approach launch. Every driver goes through background checks and in-person onboarding.",
  },
  {
    question: "What areas will you cover?",
    answer:
      "We're starting with the main urban areas of Malta and will expand rapidly based on demand. Our goal is full island coverage.",
  },
  {
    question: "Is Rikba safe?",
    answer:
      "Absolutely. We're fully licensed, all drivers are vetted with background checks and driving record reviews, and every vehicle on the platform meets our standards.",
  },
  {
    question: "How is Rikba different from other platforms?",
    answer:
      "We're a 100% Maltese company. We take a much smaller commission from drivers, which means lower fares for you. Built for Malta, not copy-pasted from a global template.",
  },
  {
    question: "How does pricing work?",
    answer:
      "You see the price before you book. That's the price you pay. No hidden fees, no surprises after the ride.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-3xl px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            Frequently asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-white">
              questions
            </span>
          </h2>
        </div>

        {/* ACCORDION ITEMS */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-sky-500/40 bg-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(56,189,248,0.1)]"
                    : "border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl hover:border-white/20 hover:bg-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left min-h-[64px] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-base md:text-lg text-foreground pr-4 tracking-tight">
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-sky-400 border-sky-300 text-black rotate-45 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                        : "border-white/20 bg-white/5 text-neutral-300"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="8" y1="3" x2="8" y2="13" />
                      <line x1="3" y1="8" x2="13" y2="8" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
