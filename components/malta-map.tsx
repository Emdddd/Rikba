"use client"

export function MaltaMap({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
      
      <div className="relative animate-malta-float">

        {/* Glow */}
        <div className="absolute inset-[-120px] bg-primary/15 blur-[120px] rounded-full animate-malta-pulse" />

        {/* MAP */}
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

        {/* ========================= */}
        {/* PULSE LOCATIONS */}
        {/* ========================= */}

        {/* Valletta */}
        <div className="map-dot" style={{ top:"58%", left:"63%" }} />
        <div className="map-pulse" style={{ top:"58%", left:"63%" }} />

        {/* Sliema */}
        <div className="map-dot" style={{ top:"54%", left:"60%" }} />
        <div className="map-pulse" style={{ top:"54%", left:"60%", animationDelay:"0.6s" }} />

        {/* St Julian's */}
        <div className="map-dot" style={{ top:"49%", left:"62%" }} />
        <div className="map-pulse" style={{ top:"49%", left:"62%", animationDelay:"1.2s" }} />

        {/* Airport Area */}
        <div className="map-dot" style={{ top:"66%", left:"55%" }} />
        <div className="map-pulse" style={{ top:"66%", left:"55%", animationDelay:"1.8s" }} />

        {/* Mdina */}
        <div className="map-dot" style={{ top:"45%", left:"48%" }} />
        <div className="map-pulse" style={{ top:"45%", left:"48%", animationDelay:"2.4s" }} />

        {/* Mellieha */}
        <div className="map-dot" style={{ top:"30%", left:"55%" }} />
        <div className="map-pulse" style={{ top:"30%", left:"55%", animationDelay:"3s" }} />

        {/* Gozo */}
        <div className="map-dot" style={{ top:"12%", left:"42%" }} />
        <div className="map-pulse" style={{ top:"12%", left:"42%", animationDelay:"3.6s" }} />

        {/* South Malta */}
        <div className="map-dot" style={{ top:"78%", left:"50%" }} />
        <div className="map-pulse" style={{ top:"78%", left:"50%", animationDelay:"4.2s" }} />

      </div>
    </div>
  )
}
