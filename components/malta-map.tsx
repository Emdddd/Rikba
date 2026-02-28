"use client"

export function MaltaMap({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
      <div className="relative animate-malta-float">

        {/* Glow */}
        <div className="absolute inset-[-120px] bg-primary/15 blur-[120px] rounded-full animate-malta-pulse" />

        {/* Map */}
        <img
          src="/Mapmalta.svg"
          alt="Malta Map"
          className="w-[520px] md:w-[750px] opacity-80 select-none map-reveal-mask"
        />

        {/* ===== PULSE POINTS ===== */}

        {[
          {top:"48%",left:"58%",delay:"0s"},
          {top:"46%",left:"55%",delay:"0.4s"},
          {top:"44%",left:"56%",delay:"0.8s"},
          {top:"50%",left:"52%",delay:"1.2s"},
          {top:"60%",left:"54%",delay:"1.6s"},
          {top:"42%",left:"48%",delay:"2s"},
          {top:"22%",left:"45%",delay:"2.4s"},
          {top:"65%",left:"60%",delay:"2.8s"},
        ].map((p,i)=>(
          <div key={i} style={{top:p.top,left:p.left}} className="absolute">

            <span className="map-dot" />

            <span
              className="map-pulse"
              style={{animationDelay:p.delay}}
            />

          </div>
        ))}

      </div>
    </div>
  )
}
