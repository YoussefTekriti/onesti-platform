"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Eye, MessageSquare, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

// Define blog post interface
interface BlogPost {
  title: string;
  author: {
    name: string;
    image: string;
    bio: string;
  };
  date: string;
  content: string;
  category: string;
  tags: string[];
  featuredImage: string;
}

// Mock data - hard-coded for demo purposes
const mockBlogPosts: Record<string, BlogPost> = {
  "child-development-milestones": {
    title: "Understanding Child Development Milestones",
    author: {
      name: "Dr. Sarah Johnson",
      image: "/images/child-development.jpeg",
      bio: "As a certified child development specialist, I'm passionate about helping parents understand their children's growth journey. My approach focuses on evidence-based practices and practical advice for families.",
    },
    date: "March 15, 2025",
    content: `
      <h2 id="what-are-developmental-milestones">What Are Developmental Milestones?</h2>
      <p>Developmental milestones are behaviors or physical skills seen in infants and children as they grow and develop. Rolling over, crawling, walking, and talking are all considered milestones.</p>
      
      <h2 id="why-milestones-matter">Why Milestones Matter</h2>
      <p>Tracking milestones helps ensure a child's development is on track. They serve as important clues about a child's developmental health.</p>
    `,
    category: "Child Development",
    tags: ["Child Development", "Milestones", "Early Intervention", "Parenting"],
    featuredImage: "/images/child-development.jpeg",
  },
  "sensory-processing-strategies": {
    title: "Sensory Processing Strategies for Children with Autism",
    author: {
      name: "Dr. Michael Chen",
      image: "/images/speech-therapy.jpeg",
      bio: "Dr. Michael Chen is a pediatric occupational therapist specializing in sensory processing disorders.",
    },
    date: "November 6, 2024",
    content: `
      <h2 id="understanding-sensory-processing">Understanding Sensory Processing</h2>
      <p>Sensory processing refers to how the nervous system receives messages from the senses and turns them into appropriate motor and behavioral responses.</p>
    `,
    category: "Special Needs",
    tags: ["Autism", "Sensory Processing", "Special Needs", "Therapy Approaches"],
    featuredImage: "/images/speech-therapy.jpeg",
  }
};

// Extract headings for table of contents
function extractHeadings(content: string) {
  const headings: { id: string; text: string; level: number }[] = []
  const regex = /<h([2-3])\s+id="([^"]+)">(.+?)<\/h\1>/g
  let match

  while ((match = regex.exec(content)) !== null) {
    const level = Number.parseInt(match[1], 10)
    const id = match[2]
    const text = match[3]
    headings.push({ id, text, level })
  }

  return headings
}

// Simplified blog post page component
export default function BlogPostPage({ params }: { params: any }) {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  
  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/blogs?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }
  
  // Get the slug from params
  const slug = typeof params === 'object' && params !== null && 'slug' in params 
    ? params.slug as string 
    : ""
    
  // Get the blog post directly from our mock data
  const post = mockBlogPosts[slug]
  
  // Render the not found state if no post is found
  if (!post || !slug) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Resource Not Found</h1>
        <p className="mb-6">The learning resource you're looking for doesn't exist or has been removed.</p>
        <Link href="/blogs" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Learning Center
        </Link>
      </div>
    )
  }
  
  // Extract headings for table of contents
  const headings = extractHeadings(post.content)

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Learning Center
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

              <div className="mb-8">
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4 gap-y-2">
                  <div className="flex items-center mr-6">
                    <div className="relative w-10 h-10 overflow-hidden rounded-full mr-2">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center mr-6">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Table of Contents:</h3>
                  <ul className="space-y-2">
                    {headings.map((heading) => (
                      <li
                        key={heading.id}
                        className="text-primary hover:underline"
                        style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}
                      >
                        <a href={`#${heading.id}`}>{heading.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Main Content */}
              <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* About Author Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">About Author</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-[120px] h-[120px] rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{post.author.name}</h3>
                    <p className="text-gray-700">{post.author.bio}</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blogs?tag=${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-800"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search Box */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button type="submit" className="absolute inset-y-0 right-0 px-3 flex items-center">
                    <Search className="h-5 w-5 text-blue-500" />
                  </button>
                </div>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Categories</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <Link href="/blogs?category=child-development" className="text-gray-700 hover:text-primary">
                    Child Development
                  </Link>
                  <span className="text-gray-500">(8)</span>
                </li>
                <li className="flex justify-between items-center">
                  <Link href="/blogs?category=therapy-approaches" className="text-gray-700 hover:text-primary">
                    Therapy Approaches
                  </Link>
                  <span className="text-gray-500">(6)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

