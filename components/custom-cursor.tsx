"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement
      const clickables = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT"]
      setIsPointer(clickables.includes(target.tagName) || window.getComputedStyle(target).cursor === "pointer")

      setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        a, button, input, textarea, select, [role="button"], [role="link"] {
          cursor: none !important;
        }
      `}</style>

      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {/* Main cursor */}
        <div
          className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out
                     ${isClicking ? "scale-90" : "scale-100"}
                     ${isPointer ? "bg-yellow-400/70" : "bg-white/70"}`}
          style={{
            width: isPointer ? "40px" : "20px",
            height: isPointer ? "40px" : "20px",
            backdropFilter: "blur(2px)",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
          }}
        ></div>

        {/* Trailing effect */}
        <div
          className="absolute rounded-full bg-white/30 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
          style={{
            width: "8px",
            height: "8px",
            transform: `translate(-50%, -50%) scale(${isClicking ? 2 : 1})`,
            opacity: 0.7,
          }}
        ></div>

        {/* Bouncy animation */}
        <div
          className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping
                     ${isPointer ? "bg-yellow-400/30" : "bg-white/30"}`}
          style={{
            width: isPointer ? "60px" : "30px",
            height: isPointer ? "60px" : "30px",
            animationDuration: "1.5s",
          }}
        ></div>
      </div>
    </>
  )
}
