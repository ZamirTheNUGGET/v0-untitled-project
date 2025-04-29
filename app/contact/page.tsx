import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Clock, Calendar, Facebook, Instagram } from "lucide-react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/button"
import ContactForm from "@/components/contact-form"
import { shortFaqs } from "@/data/faqs"

export default function ContactPage() {
  return (
    <PageLayout activeLink="Contact">
      <section className="w-full py-12 md:py-16 lg:py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-yellow-400 px-3 py-1 text-sm text-blue-900 font-bold">
                Get In Touch
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md">
                Contact Door County Bouncy House
              </h1>
              <p className="max-w-[900px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're here to help make your next event unforgettable!
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800">Email</h3>
                    <p className="text-gray-600">Send us a message</p>
                  </div>
                </div>
                <a
                  href="mailto:info@doorcountybouncyhouse.com"
                  className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  info@doorcountybouncyhouse.com
                </a>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800">Service Area</h3>
                    <p className="text-gray-600">We deliver throughout Door County</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">
                  We proudly serve all of Door County including Sturgeon Bay, Egg Harbor, Fish Creek, Sister Bay,
                  Baileys Harbor, Ephraim, and surrounding areas.
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Seasonal Availability:</span> Our bouncy house rental services are
                  available from June through the end of August.
                </p>
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://doorcountybouncyhouse.com/images/door-county-map.jpg"
                    alt="Door County Map"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800">Business Hours</h3>
                    <p className="text-gray-600">When you can reach us</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>By appointment only</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-sm text-yellow-800">
                    <span className="font-bold">Note:</span> We are available from June to the end of August. Delivery
                    and setup times are available outside of office hours by appointment.
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="mb-6">Follow us on social media for special offers, event photos, and more!</p>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 transition-colors p-3 rounded-full"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 transition-colors p-3 rounded-full"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
              <p className="text-white/90 mt-2">Quick answers to common questions about our bouncy house rentals</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="grid gap-6 md:grid-cols-2">
                {shortFaqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-bold text-blue-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/faq" className="text-blue-600 hover:text-blue-800 font-medium">
                  View all FAQs →
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button href="/contact-form" variant="secondary">
              <Mail className="h-5 w-5 mr-2" />
              Go to Contact Form
            </Button>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg mt-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-800">Seasonal Availability</h3>
                <p className="text-gray-600">When we operate</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Door County Bouncy House operates seasonally from{" "}
              <span className="font-bold">June through the end of August</span>, providing bouncy house rentals during
              the peak summer season.
            </p>
            <div className="p-3 bg-blue-100 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-blue-800">
                <span className="font-bold">Pro Tip:</span> Book early for July and August weekends as these dates fill
                up quickly!
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
