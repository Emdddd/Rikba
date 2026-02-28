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
          className="w-[560px] md:w-[780px] opacity-70 select-none map-reveal-mask"
        />

        {/* ================= */}
        {/* PERFECT DOTS */}
        {/* ================= */}

        {/* GOZO */}
        <Dot top="13%" left="41%" delay="0s" />

        {/* NORTH */}
        <Dot top="32%" left="60%" delay="0.4s" />
        <Dot top="34%" left="70%" delay="0.8s" />

        {/* CENTER */}
        <Dot top="50%" left="63%" delay="1.2s" />
        <Dot top="55%" left="74%" delay="1.6s" />

        {/* WEST SIDE */}
        <Dot top="52%" left="47%" delay="2s" />
        <Dot top="64%" left="45%" delay="2.4s" />
        <Dot top="74%" left="50%" delay="2.8s" />

        {/* SOUTH */}
        <Dot top="84%" left="64%" delay="3.2s" />

      </div>
    </div>
  )
}

/* ================= */
/* DOT COMPONENT */
/* ================= */

function Dot({ top, left, delay }: { top:string; left:string; delay:string }) {
  return (
    <>
      <div
        className="absolute w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.9)]"
        style={{ top, left }}
      />
      <div
        className="absolute w-6 h-6 rounded-full border border-primary animate-ping opacity-70"
        style={{ top, left, animationDelay: delay }}
      />
    </>
  )
}
