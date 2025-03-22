"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AppointmentBooking from "@/components/consultation/appointment-booking"
import Link from "next/link"

export default function ConsultationPage() {
  const [activeTab, setActiveTab] = useState("consultation")
  const [showBooking, setShowBooking] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)

  if (showBooking) {
    return <AppointmentBooking />
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Consultation & Packages</h1>
          <p className="mt-4 text-lg text-gray-500">
            Book a consultation with our specialists or choose a therapy package that fits your child's needs
          </p>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="consultation" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="consultation">Consultation</TabsTrigger>
              <TabsTrigger value="packages">Therapy Packages</TabsTrigger>
            </TabsList>

            <TabsContent value="consultation" className="mt-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Book a Consultation</h2>
                <p className="text-gray-600 mb-6">
                  Schedule a free initial consultation with one of our specialists to discuss your child's needs and
                  determine the best approach for their development.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">What to Expect</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">
                          30-minute comprehensive discussion about your child's developmental needs
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Overview of our assessment process and therapy options</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Opportunity to ask questions and address concerns</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Personalized recommendations for next steps</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Schedule Your Free Consultation</h3>
                    <p className="text-gray-600 mb-4">
                      Select a date and time that works for you, and our team will reach out to confirm your
                      appointment.
                    </p>
                    <Button className="w-full" onClick={() => setShowBooking(true)}>
                      Book Free Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="packages" className="mt-6">
              <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Explore Our Therapy Packages</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We offer a variety of comprehensive therapy packages designed to support your child's unique
                  developmental needs. Visit our packages page to view detailed information about each option and find
                  the perfect fit for your family.
                </p>
                <Button size="lg" asChild>
                  <Link href="/packages">View All Packages</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {selectedPackage && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">
                    Checkout: {packages.find((p) => p.id === selectedPackage)?.name}
                  </h2>
                  <button onClick={() => setSelectedPackage(null)} className="text-gray-500 hover:text-gray-700">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Order Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-3">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Package:</span>
                        <span className="font-medium">{packages.find((p) => p.id === selectedPackage)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <span className="font-medium">${packages.find((p) => p.id === selectedPackage)?.price}</span>
                      </div>
                      {packages.find((p) => p.id === selectedPackage)?.discount && (
                        <div className="flex justify-between text-green-600">
                          <span>Savings:</span>
                          <span className="font-medium">
                            ${packages.find((p) => p.id === selectedPackage)?.discount}
                          </span>
                        </div>
                      )}
                      <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                        <span>Total:</span>
                        <span>${packages.find((p) => p.id === selectedPackage)?.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div>
                    <h3 className="font-medium text-lg mb-3">Payment Options</h3>
                    <div className="space-y-3">
                      <div className="border rounded-lg p-3 flex items-center">
                        <input
                          type="radio"
                          id="pay-full"
                          name="payment-option"
                          className="h-4 w-4 text-blue-600"
                          defaultChecked
                        />
                        <label htmlFor="pay-full" className="ml-3 flex flex-col">
                          <span className="font-medium">Pay in full</span>
                          <span className="text-sm text-gray-500">
                            One-time payment of ${packages.find((p) => p.id === selectedPackage)?.price}
                          </span>
                        </label>
                      </div>

                      <div className="border rounded-lg p-3 flex items-center">
                        <input type="radio" id="pay-monthly" name="payment-option" className="h-4 w-4 text-blue-600" />
                        <label htmlFor="pay-monthly" className="ml-3 flex flex-col">
                          <span className="font-medium">Monthly payments</span>
                          <span className="text-sm text-gray-500">
                            2 payments of ${Math.round(packages.find((p) => p.id === selectedPackage)?.price / 2)}/month
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div>
                    <h3 className="font-medium text-lg mb-3">Payment Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                          className="w-full p-2 border rounded-md"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
                          <input type="text" id="expiry" placeholder="MM/YY" className="w-full p-2 border rounded-md" />
                        </div>
                        <div>
                          <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                            CVC
                          </label>
                          <input type="text" id="cvc" placeholder="123" className="w-full p-2 border rounded-md" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name on Card
                        </label>
                        <input type="text" id="name" placeholder="John Doe" className="w-full p-2 border rounded-md" />
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-start">
                    <input type="checkbox" id="terms" className="h-4 w-4 mt-1 text-blue-600" />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                      I agree to the{" "}
                      <a href="/terms" className="text-blue-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button onClick={() => setSelectedPackage(null)} variant="outline" className="flex-1">
                    Cancel
                  </Button>
                  <Button className="flex-1">Complete Purchase</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const packages = [
  {
    id: "single-session",
    name: "Single Session",
    price: 90,
    description: "One-time consultation or therapy session",
    features: {
      assessment: true,
      sessions: "1 therapy session",
      progress: false,
      dashboard: false,
      calendar: false,
      videoReviews: false,
      messaging: false,
      parentTraining: false,
      caseManager: false,
    },
    recommended: false,
  },
  {
    id: "nurture-path",
    name: "Nurture Path",
    price: 320,
    perSession: 80,
    discount: 40,
    description: "Essential support for developmental needs",
    features: {
      assessment: true,
      sessions: "4 therapy sessions",
      progress: "Monthly progress meeting",
      dashboard: true,
      calendar: true,
      videoReviews: false,
      messaging: false,
      parentTraining: false,
      caseManager: true,
    },
    recommended: false,
  },
  {
    id: "empower-path",
    name: "Empower Path",
    price: 600,
    perSession: 75,
    discount: 120,
    description: "Balanced support for developmental needs",
    features: {
      assessment: true,
      sessions: "8 therapy sessions",
      progress: "Bi-monthly progress meetings",
      dashboard: true,
      calendar: true,
      videoReviews: "2 video reviews",
      messaging: false,
      parentTraining: true,
      caseManager: true,
    },
    recommended: false,
  },
  {
    id: "thrive-path",
    name: "Thrive Path",
    price: 840,
    perSession: 70,
    discount: 240,
    description: "Comprehensive support for developmental needs",
    features: {
      assessment: true,
      sessions: "12 therapy sessions",
      progress: "Regular coordination meetings",
      dashboard: true,
      calendar: true,
      videoReviews: "4 video reviews",
      messaging: true,
      parentTraining: true,
      caseManager: true,
    },
    recommended: true,
  },
]

const featureLabels = {
  assessment: "In-depth initial assessment with a multidisciplinary review",
  sessions: "Therapy sessions to be used flexibly",
  progress: "Progress/coordination meetings",
  dashboard: "Personalized dashboard with progress tracking",
  calendar: "Calendar integration with reminders",
  videoReviews: "Video reviews with detailed feedback",
  messaging: "Secure messaging and live chat with therapists",
  parentTraining: "Parental guidance sessions",
  caseManager: "Dedicated case manager for coordination",
}

