"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Menu, ShoppingBag, BookOpen, Phone, HelpCircle, Home } from "lucide-react"
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
      <button
        className="text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
        id="menu-button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-blue-900/95 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo variant="mobile" onClick={handleMenuItemClick} />
          <button className="text-white p-2" onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="container mx-auto px-4 py-8">
          <ul className="space-y-6">
            {[
              { name: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
              { name: "Products", href: "/products", icon: <ShoppingBag className="h-5 w-5" /> },
              { name: "Blog", href: "/blog", icon: <BookOpen className="h-5 w-5" /> },
              { name: "FAQ", href: "/faq", icon: <HelpCircle className="h-5 w-5" /> },
              { name: "Contact", href: "/contact", icon: <Phone className="h-5 w-5" /> },
            ].map((item, index) => (
              <li key={index}>
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
        </nav>
      </div>
    </div>
  )
}
