import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquareText, Brain, Sparkles, HeartHandshake } from "lucide-react"
import { CheckoutModal } from "@/components/assessments/checkout-modal"

// Assessment data
const assessments = [
  {
    id: "comprehensive-language",
    name: "Comprehensive Language Assessment",
    price: "$350.00",
    description:
      "A thorough evaluation of receptive and expressive language skills, including vocabulary, grammar, syntax, and pragmatic language use.",
    benefits: [
      "Children with suspected language delays or disorders",
      "Children struggling with understanding or expressing language",
    ],
    ageRange: "2 to 18 years",
    sessions: "2–3 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Licensed speech-language pathologist",
    outcome: "Detailed report on language abilities and recommendations",
    icon: MessageSquareText,
    color: "bg-blue-100 text-blue-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "articulation-phonology",
    name: "Articulation and Phonology Assessment",
    price: "$250.00",
    description:
      "Evaluates speech sound production, including articulation of individual sounds and phonological patterns in connected speech.",
    benefits: [
      "Children with unclear speech or difficulty pronouncing certain sounds",
      "Children whose speech is difficult to understand by others",
    ],
    ageRange: "3 to 12 years",
    sessions: "1–2 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Licensed speech-language pathologist",
    outcome: "Detailed report on speech sound abilities and recommendations",
    icon: Brain,
    color: "bg-purple-100 text-purple-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "fluency",
    name: "Fluency Assessment",
    price: "$200.00",
    description:
      "Evaluates the frequency and type of disfluencies (stuttering), as well as any secondary behaviors and the impact on communication.",
    benefits: [
      "Children and adults who stutter or have other fluency disorders",
      "Individuals experiencing blocks, repetitions, or prolongations in their speech",
    ],
    ageRange: "3 years through adulthood",
    sessions: "1–2 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Licensed speech-language pathologist",
    outcome: "Detailed report on fluency patterns and recommendations",
    icon: Sparkles,
    color: "bg-green-100 text-green-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "social-communication",
    name: "Social Communication Assessment",
    price: "$300.00",
    description:
      "Evaluates pragmatic language skills, including conversation skills, nonverbal communication, and social understanding.",
    benefits: [
      "Children with difficulty in social interactions",
      "Individuals with autism spectrum disorder or social communication disorder",
    ],
    ageRange: "4 to 18 years",
    sessions: "2–3 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Licensed speech-language pathologist",
    outcome: "Detailed report on social communication abilities and recommendations",
    icon: HeartHandshake,
    color: "bg-amber-100 text-amber-700",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "early-language",
    name: "Early Language Development Assessment",
    price: "$250.00",
    description:
      "Evaluates early communication skills, including gestures, sounds, words, and early sentence formation in young children.",
    benefits: ["Toddlers with suspected language delays", "Children who are late to start talking or using gestures"],
    ageRange: "12 months to 3 years",
    sessions: "1–2 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Licensed speech-language pathologist",
    outcome: "Detailed report on early language development and recommendations",
    icon: MessageSquareText,
    color: "bg-red-100 text-red-700",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function SpeechLanguagePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#4b2e83] to-[#6a4bbc] text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Speech & Language Assessments</h1>
            <p className="mt-6 text-lg leading-8">
              Our comprehensive speech and language assessments evaluate communication skills, language development, and
              speech patterns to guide effective interventions.
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
            About Speech & Language Assessments
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our speech and language assessments are designed for children and adults who may have difficulties with
            communication, language development, or speech production.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <MessageSquareText className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Expert Administration</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                All assessments are administered by licensed speech-language pathologists with specialized training.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Comprehensive Evaluation</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Each assessment provides detailed insights into communication abilities and challenges.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4b2e83] text-white">
                <Sparkles className="h-6 w-6" />
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
              Our Speech & Language Assessments
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our range of speech and language assessments designed to evaluate different aspects of
              communication and language development.
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
            Find answers to common questions about our speech and language assessment services.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10">
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              How do I know if my child needs a speech or language assessment?
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              Consider an assessment if your child has difficulty being understood, seems to struggle understanding
              language, has a limited vocabulary, or is not meeting communication milestones. If you're unsure, our team
              can help determine if an assessment would be beneficial during an initial consultation.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              What happens during a speech and language assessment?
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              The assessment typically involves standardized testing, clinical observations, and parent interviews.
              Depending on the specific assessment, your child may be asked to name pictures, follow directions, answer
              questions, or engage in conversation to evaluate different aspects of speech and language.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">How should we prepare for the assessment?</h3>
            <p className="mt-3 text-base leading-7 text-gray-600">
              Ensure your child is well-rested and has eaten before the assessment. Bring any relevant medical records,
              previous evaluations, or reports from teachers. For online assessments, make sure you have a quiet space
              with good lighting and a stable internet connection.
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

