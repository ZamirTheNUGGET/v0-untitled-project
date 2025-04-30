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
  content: string
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
    content: `
      <p class="text-lg">
        Welcome to Door County Bouncy House! We're Zamir and Zohran Overbeck. We are two brothers on a
        mission to turn ordinary gatherings into unforgettable celebrations in Door County with our bouncy
        houses.
      </p>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">Our Story</h2>
      <p>
        Our journey began at a birthday party when we wanted to rent a bouncy house for our own birthdays.
        The nearest company was all the way in Green Bay. That's when we had an idea: why not bring the fun
        closer to home?
      </p>
      <p>
        We started Door County Bouncy Houses so families right here in Door County could enjoy the same
        excitement and happiness we loved as kids.
      </p>
      <p>
        Whether it's a birthday bash, a community festival, or a backyard family reunion, we believe every
        kid and adult deserves a chance to laugh, jump, and make joyful memories together.
      </p>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">
        Our Mission: We Bring The Bounce So You Can Bring The Fun!
      </h2>

      <h3 class="text-xl font-bold text-blue-700 mt-6 mb-3">Why Choose Door County Bouncy Houses</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>
          <strong>Safety First:</strong> We carefully inspect and sanitize all our equipment to keep every
          event safe and worry-free.
        </li>
        <li>
          <strong>Plenty of Options:</strong> From classic castles to creative party games, we offer a
          variety of rentals to fit any theme or occasion.
        </li>
        <li>
          <strong>Service with Heart:</strong> As a family-run business, we treat every customer like a
          neighbor…well, 'cause we probably are your neighbor! Plus, it's all hassle-free. We take care of
          the delivery, setup, and takedown so you can focus on the fun.
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">Serving Door County and Beyond</h2>
      <p>
        We'll deliver and set up bouncy houses all across Door County, from Brussels, Sturgeon Bay
        Jacksonport, Baileys Harbor, Egg Harbor, Fish Creek, Sister Bay, Ellison Bay, to the top of the
        Thumb. Wherever your celebration is, we'll bring the bounce so you can bring the fun!
      </p>
      <p>
        When you book with us, you're supporting a local family business—and helping two brothers chase
        their dream of spreading joy throughout our community.
      </p>

      <p class="text-lg font-bold text-blue-800 mt-8">Thanks for visiting our site!</p>
      <p class="text-lg font-bold text-blue-800">Zamir & Zohran</p>
    `,
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
    content: `
      <p class="text-lg">
        Planning a birthday party in Door County and want to make it extra special? At Door County Bouncy Houses, we
        deliver fun, excitement, and unforgettable memories—with safe and vibrant bouncy house rentals that match your
        child's favorite games. Not sure how to pull off a themed party? Don't worry! These step-by-step ideas will help
        you create a party Martha Stewart would be proud of, no matter your DIY skills!
      </p>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">🏰 Why Choose Door County Bouncy Houses?</h2>
      <ul class="list-disc pl-6 space-y-2">
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

      <div class="bg-purple-100 p-6 rounded-lg mt-8 border-l-4 border-purple-500">
        <h3 class="text-xl font-bold text-purple-800 mb-2">
          🎮 Game-Themed Parties + Bouncy Houses = The Ultimate Birthday Bash
        </h3>
        <p>
          Kids love Minecraft, Fortnite, Roblox, and Among Us—so we've created four easy-to-follow party guides packed
          with simple food, decoration, and activity ideas. Ready to get started?
        </p>
      </div>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">🧱 Minecraft-Themed Party: Dig Into Adventure!</h2>
      <h3 class="text-xl font-bold text-blue-700 mt-6 mb-3">Easy Food Ideas for a Minecraft-Themed Party:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>
          <strong>Minecraft Cookies:</strong> Mix up your favorite sugar cookie dough, shape into squares, and press in
          mini chocolate chips to create a pixel look. Bake as directed and display on a green napkin for "grass."
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

      <h3 class="text-xl font-bold text-blue-700 mt-6 mb-3">Simple Decorations:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>
          <strong>Pixelated Balloons:</strong> Attach small square sticky notes to regular balloons to create a
          pixelated effect.
        </li>
        <li>
          <strong>Creeper Face Cups:</strong> Draw a Creeper face on green cups using a black marker.
        </li>
        <li>
          <strong>Block Building Station:</strong> Set up a table with cardboard boxes wrapped in colored paper for kids
          to build their own Minecraft structures.
        </li>
      </ul>

      <h3 class="text-xl font-bold text-blue-700 mt-6 mb-3">Perfect Bouncy House Pairing: Our Castle Bouncer</h3>
      <p>
        Our Castle Bouncer is the perfect addition to your Minecraft party! Its block-like structure mimics the game's
        aesthetic, and kids can pretend they're bouncing through the Minecraft world.
      </p>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">🎯 Fortnite-Themed Party: Battle Royale Fun!</h2>
      <h3 class="text-xl font-bold text-blue-700 mt-6 mb-3">Easy Food Ideas:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>
          <strong>Supply Drop Snacks:</strong> Fill small blue boxes with treats and label them "Supply Drops."
        </li>
        <li>
          <strong>Shield Potion:</strong> Serve blue sports drinks or blue punch in small bottles labeled "Shield
          Potion."
        </li>
        <li>
          <strong>Victory Royale Cake:</strong> Top a simple cake with a "Victory Royale" sign made from cardstock.
        </li>
      </ul>

      <div class="bg-yellow-100 p-6 rounded-lg mt-8 border-l-4 border-yellow-500">
        <h3 class="text-xl font-bold text-yellow-800 mb-2">Ready to Level Up Your Child's Birthday?</h3>
        <p>
          Contact Door County Bouncy House today to reserve the perfect game-themed bouncy house for your child's next
          birthday party!
        </p>
      </div>
    `,
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
    content: `
      <p class="text-lg">
        Door County is the perfect backdrop for unforgettable celebrations, from Lake Michigan or from the Bayside of the county. Here are some of the best occasions to rent a <strong>bouncy house in Door County</strong>:
      </p>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">🎉 Rent a Bounce House for a Birthday Party</h2>
      <p>
        Looking for a way to make your child's birthday party unforgettable? A bouncy house is guaranteed to keep kids entertained for hours and creates memories they'll cherish for years. We deliver the fun right to your Door County location—just add cake and laughter!
      </p>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">👨‍👩‍👧‍👦 Make Your Family Reunion or Neighborhood Gathering Extra Fun</h2>
      <p>
        Turn your next family reunion or neighborhood get-together into a celebration everyone will remember. Our Door County Bouncy Houses keep the kids busy and happy, so adults can relax, reconnect, and enjoy the day.
      </p>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">🎪 Festivals & Community Gatherings</h2>
      <p>
        Want to make your festival booth or community event the hottest spot in Door County? Rent a bouncy house! Kids can't resist the fun, making it a great way to attract families and create a lively atmosphere at any gathering.
      </p>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">🥳 Add Excitement to Church Picnics and School Fundraisers</h2>
      <p>
        Looking for a way to boost the energy at your next church picnic or school fundraiser? A bouncy house is the perfect addition—bringing color, excitement, and joy to every attendee, young and old.
      </p>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">🏖️ Beach Parties and Lakeside Events</h2>
      <p>
        Door County's beautiful beaches and lakeshores make the perfect setting for summer celebrations. Add a bouncy house to your beach party or lakeside event for an extra splash of fun that will delight guests of all ages.
      </p>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">🍎 Fall Harvest Festivals</h2>
      <p>
        Door County is famous for its fall harvest celebrations. Whether it's an apple orchard event or a pumpkin patch festival, a colorful bouncy house adds an extra element of excitement that complements the seasonal fun.
      </p>

      <div class="bg-green-100 p-6 rounded-lg mt-8 border-l-4 border-green-500">
        <h3 class="text-xl font-bold text-green-800 mb-2">Ready to bounce into your next event?</h3>
        <p class="mb-0">
          Contact Door County Bouncy House today to reserve the perfect inflatable for your upcoming celebration!
        </p>
      </div>
    `,
    relatedPosts: ["planning-the-perfect-bouncy-house-party", "why-our-door-county-bouncy-house-rentals-are-the-best"],
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
    content: `
      <p class="text-lg">
        Looking to create unforgettable memories for your next event in Door County? Our Door County Bouncy House rental service literally delivers hours of fun for kids! Whether you're planning a birthday party, a family reunion, or a neighborhood get-together, our inflatable rentals are the perfect way to bring joy and excitement to your guests.
      </p>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">🏆 Premium Quality Inflatables</h2>
      <p>
        We take pride in offering only the highest quality bouncy houses and obstacle courses in Door County. Our inflatables are:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Made from commercial-grade materials that are built to last</li>
        <li>Regularly inspected and maintained to ensure safety</li>
        <li>Thoroughly cleaned and sanitized between each rental</li>
        <li>Vibrant and colorful to create an exciting atmosphere</li>
      </ul>

      <h2 class="text-2xl font-bold text-blue-800 mt-8 mb-4">🚚 Hassle-Free Delivery and Setup</h2>
      <p>
        When you rent from Door County Bouncy House, we handle all the logistics so you can focus on enjoying your event:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Prompt delivery to your location anywhere in Door County</li>
        <li>Professional setup by our experienced team</li>
        <li>Safety instructions and guidelines provided</li>
        <li>Takedown and removal when your rental period ends</li>
      </ul>

      <div class="bg-yellow-100 p-6 rounded-lg mt-8 border-l-4 border-yellow-500">
        <h3 class="text-xl font-bold text-yellow-800 mb-2">We Bring The Bounce So You Can Bring The Fun!</h3>
        <p class="mb-0">
          Contact Door County Bouncy House today to reserve the perfect inflatable for your upcoming celebration!
        </p>
      </div>
    `,
    relatedPosts: ["top-5-bouncy-house-safety-tips", "planning-the-perfect-bouncy-house-party"],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return blogPosts.filter((post) => slugs.includes(post.slug))
}
