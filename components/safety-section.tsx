"use client"

export function SafetySection() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      badge: (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="text-sky-500">
          <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" />
        </svg>
      ),
      title: "Fully licensed",
      description: "Working with Malta's transport authorities to meet every requirement before launch. No shortcuts.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      badge: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Vetted drivers",
      description: "Background checks, driving record reviews, and in-person onboarding. Every driver, every time.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      badge: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Vehicle standards",
      description: "We set vehicle standards and hold every car on the platform to them.",
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Ambient Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            Safe rides.{" "}
            <span className="text-sky-500 inline-flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Properly licensed.
            </span>
          </h2>
        </div>

        {/* FEATURES GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-sky-500/15 bg-sky-500/5 backdrop-blur-md p-8 transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-500/10 hover:shadow-lg hover:shadow-sky-500/5"
            >
              <div className="mb-6 w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/20 backdrop-blur-md flex items-center justify-center text-sky-500 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2.5 inline-flex items-center gap-2 tracking-tight">
                {feature.title}
                {feature.badge}
              </h3>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
