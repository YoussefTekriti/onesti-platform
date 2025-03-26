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
      "This psychoeducational assessment provides information about student's functioning in specific domains, namely cognitive, academic, emotional, and behavioral.",
    benefits: [
      "Students who are struggling academically or behaviorally",
      "Students with potential learning disabilities, giftedness, developmental delays, ADHD, or autism spectrum disorder",
      "Parents seeking to understand their child's strengths and areas of need",
      "Educators needing guidance to design classroom strategies and accommodations"
    ],
    ageRange: "School-aged children and adolescents",
    sessions: "4–6 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Licensed psychologist",
    outcome: "Upon completion, you will receive a diagnostic report and a meeting will be scheduled with the Onesti team to discuss the findings and plan for intervention.",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700",
    image: "/placeholder.svg?height=300&width=500",
    details: [
      {
        title: "Psychoeducational Assessment",
        description: "A systematic process that involves gathering and analyzing standardized information about a student's functioning in specific domains, namely cognitive, academic, emotional, and behavioral. It identifies factors that may have an impact on any aspect of an individual's learning and is used to determine the individual's learning profile."
      },
      {
        title: "Components",
        description: "Cognitive Abilities (IQ): Measurement using standardized tests like the Wechsler Scales. Academic Achievement: Measures reading (decoding, fluency, comprehension), writing (spelling, mechanics, sentence construction), mathematics (computational skills, concepts, problem solving), and oral language. Other factors assessed include memory, phonological processing, fine motor skills, language, and executive functioning."
      }
    ]
  },
  {
    id: "evaluation-of-attention",
    name: "Evaluation of Attention",
    price: "$400.00",
    description:
      "This Comprehensive Clinical Assessment evaluates attention and measures an individual's ability to focus, concentrate, and selectively process information from their environment.",
    benefits: [
      "Students or professionals who struggle with concentration, time management, organization, procrastination, planning, etc.",
      "Individuals whose performance is being undermined by attention-related issues"
    ],
    ageRange: "5 years through adulthood",
    sessions: "1–2 sessions",
    method: "Online or onsite",
    administrator: "Trained professional with diagnostic interpretation by a licensed psychologist",
    outcome: "Upon completion, you will receive a diagnostic report and a meeting will be scheduled with the Onesti team to discuss the findings and plan for intervention.",
    icon: Brain,
    color: "bg-purple-100 text-purple-700",
    image: "/placeholder.svg?height=300&width=500",
    details: [
      {
        title: "Evaluation of Attention",
        description: "An assessment that measures an individual's ability to focus, concentrate, and selectively process information from their environment. Attention is a cognitive function that allows us to allocate mental resources to specific stimuli or tasks while filtering out irrelevant or distracting information."
      },
      {
        title: "Assessment Methods",
        description: "Various methods and tools are used, including: Behavioral Observations, Questionnaires and Interviews, Cognitive Tests assessing different types of attention (divided, selective, auditory, visual), Computerized Tasks like the TOVA, and Comprehensive Clinical Assessments to evaluate cognitive functioning related to attention."
      }
    ]
  },
  {
    id: "giftedness",
    name: "Giftedness Assessment",
    price: "$600.00",
    description:
      "This assessment evaluates exceptional or advanced capability in such areas as intellectual, creative, artistic, or leadership capacity, or in specific academic fields.",
    benefits: [
      "Students who seem to be functioning academically at an advanced level",
      "Children who are getting bored in class and need enrichment activities",
      "Students who need to realize their full potential"
    ],
    ageRange: "5 years and above",
    sessions: "4–5 sessions",
    method: "Online, hybrid, or onsite",
    administrator: "Licensed psychologist",
    outcome: "Upon completion, you will receive a detailed report and a meeting will be scheduled with the Onesti team to discuss the findings and plan for intervention.",
    icon: Lightbulb,
    color: "bg-amber-100 text-amber-700",
    image: "/placeholder.svg?height=300&width=500",
    details: [
      {
        title: "Giftedness Assessment",
        description: "An evaluation of a person's cognitive, creative, artistic, academic, or other skills to determine if they possess abilities that are significantly above average for their age group. This assessment helps identify appropriate educational and enrichment activities for gifted individuals."
      },
      {
        title: "IQ Ranges for Giftedness",
        description: "The majority of the population falls within an IQ of 85-115, with a mean of 100. Gifted children's IQ ranges include: Mildly gifted (115-130), Moderately gifted (130-145), Highly gifted (145-160), and Profoundly gifted (160 or higher). Some gifted students may also have learning disabilities such as dyslexia, ADHD, or autism disorder, known as twice-exceptional."
      },
      {
        title: "Assessment Methods",
        description: "Various assessment methods are used, including standardized tests, IQ tests, achievement tests, portfolios of creative work, observations, and teacher recommendations. These methods aim to measure a range of cognitive abilities, critical thinking, problem-solving, and creativity across multiple domains."
      }
    ]
  },
  {
    id: "career-assessment",
    name: "Career Assessment and Guidance Bundle",
    price: "$450.00",
    description:
      "This assessment helps individuals gain a better understanding of their skills, interests, values, and personality traits in order to make informed decisions about their career paths.",
    benefits: [
      "Individuals seeking clarity on their career direction",
      "Students transitioning from high school to college or university",
      "Professionals considering a career change"
    ],
    ageRange: "16 years and above",
    sessions: "2-3 sessions",
    method: "Online or onsite",
    administrator: "Trained career assessment specialist",
    outcome: "Upon completion, you will receive a detailed report and guidance on potential career paths that align with your strengths, interests, and values.",
    icon: LineChart,
    color: "bg-green-100 text-green-700",
    image: "/placeholder.svg?height=300&width=500",
    details: [
      {
        title: "Career Assessment and Guidance",
        description: "A process that helps individuals gain a better understanding of their skills, interests, values, and personality traits in order to make informed decisions about their career paths. It involves a variety of tools and techniques to identify potential careers that align with your strengths and preferences."
      },
      {
        title: "Assessment Components",
        description: "Common components include: Interests assessment to identify preferences for certain types of work or activities, Skills assessment to evaluate strengths and weaknesses in various skill areas, Personality assessments like the Myers-Briggs Type Indicator (MBTI) or Big Five personality traits, and Values assessment to understand what's important to you in your work life."
      },
      {
        title: "Benefits of Career Assessment",
        description: "Career assessments provide guidance and recommendations based on your results, help with goal setting, and serve as a starting point for career exploration. They are particularly valuable because systematic career assessment is often absent in educational systems, despite its importance."
      }
    ]
  },
  {
    id: "social-emotional-behavior",
    name: "Social Emotional and Behavior Assessment Bundle",
    price: "$450.00",
    description:
      "This assessment evaluates an individual's social and emotional skills, competencies, and well-being to gain a comprehensive understanding of their emotional and social functioning.",
    benefits: [
      "Children and adolescents with behavioral concerns",
      "Students experiencing emotional difficulties",
      "Individuals needing support with social interactions and emotional regulation"
    ],
    ageRange: "2 to 18 years",
    sessions: "1–2 sessions",
    method: "Online",
    administrator: "Licensed psychologist",
    outcome: "Upon completion, you will receive a detailed diagnostic report and a meeting will be scheduled with the Onesti team to discuss the findings and plan for intervention.",
    icon: GraduationCap,
    color: "bg-red-100 text-red-700",
    image: "/placeholder.svg?height=300&width=500",
    details: [
      {
        title: "Social Emotional Assessment",
        description: "The process of evaluating an individual's social and emotional skills, competencies, and well-being. It involves the systematic measurement and analysis of various aspects of a person's emotional intelligence, social interactions, self-awareness, self-regulation, empathy, and overall emotional well-being."
      },
      {
        title: "Assessment Areas",
        description: "This assessment identifies to what extent the examinee is: (1) anxious/depressed; (2) withdrawn/depressed; (3) shows somatic complaints; (4) has social problems; (5) has thought problems; (6) has attention problems; (7) displays rule-breaking behavior; and (8) engages in aggressive behavior. These symptoms are categorized as either internalizing or externalizing problems."
      },
      {
        title: "Intervention Planning",
        description: "The diagnosis allows for programmatic recommendations and therapeutic interventions, ranging from psychotherapy/coaching, home-based and school-based strategies, and sometimes medication."
      }
    ]
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

                    {assessment.details && assessment.details.length > 0 && (
                      <div className="mt-4 mb-6">
                        {assessment.details.map((detail, index) => (
                          <div key={index} className="mb-4">
                            <h4 className="font-semibold text-gray-900">{detail.title}</h4>
                            <p className="text-sm text-gray-600">{detail.description}</p>
                          </div>
                        ))}
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
                            <p className="mt-2">
                              <span className="font-medium">Outcome:</span> {assessment.outcome}
                            </p>
                          )}
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
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to common questions about our psychoeducational assessment services.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      How do I know which assessment is right for my child?
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
                      We recommend scheduling an initial consultation where our specialists can discuss your concerns and goals.
                      Based on this conversation, we can recommend the most appropriate assessment for your child's specific
                      needs.
                    </p>
                  </div>
                </details>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      What happens during a psychoeducational assessment?
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
                      The assessment typically involves standardized testing, interviews, observations, and questionnaires. The
                      specific components vary depending on the assessment type, but all are designed to gather comprehensive
                      information about cognitive, academic, and emotional functioning.
                    </p>
                  </div>
                </details>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      How long does it take to receive assessment results?
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
                      After completing the assessment sessions, our team typically requires 1-2 weeks to analyze the results and
                      prepare a comprehensive report. We then schedule a follow-up meeting to discuss the findings and
                      recommendations.
                    </p>
                  </div>
                </details>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between p-6">
                    <h3 className="text-lg font-semibold leading-7 text-gray-900">
                      Can assessment results be shared with my child's school?
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
                      Yes, with your written consent, we can share assessment results with your child's school or other
                      professionals involved in their care. Many families find this helpful for developing educational plans or
                      accessing accommodations.
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

