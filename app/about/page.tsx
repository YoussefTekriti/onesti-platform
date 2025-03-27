"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MilestoneSubscriptionDialog } from "@/components/milestone/milestone-subscription-dialog"

// Import first three team members
const teamMembers = [
  {
    id: 1,
    name: "Abeer Atiyeh",
    role: "Founder & Executive Director",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 11,
    name: "Katia Hazoury",
    role: "Co-founder & Technical Advisor of Academic Department",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Maritza Abou Halka",
    role: "Co-founder & Managing Partner",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function AboutPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        {/* Introduction / Mission */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Onesti</h1>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-12 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                ONESTI is an innovative online platform, presenting a new and futuristic mode of service delivery for
                families. Onesti utilizes technology to reach concerned parents anywhere in the world and provide them
                with guidance and the needed intervention regarding their child's development, academics, behavior, and
                social-emotional well being.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  Our mission is to make developmental support accessible to all families, regardless of location or
                  resources. Through our innovative platform, we connect parents with specialists, provide tools for
                  tracking milestones, and offer resources to help children reach their full potential.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Onesti team working with children"
                className="rounded-2xl object-cover shadow-lg"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* Story & Background */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Story</h2>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-lg font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <strong className="font-semibold text-gray-900">Founded in 2020.</strong> Onesti was created by a
                    team of child development specialists and tech innovators who saw the need for better remote
                    assessment tools.
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-lg font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <strong className="font-semibold text-gray-900">Expanded services in 2021.</strong> Launched our
                    milestone tracker and assessment tools to help parents identify developmental concerns early.
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-lg font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <strong className="font-semibold text-gray-900">Today.</strong> Serving thousands of families across
                    the region with comprehensive developmental support and resources.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team & Expertise */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Team</h2>
            <Button asChild variant="outline">
              <Link href="/about/team">View All Team Members</Link>
            </Button>
          </div>
          <p className="text-lg leading-8 text-gray-600 mb-8">
            Our team consists of experienced specialists in child development, speech therapy, occupational therapy, and
            more.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((person) => (
              <div key={person.id} className="flex flex-col">
                <div className="flex justify-center">
                  <Image
                    className="h-40 w-40 rounded-full"
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    width={160}
                    height={160}
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900 text-center">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600 text-center">{person.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How Onesti Helps */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">How Onesti Helps</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-8">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">Parents</h3>
              <p className="mt-4 text-gray-600">
                We provide tools to track your child's development, identify potential concerns early, and connect with
                specialists for guidance.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-8">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">Educators</h3>
              <p className="mt-4 text-gray-600">
                Access resources and professional development to better support children with diverse developmental
                needs in your classroom.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-8">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">Specialists</h3>
              <p className="mt-4 text-gray-600">
                Our platform streamlines assessment, reporting, and therapy sessions, allowing you to focus on what
                matters most: helping children.
              </p>
            </div>
          </div>
        </div>

        {/* Onesti Methodology */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Approach</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-[#4b2e83] p-6 flex justify-center items-center h-48">
                <h3 className="text-6xl font-bold text-white">O</h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Online</h3>
                <p className="mt-4 text-gray-600">
                  Many scientific research studies have proven that telepractice is as effective as in-person therapy for many children and adults.
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-[#4b2e83] p-6 flex justify-center items-center h-48">
                <h3 className="text-6xl font-bold text-white">NE</h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Natural Environment</h3>
                <p className="mt-4 text-gray-600">
                  Parents are coached about including intervention activities throughout the child's day, with content individualized to meet their needs.
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-[#4b2e83] p-6 flex justify-center items-center h-48">
                <h3 className="text-6xl font-bold text-white">STI</h3>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Specialized Therapy Intervention</h3>
                <p className="mt-4 text-gray-600">
                  It is important to note that not only does development occur on a continuum with individual variations, but also intervention approaches.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <Button size="lg" onClick={() => setIsDialogOpen(true)}>
            Get Started with Milestone Tracker
          </Button>
        </div>
      </div>

      {/* Milestone Subscription Dialog */}
      <MilestoneSubscriptionDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}

