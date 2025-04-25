import Link from "next/link"
import Image from "next/image"
import {
  Anchor,
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  User,
  ShoppingBag,
  BookOpen,
  LogIn,
  UserPlus,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      slug: "top-5-bouncy-house-safety-tips",
      title: "Top 5 Bouncy House Safety Tips",
      excerpt: "Learn how to keep your children safe while they have a blast in our bouncy houses.",
      date: "June 15, 2023",
      author: "Sarah Johnson",
      readTime: "5 min read",
      category: "Safety",
      image: "/placeholder.svg?height=400&width=800&text=Safety+Tips",
      featured: true,
      color: "from-blue-500 to-blue-600",
    },
    {
      slug: "planning-the-perfect-bouncy-house-party",
      title: "Planning the Perfect Bouncy House Party",
      excerpt: "Everything you need to know to plan an amazing bouncy house party for your child.",
      date: "May 22, 2023",
      author: "Mike Thompson",
      readTime: "8 min read",
      category: "Party Planning",
      image: "/placeholder.svg?height=400&width=800&text=Party+Planning",
      color: "from-teal-500 to-teal-600",
    },
    {
      slug: "why-bouncy-houses-are-great-for-child-development",
      title: "Why Bouncy Houses Are Great for Child Development",
      excerpt: "Discover the surprising developmental benefits of bouncy house play for children.",
      date: "April 10, 2023",
      author: "Dr. Emily Chen",
      readTime: "6 min read",
      category: "Child Development",
      image: "/placeholder.svg?height=400&width=800&text=Child+Development",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      slug: "best-bouncy-houses-for-different-age-groups",
      title: "Best Bouncy Houses for Different Age Groups",
      excerpt: "Find out which bouncy house is most suitable for your child's age group.",
      date: "March 5, 2023",
      author: "Tom Wilson",
      readTime: "7 min read",
      category: "Product Guide",
      image: "/placeholder.svg?height=400&width=800&text=Age+Groups",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      slug: "how-to-clean-and-maintain-your-bouncy-house",
      title: "How to Clean and Maintain Your Bouncy House",
      excerpt: "Tips and tricks for keeping your bouncy house clean, safe, and in good condition.",
      date: "February 18, 2023",
      author: "Lisa Martinez",
      readTime: "4 min read",
      category: "Maintenance",
      image: "/placeholder.svg?height=400&width=800&text=Maintenance",
      color: "from-purple-500 to-purple-600",
    },
    {
      slug: "bouncy-house-themes-for-every-occasion",
      title: "Bouncy House Themes for Every Occasion",
      excerpt: "Explore different themed bouncy houses for birthdays, holidays, and special events.",
      date: "January 30, 2023",
      author: "Jessica Brown",
      readTime: "5 min read",
      category: "Themes",
      image: "/placeholder.svg?height=400&width=800&text=Themes",
      color: "from-pink-500 to-pink-600",
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

            {/* Featured Post */}
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <div key={post.slug} className="mb-12">
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <div
                      className={`bg-gradient-to-br ${post.color} text-white rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]`}
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative h-64 md:h-full overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={800}
                            height={400}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 font-bold px-3 py-1 rounded-full text-xs">
                            Featured
                          </div>
                        </div>
                        <div className="p-6 flex flex-col justify-center">
                          <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-white/90 mb-4">{post.excerpt}</p>
                          <div className="flex items-center gap-2 text-sm text-white/80 mb-4">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <Tag className="h-4 w-4" />
                            <span>{post.category}</span>
                          </div>
                          <Button className="w-fit bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

            {/* Blog Post Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts
                .filter((post) => !post.featured)
                .map((post, index) => {
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
