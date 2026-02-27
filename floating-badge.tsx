"use client"

export function FloatingBadge({
  children,
  className = "",
  delay = 0,
  duration = 4,
  direction = "y",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "y" | "x" | "rotate"
}) {
  const animationName =
    direction === "x" ? "float-x" : direction === "rotate" ? "float-rotate" : "float-y"

  return (
    <div
      className={`inline-flex ${className}`}
      style={{
        animation: `${animationName} ${duration}s ease-in-out ${delay}s infinite`,
      }}
    >
      {children}
    </div>
  )
}

/* Reusable animated badge chips like kwip.eu */

export function EurBadge() {
  return (
    <FloatingBadge delay={0} duration={3.5} className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-10">
      <span className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-card border border-border shadow-xl text-lg md:text-xl font-bold text-primary">
        EUR
      </span>
    </FloatingBadge>
  )
}

export function DiscountBadge() {
  return (
    <FloatingBadge delay={0.5} duration={4} className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 z-10">
      <span className="flex items-center justify-center w-14 h-10 md:w-16 md:h-12 rounded-xl bg-primary shadow-xl shadow-primary/30 text-sm md:text-base font-bold text-primary-foreground">
        -20%
      </span>
    </FloatingBadge>
  )
}

export function PriceBadge({ price = "8.50" }: { price?: string }) {
  return (
    <FloatingBadge delay={0.3} duration={3} className="z-10">
      <span className="flex items-center gap-1.5 rounded-xl bg-card border border-border shadow-xl px-4 py-2.5 md:px-5 md:py-3">
        <span className="text-xs text-muted-foreground font-medium">EUR</span>
        <span className="text-xl md:text-2xl font-bold text-primary">{price}</span>
      </span>
    </FloatingBadge>
  )
}

export function PhoneMockup({ label = "rikba" }: { label?: string }) {
  return (
    <FloatingBadge delay={0} duration={5} className="z-10">
      <div className="relative w-[72px] h-[130px] md:w-[80px] md:h-[148px] rounded-2xl bg-card border-2 border-border shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-background rounded-b-lg" />
        {/* Screen content */}
        <div className="absolute inset-2 mt-4 flex flex-col items-center justify-center gap-2">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
            <span className="text-primary-foreground font-bold text-xs">R</span>
          </div>
          <span className="text-[9px] md:text-[10px] font-bold text-foreground tracking-tight">{label}</span>
          {/* Mini map dots */}
          <div className="w-full h-6 relative mt-1">
            <div className="absolute w-1.5 h-1.5 rounded-full bg-primary animate-ping" style={{ top: "2px", left: "30%", animationDuration: "2s" }} />
            <div className="absolute w-1 h-1 rounded-full bg-primary" style={{ top: "3px", left: "31%" }} />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-primary/60 animate-ping" style={{ top: "10px", left: "60%", animationDuration: "3s", animationDelay: "1s" }} />
            <div className="absolute w-1 h-1 rounded-full bg-primary/60" style={{ top: "11px", left: "61%" }} />
            {/* Route line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 60 24">
              <path d="M18 4 Q30 14 36 12" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-primary/40" strokeDasharray="2 2">
                <animate attributeName="stroke-dashoffset" from="0" to="-4" dur="1.5s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>
        </div>
        {/* Home bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-muted-foreground/30" />
      </div>
    </FloatingBadge>
  )
}

export function CarAnimation() {
  return (
    <div className="relative w-full h-8 overflow-hidden">
      <div className="animate-car-drive absolute flex items-center gap-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
          <circle cx="6.5" cy="16.5" r="2.5" />
          <circle cx="16.5" cy="16.5" r="2.5" />
        </svg>
        {/* Trail dots */}
        <span className="w-1 h-1 rounded-full bg-primary/40" />
        <span className="w-1 h-1 rounded-full bg-primary/25" />
        <span className="w-1 h-1 rounded-full bg-primary/15" />
      </div>
    </div>
  )
}
