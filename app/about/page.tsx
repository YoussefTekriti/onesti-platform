"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MilestoneSubscriptionDialog } from "@/components/milestone/milestone-subscription-dialog"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, BookOpen, Users, BarChart4, Baby, ChevronRight, Heart, MessageSquare, Brain, GraduationCap, Handshake, BarChart2, Compass, HeartHandshake, Search } from "lucide-react"

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
    role: "Technical Advisor of Academic Department",
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
      {/* About Onesti Section with Modern Design */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#4b2e83]/5 to-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">About ONESTI</h1>
            <div className="h-1 w-24 bg-[#4b2e83] mb-10 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-xl leading-8 text-gray-600 mb-6">
                  At ONESTI, we believe every child deserves the right support to grow, learn, and thrive. That's why we provide comprehensive, personalized services for parents, caregivers, and educators, helping children overcome developmental challenges and achieve their full potential.
                </p>
                <p className="text-lg leading-7 text-gray-700 mb-8">
                  Our focus is on child development, behavioral support, academic success, and emotional well-being, all backed by a holistic, evidence-based approach.
                </p>
                <div className="bg-[#F4F1F9] rounded-3xl p-8 shadow-sm border-l-4 border-[#4b2e83] mb-8">
                  <h3 className="text-xl font-semibold text-[#4b2e83] mb-4">Through our website, parents and caregivers can easily access:</h3>
                  <ul className="space-y-5">
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 flex-shrink-0 bg-white rounded-full p-2 shadow-sm">
                        <CheckCircle className="h-5 w-5 text-[#4b2e83]" />
                      </div>
                      <p className="text-gray-700">
                        <span className="font-medium">Complete child development assessments</span> to track your child's progress and identify areas for improvement.
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 flex-shrink-0 bg-white rounded-full p-2 shadow-sm">
                        <CheckCircle className="h-5 w-5 text-[#4b2e83]" />
                      </div>
                      <p className="text-gray-700">
                        <span className="font-medium">Book consultations</span> with our team of specialists for expert guidance tailored to your child's needs.
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 flex-shrink-0 bg-white rounded-full p-2 shadow-sm">
                        <CheckCircle className="h-5 w-5 text-[#4b2e83]" />
                      </div>
                      <p className="text-gray-700">
                        <span className="font-medium">Access a wealth of learning resources</span> to help you understand and support your child's development at every stage.
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 flex-shrink-0 bg-white rounded-full p-2 shadow-sm">
                        <CheckCircle className="h-5 w-5 text-[#4b2e83]" />
                      </div>
                      <p className="text-gray-700">
                        <span className="font-medium">Monitor progress</span> through a personalized dashboard, where you can keep track of assessments, consultations, and milestones in one place.
                      </p>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            {/* Image/Visual Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-full min-h-[320px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Onesti team working with children"
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4b2e83]/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-xl font-semibold mb-3">Our services cater to children of all ages</h3>
                  <p className="text-white/90">
                    Starting from birth, covering developmental delays, learning disabilities, emotional and behavioral challenges.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - More Dynamic */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#4b2e83] sm:text-4xl">Our Approach</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in a comprehensive, personalized approach to child development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                letter: "O",
                title: "Online",
                description: "Many scientific research studies have proven that telepractice is as effective as in-person therapy for many children and adults.",
                icon: BookOpen
              },
              {
                letter: "NE",
                title: "Natural Environment",
                description: "Parents are coached about including intervention activities throughout the child's day, with content individualized to meet their needs.",
                icon: Users
              },
              {
                letter: "STI",
                title: "Specialized Therapy Intervention",
                description: "It is important to note that not only does development occur on a continuum with individual variations, but also intervention approaches.",
                icon: BarChart4
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group border border-[#4b2e83]/10 rounded-3xl">
                  <div className="bg-gradient-to-r from-[#4b2e83] to-[#6b4e93] p-8 flex justify-between items-center rounded-t-3xl">
                    <h3 className="text-6xl font-bold text-white">{item.letter}</h3>
                    <div className="bg-white/10 rounded-full p-3">
                      <item.icon className="h-10 w-10 text-white group-hover:text-white transition-all duration-300" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-[#4b2e83] mb-4 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section - NEW */}
      <section className="py-20 bg-[#F4F1F9]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#4b2e83] sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Onesti provides an array of services including assessment, consultation, specialized developmental therapy, academic intervention, behavior modification, in addition to guidance and counseling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Speech and Language Therapy",
                icon: MessageSquare,
                description: "Expert therapy for communication disorders, language delays, articulation issues, and fluency concerns."
              },
              {
                title: "Occupational Therapy",
                icon: Brain,
                description: "Support for sensory processing, fine motor skills, and daily living activities to promote independence."
              },
              {
                title: "Special Education",
                icon: GraduationCap,
                description: "Tailored academic interventions for children with learning disabilities and educational challenges."
              },
              {
                title: "Behavior Intervention",
                icon: Handshake,
                description: "Evidence-based strategies to address challenging behaviors and promote positive interactions."
              },
              {
                title: "Applied Behavior Analysis",
                icon: BarChart2,
                description: "Structured ABA therapy to develop skills and reduce problem behaviors using positive reinforcement."
              },
              {
                title: "Career Guidance and Counseling",
                icon: Compass,
                description: "Supporting older children and teens in exploring their strengths, interests, and future pathways."
              },
              {
                title: "Psycho-Social Support",
                icon: HeartHandshake,
                description: "Emotional and social development support for children facing various challenges."
              },
              {
                title: "Diagnostic Unit",
                icon: Search,
                description: "Comprehensive assessments to identify developmental concerns and create tailored intervention plans."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#4b2e83]/10 h-full hover:shadow-md transition-all duration-300 hover:border-[#4b2e83]/30 group">
                  <div className="flex items-center mb-5">
                    <div className="w-12 h-12 bg-[#EBE8F1] rounded-full flex items-center justify-center mr-4">
                      <service.icon className="h-5 w-5 text-[#4b2e83]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#4b2e83] group-hover:translate-x-1 transition-transform duration-300">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs">
              <Button variant="outline" className="rounded-full border-[#4b2e83] text-[#4b2e83] hover:bg-[#4b2e83] hover:text-white group transition-all duration-300 px-8 py-6">
                Explore Our Programs
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-[#4b2e83] mb-3">Our Team</h2>
              <p className="text-lg text-gray-600">
                Experienced specialists dedicated to child development
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Button asChild variant="outline" className="mt-4 md:mt-0 rounded-full hover:bg-[#4b2e83] hover:text-white transition-all duration-300 px-7 py-6">
                <Link href="/about/team">View All Team Members</Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {teamMembers.map((person, index) => (
              <motion.div 
                key={person.id} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 w-48 overflow-hidden rounded-full mb-6 bg-[#4b2e83]/5 flex items-center justify-center shadow-md border-4 border-white">
                  <Image
                    className="h-48 w-48 rounded-full object-cover"
                    src={person.image}
                    alt={person.name}
                    width={192}
                    height={192}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
                <p className="text-sm text-[#4b2e83]">{person.role}</p>
                <Link href={`/team/${person.id}`} className="mt-3 inline-flex items-center text-sm font-medium text-[#4b2e83] hover:underline">
                  View Profile <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Onesti Helps */}
      <section className="py-20 bg-[#F4F1F9]/30 rounded-3xl mx-6 lg:mx-10 my-10">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#4b2e83] sm:text-4xl">How Onesti Helps</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Supporting all stakeholders in a child's developmental journey
            </p>
            <div className="h-1 w-20 bg-[#4b2e83] mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                title: "Parents",
                icon: Baby,
                description: "We provide tools to track your child's development, identify potential concerns early, and connect with specialists for guidance."
              },
              {
                title: "Educators",
                icon: BookOpen,
                description: "Access resources and professional development to better support children with diverse developmental needs in your classroom."
              },
              {
                title: "Specialists",
                icon: Users,
                description: "Our platform streamlines assessment, reporting, and therapy sessions, allowing you to focus on what matters most: helping children."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#4b2e83]/10 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-[#4b2e83] to-[#6b4e93] p-6 flex items-center gap-4 rounded-t-3xl">
                    <div className="bg-white rounded-full p-3 shrink-0">
                      <item.icon className="h-6 w-6 text-[#4b2e83]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="p-8 flex-grow bg-white rounded-b-3xl">
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#4b2e83]/5 to-[#6b4e93]/5 rounded-3xl mx-6 lg:mx-10 mb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#4b2e83] mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Begin your journey with Onesti today and give your child the support they deserve.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsDialogOpen(true)}
              className="bg-[#4b2e83] hover:bg-[#4b2e83]/90 text-white px-10 py-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get Started with Milestone Tracker
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Milestone Subscription Dialog */}
      <MilestoneSubscriptionDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}

