"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquareText, Brain, Sparkles, HeartHandshake, CreditCard } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

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
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null);
  const [showPurchaseDialog, setShowPurchaseDialog] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const handleBuyNow = (assessmentId: string) => {
    setSelectedAssessment(assessmentId);
    setShowPurchaseDialog(true);
  };

  const handleProceedToPayment = () => {
    setShowPurchaseDialog(false);
    setShowPayment(true);
  };

  const completePurchase = () => {
    setIsPurchased(true);
    setShowPayment(false);
    // In a real app, you would link this purchase to the user's profile
    setTimeout(() => {
      setIsPurchased(false);
    }, 3000);
  };

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
                      <Button 
                        className="bg-[#4b2e83] hover:bg-[#4b2e83]/90 w-full sm:w-auto" 
                        onClick={() => handleBuyNow(assessment.id)}
                      >
                        <CreditCard className="mr-2 h-4 w-4" /> Buy Now
                      </Button>
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
            Purchase an assessment today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Button className="bg-white text-[#4b2e83] hover:bg-gray-100" size="lg" asChild>
              <Link href="#assessments">View Assessments</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Purchase Dialog */}
      <Dialog open={showPurchaseDialog} onOpenChange={setShowPurchaseDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Assessment Selection</DialogTitle>
            <DialogDescription>
              {selectedAssessment && `You've selected the ${assessments.find(a => a.id === selectedAssessment)?.name} for ${assessments.find(a => a.id === selectedAssessment)?.price}.`}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-gray-500">
              After purchase, this assessment will appear in your dashboard. Our team will contact you to schedule the session.
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <h4 className="font-medium text-gray-900 mb-2">Package Includes:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#4b2e83] mt-1">•</span>
                  <span>One professional assessment session</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4b2e83] mt-1">•</span>
                  <span>Detailed evaluation report</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4b2e83] mt-1">•</span>
                  <span>Follow-up consultation to discuss results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4b2e83] mt-1">•</span>
                  <span>Personalized recommendations</span>
                </li>
              </ul>
            </div>
          </div>
          <DialogFooter className="flex items-center justify-end space-x-2">
            <Button variant="outline" onClick={() => setShowPurchaseDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleProceedToPayment}>
              Proceed to Checkout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Payment Dialog */}
      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent className="sm:max-w-[500px] w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Payment</DialogTitle>
            <DialogDescription>
              Complete your payment to purchase your assessment
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-lg bg-muted p-4 mb-6">
              <h3 className="font-medium">Order Summary</h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Assessment:</span>
                  <span className="text-sm font-medium">
                    {selectedAssessment && assessments.find(a => a.id === selectedAssessment)?.name}
                  </span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-medium">Total:</span>
                  <span className="font-medium">
                    {selectedAssessment && assessments.find(a => a.id === selectedAssessment)?.price}
                  </span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="card">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="card">Credit Card</TabsTrigger>
                <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
              </TabsList>
              
              <TabsContent value="card" className="space-y-4 mt-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name on Card</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="bank" className="space-y-4 mt-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">Bank Transfer Details</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Bank Name:</span>
                      <span className="text-sm font-medium">Example Bank</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Account Name:</span>
                      <span className="text-sm font-medium">Onesti Therapy Services</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Account Number:</span>
                      <span className="text-sm font-medium">1234567890</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Routing Number:</span>
                      <span className="text-sm font-medium">987654321</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Please include your name and "Assessment" in the transfer description.
                  </p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex items-center space-x-2 mt-6">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>
          </div>
          <DialogFooter className="flex flex-col gap-2 sm:flex-row">
            <Button variant="outline" onClick={() => {
              setShowPayment(false);
              setShowPurchaseDialog(true);
            }} className="sm:order-1">
              Back
            </Button>
            <Button onClick={completePurchase} className="sm:order-2">
              <CreditCard className="mr-2 h-4 w-4" /> Complete Purchase
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Message */}
      {isPurchased && (
        <div className="fixed bottom-4 right-4 z-50 max-w-[90vw] md:max-w-md bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center shadow-lg">
          <svg className="h-5 w-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Purchase successful! You can view this in your dashboard.</span>
        </div>
      )}
    </div>
  )
}

