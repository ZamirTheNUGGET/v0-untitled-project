import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Phone, ShoppingBag, BookOpen, LogIn, UserPlus, Star, Users, HelpCircle } from "lucide-react"
import MobileMenu from "@/components/mobile-menu"
import Logo from "@/components/logo"

import { Button } from "@/components/ui/button"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden bg-gradient-to-b from-sky-400 via-cyan-300 to-blue-500">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Animated Waves Background */}
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      {/* Island with Bouncy House */}
      <div className="absolute bottom-0 left-[10%] w-64 h-48 z-10 hidden md:block">
        {/* Island */}
        <div className="absolute bottom-0 w-full h-1/3 bg-yellow-300 rounded-t-full"></div>
        <div
          className="absolute bottom-[30%] left-[20%] w-[60%] h-[40%] bg-gradient-to-t from-red-500 to-pink-400 rounded-t-full rounded-b-lg shadow-lg animate-bounce"
          style={{ animationDuration: "3s" }}
        >
          {/* Bouncy House */}
          <div className="absolute top-[10%] left-[10%] w-[80%] h-[60%] bg-blue-500 rounded-t-lg"></div>
          <div className="absolute top-[10%] left-[20%] w-[60%] h-[30%] bg-yellow-400"></div>
          <div className="absolute top-[40%] left-[30%] w-[40%] h-[30%] bg-green-400 rounded-full"></div>
        </div>
        {/* Palm Tree */}
        <div className="absolute bottom-[30%] right-[15%] w-[10%] h-[50%] bg-brown-600 bg-amber-800"></div>
        <div className="absolute bottom-[70%] right-[5%] w-[30%] h-[20%] bg-green-600 rounded-full"></div>
      </div>

      {/* Lighthouse on the right */}
      <div className="absolute bottom-0 right-[5%] w-24 h-64 z-10 hidden md:block">
        <div className="absolute bottom-0 w-full h-3/5 bg-gradient-to-t from-red-600 to-white rounded-t-full"></div>
        <div className="absolute bottom-[60%] w-full h-[10%] bg-white"></div>
        <div className="absolute bottom-[70%] w-full h-[30%] bg-blue-800 rounded-t-lg"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-[10%] bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 w-full h-[5%] bg-gray-800"></div>

        {/* Light Beam */}
        <div className="absolute top-[5%] left-[50%] w-[400px] h-[20px] bg-yellow-100/30 rotate-[-30deg] origin-left animate-pulse"></div>
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
                { name: "Contact", href: "#contact", icon: <Phone className="h-4 w-4" /> },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-500/70 group overflow-hidden"
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
              <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold">
                <UserPlus className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
              <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold">
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
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              {/* Image now on the left */}
              <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-xl order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Colorful bouncy castle with children playing"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-white"
                />
              </div>
              {/* Text now on the right */}
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-blue-700 px-3 py-1 text-sm text-white">
                  Fun for All Ages!
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-md wave-text">
                  We bring the bounce, so you can bring the fun
                </h1>
                <p className="max-w-[600px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow wave-text">
                  We provide the most colorful, safe, and exciting bouncy houses for parties, events, and special
                  occasions throughout Door County.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white text-lg font-bold border-2 border-white">
                    View Bouncy Houses
                  </Button>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 text-lg font-bold border-2 border-white">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 bg-blue-600/40 backdrop-blur-sm relative z-10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-400 px-3 py-1 text-sm text-blue-900 font-bold">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md wave-text">
                  Bounce-tastic Services
                </h2>
                <p className="max-w-[900px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed wave-text">
                  We offer a variety of bouncy house services to make your event unforgettable!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Birthday Parties",
                  description: "Make your child's birthday the talk of the town with our colorful bouncy castles.",
                  icon: <Star className="h-10 w-10 text-white" />,
                  color: "bg-gradient-to-b from-blue-500 to-blue-600 text-white",
                },
                {
                  title: "School Events",
                  description: "Perfect for school carnivals, field days, and end-of-year celebrations.",
                  icon: <Users className="h-10 w-10 text-white" />,
                  color: "bg-gradient-to-b from-teal-500 to-teal-600 text-white",
                },
                {
                  title: "Community Festivals",
                  description: "Add excitement to your community event with our range of bouncy attractions.",
                  icon: <MapPin className="h-10 w-10 text-white" />,
                  color: "bg-gradient-to-b from-cyan-500 to-cyan-600 text-white",
                },
                {
                  title: "Church Events",
                  description: "Safe and fun entertainment for church picnics and gatherings.",
                  icon: <Star className="h-10 w-10 text-white" />,
                  color: "bg-gradient-to-b from-indigo-500 to-indigo-600 text-white",
                },
                {
                  title: "Corporate Functions",
                  description: "Yes, adults can have fun too! Great for company picnics and team building.",
                  icon: <Users className="h-10 w-10 text-white" />,
                  color: "bg-gradient-to-b from-purple-500 to-purple-600 text-white",
                },
                {
                  title: "Special Occasions",
                  description: "From graduations to family reunions, we'll help you celebrate in style.",
                  icon: <Calendar className="h-10 w-10 text-white" />,
                  color: "bg-gradient-to-b from-pink-500 to-pink-600 text-white",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center space-y-3 rounded-lg p-6 ${service.color} transition-all hover:shadow-lg backdrop-blur-sm shadow-md`}
                >
                  <div className="rounded-full p-3 bg-white/20 shadow-sm">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm text-white/90 text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full py-12 md:py-24 bg-cyan-500/40 backdrop-blur-sm relative z-10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-yellow-400 px-3 py-1 text-sm text-blue-900 font-bold">
                  Our Bouncy Houses
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md wave-text">
                  Explore Our Colorful Collection
                </h2>
                <p className="max-w-[900px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed wave-text">
                  Take a look at our range of bouncy houses, slides, and obstacle courses!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Princess Castle", color: "bg-pink-500" },
                { name: "Superhero Bounce", color: "bg-blue-600" },
                { name: "Jungle Adventure", color: "bg-green-500" },
                { name: "Pirate Ship", color: "bg-purple-600" },
                { name: "Sports Arena", color: "bg-orange-500" },
                { name: "Rainbow Slide", color: "bg-red-500" },
              ].map((bouncy, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl border-4 border-white"
                >
                  <Image
                    src={`/placeholder-graphic.png?key=o840u&height=300&width=400&text=${bouncy.name}`}
                    alt={bouncy.name}
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-100`}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white wave-text">{bouncy.name}</h3>
                      <Button className="mt-2 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 bg-blue-600/40 backdrop-blur-sm relative z-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              {/* Image on the left */}
              <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Packages"
                  alt="Bouncy house packages"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-white"
                />
              </div>
              {/* Text on the right */}
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-yellow-400 px-3 py-1 text-sm text-blue-900 font-bold">
                  Our Packages
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md wave-text">
                  Choose Your Perfect Package
                </h2>
                <p className="max-w-[600px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed wave-text">
                  We offer a variety of packages to suit your event needs. From small gatherings to large community
                  events, we have the perfect bouncy house solution for you.
                </p>
                <div className="space-y-4">
                  {[
                    "Standard and premium bouncy houses",
                    "Flexible rental durations",
                    "Professional setup and takedown",
                    "Safety attendants available",
                    "Custom theme options",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-white wave-text">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-12 md:py-24 bg-blue-500/40 backdrop-blur-sm relative z-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              {/* Image on the left */}
              <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Blog"
                  alt="Bouncy house blog"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-white"
                />
              </div>
              {/* Text on the right */}
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-yellow-400 px-3 py-1 text-sm text-blue-900 font-bold">
                  Our Blog
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md wave-text">
                  Bouncy House Adventures
                </h2>
                <p className="max-w-[600px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed wave-text">
                  Read about our latest events, tips, and bouncy house fun! Our blog is filled with helpful information
                  for planning your next event.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Top 5 Bouncy House Safety Tips",
                      date: "June 15, 2025",
                    },
                    {
                      title: "Planning the Perfect Bouncy House Party",
                      date: "May 22, 2025",
                    },
                    {
                      title: "Why Bouncy Houses Are Great for Child Development",
                      date: "April 10, 2025",
                    },
                  ].map((post, index) => (
                    <div key={index} className="flex flex-col">
                      <h3 className="text-lg font-bold text-white wave-text">{post.title}</h3>
                      <p className="text-sm text-white/80">{post.date}</p>
                    </div>
                  ))}
                </div>
                <Link href="/blog">
                  <Button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold">Visit Our Blog</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 bg-cyan-500/40 backdrop-blur-sm relative z-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              {/* Image on the left */}
              <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-xl order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Contact+Us"
                  alt="Contact Door County Bouncy House"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl shadow-lg border-4 border-white"
                />
              </div>
              {/* Text on the right */}
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-yellow-400 px-3 py-1 text-sm text-blue-900 font-bold">
                  Get In Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md wave-text">
                  Ready to Bounce?
                </h2>
                <p className="max-w-[600px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed wave-text">
                  Contact us today to learn more about our services and how we can make your event unforgettable.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-white" />
                    <span className="text-lg text-white wave-text">(920) 555-JUMP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-white" />
                    <span className="text-lg text-white wave-text">123 Bounce Street, Door County, WI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-white" />
                    <span className="text-lg text-white wave-text">Available 7 days a week, April through October</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold">Email Us</Button>
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold">Request Info</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-blue-600/60 backdrop-blur-sm relative z-10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md wave-text">
                  Ready to Make Your Event Unforgettable?
                </h2>
                <p className="max-w-[900px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed wave-text">
                  Contact us today to learn more about our bouncy house options!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white text-lg font-bold">Contact Us</Button>
                <Button className="bg-blue-700 hover:bg-blue-800 text-white text-lg font-bold">View Gallery</Button>
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
