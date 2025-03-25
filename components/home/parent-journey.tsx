"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MilestoneSubscriptionDialog } from "@/components/milestone/milestone-subscription-dialog"
import Link from "next/link"
import Image from "next/image"

export default function ParentJourney() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Your Child's Journey</h2>
        <p className="mt-4 text-xl leading-8 text-gray-600">
          We're here to support you every step of the way with our comprehensive intervention services
        </p>
      </div>

      <div className="relative">
        {/* Timeline connector */}
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

        {/* Step 1 */}
        <div className="relative mb-12 md:mb-24">
          <div className="hidden md:block absolute left-16 top-0 -translate-x-1/2 z-10">
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
              <span className="text-white text-xl font-semibold">1</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:pl-24">
            <div className="w-full md:w-5/12 md:pr-8 mb-8 md:mb-0">
              <div className="flex md:hidden items-center justify-center w-12 h-12 bg-primary rounded-full mb-4 mx-auto">
                <span className="text-white text-xl font-semibold">1</span>
              </div>
              <div className="text-left md:text-left text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Learn About Your Child's Development</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Explore our blog articles to understand developmental milestones, read about daily routines and different challenges.
                </p>
                <Button asChild className="rounded-full bg-blue-50 text-primary hover:bg-blue-100 px-8 w-full md:w-auto">
                  <Link href="/blogs">Read Our Blog</Link>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-7/12 md:pl-8">
              <div className="bg-blue-50 rounded-xl overflow-hidden p-4">
                <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/consultation-session.jpeg"
                    alt="Consultation session"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 (Was Step 3) */}
        <div className="relative mb-12 md:mb-24">
          <div className="hidden md:block absolute left-16 top-0 -translate-x-1/2 z-10">
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
              <span className="text-white text-xl font-semibold">2</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:pl-24">
            <div className="w-full md:w-5/12 md:pr-8 mb-8 md:mb-0">
              <div className="flex md:hidden items-center justify-center w-12 h-12 bg-primary rounded-full mb-4 mx-auto">
                <span className="text-white text-xl font-semibold">2</span>
              </div>
              <div className="text-left md:text-left text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Fill Onesti's Screening Checklist</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Our screening checklists will help us identify any possible delays or challenges.
                </p>
                <Button asChild className="rounded-full bg-blue-50 text-primary hover:bg-blue-100 px-8 w-full md:w-auto">
                  <Link href="/assessments">Start Screening</Link>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-7/12 md:pl-8">
              <div className="bg-blue-50 rounded-xl overflow-hidden p-4">
                <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/therapy-session.jpeg"
                    alt="Child assessment session"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 (Was Step 4) */}
        <div className="relative mb-12 md:mb-24">
          <div className="hidden md:block absolute left-16 top-0 -translate-x-1/2 z-10">
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
              <span className="text-white text-xl font-semibold">3</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:pl-24">
            <div className="w-full md:w-5/12 md:pr-8 mb-8 md:mb-0">
              <div className="flex md:hidden items-center justify-center w-12 h-12 bg-primary rounded-full mb-4 mx-auto">
                <span className="text-white text-xl font-semibold">3</span>
              </div>
              <div className="text-left md:text-left text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Book Your Free 20-Minute Session</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Schedule a complimentary consultation with one of our specialists to discuss your child's needs.
                </p>
                <Button asChild className="rounded-full bg-blue-50 text-primary hover:bg-blue-100 px-8 w-full md:w-auto">
                  <Link href="/consultation">Book Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-7/12 md:pl-8">
              <div className="bg-blue-50 rounded-xl overflow-hidden p-4">
                <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/child-learning.jpeg"
                    alt="Child learning and growing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 (Was Step 5) */}
        <div className="relative mb-12 md:mb-24">
          <div className="hidden md:block absolute left-16 top-0 -translate-x-1/2 z-10">
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
              <span className="text-white text-xl font-semibold">4</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:pl-24">
            <div className="w-full md:w-5/12 md:pr-8 mb-8 md:mb-0">
              <div className="flex md:hidden items-center justify-center w-12 h-12 bg-primary rounded-full mb-4 mx-auto">
                <span className="text-white text-xl font-semibold">4</span>
              </div>
              <div className="text-left md:text-left text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Start Your Child's Intervention</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Begin your child's intervention with the right program for their unique needs.
                </p>
                <Button asChild className="rounded-full bg-blue-50 text-primary hover:bg-blue-100 px-8 w-full md:w-auto">
                  <Link href="/programs">View Programs</Link>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-7/12 md:pl-8">
              <div className="bg-blue-50 rounded-xl overflow-hidden p-4">
                <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden">
                  <Image src="/images/speech-therapy.jpeg" alt="Child therapy session" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5 (Was Step 2) */}
        <div className="relative">
          <div className="hidden md:block absolute left-16 top-0 -translate-x-1/2 z-10">
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
              <span className="text-white text-xl font-semibold">5</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:pl-24">
            <div className="w-full md:w-5/12 md:pr-8 mb-8 md:mb-0">
              <div className="flex md:hidden items-center justify-center w-12 h-12 bg-primary rounded-full mb-4 mx-auto">
                <span className="text-white text-xl font-semibold">5</span>
              </div>
              <div className="text-left md:text-left text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Track Your Child's Milestones</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Subscribe to receive personalized milestone updates and developmental tips based on your child's age.
                </p>
                <Button
                  className="rounded-full bg-blue-50 text-primary hover:bg-blue-100 px-8 w-full md:w-auto"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Track Milestones
                </Button>
              </div>
            </div>
            <div className="w-full md:w-7/12 md:pl-8">
              <div className="bg-blue-50 rounded-xl overflow-hidden p-4">
                <div className="relative h-48 md:h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/child-development.jpeg"
                    alt="Child development milestones"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Milestone Subscription Dialog */}
      <MilestoneSubscriptionDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}

