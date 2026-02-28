"use client"

export function MaltaMap({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}
    >
      <div className="relative animate-malta-float">

        {/* Glow خلف الخريطة */}
        <div className="absolute inset-[-120px] bg-primary/15 blur-[120px] rounded-full animate-malta-pulse" />

        {/* Malta Map */}
        <img
          src="/Mapmalta.svg"
          alt="Malta Map"
          className="
            w-[560px]
            md:w-[780px]
            opacity-70
            select-none
            map-reveal-mask
          "
        />

        {/* ⭐ Pulse Dot (Moved Right) */}
        <div className="absolute top-[55%] left-[72%] -translate-x-1/2 -translate-y-1/2">

          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
          </span>

        </div>

      </div>
    </div>
  )
}
