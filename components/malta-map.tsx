"use client"

export function MaltaMap({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
      {/* Animated floating wrapper */}
      <div className="animate-malta-float relative">
        {/* Outer glow ring */}
        <div className="absolute inset-[-60px] bg-primary/5 rounded-full blur-[80px] animate-malta-pulse" />

        {/* Malta SVG outline */}
        <svg
          viewBox="0 0 500 600"
          className="w-[320px] h-[384px] md:w-[500px] md:h-[600px] opacity-15 md:opacity-20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Malta main island */}
          <path
            d="M260 80 C280 75, 310 78, 340 90 C370 102, 395 120, 410 145 C425 170, 435 195, 440 225 C445 255, 438 280, 425 305 C412 330, 395 350, 375 368 C355 386, 332 398, 310 408 C288 418, 262 422, 240 420 C218 418, 195 410, 178 395 C161 380, 148 360, 140 338 C132 316, 128 292, 130 268 C132 244, 140 220, 152 198 C164 176, 180 158, 198 142 C216 126, 238 115, 255 100 C262 94, 258 84, 260 80Z"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary animate-malta-draw"
            fill="currentColor"
            fillOpacity="0.03"
          />

          {/* Gozo island */}
          <path
            d="M180 30 C200 25, 225 28, 245 38 C265 48, 278 62, 282 80 C286 98, 280 115, 268 128 C256 141, 238 148, 220 150 C202 152, 182 148, 168 138 C154 128, 144 112, 140 95 C136 78, 138 60, 148 46 C158 32, 170 28, 180 30Z"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary animate-malta-draw-delayed"
            fill="currentColor"
            fillOpacity="0.03"
          />

          {/* Comino island */}
          <path
            d="M230 155 C240 150, 252 152, 260 160 C268 168, 270 180, 265 190 C260 200, 248 205, 238 202 C228 199, 220 190, 222 178 C224 166, 228 158, 230 155Z"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary animate-malta-draw-delayed"
            fill="currentColor"
            fillOpacity="0.05"
          />

          {/* Location pulse dots */}
          <circle cx="310" cy="250" r="4" className="text-primary fill-current animate-ping" style={{ animationDuration: "3s" }} />
          <circle cx="310" cy="250" r="2" className="text-primary fill-current" />

          <circle cx="210" cy="80" r="3" className="text-primary fill-current animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }} />
          <circle cx="210" cy="80" r="1.5" className="text-primary fill-current" />

          <circle cx="350" cy="320" r="3" className="text-primary fill-current animate-ping" style={{ animationDuration: "3.5s", animationDelay: "2s" }} />
          <circle cx="350" cy="320" r="1.5" className="text-primary fill-current" />

          <circle cx="260" cy="360" r="3" className="text-primary fill-current animate-ping" style={{ animationDuration: "4.5s", animationDelay: "0.5s" }} />
          <circle cx="260" cy="360" r="1.5" className="text-primary fill-current" />

          {/* Route lines between dots */}
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
