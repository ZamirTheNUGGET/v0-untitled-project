"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Menu, ShoppingBag, BookOpen, Phone, LogIn, UserPlus, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "./logo"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Handle menu item click
  const handleMenuItemClick = () => {
    setIsOpen(false)
  }

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
        onClick={() => setIsOpen(!isOpen)}
        id="menu-button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-blue-900/95 backdrop-blur-md z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo variant="mobile" onClick={handleMenuItemClick} />
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

        <nav className="container mx-auto px-4 py-8">
          <ul className="space-y-6">
            {[
              { name: "Products", href: "/products", icon: <ShoppingBag className="h-5 w-5" /> },
              { name: "Blog", href: "/blog", icon: <BookOpen className="h-5 w-5" /> },
              { name: "FAQ", href: "/faq", icon: <HelpCircle className="h-5 w-5" /> },
              { name: "Contact", href: "/#contact", icon: <Phone className="h-5 w-5" /> },
            ].map((item, index) => (
              <li
                key={index}
                className="transform transition-transform duration-300 ease-out"
                style={{
                  transitionDelay: `${150 + index * 75}ms`,
                  transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-3 text-white text-xl font-medium hover:text-yellow-300 transition-colors bg-blue-900/80 rounded-lg p-3 shadow-md"
                  onClick={handleMenuItemClick}
                >
                  <div className="bg-blue-800/90 p-2 rounded-full">{item.icon}</div>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="mt-12 space-y-4"
            style={{
              transitionDelay: "450ms",
              transform: isOpen ? "translateX(0)" : "translateX(-20px)",
              opacity: isOpen ? 1 : 0,
              transition: "transform 300ms ease-out, opacity 300ms ease-out",
            }}
          >
            <Button
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg"
              onClick={handleMenuItemClick}
            >
              Book Now
            </Button>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="w-full border-white bg-white/90 text-black hover:bg-white font-bold"
                onClick={handleMenuItemClick}
              >
                <UserPlus className="mr-2 h-4 w-4 text-blue-900" />
                Sign Up
              </Button>
              <Button
                variant="outline"
                className="w-full border-white bg-white/90 text-black hover:bg-white font-bold"
                onClick={handleMenuItemClick}
              >
                <LogIn className="mr-2 h-4 w-4 text-blue-900" />
                Login
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
