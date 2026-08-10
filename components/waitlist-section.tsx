"use client"

import { useState } from "react"

export function WaitlistSection() {
  const [role, setRole] = useState<"rider" | "driver">("rider")
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    formData.append("role", role)

    const response = await fetch("https://formspree.io/f/mgolqzww", {
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
      }, 4000)
    }
  }

  return (
    <section
      id="waitlist"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">

        <div className="mx-auto max-w-xl">

          {/* SECTION HEADER */}
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Be first{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-white">
                in line.
              </span>
            </h2>

            <p className="mt-4 text-base md:text-lg text-muted-foreground font-normal">
              Rikba launches Summer 2026. Get in before everyone else.
            </p>
          </div>

          {/* ROLE TOGGLE CAPSULE */}
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex rounded-full bg-white/5 border border-sky-500/20 p-1.5 backdrop-blur-xl shadow-lg">

              <button
                type="button"
                onClick={() => setRole("rider")}
                className={`rounded-full px-6 py-2.5 text-xs md:text-sm font-semibold transition-all duration-300 ${
                  role === "rider"
                    ? "bg-sky-400 text-black shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I want to ride
              </button>

              <button
                type="button"
                onClick={() => setRole("driver")}
                className={`rounded-full px-6 py-2.5 text-xs md:text-sm font-semibold transition-all duration-300 ${
                  role === "driver"
                    ? "bg-sky-400 text-black shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I want to drive
              </button>

            </div>
          </div>

          {/* FORM CONTAINER */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 rounded-[32px] border border-sky-500/20 bg-sky-500/5 backdrop-blur-2xl p-7 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-sky-400/30"
          >
            <label className="block text-xs font-mono uppercase tracking-wider text-sky-400/90 mb-3 font-semibold">
              Your contact details
            </label>

            {/* Email + Phone */}
            <div className="grid md:grid-cols-2 gap-4">

              {/* Email */}
              <input
                name="email"
                type="email"
                required
                placeholder={
                  role === "rider"
                    ? "rider@email.com"
                    : "driver@email.com"
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-sky-400 focus:bg-white/10 transition-all"
              />

              {/* Phone */}
              <input
                name="phone"
                type="tel"
                required
                placeholder="+356 9999 9999"
                className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-sky-400 focus:bg-white/10 transition-all"
              />

            </div>

            {/* Launch Update Checkbox */}
            <label className="mt-5 flex items-center gap-3 cursor-pointer group">

              <input
                type="checkbox"
                name="launch_update"
                value="yes"
                className="w-4 h-4 rounded border-white/20 bg-white/5 text-sky-400 accent-sky-400 focus:ring-0 cursor-pointer"
              />

              <span className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Update me when launched.
              </span>

            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full rounded-2xl bg-sky-400 px-6 py-4 font-semibold text-black text-sm transition-all duration-300 hover:bg-sky-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:scale-[1.01] active:scale-[0.98]"
            >
              Join the Waitlist
            </button>

            <p className="mt-4 text-center text-xs text-muted-foreground font-normal">
              We{"'"}ll only contact you about Rikba. No spam, ever.
            </p>

          </form>

        </div>
      </div>

      {/* TOAST NOTIFICATION */}
      {showToast && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50 px-4">
          <div className="bg-sky-400 text-black px-8 py-4 rounded-2xl shadow-[0_0_40px_rgba(56,189,248,0.5)] text-base font-semibold border border-sky-300 animate-bounce">
            Successfully received!
          </div>
        </div>
      )}
    </section>
  )
}
