"use client"

import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Brain, HeartHandshake, Sparkles, MessageSquareText, Lightbulb, GraduationCap, ArrowRight } from "lucide-react"

// Assessment categories data
const assessmentCategories = [
  {
    id: "speech-language",
    name: "Speech & Language",
    description: "Comprehensive evaluation of communication skills, language development, and speech patterns",
    icon: MessageSquareText,
    color: "bg-blue-100 text-blue-700",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "social-emotional",
    name: "Social Emotional",
    description: "Assessment of emotional regulation, social skills, and interpersonal development",
    icon: HeartHandshake,
    color: "bg-purple-100 text-purple-700",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "occupational-therapy",
    name: "Occupational Therapy",
    description: "Evaluation of fine motor skills, sensory processing, and daily living activities",
    icon: Sparkles,
    color: "bg-green-100 text-green-700",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "behavior-intervention",
    name: "Behavior Intervention",
    description: "Assessment of behavioral patterns, challenges, and intervention strategies",
    icon: Brain,
    color: "bg-amber-100 text-amber-700",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "psychoeducation",
    name: "Psychoeducation",
    description: "Comprehensive cognitive and educational assessments for learning needs",
    icon: GraduationCap,
    color: "bg-red-100 text-red-700",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function AssessmentsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Professional Assessments</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive assessment services provide diagnostic insights and guide personalized intervention
              planning for your child's unique developmental needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="bg-[#4b2e83] hover:bg-[#4b2e83]/90" size="lg" asChild>
                <Link href="/consultation">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Our Assessments?</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our assessments are conducted by licensed professionals using evidence-based tools and methodologies to
            provide accurate insights into your child's development.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Comprehensive Insights</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Our assessments provide detailed insights into your child's strengths, challenges, and developmental
                needs.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Expert Administration</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                All assessments are conducted by licensed professionals with specialized training and experience.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Personalized Planning</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Assessment results guide the development of tailored intervention plans to address your child's specific
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Categories Section */}
      <div id="categories" className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Assessment Categories</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our range of professional assessment services designed to evaluate different aspects of your
              child's development.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <Tabs defaultValue="speech-language" className="w-full">
              <div className="mb-8 overflow-x-auto">
                <TabsList className="inline-flex h-auto p-1 w-full justify-start sm:justify-center">
                  {assessmentCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="px-4 py-2 data-[state=active]:bg-[#4b2e83] data-[state=active]:text-white"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {assessmentCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-6">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${category.color.split(" ")[0]}`}
                        >
                          <category.icon className={`h-5 w-5 ${category.color.split(" ")[1]}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{category.name} Assessment</h3>
                      </div>
                      <p className="text-lg text-gray-600 mb-6">{category.description}</p>

                      <div className="space-y-4 mb-8">
                        <h4 className="font-semibold text-gray-900">What to Expect:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4b2e83] text-xs font-semibold text-white mt-0.5">
                              1
                            </span>
                            <span>Initial consultation to understand concerns and goals</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4b2e83] text-xs font-semibold text-white mt-0.5">
                              2
                            </span>
                            <span>Comprehensive assessment using standardized tools</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4b2e83] text-xs font-semibold text-white mt-0.5">
                              3
                            </span>
                            <span>Detailed report with findings and recommendations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4b2e83] text-xs font-semibold text-white mt-0.5">
                              4
                            </span>
                            <span>Follow-up meeting to discuss results and next steps</span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-[#4b2e83] hover:bg-[#4b2e83]/90" asChild>
                          <Link href={`/assessments-catalog/${category.id}`}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to common questions about our assessment services.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      How long does an assessment typically take?
                    </h3>
                    <span className="relative h-5 w-5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-base leading-7 text-gray-600">
                      Assessment duration varies depending on the type and complexity. Most assessments require 1-3
                      sessions, each lasting 1-2 hours. The entire process, including report writing and follow-up,
                      typically takes 2-3 weeks.
                    </p>
                  </div>
                </details>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">What age groups do you assess?</h3>
                    <span className="relative h-5 w-5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-base leading-7 text-gray-600">
                      We provide assessments for children from birth through adolescence (0-18 years). Each assessment
                      is tailored to be developmentally appropriate for your child's age.
                    </p>
                  </div>
                </details>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      How should we prepare for an assessment?
                    </h3>
                    <span className="relative h-5 w-5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-base leading-7 text-gray-600">
                      We recommend ensuring your child is well-rested and has eaten before the assessment. Bring any
                      relevant medical records, previous evaluations, or school reports. We'll provide specific
                      preparation instructions when you schedule your appointment.
                    </p>
                  </div>
                </details>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      Are parents involved in the assessment process?
                    </h3>
                    <span className="relative h-5 w-5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-base leading-7 text-gray-600">
                      Yes, parent involvement is essential. You'll complete questionnaires about your child's
                      development and participate in interviews. For younger children, parents are typically present
                      during the assessment. For older children, parents may be involved in portions of the assessment.
                    </p>
                  </div>
                </details>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      What happens after the assessment?
                    </h3>
                    <span className="relative h-5 w-5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-base leading-7 text-gray-600">
                      After completing the assessment, our specialists will analyze the results and prepare a
                      comprehensive report. We'll schedule a follow-up meeting to discuss findings, recommendations, and
                      next steps for intervention or support.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#4b2e83]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
            <br />
            Explore our assessment options.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Button className="bg-white text-[#4b2e83] hover:bg-gray-100" size="lg" asChild>
              <Link href="#categories">View Categories</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

