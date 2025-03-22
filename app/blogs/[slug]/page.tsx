import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Eye, MessageSquare, Search } from "lucide-react"

// This is a mock function to simulate fetching blog data
// In a real application, this would fetch from your database
async function getBlogPost(slug: string) {
  // Mock data for demonstration
  return {
    title: "Understanding Child Development Milestones",
    author: {
      name: "Dr. Sarah Johnson",
      image: "/placeholder.svg?height=120&width=120",
      bio: "As a certified child development specialist, I'm passionate about helping parents understand their children's growth journey. My approach focuses on evidence-based practices and practical advice for families.",
    },
    date: "March 15, 2025",
    views: 1250,
    comments: 42,
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
    featuredImage: "/placeholder.svg?height=400&width=800",
  }
}

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

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  const headings = extractHeadings(post.content)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all blogs
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

              <div className="mb-8">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <div className="flex items-center mr-6">
                    <Image
                      src={post.author.image || "/placeholder.svg"}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-2"
                    />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center mr-6">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center mr-6">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <img
                  src={post.featuredImage || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full rounded-lg mb-8"
                />
              </div>

              {/* Table of Contents */}
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

              {/* Main Content */}
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* About Author Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">About Author</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <Image
                    src={post.author.image || "/placeholder.svg"}
                    alt={post.author.name}
                    width={120}
                    height={120}
                    className="rounded-lg"
                  />
                  <div>
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
                      href={`/blogs/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
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
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="absolute inset-y-0 right-0 px-3 flex items-center">
                  <Search className="h-5 w-5 text-blue-500" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Categories</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <Link href="/blogs/category/child-development" className="text-gray-700 hover:text-primary">
                    Child Development
                  </Link>
                  <span className="text-gray-500">(8)</span>
                </li>
                <li className="flex justify-between items-center">
                  <Link href="/blogs/category/therapy-approaches" className="text-gray-700 hover:text-primary">
                    Therapy Approaches
                  </Link>
                  <span className="text-gray-500">(6)</span>
                </li>
                <li className="flex justify-between items-center">
                  <Link href="/blogs/category/parenting-tips" className="text-gray-700 hover:text-primary">
                    Parenting Tips
                  </Link>
                  <span className="text-gray-500">(5)</span>
                </li>
                <li className="flex justify-between items-center">
                  <Link href="/blogs/category/special-needs" className="text-gray-700 hover:text-primary">
                    Special Needs
                  </Link>
                  <span className="text-gray-500">(4)</span>
                </li>
                <li className="flex justify-between items-center">
                  <Link href="/blogs/category/behavioral-strategies" className="text-gray-700 hover:text-primary">
                    Behavioral Strategies
                  </Link>
                  <span className="text-gray-500">(4)</span>
                </li>
              </ul>
            </div>

            {/* Latest News */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Latest News</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Sensory Processing Strategies"
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <div className="text-gray-500 text-xs mb-1">06 Nov 2024</div>
                    <Link
                      href="/blogs/sensory-processing-strategies"
                      className="text-sm font-medium hover:text-primary line-clamp-2"
                    >
                      Sensory Processing Strategies for Children with Autism
                    </Link>
                  </div>
                </div>

                <div className="flex gap-3">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Speech Development"
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <div className="text-gray-500 text-xs mb-1">15 Nov 2024</div>
                    <Link
                      href="/blogs/speech-development-milestones"
                      className="text-sm font-medium hover:text-primary line-clamp-2"
                    >
                      Speech Development Milestones: What to Expect
                    </Link>
                  </div>
                </div>

                <div className="flex gap-3">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Nutrition for Development"
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <div className="text-gray-500 text-xs mb-1">08 Dec 2024</div>
                    <Link
                      href="/blogs/nutrition-child-development"
                      className="text-sm font-medium hover:text-primary line-clamp-2"
                    >
                      Nutrition and Child Development: Building Healthy Habits
                    </Link>
                  </div>
                </div>

                <div className="flex gap-3">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Early Intervention"
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <div className="text-gray-500 text-xs mb-1">17 Dec 2024</div>
                    <Link
                      href="/blogs/early-intervention-benefits"
                      className="text-sm font-medium hover:text-primary line-clamp-2"
                    >
                      The Benefits of Early Intervention for Developmental Delays
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

