import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ShoppingBag, BookOpen, LogIn, UserPlus, Phone, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"
import Logo from "@/components/logo"

export default function AboutUsPage() {
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
                { name: "Products", href: "/products", icon: <ShoppingBag className="h-4 w-4" /> },
                { name: "Blog", href: "/blog", icon: <BookOpen className="h-4 w-4" /> },
                { name: "FAQ", href: "/faq", icon: <HelpCircle className="h-4 w-4" /> },
                { name: "Contact", href: "/#contact", icon: <Phone className="h-4 w-4" /> },
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
            <div className="flex items-center ml-4 space-x-2">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">Book Now</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                <UserPlus className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
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
              <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8 shadow-xl border-4 border-white">
                <Image
                  src="/placeholder.svg?height=600&width=1200&text=Zamir+and+Zohran+Overbeck"
                  alt="Zamir and Zohran Overbeck"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Post Header */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6 md:p-8 mb-8 shadow-lg">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  About Us: We Bring The Bounce So You Can Bring The Fun!
                </h1>
              </div>

              {/* Post Content */}
              <div className="bg-blue-50 rounded-xl p-6 md:p-8 shadow-lg mb-8">
                <div className="prose prose-blue max-w-none">
                  <p className="text-lg">
                    Welcome to Door County Bouncy House! We're Zamir and Zohran Overbeck. We are two brothers on a
                    mission to turn ordinary gatherings into unforgettable celebrations in Door County with our bouncy
                    houses.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Our Story</h2>
                  <p>
                    Our journey began at a birthday party when we wanted to rent a bouncy house for our own birthdays.
                    The nearest company was all the way in Green Bay. That's when we had an idea: why not bring the fun
                    closer to home?
                  </p>
                  <p>
                    We started Door County Bouncy Houses so families right here in Door County could enjoy the same
                    excitement and happiness we loved as kids.
                  </p>
                  <p>
                    Whether it's a birthday bash, a community festival, or a backyard family reunion, we believe every
                    kid and adult deserves a chance to laugh, jump, and make joyful memories together.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">
                    Our Mission: We Bring The Bounce So You Can Bring The Fun!
                  </h2>

                  <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Why Choose Door County Bouncy Houses</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Safety First:</strong> We carefully inspect and sanitize all our equipment to keep every
                      event safe and worry-free.
                    </li>
                    <li>
                      <strong>Plenty of Options:</strong> From classic castles to creative party games, we offer a
                      variety of rentals to fit any theme or occasion.
                    </li>
                    <li>
                      <strong>Service with Heart:</strong> As a family-run business, we treat every customer like a
                      neighbor…well, 'cause we probably are your neighbor! Plus, it's all hassle-free. We take care of
                      the delivery, setup, and takedown so you can focus on the fun.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">Serving Door County and Beyond</h2>
                  <p>
                    We'll deliver and set up bouncy houses all across Door County, from Brussels, Sturgeon Bay
                    Jacksonport, Baileys Harbor, Egg Harbor, Fish Creek, Sister Bay, Ellison Bay, to the top of the
                    Thumb. Wherever your celebration is, we'll bring the bounce so you can bring the fun!
                  </p>
                  <p>
                    When you book with us, you're supporting a local family business—and helping two brothers chase
                    their dream of spreading joy throughout our community.
                  </p>

                  <p className="text-lg font-bold text-blue-800 mt-8">Thanks for visiting our site!</p>
                  <p className="text-lg font-bold text-blue-800">Zamir & Zohran</p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-blue-900 rounded-xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Ready to Bounce?</h2>
                <p className="mb-6">Contact us today to book a bouncy house for your next event in Door County!</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white">Book Now</Button>
                  <Button className="bg-white hover:bg-blue-50 text-blue-900">Contact Us</Button>
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
