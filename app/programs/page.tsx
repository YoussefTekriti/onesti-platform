"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageIcon, ArrowLeftIcon } from "lucide-react"
import { motion } from "framer-motion"

// Define the program data
const programsData = [
  {
    id: "alphabet",
    title: "ALPHABEႵ",
    description: "A supportive online program that helps children who struggle with reading, spelling, language, and math, filling learning gaps and building essential academic skills.",
    content: "ALPHABEႵ is designed to help your child overcome learning challenges and build confidence in their academic skills. Starting with a personalized screening to identify your child's specific needs, we create a tailored plan that addresses all aspects of their development – academic, behavioral, communication, motor, and emotional. What makes this program special is its comprehensive approach to learning difficulties. We don't just work with your child; we also guide you as parents to better understand your child's needs and become actively involved in their learning journey. This partnership between specialists and parents creates a powerful support system for your child's academic growth.",
    additionalContent: "Have you noticed your child struggling with reading, spelling, or math? Don't wait to get help. Complete our quick developmental screening checklist and talk with our friendly professionals to discover how you can support your child's learning right away."
  },
  {
    id: "routine",
    title: "ROUTINE",
    description: "A program that helps children develop consistent daily habits, making everyday activities less stressful and more predictable for the whole family.",
    content: "ROUTINE helps your family create structure and stability in your child's daily life. We know that predictable routines can significantly reduce anxiety and make transitions smoother for children. We begin by looking at your current family routines and finding ways to improve them through visual schedules, gentle transition strategies, and sensory-friendly approaches that work with your child's unique needs. Our specialists focus on the most challenging times of day – mornings, mealtimes, homework, and bedtime – transforming these potential stress points into more manageable and even enjoyable parts of your family's day. As these routines become established, you'll notice your child gaining independence, developing better time-management skills, and experiencing less anxiety about daily activities.",
    additionalContent: "Does your child become upset with transitions or changes in their schedule? Is getting through morning or bedtime routines a daily challenge? Our ROUTINE program can help bring peace and predictability to your family life. Complete our screening checklist to learn how structured routines can help your child thrive."
  },
  {
    id: "aba",
    title: "ABA",
    description: "An individualized behavior support program that helps children develop communication, social skills, and positive behaviors through proven, family-friendly techniques.",
    content: "Our ABA program creates a supportive learning environment tailored specifically to your child's needs. Our certified behavior specialists begin with a thorough assessment to identify which skills would most benefit your child, then design activities that make learning feel like play. We focus on teaching practical communication skills, social interactions, everyday living skills, and reducing challenging behaviors by emphasizing what your child does well. A key part of our approach is parent involvement – we'll show you simple techniques to use at home that reinforce your child's progress. Rather than rigid training sessions, we incorporate learning opportunities throughout your child's natural day, making skills more likely to stick. Throughout the program, we carefully track your child's progress and adjust our approach to ensure they're continually growing and developing.",
    additionalContent: "Early support with proven ABA techniques can make a remarkable difference for children with developmental delays or behavioral challenges. Contact our friendly ABA specialists to discuss how our family-centered approach can help your child reach their full potential in a way that feels natural and supportive."
  },
  {
    id: "speak",
    title: "SPEAK",
    description: "A supportive program that helps children develop stronger communication and language skills through engaging online sessions and practical everyday activities.",
    content: "The SPEAK program helps bridge your child's communication gaps through engaging online therapy sessions that target specific language skills. What makes this program special is that we don't just work with your child – we also teach you simple, effective strategies to use during everyday activities, creating many natural opportunities for your child to practice and improve. At Onesti, we understand that communication challenges often connect with other areas of development. That's why SPEAK takes a whole-child approach, addressing related concerns such as behavior, sensory processing, emotional regulation, and learning skills. This comprehensive approach ensures we're supporting your child's complete development, not just focusing on isolated speech skills.",
    additionalContent: "Have you noticed your child struggling to express themselves or understand language? Early support makes a big difference! Complete our simple developmental screening checklist and speak with our friendly professionals to learn practical ways to boost your child's communication skills right away."
  },
  {
    id: "brave-to-behave",
    title: "BRAVE TO BEHAVE",
    description: "A supportive program that helps children understand their emotions and develop healthy ways to express feelings and manage behavior.",
    content: "BRAVE TO BEHAVE gives your child the tools to understand and manage their emotions and behaviors in different situations. Through engaging activities, we help children recognize their feelings, develop effective coping strategies, and learn positive ways to express themselves. Our approach creates a supportive environment where children feel safe exploring their emotions while developing the self-regulation skills they need for success at home, school, and in social settings."
  },
  {
    id: "reach-up",
    title: "REACH UP",
    description: "A movement-focused program that helps children develop stronger coordination, balance, and physical skills through fun, interactive online activities.",
    content: "Reach UP helps your child develop the physical skills they need for everyday activities and play. We start by assessing your child's current motor abilities – from large movements like running and jumping to fine motor skills like holding a crayon or buttoning clothes. Through fun online sessions tailored to your child's interests and cultural background, we make movement enjoyable and meaningful. A key part of our program is showing you as parents simple ways to incorporate helpful movement activities into your daily routines, turning ordinary moments into opportunities for your child to practice and strengthen their physical skills naturally.",
    additionalContent: "Have you noticed your child having difficulty with physical activities that other children their age can do? Complete our quick developmental screening checklist and speak with our friendly specialists to learn practical ways to support your child's motor development today."
  },
  {
    id: "senses-in-harmony",
    title: "SENSES IN HARMONY",
    description: "A program that helps children who are sensitive to sensory experiences (sounds, textures, movements) become more comfortable and confident in their daily activities.",
    content: "When a child struggles with processing sensory information – like being bothered by certain sounds, textures, or movements – everyday activities can become challenging. Senses in Harmony helps your child better process and respond to sensory experiences through fun, personalized activities. Our online sessions introduce enjoyable sensory experiences tailored to your child's specific needs, home environment, and family dynamics. We'll also teach you practical strategies to adjust your child's surroundings in simple ways that help them feel more comfortable and confident. As your child's sensory processing improves, you'll likely notice positive changes in their daily activities, from mealtime to schoolwork to social interactions.",
    additionalContent: "Does your child become upset by certain sounds, avoid messy play, or seek constant movement? These might be signs of sensory processing differences. Contact our friendly professionals to learn about your child's unique sensory needs and discover simple ways to help them feel more comfortable in their world."
  },
  {
    id: "poopee-time",
    title: "POOPEE TIME",
    description: "A gentle, effective toilet training program that works with your child's developmental readiness and provides parents with practical, step-by-step guidance.",
    content: "If you've tried to toilet train your child multiple times without success, you're not alone! Many parents face this challenge, and there's good news: toilet training is a developmental skill that requires the right timing, approach, and patience. Our PooPee Time program understands that each child is unique and becomes ready for toilet training at their own pace. We first assess your child's developmental readiness across all areas, including their emotional readiness and sensory needs. Then our specialists guide you through a clear, step-by-step process using proven strategies that make toilet training less stressful for everyone. With the right approach and support, what seemed impossible can become a positive milestone in your child's development.",
    additionalContent: "Wondering why toilet training has been challenging for your child? Our PooPee Time checklist helps identify the specific reasons behind your child's difficulties and provides age-appropriate guidance. Connect with our supportive professionals to make toilet training a more positive experience for your family."
  },
  {
    id: "independent-me",
    title: "INDEPENDENT ME",
    description: "A program that helps children develop everyday life skills like dressing, eating, and personal care, building confidence and independence appropriate for their age.",
    content: "Independent ME helps your child master the everyday skills they need to feel confident and capable. We begin by looking at all the building blocks that contribute to independence – including motor skills, communication, social understanding, and behavior regulation. After identifying which specific skills would help your child the most, we work on developing these abilities through engaging, age-appropriate activities. For children with specific diagnoses that affect certain skills, we focus on adapting tasks and tools so they can still achieve meaningful independence in their daily life. Throughout the program, we partner with you as parents, showing you effective ways to help your child practice these new skills naturally within your family routines.",
    additionalContent: "Is your child having difficulty with self-care tasks that seem appropriate for their age? Complete our Independent ME checklist and speak with our supportive professionals to discover practical approaches that can help your child develop greater confidence and independence."
  },
  {
    id: "i-cue",
    title: "I CUE",
    description: "A program that strengthens children's thinking and problem-solving abilities through engaging activities that build on their natural interests and strengths.",
    content: "\"I Cue\" helps your child develop their thinking and reasoning abilities, making everyday challenges easier to overcome. Our approach recognizes that cognitive development connects with all areas of your child's growth, so we take a comprehensive approach that supports your whole child. Through fun, interactive online sessions tailored to your child's specific interests and strengths, we make learning enjoyable and meaningful. We also partner with you as parents, showing you simple ways to incorporate brain-building activities into your daily routines. These everyday learning moments help reinforce important cognitive skills in natural, low-pressure ways that feel like regular family time rather than formal teaching.",
    additionalContent: "Have you noticed your child struggling with problem-solving, memory, or focusing on tasks? Complete our quick developmental screening checklist and connect with our friendly professionals to learn practical ways to support your child's cognitive development today."
  },
  {
    id: "bon-appetit",
    title: "BON APPETIT",
    description: "A supportive feeding program that helps families transform mealtime challenges into positive experiences, from infant feeding to independent eating skills.",
    content: "Bon Appétit transforms eating challenges into enjoyable family experiences. For new parents whose babies struggle with breastfeeding or bottle feeding, our specialists provide gentle guidance to make feeding times more comfortable and connected. If your child is having difficulty transitioning to solid foods, refusing certain textures, or is a picky eater, our feeding experts will share proven strategies to help expand their diet and make mealtimes less stressful. When your child is ready to develop independent eating skills, we'll coach you through the journey from messy finger foods to successful use of utensils and cups. Our approach is always positive and pressure-free, focusing on making food exploration fun and building your child's confidence around eating.",
    additionalContent: "Mealtimes should be enjoyable, not stressful! Whether your child's eating challenges stem from limited food preferences, oral-motor skills, sensory sensitivities, or behavioral factors, our Bon Appetit checklist will help identify the underlying issues. Connect with our supportive feeding specialists to create more peaceful, nourishing mealtimes for your family."
  },
  {
    id: "peaceful-zzzz",
    title: "PEACEFUL \"ZZZZ\"",
    description: "A gentle sleep training program that helps families establish healthy sleep habits, addressing the emotional, behavioral, and sensory factors that affect your child's rest.",
    content: "If bedtime has become a battle and disrupted sleep is leaving everyone in your family exhausted, our Peaceful \"Zzzz\" program can help restore restful nights. We understand that sleep challenges can have many different causes – your child might need emotional reassurance, have sensory sensitivities that make falling asleep difficult, or have developed habits that delay bedtime. Our comprehensive approach looks at all these potential factors to create a sleep plan specifically tailored to your child and family. We combine proven sleep training techniques with strategies that address your child's unique emotional, behavioral, and sensory needs. Our specialists guide you through each step of the process, helping you implement consistent routines that promote better sleep for your child and more peaceful nights for the whole family.",
    additionalContent: "Quality sleep is essential for your child's development and your family's wellbeing. If bedtime has become a source of stress, our sleeping checklist can help identify the specific factors affecting your child's sleep. Connect with our supportive professionals to develop a personalized approach to more peaceful nights."
  },
  {
    id: "well-be-ing",
    title: "WELL-BE-ING",
    description: "A supportive program that helps children, teens, and parents develop emotional skills, build stronger relationships, and navigate life's challenges with confidence.",
    content: "Onesti's Well-Be-ing program offers caring support and practical guidance for children, teenagers, and parents dealing with emotional and social challenges. We focus on building fundamental skills that help people recognize and manage emotions, form healthy relationships, make good decisions, and navigate difficult situations successfully. Learning these skills early helps prevent issues like anxiety and depression while building a foundation for lifelong emotional health. Our approach emphasizes developing self-awareness, understanding others, forming positive relationships, and making responsible choices. The program also strengthens parent-child connections by teaching responsive parenting strategies that support secure emotional bonds. Through compassionate guidance, we help both children and parents develop healthy ways of communicating and connecting, creating more harmonious family relationships.",
    additionalContent: "Has your child been showing signs of emotional distress, anxiety, or difficulty connecting with others? Early support makes a significant difference. Complete our developmental screening checklist and connect with our caring professionals to discover how you can help your child develop stronger emotional and social skills."
  },
  {
    id: "developmental-skills",
    title: "DEVELOPMENTAL SKILLS",
    description: "A comprehensive screening program that looks at your child's overall development, identifying strengths and areas that may benefit from additional support.",
    content: "ONESTI's Developmental Skills Program provides a thorough assessment of your child's development across all key areas: communication, movement, thinking, emotional well-being, and early learning skills. We also look at behavioral patterns to understand any underlying challenges that might be affecting your child's progress. This comprehensive screening helps determine whether your child would benefit from specialized support or if simple guided activities at home or school could help them catch up. After observing your child in different settings and completing the assessment, we provide a clear report highlighting their strengths and any areas of concern. Based on these findings, we create a personalized plan with specific goals, practical strategies, and guidance for parents. We regularly track progress and adjust the plan as your child grows and develops.",
    additionalContent: "Early identification of developmental concerns allows for more effective support. If you've noticed differences in how your child is developing compared to others their age, contact our friendly professionals for a comprehensive assessment and personalized guidance."
  },
  {
    id: "aba-program",
    title: "ABA PROGRAM",
    description: "Comprehensive behavior support programs for schools and home settings that use proven techniques to help children develop positive behaviors and important life skills.",
    content: "Onesti's ABA Programs provide structured, evidence-based support in both educational and home environments. In school settings, our specialists begin by observing the current environment and teaching approaches, then demonstrate effective strategies that teachers can incorporate into their classrooms. For home-based support, we work directly with families to implement practical techniques that address specific behavioral challenges. Both programs are led by certified behavior analysts who provide ongoing guidance and feedback to ensure consistent implementation and measurable progress. Our comprehensive approach addresses social skills development, curriculum modifications for diverse learning needs, positive reinforcement systems, and successful transitions between activities or settings. Throughout the process, we maintain careful documentation to track improvements and adjust strategies as needed.",
    additionalContent: "Our ABA Programs equip teachers, intervention teams, and parents with practical tools to promote positive, lasting behavioral changes. Through our collaborative approach, we create a foundation for ongoing success in supporting children's behavioral development and learning."
  }
]

export default function ProgramsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with enhanced design */}
      <section className="relative bg-gradient-to-b from-[#4b2e83]/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#4b2e83] mb-6">
              Our Support Programs
            </h1>
            <div className="w-24 h-1 bg-[#4b2e83] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Supportive programs designed to help your child grow, learn, and thrive. Each program focuses on different developmental areas, providing personalized guidance for both children and parents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programsData.map((program) => (
            <div
              key={program.id}
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                expandedId === program.id 
                  ? "md:col-span-3 shadow-lg" 
                  : "hover:shadow-md h-full flex flex-col"
              }`}
            >
              {expandedId === program.id ? (
                // Expanded view
                <div className="max-w-6xl mx-auto w-full">
                  {/* Header with back button */}
                  <div className="flex items-center gap-4 mb-8 p-6">
                    <Button
                      onClick={() => setExpandedId(null)}
                      variant="ghost"
                      className="p-2 hover:bg-[#F4F1F9] rounded-full flex-shrink-0"
                    >
                      <ArrowLeftIcon className="w-6 h-6 text-onesti-purple" />
                    </Button>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-onesti-purple">
                        {program.title}
                      </h2>
                      <p className="text-gray-600 mt-1">
                        {program.description}
                      </p>
                    </div>
                  </div>

                  {/* Main content in two columns on larger screens */}
                  <div className="grid md:grid-cols-3 gap-8 p-6">
                    {/* Main content column */}
                    <div className="md:col-span-2 space-y-6">
                      <div className="prose max-w-none">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                          <p className="text-gray-700 leading-relaxed">
                            {program.content}
                          </p>
                          {program.additionalContent && (
                            <div className="mt-6 p-4 bg-[#F4F1F9] rounded-lg border-l-4 border-onesti-purple">
                              <p className="text-gray-700 italic">
                                {program.additionalContent}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action buttons in a grid */}
                      <div className="space-y-4 mt-8">
                        <Link href="/learning" className="block">
                          <Button className="w-full bg-onesti-purple hover:bg-onesti-purple/90 py-5 font-medium">
                            Visit Learning Section
                          </Button>
                        </Link>
                        
                        {/* Conditional buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {["alphabet", "speak", "reach-up", "i-cue", "well-be-ing", "routine"].includes(program.id) && (
                            <Link href="/developmental-screening" className="sm:col-span-2">
                              <Button className="w-full bg-onesti-purple hover:bg-onesti-purple/90 py-5 font-medium shadow-sm">
                                Developmental Screening Checklist
                              </Button>
                            </Link>
                          )}
                          {program.id === "senses-in-harmony" && (
                            <Link href="/contact" className="sm:col-span-2">
                              <Button className="w-full bg-onesti-purple hover:bg-onesti-purple/90 py-5 font-medium shadow-sm">
                                Contact Our Professionals
                              </Button>
                            </Link>
                          )}
                          {program.id === "independent-me" && (
                            <Link href="/independent-me-checklist" className="sm:col-span-2">
                              <Button className="w-full bg-onesti-purple hover:bg-onesti-purple/90 py-5 font-medium shadow-sm">
                                Independent ME Checklist
                              </Button>
                            </Link>
                          )}
                          {program.id === "poopee-time" && (
                            <Link href="/poopee-time-checklist" className="sm:col-span-2">
                              <Button className="w-full bg-onesti-purple hover:bg-onesti-purple/90 py-5 font-medium shadow-sm">
                                PooPee Time Checklist
                              </Button>
                            </Link>
                          )}
                          {program.id === "bon-appetit" && (
                            <Link href="/bon-appetit-checklist" className="sm:col-span-2">
                              <Button className="w-full bg-onesti-purple hover:bg-onesti-purple/90 py-5 font-medium shadow-sm">
                                Bon Appetit Checklist
                              </Button>
                            </Link>
                          )}
                          {program.id === "peaceful-zzzz" && (
                            <Link href="/sleeping-checklist" className="sm:col-span-2">
                              <Button className="w-full bg-onesti-purple hover:bg-onesti-purple/90 py-5 font-medium shadow-sm">
                                Sleeping Checklist
                              </Button>
                            </Link>
                          )}
                          {program.id === "developmental-skills" && (
                            <Link href="/contact" className="sm:col-span-2">
                              <Button className="w-full bg-onesti-purple hover:bg-onesti-purple/90 py-5 font-medium shadow-sm">
                                Contact For Screening
                              </Button>
                            </Link>
                          )}
                          {program.id === "aba-program" && (
                            <Link href="/contact" className="sm:col-span-2">
                              <Button className="w-full bg-onesti-purple hover:bg-onesti-purple/90 py-5 font-medium shadow-sm">
                                Learn More About ABA
                              </Button>
                            </Link>
                          )}
                          {program.id === "aba" && (
                            <Link href="/contact" className="sm:col-span-2">
                              <Button className="w-full bg-onesti-purple hover:bg-onesti-purple/90 py-5 font-medium shadow-sm">
                                Contact ABA Specialists
                              </Button>
                            </Link>
                          )}
                        </div>

                        <Link href={`/packages#${program.id}`} className="block mt-4">
                          <Button className="w-full bg-onesti-purple hover:bg-onesti-purple/90 py-5 font-medium">
                            View Related Packages
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Sidebar with program details */}
                    <div className="space-y-6">
                      {/* Who Can Benefit */}
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#F4F1F9]">
                        <h4 className="font-semibold text-onesti-purple text-lg mb-4">
                          Who Can Benefit
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-onesti-purple mt-2"></div>
                            <span className="text-gray-700">Children with developmental delays or concerns</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-onesti-purple mt-2"></div>
                            <span className="text-gray-700">Children who need support in specific skill areas</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-onesti-purple mt-2"></div>
                            <span className="text-gray-700">Children of various ages and ability levels</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-onesti-purple mt-2"></div>
                            <span className="text-gray-700">Families seeking structured intervention approaches</span>
                          </li>
                        </ul>
                      </div>

                      {/* Program Features */}
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#F4F1F9]">
                        <h4 className="font-semibold text-onesti-purple text-lg mb-4">
                          Program Features
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-onesti-purple mt-2"></div>
                            <span className="text-gray-700">Individualized assessment and planning</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-onesti-purple mt-2"></div>
                            <span className="text-gray-700">Evidence-based techniques and strategies</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-onesti-purple mt-2"></div>
                            <span className="text-gray-700">Regular progress monitoring</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-onesti-purple mt-2"></div>
                            <span className="text-gray-700">Parent and caregiver involvement</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Collapsed card view
                <>
                  {/* Circle image */}
                  <div className="w-20 h-20 mx-auto mt-6 mb-4">
                    <div className="w-full h-full rounded-full bg-[#F4F1F9] flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#E9E4F5] flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-onesti-purple opacity-70" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-onesti-purple mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      {program.description}
                    </p>
                    
                    <Button
                      onClick={() => setExpandedId(program.id)}
                      className="mt-auto w-full bg-onesti-purple hover:bg-onesti-purple/90"
                    >
                      Expand
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F4F1F9] py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-onesti-purple mb-4">How Can We Support Your Child?</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Every child has unique needs and abilities. Our caring specialists will help you find the right program to support your child's development and your family's journey. Let's take the first step together.
          </p>
          <Link href="/contact">
            <Button className="bg-onesti-purple hover:bg-onesti-purple/90 px-8 py-3">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
} 