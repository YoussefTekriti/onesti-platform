"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Image, LinkIcon, Save } from "lucide-react"
import AdminHeader from "@/components/admin/admin-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EditBlogPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the blog post data based on the ID
  const [content, setContent] = useState(
    "<p>This is a sample blog post content that would be loaded from the database.</p><p>It includes multiple paragraphs and formatting.</p>",
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally update the blog post
    console.log("Blog post updated")
    // Redirect to blog list
  }

  return (
    <div className="flex-1">
      <AdminHeader title="Edit Blog Post" description={`Editing blog post ID: ${params.id}`} />

      <main className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/blogs">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog List
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="outline">Preview</Button>
            <Button variant="outline">Save as Draft</Button>
            <Button onClick={handleSubmit}>
              <Save className="h-4 w-4 mr-2" />
              Update
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Blog Title</Label>
                      <Input id="title" defaultValue="Understanding Child Development Milestones" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                        defaultValue="Learn about the key developmental milestones for children and how to track them effectively."
                        className="resize-none"
                        rows={3}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Label>Content</Label>
                    <Tabs defaultValue="write">
                      <TabsList className="mb-4">
                        <TabsTrigger value="write">Write</TabsTrigger>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                      </TabsList>
                      <TabsContent value="write" className="space-y-4">
                        <div className="flex items-center gap-2 border-b pb-2">
                          <Button variant="ghost" size="sm">
                            <Image className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <LinkIcon className="h-4 w-4" />
                          </Button>
                        </div>
                        <Textarea
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          className="min-h-[400px] resize-none"
                        />
                      </TabsContent>
                      <TabsContent value="preview">
                        <div className="min-h-[400px] border rounded-md p-4 prose max-w-none">
                          <div dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="featuredImage">Featured Image</Label>
                      <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center">
                        <div className="bg-gray-100 w-full h-40 rounded-md flex items-center justify-center mb-2">
                          <Image className="h-8 w-8 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-500 mb-2">Current image: child-development.jpg</p>
                        <Button variant="outline" size="sm">
                          Change Image
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select defaultValue="development">
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="development">Development</SelectItem>
                          <SelectItem value="speech">Speech</SelectItem>
                          <SelectItem value="behavior">Behavior</SelectItem>
                          <SelectItem value="nutrition">Nutrition</SelectItem>
                          <SelectItem value="activities">Activities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="author">Author</Label>
                      <Select defaultValue="dr-sarah-johnson">
                        <SelectTrigger id="author">
                          <SelectValue placeholder="Select author" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dr-sarah-johnson">Dr. Sarah Johnson</SelectItem>
                          <SelectItem value="dr-michael-williams">Dr. Michael Williams</SelectItem>
                          <SelectItem value="dr-jennifer-davis">Dr. Jennifer Davis</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags</Label>
                      <Input id="tags" defaultValue="development, milestones, children, growth" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="publishDate">Publish Date</Label>
                      <Input id="publishDate" type="date" defaultValue="2023-03-15" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="seoTitle">SEO Title</Label>
                      <Input id="seoTitle" defaultValue="Child Development Milestones: A Complete Guide | Onesti" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="seoDescription">SEO Description</Label>
                      <Textarea
                        id="seoDescription"
                        defaultValue="Learn about key developmental milestones for children from birth to 5 years. Our comprehensive guide helps parents track and support healthy development."
                        className="resize-none"
                        rows={3}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

