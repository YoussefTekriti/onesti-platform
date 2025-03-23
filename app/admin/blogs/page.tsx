"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlusCircle, Eye, Edit, Trash2 } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function AdminBlogsPage() {
  const { toast } = useToast()
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Understanding Child Development Milestones",
      status: "Published",
      date: "Mar 15, 2025",
      slug: "child-development-milestones",
      author: "Dr. Sarah Johnson",
      category: "Child Development",
      image: "/images/child-development.jpeg"
    },
    {
      id: 2,
      title: "Sensory Processing Strategies for Children with Autism",
      status: "Published",
      date: "Nov 06, 2024",
      slug: "sensory-processing-strategies",
      author: "Dr. Michael Chen",
      category: "Delays & Disorders",
      image: "/images/speech-therapy.jpeg"
    },
    {
      id: 3,
      title: "Speech Development Milestones: What to Expect",
      status: "Published",
      date: "Nov 15, 2024",
      slug: "speech-development-milestones",
      author: "Dr. Lisa Patel",
      category: "Child Development",
      image: "/images/therapy-session.jpeg"
    },
    {
      id: 4,
      title: "Nutrition and Child Development: Building Healthy Habits",
      status: "Published",
      date: "Dec 08, 2024",
      slug: "nutrition-child-development",
      author: "Dr. Emma Rodriguez",
      category: "Parenting Support",
      image: "/images/child-development.jpeg"
    },
    {
      id: 5,
      title: "The Benefits of Early Intervention for Developmental Delays",
      status: "Draft",
      date: "Dec 17, 2024",
      slug: "early-intervention-benefits",
      author: "Dr. Darren Elder",
      category: "Assessments & Intervention",
      image: "/images/child-learning.jpeg"
    },
  ])

  const handleDeleteBlog = (id: number) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      setBlogs(blogs.filter(blog => blog.id !== id))
      toast({
        title: "Blog Deleted",
        description: "The blog post has been successfully deleted.",
      })
    }
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Blog Posts</h1>
          <p className="text-gray-500">Manage your blog content</p>
        </div>

        <Link href="/admin/blogs/create">
          <Button className="bg-onesti-purple hover:bg-onesti-purple/90">
            <PlusCircle className="h-4 w-4 mr-2" />
            Create New Post
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Post
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Author
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-md object-cover" src={blog.image} alt={blog.title} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{blog.author}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{blog.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        blog.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {blog.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blog.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded-full hover:bg-blue-50"
                        target="_blank"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/admin/blogs/edit/${blog.id}`}
                        className="text-amber-600 hover:text-amber-900 p-1 rounded-full hover:bg-amber-50"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <button
                        className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50"
                        onClick={() => handleDeleteBlog(blog.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

