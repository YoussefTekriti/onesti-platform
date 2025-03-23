"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import AdminHeader from "@/components/admin/admin-header"

export default function CreateBlogPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [author, setAuthor] = useState("")
  const [newAuthor, setNewAuthor] = useState("")
  const [isAddingAuthor, setIsAddingAuthor] = useState(false)
  const [featuredImage, setFeaturedImage] = useState<string | null>(null)
  const [isPublished, setIsPublished] = useState(false)
  const [showToc, setShowToc] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectionPosition, setSelectionPosition] = useState<{ top: number; left: number } | null>(null)
  const [showFormatToolbar, setShowFormatToolbar] = useState(false)
  const [showImageDialog, setShowImageDialog] = useState(false)
  const [showLinkDialog, setShowLinkDialog] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [imageCaption, setImageCaption] = useState("")
  const [linkUrl, setLinkUrl] = useState("")
  const [linkText, setLinkText] = useState("")
  const [tableOfContents, setTableOfContents] = useState<Array<{ id: string; level: number; text: string }>>([])
  const [uploadedImage, setUploadedImage] = useState<File | null>(null)
  const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(null)
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [publishMode, setPublishMode] = useState<"draft" | "publish">("draft")

  const editorRef = useRef<HTMLDivElement>(null)
  const formatToolbarRef = useRef<HTMLDivElement>(null)
  const imageDialogRef = useRef<HTMLDivElement>(null)
  const linkDialogRef = useRef<HTMLDivElement>(null)

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
  const authors = ["Dr. Emily Parker", "Dr. David Wilson", "Dr. Jessica Lee", "Dr. Michael Chen", "Add New Author..."]

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
    setAuthor("")
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
    const content = editorRef.current?.innerHTML || ""

    // Simulate API call
    setTimeout(() => {
      console.log({
        title,
        content,
        category,
        author,
        featuredImage,
        isPublished: publishMode === "publish",
        tags,
      })
      setIsSubmitting(false)
      // Redirect to blogs list with success message
      router.push(`/admin/blogs?success=Blog post ${publishMode === "publish" ? "published" : "saved as draft"} successfully`)
    }, 1500)
  }

  // Handle text selection for formatting
  useEffect(() => {
    const handleSelectionChange = () => {
      if (!editorRef.current) return

      const selection = window.getSelection()
      if (selection && selection.rangeCount > 0 && selection.toString().trim().length > 0) {
        // Check if selection is within the editor
        let node = selection.anchorNode
        while (node) {
          if (node === editorRef.current) {
            const range = selection.getRangeAt(0)
            const rect = range.getBoundingClientRect()
            const editorRect = editorRef.current.getBoundingClientRect()

            setSelectionPosition({
              top: rect.top - editorRect.top - 40,
              left: rect.left + rect.width / 2 - editorRect.left,
            })
            setShowFormatToolbar(true)
            return
          }
          node = node.parentNode
        }
      }

      setShowFormatToolbar(false)
    }

    document.addEventListener("selectionchange", handleSelectionChange)
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange)
    }
  }, [])

  // Close format toolbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        formatToolbarRef.current &&
        !formatToolbarRef.current.contains(event.target as Node) &&
        event.target !== editorRef.current
      ) {
        setShowFormatToolbar(false)
      }

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
  }, [])

  // Generate table of contents from content
  useEffect(() => {
    if (!editorRef.current) return

    const headings = editorRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6")
    const toc: Array<{ id: string; level: number; text: string }> = []

    headings.forEach((heading, index) => {
      const level = Number.parseInt(heading.tagName.substring(1))
      const text = heading.textContent || ""
      const id = `heading-${index}-${text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "")}`

      // Set ID on the heading element for linking
      heading.id = id

      toc.push({ id, level, text })
    })

    setTableOfContents(toc)
  }, [editorRef.current?.innerHTML])

  // Format functions
  const applyFormat = (format: string) => {
    if (!editorRef.current) return

    const selection = window.getSelection()
    if (!selection || selection.rangeCount === 0) return

    // Save the current selection
    const range = selection.getRangeAt(0)

    switch (format) {
      case "bold":
        document.execCommand("bold", false)
        break
      case "italic":
        document.execCommand("italic", false)
        break
      case "h1":
      case "h2":
      case "h3":
        // Create a new element with the heading tag
        const headingTag = format
        document.execCommand("formatBlock", false, `<${headingTag}>`)
        break
      case "link":
        // Save selected text for the link dialog
        setLinkText(selection.toString())
        setShowLinkDialog(true)
        break
      case "image":
        setShowImageDialog(true)
        break
      case "ul":
        document.execCommand("insertUnorderedList", false)
        break
      case "ol":
        document.execCommand("insertOrderedList", false)
        break
      case "quote":
        document.execCommand("formatBlock", false, "<blockquote>")
        break
      case "superscript":
        document.execCommand("superscript", false)
        break
      case "subscript":
        document.execCommand("subscript", false)
        break
      case "code":
        // Wrap selection in code tag
        const codeElement = document.createElement("code")
        range.surroundContents(codeElement)
        break
    }

    setShowFormatToolbar(false)
    editorRef.current.focus()
  }

  // Insert link
  const insertLink = () => {
    if (!editorRef.current) return

    const selection = window.getSelection()
    if (!selection || selection.rangeCount === 0) return

    const range = selection.getRangeAt(0)
    const linkElement = document.createElement("a")
    linkElement.href = linkUrl
    linkElement.textContent = linkText || linkUrl

    range.deleteContents()
    range.insertNode(linkElement)

    setShowLinkDialog(false)
    setLinkUrl("")
    setLinkText("")
    editorRef.current.focus()
  }

  // Insert image
  const insertImage = () => {
    if (!editorRef.current) return

    const selection = window.getSelection()
    if (!selection || selection.rangeCount === 0) return

    const range = selection.getRangeAt(0)

    // Create figure element
    const figureElement = document.createElement("figure")
    figureElement.className = "my-4"

    // Create image element
    const imgElement = document.createElement("img")

    // Use uploaded image if available, otherwise use URL
    if (uploadedImagePreview) {
      imgElement.src = uploadedImagePreview
    } else {
      imgElement.src = imageUrl || "/placeholder.svg?height=300&width=500"
    }

    imgElement.alt = imageCaption || "Image"
    imgElement.className = "max-w-full h-auto rounded"

    // Create figcaption if there's a caption
    if (imageCaption) {
      const figcaptionElement = document.createElement("figcaption")
      figcaptionElement.textContent = imageCaption
      figcaptionElement.className = "text-center text-sm text-gray-500 mt-2"
      figureElement.appendChild(imgElement)
      figureElement.appendChild(figcaptionElement)
    } else {
      figureElement.appendChild(imgElement)
    }

    range.deleteContents()
    range.insertNode(figureElement)

    setShowImageDialog(false)
    setImageUrl("")
    setImageCaption("")
    setUploadedImage(null)
    setUploadedImagePreview(null)
    editorRef.current.focus()
  }

  return (
    <div className="flex-1">
      <AdminHeader title="Create Blog Post" description="Write and publish a new blog article" />

      <main className="p-6">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Link>
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Blog Content</CardTitle>
                  <CardDescription>Write your blog post content and apply formatting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter blog post title"
                      required
                    />
                    <p className="text-xs text-muted-foreground">SEO optimized, clearly descriptive (max 70 characters).</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="content">Content *</Label>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="show-toc"
                          checked={showToc}
                          onCheckedChange={(checked) => setShowToc(checked as boolean)}
                        />
                        <Label htmlFor="show-toc" className="text-sm font-normal">
                          Show Table of Contents
                        </Label>
                      </div>
                    </div>

                    {/* Formatting toolbar */}
                    <div className="border-b pb-2 mb-4">
                      <div className="flex flex-wrap gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("bold")}
                          title="Bold"
                        >
                          <Bold className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("italic")}
                          title="Italic"
                        >
                          <Italic className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("code")}
                          title="Code"
                        >
                          <Code className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("superscript")}
                          title="Superscript"
                        >
                          <Superscript className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("subscript")}
                          title="Subscript"
                        >
                          <Subscript className="h-4 w-4" />
                        </Button>
                        <div className="h-6 w-px bg-gray-300 mx-1"></div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("h1")}
                          title="Heading 1"
                        >
                          <Heading1 className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("h2")}
                          title="Heading 2"
                        >
                          <Heading2 className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("h3")}
                          title="Heading 3"
                        >
                          <Heading3 className="h-4 w-4" />
                        </Button>
                        <div className="h-6 w-px bg-gray-300 mx-1"></div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("ul")}
                          title="Bullet List"
                        >
                          <List className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("ol")}
                          title="Numbered List"
                        >
                          <ListOrdered className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("quote")}
                          title="Quote"
                        >
                          <Quote className="h-4 w-4" />
                        </Button>
                        <div className="h-6 w-px bg-gray-300 mx-1"></div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("link")}
                          title="Insert Link"
                        >
                          <LinkIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("image")}
                          title="Insert Image"
                        >
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Floating Format Toolbar */}
                    {showFormatToolbar && selectionPosition && (
                      <div
                        ref={formatToolbarRef}
                        className="absolute bg-white border rounded-md shadow-md p-1 flex space-x-1 z-10"
                        style={{
                          top: `${selectionPosition.top}px`,
                          left: `${selectionPosition.left}px`,
                          transform: "translateX(-50%)",
                        }}
                      >
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("bold")}
                          title="Bold"
                        >
                          <Bold className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("italic")}
                          title="Italic"
                        >
                          <Italic className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("h1")}
                          title="Heading 1"
                        >
                          <Heading1 className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("h2")}
                          title="Heading 2"
                        >
                          <Heading2 className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("link")}
                          title="Insert Link"
                        >
                          <LinkIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => applyFormat("image")}
                          title="Insert Image"
                        >
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    )}

                    {/* Image Dialog */}
                    {showImageDialog && (
                      <div
                        ref={imageDialogRef}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                      >
                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                          <h3 className="text-lg font-medium mb-4">Insert Image</h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label className="text-base font-medium">Upload Image</Label>
                              <div className="border border-dashed rounded-md p-4 text-center">
                                {uploadedImagePreview ? (
                                  <div className="relative">
                                    <img
                                      src={uploadedImagePreview || "/placeholder.svg"}
                                      alt="Preview"
                                      className="max-h-40 mx-auto object-contain"
                                    />
                                    <Button
                                      type="button"
                                      variant="destructive"
                                      size="icon"
                                      className="absolute top-2 right-2"
                                      onClick={() => {
                                        setUploadedImage(null)
                                        setUploadedImagePreview(null)
                                      }}
                                    >
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ) : (
                                  <>
                                    <ImageIcon className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                                    <Label
                                      htmlFor="editor-image-upload"
                                      className="cursor-pointer text-sm text-blue-600 hover:text-blue-800"
                                    >
                                      Upload Image
                                    </Label>
                                    <Input
                                      id="editor-image-upload"
                                      type="file"
                                      accept="image/jpeg,image/png,image/gif,image/webp"
                                      className="hidden"
                                      onChange={handleEditorImageUpload}
                                    />
                                    <p className="text-xs text-muted-foreground mt-1">
                                      Recommended: 16:9 ratio, JPEG or PNG
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>

                            <div className="relative">
                              <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                              </div>
                              <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-muted-foreground">Or use URL</span>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="image-url">Image URL</Label>
                              <Input
                                id="image-url"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="https://example.com/image.jpg"
                                disabled={!!uploadedImagePreview}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="image-caption">Caption (optional)</Label>
                              <Input
                                id="image-caption"
                                value={imageCaption}
                                onChange={(e) => setImageCaption(e.target.value)}
                                placeholder="Image caption"
                              />
                            </div>

                            <div className="flex justify-end space-x-2">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                  setShowImageDialog(false)
                                  setUploadedImage(null)
                                  setUploadedImagePreview(null)
                                  setImageUrl("")
                                  setImageCaption("")
                                }}
                              >
                                Cancel
                              </Button>
                              <Button type="button" onClick={insertImage} disabled={!imageUrl && !uploadedImagePreview}>
                                Insert
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Link Dialog */}
                    {showLinkDialog && (
                      <div
                        ref={linkDialogRef}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                      >
                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                          <h3 className="text-lg font-medium mb-4">Insert Link</h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="link-text">Link Text</Label>
                              <Input
                                id="link-text"
                                value={linkText}
                                onChange={(e) => setLinkText(e.target.value)}
                                placeholder="Link text"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="link-url">URL</Label>
                              <Input
                                id="link-url"
                                value={linkUrl}
                                onChange={(e) => setLinkUrl(e.target.value)}
                                placeholder="https://example.com"
                              />
                            </div>
                            <div className="flex justify-end space-x-2">
                              <Button type="button" variant="outline" onClick={() => setShowLinkDialog(false)}>
                                Cancel
                              </Button>
                              <Button type="button" onClick={insertLink} disabled={!linkUrl}>
                                Insert
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-4">
                      <div className="relative">
                        {/* WYSIWYG Editor */}
                        <div className="border rounded-md p-4 min-h-[400px] focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-auto">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {showToc && tableOfContents.length > 0 && (
                              <div className="md:col-span-1 border-r pr-4">
                                <h3 className="text-sm font-medium mb-2">In This Article:</h3>
                                <ul className="space-y-1 text-sm">
                                  {tableOfContents.map((item) => (
                                    <li
                                      key={item.id}
                                      className="hover:text-blue-600"
                                      style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
                                    >
                                      <a href={`#${item.id}`}>{item.text}</a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <div
                              ref={editorRef}
                              className={`${showToc && tableOfContents.length > 0 ? "md:col-span-3" : "md:col-span-4"} prose max-w-none focus:outline-none`}
                              contentEditable
                              suppressContentEditableWarning
                              data-placeholder="Start writing your blog post here..."
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Blog Settings</CardTitle>
                  <CardDescription>Configure blog post metadata and publishing options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={category} onValueChange={setCategory} required>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">Each article must belong to one primary category.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="author">Author *</Label>
                    {isAddingAuthor ? (
                      <div className="space-y-2">
                        <Input
                          id="new-author"
                          value={newAuthor}
                          onChange={(e) => setNewAuthor(e.target.value)}
                          placeholder="Enter new author name"
                        />
                        <div className="flex space-x-2">
                          <Button type="button" variant="outline" size="sm" onClick={cancelAddAuthor}>
                            Cancel
                          </Button>
                          <Button type="button" size="sm" onClick={saveNewAuthor} disabled={!newAuthor.trim()}>
                            <Check className="h-4 w-4 mr-1" />
                            Save Author
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Select value={author} onValueChange={handleAuthorChange} required>
                        <SelectTrigger id="author">
                          <SelectValue placeholder="Select an author" />
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
                    <p className="text-xs text-muted-foreground">Expert or specialist name (linked to author profile if available).</p>
                  </div>

                  <div className="space-y-2">
                    <Label>Featured Image</Label>
                    {featuredImage ? (
                      <div className="relative rounded-md overflow-hidden border">
                        <img
                          src={featuredImage || "/placeholder.svg"}
                          alt="Featured"
                          className="w-full h-40 object-cover"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={removeFeaturedImage}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="border border-dashed rounded-md p-4 text-center">
                        <ImageIcon className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                        <Label
                          htmlFor="featured-image"
                          className="cursor-pointer text-sm text-blue-600 hover:text-blue-800"
                        >
                          Upload Featured Image
                        </Label>
                        <Input
                          id="featured-image"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                        <p className="text-xs text-muted-foreground mt-1">Recommended: 1200x630px</p>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground">High-quality, relevant image consistent with branding.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {tags.map((tag, index) => (
                        <div 
                          key={index} 
                          className="flex items-center bg-muted rounded-md px-2 py-1 text-sm"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          <span>{tag}</span>
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="icon" 
                            className="h-4 w-4 ml-1"
                            onClick={() => removeTag(tag)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                      <div className="flex space-x-2">
                        <Input
                          id="new-tag"
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          placeholder="Add a tag..."
                          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                        />
                        <Button 
                          type="button" 
                          size="sm" 
                          variant="outline"
                          onClick={addTag}
                          disabled={!newTag.trim()}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Select 
                        onValueChange={(value) => {
                          if (value && !tags.includes(value)) {
                            setTags([...tags, value]);
                          }
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select predefined tag" />
                        </SelectTrigger>
                        <SelectContent className="max-h-[200px]">
                          {predefinedTags.map((tag) => (
                            <SelectItem key={tag} value={tag}>
                              {tag}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Multiple tags (2-5 recommended) to improve searchability.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Publication Status</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        type="button"
                        variant={publishMode === "draft" ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => setPublishMode("draft")}
                      >
                        <Save className="mr-2 h-4 w-4" />
                        Save as Draft
                      </Button>
                      <Button
                        type="button"
                        variant={publishMode === "publish" ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => setPublishMode("publish")}
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Publish Now
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {publishMode === "publish" 
                        ? "This post will be visible to all users immediately upon saving" 
                        : "This post will be saved and can be published later"}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => router.push("/admin/blogs")}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {publishMode === "publish" ? <Send className="mr-2 h-4 w-4" /> : <Save className="mr-2 h-4 w-4" />}
                    {isSubmitting 
                      ? "Saving..." 
                      : publishMode === "publish" 
                        ? "Publish Post" 
                        : "Save Draft"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

