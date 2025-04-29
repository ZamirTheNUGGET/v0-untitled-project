import Link from "next/link"
import { ArrowLeft, Plus, Minus } from "lucide-react"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/button"
import { faqs } from "@/data/faqs"

export default function FAQPage() {
  return (
    <PageLayout activeLink="FAQ">
      <section className="w-full py-12 md:py-16 lg:py-20 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors mb-4">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-yellow-400 px-3 py-1 text-sm text-blue-900 font-bold">
                Frequently Asked Questions
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white drop-shadow-md">
                Everything You Need to Know
              </h1>
              <p className="max-w-[900px] text-white text-opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our bouncy house rentals
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {/* FAQ Accordion */}
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl overflow-hidden shadow-lg"
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6 font-medium">
                    <h2 className="text-xl font-bold">{faq.question}</h2>
                    <div className="ml-4">
                      <Plus className="h-5 w-5 text-white group-open:hidden" />
                      <Minus className="h-5 w-5 text-white hidden group-open:block" />
                    </div>
                  </summary>
                  <div className="p-6 pt-0 bg-white/10 backdrop-blur-sm">
                    <p className="text-white/90">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}

            {/* Still Have Questions */}
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 text-blue-900 rounded-xl p-6 md:p-8 shadow-lg mt-12">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="mb-6">
                We're here to help! Contact us directly and we'll be happy to answer any additional questions you may
                have about our bouncy house rentals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact">Contact Us</Button>
                <Button variant="secondary" href="tel:+19203332178">
                  Call (920) 333-2178
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
