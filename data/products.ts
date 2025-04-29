export interface Product {
  id: string
  name: string
  description: string
  image: string
  features: string[]
  color: string
  sizes: {
    name: string
    dimensions: string
    capacity: string
  }[]
}

export const products: Product[] = [
  {
    id: "obstacle-course",
    name: "Obstacle Course Bouncy Houses",
    description: "Challenge your guests with our exciting obstacle courses that provide hours of active fun!",
    image: "https://doorcountybouncyhouse.com/images/fortnite-obstacle-course.jpeg",
    features: [
      "Multiple obstacles and challenges",
      "Perfect for competitive fun",
      "Suitable for ages 5-15",
      "Great for larger events and spaces",
      "Can accommodate multiple children at once",
    ],
    color: "from-blue-600 to-blue-700",
    sizes: [
      { name: "30ft Standard Course", dimensions: "30ft x 10ft", capacity: "8-10 children" },
      { name: "40ft Deluxe Course", dimensions: "40ft x 12ft", capacity: "10-12 children" },
      { name: "50ft Ultimate Challenge", dimensions: "50ft x 15ft", capacity: "12-15 children" },
    ],
  },
  {
    id: "classic-bounce",
    name: "Classic Bouncy Houses",
    description: "Traditional bouncy castles perfect for birthday parties and smaller gatherings.",
    image: "https://doorcountybouncyhouse.com/images/classic-bouncy-castle.png",
    features: [
      "Simple, classic design",
      "Perfect for younger children",
      "Compact size fits in most yards",
      "Easy setup and takedown",
      "Available in multiple themes and colors",
    ],
    color: "from-pink-500 to-pink-600",
    sizes: [
      { name: "Small Castle", dimensions: "12ft x 12ft", capacity: "5-6 children" },
      { name: "Medium Castle", dimensions: "15ft x 15ft", capacity: "7-8 children" },
      { name: "Large Castle", dimensions: "18ft x 18ft", capacity: "8-10 children" },
    ],
  },
  {
    id: "combo-bounce",
    name: "Combo Bouncy Houses",
    description: "Get the best of both worlds with our combo units featuring bouncing areas, slides, and more!",
    image: "https://doorcountybouncyhouse.com/images/carnival-tickets-bouncy-house.jpeg",
    features: [
      "Bounce area plus additional features",
      "Slides, basketball hoops, or climbing walls",
      "Perfect for varied age groups",
      "Keeps children entertained longer",
      "Great value for multiple activities",
    ],
    color: "from-green-500 to-green-600",
    sizes: [
      { name: "Slide Combo", dimensions: "18ft x 15ft", capacity: "6-8 children" },
      { name: "Sports Combo", dimensions: "20ft x 15ft", capacity: "8-10 children" },
      { name: "Deluxe Combo", dimensions: "25ft x 20ft", capacity: "10-12 children" },
    ],
  },
  {
    id: "water-slides",
    name: "Water Slides & Splash Zones",
    description: "Beat the summer heat with our exciting water slides and splash bouncy houses!",
    image: "https://doorcountybouncyhouse.com/images/tropical-water-slide-bouncy-house.jpeg",
    features: [
      "Perfect for hot summer days",
      "Slides with splash pools",
      "Water cannons and features",
      "Durable water-resistant materials",
      "Available May through September",
    ],
    color: "from-cyan-500 to-cyan-600",
    sizes: [
      { name: "Single Lane Slide", dimensions: "25ft x 12ft", capacity: "6-8 children" },
      { name: "Double Lane Slide", dimensions: "30ft x 15ft", capacity: "8-10 children" },
      { name: "Splash Zone Combo", dimensions: "25ft x 20ft", capacity: "10-12 children" },
    ],
  },
  {
    id: "themed-bounce",
    name: "Themed Bouncy Houses",
    description:
      "Make your event extra special with our themed bouncy houses featuring popular characters and designs!",
    image: "https://doorcountybouncyhouse.com/images/ninja-themed-bouncy-house.jpeg",
    features: [
      "Exciting character themes",
      "Visually appealing designs",
      "Perfect for themed parties",
      "Memorable photo opportunities",
      "Kids' favorite characters",
    ],
    color: "from-purple-500 to-purple-600",
    sizes: [
      { name: "Ninja Adventure", dimensions: "15ft x 15ft", capacity: "6-8 children" },
      { name: "Princess Castle", dimensions: "15ft x 15ft", capacity: "6-8 children" },
      { name: "Superhero Headquarters", dimensions: "18ft x 15ft", capacity: "8-10 children" },
    ],
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}
