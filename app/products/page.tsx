import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, BookOpen, Phone, HelpCircle, ArrowLeft, Check, Info, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"
import Logo from "@/components/logo"

export default function ProductsPage() {
  // Product data
  const products = [
    {
      id: "obstacle-course",
      name: "Obstacle Course Bouncy Houses",
      description: "Challenge your guests with our exciting obstacle courses that provide hours of active fun!",
      image: "/images/bouncy-obstacle-course.png",
      features: [
        "Multiple obstacles and challenges",
        "Perfect for competitive fun",
        "Suitable for ages 5-15",
        "Great for larger events and spaces",
        "Can accommodate multiple children at once",
      ],
      color: "from-blue-600 to-blue-700",
      sizes: [
        { name: "30ft Standard Course", dimensions: "30ft x 10ft", capacity: "8-10 children" },
        { name: "40ft Deluxe Course", dimensions: "40ft x 12ft", capacity: "10-12 children" },
        { name: "50ft Ultimate Challenge", dimensions: "50ft x 15ft", capacity: "12-15 children" },
      ],
    },
    {
      id: "classic-bounce",
      name: "Classic Bouncy Houses",
      description: "Traditional bouncy castles perfect for birthday parties and smaller gatherings.",
      image: "/placeholder.svg?height=400&width=600&text=Classic+Bouncy+House",
      features: [
        "Simple, classic design",
        "Perfect for younger children",
        "Compact size fits in most yards",
        "Easy setup and takedown",
        "Available in multiple themes and colors",
      ],
      color: "from-pink-500 to-pink-600",
      sizes: [
        { name: "Small Castle", dimensions: "12ft x 12ft", capacity: "5-6 children" },
        { name: "Medium Castle", dimensions: "15ft x 15ft", capacity: "7-8 children" },
        { name: "Large Castle", dimensions: "18ft x 18ft", capacity: "8-10 children" },
      ],
    },
    {
      id: "combo-bounce",
      name: "Combo Bouncy Houses",
      description: "Get the best of both worlds with our combo units featuring bouncing areas, slides, and more!",
      image: "/images/bouncy-house-event.png",
      features: [
        "Bounce area plus additional features",
        "Slides, basketball hoops, or climbing walls",
        "Perfect for varied age groups",
        "Keeps children entertained longer",
        "Great value for multiple activities",
      ],
      color: "from-green-500 to-green-600",
      sizes: [
        { name: "Slide Combo", dimensions: "18ft x 15ft", capacity: "6-8 children" },
        { name: "Sports Combo", dimensions: "20ft x 15ft", capacity: "8-10 children" },
        { name: "Deluxe Combo", dimensions: "25ft x 20ft", capacity: "10-12 children" },
      ],
    },
    {
      id: "water-slides",
      name: "Water Slides & Splash Zones",
      description: "Beat the summer heat with our exciting water slides and splash bouncy houses!",
      image: "/placeholder.svg?height=400&width=600&text=Water+Slide+Bouncy+House",
      features: [
        "Perfect for hot summer days",
        "Slides with splash pools",
        "Water cannons and features",
        "Durable water-resistant materials",
        "Available May through September",
      ],
      color: "from-cyan-500 to-cyan-600",
      sizes: [
        { name: "Single Lane Slide", dimensions: "25ft x 12ft", capacity: "6-8 children" },
        { name: "Double Lane Slide", dimensions: "30ft x 15ft", capacity: "8-10 children" },
        { name: "Splash Zone Combo", dimensions: "25ft x 20ft", capacity: "10-12 children" },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden bg-gradient-to-b from-sky-400 via-cyan-300 to-blue-500">
      {/* Animated Waves Background */}
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b bg-blue-600/90 backdrop-blur-sm text-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Logo />

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-1 bg-blue-700/50 backdrop-blur-sm p-1 rounded-full">
              {[
                { name: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
                { name: "Products", href: "/products", icon: <ShoppingBag className="h-4 w-4" /> },
                { name: "Blog", href: "/blog", icon: <BookOpen className="h-4 w-4" /> },
                { name: "FAQ", href: "/faq", icon: <HelpCircle className="h-4 w-4" /> },
                { name: "Contact", href: "/#contact", icon: <Phone className="h-4 w-4" /> },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-500/70 group overflow-hidden ${
                    item.name === "Products" ? "bg-blue-500/70" : ""
                  }`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full -z-10"></span>
                  <span className="bubble-animation absolute -inset-1 rounded-full z-0 group-hover:animate-bubble-pop opacity-0 group-hover:opacity-100"></span>
                  {item.icon}
                  <span className="wave-text relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </header>

      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-16 lg:py-20 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
              <Link
                href="/"
                className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-400 px-3 py-1 text-sm text-blue-900 font-bold">
                  Our Products
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md">
                  Bouncy House Rentals
                </h1>
                <p className="max-w-[900px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our wide selection of premium bouncy houses for your next event in Door County
                </p>
              </div>
            </div>

            {/* Product Categories */}
            <div className="space-y-16">
              {products.map((product) => (
                <div key={product.id} id={product.id} className="scroll-mt-20">
                  <div
                    className={`bg-gradient-to-br ${product.color} text-white rounded-xl overflow-hidden shadow-xl mb-8`}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{product.name}</h2>
                        <p className="text-white/90 mb-6">{product.description}</p>
                        <div className="space-y-3 mb-6">
                          <h3 className="font-bold text-white">Features:</h3>
                          <ul className="space-y-2">
                            {product.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold self-start">
                          Book This Bouncy House
                        </Button>
                      </div>
                      <div className="relative h-80 md:h-auto">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover rounded-tr-xl rounded-br-xl md:rounded-bl-none md:rounded-tr-xl"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Available Sizes */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Available Sizes & Specifications</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      {product.sizes.map((size, index) => (
                        <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <h4 className="font-bold text-blue-700 mb-2">{size.name}</h4>
                          <div className="text-sm space-y-1 text-gray-700">
                            <p className="flex items-center gap-1">
                              <Info className="h-4 w-4 text-blue-500" />
                              <span>Dimensions: {size.dimensions}</span>
                            </p>
                            <p className="flex items-center gap-1">
                              <Info className="h-4 w-4 text-blue-500" />
                              <span>Capacity: {size.capacity}</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Booking Information */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 md:p-8 shadow-lg mt-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Ready to Book Your Bouncy House?</h2>
                  <p className="mb-6">
                    Contact us today to check availability and reserve the perfect bouncy house for your next event in
                    Door County!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-yellow-300" />
                      <span>Free delivery and setup within Door County</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-yellow-300" />
                      <span>Flexible rental periods - 4 hour, 8 hour, or full day options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-yellow-300" />
                      <span>Special discounts for weekday rentals and multiple bookings</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">Book Now</Button>
                    <Button className="bg-white hover:bg-blue-50 text-blue-900">Request Quote</Button>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Happy+Bouncing+Kids"
                    alt="Happy children enjoying a bouncy house"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-blue-900 text-white py-6 relative z-10">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <Logo variant="footer" />
          <p className="text-center text-sm text-white/80 md:text-left">
            &copy; {new Date().getFullYear()} Door County Bouncy House. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-white/80 hover:text-yellow-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-white/80 hover:text-yellow-400">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
