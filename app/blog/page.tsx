import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ShoppingBag, BookOpen, Phone, HelpCircle, ArrowLeft, Users, Home } from "lucide-react"
import MobileMenu from "@/components/mobile-menu"
import Logo from "@/components/logo"

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      slug: "about-us",
      title: "About Us: We Bring The Bounce So You Can Bring The Fun!",
      excerpt:
        "Welcome to Door County Bouncy House! We're Zamir and Zohran Overbeck. We are two brothers on a mission to turn ordinary gatherings into unforgettable celebrations in Door County with our bouncy houses.",
      date: "April 30, 2025",
      author: "Zamir & Zohran Overbeck",
      readTime: "3 min read",
      category: "Our Story",
      image: "/images/zamir-zohran-poolside.jpeg",
      color: "from-blue-600 to-blue-800",
    },
    {
      slug: "level-up-your-childs-birthday-with-game-themed-parties",
      title: "Level Up Your Child's Birthday: Epic Game-Themed Party Ideas",
      excerpt:
        "Transform your child's birthday with Minecraft, Fortnite, Among Us & Roblox themed parties paired with our exciting bouncy house rentals for an unforgettable celebration.",
      date: "July 5, 2025",
      author: "Door County Bouncy Team",
      readTime: "5 min read",
      category: "Party Planning",
      image: "/placeholder.svg?height=600&width=1200&text=Game+Themed+Parties",
      color: "from-purple-500 to-indigo-600",
    },
    {
      slug: "best-event-ideas-for-a-door-county-bouncy-house",
      title: "Best Event Ideas for a Door County Bouncy House",
      excerpt:
        "Door County is the perfect backdrop for unforgettable celebrations. Discover the best occasions to rent a bouncy house in Door County.",
      date: "May 10, 2025",
      author: "Door County Bouncy Team",
      readTime: "4 min read",
      category: "Event Planning",
      image: "/images/bouncy-house-event.jpg",
      color: "from-green-500 to-green-600",
    },
    {
      slug: "why-our-door-county-bouncy-house-rentals-are-the-best",
      title: "Why Our Door County Bouncy House Rentals Are the Best",
      excerpt:
        "Looking to create unforgettable memories for your next event in Door County? Our Door County Bouncy House rental service literally delivers hours of fun for kids!",
      date: "April 25, 2025",
      author: "Door County Bouncy Team",
      readTime: "3 min read",
      category: "Rentals",
      image: "/images/bouncy-obstacle-course.png",
      color: "from-yellow-500 to-amber-600",
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
                  Our Blog
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md">
                  Bouncy House Adventures
                </h1>
                <p className="max-w-[900px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tips, stories, and insights about bouncy houses and creating memorable events
                </p>
              </div>
            </div>

            {/* Featured About Us Section - Made larger and more prominent */}
            <div className="mb-12">
              <Link href="/blog/about-us" className="block group">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-xs text-white/80 mb-2">
                        <Users className="h-4 w-4" />
                        <span>Our Founders</span>
                        <span className="mx-1">•</span>
                        <Clock className="h-4 w-4" />
                        <span>3 min read</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                        About Us: We Bring The Bounce So You Can Bring The Fun!
                      </h2>
                      <p className="text-white/90 mb-4">
                        Welcome to Door County Bouncy House! We're Zamir and Zohran Overbeck. We are two brothers on a
                        mission to turn ordinary gatherings into unforgettable celebrations in Door County with our
                        bouncy houses.
                      </p>
                      <span className="text-white text-sm font-medium group-hover:underline self-start mt-auto">
                        Read Our Story →
                      </span>
                    </div>
                    <div className="relative h-80 md:h-auto">
                      <Image
                        src="/images/zamir-zohran-poolside.jpeg"
                        alt="Zamir and Zohran Overbeck - Door County Bouncy House Founders"
                        fill
                        className="object-contain rounded-tr-xl rounded-br-xl md:rounded-bl-none md:rounded-tr-xl"
                        style={{ objectPosition: "center 30%" }}
                      />
                      <div className="absolute inset-0 border-4 border-yellow-400 rounded-tr-xl rounded-br-xl md:rounded-bl-none md:rounded-tr-xl opacity-70"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Featured Game-Themed Party Post */}
            <div className="mb-12">
              <Link href="/blog/level-up-your-childs-birthday-with-game-themed-parties" className="block group">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-xs text-white/80 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>July 5, 2025</span>
                        <span className="mx-1">•</span>
                        <Clock className="h-4 w-4" />
                        <span>5 min read</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                        Level Up Your Child's Birthday: Epic Game-Themed Party Ideas
                      </h2>
                      <p className="text-white/90 mb-4">
                        Transform your child's birthday with Minecraft, Fortnite, Among Us & Roblox themed parties
                        paired with our exciting bouncy house rentals for an unforgettable celebration.
                      </p>
                      <span className="text-white text-sm font-medium group-hover:underline self-start mt-auto">
                        Read More →
                      </span>
                    </div>
                    <div className="relative h-80 md:h-auto">
                      <Image
                        src="/placeholder.svg?height=600&width=1200&text=Game+Themed+Parties"
                        alt="Game-themed birthday party with bouncy house"
                        fill
                        className="object-cover rounded-tr-xl rounded-br-xl md:rounded-bl-none md:rounded-tr-xl"
                      />
                      <div className="absolute inset-0 border-4 border-purple-300 rounded-tr-xl rounded-br-xl md:rounded-bl-none md:rounded-tr-xl opacity-70"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Other Blog Posts Grid */}
            <h2 className="text-2xl font-bold text-white mb-6">More Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.slice(2).map((post, index) => {
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                    <div
                      className={`bg-gradient-to-br ${post.color} text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
                    >
                      <div className="h-48 overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={600}
                          height={300}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-white/80 mb-2">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                          <span className="mx-1">•</span>
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-white/90 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="inline-block bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-white text-sm font-medium group-hover:underline">Read More →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
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
