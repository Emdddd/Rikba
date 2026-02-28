"use client"

export function MaltaMap({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}
    >
      <div className="relative animate-malta-float">

        {/* Glow */}
        <div className="absolute inset-[-120px] bg-primary/15 blur-[120px] rounded-full animate-malta-pulse" />

        {/* Malta SVG */}
        <img
          src="/Mapmalta.svg"
          alt="Malta Map"
          className="
            w-[520px]
            md:w-[750px]
            opacity-80
            select-none
            map-reveal-mask
          "
        />

        {/* ===== PULSE LOCATIONS ===== */}

        {/* Valletta */}
        <span className="map-dot top-[48%] left-[58%]" />

        {/* Sliema */}
        <span className="map-dot top-[46%] left-[55%]" style={{animationDelay:"0.4s"}} />

        {/* St Julian’s */}
        <span className="map-dot top-[44%] left-[56%]" style={{animationDelay:"0.8s"}} />

        {/* Birkirkara */}
        <span className="map-dot top-[50%] left-[52%]" style={{animationDelay:"1.2s"}} />

        {/* Airport / Luqa */}
        <span className="map-dot top-[60%] left-[54%]" style={{animationDelay:"1.6s"}} />

        {/* Mdina */}
        <span className="map-dot top-[42%] left-[48%]" style={{animationDelay:"2s"}} />

        {/* Gozo */}
        <span className="map-dot top-[22%] left-[45%]" style={{animationDelay:"2.4s"}} />

        {/* Marsaskala */}
        <span className="map-dot top-[65%] left-[60%]" style={{animationDelay:"2.8s"}} />

      </div>
    </div>
  )
}
