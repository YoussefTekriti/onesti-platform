"use client"

import React, { useState } from "react"
import { Tab } from "@headlessui/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Hide scrollbar but keep functionality
const hideScrollbarStyle = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
  }
  
  .hide-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }

  .tabs-container {
    position: relative;
  }

  .scroll-indicator {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    z-index: 10;
    cursor: pointer;
  }

  .scroll-left {
    left: 0;
  }

  .scroll-right {
    right: 0;
  }

  @media (min-width: 768px) {
    .scroll-indicator {
      display: none;
    }
  }
`;

// Define the program data
const programsData = [
  {
    id: "alphabet",
    title: "ALPHABEႵ",
    description: "An online program designed to fill academic gaps and provide intervention for students with learning disabilities in spelling, reading, language, comprehension, memory, and math.",
    content: "ALPHABEႵ is an online program among other programs at ONESTI that aims at filling the academic gaps that students have. It also provides intervention and remediation to struggling students and to those who have learning disabilities in spelling, reading, language, reading comprehension, memory, and math. It is a very unique program because it starts with screening that helps identify the weaknesses then develops a plan targeting the student's needs. It is also comprehensive because it tackles all needed aspects in intervention: academic, behavioral, communication, motor, and social-emotional. This is provided through an individualized education program (IEP). In addition, it helps parents understand their child's needs and be involved in the intervention.",
    additionalContent: "If you are noticing any gaps in your child's academic skills, do not wait! Fill ONESTI's developmental screening checklist and contact our professionals to learn more about your child's academic development and what you can do NOW to help."
  },
  {
    id: "speak",
    title: "SPEAK",
    description: "A program designed to bridge communication and language gaps through effective online therapy sessions targeting specific skills with professional guidance.",
    content: "The \"SPEAK\" program is designed to help bridge your child's communication and language gaps and target specific skills through effective and efficient online therapy sessions. In addition, our highly skilled professionals will help parents learn and apply different evidence-based strategies in routine daily life activities to provide your child with multi-learning and practice opportunities that will help improve his communication, speech and language skills. In accordance with our belief at Onesti that child development and delays should be assessed in comprehensiveness and not as separate entities. As such, all areas that can affect or be affected by a delay in the development of speech and language such behavioral challenges, sensory tolerance, social-emotional issues or/and academic skills should be assessed and addressed. This is why \"SPEAK\" is a comprehensive program designed to target your child's global development in its multiple aspects in order to bridge the gaps in all skill areas.",
    additionalContent: "If you are noticing delays in any one or more of your child's language skills, do not wait! Fill ONESTI's developmental screening checklist and contact our professionals to learn more about your child's language development and what you can do NOW to help your child."
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
    description: "A comprehensive motor skills development program that assesses and improves gross and fine motor abilities through interactive online sessions.",
    content: "Reach UP is a program that is designed to work on the development and improvement of your child's motor skills. The program begins with an assessment of all gross and fine motor abilities and their impact on the child's daily life activities and independence in movement. Via online interactive sessions your child will enjoy the planned motor activities which are individually designed to meet his/her needs. The activities are inspired by his cultural background and family dynamics to help him master and generalize the targeted skills. We aim to empower you as parents to use effective techniques and methods to stimulate your child's motor abilities by applying the targeted skills in your normal daily routine activities.",
    additionalContent: "If you are noticing delays in any one or more of your child's motor skills, do not wait! Fill ONESTI's developmental screening checklist and contact our professionals to learn more about your child's motor development and what you can do NOW to help your child."
  },
  {
    id: "senses-in-harmony",
    title: "SENSES IN HARMONY",
    description: "A program that helps children process sensory information properly through specialized exercises, activities, and environmental adaptations.",
    content: "Sensory challenges are caused by our brain's inability to process sensory information (stimuli) properly. This sensory information includes what we see, hear, smell, taste, or touch. The Senses in harmony program helps your child properly analyze the sensory inputs and stimuli they are exposed to from their surroundings. The sensory exercises, activities, and appropriate environmental adaptation will help ease your child's daily struggles. Via online interactive sessions your child will enjoy fun sensory activities which are individually designed to meet his/her sensory needs. The activities are inspired by his/her cultural background, home environment, and family dynamics to help him/her overcome sensory challenges that disrupt daily living. It also helps you learn more about your child's sensory needs and provides you with scientifically proven techniques, and methods to adapt the environment to better suit your child's current tolerance levels.",
    additionalContent: "If you are noticing one or more signs which indicate that your child may have difficulties with sensory processing, do not wait! Contact our professionals to learn more about your child's sensory profile and what you can do NOW to help your child."
  },
  {
    id: "poopee-time",
    title: "POOPEE TIME",
    description: "An evidence-based toilet training program that evaluates developmental readiness and provides step-by-step guidance for successful implementation.",
    content: "If you are one of those mothers that gave up on trying to toilet train her little one after failing several times. And if you think that it is impossible to toilet train your little one because of those failures. It is important for you to know that toilet training is a developmental skill like any other skill in early childhood. It needs to be started at the right time, it needs patience, and there are ways and methods to help you be successful at it! PooPee time program at Onesti provides you with a combination of evidence-based strategies and techniques for successful toilet training. Since it is a developmental skill, our program evaluates your child's prerequisite in all developmental areas, social-emotional readiness, and sensory needs. Onesti's specialists will accompany you step by step through this phase to guarantee an easy transition and hassle free toilet training.",
    additionalContent: "It is advisable that you learn more about the reasons behind your child's challenges related to toilet training and what is expected for his age by filling ONESTI's PooPee time checklist and talking to our professionals."
  },
  {
    id: "independent-me",
    title: "INDEPENDENT ME",
    description: "A program that helps children master daily life skills and achieve the highest possible degree of independence through comprehensive assessment and targeted interventions.",
    content: "The Independent ME is a program which helps children master daily life skills and achieve the highest possible degree of independence. It begins with a comprehensive assessment of all prerequisite abilities that are directly related to skills of daily living, such as motor, intellectual, communication, social, and behavior. After identifying the skill deficits that make daily routine activities challenging, the program works on bridging the developmental gaps. As for the skills that are difficult to develop due to a specific diagnosis, the ONESTI team works on adapting the activities and tools, so that every child can achieve an acceptable level of independence in daily living. The program helps parents to learn more about their child's abilities and coach them on using scientifically based methods and techniques to help their child generalize acquired skills naturally within their daily routine.",
    additionalContent: "If you are noticing that your child is struggling with one or more daily routine activities, do not wait! Fill ONESTI's Independent ME checklist and contact our professionals to learn more about your child's adaptive skills development and what you can do NOW to help your child."
  },
  {
    id: "i-cue",
    title: "I CUE",
    description: "A comprehensive program aimed at developing children's mental and intellectual abilities to overcome challenges resulting from cognitive skill weaknesses.",
    content: "\"I Cue\" is a program that aims to help children develop their mental and intellectual abilities and overcome the daily challenges and difficulties which result from the weakness of these skills. At Onesti, we believe that child development and delays should be addressed in comprehensiveness. That is why, all areas that can affect or be affected by a delay in cognitive development should be targeted. It is a comprehensive program designed to cater for your child's global development. The online interactive sessions include educational programs and evidence-based activities which are fun and individually designed according to the child's interests and strengths. \"I Cue\" also helps parents to learn more about their child's abilities and coach them on using scientifically based techniques and strategies. It helps them make use of the fact that the child has naturally occurring learning opportunities to practice all the targeted skills in his daily life routine, which in turn reinforces their acquisition and development.",
    additionalContent: "If you are noticing delays in your child's cognitive skills, do not wait! Fill ONESTI's developmental screening checklist and contact our professionals to learn more about your child's cognitive development and what you can do NOW to help your child."
  },
  {
    id: "bon-appetit",
    title: "BON APPETIT",
    description: "A feeding therapy program designed to make eating an enjoyable shared time, addressing challenges from breastfeeding difficulties to transitioning to solids or independent eating.",
    content: "Bon Appétit Is a feeding therapy program designed to make this essential routine in your day, an enjoyable shared time for you and your child. If you're a new mom and your baby is having difficulty breastfeeding or bottle feeding, our feeding specialists will guide you through this bonding phase, so you can enjoy these cherishable times together. If you are a parent with a child in a transitional phase and you're having trouble introducing solids, your child has difficulty accepting new textures or is just refusing to eat, our feeding specialists will provide you with evidence-based approaches and techniques to overcome any of those difficulties and learn how to best support your child in reaching their feeding goals. When the time comes for your child to practice his independence during this routine activity, our specialists will coach you on strategies which will begin with the exploration of food and finger feeding, and continue with a smooth transition to the use of spoon, fork, and cup so your child can successfully eat independently without leaving a big mess behind.",
    additionalContent: "Whether the challenges your child is facing is related to a limited diet, oral-motor muscle weakness, sensory issues or behavior barriers, fill Onesti's Bon Appetit checklist or talk to our feeding professionals to understand any underlying issues to your child's feeding challenges."
  },
  {
    id: "peaceful-zzzz",
    title: "PEACEFUL \"ZZZZ\"",
    description: "A comprehensive sleep training program that addresses sleep problems related to social-emotional readiness, challenging behaviors, and sensory needs.",
    content: "If you are a parent that is struggling to put her baby to sleep, or if you feel exhausted because of the continuous sleep interruption that is caused by your baby's continuous waking. Then, the peaceful \"Zzzz\" program is the sleep training program that will help you secure a peaceful night's rest. This comprehensive program tackles all the sleeping problems that are related to social emotional readiness, challenging behaviors, and sensory needs. The Peaceful \"Zzzz\" program at Onesti provides you with a combination of evidence-based strategies and techniques for successful sleep training. Sleep is an essential function that allows our body to recharge, at the same time it is necessary for the harmony of the family. Sleeping problems can manifest in different ways, yet can have multiple causes. If your child is unable to fall asleep without you caressing him, this can have an underlying sensory reason, he might be seeking the warm sensation from your body or the soothing effect from your touch. This example might also be due to behavioral issues, as your child might display different challenging behaviors to avoid sleeping by himself; such as crying, procrastinating, or simply playing on your maternal/paternal emotions; all these behaviors serve to maintain attention and avoid sleep. In addition to the above, this example might highlight a lack in social-emotional readiness. Your child might need to feel your presence next to him/her for protection and safety from scary thoughts and fears such as monsters under the bed or the idea of being abandoned. Whether the challenges your child is facing are related to social emotional readiness, sensory difficulties, behavioral barriers, or a combination, our specialists at Onesti are ready to guide you in order to guarantee a successful sleep training.",
    additionalContent: "It is advisable that you learn more about the reasons behind your child's challenges related to sleeping by filling ONESTI's sleeping checklist and talking to our professionals."
  },
  {
    id: "well-be-ing",
    title: "WELL-BE-ING",
    description: "A program providing social and emotional support, guidance, and counseling for children, teenagers, and parents to develop fundamental emotional and interpersonal skills.",
    content: "Onesti's Well-Be-ing program provides social and emotional support, guidance, and counseling for children, teenagers, and parents. The main purpose is to acquire the fundamental skills necessary to recognize and manage one's emotions, set and achieve goals, build and sustain strong interpersonal relationships, make ethical judgments, and interact with others in a productive way. Through proper development of social and emotional skills, individuals are less likely to experience internal struggles such as anxiety and depression. The Well-Be-ing program focuses on the development of self-awareness, social-awareness, relationship skills and decision making skills. Acquiring these skills help in setting the foundations for building positive social and emotional experiences. Having a strong foundation facilitates healthy growth among all other developmental areas. The sooner an individual acquires healthy social-emotional skills, the better is their general health and well-being. The professionals at Onesti offer a unique outlet for parents and their children to strengthen their emotional bonds by providing evidence-based strategies that will enhance parental sensitivity to emotional and behavioral cues in order to improve a child's attachment security. Through Well-Be-ing we assess and strengthen the caregiver's capacity to provide safety through child development training, parenting skills coaching, and healthy coping strategies, which will result in corrective emotional experiences for caregivers, or address a caregiver's own attachment issues from childhood.",
    additionalContent: "If your child is showing any signs of struggle, sadness or anxiety do not wait! Fill Onesti's developmental screening checklist and contact our professionals to learn more about what you can do NOW to help your child and family."
  },
  {
    id: "developmental-skills",
    title: "DEVELOPMENTAL SKILLS",
    description: "A comprehensive global initiative for screening developmental skills across all areas, identifying underlying causes of challenges, and providing early intervention strategies.",
    content: "ONESTI's Developmental Skills Program is a comprehensive global initiative designed to provide screening of developmental skills across areas: (communication, speech, and language - motor - cognitive - social-emotional - early literacy). The program also evaluates behavioral challenges, helping to identify underlying causes and provide early strategies that support positive development and emotional well-being. Through structured screening, the program identifies whether a child may benefit from targeted intervention or if guided activities within their natural environment (school or nursery) can help bridge developmental gaps. This approach ensures early identification and support, promoting optimal growth and learning. The program includes screening & observation across different settings (Home, nursery, school), a comprehensive report outlining strengths and areas of concern, and an intervention plan based on the screening results that's tailored to your child's specific needs. The plan includes individualized goals, specialized strategies, and parental guidance with regular progress tracking and adjustments to ensure continuous improvement.",
    additionalContent: "If you notice any developmental concerns with your child, contact our professionals for a comprehensive screening and personalized intervention plan."
  },
  {
    id: "aba-program",
    title: "ABA PROGRAM",
    description: "Intensive Applied Behavior Analysis programs for both educational settings and home/community environments, providing comprehensive behavioral support through structured, evidence-based approaches.",
    content: "Onesti's Intensive ABA School Provision Intensive Program provides comprehensive support to educational settings through a structured, evidence-based approach. This specialized training begins with an initial environmental observation conducted by our lead therapist, who thoroughly evaluates current practices and establishes a baseline for improvement. The therapist then demonstrates effective teaching methodologies and implements systematic data collection procedures to ensure measurable progress. Our Board Certified Behavior Analyst (BCBA) maintains program integrity through regular observations, providing detailed feedback and guidance to optimize session delivery. The BCBA works closely with school staff to refine implementation strategies and ensure adherence to established protocols. The program encompasses essential areas of educational and behavioral development, including targeted social skills instruction and comprehensive facilitator training. Our curriculum addresses specialized needs through thoughtful modifications and supports successful transitions across educational settings. We emphasize the implementation of effective reinforcement systems and maintain rigorous data collection practices to monitor student progress. Additionally, our program provides ongoing supervision and mentorship to behavior analysts and support staff, while incorporating behavior-based safety protocols to maintain a secure learning environment. We also offer an Intensive ABA Home/Community Provision Program that provides similar comprehensive support in home and community settings.",
    additionalContent: "These intensive training programs equip school facilitators, intervention teams and parents with the tools and expertise needed to promote positive, sustainable behavioral changes. Through our collaborative approach, we establish a foundation for long-term success in behavioral intervention and support."
  }
]

export default function ProgramsPage() {
  // Split programs into two rows
  const firstRowPrograms = programsData.slice(0, 6);
  const secondRowPrograms = programsData.slice(6);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  // Function to scroll the tabs
  const scrollTabs = (containerId: string, direction: 'left' | 'right') => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Check scroll position after scrolling
      setTimeout(() => {
        setShowLeftScroll(container.scrollLeft > 10);
        setShowRightScroll(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
      }, 300);
    }
  };

  // Function to handle scroll events
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    setShowLeftScroll(container.scrollLeft > 10);
    setShowRightScroll(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{hideScrollbarStyle}</style>
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
        <p className="text-center text-sm text-gray-500 md:hidden mb-3">
          Swipe horizontally to explore all programs
        </p>
        
        <Tab.Group>
          <div className="flex flex-col mb-10">
            {/* First row of tabs */}
            <div className="tabs-container relative">
              {showLeftScroll && (
                <button 
                  className="scroll-indicator scroll-left" 
                  onClick={() => scrollTabs('first-row-tabs', 'left')}
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
              
              <div 
                id="first-row-tabs"
                className="overflow-x-auto pb-1 hide-scrollbar"
                onScroll={handleScroll}
              >
                <Tab.List className="flex min-w-max rounded-t-xl bg-gray-100 p-1">
                  {firstRowPrograms.map((program) => (
                    <Tab
                      key={program.id}
                      className={({ selected }) =>
                        `whitespace-nowrap px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium leading-5 transition-all duration-200 mx-1 first:ml-0 last:mr-0 rounded-t-lg
                        ${
                          selected
                            ? "bg-white text-onesti-purple shadow"
                            : "text-gray-600 hover:bg-white/[0.12] hover:text-onesti-purple"
                        }`
                      }
                    >
                      {program.title}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              
              {showRightScroll && (
                <button 
                  className="scroll-indicator scroll-right" 
                  onClick={() => scrollTabs('first-row-tabs', 'right')}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
            
            {/* Second row of tabs */}
            <div className="tabs-container relative">
              {showLeftScroll && (
                <button 
                  className="scroll-indicator scroll-left" 
                  onClick={() => scrollTabs('second-row-tabs', 'left')}
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
              
              <div 
                id="second-row-tabs"
                className="overflow-x-auto pb-1 hide-scrollbar"
                onScroll={handleScroll}
              >
                <Tab.List className="flex min-w-max rounded-b-xl bg-gray-100 p-1 border-t border-gray-200">
                  {secondRowPrograms.map((program) => (
                    <Tab
                      key={program.id}
                      className={({ selected }) =>
                        `whitespace-nowrap px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium leading-5 transition-all duration-200 mx-1 first:ml-0 last:mr-0 rounded-b-lg
                        ${
                          selected
                            ? "bg-white text-onesti-purple shadow"
                            : "text-gray-600 hover:bg-white/[0.12] hover:text-onesti-purple"
                        }`
                      }
                    >
                      {program.title}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              
              {showRightScroll && (
                <button 
                  className="scroll-indicator scroll-right" 
                  onClick={() => scrollTabs('second-row-tabs', 'right')}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
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
                  <h3 className="text-lg font-semibold mb-3 text-onesti-purple">Program Details</h3>
                  <p className="text-gray-700 mb-4">{program.content}</p>
                  
                  {program.additionalContent && (
                    <div className="my-6">
                      <p className="text-gray-700 mb-4">{program.additionalContent}</p>
                      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center mt-6">
                        <Link href="/learning">
                          <Button className="bg-onesti-purple hover:bg-onesti-purple/90 text-white w-full sm:w-auto px-6">
                            Visit Learning Section
                          </Button>
                        </Link>
                        {["alphabet", "speak", "reach-up", "i-cue", "well-be-ing"].includes(program.id) && (
                          <Link href="/developmental-screening">
                            <Button className="bg-onesti-purple hover:bg-onesti-purple/90 text-white w-full sm:w-auto px-6">
                              Developmental Screening Checklist
                            </Button>
                          </Link>
                        )}
                        {program.id === "senses-in-harmony" && (
                          <Link href="/contact">
                            <Button className="bg-onesti-purple hover:bg-onesti-purple/90 text-white w-full sm:w-auto px-6">
                              Contact Our Professionals
                            </Button>
                          </Link>
                        )}
                        {program.id === "independent-me" && (
                          <Link href="/independent-me-checklist">
                            <Button className="bg-onesti-purple hover:bg-onesti-purple/90 text-white w-full sm:w-auto px-6">
                              Independent ME Checklist
                            </Button>
                          </Link>
                        )}
                        {program.id === "poopee-time" && (
                          <Link href="/poopee-time-checklist">
                            <Button className="bg-onesti-purple hover:bg-onesti-purple/90 text-white w-full sm:w-auto px-6">
                              PooPee Time Checklist
                            </Button>
                          </Link>
                        )}
                        {program.id === "bon-appetit" && (
                          <Link href="/bon-appetit-checklist">
                            <Button className="bg-onesti-purple hover:bg-onesti-purple/90 text-white w-full sm:w-auto px-6">
                              Bon Appetit Checklist
                            </Button>
                          </Link>
                        )}
                        {program.id === "peaceful-zzzz" && (
                          <Link href="/sleeping-checklist">
                            <Button className="bg-onesti-purple hover:bg-onesti-purple/90 text-white w-full sm:w-auto px-6">
                              Sleeping Checklist
                            </Button>
                          </Link>
                        )}
                        {program.id === "developmental-skills" && (
                          <Link href="/contact">
                            <Button className="bg-onesti-purple hover:bg-onesti-purple/90 text-white w-full sm:w-auto px-6">
                              Contact For Screening
                            </Button>
                          </Link>
                        )}
                        {program.id === "aba-program" && (
                          <Link href="/contact">
                            <Button className="bg-onesti-purple hover:bg-onesti-purple/90 text-white w-full sm:w-auto px-6">
                              Learn More About ABA
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-gray-50 p-4 rounded-lg border border-onesti-purple/20">
                      <h4 className="font-medium text-onesti-purple mb-2">Who Can Benefit</h4>
                      <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
                        <li>Children with developmental delays or concerns</li>
                        <li>Children who need support in specific skill areas</li>
                        <li>Children of various ages and ability levels</li>
                        <li>Families seeking structured intervention approaches</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-onesti-purple/20">
                      <h4 className="font-medium text-onesti-purple mb-2">Program Features</h4>
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
            <Button className="bg-onesti-purple hover:bg-onesti-purple/90 px-8 py-3 rounded-md text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 