import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Activity, Eye, Sparkles, Puzzle, HandMetal } from "lucide-react"
import { CheckoutModal } from "@/components/assessments/checkout-modal"

// Assessment data
const assessments = [
  {
    id: "sensory-profiling",
    name: "Sensory Profiling",
    price: "$300.00",
    description:
      "Evaluates a child's sensory processing patterns in different contexts (home, school, community). Assesses sensory systems (auditory, visual, touch, movement, body position, oral) and behaviors (conduct, social-emotional, attention). Identifies whether the child is seeking, avoiding, sensitive, or under-registering sensory input.",
    benefits: ["Children showing sensory distress or inappropriate reactions to sensory stimuli"],
    ageRange: "Birth through 14 years, 11 months",
    sessions: "2–3 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Qualified OT certified in sensory intervention",
    outcome: "Detailed report + sensory diet recommendations",
    icon: Brain,
    color: "bg-blue-100 text-blue-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "developmental-motor",
    name: "Developmental Motor Scales Assessment",
    price: "$200.00",
    description:
      "Measures early motor development abilities: reflexes, stationary skills, locomotion, object manipulation, grasping, and visual-motor integration.",
    benefits: ["Babies and children with potential motor difficulties"],
    ageRange: "Birth to 5 years",
    sessions: "1–2 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Qualified occupational therapist",
    outcome: "Detailed report on motor milestones",
    icon: Activity,
    color: "bg-purple-100 text-purple-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "visual-motor",
    name: "Visual Motor Integration Assessment",
    price: "$200.00",
    description:
      "Screens for visual perception, fine motor skills, and hand-eye coordination—all prerequisites to future learning. Involves copying geometric forms to identify visual-motor deficits.",
    benefits: [
      "Individuals with deficits in visual perception or fine motor skills (particularly critical for ages 2–8)",
    ],
    ageRange: "2 years to 100 years old",
    sessions: "1–2 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Qualified occupational therapist",
    outcome: "Detailed report on visual-motor integration abilities",
    icon: Eye,
    color: "bg-green-100 text-green-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "functional-independence",
    name: "The Functional Independence Measure",
    price: "$250.00",
    description:
      "Assesses a child's autonomy in performing daily life activities. Identifies challenges or difficulties in self-care, mobility, and other functional tasks.",
    benefits: ["Children with difficulties performing routine activities independently"],
    ageRange: "6 months to 7 years old",
    sessions: "2–3 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Qualified occupational therapist",
    outcome: "Detailed report outlining functional strengths and weaknesses",
    icon: Sparkles,
    color: "bg-amber-100 text-amber-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "visual-perception",
    name: "The Developmental Test of Visual Perception",
    price: "$200.00",
    description:
      "Evaluates visual perception skills (eye-motor coordination, figure-ground, form constancy, spatial relationships). Provides perceptual age equivalents and a total perceptual quotient (similar to an IQ approach).",
    benefits: ["Children with academic difficulties (geometry, math, reading, writing)"],
    ageRange: "3 years 4 months to 10 years old",
    sessions: "1–2 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Qualified occupational therapist",
    outcome: "Detailed report on visual perceptual abilities",
    icon: Eye,
    color: "bg-red-100 text-red-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "scholarly-tools",
    name: "The Manipulation of Scholarly Tools",
    price: "$150.00",
    description:
      "Observes and assesses manual skills needed for using school tools (cutting, gluing, tracing, etc.). Evaluates prehension, dexterity, bimanual coordination, and overall functional manipulations.",
    benefits: ["School-age children who have difficulty using or manipulating school supplies"],
    ageRange: "Grade 2 to Grade 6 (approximately)",
    sessions: "1–2 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Qualified occupational therapist",
    outcome: "Detailed report on fine motor and coordination skills for school tasks",
    icon: HandMetal,
    color: "bg-blue-100 text-blue-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "occupational-bundle",
    name: "The Occupational Assessment Bundle",
    price: "$450.00",
    description:
      "Holistic evaluation of a child's motor, cognitive, and daily living skills. Uses standardized tests to identify strengths, challenges, and areas for development in fine/gross motor abilities, problem-solving, and ADLs (dressing, feeding, hygiene).",
    benefits: ["Children with developmental delays, learning difficulties, or challenges in performing daily tasks"],
    ageRange: "Children of all ages",
    sessions: "3–4 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Licensed occupational therapist with pediatric expertise",
    outcome: "Comprehensive report covering multiple skill areas",
    icon: Puzzle,
    color: "bg-purple-100 text-purple-700",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function OccupationalTherapyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#4b2e83] to-[#6a4bbc] text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Occupational Therapy Assessments</h1>
            <p className="mt-6 text-lg leading-8">
              Our comprehensive occupational therapy assessments help identify motor, sensory, and functional challenges
              affecting daily life activities.
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
            About Occupational Therapy Assessments
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our occupational therapy assessments are designed for children who may show motor, sensory, or functional
            challenges affecting daily life activities.
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
                All assessments are administered by qualified or certified occupational therapists.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <Puzzle className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Comprehensive Reports</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Each assessment provides a detailed report outlining findings and recommendations.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <Activity className="h-6 w-6" />
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
              Our Occupational Therapy Assessments
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our range of occupational therapy assessments designed to evaluate different aspects of motor,
              sensory, and functional skills.
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
                          <p>
                            <span className="font-medium">Outcome:</span> {assessment.outcome}
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
            Find answers to common questions about our occupational therapy assessment services.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10">
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              How do I know if my child needs an occupational therapy assessment?
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              Consider an assessment if your child has difficulty with fine motor skills, sensory processing, self-care
              tasks, or shows delays in developmental milestones. If you're unsure, our team can help determine if an
              assessment would be beneficial during an initial consultation.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              What happens during an occupational therapy assessment?
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              The assessment typically involves standardized testing, clinical observations, and parent interviews.
              Depending on the specific assessment, your child may be asked to perform various tasks that evaluate motor
              skills, sensory processing, visual perception, or functional abilities.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">How should we prepare for the assessment?</h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              Ensure your child is well-rested and has eaten before the assessment. Bring any relevant medical records
              or previous evaluations. For online assessments, make sure you have a quiet space with good lighting and a
              stable internet connection.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">What happens after the assessment?</h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              After completing the assessment, our team will analyze the results and prepare a detailed report. We'll
              then schedule a follow-up meeting to discuss the findings, answer any questions, and develop a plan for
              intervention or support if needed.
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

