"use client"

export function MaltaMap({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}
    >
      <div className="relative animate-malta-float">

        {/* Glow خلف الخريطة */}
        <div className="absolute inset-[-120px] bg-primary/10 blur-[120px] rounded-full animate-malta-pulse" />

        {/* Malta SVG من public */}
        <img
          src="/maltaHigh.svg"
          alt="Malta Map"
          className="
            w-[520px]
            md:w-[750px]
            opacity-30
            select-none
            map-reveal-mask
          "
        />

      </div>
    </div>
  )
}
