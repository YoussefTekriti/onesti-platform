import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, GraduationCap, Lightbulb, BookOpen, LineChart } from "lucide-react"
import { CheckoutModal } from "@/components/assessments/checkout-modal"

// Assessment data
const assessments = [
  {
    id: "learning-bundle",
    name: "The Learning Bundle (Cognitive-Achievement-Attention)",
    price: "$600.00",
    description:
      "A comprehensive psychoeducational assessment that examines cognitive, academic, emotional, and behavioral domains. Identifies factors impacting learning (e.g., processing, retention, or output of information).",
    benefits: [
      "Students struggling academically or behaviorally, including gifted students needing enrichment",
      "Parents & Educators seeking insights to make informed decisions and tailor interventions",
      "Healthcare Professionals using results for diagnosing conditions such as ADHD or learning disorders",
    ],
    ageRange: "School-aged children and adolescents",
    sessions: "4–6 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Licensed psychologist",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "evaluation-of-attention",
    name: "Evaluation of Attention",
    price: "$400.00",
    description:
      "A clinical assessment to evaluate the ability to focus, concentrate, and process information. Uses multiple methods (behavioral observations, questionnaires, computerized tasks, etc.) to measure attention.",
    benefits: ["Students or professionals who struggle with concentration, time management, and organization"],
    ageRange: "5 years through adulthood",
    sessions: "1–2 sessions",
    method: "Online or onsite",
    administrator: "Trained professional; diagnostic interpretation by a licensed psychologist",
    icon: Brain,
    color: "bg-purple-100 text-purple-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "giftedness",
    name: "Giftedness",
    price: "$600.00",
    description:
      "Evaluates exceptional intellectual, creative, or academic abilities. Assesses various IQ ranges (mildly, moderately, highly, or profoundly gifted) and identifies twice-exceptional cases.",
    benefits: ["Students suspected of giftedness or those needing support for advanced learning challenges"],
    ageRange: "School-aged children and adolescents",
    sessions: "4–5 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Licensed psychologist",
    icon: Lightbulb,
    color: "bg-amber-100 text-amber-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "career-assessment",
    name: "Career Assessment and Guidance Bundle",
    price: "$450.00",
    description:
      "Helps individuals explore their skills, interests, values, and personality traits to make informed career decisions. Provides recommendations and guidance on potential career paths based on a comprehensive evaluation.",
    benefits: ["Individuals at a career decision point seeking clarity on their strengths and interests"],
    ageRange: "Adolescents and adults",
    sessions: "2-3 sessions",
    method: "Online or onsite",
    administrator: "Licensed professional",
    icon: LineChart,
    color: "bg-green-100 text-green-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "social-emotional-behavior",
    name: "Social Emotional and Behavior Assessment Bundle",
    price: "$450.00",
    description:
      "Evaluates social and emotional competencies including self-regulation, social interactions, and overall emotional well-being. Assesses internalizing (e.g., anxiety, depression) and externalizing behaviors (e.g., rule-breaking, aggression) to inform tailored interventions.",
    benefits: ["Children and adolescents needing support with social and emotional skills"],
    ageRange: "2 to 18 years",
    sessions: "1–2 sessions",
    method: "Online",
    administrator: "Licensed psychologist",
    icon: GraduationCap,
    color: "bg-red-100 text-red-700",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function PsychoeducationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#4b2e83] to-[#6a4bbc] text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Psychoeducation Assessments</h1>
            <p className="mt-6 text-lg leading-8">
              Our comprehensive psychoeducational assessments provide insights into cognitive, academic, emotional, and
              behavioral functioning to guide personalized interventions.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button className="bg-white text-[#4b2e83] hover:bg-gray-100" size="lg" asChild>
                <Link href="#assessments">View Assessments</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg" asChild>
                <Link href="/consultation">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Psychoeducation Assessments
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our psychoeducational assessments are designed for students, parents, educators, and healthcare
            professionals seeking insights into cognitive, academic, emotional, and behavioral functioning.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Comprehensive Evaluation</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Each assessment provides a detailed diagnostic report examining multiple domains of functioning.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Expert Administration</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                All assessments are conducted by licensed psychologists with specialized training and experience.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Personalized Planning</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Each assessment includes a follow-up meeting to discuss findings and plan targeted interventions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Assessments Section */}
      <div id="assessments" className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Psychoeducation Assessments
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our range of psychoeducational assessments designed to evaluate different aspects of cognitive,
              academic, and emotional functioning.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl gap-x-8 gap-y-16 lg:mx-0">
            {assessments.map((assessment) => (
              <div key={assessment.id} className="bg-white rounded-xl shadow-sm overflow-hidden ring-1 ring-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={assessment.image || "/placeholder.svg"}
                      alt={assessment.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${assessment.color.split(" ")[0]}`}
                      >
                        <assessment.icon className={`h-5 w-5 ${assessment.color.split(" ")[1]}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{assessment.name}</h3>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xl font-semibold text-[#4b2e83]">{assessment.price}</span>
                    </div>

                    <p className="text-gray-600 mb-6">{assessment.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Who Benefits:</h4>
                        <ul className="space-y-1">
                          {assessment.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-[#4b2e83] mt-1">•</span>
                              <span className="text-sm text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Administration:</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>
                            <span className="font-medium">Age Range:</span> {assessment.ageRange}
                          </p>
                          <p>
                            <span className="font-medium">Sessions:</span> {assessment.sessions}
                          </p>
                          <p>
                            <span className="font-medium">Method:</span> {assessment.method}
                          </p>
                          <p>
                            <span className="font-medium">Administrator:</span> {assessment.administrator}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <CheckoutModal assessmentName={assessment.name} price={assessment.price}>
                        <Button className="bg-[#4b2e83] hover:bg-[#4b2e83]/90">
                          Book Assessment <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CheckoutModal>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to common questions about our psychoeducational assessment services.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10">
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              How do I know which assessment is right for my child?
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              We recommend scheduling an initial consultation where our specialists can discuss your concerns and goals.
              Based on this conversation, we can recommend the most appropriate assessment for your child's specific
              needs.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              What happens during a psychoeducational assessment?
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              The assessment typically involves standardized testing, interviews, observations, and questionnaires. The
              specific components vary depending on the assessment type, but all are designed to gather comprehensive
              information about cognitive, academic, and emotional functioning.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              How long does it take to receive assessment results?
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              After completing the assessment sessions, our team typically requires 1-2 weeks to analyze the results and
              prepare a comprehensive report. We then schedule a follow-up meeting to discuss the findings and
              recommendations.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              Can assessment results be shared with my child's school?
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              Yes, with your written consent, we can share assessment results with your child's school or other
              professionals involved in their care. Many families find this helpful for developing educational plans or
              accessing accommodations.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#4b2e83]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
            <br />
            Book an assessment today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Button className="bg-white text-[#4b2e83] hover:bg-gray-100" size="lg" asChild>
              <Link href="/consultation">Book Now</Link>
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

