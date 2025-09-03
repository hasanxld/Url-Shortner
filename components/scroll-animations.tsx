"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: "fade-in" | "slide-left" | "slide-right" | "scale-in" | "rotate-in"
  delay?: number
  className?: string
}

export function ScrollAnimation({ children, animation = "fade-in", delay = 0, className = "" }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible")
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClass = `scroll-${animation}`

  return (
    <div ref={elementRef} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}
