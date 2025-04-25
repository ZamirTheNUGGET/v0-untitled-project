"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Anchor, X, Menu, ShoppingBag, BookOpen, Phone, LogIn, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest("#mobile-menu") && !target.closest("#menu-button")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-white"
        onClick={() => setIsOpen(true)}
        id="menu-button"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-blue-900/90 backdrop-blur-md z-50 flex flex-col">
          <div className="container flex justify-between items-center py-4" id="mobile-menu">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Anchor className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">Door County Bouncy House</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <nav className="container py-8">
              <ul className="space-y-6">
                {[
                  { name: "Products", href: "/products", icon: <ShoppingBag className="h-5 w-5" /> },
                  { name: "Blog", href: "/blog", icon: <BookOpen className="h-5 w-5" /> },
                  { name: "Contact", href: "/#contact", icon: <Phone className="h-5 w-5" /> },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-white text-xl font-medium hover:text-yellow-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-12 space-y-4">
                <Button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <UserPlus className="mr-2 h-4 w-4" />
                    Sign Up
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
