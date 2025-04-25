import Link from "next/link"
import Image from "next/image"
import { Anchor, ArrowLeft, Calendar, Clock, Tag, ShoppingBag, BookOpen, LogIn, UserPlus, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"

// Sample blog posts data - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    slug: "top-5-bouncy-house-safety-tips",
    title: "Top 5 Bouncy House Safety Tips",
    excerpt: "Learn how to keep your children safe while they have a blast in our bouncy houses.",
    date: "June 15, 2023",
    author: "Sarah Johnson",
    authorTitle: "Safety Specialist",
    authorImage: "/placeholder.svg?height=100&width=100&text=SJ",
    readTime: "5 min read",
    category: "Safety",
    image: "/placeholder.svg?height=600&width=1200&text=Safety+Tips",
    color: "from-blue-500 to-blue-600",
    content: `
      <p>Bouncy houses provide endless fun for children, but safety should always be the top priority. Here are our top 5 safety tips to ensure a safe and enjoyable experience:</p>
      
      <h2>1. Proper Supervision</h2>
      <p>Always have at least one responsible adult supervising the bouncy house at all times. The supervisor should be focused solely on watching the children, not distracted by phones or conversations.</p>
      
      <h2>2. Follow Age and Weight Guidelines</h2>
      <p>Each bouncy house has specific age and weight recommendations. Group children by size and age to prevent injuries from larger children colliding with smaller ones.</p>
      
      <h2>3. Remove Shoes, Glasses, and Jewelry</h2>
      <p>Before entering the bouncy house, children should remove shoes, glasses, jewelry, and any sharp objects from their pockets to prevent injuries and damage to the inflatable.</p>
      
      <h2>4. No Rough Play</h2>
      <p>Establish clear rules: no pushing, shoving, wrestling, or flips. These activities significantly increase the risk of injuries.</p>
      
      <h2>5. Weather Awareness</h2>
      <p>Never use a bouncy house in windy conditions (over 15-20 mph). Also, avoid use during rain as wet surfaces become slippery and increase the risk of injuries.</p>
      
      <p>By following these safety guidelines, you can ensure that your bouncy house experience is both fun and safe for everyone involved. Remember, safety doesn't take the fun out of bouncing – it ensures that the fun can continue without interruption!</p>
    `,
    relatedPosts: ["planning-the-perfect-bouncy-house-party", "how-to-clean-and-maintain-your-bouncy-house"],
  },
  {
    slug: "planning-the-perfect-bouncy-house-party",
    title: "Planning the Perfect Bouncy House Party",
    excerpt: "Everything you need to know to plan an amazing bouncy house party for your child.",
    date: "May 22, 2023",
    author: "Mike Thompson",
    authorTitle: "Event Coordinator",
    authorImage: "/placeholder.svg?height=100&width=100&text=MT",
    readTime: "8 min read",
    category: "Party Planning",
    image: "/placeholder.svg?height=600&width=1200&text=Party+Planning",
    color: "from-teal-500 to-teal-600",
    content: `
      <p>Planning a bouncy house party can be an exciting way to celebrate a special occasion. Here's a comprehensive guide to help you plan the perfect bouncy house party:</p>
      
      <h2>1. Choose the Right Bouncy House</h2>
      <p>Consider the age group, number of children, and available space. For younger children (3-5 years), smaller castles with simple designs work best. For older kids, consider obstacle courses or interactive inflatables.</p>
      
      <h2>2. Select the Perfect Location</h2>
      <p>Bouncy houses need a flat, open area free from sharp objects. Ensure there's enough space around the inflatable for safe entry and exit. Indoor venues should have sufficient ceiling height.</p>
      
      <h2>3. Plan for Weather Contingencies</h2>
      <p>For outdoor parties, always have a backup plan in case of rain or excessive wind. Consider renting a tent or having an indoor alternative ready.</p>
      
      <h2>4. Create a Fun Theme</h2>
      <p>Coordinate your party theme with your bouncy house. Princess castles, superhero themes, or jungle adventures can make the experience more immersive.</p>
      
      <h2>5. Organize Additional Activities</h2>
      <p>While the bouncy house will be the main attraction, plan other activities for children who need a break from bouncing or for those who may not want to participate.</p>
      
      <h2>6. Prepare Appropriate Food</h2>
      <p>Serve easy-to-eat foods that won't make a mess. Avoid serving food near the bouncy house, and establish a rule that children must wait 30 minutes after eating before bouncing again.</p>
      
      <p>With proper planning, your bouncy house party will be a hit with children and parents alike. The key is to prioritize safety while maximizing fun!</p>
    `,
    relatedPosts: ["top-5-bouncy-house-safety-tips", "bouncy-house-themes-for-every-occasion"],
  },
  {
    slug: "why-bouncy-houses-are-great-for-child-development",
    title: "Why Bouncy Houses Are Great for Child Development",
    excerpt: "Discover the surprising developmental benefits of bouncy house play for children.",
    date: "April 10, 2023",
    author: "Dr. Emily Chen",
    authorTitle: "Child Development Specialist",
    authorImage: "/placeholder.svg?height=100&width=100&text=EC",
    readTime: "6 min read",
    category: "Child Development",
    image: "/placeholder.svg?height=600&width=1200&text=Child+Development",
    color: "from-cyan-500 to-cyan-600",
    content: `
      <p>Bouncy houses aren't just fun – they offer numerous developmental benefits for children. Here's how bouncy houses contribute to healthy child development:</p>
      
      <h2>Physical Development</h2>
      <p>Jumping and playing in bouncy houses helps children develop gross motor skills, balance, and coordination. The constant movement strengthens muscles, improves cardiovascular health, and builds endurance.</p>
      
      <h2>Sensory Processing</h2>
      <p>The bouncing motion provides valuable vestibular (balance) stimulation, which is crucial for sensory processing development. This type of sensory input helps children regulate their bodies and can be particularly beneficial for children with sensory processing challenges.</p>
      
      <h2>Social Skills</h2>
      <p>Bouncy houses create opportunities for children to practice taking turns, sharing space, and cooperating with others. These interactions help develop crucial social skills and emotional intelligence.</p>
      
      <h2>Emotional Development</h2>
      <p>The physical activity in bouncy houses releases endorphins, promoting positive mood and reducing stress. Conquering fears (like jumping higher) builds confidence and resilience.</p>
      
      <h2>Cognitive Benefits</h2>
      <p>Navigating through bouncy obstacles requires problem-solving skills and spatial awareness. Children must make quick decisions about how to move their bodies through space, enhancing cognitive development.</p>
      
      <p>By understanding these developmental benefits, parents can see bouncy houses as more than just entertainment – they're valuable tools for supporting healthy child development through play.</p>
    `,
    relatedPosts: ["best-bouncy-houses-for-different-age-groups", "top-5-bouncy-house-safety-tips"],
  },
  {
    slug: "best-bouncy-houses-for-different-age-groups",
    title: "Best Bouncy Houses for Different Age Groups",
    excerpt: "Find out which bouncy house is most suitable for your child's age group.",
    date: "March 5, 2023",
    author: "Tom Wilson",
    authorTitle: "Product Specialist",
    authorImage: "/placeholder.svg?height=100&width=100&text=TW",
    readTime: "7 min read",
    category: "Product Guide",
    image: "/placeholder.svg?height=600&width=1200&text=Age+Groups",
    color: "from-indigo-500 to-indigo-600",
    content: `
      <p>Choosing the right bouncy house for your child's age group is essential for both safety and enjoyment. Here's our guide to selecting age-appropriate bouncy houses:</p>
      
      <h2>Toddlers (Ages 1-3)</h2>
      <p>Toddlers need simple, low-to-the-ground bouncy houses with soft surfaces and minimal obstacles. Look for:</p>
      <ul>
        <li>Small, enclosed designs with low walls</li>
        <li>Soft landing areas</li>
        <li>Simple entry and exit points</li>
        <li>Gentle slopes rather than steep slides</li>
      </ul>
      
      <h2>Preschoolers (Ages 3-5)</h2>
      <p>Preschoolers enjoy more features but still need appropriate safety measures:</p>
      <ul>
        <li>Themed bouncy houses (princess castles, jungle themes)</li>
        <li>Small slides and climbing features</li>
        <li>Basketball hoops or ball pits</li>
        <li>Enclosed designs to prevent falls</li>
      </ul>
      
      <h2>School-Age Children (Ages 6-12)</h2>
      <p>School-age children can handle more challenging features:</p>
      <ul>
        <li>Obstacle courses</li>
        <li>Larger slides</li>
        <li>Climbing walls</li>
        <li>Interactive elements like pop-ups or tunnels</li>
        <li>Competitive elements for races or games</li>
      </ul>
      
      <h2>Teenagers (Ages 13+)</h2>
      <p>Teenagers need robust, challenging inflatables:</p>
      <ul>
        <li>Advanced obstacle courses</li>
        <li>Wipeout-style challenges</li>
        <li>Inflatable sports arenas</li>
        <li>Higher weight capacities</li>
      </ul>
      
      <p>Remember that supervision is essential for all age groups, and weight limits should always be respected regardless of age. By choosing an age-appropriate bouncy house, you'll ensure maximum fun while maintaining safety.</p>
    `,
    relatedPosts: ["why-bouncy-houses-are-great-for-child-development", "top-5-bouncy-house-safety-tips"],
  },
  {
    slug: "how-to-clean-and-maintain-your-bouncy-house",
    title: "How to Clean and Maintain Your Bouncy House",
    excerpt: "Tips and tricks for keeping your bouncy house clean, safe, and in good condition.",
    date: "February 18, 2023",
    author: "Lisa Martinez",
    authorTitle: "Maintenance Specialist",
    authorImage: "/placeholder.svg?height=100&width=100&text=LM",
    readTime: "4 min read",
    category: "Maintenance",
    image: "/placeholder.svg?height=600&width=1200&text=Maintenance",
    color: "from-purple-500 to-purple-600",
    content: `
      <p>Proper cleaning and maintenance of your bouncy house not only extends its lifespan but also ensures it remains safe for children to use. Here's a comprehensive guide to keeping your inflatable in top condition:</p>
      
      <h2>Regular Cleaning</h2>
      <p>Clean your bouncy house after each use to prevent dirt buildup and staining:</p>
      <ul>
        <li>Sweep or vacuum loose debris</li>
        <li>Use a mild soap solution (dish soap works well) and warm water</li>
        <li>Scrub gently with a soft brush or cloth</li>
        <li>Rinse thoroughly with clean water</li>
        <li>Allow to dry completely before storage</li>
      </ul>
      
      <h2>Deep Cleaning</h2>
      <p>Perform a deep cleaning at least once a season or after heavy use:</p>
      <ul>
        <li>Use a pressure washer on a low setting</li>
        <li>Apply a specialized vinyl cleaner for stubborn stains</li>
        <li>Disinfect with a solution of 1 part bleach to 10 parts water</li>
        <li>Rinse thoroughly and allow to dry completely in the sun</li>
      </ul>
      
      <h2>Inspection and Maintenance</h2>
      <p>Regularly inspect your bouncy house for:</p>
      <ul>
        <li>Tears, holes, or worn seams</li>
        <li>Damaged or loose anchor points</li>
        <li>Blower motor performance</li>
        <li>Proper inflation and air retention</li>
      </ul>
      
      <h2>Proper Storage</h2>
      <p>Correct storage is crucial for longevity:</p>
      <ul>
        <li>Ensure the bouncy house is completely dry before folding</li>
        <li>Fold along the original creases to prevent new stress points</li>
        <li>Store in a cool, dry place away from direct sunlight</li>
        <li>Use a storage bag or tarp to protect from dust and pests</li>
      </ul>
      
      <p>With proper cleaning and maintenance, your bouncy house can provide years of safe enjoyment. Remember that addressing small issues promptly prevents them from becoming major problems that could compromise safety.</p>
    `,
    relatedPosts: ["top-5-bouncy-house-safety-tips", "bouncy-house-themes-for-every-occasion"],
  },
  {
    slug: "bouncy-house-themes-for-every-occasion",
    title: "Bouncy House Themes for Every Occasion",
    excerpt: "Explore different themed bouncy houses for birthdays, holidays, and special events.",
    date: "January 30, 2023",
    author: "Jessica Brown",
    authorTitle: "Creative Director",
    authorImage: "/placeholder.svg?height=100&width=100&text=JB",
    readTime: "5 min read",
    category: "Themes",
    image: "/placeholder.svg?height=600&width=1200&text=Themes",
    color: "from-pink-500 to-pink-600",
    content: `
      <p>Themed bouncy houses add an extra layer of excitement to any event. Here's our guide to choosing the perfect themed inflatable for different occasions:</p>
      
      <h2>Birthday Parties</h2>
      <p>Match the bouncy house to your child's interests:</p>
      <ul>
        <li>Princess Castle: Perfect for fairy tale enthusiasts</li>
        <li>Superhero Adventure: Great for little crime-fighters</li>
        <li>Dinosaur Kingdom: Ideal for prehistoric fans</li>
        <li>Sports Arena: For athletic children</li>
        <li>Underwater Adventure: Features sea creatures and mermaids</li>
      </ul>
      
      <h2>Seasonal Events</h2>
      <p>Celebrate holidays with themed inflatables:</p>
      <ul>
        <li>Halloween: Haunted house bouncy castles with friendly ghosts</li>
        <li>Christmas: Santa's workshop or winter wonderland themes</li>
        <li>Easter: Bunny-themed bounce houses with pastel colors</li>
        <li>Summer: Beach or tropical-themed inflatables</li>
      </ul>
      
      <h2>Community Events</h2>
      <p>Larger inflatables for public gatherings:</p>
      <ul>
        <li>Carnival Themes: Circus-inspired designs with bright colors</li>
        <li>Sports Themes: Football, basketball, or multi-sport inflatables</li>
        <li>Adventure Courses: Obstacle-style inflatables for competitions</li>
        <li>Movie Themes: Popular character-themed bounce houses</li>
      </ul>
      
      <h2>Educational Events</h2>
      <p>Learning-focused inflatables:</p>
      <ul>
        <li>Space Exploration: Rocket ships and planets</li>
        <li>Jungle Safari: Wildlife-themed with educational elements</li>
        <li>Storybook Characters: Based on popular children's books</li>
      </ul>
      
      <p>When selecting a themed bouncy house, consider the age group, number of participants, and available space. The right theme can transform a regular event into an unforgettable experience that children will talk about for years to come.</p>
    `,
    relatedPosts: ["planning-the-perfect-bouncy-house-party", "best-bouncy-houses-for-different-age-groups"],
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === params.slug)

  // If no post is found, you could redirect or show an error
  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-400 via-cyan-300 to-blue-500">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6">Sorry, the blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Find related posts
  const relatedPosts = post.relatedPosts ? blogPosts.filter((p) => post.relatedPosts?.includes(p.slug)) : []

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
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mb-8 shadow-xl border-4 border-white">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              </div>

              {/* Post Header */}
              <div className={`bg-gradient-to-br ${post.color} text-white rounded-xl p-6 md:p-8 mb-8 shadow-lg`}>
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

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white">{post.author}</div>
                    <div className="text-sm text-white/80">{post.authorTitle}</div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="bg-blue-50 rounded-xl p-6 md:p-8 shadow-lg mb-8">
                <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
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
            </div>
          </div>
        </article>
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
