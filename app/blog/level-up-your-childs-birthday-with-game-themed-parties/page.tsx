import { Button } from "@/components/button"
import BlogLayout from "@/components/blog-layout"
import { getBlogPost } from "@/data/blog-posts"

export default function GameThemedPartiesPage() {
  const post = getBlogPost("level-up-your-childs-birthday-with-game-themed-parties")!

  return (
    <BlogLayout
      title={post.title}
      date={post.date}
      readTime={post.readTime}
      category={post.category}
      image="https://images.doorcountybouncyhouse.com/images/fortnight_bouncy_house.jpg"
      imageAlt="Fortnite-themed bouncy house obstacle course - perfect for game-themed birthday parties"
      color={post.color}
    >
      <p className="text-lg">
        Planning a birthday party in Door County and want to make it extra special? At Door County Bouncy Houses, we
        deliver fun, excitement, and unforgettable memories—with safe and vibrant bouncy house rentals that match your
        child's favorite games. Not sure how to pull off a themed party? Don't worry! These step-by-step ideas will help
        you create a party Martha Stewart would be proud of, no matter your DIY skills!
      </p>

      <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">🏰 Why Choose Door County Bouncy Houses?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Safe & Clean:</strong> Every inflatable is carefully sanitized and inspected for your child's safety
          and your peace of mind.
        </li>
        <li>
          <strong>Themes for Every Child:</strong> From classic castles to game-inspired adventures, we have a bouncy
          house to suit any party theme.
        </li>
        <li>
          <strong>Stress-Free Setup:</strong> Our team delivers, sets up, and takes down your bouncy house—so you can
          relax and enjoy the party.
        </li>
      </ul>

      {/* Content sections for each game theme */}
      <div className="bg-purple-100 p-6 rounded-lg mt-8 border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-purple-800 mb-2">
          🎮 Game-Themed Parties + Bouncy Houses = The Ultimate Birthday Bash
        </h3>
        <p>
          Kids love Minecraft, Fortnite, Roblox, and Among Us—so we've created four easy-to-follow party guides packed
          with simple food, decoration, and activity ideas. Ready to get started?
        </p>
      </div>

      {/* Minecraft section */}
      <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">🧱 Minecraft-Themed Party: Dig Into Adventure!</h2>
      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Easy Food Ideas for a Minecraft-Themed Party:</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Minecraft Cookies:</strong> Mix up your favorite sugar cookie dough, shape into squares, and press in
          mini chocolate chips to create a pixel look.
        </li>
        <li>
          <strong>Creeper Juice:</strong> Add a few drops of green food coloring to lemonade or sprite for a refreshing
          "Creeper Juice" that kids will love.
        </li>
        <li>
          <strong>Block Sandwiches:</strong> Cut sandwiches into squares and arrange them in a block pattern on a
          serving tray.
        </li>
      </ul>

      {/* More game sections would go here */}

      <div className="bg-yellow-100 p-6 rounded-lg mt-8 border-l-4 border-yellow-500">
        <h3 className="text-xl font-bold text-yellow-800 mb-2">Ready to Level Up Your Child's Birthday?</h3>
        <p>
          Contact Door County Bouncy House today to reserve the perfect game-themed bouncy house for your child's next
          birthday party!
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl p-6 md:p-8 shadow-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Book Your Game-Themed Party?</h2>
        <p className="mb-6">
          Contact us today to reserve the perfect bouncy house for your child's game-themed birthday party!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </BlogLayout>
  )
}
