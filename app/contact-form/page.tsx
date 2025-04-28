import Link from "next/link"
import { Home, ShoppingBag, BookOpen, Phone, HelpCircle, Calendar, Send, ArrowLeft } from "lucide-react"
import MobileMenu from "@/components/mobile-menu"
import Logo from "@/components/logo"

export default function ContactFormPage() {
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
                    item.name === "Contact" ? "bg-blue-500/70" : ""
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
                href="/contact"
                className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Contact Information</span>
              </Link>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-400 px-3 py-1 text-sm text-blue-900 font-bold">
                  Get In Touch
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md">
                  Contact Form
                </h1>
                <p className="max-w-[900px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fill out the form below and we'll get back to you as soon as possible!
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-blue-800 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="event-date" className="text-sm font-medium text-gray-700">
                      Event Date (if applicable)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="event-date"
                        type="date"
                        className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Note: We operate from June through the end of August</p>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="event-type" className="text-sm font-medium text-gray-700">
                      Event Type
                    </label>
                    <select
                      id="event-type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select an event type</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="school">School Event</option>
                      <option value="community">Community Festival</option>
                      <option value="church">Church Event</option>
                      <option value="corporate">Corporate Function</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your event, questions, or special requirements..."
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="newsletter"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                      Sign me up for the newsletter to receive special offers and updates
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 flex items-center justify-center gap-2 rounded-md"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Additional Information */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 md:p-8 shadow-lg mt-8">
                <h2 className="text-xl font-bold mb-4">What Happens Next?</h2>
                <p className="mb-4">After submitting your form, here's what you can expect:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>We'll review your request within 24 hours (during our operating season).</li>
                  <li>You'll receive a confirmation email that we've received your inquiry.</li>
                  <li>Our team will contact you to discuss details and provide a quote.</li>
                  <li>Once confirmed, we'll send a formal booking confirmation with all the details.</li>
                </ol>
                <div className="mt-6 p-4 bg-white/20 rounded-lg">
                  <p className="text-white font-medium">
                    Prefer to speak with someone directly? Call us at (920) 333-2178 or email us at
                    info@doorcountybouncyhouse.com
                  </p>
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
