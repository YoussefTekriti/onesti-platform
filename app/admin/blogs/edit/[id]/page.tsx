"use client"

import React, { useState, useRef, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Bold,
  Italic,
  Code,
  LinkIcon,
  ImageIcon,
  ListOrdered,
  List,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Save,
  X,
  Superscript,
  Subscript,
  Check,
  Send,
  Plus,
  Tag
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import AdminHeader from "@/components/admin/admin-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EditBlogPage() {
  // Use the useParams hook to get the id parameter from the URL
  const params = useParams<{ id: string }>();
  const router = useRouter();
  
  // Add mounting state to prevent hydration mismatches
  const [mounted, setMounted] = useState(false);
  
  // Blog state
  const [title, setTitle] = useState("Understanding Child Development Milestones")
  const [category, setCategory] = useState("Child Development")
  const [author, setAuthor] = useState("Dr. Sarah Johnson")
  const [newAuthor, setNewAuthor] = useState("")
  const [isAddingAuthor, setIsAddingAuthor] = useState(false)
  const [featuredImage, setFeaturedImage] = useState<string | null>("/placeholder.svg?height=400&width=600")
  const [isPublished, setIsPublished] = useState(true)
  const [showToc, setShowToc] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showImageDialog, setShowImageDialog] = useState(false)
  const [showLinkDialog, setShowLinkDialog] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [imageCaption, setImageCaption] = useState("")
  const [linkUrl, setLinkUrl] = useState("")
  const [linkText, setLinkText] = useState("")
  const [tableOfContents, setTableOfContents] = useState<Array<{ id: string; level: number; text: string }>>([])
  const [uploadedImage, setUploadedImage] = useState<File | null>(null)
  const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(null)
  const [tags, setTags] = useState<string[]>(["development", "milestones", "children", "growth"])
  const [newTag, setNewTag] = useState("")
  const [publishMode, setPublishMode] = useState<"draft" | "publish">("publish")
  const [excerpt, setExcerpt] = useState("Learn about the key developmental milestones for children and how to track them effectively.")
  const [content, setContent] = useState("<p>This is a sample blog post content that would be loaded from the database.</p><p>It includes multiple paragraphs and formatting.</p>")
  const [publishDate, setPublishDate] = useState("2023-03-15")
  const [seoTitle, setSeoTitle] = useState("Child Development Milestones: A Complete Guide | Onesti")
  const [seoDescription, setSeoDescription] = useState("Learn about key developmental milestones for children from birth to 5 years. Our comprehensive guide helps parents track and support healthy development.")

  const editorRef = useRef<HTMLDivElement>(null)
  const imageDialogRef = useRef<HTMLDivElement>(null)
  const linkDialogRef = useRef<HTMLDivElement>(null)
  
  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Predefined tag options
  const predefinedTags = [
    "Child Development", "Milestones", "Cognitive Development", "Language Skills", "Motor Skills", 
    "Social Emotional", "Early Childhood", "Learning Activities", "Autism Spectrum Disorder", 
    "ADHD", "Speech Delay", "Sensory Processing", "Behavioral Challenges", "Early Signs", "Special Needs", 
    "Early Intervention", "Developmental Screening", "Assessment Tools", "Intervention Strategies", 
    "Therapy Options", "Professional Guidance", "Parenting Tips", "Daily Routines", "Bedtime Routines", 
    "Healthy Eating", "Toilet Training", "Emotional Support", "Behavioral Management", "Family Support", 
    "Speech Therapy", "Occupational Therapy", "Play Therapy", "Behavioral Therapy", "Therapy Approaches", 
    "Specialist Advice", "Professional Development", "Workshops and Trainings", "Teletherapy", 
    "Online Sessions", "Virtual Therapy", "Remote Learning", "Parent Guidance Online", "Online Resources"
  ]

  // Mock data for categories and authors
  const categories = [
    "Child Development", 
    "Delays & Disorders", 
    "Assessments & Intervention", 
    "Parenting Support", 
    "Therapy & Specialists", 
    "Telepractice & Online Therapy"
  ]
  const authors = ["Dr. Emily Parker", "Dr. David Wilson", "Dr. Sarah Johnson", "Dr. Michael Chen", "Add New Author..."]

  // Handle featured image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setFeaturedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle image upload in the image dialog
  const handleEditorImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedImage(file)
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImagePreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Remove featured image
  const removeFeaturedImage = () => {
    setFeaturedImage(null)
  }

  // Handle author selection or addition
  const handleAuthorChange = (value: string) => {
    if (value === "Add New Author...") {
      setIsAddingAuthor(true)
    } else {
      setAuthor(value)
    }
  }

  // Save new author
  const saveNewAuthor = () => {
    if (newAuthor.trim()) {
      setAuthor(newAuthor)
      setIsAddingAuthor(false)
      setNewAuthor("")
    }
  }

  // Cancel adding new author
  const cancelAddAuthor = () => {
    setIsAddingAuthor(false)
    setNewAuthor("")
  }

  // Handle adding a new tag
  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  }

  // Handle removing a tag
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get the HTML content from the editor
    const editorContent = editorRef.current?.innerHTML || content

    // Simulate API call
    setTimeout(() => {
      console.log({
        id: params.id,
        title,
        content: editorContent,
        excerpt,
        category,
        author,
        featuredImage,
        isPublished: publishMode === "publish",
        tags,
        publishDate,
        seoTitle,
        seoDescription
      })
      setIsSubmitting(false)
      // Redirect to blogs list with success message
      router.push(`/admin/blogs?success=Blog post ${publishMode === "publish" ? "published" : "saved as draft"} successfully`)
    }, 1500)
  }

  // Keep only the useEffect for clicking outside dialogs
  useEffect(() => {
    if (!mounted) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (imageDialogRef.current && !imageDialogRef.current.contains(event.target as Node)) {
        setShowImageDialog(false)
      }

      if (linkDialogRef.current && !linkDialogRef.current.contains(event.target as Node)) {
        setShowLinkDialog(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mounted])

  // Apply formatting to selected text
  const applyFormat = (format: string) => {
    document.execCommand(format, false)
    focusEditor()
  }

  // Insert heading
  const insertHeading = (level: number) => {
    document.execCommand("formatBlock", false, `h${level}`)
    focusEditor()
  }

  // Focus the editor
  const focusEditor = () => {
    if (editorRef.current) {
      editorRef.current.focus()
    }
  }

  // Open link dialog
  const openLinkDialog = () => {
    const selection = window.getSelection()
    if (selection && selection.toString().trim().length > 0) {
      setLinkText(selection.toString())
      setShowLinkDialog(true)
    }
  }

  // Open image dialog
  const openImageDialog = () => {
    setShowImageDialog(true)
  }

  // Insert link
  const insertLink = () => {
    if (linkUrl.trim() && linkText.trim()) {
      document.execCommand(
        "insertHTML",
        false,
        `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer">${linkText}</a>`,
      )
      setShowLinkDialog(false)
      setLinkUrl("")
      setLinkText("")
      focusEditor()
    }
  }

  // Insert image
  const insertImage = () => {
    let imgHtml = ""
    
    if (uploadedImagePreview) {
      imgHtml = `<figure class="image-container"><img src="${uploadedImagePreview}" alt="${imageCaption || "Image"}" />${
        imageCaption ? `<figcaption>${imageCaption}</figcaption>` : ""
      }</figure>`
    } else if (imageUrl) {
      imgHtml = `<figure class="image-container"><img src="${imageUrl}" alt="${imageCaption || "Image"}" />${
        imageCaption ? `<figcaption>${imageCaption}</figcaption>` : ""
      }</figure>`
    }
    
    if (imgHtml) {
      document.execCommand("insertHTML", false, imgHtml)
      setShowImageDialog(false)
      setImageUrl("")
      setImageCaption("")
      setUploadedImage(null)
      setUploadedImagePreview(null)
      focusEditor()
    }
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
            <Button 
              variant="outline" 
              onClick={() => setPublishMode("draft")}
              disabled={isSubmitting}
            >Save as Draft</Button>
            <Button 
              onClick={(e) => {
                setPublishMode("publish")
                handleSubmit(e)
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Updating...
                </div>
              ) : (
                <>
              <Save className="h-4 w-4 mr-2" />
              Update
                </>
              )}
            </Button>
          </div>
        </div>

        <form onSubmit={(e) => {
          e.preventDefault()
          setPublishMode("publish")
          handleSubmit(e)
        }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Enter the essential information for your blog post</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input 
                      id="title" 
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)} 
                      placeholder="Enter a compelling title"
                      required
                      suppressHydrationWarning
                    />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea
                        id="excerpt"
                      value={excerpt} 
                      onChange={(e) => setExcerpt(e.target.value)} 
                      placeholder="Write a brief summary of your post"
                        rows={3}
                      suppressHydrationWarning
                      />
                  </div>
                </CardContent>
              </Card>

              {/* Editor Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Content</CardTitle>
                  <CardDescription>Write and format your blog post content</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  {/* Editor toolbar */}
                  <div className="flex flex-wrap items-center gap-1 border-b pb-2 mb-4">
                    <Button type="button" variant="ghost" size="icon" onClick={() => applyFormat("bold")}>
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={() => applyFormat("italic")}>
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={() => insertHeading(1)}>
                      <Heading1 className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={() => insertHeading(2)}>
                      <Heading2 className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={() => insertHeading(3)}>
                      <Heading3 className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={() => applyFormat("insertUnorderedList")}>
                      <List className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={() => applyFormat("insertOrderedList")}>
                      <ListOrdered className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={() => {
                      document.execCommand("formatBlock", false, "<blockquote>")
                      focusEditor()
                    }}>
                      <Quote className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={openLinkDialog}>
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={openImageDialog}>
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={() => applyFormat("superscript")}>
                      <Superscript className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={() => applyFormat("subscript")}>
                      <Subscript className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="icon" onClick={() => {
                      document.execCommand("formatBlock", false, "<pre>")
                      focusEditor()
                    }}>
                      <Code className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Content editor */}
                  <div
                    ref={editorRef}
                    className="min-h-[400px] border rounded-md p-4 focus:outline-none focus:ring-1 focus:ring-primary"
                    contentEditable
                    dangerouslySetInnerHTML={{ __html: content }}
                    onInput={(e) => setContent((e.target as HTMLDivElement).innerHTML)}
                    suppressContentEditableWarning
                  />

                  {/* Link dialog */}
                  {showLinkDialog && (
                    <div
                      ref={linkDialogRef}
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    >
                      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-medium">Insert Link</h3>
                          <Button type="button" variant="ghost" size="icon" onClick={() => setShowLinkDialog(false)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="link-text">Link Text</Label>
                            <Input
                              id="link-text"
                              value={linkText}
                              onChange={(e) => setLinkText(e.target.value)}
                              placeholder="Enter link text"
                            />
                          </div>
                          <div>
                            <Label htmlFor="link-url">URL</Label>
                            <Input
                              id="link-url"
                              value={linkUrl}
                              onChange={(e) => setLinkUrl(e.target.value)}
                              placeholder="https://example.com"
                              type="url"
                            />
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => setShowLinkDialog(false)}>
                              Cancel
                            </Button>
                            <Button type="button" onClick={insertLink}>
                              <LinkIcon className="h-4 w-4 mr-2" />
                              Insert Link
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Image dialog */}
                  {showImageDialog && (
                    <div
                      ref={imageDialogRef}
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    >
                      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-medium">Insert Image</h3>
                          <Button type="button" variant="ghost" size="icon" onClick={() => setShowImageDialog(false)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <Label className="block mb-2">Upload Image</Label>
                            <div className="border-2 border-dashed rounded-md p-4 text-center">
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleEditorImageUpload}
                                className="hidden"
                                id="editor-image-upload"
                              />
                              <label
                                htmlFor="editor-image-upload"
                                className="cursor-pointer text-primary hover:text-primary/80"
                              >
                                Click to upload image
                              </label>
                              {uploadedImagePreview && (
                                <div className="mt-2">
                                  <img
                                    src={uploadedImagePreview}
                                    alt="Preview"
                                    className="max-h-32 mx-auto rounded"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="image-url">Or enter image URL</Label>
                            <Input
                              id="image-url"
                              value={imageUrl}
                              onChange={(e) => setImageUrl(e.target.value)}
                              placeholder="https://example.com/image.jpg"
                              disabled={!!uploadedImagePreview}
                            />
                          </div>
                          <div>
                            <Label htmlFor="image-caption">Caption (optional)</Label>
                            <Input
                              id="image-caption"
                              value={imageCaption}
                              onChange={(e) => setImageCaption(e.target.value)}
                              placeholder="Enter image caption"
                            />
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => setShowImageDialog(false)}>
                              Cancel
                            </Button>
                            <Button type="button" onClick={insertImage} disabled={!uploadedImagePreview && !imageUrl}>
                              <ImageIcon className="h-4 w-4 mr-2" />
                              Insert Image
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* SEO Card */}
              <Card>
                <CardHeader>
                  <CardTitle>SEO Settings</CardTitle>
                  <CardDescription>Optimize your post for search engines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="seo-title">SEO Title</Label>
                    <Input
                      id="seo-title"
                      value={seoTitle}
                      onChange={(e) => setSeoTitle(e.target.value)}
                      placeholder="SEO-friendly title (55-60 characters ideal)"
                      suppressHydrationWarning
                    />
                    <p className="text-xs text-muted-foreground">
                      Characters: {seoTitle.length}/60
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seo-description">Meta Description</Label>
                    <Textarea
                      id="seo-description"
                      value={seoDescription}
                      onChange={(e) => setSeoDescription(e.target.value)}
                      placeholder="Brief description for search results (150-160 characters ideal)"
                      rows={3}
                      suppressHydrationWarning
                    />
                    <p className="text-xs text-muted-foreground">
                      Characters: {seoDescription.length}/160
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Publish Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Publish Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      defaultValue={isPublished ? "published" : "draft"}
                      onValueChange={(value) => setIsPublished(value === "published")}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                      </SelectContent>
                    </Select>
                        </div>
                  <div className="space-y-2">
                    <Label htmlFor="publishDate">Publish Date</Label>
                    <Input 
                      id="publishDate" 
                      type="date" 
                      value={publishDate}
                      onChange={(e) => setPublishDate(e.target.value)}
                      suppressHydrationWarning
                    />
                      </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="show-toc"
                      checked={showToc}
                      onCheckedChange={(checked) => setShowToc(checked as boolean)}
                    />
                    <Label htmlFor="show-toc" className="cursor-pointer">
                      Show Table of Contents
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Category & Author */}
              <Card>
                <CardHeader>
                  <CardTitle>Category & Author</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="author">Author</Label>
                    {isAddingAuthor ? (
                      <div className="space-y-2">
                        <Input
                          id="new-author"
                          value={newAuthor}
                          onChange={(e) => setNewAuthor(e.target.value)}
                          placeholder="Enter author name"
                        />
                        <div className="flex gap-2">
                          <Button type="button" variant="outline" size="sm" onClick={cancelAddAuthor}>
                            Cancel
                          </Button>
                          <Button type="button" size="sm" onClick={saveNewAuthor}>
                            <Check className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Select value={author} onValueChange={handleAuthorChange}>
                        <SelectTrigger id="author">
                          <SelectValue placeholder="Select author" />
                        </SelectTrigger>
                        <SelectContent>
                          {authors.map((auth) => (
                            <SelectItem key={auth} value={auth}>
                              {auth}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                    </div>
                </CardContent>
              </Card>

              {/* Featured Image */}
              <Card>
                <CardHeader>
                  <CardTitle>Featured Image</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed rounded-md p-4 text-center">
                    {featuredImage ? (
                    <div className="space-y-2">
                        <img
                          src={featuredImage}
                          alt="Featured"
                          className="max-h-48 mx-auto rounded"
                        />
                        <Button type="button" variant="outline" size="sm" onClick={removeFeaturedImage}>
                          <X className="h-4 w-4 mr-2" />
                          Remove
                        </Button>
                    </div>
                    ) : (
                      <>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="featured-image-upload"
                        />
                        <label
                          htmlFor="featured-image-upload"
                          className="cursor-pointer text-primary hover:text-primary/80"
                        >
                          Click to upload featured image
                        </label>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <div
                        key={tag}
                        className="inline-flex items-center bg-muted px-2 py-1 rounded-md text-sm"
                      >
                        {tag}
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-5 w-5 ml-1"
                          onClick={() => removeTag(tag)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                    </div>

                  <div className="flex items-center gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addTag()
                        }
                      }}
                    />
                    <Button type="button" variant="outline" size="icon" onClick={addTag}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div>
                    <Label className="mb-2 block">Common Tags</Label>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {predefinedTags.slice(0, 10).map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded-md"
                          onClick={() => {
                            if (!tags.includes(tag)) {
                              setTags([...tags, tag])
                            }
                          }}
                        >
                          {tag}
                        </button>
                      ))}
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

