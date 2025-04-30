import { notFound } from "next/server"
import Link from "next/link"
import Image from "next/image"
import { getBlogPost, getRelatedPosts } from "@/data/blog-posts"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/button"
import { Calendar, Clock, Tag } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return notFound()
  }

  // Get related posts if available
  const relatedPosts = post.relatedPosts ? getRelatedPosts(post.relatedPosts) : []

  return (
    <PageLayout activeLink="Blog">
      <article className="w-full py-12 md:py-16 lg:py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              <span>Back to Blog</span>
            </Link>

            {/* Featured Image */}
            <div className={`bg-gradient-to-br ${post.color} text-white rounded-xl overflow-hidden shadow-xl mb-8`}>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/80 mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    {post.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{post.title}</h1>
              </div>
              <div className="relative w-full h-[400px] md:h-[500px] border-t-4 border-white/30">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              </div>
            </div>

            {/* Post Content */}
            <div className="bg-blue-50 rounded-xl p-6 md:p-8 shadow-lg mb-8">
              <div
                className="prose prose-blue max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content || "" }}
              ></div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-blue-600/70 backdrop-blur-sm text-white rounded-xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6">Related Posts</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group block">
                      <div
                        className={`flex gap-4 items-start bg-gradient-to-r ${relatedPost.color} p-4 rounded-lg transition-transform hover:scale-[1.02]`}
                      >
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-white group-hover:text-yellow-300 transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-white/80 line-clamp-2">{relatedPost.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-blue-900 rounded-xl p-6 md:p-8 shadow-lg mt-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Book Your Bouncy House?</h2>
              <p className="mb-6">Contact us today to reserve the perfect bouncy house for your next event!</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="default">
                  Book Now
                </Button>
                <Button href="/products" variant="secondary">
                  View All Bouncy Houses
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  )
}

// This function tells Next.js which /blog/[slug] pages to generate at build time
export async function generateStaticParams() {
  // Import the blog posts directly
  const { blogPosts } = await import("@/data/blog-posts")
  return blogPosts.map((post) => ({ slug: post.slug }))
}
