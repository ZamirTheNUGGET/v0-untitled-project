import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Users } from "lucide-react"
import PageLayout from "@/components/page-layout"
import { blogPosts } from "@/data/blog-posts"

export default function BlogPage() {
  return (
    <PageLayout activeLink="Blog">
      <section className="w-full py-12 md:py-16 lg:py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
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
                      mission to turn ordinary gatherings into unforgettable celebrations in Door County with our bouncy
                      houses.
                    </p>
                    <span className="text-white text-sm font-medium group-hover:underline self-start mt-auto">
                      Read Our Story →
                    </span>
                  </div>
                  <div className="relative h-80 md:h-auto">
                    <Image
                      src="https://images.doorcountybouncyhouse.com/images/zamir-zohran-poolside.jpeg"
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
                      Transform your child's birthday with Minecraft, Fortnite, Among Us & Roblox themed parties paired
                      with our exciting bouncy house rentals for an unforgettable celebration.
                    </p>
                    <span className="text-white text-sm font-medium group-hover:underline self-start mt-auto">
                      Read More →
                    </span>
                  </div>
                  <div className="relative h-80 md:h-auto">
                    <Image
                      src="https://images.doorcountybouncyhouse.com/images/fortnight_bouncy_house.jpg"
                      alt="Fortnite-themed bouncy house obstacle course for game-themed birthday parties"
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
    </PageLayout>
  )
}
