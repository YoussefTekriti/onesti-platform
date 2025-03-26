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
      "This assessment will help identify your child's delays in milestones across different developmental domains.",
    benefits: [
      "Children from 18 months through 48 months of age for whom red flags have been indicated in their developmental milestones",
      "Chronologically older children who have not yet met developmental milestones"
    ],
    ageRange: "18 to 48 months (or older with developmental delays)",
    sessions: "2–4 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    outcome: "Upon completion, you will receive a detailed report and a meeting will be scheduled with the Onesti team to discuss the findings and plan for intervention.",
    icon: MessageSquare,
    color: "bg-blue-100 text-blue-700",
    image: "/placeholder.svg?height=300&width=500",
    details: [
      {
        title: "Verbal Behavior Milestones Assessment",
        description: "A developmental, criterion-referenced assessment tool, curriculum guide, and skill tracking system (includes progress monitoring throughout intervention) across domains (e.g. listening, requesting, labeling, imitation, play, visual performance, etc.)"
      }
    ]
  },
  {
    id: "basic-language",
    name: "Assessment of Basic Language and Learning Skills (ABLLS)",
    price: "$450.00",
    description:
      "This assessment will help identify your child's deficiencies in language, academic, motor, and self-help skills.",
    benefits: [
      "Children from birth to 12 years of age for whom red flags have been indicated in their developmental milestones"
    ],
    ageRange: "Birth to 12 years",
    sessions: "2–4 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    outcome: "Upon completion, you will receive a detailed report and a meeting will be scheduled with the Onesti team to discuss the findings and plan for intervention.",
    icon: Brain,
    color: "bg-purple-100 text-purple-700",
    image: "/placeholder.svg?height=300&width=500",
    details: [
      {
        title: "Assessment of Basic Language and Learning Skills",
        description: "A criterion-referenced assessment tool, curriculum guide, and skill tracking system. Used to identify deficiencies in language, academic, motor, and self-help skills."
      }
    ]
  },
  {
    id: "functional-living",
    name: "Assessment of Functional Living Skills",
    price: "$250.00",
    description:
      "This assessment will help assess your child's independent living skills.",
    benefits: [
      "Children and adults with special needs (2 years of age throughout lifespan) who need to further develop their repertoires of independent living skills across domains (e.g. self-management, toileting, grooming, meals, leisure, etc.) and settings (e.g. home, school, community, etc.)"
    ],
    ageRange: "2 years through the lifespan",
    sessions: "2–4 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    outcome: "Upon completion, you will receive a detailed report and a meeting will be scheduled with the Onesti team to discuss the findings and plan for intervention.",
    icon: Activity,
    color: "bg-green-100 text-green-700",
    image: "/placeholder.svg?height=300&width=500",
    details: [
      {
        title: "Assessment of Functional Living Skills",
        description: "A measure that is used for assessment, skill tracking system, and serves as a curriculum guide for the development of independent living skills."
      }
    ]
  },
  {
    id: "essential-living",
    name: "Essential for Living (EFL)",
    price: "$200.00 + purchase of protocol and shipping",
    description:
      "This assessment will help evaluate your child's functional skills across domains.",
    benefits: [
      "Designed for individuals with moderate-to-severe disabilities who exhibit limited repertoires and problem behavior across domains (e.g. requests and related skills, tolerating skills, following directions, etc.)",
      "Applicable across all ages (lifespan)"
    ],
    ageRange: "All ages",
    sessions: "2–4 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    outcome: "Upon completion, you will receive a detailed report and a meeting will be scheduled with the Onesti team to discuss the findings and plan for intervention.",
    icon: Sparkles,
    color: "bg-amber-100 text-amber-700",
    image: "/placeholder.svg?height=300&width=500",
    details: [
      {
        title: "Essential for Living",
        description: "A functional, life-skills curriculum-based assessment and tracking instrument."
      }
    ]
  },
  {
    id: "advanced-knowledge",
    name: "Promoting the Emergence of Advanced Knowledge (PEAK)",
    price: "$350.00",
    description:
      "This assessment will help evaluate your child's language and cognitive deficits.",
    benefits: [
      "Children and adults with special needs from 18 months of age through adolescence (into adulthood)"
    ],
    ageRange: "18 months through adolescence (and into adulthood)",
    sessions: "2–3 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    outcome: "Upon completion, a meeting will be scheduled with the Onesti team to discuss the findings and plan of intervention.",
    icon: Brain,
    color: "bg-red-100 text-red-700",
    image: "/placeholder.svg?height=300&width=500",
    details: [
      {
        title: "Promoting the Emergence of Advanced Knowledge",
        description: "A criterion-referenced assessment instrument and treatment protocol for addressing language and cognitive deficits."
      }
    ]
  },
  {
    id: "good-learner",
    name: "Inventory of Good Learner Repertoires (IGLR)",
    price: "$250.00",
    description:
      "This assessment measures the different facets which directly and indirectly affect learning. The results are used to inform best practice with respect to interventions.",
    benefits: [
      "All children can benefit, in that it allows interventionists/teachers to identify how best to teach individual learners",
      "It assesses learner preferences, necessary supports, resilience and regulation, flexibility, etc."
    ],
    ageRange: "All children",
    sessions: "2–3 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    outcome: "Upon completion, a meeting will be scheduled with the ONESTI team to discuss the findings and plan of intervention.",
    icon: Puzzle,
    color: "bg-blue-100 text-blue-700",
    image: "/placeholder.svg?height=300&width=500",
    details: [
      {
        title: "Inventory of Good Learner Repertoires",
        description: "A criterion-referenced assessment tool, curriculum guide, and skill tracking system to measure the ease with which an individual may be taught. It is used to identify preferred learning channels style, dependence upon various supports, resilience upon encountering challenges, and potential to learn in less supportive environments."
      }
    ]
  },
  {
    id: "functional-assessment",
    name: "Practical Functional Assessment/Skill-Based Treatment (PFA/SBT)",
    price: "$300.00",
    description:
      "This assessment will help evaluate the functions of problem behavior (triggers, maintaining variables, etc.). This, in turn, allows the behavior analyst to design and implement a behavior plan.",
    benefits: [
      "All children (whether neurotypical or those with special needs) who exhibit severe problem behavior can benefit"
    ],
    ageRange: "All children",
    sessions: "3 sessions",
    method: "Ideally onsite (hybrid/online possible)",
    administrator: "Qualified behavior analyst",
    outcome: "Upon completion, a meeting will be scheduled with the Onesti team to discuss the findings and behavioral protocol.",
    icon: Brain,
    color: "bg-purple-100 text-purple-700",
    image: "/placeholder.svg?height=300&width=500",
    details: [
      {
        title: "Practical Functional Assessment/Skill-Based Treatment",
        description: "This assessment tool is used to determine the occasioning contexts (antecedents) and outcomes (consequences) responsible for problem behavior. It is used to inform highly effective and humane treatment for problem behavior."
      }
    ]
  },
  {
    id: "adi-r",
    name: "Autism Diagnostic Interview-Revised (ADI-R)",
    price: "Coming soon",
    description:
      "A structured clinical interview with parents/caregivers focusing on social reciprocity, communication, and repetitive behaviors.",
    benefits: [
      "Children and adults with mental age above 2 years (most accurate for children aged 4 years and above) flagged (through screening) as being at-risk for an ASD diagnosis"
    ],
    ageRange: "Mental age above 2 years (most accurate for children aged 4 and above)",
    sessions: "To be determined",
    method: "Onsite, hybrid, or online",
    administrator: "Qualified diagnostic assessor",
    outcome: "Will be available soon!",
    icon: MessageSquare,
    color: "bg-green-100 text-green-700",
    image: "/placeholder.svg?height=300&width=500",
    comingSoon: true,
    details: [
      {
        title: "Autism Diagnostic Interview-Revised",
        description: "A clinical diagnostic instrument by means of a structured interview with parents/caregivers of individuals referred for possible Autism Spectrum Disorder. It focuses on behavior in three main areas: quality of social reciprocity; communication and language; restricted interests and repetitive/stereotyped behavior."
      }
    ]
  },
  {
    id: "ados-2",
    name: "Autism Diagnostic Observation Schedule - 2nd Edition (ADOS-2)",
    price: "Coming soon",
    description:
      "A standardized, semi-structured assessment of communication, social reciprocity, play, and repetitive behaviors.",
    benefits: [
      "Children and adults from 12 months (lifespan), although (most accurate for children aged 30 months and above) flagged (through screening) as being at-risk for an ASD diagnosis"
    ],
    ageRange: "From 12 months (most accurate for children aged 30 months and above)",
    sessions: "1–2 sessions",
    method: "Ideally onsite",
    administrator: "Qualified ADOS assessor",
    outcome: "Will be available soon!",
    icon: Sparkles,
    color: "bg-amber-100 text-amber-700",
    image: "/placeholder.svg?height=300&width=500",
    comingSoon: true,
    details: [
      {
        title: "Autism Diagnostic Observation Schedule",
        description: "A standardized semi-structured assessment of communication, social reciprocity, play, and restricted interests and repetitive/stereotyped behavior in children. It helps providers diagnose Autism Spectrum Disorder in children and adults."
      }
    ]
  },
  {
    id: "mchat",
    name: "The Modified Checklist for Autism in Toddlers",
    price: "$75.00",
    description: 
      "This screener will identify children who are at risk of a potential ASD diagnosis and inform next steps.",
    benefits: [
      "Intended for toddlers between 16 and 30 months of age showing red flags or delays in developmental milestones"
    ],
    ageRange: "16 to 30 months",
    sessions: "1 session",
    method: "Onsite, hybrid, or online",
    administrator: "Qualified behavior analyst",
    outcome: "Upon completion, the interventionist will advise parents as to the risk of ASD, and may or may not refer the child for a diagnostic assessment (i.e. ADI-R or ADOS-2).",
    icon: Puzzle,
    color: "bg-red-100 text-red-700",
    image: "/placeholder.svg?height=300&width=500",
    details: [
      {
        title: "Modified Checklist for Autism in Toddlers",
        description: "A series of 20 questions about a child's behavior. Determines whether further evaluation is needed."
      }
    ]
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
              <Button className="bg-white text-[#4b2e83] hover:bg-gray-100" size="lg" asChild>
                <Link href="/assessments-catalog">Back to Categories</Link>
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

                    {assessment.details && assessment.details.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Assessment Details:</h4>
                        <div className="space-y-4">
                          {assessment.details.map((detail, idx) => (
                            <div key={idx} className="border-l-2 border-[#4b2e83] pl-3">
                              <h5 className="font-medium text-[#4b2e83]">{detail.title}</h5>
                              <p className="text-sm text-gray-600">{detail.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

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
                          {assessment.outcome && (
                            <p>
                              <span className="font-medium">Outcome:</span> {assessment.outcome}
                            </p>
                          )}
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
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to common questions about our behavior intervention assessment services.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      What is the difference between the various behavior assessments?
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
                      Each assessment focuses on different aspects of behavior and development. Some are designed for specific
                      age groups or challenges, while others are more comprehensive. During an initial consultation, our
                      specialists can help determine which assessment is most appropriate for your needs.
                    </p>
                  </div>
                </details>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      Why are assessments ideally conducted onsite?
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
                      Onsite assessments allow our specialists to directly observe behaviors in a controlled environment, which
                      often provides more accurate results. However, we understand that this isn't always possible, which is why
                      we offer hybrid and online options for many assessments.
                    </p>
                  </div>
                </details>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      What happens after the assessment is completed?
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
                      After completing the assessment, our team will analyze the results and prepare a detailed report. We'll
                      then schedule a follow-up meeting to discuss the findings, answer any questions, and develop a plan for
                      intervention or support.
                    </p>
                  </div>
                </details>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      How long does the entire assessment process take?
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
                      The timeline varies depending on the specific assessment, but most require 2-4 sessions spread over a few
                      weeks. After the final session, it typically takes 1-2 weeks to prepare the report and schedule the
                      follow-up meeting.
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
              <Link href="/consultation">Book Now</Link>
            </Button>
            <Button className="bg-white text-[#4b2e83] hover:bg-gray-100" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

