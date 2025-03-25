"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tab } from "@headlessui/react"
import { Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section that matches site style */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#4b2e83] mb-4">
            Professional Training Programs
          </h1>
          <div className="w-24 h-1 bg-[#4b2e83] mx-auto mb-8"></div>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Comprehensive training modules designed to empower educators, facilitators, and schools
            to create inclusive environments for all children.
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 mb-10">
            {["Daycare Training", "Facilitator Training", "School Inclusion"].map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `w-full rounded-lg py-3 text-base font-medium leading-5 transition-all duration-200
                  ${
                    selected
                      ? "bg-white text-[#4b2e83] shadow"
                      : "text-gray-600 hover:bg-white/[0.12] hover:text-[#4b2e83]"
                  }`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {/* Daycare Training Panel */}
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Module Cards */}
                <TrainingCard 
                  title="My Milestones" 
                  image="/placeholder-1.jpg"
                  description="Core level training for educators at daycare settings. Gain knowledge in different areas of early childhood development."
                >
                  <AccordionItem value="core-level">
                    <AccordionTrigger>Core Level: My Milestones</AccordionTrigger>
                    <AccordionContent>
                      <p>My Milestones is a core level training for educators at daycare settings. It helps participants gain basic knowledge in the different areas of early childhood development. This core training lays the foundation upon which all following modules are built. With this knowledge, early childhood educators will be able to create activities and learning opportunities that are age appropriate to cater for every child's developmental level.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="intermediate-level">
                    <AccordionTrigger>Intermediate Level: Reset - Rewind - Rewire</AccordionTrigger>
                    <AccordionContent>
                      <p>Reset-Rewind-Rewire is an intermediate level training of the My Milestones module. It helps participants apply their knowledge of developmental milestones learned in the core level, to break down the curricular activities and identify the targeted developmental skills. This insight will help participants identify possible skill delays in any of the developmental areas, in addition to applying modifications to adapt each activity to the developmental level of each child.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="advanced-level">
                    <AccordionTrigger>Advanced Level: Note My Tempo & Tap to My Rhythm</AccordionTrigger>
                    <AccordionContent>
                      <p>Note My Tempo & Tap to My Rhythm is an advanced level training of the My Milestones module. In this level participants will gain advanced knowledge in regards to delays in the different areas of development. They will also be introduced to the different types of disorders in each area and the appropriate type of intervention. This knowledge will allow the participants to implement the intervention objectives as per the intervention plan and modify activities accordingly.</p>
                    </AccordionContent>
                  </AccordionItem>
                </TrainingCard>

                <TrainingCard 
                  title="Feeling Plus" 
                  image="/placeholder-2.jpg"
                  description="Training focused on children's social emotional development for educators at daycare settings."
                >
                  <AccordionItem value="core-level">
                    <AccordionTrigger>Core Level: Inside Out!</AccordionTrigger>
                    <AccordionContent>
                      <p>Inside Out! is a core level training which addresses children's social emotional development. It is designed for educators at daycare settings. Children often struggle with the expression of emotion and translating these feelings into words and actions for us to understand. To better cater for every child's needs, it is important to learn more about children's emotional intelligence according to their age group, how it affects them, their peers as well as the classroom in general.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="intermediate-level">
                    <AccordionTrigger>Intermediate Level: Social Emotional Learning</AccordionTrigger>
                    <AccordionContent>
                      <p>Social Emotional Learning is the Intermediate level training of Feelings plus module. Through this training educators will learn how to implement different strategies to achieve social emotional learning within their curriculum. This will foster empathy and compassion in the classroom which makes room for more successful interactions, relationships, learning and overall functioning.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="advanced-level">
                    <AccordionTrigger>Advanced Level: Tiny Signals, Mighty Impact</AccordionTrigger>
                    <AccordionContent>
                      <p>Tiny signals, mighty impact is an advanced level training for the Feelings plus module. In this training, educators will gain new insight into the different internal struggles children are prone to face such as anxiety, depression and fears. It will help them distinguish the different signs that are of concern when it comes to mental health in children. Educators will also learn how to effectively deal with each internal struggle. This knowledge will equip teachers to notice red flags and act accordingly to ensure that the students' mental well-being is taken care of.</p>
                    </AccordionContent>
                  </AccordionItem>
                </TrainingCard>

                <TrainingCard 
                  title="Active Me" 
                  image="/placeholder-3.jpg"
                  description="Training addressing children's motor development for educators at daycare settings."
                >
                  <AccordionItem value="intermediate-level">
                    <AccordionTrigger>Intermediate Level: Active Me</AccordionTrigger>
                    <AccordionContent>
                      <p>Active ME Module is an intermediate level training which addresses children's motor development. Is it designed for educators at daycare settings. The prerequisite for the Active Me module is My Milestones module. This module helps educators gain knowledge in regard to different motor delays or deficiencies and how this affects the children's performance of different classroom activities and their independence in daily life routine activities. This knowledge will prepare the educators to efficiently welcome children with different motor needs to their classroom.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="pre-advanced-level">
                    <AccordionTrigger>Pre Advanced Level</AccordionTrigger>
                    <AccordionContent>
                      <p>Prior to the advancement into the Independent ME module of training, a complete environmental assessment is required for the facility. Upon which, the required adaptation and structural modifications will be determined. This is a prerequisite to the preparation of the inclusive setting for welcoming children with physical impairment or motor difficulties.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="advanced-level">
                    <AccordionTrigger>Advanced Level: Independent ME</AccordionTrigger>
                    <AccordionContent>
                      <p>Independent ME is the advanced level training of the Active Me module. The Independent ME builds on the knowledge acquired in previous modules. In this module educators will learn the techniques required in order to either assist or stimulate the child's motor performance to the extent adequate with the motor delays or deficiency. In addition, they will be able to create an inclusive environment and adapt classroom activities that will help promote children's motor independence.</p>
                    </AccordionContent>
                  </AccordionItem>
                </TrainingCard>

                <TrainingCard 
                  title="My Backpack" 
                  image="/placeholder-4.jpg"
                  description="Training focused on literacy for educators at daycare settings."
                >
                  <AccordionItem value="core-level">
                    <AccordionTrigger>Core Level: My Backpack</AccordionTrigger>
                    <AccordionContent>
                      <p>My backpack is a core level training for educators at daycare settings. It helps teachers identify the milestones related to literacy and use this information to create age appropriate activities and games to promote literacy. The prerequisite for the My backpack core module is My Milestones module 1.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="intermediate-level">
                    <AccordionTrigger>Intermediate Level: Funfonix</AccordionTrigger>
                    <AccordionContent>
                      <p>Funfonix is the intermediate level training of the My backpack module. In this level the participants will gain knowledge about phonics and list the steps required to teach phonics using an effective, multisensory and fun approach. Participants will be able to engage their students in activities related to phonics and make teaching an interactive learning experience.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="advanced-level">
                    <AccordionTrigger>Advanced Level: Bridging the Gap</AccordionTrigger>
                    <AccordionContent>
                      <p>Bridging the Gap is the advanced level training of the My backpack module. This training helps educators at daycare settings, to identify students at-risk of learning difficulties and how to use appropriate strategies to bridge academic gaps. Participants will be able to nurture independent learners by teaching self-correction strategies that draw students' attention to their miscues.</p>
                    </AccordionContent>
                  </AccordionItem>
                </TrainingCard>

                <TrainingCard 
                  title="Becoming Behavior" 
                  image="/placeholder-5.jpg"
                  description="Training addressing children's behavior and emotional development for educators at daycare settings."
                >
                  <AccordionItem value="core-level">
                    <AccordionTrigger>Core Level: Becoming Behavior</AccordionTrigger>
                    <AccordionContent>
                      <p>Becoming Behavior is a core level training for educators at daycare settings. It addresses children's behavior and emotional development. By learning the psycho-social stages, participants will be able to identify behaviors that occur as part of developmental phases. Participants will also learn to manage children's behavior in order to decrease the chances of it becoming an acquired negative behavior.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="intermediate-level">
                    <AccordionTrigger>Intermediate Level: The What, The Why, & The How</AccordionTrigger>
                    <AccordionContent>
                      <p>The What, The Why, & The How, is the intermediate level training for the Becoming Behavior module. In this level participants will define challenging behaviors, distinguish between attitudes and behaviors, and identify the targeted behavior. Participants will also be able to identify the 4 main functions of behaviors and the components of the ABC data sheet.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="advanced-level">
                    <AccordionTrigger>Advanced Level: Let's Act</AccordionTrigger>
                    <AccordionContent>
                      <p>Let's Act is the advanced level of the Becoming Behavior Module. In this level, participants will apply specific behavior modification strategies, according to the behavior intervention plan to help increase prosocial behaviors, and reduce challenging behaviors.</p>
                    </AccordionContent>
                  </AccordionItem>
                </TrainingCard>

                <TrainingCard 
                  title="Arabic Literacy" 
                  image="/placeholder-6.jpg"
                  description="Intensive training for educators at daycare settings to introduce Arabic literacy."
                >
                  <AccordionItem value="overview">
                    <AccordionTrigger>Program Overview</AccordionTrigger>
                    <AccordionContent>
                      <p>This is an intensive training for educators at daycare settings. In this module the participants will learn how to introduce Arabic literacy in daycares. Understanding and using the alphabet code is a demanding process that requires a very specific and cumulative sequence of skills which are developmental in nature and age appropriate. All skills and strategies are based on research using the English language. At ONESTI have adapted the literacy skills into the Arabic language.</p>
                      <p className="mt-4">All skills are taught using a multisensory approach via auditory, visual, kinesthetic and tactile modalities. In addition to hints and tricks that facilitate the learning process and help in memory retention.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="tiers">
                    <AccordionTrigger>Training Tiers</AccordionTrigger>
                    <AccordionContent>
                      <p>This training module includes two tiers:</p>
                      <ol className="list-decimal ml-5 mt-2 space-y-1">
                        <li>A theoretical part</li>
                        <li>A practicum part</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                </TrainingCard>
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500 mb-4">For more information about any of our daycare training programs</p>
                <Link href="/contact">
                  <Button className="bg-[#4b2e83] hover:bg-[#4b2e83]/90">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Professional Development
                  </Button>
                </Link>
              </div>
            </Tab.Panel>
            
            {/* Facilitator Training Panel */}
            <Tab.Panel>
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Facilitator Training</h2>
                  <p className="text-gray-700">
                    Grounded in the belief that all children have the right to receive an education in the same setting with their peers. ONESTI trained inclusion facilitators play an important role in order to ensure that every child benefits from an inclusive setting. Inclusion facilitators are prepared to be active participants in the child's individualized intervention and learn to implement the appropriate practices in accordance to every child's needs. Children with special developmental needs, behavioral or social emotional challenges, and/or academic difficulties will receive individualized intervention and close progress monitoring in their school setting. Inclusion facilitators will work in collaboration with the Onesti team to make sure that this process is a success for every child.
                  </p>
                  <p className="mt-4 text-gray-700">
                    Anyone can become a facilitator from parents to caregivers, teachers, teacher assistants, or individuals from fields other than education. Facilitator core level training is designed for individuals who wish to take on this career path. By becoming an intervention & inclusion facilitator, individuals will have the opportunity to work in different settings: home, day care, schools.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">This training includes four divisions</h3>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="division1">
                      <AccordionTrigger>Division 1 / The Connecting</AccordionTrigger>
                      <AccordionContent>
                        <p>This is an introductory segment of the facilitator training. It provides an overview of the training, in addition to setting the stage for connecting. The role of telepractice as a new mode of service provision in connection to this era of technology. The connection between service providers and families across the globe. The key connection of the relation of developmental areas that is critical to the comprehensiveness of the approach. The innovational role of the facilitator as an important connecting link in the dynamics of comprehensive intervention.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="division2">
                      <AccordionTrigger>Division 2 / Ground Inspection</AccordionTrigger>
                      <AccordionContent>
                        <p>Prior to building any sturdy structure, the ground needs to be inspected, same as prior to any successful intervention, the groundwork is the knowledge of developmental milestones. For a keen and precise perspective, all facets need to be examined. Therefore, in relation to child development, environmental factors need to be thoroughly considered since they may either promote or act as a barrier to growth and development. With this precise perspective, we lay the groundwork for empowering the child to rise confidently, just as a strong foundation ensures a building's resilience.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="division3">
                      <AccordionTrigger>Division 3 / Draw to Scale</AccordionTrigger>
                      <AccordionContent>
                        <p>Like precise architectural blueprints, providing accurate, individualized support tailored to each child's unique needs and abilities sets the foundation for success. That's why the awareness of red flags for delays and knowledge about disorders are critical for individualizing intervention for each child. The accuracy of the intervention plan and carefully selected objectives allows children to rise and reach their full potential, fostering growth across all areas of development, just as a well-designed construction stands tall and sturdy.</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="division4">
                      <AccordionTrigger>Division 4 / The Truss</AccordionTrigger>
                      <AccordionContent>
                        <p>Building a strong foundation is like constructing a sturdy truss, this segment equips facilitators with comprehensive knowledge about the significant role of intervention, not only in progress achieved in regards to development but also in its reflection on the improvement of every child's and family's quality of life. Facilitators learn about their critical role in the intervention process and how the acquired knowledge enables them to nurture every child's individual needs. Just as a truss supports structures, this foundation ensures the child's development soars securely, allowing them to rise confidently towards their full potential.</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-4">For more information about our facilitator training programs</p>
                  <Link href="/contact">
                    <Button className="bg-[#4b2e83] hover:bg-[#4b2e83]/90">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Professional Development
                    </Button>
                  </Link>
                </div>
              </div>
            </Tab.Panel>
            
            {/* School Inclusion Panel */}
            <Tab.Panel>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">School Inclusion</h2>
                    <p className="text-gray-700">
                      Our specialized training modules help create an inclusive environment at your school and prepare your educators and staff to cater for every child's needs.
                    </p>
                    <p className="mt-4 text-gray-700">
                      We believe in the power of inclusive education that gives every child the opportunity to learn and grow alongside their peers, regardless of their abilities or challenges.
                    </p>
                    <p className="mt-4 text-gray-700">
                      Our comprehensive training programs are designed to equip school staff with the knowledge, tools, and strategies needed to create truly inclusive learning environments.
                    </p>
                    <Link href="/contact">
                      <Button className="mt-6 bg-[#4b2e83] hover:bg-[#4b2e83]/90">
                        Request School Training
                      </Button>
                    </Link>
                  </div>
                  <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-lg font-medium text-gray-600">School Inclusion Training</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-6">Our School Inclusion Programs Include:</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Teacher Training</CardTitle>
                        <CardDescription>Equipping educators with inclusive teaching strategies</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Comprehensive training for classroom teachers on adapting curriculum, differentiated instruction, and creating supportive learning environments for all students.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Staff Development</CardTitle>
                        <CardDescription>Building a cohesive inclusive school culture</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Training for all school staff including administrators, counselors, and support personnel to ensure a unified approach to inclusion throughout the school.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Inclusive Curriculum Design</CardTitle>
                        <CardDescription>Creating learning materials for all abilities</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Guidance on adapting existing curriculum and designing new materials that accommodate diverse learning needs while maintaining academic standards.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Behavior Support Strategies</CardTitle>
                        <CardDescription>Promoting positive behaviors in all students</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>Training on implementing positive behavior supports, de-escalation techniques, and creating effective behavior intervention plans.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-4">For more information about our school inclusion programs</p>
                  <Link href="/contact">
                    <Button className="bg-[#4b2e83] hover:bg-[#4b2e83]/90">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Professional Development
                    </Button>
                  </Link>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </div>
  )
}

function TrainingCard({ 
  title, 
  image, 
  description, 
  children 
}: { 
  title: string, 
  image: string, 
  description: string, 
  children: React.ReactNode 
}) {
  return (
    <Card className="overflow-hidden h-full">
      <div className="relative h-48 w-full">
        {image.startsWith('/placeholder') ? (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-100 flex items-center justify-center">
            <p className="text-xl font-semibold text-[#4b2e83]">{title}</p>
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {children}
        </Accordion>
      </CardContent>
    </Card>
  )
} 