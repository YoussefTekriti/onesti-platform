import { useState, useEffect, use } from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Eye, MessageSquare, Search } from "lucide-react"
import { useRouter } from "next/navigation"

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

// This is a mock function to simulate fetching blog data
// In a real application, this would fetch from your database
function getBlogPost(slug: string): BlogPost | null {
  // Mock data for demonstration - aligned with the CMS data
  const blogPosts: Record<string, BlogPost> = {
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
      
      <h3 id="early-identification">Early Identification</h3>
      <p>Recognizing delays early allows for timely intervention, which can significantly improve outcomes.</p>
      
      <h3 id="parental-guidance">Parental Guidance</h3>
      <p>Understanding milestones helps parents know what to expect and how to support their child's development.</p>
      
      <h2 id="key-developmental-areas">Key Developmental Areas</h2>
      
      <h3 id="physical-development">Physical Development</h3>
      <p>This includes gross motor skills like sitting, standing, and walking, as well as fine motor skills like grasping objects and using utensils.</p>
      
      <h3 id="cognitive-development">Cognitive Development</h3>
      <p>This involves learning, thinking, problem-solving, and understanding concepts like cause and effect.</p>
      
      <h3 id="social-emotional-development">Social and Emotional Development</h3>
      <p>This encompasses forming attachments, expressing emotions, and developing relationships with others.</p>
      
      <h3 id="language-development">Language Development</h3>
      <p>This includes understanding language, expressing needs, and eventually speaking clearly.</p>
      
      <h2 id="when-to-seek-professional-advice">When to Seek Professional Advice</h2>
      <p>While all children develop at their own pace, significant delays might warrant professional evaluation. Trust your instincts as a parent and don't hesitate to consult with healthcare providers if you have concerns.</p>
      
      <blockquote>
        <p>An extra important note to remember is that consistency is key. Small, sustainable changes in your daily habits will have a more lasting impact than short-term, extreme efforts. Prioritize gradual improvements in your routine and be patient with yourself - lasting health is a marathon, not a sprint.</p>
      </blockquote>
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
        bio: "Dr. Michael Chen is a pediatric occupational therapist specializing in sensory processing disorders. He has worked with children on the autism spectrum for over 15 years, developing innovative approaches to help them thrive.",
      },
      date: "November 6, 2024",
      content: `
        <h2 id="understanding-sensory-processing">Understanding Sensory Processing</h2>
        <p>Sensory processing refers to how the nervous system receives messages from the senses and turns them into appropriate motor and behavioral responses. For children with autism, this process can be challenging, leading to sensory sensitivities or seeking behaviors.</p>
        
        <h2 id="common-sensory-challenges">Common Sensory Challenges</h2>
        <p>Children with autism often experience sensory processing difficulties that can manifest in various ways, including hypersensitivity (over-responsiveness) or hyposensitivity (under-responsiveness) to sensory input.</p>
        
        <h3 id="hypersensitivity">Hypersensitivity</h3>
        <p>Children who are hypersensitive may be overwhelmed by sensory input that others might not even notice. This can include being bothered by certain clothing textures, covering ears in response to everyday sounds, or being averse to certain food textures.</p>
        
        <h3 id="hyposensitivity">Hyposensitivity</h3>
        <p>Children who are hyposensitive may seek out intense sensory experiences, such as spinning, jumping, or crashing into things. They might also have a high pain threshold or crave strong flavors or textures.</p>
        
        <h2 id="effective-strategies">Effective Strategies</h2>
        <p>There are numerous strategies that can help children with autism regulate their sensory experiences and navigate their environment more comfortably.</p>
        
        <h3 id="create-sensory-diet">Create a Sensory Diet</h3>
        <p>A sensory diet is a personalized activity plan designed to meet a child's sensory needs. This might include activities like jumping on a trampoline, squeezing stress balls, or using weighted blankets.</p>
        
        <h3 id="environmental-modifications">Environmental Modifications</h3>
        <p>Adjusting the environment can significantly reduce sensory overload. This might include providing noise-canceling headphones, creating quiet spaces, or adjusting lighting.</p>
        
        <blockquote>
          <p>Remember that each child's sensory profile is unique. What works for one child may not work for another. Patience, observation, and flexibility are key to finding the right strategies for your child.</p>
        </blockquote>
      `,
      category: "Special Needs",
      tags: ["Autism", "Sensory Processing", "Special Needs", "Therapy Approaches"],
      featuredImage: "/images/speech-therapy.jpeg",
    },
    "speech-development-milestones": {
      title: "Speech Development Milestones: What to Expect",
      author: {
        name: "Dr. Lisa Patel",
        image: "/images/therapy-session.jpeg",
        bio: "Dr. Lisa Patel is a certified speech-language pathologist with extensive experience in early childhood language development. She specializes in helping children overcome communication challenges and develop strong language skills.",
      },
      date: "November 15, 2024",
      category: "Child Development",
      tags: ["Speech", "Language Development", "Child Development", "Milestones"],
      featuredImage: "/images/therapy-session.jpeg",
      content: `<h2>Content will be dynamically loaded based on the slug parameter</h2>`
    },
    "nutrition-child-development": {
      title: "Nutrition and Child Development: Building Healthy Habits",
      author: {
        name: "Dr. Emma Rodriguez",
        image: "/images/child-development.jpeg",
        bio: "Dr. Emma Rodriguez is a pediatric nutritionist with a focus on how diet affects cognitive and physical development in children. She advocates for whole-food approaches that are practical for busy families.",
      },
      date: "December 8, 2024",
      category: "Parenting Tips",
      tags: ["Nutrition", "Child Development", "Parenting", "Health"],
      featuredImage: "/images/child-development.jpeg",
      content: `<h2>Content will be dynamically loaded based on the slug parameter</h2>`
    },
    "early-intervention-benefits": {
      title: "The Benefits of Early Intervention for Developmental Delays",
      author: {
        name: "Dr. Darren Elder",
        image: "/images/child-learning.jpeg",
        bio: "Dr. Darren Elder is a developmental psychologist specializing in early intervention programs. His research has demonstrated the significant long-term benefits of addressing developmental concerns during the critical early years.",
      },
      date: "December 17, 2024",
      category: "Therapy Approaches",
      tags: ["Early Intervention", "Developmental Delays", "Therapy", "Child Development"],
      featuredImage: "/images/child-learning.jpeg",
      content: `<h2>Content will be dynamically loaded based on the slug parameter</h2>`
    }
  };
  
  return blogPosts[slug] || null;
}

// Related blog posts data
interface RelatedPost {
  id: number;
  title: string;
  date: string;
  image: string;
  slug: string;
}

const relatedPosts: RelatedPost[] = [
  {
    id: 2,
    title: "Sensory Processing Strategies for Children with Autism",
    date: "06 Nov 2024",
    image: "/images/speech-therapy.jpeg",
    slug: "sensory-processing-strategies",
  },
  {
    id: 3,
    title: "Speech Development Milestones: What to Expect",
    date: "15 Nov 2024",
    image: "/images/therapy-session.jpeg",
    slug: "speech-development-milestones",
  },
  {
    id: 4,
    title: "Nutrition and Child Development: Building Healthy Habits",
    date: "08 Dec 2024",
    image: "/images/child-development.jpeg",
    slug: "nutrition-child-development",
  },
  {
    id: 5,
    title: "The Benefits of Early Intervention for Developmental Delays",
    date: "17 Dec 2024",
    image: "/images/child-learning.jpeg",
    slug: "early-intervention-benefits",
  },
];

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

// Modified component to include search functionality
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()
  
  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (searchTerm.trim()) {
      // Navigate to blog list with search param
      router.push(`/blogs?q=${encodeURIComponent(searchTerm.trim())}`)
    }
  }
  
  // Move the data fetching logic here for client component
  const post = getBlogPost(use(params).slug)

  if (!post) {
    return <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-2xl font-bold mb-4">Resource Not Found</h1>
      <p className="mb-6">The learning resource you're looking for doesn't exist or has been removed.</p>
      <Link href="/blogs" className="inline-flex items-center text-primary hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Return to Learning Center
      </Link>
    </div>
  }
  
  const headings = extractHeadings(post.content)

  // Filter related posts to exclude current post
  const filteredRelatedPosts = relatedPosts.filter(related => related.slug !== use(params).slug).slice(0, 3);

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
                <li className="flex justify-between items-center">
                  <Link href="/blogs?category=parenting-tips" className="text-gray-700 hover:text-primary">
                    Parenting Tips
                  </Link>
                  <span className="text-gray-500">(5)</span>
                </li>
                <li className="flex justify-between items-center">
                  <Link href="/blogs?category=special-needs" className="text-gray-700 hover:text-primary">
                    Special Needs
                  </Link>
                  <span className="text-gray-500">(4)</span>
                </li>
                <li className="flex justify-between items-center">
                  <Link href="/blogs?category=behavioral-strategies" className="text-gray-700 hover:text-primary">
                    Behavioral Strategies
                  </Link>
                  <span className="text-gray-500">(4)</span>
                </li>
              </ul>
            </div>

            {/* Related Articles */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Related Resources</h3>
              <div className="space-y-4">
                {filteredRelatedPosts.map((relatedPost) => (
                  <Link href={`/blogs/${relatedPost.slug}`} key={relatedPost.id} className="flex gap-3 group">
                    <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
                      <Image 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                </div>
                  <div>
                      <div className="text-gray-500 text-xs mb-1">{relatedPost.date}</div>
                      <h4 className="text-sm font-medium group-hover:text-primary line-clamp-2">
                        {relatedPost.title}
                      </h4>
                </div>
                    </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

