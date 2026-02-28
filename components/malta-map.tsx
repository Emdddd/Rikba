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
        {/* PERFECT DISTRIBUTION */}
        {/* ===================== */}

        {/* 🟢 GOZO - TOP LEFT */}
        <div className="map-dot" style={{ top:"10%", left:"36%" }} />
        <div className="map-pulse" style={{ top:"10%", left:"36%" }} />

        {/* 🔵 NORTH MALTA */}
        <div className="map-dot" style={{ top:"28%", left:"55%" }} />
        <div className="map-pulse" style={{ top:"28%", left:"55%", animationDelay:"0.4s" }} />

        <div className="map-dot" style={{ top:"30%", left:"68%" }} />
        <div className="map-pulse" style={{ top:"30%", left:"68%", animationDelay:"0.8s" }} />

        {/* 🟣 CENTER (SPACED) */}
        <div className="map-dot" style={{ top:"48%", left:"58%" }} />
        <div className="map-pulse" style={{ top:"48%", left:"58%", animationDelay:"1.2s" }} />

        <div className="map-dot" style={{ top:"52%", left:"72%" }} />
        <div className="map-pulse" style={{ top:"52%", left:"72%", animationDelay:"1.6s" }} />

        {/* 🟡 WEST SIDE (3 SPREAD DOTS) */}
        <div className="map-dot" style={{ top:"46%", left:"42%" }} />
        <div className="map-pulse" style={{ top:"46%", left:"42%", animationDelay:"2s" }} />

        <div className="map-dot" style={{ top:"60%", left:"40%" }} />
        <div className="map-pulse" style={{ top:"60%", left:"40%", animationDelay:"2.4s" }} />

        <div className="map-dot" style={{ top:"72%", left:"45%" }} />
        <div className="map-pulse" style={{ top:"72%", left:"45%", animationDelay:"2.8s" }} />

        {/* 🔴 SOUTH */}
        <div className="map-dot" style={{ top:"82%", left:"60%" }} />
        <div className="map-pulse" style={{ top:"82%", left:"60%", animationDelay:"3.2s" }} />

      </div>
    </div>
  )
}
