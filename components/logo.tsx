"use client"

import Link from "next/link"
import { Anchor } from "lucide-react"

interface LogoProps {
  variant?: "default" | "mobile" | "footer"
  onClick?: () => void
}

export default function Logo({ variant = "default", onClick }: LogoProps) {
  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <Link href="/" className="flex items-center gap-1.5" onClick={handleClick}>
      <div className="relative flex items-center justify-center">
        <Anchor className={`${variant === "footer" ? "h-6 w-6 text-yellow-400" : "h-5 w-5 text-white"}`} />
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
