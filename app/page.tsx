import HeroSection from "@/components/home/hero-section"
import ParentJourney from "@/components/home/parent-journey"
import BlogTeaser from "@/components/home/blog-teaser"
import TestimonialsSection from "@/components/home/testimonials-section"
import FaqSection from "@/components/home/faq-section"
import ProfessionalDevelopment from "@/components/home/professional-development"
import WhyChooseOnesti from "@/components/home/why-choose-onesti"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero - Primary entry point */}
      <HeroSection />

      {/* Your Journey - Clear path through our services */}
      <div id="parent-journey" className="bg-gray-50 py-20">
        <ParentJourney />
      </div>

      {/* Testimonials - Build trust after showing services */}
      <div className="bg-gray-50 py-16">
        <TestimonialsSection />
      </div>

      {/* Why Choose Onesti - Key differentiators */}
      <WhyChooseOnesti />

      {/* Blog Teaser - Supplementary content */}
      <div className="bg-white py-16">
        <BlogTeaser />
      </div>

      {/* Professional Development - Supplementary information */}
      <div id="professional-development" className="bg-gray-50 py-16">
        <ProfessionalDevelopment />
      </div>

      {/* Packages - Core offering */}
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Programs Tailored for Your Child
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Choose a supportive, personalized intervention plan that matches your child's developmental journey—and your
              peace of mind.
            </p>
          </div>

          <div className="mt-10">
            <Tabs defaultValue="developmental">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="developmental">Developmental</TabsTrigger>
                <TabsTrigger value="routine">Routine-Based</TabsTrigger>
                <TabsTrigger value="aba">ABA</TabsTrigger>
                <TabsTrigger value="counseling">Counseling</TabsTrigger>
              </TabsList>

              <TabsContent value="developmental" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  {/* Thrive Package */}
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>Developmental Thrive Path</CardTitle>
                      <CardDescription>Comprehensive support for developmental delays or conditions</CardDescription>
                      <div className="mt-4 flex items-baseline text-gray-900">
                        <span className="text-3xl font-bold tracking-tight">$840</span>
                        <span className="ml-1 text-xl font-semibold">/program</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">12 therapy sessions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">Multidisciplinary review</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/programs">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Empower Package */}
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>Developmental Empower Path</CardTitle>
                      <CardDescription>Balanced support for developmental needs</CardDescription>
                      <div className="mt-4 flex items-baseline text-gray-900">
                        <span className="text-3xl font-bold tracking-tight">$600</span>
                        <span className="ml-1 text-xl font-semibold">/program</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">8 therapy sessions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">Progress tracking</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href="/programs">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Nurture Package */}
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>Developmental Nurture Path</CardTitle>
                      <CardDescription>Essential support for developmental needs</CardDescription>
                      <div className="mt-4 flex items-baseline text-gray-900">
                        <span className="text-3xl font-bold tracking-tight">$320</span>
                        <span className="ml-1 text-xl font-semibold">/program</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">4 therapy sessions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">Initial assessment</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href="/programs">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" asChild>
                    <Link href="/programs">View All Programs</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="routine" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  {/* Thrive Package */}
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>Routine Thrive Path</CardTitle>
                      <CardDescription>Comprehensive support for routine-based challenges</CardDescription>
                      <div className="mt-4 flex items-baseline text-gray-900">
                        <span className="text-3xl font-bold tracking-tight">$420</span>
                        <span className="ml-1 text-xl font-semibold">/program</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">6 therapy sessions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">Personalized therapy plan</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/programs">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Empower Package */}
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>Routine Empower Path</CardTitle>
                      <CardDescription>Balanced support for routine-based challenges</CardDescription>
                      <div className="mt-4 flex items-baseline text-gray-900">
                        <span className="text-3xl font-bold tracking-tight">$300</span>
                        <span className="ml-1 text-xl font-semibold">/program</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">4 therapy sessions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">Digital progress tracking</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href="/programs">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Nurture Package */}
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>Routine Nurture Path</CardTitle>
                      <CardDescription>Essential support for routine-based challenges</CardDescription>
                      <div className="mt-4 flex items-baseline text-gray-900">
                        <span className="text-3xl font-bold tracking-tight">$160</span>
                        <span className="ml-1 text-xl font-semibold">/program</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">2 therapy sessions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">Initial assessment</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href="/programs">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" asChild>
                    <Link href="/programs">View All Programs</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="aba" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  {/* Thrive Package */}
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>ABA Thrive Path</CardTitle>
                      <CardDescription>Comprehensive support for complex behavioral needs</CardDescription>
                      <div className="mt-4 flex items-baseline text-gray-900">
                        <span className="text-3xl font-bold tracking-tight">$1,200</span>
                        <span className="ml-1 text-xl font-semibold">/program</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">10 ABA sessions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">Behavior intervention plan</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/programs">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Empower Package */}
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>ABA Empower Path</CardTitle>
                      <CardDescription>Balanced support for moderate behavioral needs</CardDescription>
                      <div className="mt-4 flex items-baseline text-gray-900">
                        <span className="text-3xl font-bold tracking-tight">$840</span>
                        <span className="ml-1 text-xl font-semibold">/program</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">6 therapy sessions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">Progress monitoring</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href="/programs">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Nurture Package */}
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>ABA Nurture Path</CardTitle>
                      <CardDescription>Essential support for single behavioral issues</CardDescription>
                      <div className="mt-4 flex items-baseline text-gray-900">
                        <span className="text-3xl font-bold tracking-tight">$450</span>
                        <span className="ml-1 text-xl font-semibold">/program</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">3 therapy sessions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">Basic behavior plan</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href="/programs">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" asChild>
                    <Link href="/programs">View All Programs</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="counseling" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  {/* Extended Support */}
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>Extended Support</CardTitle>
                      <CardDescription>Comprehensive counseling support</CardDescription>
                      <div className="mt-4 flex items-baseline text-gray-900">
                        <span className="text-3xl font-bold tracking-tight">$480</span>
                        <span className="ml-1 text-xl font-semibold">/program</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">6 counseling sessions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">Weekly check-ins</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/programs">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Session Bundle */}
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>Session Bundle</CardTitle>
                      <CardDescription>Multiple sessions at your convenience</CardDescription>
                      <div className="mt-4 flex items-baseline text-gray-900">
                        <span className="text-3xl font-bold tracking-tight">$270</span>
                        <span className="ml-1 text-xl font-semibold">/program</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">3 counseling sessions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">Flexible scheduling</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href="/programs">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Single Session */}
                  <Card className="flex flex-col">
                    <CardHeader>
                      <CardTitle>Single Session</CardTitle>
                      <CardDescription>One-time counseling support</CardDescription>
                      <div className="mt-4 flex items-baseline text-gray-900">
                        <span className="text-3xl font-bold tracking-tight">$90</span>
                        <span className="ml-1 text-xl font-semibold">/session</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">One-time session</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm text-gray-700">Focused on immediate concerns</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href="/programs">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" asChild>
                    <Link href="/programs">View All Programs</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* FAQ Section - Address remaining questions */}
      <div className="bg-white py-16">
        <FaqSection />
      </div>
    </div>
  )
}

