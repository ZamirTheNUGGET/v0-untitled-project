"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Anchor } from "lucide-react"

interface LogoProps {
  variant?: "default" | "mobile" | "footer"
  onClick?: () => void
}

export default function Logo({ variant = "default", onClick }: LogoProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const anchorRef = useRef<HTMLDivElement>(null)

  // Play animation on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)

      // Mark as animated after the animation completes
      const animationDuration = 2000 // 2 seconds
      setTimeout(() => {
        setIsAnimating(false)
        setHasAnimated(true)
      }, animationDuration)
    }, 1000) // Delay before starting animation

    return () => clearTimeout(timer)
  }, [])

  // Function to replay animation on hover (only after initial animation)
  const handleHover = () => {
    if (hasAnimated && !isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
      }, 2000)
    }
  }

  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <Link href="/" className="flex items-center gap-1.5" onClick={handleClick}>
      <div className="relative flex items-center justify-center" onMouseEnter={handleHover} ref={anchorRef}>
        <div
          className={`absolute inset-0 bg-yellow-400 rounded-full opacity-30 ${isAnimating ? "animate-ping" : "animate-pulse"}`}
        ></div>
        <div className={`relative z-10 transition-all duration-300 ${isAnimating ? "animate-anchor-fall" : ""}`}>
          <Anchor className={`${variant === "footer" ? "h-6 w-6 text-yellow-400" : "h-5 w-5 text-white"}`} />
        </div>

        {/* Water splash effect */}
        <div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-4 ${isAnimating ? "animate-splash" : "opacity-0"}`}
        >
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-300/70 rounded-full"></div>
          <div className="absolute bottom-0 left-2 w-1.5 h-3 bg-blue-300/70 rounded-full"></div>
          <div className="absolute bottom-0 left-4 w-2 h-4 bg-blue-300/70 rounded-full"></div>
          <div className="absolute bottom-0 left-6 w-1.5 h-3 bg-blue-300/70 rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <span
          className={`font-bold leading-tight ${
            variant === "footer"
              ? "text-lg text-yellow-400"
              : variant === "mobile"
                ? "text-base text-white"
                : "text-base text-white"
          }`}
        >
          Door County
        </span>
        <span
          className={`font-bold leading-tight ${
            variant === "footer"
              ? "text-sm text-yellow-400"
              : variant === "mobile"
                ? "text-xs text-white"
                : "text-xs text-white"
          }`}
        >
          Bouncy House
        </span>
      </div>
    </Link>
  )
}
