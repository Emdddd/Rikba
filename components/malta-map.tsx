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

        {/* ===================== */}
        {/* 9 DISTRIBUTED DOTS */}
        {/* ===================== */}

        {/* Gozo */}
        <div className="map-dot" style={{ top:"14%", left:"42%" }} />
        <div className="map-pulse" style={{ top:"14%", left:"42%" }} />

        {/* North Malta */}
        <div className="map-dot" style={{ top:"30%", left:"56%" }} />
        <div className="map-pulse" style={{ top:"30%", left:"56%", animationDelay:"0.4s" }} />

        {/* West */}
        <div className="map-dot" style={{ top:"44%", left:"46%" }} />
        <div className="map-pulse" style={{ top:"44%", left:"46%", animationDelay:"0.8s" }} />

        {/* Center */}
        <div className="map-dot" style={{ top:"50%", left:"58%" }} />
        <div className="map-pulse" style={{ top:"50%", left:"58%", animationDelay:"1.2s" }} />

        {/* Valletta Area */}
        <div className="map-dot" style={{ top:"56%", left:"66%" }} />
        <div className="map-pulse" style={{ top:"56%", left:"66%", animationDelay:"1.6s" }} />

        {/* South East */}
        <div className="map-dot" style={{ top:"66%", left:"63%" }} />
        <div className="map-pulse" style={{ top:"66%", left:"63%", animationDelay:"2s" }} />

        {/* Airport / Central South */}
        <div className="map-dot" style={{ top:"66%", left:"53%" }} />
        <div className="map-pulse" style={{ top:"66%", left:"53%", animationDelay:"2.4s" }} />

        {/* South West */}
        <div className="map-dot" style={{ top:"74%", left:"48%" }} />
        <div className="map-pulse" style={{ top:"74%", left:"48%", animationDelay:"2.8s" }} />

        {/* Far South */}
        <div className="map-dot" style={{ top:"82%", left:"55%" }} />
        <div className="map-pulse" style={{ top:"82%", left:"55%", animationDelay:"3.2s" }} />

      </div>
    </div>
  )
}
