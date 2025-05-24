import Link from "next/link"
import { Mail, MapPin, Calendar } from "lucide-react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/button"
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

          <div className="space-y-8">
            {/* Contact Information */}
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
                href="mailto:doorcountybouncyhouse@gmail.com"
                className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors block mb-4"
              >
                doorcountybouncyhouse@gmail.com
              </a>
              <div className="p-3 bg-blue-100 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-800">
                  <span className="font-bold">When emailing, please include:</span> Your contact details (phone/text),
                  dates of your event, and location of your event.
                </p>
              </div>
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
              <p className="text-gray-700 mb-4">
                We proudly serve all of Door County including Sturgeon Bay, Egg Harbor, Fish Creek, Sister Bay, Baileys
                Harbor, Ephraim, and surrounding areas.
              </p>

              {/* Door County Map */}
              <div className="relative w-full h-96 rounded-lg overflow-hidden border-2 border-blue-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186590.0234567!2d-87.5!3d45.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8803b7c0b0b0b0b0%3A0x0!2sDoor%20County%2C%20WI!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Door County Service Area Map"
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Interactive map showing our Door County service area
              </p>
            </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:doorcountybouncyhouse@gmail.com" variant="default">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </Button>
              <Button href="tel:+19203332178" variant="secondary">
                Call (920) 333-2178
              </Button>
            </div>
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
