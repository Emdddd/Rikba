"use client"

export function MaltaMap({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
      {/* Animated floating wrapper */}
      <div className="animate-malta-float relative">
        {/* Outer glow ring */}
        <div className="absolute inset-[-60px] bg-primary/5 rounded-full blur-[80px] animate-malta-pulse" />

        {/* Hillshade + Roads Map */}
        <div className="relative w-[320px] h-[384px] md:w-[500px] md:h-[600px]">
          {/* Hillshade raster */}
          <img
            src="/maps/malta-hillshade.png"
            alt="Malta Terrain Hillshade"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          {/* Roads SVG */}
          <img
            src="/maps/malta-roads.svg"
            alt="Malta Main Roads"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            style={{ filter: "invert(0%) sepia(100%) saturate(500%) hue-rotate(200deg)" }} // Primary color
          />
        </div>

        {/* Location pulse dots */}
        <div>
          <span className="absolute left-[62%] top-[65%] w-2 h-2 rounded-full bg-primary animate-ping" style={{ animationDuration: "3s" }} />
          <span className="absolute left-[62%] top-[65%] w-1 h-1 rounded-full bg-primary" />

          <span className="absolute left-[42%] top-[21%] w-1.5 h-1.5 rounded-full bg-primary animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }} />
          <span className="absolute left-[42%] top-[21%] w-1 h-1 rounded-full bg-primary" />

          <span className="absolute left-[70%] top-[84%] w-1.5 h-1.5 rounded-full bg-primary animate-ping" style={{ animationDuration: "3.5s", animationDelay: "2s" }} />
          <span className="absolute left-[70%] top-[84%] w-1 h-1 rounded-full bg-primary" />

          <span className="absolute left-[52%] top-[90%] w-1.5 h-1.5 rounded-full bg-primary animate-ping" style={{ animationDuration: "4.5s", animationDelay: "0.5s" }} />
          <span className="absolute left-[52%] top-[90%] w-1 h-1 rounded-full bg-primary" />
        </div>

        {/* Route lines between dots */}
        <svg viewBox="0 0 500 600" className="absolute inset-0 w-full h-full pointer-events-none">
          <line x1="310" y1="250" x2="350" y2="320" stroke="currentColor" strokeWidth="0.5" className="text-primary" opacity="0.3" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="310" y1="250" x2="260" y2="360" stroke="currentColor" strokeWidth="0.5" className="text-primary" opacity="0.3" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-8" dur="2.5s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
    </div>
  )
}
