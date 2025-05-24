import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Info, Check } from "lucide-react"
import PageLayout from "@/components/page-layout"
import { products } from "@/data/products"

export default function ProductsPage() {
  return (
    <PageLayout activeLink="Products">
      <section className="w-full py-12 md:py-16 lg:py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors mb-4">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-yellow-400 px-3 py-1 text-sm text-blue-900 font-bold">
                Our Products
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md">
                Bouncy House Rentals
              </h1>
              <p className="max-w-[900px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our wide selection of premium bouncy houses for your next event in Door County
              </p>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-16">
            {products.map((product) => (
              <div key={product.id} id={product.id} className="scroll-mt-20">
                <div
                  className={`bg-gradient-to-br ${product.color} text-white rounded-xl overflow-hidden shadow-xl mb-8`}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{product.name}</h2>
                      <p className="text-white/90 mb-6">{product.description}</p>
                      <div className="space-y-3 mb-6">
                        <h3 className="font-bold text-white">Features:</h3>
                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href="#contact"
                        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-2 rounded-md text-center"
                      >
                        Book This Bouncy House
                      </a>
                    </div>
                    <div className="relative h-80 md:h-auto">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover rounded-tr-xl rounded-br-xl md:rounded-bl-none md:rounded-tr-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Available Sizes */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Available Sizes & Specifications</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    {product.sizes.map((size, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <h4 className="font-bold text-blue-700 mb-2">{size.name}</h4>
                        <div className="text-sm space-y-1 text-gray-700">
                          <p className="flex items-center gap-1">
                            <Info className="h-4 w-4 text-blue-500" />
                            <span>Dimensions: {size.dimensions}</span>
                          </p>
                          <p className="flex items-center gap-1">
                            <Info className="h-4 w-4 text-blue-500" />
                            <span>Capacity: {size.capacity}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Information */}
          <div
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 md:p-8 shadow-lg mt-12"
            id="contact"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Ready to Book Your Bouncy House?</h2>
                <p className="mb-6">
                  Contact us today to check availability and reserve the perfect bouncy house for your next event in
                  Door County!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-yellow-300" />
                    <span>Free delivery and setup within Door County</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-yellow-300" />
                    <span>Flexible rental periods - 4 hour, 8 hour, or full day options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-yellow-300" />
                    <span>Special discounts for weekday rentals and multiple bookings</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a
                    href="mailto:info@doorcountybouncyhouse.com"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-2 rounded-md text-center"
                  >
                    Book Now
                  </a>
                  <a
                    href="/contact"
                    className="inline-block bg-white hover:bg-blue-50 text-blue-900 px-6 py-2 rounded-md text-center font-bold"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
                <Image
                  src="https://images.doorcountybouncyhouse.com/images/bouncy-house-hero.jpg"
                  alt="Happy children enjoying a bouncy house"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
