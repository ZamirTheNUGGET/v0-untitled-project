export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  authorTitle?: string
  authorImage?: string
  readTime: string
  category: string
  image: string
  color: string
  content?: string
  relatedPosts?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "about-us",
    title: "About Us: We Bring The Bounce So You Can Bring The Fun!",
    excerpt:
      "Welcome to Door County Bouncy House! We're Zamir and Zohran Overbeck. We are two brothers on a mission to turn ordinary gatherings into unforgettable celebrations in Door County with our bouncy houses.",
    date: "April 30, 2025",
    author: "Zamir & Zohran Overbeck",
    readTime: "3 min read",
    category: "Our Story",
    image: "https://doorcountybouncyhouse.com/images/zamir-zohran-poolside.jpeg",
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
    image: "https://doorcountybouncyhouse.com/images/fortnite-obstacle-course.jpeg",
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
    image: "https://doorcountybouncyhouse.com/images/bouncy-house-event.jpg",
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
    image: "https://doorcountybouncyhouse.com/images/bouncy-obstacle-course.png",
    color: "from-yellow-500 to-amber-600",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return blogPosts.filter((post) => slugs.includes(post.slug))
}
