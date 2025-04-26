import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ShoppingBag, BookOpen, Phone, HelpCircle, Calendar, Clock, Tag, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"
import Logo from "@/components/logo"

export default function GameThemedPartiesPage() {
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
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl overflow-hidden shadow-xl mb-8">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-white/80 mb-4">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      July 5, 2025
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-4 w-4" />5 min read
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      Party Planning
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Level Up Your Child's Birthday: Epic Minecraft, Fortnite, Among Us & Roblox Party Ideas
                  </h1>
                </div>
                <div className="relative w-full h-[400px] md:h-[500px] border-t-4 border-white/30">
                  <Image
                    src="/placeholder.svg?height=600&width=1200&text=Game+Themed+Parties"
                    alt="Game-themed birthday party with bouncy house"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/80 to-transparent p-4 md:p-6">
                    <div className="text-white text-center">
                      <p className="text-lg font-bold">Create unforgettable themed celebrations with bouncy houses!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="bg-blue-50 rounded-xl p-6 md:p-8 shadow-lg mb-8">
                <div className="prose prose-blue max-w-none">
                  <p className="text-lg">
                    Planning a birthday party in Door County and want to make it extra special? At Door County Bouncy
                    Houses, we deliver fun, excitement, and unforgettable memories—with safe and vibrant bouncy house
                    rentals that match your child's favorite games. Not sure how to pull off a themed party? Don't
                    worry! These step-by-step ideas will help you create a party Martha Stewart would be proud of, no
                    matter your DIY skills!
                  </p>

                  <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">
                    🏰 Why Choose Door County Bouncy Houses?
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Safe & Clean:</strong> Every inflatable is carefully sanitized and inspected for your
                      child's safety and your peace of mind.
                    </li>
                    <li>
                      <strong>Themes for Every Child:</strong> From classic castles to game-inspired adventures, we have
                      a bouncy house to suit any party theme.
                    </li>
                    <li>
                      <strong>Stress-Free Setup:</strong> Our team delivers, sets up, and takes down your bouncy
                      house—so you can relax and enjoy the party.
                    </li>
                  </ul>

                  <div className="bg-purple-100 p-6 rounded-lg mt-8 border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-800 mb-2">
                      🎮 Game-Themed Parties + Bouncy Houses = The Ultimate Birthday Bash
                    </h3>
                    <p>
                      Kids love Minecraft, Fortnite, Roblox, and Among Us—so we've created four easy-to-follow party
                      guides packed with simple food, decoration, and activity ideas. Ready to get started?
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">
                    🧱 Minecraft-Themed Party: Dig Into Adventure!
                  </h2>
                  <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">
                    Easy Food Ideas for a Minecraft-Themed Party:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Minecraft Cookies:</strong> Mix up your favorite sugar cookie dough, shape into squares,
                      and press in mini chocolate chips to create a pixel look. Bake as directed and display on a green
                      napkin for "grass."
                    </li>
                    <li>
                      <strong>Creeper Juice:</strong> Add a few drops of green food coloring to lemonade or sprite for a
                      refreshing "Creeper Juice" that kids will love.
                    </li>
                    <li>
                      <strong>Block Sandwiches:</strong> Cut sandwiches into squares and arrange them in a block pattern
                      on a serving tray.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Simple Decorations:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Pixelated Balloons:</strong> Attach small square sticky notes to regular balloons to
                      create a pixelated effect.
                    </li>
                    <li>
                      <strong>Creeper Face Cups:</strong> Draw a Creeper face on green cups using a black marker.
                    </li>
                    <li>
                      <strong>Block Building Station:</strong> Set up a table with cardboard boxes wrapped in colored
                      paper for kids to build their own Minecraft structures.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">
                    Perfect Bouncy House Pairing: Our Castle Bouncer
                  </h3>
                  <p>
                    Our Castle Bouncer is the perfect addition to your Minecraft party! Its block-like structure mimics
                    the game's aesthetic, and kids can pretend they're bouncing through the Minecraft world.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">
                    🎯 Fortnite-Themed Party: Battle Royale Fun!
                  </h2>
                  <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Easy Food Ideas:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Supply Drop Snacks:</strong> Fill small blue boxes with treats and label them "Supply
                      Drops."
                    </li>
                    <li>
                      <strong>Shield Potion:</strong> Serve blue sports drinks or blue punch in small bottles labeled
                      "Shield Potion."
                    </li>
                    <li>
                      <strong>Victory Royale Cake:</strong> Top a simple cake with a "Victory Royale" sign made from
                      cardstock.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Simple Decorations:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Supply Llama Piñata:</strong> Purchase a colorful llama piñata and fill it with candy and
                      small toys.
                    </li>
                    <li>
                      <strong>Battle Bus Banner:</strong> Create a simple "Battle Bus" banner using blue construction
                      paper and markers.
                    </li>
                    <li>
                      <strong>Drop Zone:</strong> Use chalk to create a "drop zone" area in your yard where kids can
                      gather before activities.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">
                    Perfect Bouncy House Pairing: Our Obstacle Course
                  </h3>
                  <p>
                    Our Obstacle Course Bouncy House is ideal for Fortnite fans! Kids can race through obstacles just
                    like they're navigating the Fortnite map, adding an exciting physical challenge to your party.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">
                    👾 Among Us-Themed Party: Who's The Impostor?
                  </h2>
                  <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Easy Food Ideas:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Crewmate Cookies:</strong> Use oval-shaped cookies and colored icing to create crewmate
                      characters.
                    </li>
                    <li>
                      <strong>Impostor Punch:</strong> Serve red punch with gummy worms at the bottom as "impostors."
                    </li>
                    <li>
                      <strong>Task Snacks:</strong> Label different snacks as "tasks" that kids need to "complete" (eat)
                      during the party.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Simple Decorations:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Colored Balloons:</strong> Get balloons in the various crewmate colors (red, blue, green,
                      etc.).
                    </li>
                    <li>
                      <strong>Emergency Meeting Button:</strong> Create a large red "Emergency Meeting" button from
                      cardboard for photo opportunities.
                    </li>
                    <li>
                      <strong>Vent Covers:</strong> Place "vent" signs on floor vents around your home for an authentic
                      touch.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">
                    Perfect Bouncy House Pairing: Our Space Adventure Bouncer
                  </h3>
                  <p>
                    Our Space Adventure Bouncer creates the perfect spaceship environment for your Among Us party! Kids
                    can bounce around just like crewmates floating in space.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-800 mt-8 mb-4">
                    🎲 Roblox-Themed Party: Imagination Unleashed!
                  </h2>
                  <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Easy Food Ideas:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Roblox Character Cupcakes:</strong> Top cupcakes with square fondant pieces to create
                      Roblox character faces.
                    </li>
                    <li>
                      <strong>Robux Cookies:</strong> Make or buy round cookies and decorate them to look like Robux
                      (the in-game currency).
                    </li>
                    <li>
                      <strong>Building Block Fruit Skewers:</strong> Cut fruit into cubes and arrange on skewers for
                      healthy "building block" snacks.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Simple Decorations:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Character Cutouts:</strong> Print and cut out large Roblox character shapes for wall
                      decorations.
                    </li>
                    <li>
                      <strong>Roblox Logo Banner:</strong> Create a simple Roblox logo banner using red and white
                      construction paper.
                    </li>
                    <li>
                      <strong>Building Station:</strong> Set up a table with building blocks for kids to create their
                      own Roblox-inspired structures.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">
                    Perfect Bouncy House Pairing: Our Adventure Combo Bouncer
                  </h3>
                  <p>
                    Our Adventure Combo Bouncer with multiple play features is perfect for Roblox fans who love variety
                    in their games! With bouncing, climbing, and sliding areas, it offers different "games" within one
                    inflatable – just like the Roblox platform.
                  </p>

                  <div className="bg-yellow-100 p-6 rounded-lg mt-8 border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-800 mb-2">Ready to Level Up Your Child's Birthday?</h3>
                    <p className="mb-0">
                      Contact Door County Bouncy House today to reserve the perfect bouncy house for your game-themed
                      party! Our friendly team is ready to help you create an unforgettable celebration that will have
                      your child and their friends talking about it for years to come.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Book Your Game-Themed Party Package Today!</h2>
                <p className="mb-6">
                  Contact us to learn about our special game-themed party packages that include bouncy house rentals and
                  party planning assistance!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">Book Now</Button>
                  <Button className="bg-white hover:bg-blue-50 text-indigo-900">View All Bouncy Houses</Button>
                </div>
              </div>
            </div>
          </div>
        </article>
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
