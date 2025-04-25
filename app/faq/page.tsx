import Link from "next/link"
import { Anchor, ArrowLeft, ShoppingBag, BookOpen, LogIn, UserPlus, Phone, HelpCircle, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"

export default function FAQPage() {
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
          <Link href="/" className="flex items-center gap-2">
            <Anchor className="h-6 w-6 text-white" />
            <span className="text-xl font-bold text-white wave-text">Door County Bouncy House</span>
          </Link>

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
                    item.name === "FAQ" ? "bg-blue-500/70" : ""
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
                  Frequently Asked Questions
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md">
                  Everything You Need to Know
                </h1>
                <p className="max-w-[900px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our bouncy house rentals
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              {/* FAQ Accordion */}
              {[
                {
                  question: "How far in advance should I book a bouncy house?",
                  answer:
                    "We recommend booking at least 2-3 weeks in advance, especially during peak season (May-September). For weekend events or holidays, booking 4-6 weeks ahead is advisable to ensure availability of your preferred bouncy house.",
                },
                {
                  question: "What happens if it rains on the day of my event?",
                  answer:
                    "If there's light rain, our bouncy houses can still be used with proper supervision. However, for heavy rain, thunderstorms, or winds over 15-20 mph, we'll work with you to reschedule your rental for safety reasons. We monitor weather forecasts closely and will contact you 24-48 hours before your event if weather concerns arise.",
                },
                {
                  question: "How much space do I need for a bouncy house?",
                  answer:
                    "Space requirements vary by bouncy house size. Our standard units need approximately 15'x15' of flat, clear space. Larger obstacle courses may require up to 35'x15'. Additionally, you'll need at least 3-4 feet of clearance on all sides and 15-20 feet of overhead clearance (no tree branches or power lines). We'll provide specific requirements for your chosen inflatable when you book.",
                },
                {
                  question: "Do you provide setup and takedown?",
                  answer:
                    "Yes! Our rental price includes professional delivery, setup, and takedown. Our team will arrive 1-2 hours before your event start time to ensure everything is ready. At the end of your rental period, we'll return to deflate and remove the bouncy house.",
                },
                {
                  question: "What power requirements are needed?",
                  answer:
                    "Our bouncy houses require a standard 110V electrical outlet within 50-100 feet of the setup location. The blower must run continuously during use. If you don't have access to power, we offer generator rentals for an additional fee.",
                },
                {
                  question: "Are your bouncy houses safe?",
                  answer:
                    "Safety is our top priority! All our bouncy houses are commercial-grade, regularly inspected, and thoroughly cleaned between rentals. They include safety features like enclosed sides, netted windows, and soft landing surfaces. We provide safety instructions and recommend adult supervision at all times during use.",
                },
                {
                  question: "What areas do you serve in Door County?",
                  answer:
                    "We serve all of Door County including Sturgeon Bay, Egg Harbor, Fish Creek, Sister Bay, Baileys Harbor, Ephraim, and surrounding areas. For locations outside Door County, please contact us for availability and any additional travel fees.",
                },
                {
                  question: "What is your cancellation policy?",
                  answer:
                    "Cancellations made 7 or more days before your event receive a full refund. Cancellations within 3-6 days receive a 50% refund or the option to reschedule. Cancellations less than 48 hours before your event are non-refundable except in cases of severe weather, where we'll work with you to reschedule.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl overflow-hidden shadow-lg"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between p-6 font-medium">
                      <h2 className="text-xl font-bold">{faq.question}</h2>
                      <div className="ml-4">
                        <Plus className="h-5 w-5 text-white group-open:hidden" />
                        <Minus className="h-5 w-5 text-white hidden group-open:block" />
                      </div>
                    </summary>
                    <div className="p-6 pt-0 bg-white/10 backdrop-blur-sm">
                      <p className="text-white/90">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}

              {/* Still Have Questions */}
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 text-blue-900 rounded-xl p-6 md:p-8 shadow-lg mt-12">
                <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
                <p className="mb-6">
                  We're here to help! Contact us directly and we'll be happy to answer any additional questions you may
                  have about our bouncy house rentals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white">Contact Us</Button>
                  <Button className="bg-white hover:bg-blue-50 text-blue-900">Call (920) 555-JUMP</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-blue-900 text-white py-6 relative z-10">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Anchor className="h-6 w-6 text-yellow-400" />
            <span className="text-lg font-bold text-yellow-400">Door County Bouncy House</span>
          </div>
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
