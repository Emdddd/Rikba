"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in" | "blur-in"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const baseStyles: Record<string, { initial: string; visible: string }> = {
    "fade-up": {
      initial: "opacity-0 translate-y-8",
      visible: "opacity-100 translate-y-0",
    },
    "fade-in": {
      initial: "opacity-0",
      visible: "opacity-100",
    },
    "fade-left": {
      initial: "opacity-0 -translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
    "fade-right": {
      initial: "opacity-0 translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
    "scale-in": {
      initial: "opacity-0 scale-95",
      visible: "opacity-100 scale-100",
    },
    "blur-in": {
      initial: "opacity-0 blur-sm",
      visible: "opacity-100 blur-0",
    },
  }

  const style = baseStyles[animation]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? style.visible : style.initial
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
