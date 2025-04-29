import { notFound } from "next/server"
import { getBlogPost } from "@/data/blog-posts"
import BlogLayout from "@/components/blog-layout"

// This is needed for dynamic imports
import dynamic from "next/dynamic"

// Sample blog posts data - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    slug: "top-5-bouncy-house-safety-tips",
    title: "Top 5 Bouncy House Safety Tips",
    excerpt: "Learn how to keep your children safe while they have a blast in our bouncy houses.",
    date: "June 15, 2025",
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
    date: "May 22, 2025",
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
    slug: "best-event-ideas-for-a-door-county-bouncy-house",
    title: "Best Event Ideas for a Door County Bouncy House",
    excerpt:
      "Door County is the perfect backdrop for unforgettable celebrations. Discover the best occasions to rent a bouncy house in Door County.",
    date: "May 10, 2025",
    author: "Door County Bouncy Team",
    authorTitle: "Event Specialists",
    authorImage: "/placeholder.svg?height=100&width=100&text=DCB",
    readTime: "4 min read",
    category: "Event Planning",
    image: "/placeholder.svg?height=600&width=1200&text=Event+Ideas",
    color: "from-green-500 to-green-600",
    content: `
      <p>Door County is the perfect backdrop for unforgettable celebrations, from Lake Michigan or from the Bayside of the county. Here are some of the best occasions to rent a <strong>bouncy house in Door County</strong>:</p>
      
      <h2>🎉 Rent a Bounce House for a Birthday Party</h2>
      <p>Looking for a way to make your child's birthday party unforgettable? A bouncy house is guaranteed to keep kids entertained for hours and creates memories they'll cherish for years. We deliver the fun right to your Door County location—just add cake and laughter!</p>
      
      <h2>👨‍👩‍👧‍👦 Make Your Family Reunion or Neighborhood Gathering Extra Fun</h2>
      <p>Turn your next family reunion or neighborhood get-together into a celebration everyone will remember. Our Door County Bouncy Houses keep the kids busy and happy, so adults can relax, reconnect, and enjoy the day.</p>
      
      <h2>🎪 Festivals & Community Gatherings</h2>
      <p>Want to make your festival booth or community event the hottest spot in Door County? Rent a bouncy house! Kids can't resist the fun, making it a great way to attract families and create a lively atmosphere at any gathering.</p>
      
      <h2>🥳 Add Excitement to Church Picnics and School Fundraisers</h2>
      <p>Looking for a way to boost the energy at your next church picnic or school fundraiser? A bouncy house is the perfect addition—bringing color, excitement, and joy to every attendee, young and old.</p>
    `,
    relatedPosts: ["planning-the-perfect-bouncy-house-party", "why-our-door-county-bouncy-house-rentals-are-the-best"],
  },
  {
    slug: "best-bouncy-houses-for-different-age-groups",
    title: "Best Bouncy Houses for Different Age Groups",
    excerpt: "Find out which bouncy house is most suitable for your child's age group.",
    date: "March 5, 2025",
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
    date: "February 18, 2025",
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
    slug: "why-our-door-county-bouncy-house-rentals-are-the-best",
    title: "Why Our Door County Bouncy House Rentals Are the Best",
    excerpt:
      "Looking to create unforgettable memories for your next event in Door County? Our Door County Bouncy House rental service literally delivers hours of fun for kids!",
    date: "April 25, 2025",
    author: "Door County Bouncy Team",
    authorTitle: "Rental Specialists",
    authorImage: "/placeholder.svg?height=100&width=100&text=DCB",
    readTime: "3 min read",
    category: "Rentals",
    image: "/placeholder.svg?height=600&width=1200&text=Best+Rentals",
    color: "from-yellow-500 to-amber-600",
    content: `
      <p>Looking to create unforgettable memories for your next event in Door County? Our Door County Bouncy House rental service literally delivers hours of fun for kids! Whether you're planning a birthday party, a family reunion, or a neighborhood get-together our inflatable rentals are the perfect way to bring joy and excitement to your guests.</p>
      
      <p>We Bring The Bounce So You Can Bring The Fun!</p>
    `,
    relatedPosts: ["top-5-bouncy-house-safety-tips", "planning-the-perfect-bouncy-house-party"],
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return notFound()
  }

  // Dynamic import of blog content based on slug
  const BlogContent = dynamic(() => import(`@/app/blog/${params.slug}/content`), {
    loading: () => <p>Loading...</p>,
    ssr: true,
  })

  return (
    <BlogLayout
      title={post.title}
      date={post.date}
      readTime={post.readTime}
      category={post.category}
      image={post.image}
      color={post.color}
    >
      <BlogContent />
    </BlogLayout>
  )
}
