"use client"

import { useState } from "react"
import { AnimateOnScroll } from "./animate-on-scroll"

const faqs = [
  {
    question: "When are you launching?",
    answer: "Rikba is launching in Summer 2026. Join the waitlist to be the first to know when we go live.",
  },
  {
    question: "How do I sign up as a driver?",
    answer: "Join the waitlist as a driver and we'll contact you with onboarding details as we approach launch. Every driver goes through background checks and in-person onboarding.",
  },
  {
    question: "What areas will you cover?",
    answer: "We're starting with the main urban areas of Malta and will expand rapidly based on demand. Our goal is full island coverage.",
  },
  {
    question: "Is Rikba safe?",
    answer: "Absolutely. We're fully licensed, all drivers are vetted with background checks and driving record reviews, and every vehicle on the platform meets our standards.",
  },
  {
    question: "How is Rikba different from other platforms?",
    answer: "We're 100% Maltese-owned, we take a much smaller commission from drivers which means lower fares for you, and we never use surge pricing. Built for Malta, not copy-pasted from a global template.",
  },
  {
    question: "How does pricing work?",
    answer: "You see the price before you book. That's the price you pay. No surge pricing, no hidden fees, no surprises after the ride.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-32 border-t border-border">
      <div className="mx-auto max-w-3xl px-5">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-foreground text-balance leading-tight">
            Frequently asked <span className="text-primary">questions</span>
          </h2>
        </AnimateOnScroll>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 80}>
              <div className="rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/30">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left min-h-[56px]"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-card-foreground pr-4">{faq.question}</span>
                  <span className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    openIndex === index
                      ? "bg-primary text-primary-foreground rotate-45"
                      : "bg-secondary text-muted-foreground"
                  }`}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="8" y1="3" x2="8" y2="13" />
                      <line x1="3" y1="8" x2="13" y2="8" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
