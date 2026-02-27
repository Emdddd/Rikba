"use client"

import { useState } from "react"
import { AnimateOnScroll } from "./animate-on-scroll"

export function WaitlistSection() {
  const [role, setRole] = useState<"rider" | "driver">("rider")
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append("role", role)

    const response = await fetch("https://formspree.io/f/xwvnyjbr", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {
      form.reset()
      setShowToast(true)

      setTimeout(() => {
        setShowToast(false)
      }, 5000)
    }
  }

  return (
    <section id="waitlist" className="py-20 md:py-32 border-t border-border relative">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-center text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Be first <span className="text-primary">in line.</span>
            </h2>
            <p className="mt-4 text-center text-muted-foreground text-lg">
              Rikba launches Summer 2026. Get in before everyone else.
            </p>
          </AnimateOnScroll>

          {/* Role toggle */}
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex rounded-xl bg-secondary p-1 border border-border">
              <button
                type="button"
                onClick={() => setRole("rider")}
                className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                  role === "rider"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                I want to ride
              </button>
              <button
                type="button"
                onClick={() => setRole("driver")}
                className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                  role === "driver"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                I want to drive
              </button>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <label className="block text-sm font-medium mb-2">
              Your email or phone (or both)
            </label>

            <input
              name="contact"
              type="text"
              required
              placeholder={role === "rider" ? "rider@email.com" : "driver@email.com"}
              className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground focus:ring-2 focus:ring-primary/50"
            />

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Join the Waitlist
            </button>
          </form>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-2xl text-lg font-semibold animate-fade-in">
            Submitted.. 💙
          </div>
        </div>
      )}
    </section>
  )
}
