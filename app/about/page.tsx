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

  // Add animation variants for consistency
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Add connecting elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] -left-64 w-96 h-96 bg-[#4b2e83]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] -right-64 w-96 h-96 bg-[#4b2e83]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F4F1F9]/50 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section with Modern Design */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F1F9]/30 via-white to-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                What Is ONESTI
              </h1>
              <div className="h-1 w-24 bg-[#4b2e83] mx-auto"></div>
              <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                ONESTI is an innovative online platform, presenting a new and futuristic mode of service delivery for families. Onesti utilizes technology to reach concerned parents anywhere in the world and provide them with guidance and the needed intervention regarding their child's development, academics, behavior, and social-emotional well being.
              </p>
          </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Main Content */}
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
              <p className="text-lg leading-7 text-gray-700 mb-8">
                Our focus is on child development, behavioral support, academic success, and emotional well-being, all backed by a holistic, evidence-based approach. We help children overcome developmental challenges and achieve their full potential.
              </p>
              <div className="bg-[#F4F1F9]/30 rounded-3xl p-8">
                <h3 className="text-xl font-semibold text-[#4b2e83] mb-6">Through our website, parents and caregivers can easily access:</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-[#4b2e83]" />
                      </div>
                      <p className="text-gray-700">
                      Complete child development assessments to track your child's progress and identify areas for improvement.
                      </p>
                    </li>
                  <li className="flex gap-4 items-start">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-[#4b2e83]" />
                      </div>
                      <p className="text-gray-700">
                      Book consultations with our team of specialists for expert guidance tailored to your child's needs.
                      </p>
                    </li>
                  <li className="flex gap-4 items-start">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-[#4b2e83]" />
                      </div>
                      <p className="text-gray-700">
                      Access a wealth of learning resources to help you understand and support your child's development at every stage.
                      </p>
                    </li>
                  <li className="flex gap-4 items-start">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-[#4b2e83]" />
                      </div>
                      <p className="text-gray-700">
                      Monitor progress through a personalized dashboard, where you can keep track of assessments, consultations, and milestones in one place.
                </p>
                    </li>
                  </ul>
              </div>
              </motion.div>
            
            {/* Image/Visual Column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#4b2e83]/5 rounded-3xl p-8"
              >
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                  src="/placeholder.svg"
                  alt="Our services cater to children of all ages"
                  className="object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4b2e83]/90 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-xl font-semibold mb-3">Our services cater to children of all ages</h3>
                  <p className="text-white/90">
                    Starting from birth, covering developmental delays, learning disabilities, emotional and behavioral challenges.
                  </p>
                </div>
                </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Onesti Section - with curved separator */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F4F1F9]/10 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gray-300"></div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Why Choose Us</span>
              <div className="h-px w-12 bg-gray-300"></div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold tracking-tight text-[#4b2e83] mb-4"
                animate={{ 
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #4b2e83, #6b4e93, #4b2e83)',
                  backgroundSize: '200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Why Choose Onesti?
              </motion.h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our innovative online platform provides exceptional service delivery for families worldwide.
              </p>
            </motion.div>
          </div>

          <div className="space-y-20">
            {[
              {
                title: "Quality Standards",
                icon: BookOpen,
                description: "Onesti's professional team of technical advisors ensure the consistent provision of the highest quality of service."
              },
              {
                title: "Convenience",
                icon: BarChart4,
                description: "Onesti brings the service to the comfort of your home saving you the time and effort that is otherwise spent on the road trying to manage the different therapy appointments at different locations."
              },
              {
                title: "New and Unique Service Provision",
                icon: Users,
                description: "Allowing a team of professionals to provide a comprehensive delivery model that is accessible to you wherever you are."
              },
              {
                title: "Decrease Parent Stressors",
                icon: Baby,
                description: "Taking into consideration all life stressors affecting parent's daily life, Onesti's website allows parents to schedule sessions according to their own timetable."
              },
              {
                title: "Consistent Parent Evaluation",
                icon: BarChart2,
                description: "Monitor how your child is progressing through every session by accessing his online plan and progress monitoring via your personalized dashboard."
              },
              {
                title: "Using Technology as a Motivational Factor",
                icon: Brain,
                description: "Our online sessions incorporate the use of new software tools and gaming technologies to increase child engagement and motivation."
              },
              {
                title: "Clinical Setting vs Natural Environment",
                icon: Heart,
                description: "Incorporating therapy objectives into the family's daily routine and taking advantage of the naturally occurring learning opportunities gives the child consistent practice throughout the day."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1,
                  type: "spring", 
                  stiffness: 100,
                  damping: 15
                }}
                className="relative"
              >
                <motion.div 
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div 
                      className="bg-white rounded-3xl shadow-lg border border-[#4b2e83]/10 p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                      whileHover={{ y: -5 }}
                    >
                      {/* Background pattern */}
                      <div className="absolute -right-16 -bottom-16 w-40 h-40 rounded-full bg-[#F4F1F9]/30 opacity-50"></div>
                      <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-[#F4F1F9]/50 opacity-50"></div>
                      
                      <div className="flex items-center gap-6 mb-6">
                        <motion.div 
                          className="bg-[#F4F1F9] rounded-2xl p-4 relative"
                          whileHover={{ 
                            rotate: [0, -5, 5, -5, 0],
                            transition: { duration: 0.5 }
                          }}
                        >
                          <item.icon className="h-8 w-8 text-[#4b2e83]" />
                          <motion.div 
                            className="absolute inset-0 bg-[#4b2e83] rounded-2xl"
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ 
                              scale: 1, 
                              opacity: 1,
                              transition: { duration: 0.3 }
                            }}
                          >
                            <div className="h-full w-full flex items-center justify-center">
                              <item.icon className="h-8 w-8 text-white" />
                            </div>
                          </motion.div>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-[#4b2e83] relative">
                          {item.title}
                          <motion.div 
                            className="absolute -bottom-2 left-0 h-1 bg-[#4b2e83]/30"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                          />
                        </h3>
                      </div>
                      <motion.p 
                        className="text-gray-600 text-lg leading-relaxed relative z-10"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {item.description}
                      </motion.p>
                    </motion.div>
                  </div>
                  <div className="w-full md:w-1/2 relative">
                    <motion.div 
                      className={`bg-[#F4F1F9]/20 rounded-3xl p-8 ${
                        index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                      }`}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <div className="aspect-[4/3] relative rounded-2xl overflow-hidden group">
                        <Image
                          src="/placeholder.svg"
                          alt={item.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-[#4b2e83] to-transparent opacity-60"
                          whileHover={{ opacity: 0.75 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Connector line between items */}
                {index < 6 && (
                  <motion.div 
                    className="w-px h-20 bg-gradient-to-b from-[#4b2e83]/30 to-transparent mx-auto my-0"
                    initial={{ height: 0 }}
                    whileInView={{ height: 60 }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F4F1F9]/10 to-transparent"></div>
      </section>

      {/* Our Approach Section - with improved connection */}
      <section className="relative py-20 bg-gradient-to-b from-white via-[#F4F1F9]/10 to-white">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gray-300"></div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Our Approach</span>
              <div className="h-px w-12 bg-gray-300"></div>
            </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
              className="text-center"
          >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#4b2e83] mb-4">Our Approach</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in a comprehensive, personalized approach to child development
            </p>
          </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                letter: "O",
                title: "Online/Onsite",
                description: "Therapy delivered virtually or in person",
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
                description: "Tailored, evidence-based interventions designed by our experts to meet each child's specific challenges",
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
                <div className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group rounded-[2.5rem] bg-white border border-[#4b2e83]/10">
                  <div className="bg-gradient-to-r from-[#4b2e83] to-[#6b4e93] p-8 flex justify-between items-center rounded-t-[2.5rem]">
                    <h3 className="text-5xl font-bold text-white">{item.letter}</h3>
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
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Our Services Section - with improved transitions */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center gap-8 mb-6">
              <div className="h-px w-20 bg-gray-200"></div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">OUR SERVICES</span>
              <div className="h-px w-20 bg-gray-200"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#4b2e83] mb-6">Our Services</h2>
            <div className="h-1 w-24 bg-[#4b2e83] mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Onesti provides an array of services including assessment, consultation, specialized developmental therapy, academic intervention, behavior modification, in addition to guidance and counseling.
            </p>
          </motion.div>

          {/* Moving services banner */}
          <div className="relative">
            {/* First moving banner - from left to right */}
            <motion.div 
              className="flex space-x-8 mb-8"
              initial={{ x: "-10%" }}
              animate={{ x: "-110%" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear"
              }}
            >
              {[
                {
                  title: "Speech and Language Therapy",
                  icon: MessageSquare,
                  color: "bg-[#4b2e83]",
                  textColor: "text-white"
                },
                {
                  title: "Occupational Therapy",
                  icon: Brain,
                  color: "bg-[#F4F1F9]",
                  textColor: "text-[#4b2e83]"
                },
                {
                  title: "Special Education",
                  icon: GraduationCap,
                  color: "bg-[#4b2e83]",
                  textColor: "text-white"
                },
                {
                  title: "Applied Behavior Analysis",
                  icon: BarChart2,
                  color: "bg-[#F4F1F9]",
                  textColor: "text-[#4b2e83]"
                },
                {
                  title: "Career Guidance and Counseling",
                  icon: Compass,
                  color: "bg-[#4b2e83]",
                  textColor: "text-white"
                },
                {
                  title: "Psycho-Social Support",
                  icon: HeartHandshake,
                  color: "bg-[#F4F1F9]",
                  textColor: "text-[#4b2e83]"
                },
                {
                  title: "Diagnostic Unit",
                  icon: Search,
                  color: "bg-[#4b2e83]",
                  textColor: "text-white"
                }
              ].map((service, index) => (
                <div 
                  key={`banner1-${service.title}`}
                  className={`flex-none rounded-full ${service.color} px-8 py-4 shadow-md min-w-max`}
                >
                  <div className="flex items-center gap-3">
                    <service.icon className={`h-6 w-6 ${service.textColor}`} />
                    <h3 className={`text-lg font-semibold ${service.textColor} whitespace-nowrap`}>
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
              {/* Duplicate items to ensure continuous flow */}
              {[
                {
                  title: "Speech and Language Therapy",
                  icon: MessageSquare,
                  color: "bg-[#4b2e83]",
                  textColor: "text-white"
                },
                {
                  title: "Occupational Therapy",
                  icon: Brain,
                  color: "bg-[#F4F1F9]",
                  textColor: "text-[#4b2e83]"
                },
                {
                  title: "Special Education",
                  icon: GraduationCap,
                  color: "bg-[#4b2e83]",
                  textColor: "text-white"
                },
                {
                  title: "Applied Behavior Analysis",
                  icon: BarChart2,
                  color: "bg-[#F4F1F9]",
                  textColor: "text-[#4b2e83]"
                }
              ].map((service, index) => (
                <div 
                  key={`banner1-duplicate-${service.title}`}
                  className={`flex-none rounded-full ${service.color} px-8 py-4 shadow-md min-w-max`}
                >
                  <div className="flex items-center gap-3">
                    <service.icon className={`h-6 w-6 ${service.textColor}`} />
                    <h3 className={`text-lg font-semibold ${service.textColor} whitespace-nowrap`}>
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Second moving banner - from right to left */}
            <motion.div 
              className="flex space-x-8"
              initial={{ x: "-110%" }}
              animate={{ x: "-10%" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear"
              }}
            >
              {[
                {
                  title: "Diagnostic Unit",
                  icon: Search,
                  color: "bg-[#F4F1F9]",
                  textColor: "text-[#4b2e83]"
                },
                {
                  title: "Psycho-Social Support",
                  icon: HeartHandshake,
                  color: "bg-[#4b2e83]",
                  textColor: "text-white"
                },
                {
                  title: "Career Guidance and Counseling",
                  icon: Compass,
                  color: "bg-[#F4F1F9]",
                  textColor: "text-[#4b2e83]"
                },
                {
                  title: "Applied Behavior Analysis",
                  icon: BarChart2,
                  color: "bg-[#4b2e83]",
                  textColor: "text-white"
                },
                {
                  title: "Special Education",
                  icon: GraduationCap,
                  color: "bg-[#F4F1F9]",
                  textColor: "text-[#4b2e83]"
                },
                {
                  title: "Occupational Therapy",
                  icon: Brain,
                  color: "bg-[#4b2e83]",
                  textColor: "text-white"
                },
                {
                  title: "Speech and Language Therapy",
                  icon: MessageSquare,
                  color: "bg-[#F4F1F9]",
                  textColor: "text-[#4b2e83]"
                }
              ].map((service, index) => (
                <div 
                  key={`banner2-${service.title}`}
                  className={`flex-none rounded-full ${service.color} px-8 py-4 shadow-md min-w-max`}
                >
                  <div className="flex items-center gap-3">
                    <service.icon className={`h-6 w-6 ${service.textColor}`} />
                    <h3 className={`text-lg font-semibold ${service.textColor} whitespace-nowrap`}>
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
              {/* Duplicate items to ensure continuous flow */}
              {[
                {
                  title: "Applied Behavior Analysis",
                  icon: BarChart2,
                  color: "bg-[#4b2e83]",
                  textColor: "text-white"
                },
                {
                  title: "Career Guidance and Counseling",
                  icon: Compass,
                  color: "bg-[#F4F1F9]",
                  textColor: "text-[#4b2e83]"
                },
                {
                  title: "Psycho-Social Support",
                  icon: HeartHandshake,
                  color: "bg-[#4b2e83]",
                  textColor: "text-white"
                },
                {
                  title: "Diagnostic Unit",
                  icon: Search,
                  color: "bg-[#F4F1F9]",
                  textColor: "text-[#4b2e83]"
                }
              ].map((service, index) => (
                <div 
                  key={`banner2-duplicate-${service.title}`}
                  className={`flex-none rounded-full ${service.color} px-8 py-4 shadow-md min-w-max`}
                >
                  <div className="flex items-center gap-3">
                    <service.icon className={`h-6 w-6 ${service.textColor}`} />
                    <h3 className={`text-lg font-semibold ${service.textColor} whitespace-nowrap`}>
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Improved CTA button */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/programs">
              <Button variant="outline" className="rounded-full border-[#4b2e83] text-[#4b2e83] hover:bg-[#4b2e83] hover:text-white group transition-all duration-300 px-8 py-6 shadow-sm hover:shadow-md">
                Explore Our Programs
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Team & Expertise with Story Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gray-300"></div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Our Story</span>
              <div className="h-px w-12 bg-gray-300"></div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                animate={{ 
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #4b2e83, #6b4e93, #4b2e83)',
                  backgroundSize: '200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >Our Team</motion.h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experienced specialists dedicated to child development
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 gap-x-12">
            {teamMembers.map((person, index) => (
              <motion.div 
                key={person.id} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="group relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="relative h-60 w-60 overflow-hidden rounded-full mb-6 bg-[#4b2e83]/5 flex items-center justify-center shadow-md border-4 border-white">
                    <Image
                      className="h-60 w-60 rounded-full object-cover transition-all duration-500 group-hover:scale-110"
                      src={person.image}
                      alt={person.name}
                      width={240}
                      height={240}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-[#4b2e83] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.8 }}
                    >
                      <div className="p-6 text-center">
                        <Link 
                          href={`/team/${person.id}`} 
                          className="inline-flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-white/30 transition-colors group"
                        >
                          View Profile
                          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                
                <div className="text-center">
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {person.name}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-[#4b2e83] mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {person.role}
                  </motion.p>
                  <motion.div
                    className="h-1 w-0 bg-[#4b2e83]/20 mx-auto rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full hover:bg-[#4b2e83] hover:text-white transition-all duration-300 px-7 py-6 border-[#4b2e83] text-[#4b2e83] shadow-sm hover:shadow-md"
            >
              <Link href="/about/team" className="group">
                View All Team Members
                <ChevronRight className="ml-2 h-4 w-4 inline-block group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

        {/* How Onesti Helps */}
      <section className="py-20 bg-[#F4F1F9]/30 rounded-3xl mx-6 lg:mx-10 my-10">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-white"></div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">How We Help</span>
              <div className="h-px w-12 bg-white"></div>
            </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
              className="text-center"
          >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#4b2e83] mb-4">How Onesti Helps</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Supporting all stakeholders in a child's developmental journey
            </p>
          </motion.div>
          </div>

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

      {/* CTA - Empowering Story Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gray-300"></div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Our Promise</span>
              <div className="h-px w-12 bg-gray-300"></div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#4b2e83] mb-4">
              Onesti is not just about assessment, but also about empowering you to take proactive steps towards your child's development.
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
              With technology and a human approach, we are here to support you every step of the way on your journey to helping your child thrive.
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

