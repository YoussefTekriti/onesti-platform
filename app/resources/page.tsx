"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

const categories = [
  { id: "all", name: "All Categories", count: 18 },
  { id: "child-development", name: "Child Development", count: 5 },
  { id: "daily-routines", name: "Daily Routines", count: 4 },
  { id: "behavior", name: "Behavior", count: 3 },
  { id: "autism", name: "Autism", count: 3 },
  { id: "parenting", name: "Parenting", count: 2 },
  { id: "therapy", name: "Therapy", count: 1 },
]

const posts = [
  {
    id: 1,
    title: "Autism Spectrum Disorder: Signs, Symptoms, and Support",
    href: "/resources/blog/autism-spectrum-disorder",
    description:
      "Learn about the early signs of autism, diagnostic process, and how to support your child's development with effective interventions.",
    date: "Mar 16, 2023",
    category: { id: "autism", name: "Autism" },
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_404443582-g8BdYp49g78Tiv5oaNjVkKK40LGK9Y.jpeg",
    author: {
      name: "Dr. Sarah Johnson",
      role: "Autism Specialist",
      imageUrl: "/placeholder.svg?height=40&width=40",
    },
    relatedAssessment: {
      id: "developmental",
      name: "Developmental Checklist",
    },
  },
  {
    id: 2,
    title: "Establishing Healthy Sleep Routines for Children",
    href: "/resources/blog/healthy-sleep-routines",
    description:
      "Discover effective strategies to establish consistent sleep patterns and overcome common bedtime challenges for children of all ages.",
    date: "Feb 12, 2023",
    category: { id: "daily-routines", name: "Daily Routines" },
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_205813503%20%281%29-WM0lWmFovXLbeQUUpcSN4R3jdzaw2t.jpeg",
    author: {
      name: "Dr. Emma Rodriguez",
      role: "Child Development Specialist",
      imageUrl: "/placeholder.svg?height=40&width=40",
    },
    relatedAssessment: {
      id: "sleep",
      name: "Peaceful ZZ",
    },
  },
  {
    id: 3,
    title: "Managing Challenging Behaviors in Children",
    href: "/resources/blog/managing-challenging-behaviors",
    description:
      "Practical approaches to understanding and addressing challenging behaviors through positive reinforcement and consistent strategies.",
    date: "Jan 24, 2023",
    category: { id: "behavior", name: "Behavior" },
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_112130603-sxnHxRLX08Wr6lr4FCnbJOhJB14mun.jpeg",
    author: {
      name: "Dr. Michael Chen",
      role: "Behavioral Therapist",
      imageUrl: "/placeholder.svg?height=40&width=40",
    },
    relatedAssessment: {
      id: "behavior",
      name: "Brave to Behave",
    },
  },
  {
    id: 4,
    title: "Potty Training Success: A Step-by-Step Guide",
    href: "/resources/blog/potty-training-success",
    description:
      "Evidence-based approaches to toilet training with practical tips for recognizing readiness signs and overcoming common challenges.",
    date: "Dec 10, 2022",
    category: { id: "daily-routines", name: "Daily Routines" },
    imageUrl: "/placeholder.svg?height=200&width=400",
    author: {
      name: "Dr. Jessica Lee",
      role: "Child Development Specialist",
      imageUrl: "/placeholder.svg?height=40&width=40",
    },
    relatedAssessment: {
      id: "potty",
      name: "Popee Time Checklist",
    },
  },
  {
    id: 5,
    title: "Developing Independence in Daily Living Skills",
    href: "/resources/blog/developing-independence",
    description:
      "How to foster self-help skills and independence in children through age-appropriate tasks and supportive strategies.",
    date: "Nov 5, 2022",
    category: { id: "child-development", name: "Child Development" },
    imageUrl: "/placeholder.svg?height=200&width=400",
    author: {
      name: "Dr. Robert Brown",
      role: "Occupational Therapist",
      imageUrl: "/placeholder.svg?height=40&width=40",
    },
    relatedAssessment: {
      id: "independence",
      name: "Independent Me",
    },
  },
  {
    id: 6,
    title: "Nutrition and Feeding Strategies for Picky Eaters",
    href: "/resources/blog/picky-eaters",
    description:
      "Effective approaches to expand your child's food preferences and create positive mealtime experiences for the whole family.",
    date: "Oct 18, 2022",
    category: { id: "daily-routines", name: "Daily Routines" },
    imageUrl: "/placeholder.svg?height=200&width=400",
    author: {
      name: "Dr. David Wilson",
      role: "Pediatric Nutritionist",
      imageUrl: "/placeholder.svg?height=40&width=40",
    },
    relatedAssessment: {
      id: "eating",
      name: "Bon Appetite",
    },
  },
  {
    id: 7,
    title: "Early Signs of Developmental Delays: When to Seek Help",
    href: "/resources/blog/developmental-delays",
    description:
      "Understanding developmental milestones and recognizing when professional evaluation may be beneficial for your child.",
    date: "Sep 22, 2022",
    category: { id: "child-development", name: "Child Development" },
    imageUrl: "/placeholder.svg?height=200&width=400",
    author: {
      name: "Dr. Maria Garcia",
      role: "Developmental Pediatrician",
      imageUrl: "/placeholder.svg?height=40&width=40",
    },
    relatedAssessment: {
      id: "developmental",
      name: "Developmental Checklist",
    },
  },
  {
    id: 8,
    title: "Supporting Social Skills Development in Children with Autism",
    href: "/resources/blog/social-skills-autism",
    description:
      "Strategies and interventions to help children with autism develop meaningful social connections and communication skills.",
    date: "Aug 15, 2022",
    category: { id: "autism", name: "Autism" },
    imageUrl: "/placeholder.svg?height=200&width=400",
    author: {
      name: "Dr. James Wilson",
      role: "Autism Specialist",
      imageUrl: "/placeholder.svg?height=40&width=40",
    },
    relatedAssessment: {
      id: "developmental",
      name: "Developmental Checklist",
    },
  },
  {
    id: 9,
    title: "Effective Discipline Strategies That Build Connection",
    href: "/resources/blog/effective-discipline",
    description:
      "Positive discipline approaches that strengthen the parent-child relationship while teaching important life skills.",
    date: "Jul 10, 2022",
    category: { id: "parenting", name: "Parenting" },
    imageUrl: "/placeholder.svg?height=200&width=400",
    author: {
      name: "Dr. Sarah Johnson",
      role: "Child Psychologist",
      imageUrl: "/placeholder.svg?height=40&width=40",
    },
    relatedAssessment: {
      id: "behavior",
      name: "Brave to Behave",
    },
  },
]

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category.id === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Link href="/" className="text-gray-500 hover:text-primary">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/resources" className="text-gray-500 hover:text-primary">
              Blogs
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-primary">Blog List</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Blogs</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Blog Posts */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 relative">
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                          {post.category.name}
                        </span>
                      </div>
                      <Link href={post.href}>
                        <div className="relative aspect-[4/3] md:h-full">
                          <Image
                            src={post.imageUrl || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>
                    </div>
                    <CardContent className="md:w-3/5 p-6">
                      <div className="mb-2 text-sm text-gray-500">{post.date}</div>
                      <Link href={post.href} className="group">
                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Image
                            src={post.author.imageUrl || "/placeholder.svg"}
                            alt={post.author.name}
                            width={40}
                            height={40}
                            className="rounded-full mr-3"
                          />
                          <div>
                            <p className="text-sm font-medium">{post.author.name}</p>
                            <p className="text-xs text-gray-500">{post.author.role}</p>
                          </div>
                        </div>
                        <Link href={post.href} className="text-primary font-medium text-sm hover:underline">
                          Read More
                        </Link>
                      </div>

                      {/* Related Assessment CTA */}
                      {post.relatedAssessment && (
                        <div className="mt-4 p-3 bg-primary/5 rounded-md border border-primary/20">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-primary">Take the {post.relatedAssessment.name}</p>
                            </div>
                            <Button size="sm" asChild>
                              <Link href={`/assessments?type=${post.relatedAssessment.id}`}>Start Assessment</Link>
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card>
              <CardContent className="p-6">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10"
                  />
                  <Button size="icon" variant="ghost" className="absolute right-0 top-0 h-full">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${selectedCategory === category.id ? "bg-primary/10 text-primary" : "hover:bg-gray-100"}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">{category.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Latest News */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Latest News</h3>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="flex-shrink-0">
                        <Image
                          src={post.imageUrl || "/placeholder.svg"}
                          alt={post.title}
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">{post.date}</div>
                        <Link href={post.href} className="font-medium text-sm hover:text-primary">
                          {post.title}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Assessment CTA */}
            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Free Assessment</h3>
                <p className="mb-4">
                  Take our free developmental assessment to identify potential areas of concern for your child.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/assessments">Start Assessment</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

