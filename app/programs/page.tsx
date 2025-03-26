"use client"

import React, { useState } from "react"
import { Tab } from "@headlessui/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  MessageSquare, 
  Shield, 
  Move, 
  Headphones, 
  Droplet, 
  User, 
  Eye, 
  Utensils, 
  Moon, 
  Heart 
} from "lucide-react"
import { motion } from "framer-motion"

// Define the program data
const programsData = [
  {
    id: "alphabet",
    title: "ALPHABEႵ",
    description: "A comprehensive program designed to develop early literacy skills, focusing on alphabet recognition, phonics, and pre-reading fundamentals.",
    content: "ALPHABEႵ focuses on developing early literacy skills through engaging activities and structured learning. The program helps children recognize letters, understand phonics, and build a foundation for reading success.",
    icon: BookOpen,
    color: "#4b2e83"
  },
  {
    id: "speak",
    title: "SPEAK",
    description: "Speech development program aimed at improving communication skills, vocabulary expansion, and speech clarity for children of all abilities.",
    content: "Our SPEAK program addresses various aspects of speech and language development. Through targeted activities and exercises, children improve articulation, expand vocabulary, and develop stronger communication skills.",
    icon: MessageSquare,
    color: "#6a52a3"
  },
  {
    id: "brave-to-behave",
    title: "BRAVE TO BEHAVE",
    description: "Behavior management program that helps children develop self-regulation, emotional control, and positive behavioral patterns.",
    content: "BRAVE TO BEHAVE helps children understand and regulate their emotions and behaviors. The program teaches coping strategies, emotional identification, and appropriate expression of feelings in various situations.",
    icon: Shield,
    color: "#8977bd"
  },
  {
    id: "reach-up",
    title: "REACH UP",
    description: "Gross motor skills program focusing on developing strength, coordination, and physical abilities through targeted activities.",
    content: "REACH UP develops physical abilities through fun and engaging activities. The program improves gross motor coordination, strength, balance, and overall physical confidence.",
    icon: Move,
    color: "#a69cd8"
  },
  {
    id: "senses-in-harmony",
    title: "SENSES IN HARMONY",
    description: "Sensory integration program designed to help children process and respond appropriately to sensory information in their environment.",
    content: "SENSES IN HARMONY helps children who experience sensory processing difficulties. The program provides strategies and activities to improve sensory integration, reduce sensitivity, and develop appropriate responses to various sensory inputs.",
    icon: Headphones,
    color: "#c1b7e8"
  },
  {
    id: "poopee-time",
    title: "POOPEE TIME",
    description: "Toilet training program that provides structured guidance for developing independence in bathroom routines and hygiene.",
    content: "Our POOPEE TIME program offers a structured approach to toilet training that respects each child's developmental readiness. It includes practical strategies for parents and caregivers to support this important milestone.",
    icon: Droplet,
    color: "#4b2e83"
  },
  {
    id: "independent-me",
    title: "INDEPENDENT ME",
    description: "Self-help skills program promoting independence in daily activities, from dressing to personal organization.",
    content: "INDEPENDENT ME focuses on developing essential self-help skills that promote autonomy and confidence. Children learn dressing, organization, and self-care skills appropriate for their developmental level.",
    icon: User,
    color: "#6a52a3"
  },
  {
    id: "i-cue",
    title: "I CUE",
    description: "Social cues recognition program helping children understand and respond appropriately to social signals and interactions.",
    content: "I CUE helps children recognize and interpret social cues, facial expressions, and body language. The program develops social awareness and appropriate response strategies for various social situations.",
    icon: Eye,
    color: "#8977bd"
  },
  {
    id: "bon-appetit",
    title: "BON APPETIT",
    description: "Feeding program addressing picky eating, food aversions, and developing healthy eating habits and mealtime routines.",
    content: "BON APPETIT addresses feeding challenges through a positive, developmentally appropriate approach. The program helps establish healthy mealtime routines and expand food acceptance for children with feeding difficulties.",
    icon: Utensils,
    color: "#a69cd8"
  },
  {
    id: "peaceful-zzzz",
    title: "PEACEFUL \"ZZZZ\"",
    description: "Sleep training program providing strategies for establishing healthy sleep patterns and bedtime routines.",
    content: "PEACEFUL \"ZZZZ\" offers evidence-based strategies to establish healthy sleep habits. The program addresses common sleep challenges and helps families develop consistent, effective bedtime routines.",
    icon: Moon,
    color: "#c1b7e8"
  },
  {
    id: "well-be-ing",
    title: "WELL-BE-ING",
    description: "Holistic wellness program focusing on overall physical and emotional wellbeing through balanced development.",
    content: "WELL-BE-ING takes a holistic approach to child development, addressing physical, emotional, and social aspects of wellness. The program provides strategies that promote overall health and balanced development.",
    icon: Heart,
    color: "#4b2e83"
  },
]

export default function ProgramsPage() {
  // Split programs into two rows
  const firstRowPrograms = programsData.slice(0, 6);
  const secondRowPrograms = programsData.slice(6);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="bg-white py-12 md:py-16">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#4b2e83] mb-4">
            Our Programs
          </h1>
          <div className="w-24 h-1 bg-[#4b2e83] mx-auto mb-8"></div>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Comprehensive intervention programs designed to support children's development
            across a wide range of skills and abilities.
          </p>
        </motion.div>
      </section>

      {/* Programs tabs */}
      <section className="py-12 container mx-auto px-4">
        <Tab.Group onChange={setSelectedTabIndex}>
          <div className="flex flex-col mb-10">
            {/* First row of tabs */}
            <Tab.List className="flex flex-wrap md:flex-nowrap rounded-t-xl bg-gray-100 p-1 overflow-x-auto">
              {firstRowPrograms.map((program, index) => (
                <Tab
                  key={program.id}
                  className={({ selected }) =>
                    `flex-1 min-w-[140px] whitespace-nowrap px-4 py-3 text-sm md:text-base font-medium leading-5 transition-all duration-200 flex items-center justify-center gap-2
                    ${
                      selected
                        ? "bg-white text-[#4b2e83] shadow rounded-t-lg"
                        : "text-gray-600 hover:bg-white/[0.12] hover:text-[#4b2e83]"
                    }`
                  }
                >
                  {React.createElement(program.icon, { 
                    size: 18, 
                    className: selectedTabIndex === index ? "text-[#4b2e83]" : "text-gray-500" 
                  })}
                  {program.title}
                </Tab>
              ))}
            </Tab.List>
            
            {/* Second row of tabs */}
            <Tab.List className="flex flex-wrap md:flex-nowrap rounded-b-xl bg-gray-100 p-1 border-t border-gray-200 overflow-x-auto">
              {secondRowPrograms.map((program, index) => (
                <Tab
                  key={program.id}
                  className={({ selected }) =>
                    `flex-1 min-w-[140px] whitespace-nowrap px-4 py-3 text-sm md:text-base font-medium leading-5 transition-all duration-200 flex items-center justify-center gap-2
                    ${
                      selected
                        ? "bg-white text-[#4b2e83] shadow rounded-b-lg"
                        : "text-gray-600 hover:bg-white/[0.12] hover:text-[#4b2e83]"
                    }`
                  }
                >
                  {React.createElement(program.icon, { 
                    size: 18,
                    className: selectedTabIndex === index + 6 ? "text-[#4b2e83]" : "text-gray-500"
                  })}
                  {program.title}
                </Tab>
              ))}
            </Tab.List>
          </div>
            
          <Tab.Panels className="mt-8">
            {programsData.map((program, index) => (
              <Tab.Panel
                key={program.id}
                className="rounded-xl bg-white p-6 border border-gray-200"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="p-3 rounded-full" 
                      style={{ backgroundColor: `${program.color}20` }}
                    >
                      {React.createElement(program.icon, { 
                        size: 24, 
                        className: `text-[${program.color}]` 
                      })}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#4b2e83]">{program.title}</h2>
                      <p className="text-gray-600 mt-2">{program.description}</p>
                    </div>
                  </div>
                  <div className="my-6 border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-3">Program Details</h3>
                    <p className="text-gray-700 mb-4">{program.content}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <motion.div 
                        className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="font-medium text-[#4b2e83] mb-2">Who Can Benefit</h4>
                        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                          <li>Children with developmental delays or concerns</li>
                          <li>Children who need support in specific skill areas</li>
                          <li>Children of various ages and ability levels</li>
                          <li>Families seeking structured intervention approaches</li>
                        </ul>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h4 className="font-medium text-[#4b2e83] mb-2">Program Features</h4>
                        <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                          <li>Individualized assessment and planning</li>
                          <li>Evidence-based techniques and strategies</li>
                          <li>Regular progress monitoring</li>
                          <li>Parent and caregiver involvement</li>
                        </ul>
                      </motion.div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href={`/packages#${program.id}`}>
                          <Button className="bg-[#4b2e83] hover:bg-[#4b2e83]/90 px-6 py-2 shadow-md">
                            View Related Packages
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#4b2e83] mb-4">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Our specialized programs are tailored to meet each child's unique needs and developmental goals. 
            Contact us today to learn which programs would benefit your child.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <Button className="bg-[#4b2e83] hover:bg-[#4b2e83]/90 px-8 py-3 rounded-md text-white shadow-md">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
} 