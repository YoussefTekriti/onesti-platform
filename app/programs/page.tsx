"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Define the program data
const programsData = [
  {
    id: "alphabet",
    title: "ALPHABEႵ",
    description: "A comprehensive program designed to develop early literacy skills, focusing on alphabet recognition, phonics, and pre-reading fundamentals.",
    color: "#4b2e83",
  },
  {
    id: "speak",
    title: "SPEAK",
    description: "Speech development program aimed at improving communication skills, vocabulary expansion, and speech clarity for children of all abilities.",
    color: "#5d3d9a",
  },
  {
    id: "brave-to-behave",
    title: "BRAVE TO BEHAVE",
    description: "Behavior management program that helps children develop self-regulation, emotional control, and positive behavioral patterns.",
    color: "#6f4eb1",
  },
  {
    id: "reach-up",
    title: "REACH UP",
    description: "Gross motor skills program focusing on developing strength, coordination, and physical abilities through targeted activities.",
    color: "#815fc8",
  },
  {
    id: "senses-in-harmony",
    title: "SENSES IN HARMONY",
    description: "Sensory integration program designed to help children process and respond appropriately to sensory information in their environment.",
    color: "#9370df",
  },
  {
    id: "poopee-time",
    title: "POOPEE TIME",
    description: "Toilet training program that provides structured guidance for developing independence in bathroom routines and hygiene.",
    color: "#a581f6",
  },
  {
    id: "independent-me",
    title: "INDEPENDENT ME",
    description: "Self-help skills program promoting independence in daily activities, from dressing to personal organization.",
    color: "#8763d6",
  },
  {
    id: "i-cue",
    title: "I CUE",
    description: "Social cues recognition program helping children understand and respond appropriately to social signals and interactions.",
    color: "#7955cd",
  },
  {
    id: "bon-appetit",
    title: "BON APPETIT",
    description: "Feeding program addressing picky eating, food aversions, and developing healthy eating habits and mealtime routines.",
    color: "#6b46c4",
  },
  {
    id: "peaceful-zzzz",
    title: "PEACEFUL \"ZZZZ\"",
    description: "Sleep training program providing strategies for establishing healthy sleep patterns and bedtime routines.",
    color: "#5d38bb",
  },
  {
    id: "well-be-ing",
    title: "WELL-BE-ING",
    description: "Holistic wellness program focusing on overall physical and emotional wellbeing through balanced development.",
    color: "#4f29b2",
  },
]

export default function ProgramsPage() {
  const [activeProgram, setActiveProgram] = useState<string | null>(null)

  const handleProgramClick = (id: string) => {
    setActiveProgram(activeProgram === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#4b2e83] mb-4">
            Our Programs
          </h1>
          <div className="w-24 h-1 bg-[#4b2e83] mx-auto mb-8"></div>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Comprehensive intervention programs designed to support children's development
            across a wide range of skills and abilities.
          </p>
        </div>
      </section>

      {/* Programs grid */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programsData.map((program) => (
            <ProgramCard 
              key={program.id}
              program={program}
              isActive={activeProgram === program.id}
              onClick={() => handleProgramClick(program.id)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[#4b2e83] mb-4">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Our specialized programs are tailored to meet each child's unique needs and developmental goals. 
            Contact us today to learn which programs would benefit your child.
          </p>
          <Link href="/contact">
            <Button className="bg-[#4b2e83] hover:bg-[#4b2e83]/90 px-8 py-3 rounded-md text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

// Program Card Component
interface ProgramCardProps {
  program: {
    id: string
    title: string
    description: string
    color: string
  }
  isActive: boolean
  onClick: () => void
}

function ProgramCard({ program, isActive, onClick }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card 
        className={`overflow-hidden h-full flex flex-col border border-gray-200 cursor-pointer transform transition-all duration-300 ${
          isActive ? "shadow-lg scale-[1.02]" : "hover:shadow-md hover:scale-[1.01]"
        }`}
        onClick={onClick}
      >
        <div 
          className="p-6 text-center" 
          style={{ backgroundColor: program.color }}
        >
          <h3 className="text-xl font-semibold text-white">{program.title}</h3>
        </div>
        <div className="p-6 flex-grow">
          <p className="text-gray-700">{program.description}</p>
          
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-200"
            >
              <h4 className="font-medium text-[#4b2e83] mb-2">Program Benefits</h4>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                <li>Individualized approach tailored to each child's needs</li>
                <li>Evidence-based techniques and strategies</li>
                <li>Regular progress monitoring and adjustments</li>
                <li>Parent and caregiver involvement and training</li>
              </ul>
              
              <div className="mt-4 text-right">
                <Link href={`/programs/${program.id}`}>
                  <Button className="bg-white text-[#4b2e83] hover:bg-gray-100 border border-[#4b2e83]">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  )
} 