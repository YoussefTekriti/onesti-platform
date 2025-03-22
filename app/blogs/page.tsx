import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Eye, MessageSquare, Search } from "lucide-react"

// Mock data for blog posts
const featuredPost = {
  id: 1,
  title: "Understanding Child Development Milestones",
  slug: "child-development-milestones",
  excerpt:
    "Child development is a fascinating journey that follows a predictable pattern, yet each child progresses at their own unique pace. Learn about key milestones and when to seek professional guidance.",
  date: "15 Mar 2025",
  author: "Dr. Sarah Johnson",
  image: "/placeholder.svg?height=400&width=800",
  category: "Child Development",
  views: 125,
  comments: 18,
}

const blogs = [
  {
    id: 2,
    title: "Sensory Processing Strategies for Children with Autism",
    slug: "sensory-processing-strategies",
    excerpt:
      "Discover effective sensory processing strategies to help children with autism navigate their environment more comfortably.",
    date: "06 Nov 2024",
    image: "/placeholder.svg?height=200&width=300",
    category: "Special Needs",
  },
  {
    id: 3,
    title: "Speech Development Milestones: What to Expect",
    slug: "speech-development-milestones",
    excerpt: "Learn about typical speech development milestones and when to consider speech therapy for your child.",
    date: "15 Nov 2024",
    image: "/placeholder.svg?height=200&width=300",
    category: "Child Development",
  },
  {
    id: 4,
    title: "Nutrition and Child Development: Building Healthy Habits",
    slug: "nutrition-child-development",
    excerpt:
      "Explore how nutrition impacts child development and learn strategies for establishing healthy eating habits.",
    date: "08 Dec 2024",
    image: "/placeholder.svg?height=200&width=300",
    category: "Parenting Tips",
  },
  {
    id: 5,
    title: "The Benefits of Early Intervention for Developmental Delays",
    slug: "early-intervention-benefits",
    excerpt:
      "Understand how early intervention can significantly improve outcomes for children with developmental delays.",
    date: "17 Dec 2024",
    image: "/placeholder.svg?height=200&width=300",
    category: "Therapy Approaches",
  },
]

// Categories with post count - updated to be relevant to Onesti's focus
const categories = [
  { name: "Child Development", count: 8 },
  { name: "Therapy Approaches", count: 6 },
  { name: "Parenting Tips", count: 5 },
  { name: "Special Needs", count: 4 },
  { name: "Behavioral Strategies", count: 4 },
]

// Latest news posts
const latestNews = [
  {
    id: 6,
    title: "Sensory Processing Strategies for Children with Autism",
    date: "06 Nov 2024",
    image: "/placeholder.svg?height=80&width=80",
    slug: "sensory-processing-strategies",
  },
  {
    id: 7,
    title: "Speech Development Milestones: What to Expect",
    date: "15 Nov 2024",
    image: "/placeholder.svg?height=80&width=80",
    slug: "speech-development-milestones",
  },
  {
    id: 8,
    title: "Nutrition and Child Development: Building Healthy Habits",
    date: "08 Dec 2024",
    image: "/placeholder.svg?height=80&width=80",
    slug: "nutrition-child-development",
  },
  {
    id: 9,
    title: "The Benefits of Early Intervention for Developmental Delays",
    date: "17 Dec 2024",
    image: "/placeholder.svg?height=80&width=80",
    slug: "early-intervention-benefits",
  },
]

// Available tags - updated to be relevant to Onesti's focus
const tags = [
  "Child Development",
  "Therapy",
  "Parenting",
  "Special Needs",
  "Behavior",
  "Milestones",
  "Early Intervention",
]

export default function BlogsPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Onesti Blog</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{featuredPost.title}</h2>

              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white text-primary">{featuredPost.category}</Badge>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-500">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Link href={`/blogs/${featuredPost.slug}`} className="flex items-center text-sm text-gray-500">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>{featuredPost.comments}</span>
                      </Link>
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{featuredPost.views}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{featuredPost.author}</span>
                    <Link href={`/blogs/${featuredPost.slug}`}>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <Link href={`/blogs/${blog.slug}`}>
                    <div className="relative h-48">
                      <img
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-white text-primary">{blog.category}</Badge>
                    </div>
                  </Link>

                  <div className="p-5">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{blog.date}</span>
                    </div>

                    <Link href={`/blogs/${blog.slug}`} className="block">
                      <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">{blog.title}</h3>
                    </Link>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>

                    <Link href={`/blogs/${blog.slug}`} className="text-primary text-sm font-medium hover:underline">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
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
                {categories.map((category, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <Link
                      href={`/blogs/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-700 hover:text-primary"
                    >
                      {category.name}
                    </Link>
                    <span className="text-gray-500">({category.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest News */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Latest News</h3>
              <div className="space-y-4">
                {latestNews.map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <div className="text-gray-500 text-xs mb-1">{post.date}</div>
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="text-sm font-medium hover:text-primary line-clamp-2"
                      >
                        {post.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/blogs/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700"
                  >
                    {tag}
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

