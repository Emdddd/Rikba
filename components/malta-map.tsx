"use client"

export function UniverseBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
      <svg viewBox="0 0 1000 600" className="w-full h-full">
        {/* Stars background */}
        {Array.from({ length: 120 }).map((_, i) => {
          const cx = Math.random() * 1000
          const cy = Math.random() * 600
          const r = Math.random() * 2 + 0.5
          const dur = Math.random() * 3 + 2
          const delay = Math.random() * 3
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              className="text-primary fill-current"
              style={{
                animation: `pulse ${dur}s ease-in-out ${delay}s infinite alternate`,
              }}
            />
          )
        })}

        <style jsx>{`
          @keyframes pulse {
            0% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
            100% { opacity: 0.3; transform: scale(1); }
          }
        `}</style>
      </svg>
    </div>
  )
}
