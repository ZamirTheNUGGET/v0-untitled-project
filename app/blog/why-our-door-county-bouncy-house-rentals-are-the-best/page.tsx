import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ShoppingBag, BookOpen, Phone, HelpCircle, Calendar, Clock, Tag, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"
import Logo from "@/components/logo"

export default function BestRentalsPage() {
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
                { name: "Contact", href: "/contact", icon: <Phone className="h-4 w-4" /> },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-500/70 group overflow-hidden ${
                    item.name === "Blog" ? "bg-blue-500/70" : ""
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
        <article className="w-full py-12 md:py-16 lg:py-20 relative">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Blog</span>
              </Link>

              {/* Featured Image */}
              <div className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white rounded-xl overflow-hidden shadow-xl mb-8">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-white/80 mb-4">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      April 25, 2025
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-4 w-4" />3 min read
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      Rentals
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Why Our Door County Bouncy House Rentals Are the Best
                  </h1>
                </div>
                <div className="relative w-full h-[400px] md:h-[500px] border-t-4 border-white/30">
                  <Image
                    src="https://images.doorcountybouncyhouse.com/images/bouncy-obstacle-course.png"
                    alt="Colorful obstacle course bouncy house with castle towers"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/80 to-transparent p-4 md:p-6">
                    <div className="text-white text-center">
                      <p className="text-lg font-bold">Premium obstacle courses for maximum fun!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="bg-blue-50 rounded-xl p-6 md:p-8 shadow-lg mb-8">
                <div className="prose prose-blue max-w-none">
                  <p className="text-lg">
                    Looking to create unforgettable memories for your next event in Door County? Our Door County Bouncy
                    House rental service literally delivers hours of fun for kids! Whether you're planning a birthday
                    party, a family reunion, or a neighborhood get-together, our inflatable rentals are the perfect way
                    to bring joy and excitement to your guests.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">🏆 Premium Quality Inflatables</h2>
                  <p>
                    We take pride in offering only the highest quality bouncy houses and obstacle courses in Door
                    County. Our inflatables are:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Made from commercial-grade materials that are built to last</li>
                    <li>Regularly inspected and maintained to ensure safety</li>
                    <li>Thoroughly cleaned and sanitized between each rental</li>
                    <li>Vibrant and colorful to create an exciting atmosphere</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">🚚 Hassle-Free Delivery and Setup</h2>
                  <p>
                    When you rent from Door County Bouncy House, we handle all the logistics so you can focus on
                    enjoying your event:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Prompt delivery to your location anywhere in Door County</li>
                    <li>Professional setup by our experienced team</li>
                    <li>Safety instructions and guidelines provided</li>
                    <li>Takedown and removal when your rental period ends</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">🎯 Variety of Options for Every Event</h2>
                  <p>
                    We offer a wide selection of bouncy houses and inflatable attractions to suit any event or age
                    group:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Classic castle bouncy houses for younger children</li>
                    <li>Themed inflatables featuring popular characters and designs</li>
                    <li>Obstacle courses (like the one pictured above) for active fun and friendly competition</li>
                    <li>Combination units with slides, basketball hoops, and climbing walls</li>
                    <li>Water slides for those hot summer days (seasonal availability)</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">❤️ Local Family-Owned Business</h2>
                  <p>
                    As a local Door County business, we understand the community and are committed to providing
                    exceptional service:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Personalized attention to your specific event needs</li>
                    <li>Flexible scheduling options</li>
                    <li>Competitive pricing with no hidden fees</li>
                    <li>Quick response to any questions or concerns</li>
                  </ul>

                  <div className="bg-yellow-100 p-6 rounded-lg mt-8 border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-800 mb-2">
                      We Bring The Bounce So You Can Bring The Fun!
                    </h3>
                    <p className="mb-0">
                      Contact Door County Bouncy House today to reserve the perfect inflatable for your upcoming
                      celebration!
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Ready to Book the Best Bouncy House in Door County?</h2>
                <p className="mb-6">Contact us today to check availability and reserve your inflatable!</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">Book Now</Button>
                </div>
              </div>
            </div>
          </div>
        </article>
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
