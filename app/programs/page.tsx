"use client"

import React, { useState } from "react"
import { Tab } from "@headlessui/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Define the program data
const programsData = [
  {
    id: "alphabet",
    title: "ALPHABEႵ",
    description: "A comprehensive program designed to develop early literacy skills, focusing on alphabet recognition, phonics, and pre-reading fundamentals.",
    content: "ALPHABEႵ focuses on developing early literacy skills through engaging activities and structured learning. The program helps children recognize letters, understand phonics, and build a foundation for reading success."
  },
  {
    id: "speak",
    title: "SPEAK",
    description: "Speech development program aimed at improving communication skills, vocabulary expansion, and speech clarity for children of all abilities.",
    content: "Our SPEAK program addresses various aspects of speech and language development. Through targeted activities and exercises, children improve articulation, expand vocabulary, and develop stronger communication skills."
  },
  {
    id: "brave-to-behave",
    title: "BRAVE TO BEHAVE",
    description: "Behavior management program that helps children develop self-regulation, emotional control, and positive behavioral patterns.",
    content: "BRAVE TO BEHAVE helps children understand and regulate their emotions and behaviors. The program teaches coping strategies, emotional identification, and appropriate expression of feelings in various situations."
  },
  {
    id: "reach-up",
    title: "REACH UP",
    description: "Gross motor skills program focusing on developing strength, coordination, and physical abilities through targeted activities.",
    content: "REACH UP develops physical abilities through fun and engaging activities. The program improves gross motor coordination, strength, balance, and overall physical confidence."
  },
  {
    id: "senses-in-harmony",
    title: "SENSES IN HARMONY",
    description: "Sensory integration program designed to help children process and respond appropriately to sensory information in their environment.",
    content: "SENSES IN HARMONY helps children who experience sensory processing difficulties. The program provides strategies and activities to improve sensory integration, reduce sensitivity, and develop appropriate responses to various sensory inputs."
  },
  {
    id: "poopee-time",
    title: "POOPEE TIME",
    description: "Toilet training program that provides structured guidance for developing independence in bathroom routines and hygiene.",
    content: "Our POOPEE TIME program offers a structured approach to toilet training that respects each child's developmental readiness. It includes practical strategies for parents and caregivers to support this important milestone."
  },
  {
    id: "independent-me",
    title: "INDEPENDENT ME",
    description: "Self-help skills program promoting independence in daily activities, from dressing to personal organization.",
    content: "INDEPENDENT ME focuses on developing essential self-help skills that promote autonomy and confidence. Children learn dressing, organization, and self-care skills appropriate for their developmental level."
  },
  {
    id: "i-cue",
    title: "I CUE",
    description: "Social cues recognition program helping children understand and respond appropriately to social signals and interactions.",
    content: "I CUE helps children recognize and interpret social cues, facial expressions, and body language. The program develops social awareness and appropriate response strategies for various social situations."
  },
  {
    id: "bon-appetit",
    title: "BON APPETIT",
    description: "Feeding program addressing picky eating, food aversions, and developing healthy eating habits and mealtime routines.",
    content: "BON APPETIT addresses feeding challenges through a positive, developmentally appropriate approach. The program helps establish healthy mealtime routines and expand food acceptance for children with feeding difficulties."
  },
  {
    id: "peaceful-zzzz",
    title: "PEACEFUL \"ZZZZ\"",
    description: "Sleep training program providing strategies for establishing healthy sleep patterns and bedtime routines.",
    content: "PEACEFUL \"ZZZZ\" offers evidence-based strategies to establish healthy sleep habits. The program addresses common sleep challenges and helps families develop consistent, effective bedtime routines."
  },
  {
    id: "well-be-ing",
    title: "WELL-BE-ING",
    description: "Holistic wellness program focusing on overall physical and emotional wellbeing through balanced development.",
    content: "WELL-BE-ING takes a holistic approach to child development, addressing physical, emotional, and social aspects of wellness. The program provides strategies that promote overall health and balanced development."
  },
]

export default function ProgramsPage() {
  // Split programs into two rows
  const firstRowPrograms = programsData.slice(0, 6);
  const secondRowPrograms = programsData.slice(6);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-onesti-purple mb-4">
            Our Programs
          </h1>
          <div className="w-24 h-1 bg-onesti-purple mx-auto mb-8"></div>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Comprehensive intervention programs designed to support children's development
            across a wide range of skills and abilities.
          </p>
        </div>
      </section>

      {/* Programs tabs */}
      <section className="py-12 container mx-auto px-4">
        <Tab.Group>
          <div className="flex flex-col mb-10">
            {/* First row of tabs */}
            <Tab.List className="flex rounded-t-xl bg-gray-100 p-1">
              {firstRowPrograms.map((program) => (
                <Tab
                  key={program.id}
                  className={({ selected }) =>
                    `flex-1 whitespace-nowrap px-6 py-3 text-base font-medium leading-5 transition-all duration-200
                    ${
                      selected
                        ? "bg-white text-onesti-purple shadow"
                        : "text-gray-600 hover:bg-white/[0.12] hover:text-onesti-blue"
                    }`
                  }
                >
                  {program.title}
                </Tab>
              ))}
            </Tab.List>
            
            {/* Second row of tabs */}
            <Tab.List className="flex rounded-b-xl bg-gray-100 p-1 border-t border-gray-200">
              {secondRowPrograms.map((program) => (
                <Tab
                  key={program.id}
                  className={({ selected }) =>
                    `flex-1 whitespace-nowrap px-6 py-3 text-base font-medium leading-5 transition-all duration-200
                    ${
                      selected
                        ? "bg-white text-onesti-purple shadow"
                        : "text-gray-600 hover:bg-white/[0.12] hover:text-onesti-blue"
                    }`
                  }
                >
                  {program.title}
                </Tab>
              ))}
            </Tab.List>
          </div>
            
          <Tab.Panels className="mt-8">
            {programsData.map((program) => (
              <Tab.Panel
                key={program.id}
                className="rounded-xl bg-white p-6 border border-gray-200"
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-onesti-purple">{program.title}</h2>
                  <p className="text-gray-600 mt-2">{program.description}</p>
                </div>
                <div className="my-6 border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold mb-3 text-onesti-blue">Program Details</h3>
                  <p className="text-gray-700 mb-4">{program.content}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-gray-50 p-4 rounded-lg border border-onesti-lightblue/20">
                      <h4 className="font-medium text-onesti-blue mb-2">Who Can Benefit</h4>
                      <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                        <li>Children with developmental delays or concerns</li>
                        <li>Children who need support in specific skill areas</li>
                        <li>Children of various ages and ability levels</li>
                        <li>Families seeking structured intervention approaches</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-onesti-lightblue/20">
                      <h4 className="font-medium text-onesti-blue mb-2">Program Features</h4>
                      <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                        <li>Individualized assessment and planning</li>
                        <li>Evidence-based techniques and strategies</li>
                        <li>Regular progress monitoring</li>
                        <li>Parent and caregiver involvement</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Link href={`/packages#${program.id}`}>
                      <Button className="bg-onesti-purple hover:bg-onesti-purple/90 text-white">
                        View Related Packages
                      </Button>
                    </Link>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-onesti-purple mb-4">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Our specialized programs are tailored to meet each child's unique needs and developmental goals. 
            Contact us today to learn which programs would benefit your child.
          </p>
          <Link href="/contact">
            <Button className="bg-onesti-blue hover:bg-onesti-blue/90 px-8 py-3 rounded-md text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 