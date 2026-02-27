export function Marquee() {
  const items = [
    { text: "100% Malta owned", icon: "pin" },
    { text: "Drivers keep way more", icon: "coin" },
    { text: "Half the commission", icon: "tag" },
    { text: "No surge pricing", icon: "shield" },
    { text: "Lower fares for riders", icon: "sparkle" },
    { text: "Launching Summer 2026", icon: "rocket" },
  ]

  return (
    <section className="relative py-6 overflow-hidden border-y border-border bg-secondary/50">
      {/* Marquee content */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 md:mx-10 text-sm font-medium text-muted-foreground flex items-center gap-2"
          >
            <MarqueeIcon type={item.icon} />
            {item.text}
            {/* Separator dot */}
            <span className="ml-6 md:ml-10 w-1 h-1 rounded-full bg-primary/40" />
          </span>
        ))}
      </div>
    </section>
  )
}

function MarqueeIcon({ type }: { type: string }) {
  const cls = "w-3.5 h-3.5 text-primary shrink-0"
  switch (type) {
    case "pin":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    case "coin":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    case "tag":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      )
    case "shield":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    case "sparkle":
      return (
        <svg className={cls} viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z" />
        </svg>
      )
    case "rocket":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        </svg>
      )
    default:
      return <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
  }
}
