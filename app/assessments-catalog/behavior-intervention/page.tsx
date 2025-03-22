import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Activity, MessageSquare, Sparkles, Puzzle } from "lucide-react"
import { CheckoutModal } from "@/components/assessments/checkout-modal"

// Assessment data
const assessments = [
  {
    id: "verbal-behavior",
    name: "Verbal Behavior Milestones Assessment and Placement Program",
    price: "$450.00",
    description:
      "A developmental, criterion-referenced tool that tracks milestones (listening, requesting, labeling, imitation, play, visual performance, etc.). Serves as both a curriculum guide and a skill tracking system.",
    benefits: [
      "Children 18 to 48 months with red flags in developmental milestones",
      "Older children not meeting expected milestones",
    ],
    ageRange: "18 to 48 months (or older with developmental delays)",
    sessions: "2–4 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    icon: MessageSquare,
    color: "bg-blue-100 text-blue-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "basic-language",
    name: "Assessment of Basic Language and Learning Skills",
    price: "$450.00",
    description:
      "Evaluates deficiencies in language, academic, motor, and self-help skills. Uses a criterion-referenced assessment tool integrated with curriculum guidance and skill tracking.",
    benefits: ["Children with language and learning challenges"],
    ageRange: "Birth to 12 years",
    sessions: "2–4 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    icon: Brain,
    color: "bg-purple-100 text-purple-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "functional-living",
    name: "Assessment of Functional Living Skills",
    price: "$250.00",
    description:
      "Measures independent living skills across various domains (self-management, toileting, grooming, meals, leisure, etc.). Functions as both a skill tracking system and a curriculum guide.",
    benefits: ["Children and adults with special needs"],
    ageRange: "2 years through the lifespan",
    sessions: "2–4 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    icon: Activity,
    color: "bg-green-100 text-green-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "essential-living",
    name: "Essential for Living",
    price: "$200.00",
    description:
      "A curriculum-based, functional life-skills assessment and tracking instrument. Evaluates skills such as requesting, tolerating, and following directions.",
    benefits: ["Individuals with moderate-to-severe disabilities with limited repertoires across functional domains"],
    ageRange: "All ages",
    sessions: "2–4 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    icon: Sparkles,
    color: "bg-amber-100 text-amber-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "advanced-knowledge",
    name: "Promoting the Emergence of Advanced Knowledge",
    price: "$300.00",
    description:
      "A criterion-referenced instrument addressing language and cognitive deficits. Provides both assessment data and a treatment protocol.",
    benefits: ["Children and adults with special needs"],
    ageRange: "18 months through adolescence (and into adulthood)",
    sessions: "2–3 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    icon: Brain,
    color: "bg-red-100 text-red-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "good-learner",
    name: "Inventory of Good Learner Repertoires",
    price: "$250.00",
    description:
      "A criterion-referenced assessment, curriculum guide, and skill tracking system that measures the ease with which an individual may be taught. Identifies preferred learning styles, necessary supports, resilience, and flexibility.",
    benefits: ["All children—as it helps educators and interventionists tailor teaching approaches"],
    ageRange: "All children",
    sessions: "2–3 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    icon: Puzzle,
    color: "bg-blue-100 text-blue-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "functional-assessment",
    name: "Practical Functional Assessment Skill-Based Treatment of Problem Behavior",
    price: "Contact for pricing",
    description:
      "Determines the antecedents and consequences responsible for problem behavior. Informs highly effective and humane treatment approaches.",
    benefits: ["All children (neurotypical or with special needs) exhibiting severe problem behavior"],
    ageRange: "All children",
    sessions: "3 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    icon: Brain,
    color: "bg-purple-100 text-purple-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "adi-r",
    name: "Autism Diagnostic Interview-Revised (ADI-R)",
    price: "Coming soon",
    description:
      "A structured clinical interview with parents/caregivers focusing on social reciprocity, communication, and repetitive behaviors.",
    benefits: ["Children and adults flagged as at-risk for ASD"],
    ageRange: "Mental age above 2 years (most accurate for children aged 4 and above)",
    sessions: "To be determined",
    method: "Onsite, hybrid, or online",
    administrator: "Qualified diagnostic assessor",
    icon: MessageSquare,
    color: "bg-green-100 text-green-700",
    image: "/placeholder.svg?height=300&width=500",
    comingSoon: true,
  },
  {
    id: "ados-2",
    name: "Autism Diagnostic Observation Schedule - 2nd Edition (ADOS-2)",
    price: "Coming soon",
    description:
      "A standardized, semi-structured assessment of communication, social reciprocity, play, and repetitive behaviors.",
    benefits: ["Children and adults flagged as at-risk for ASD"],
    ageRange: "From 12 months (most accurate for children aged 30 months and above)",
    sessions: "1–2 sessions",
    method: "Ideally onsite",
    administrator: "Qualified ADOS assessor",
    icon: Sparkles,
    color: "bg-amber-100 text-amber-700",
    image: "/placeholder.svg?height=300&width=500",
    comingSoon: true,
  },
  {
    id: "mchat",
    name: "The Modified Checklist for Autism in Toddlers",
    price: "$75.00",
    description: "A screener consisting of 20 questions that identify toddlers at risk for ASD.",
    benefits: ["Toddlers at risk for ASD"],
    ageRange: "16 to 30 months",
    sessions: "1 session",
    method: "Onsite, hybrid, or online",
    administrator: "Qualified behavior analyst",
    icon: Puzzle,
    color: "bg-red-100 text-red-700",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function BehaviorInterventionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#4b2e83] to-[#6a4bbc] text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Behavior Intervention Assessments</h1>
            <p className="mt-6 text-lg leading-8">
              Our comprehensive behavior assessments help identify developmental, language, learning, and behavioral
              challenges to guide effective interventions.
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
            About Behavior Intervention Assessments
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our behavior intervention assessments are designed for children, adolescents, and adults with developmental,
            language, learning, or behavioral challenges.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Expert Administration</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                All assessments are administered by qualified behavior analysts or diagnostic specialists.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <Puzzle className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Comprehensive Reports</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Each assessment results in a detailed report outlining findings and recommendations.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Follow-Up Support</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Each assessment includes a follow-up meeting to discuss findings and plan interventions.
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
              Our Behavior Intervention Assessments
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our range of behavior assessments designed to evaluate different aspects of development, language,
              learning, and behavior.
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
                      <span className="text-xl font-semibold text-[#4b2e83]">
                        {assessment.comingSoon ? "Coming Soon" : assessment.price}
                      </span>
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
                      {!assessment.comingSoon && (
                        <CheckoutModal assessmentName={assessment.name} price={assessment.price}>
                          <Button className="bg-[#4b2e83] hover:bg-[#4b2e83]/90">
                            Book Assessment <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CheckoutModal>
                      )}
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
            Find answers to common questions about our behavior intervention assessment services.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10">
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              What is the difference between the various behavior assessments?
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              Each assessment focuses on different aspects of behavior and development. Some are designed for specific
              age groups or challenges, while others are more comprehensive. During an initial consultation, our
              specialists can help determine which assessment is most appropriate for your needs.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              Why are assessments ideally conducted onsite?
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              Onsite assessments allow our specialists to directly observe behaviors in a controlled environment, which
              often provides more accurate results. However, we understand that this isn't always possible, which is why
              we offer hybrid and online options for many assessments.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              What happens after the assessment is completed?
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              After completing the assessment, our team will analyze the results and prepare a detailed report. We'll
              then schedule a follow-up meeting to discuss the findings, answer any questions, and develop a plan for
              intervention or support.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              How long does the entire assessment process take?
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              The timeline varies depending on the specific assessment, but most require 2-4 sessions spread over a few
              weeks. After the final session, it typically takes 1-2 weeks to prepare the report and schedule the
              follow-up meeting.
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

