"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Search, Filter, Download, Plus, Eye, Edit, Trash2 } from "lucide-react"
import AdminHeader from "@/components/admin/admin-header"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Update the component to include the create assessment dialog
export default function AssessmentsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  // Mock assessment data
  const assessments = [
    {
      id: "ASS-1001",
      childName: "Emma Johnson",
      parentName: "Sarah Johnson",
      type: "Developmental",
      status: "Completed",
      date: "2023-03-15",
      score: 85,
    },
    {
      id: "ASS-1002",
      childName: "Noah Williams",
      parentName: "Michael Williams",
      type: "Speech",
      status: "In Progress",
      date: "2023-03-18",
      score: null,
    },
    {
      id: "ASS-1003",
      childName: "Olivia Davis",
      parentName: "Jennifer Davis",
      type: "Behavioral",
      status: "Scheduled",
      date: "2023-03-22",
      score: null,
    },
    {
      id: "ASS-1004",
      childName: "Liam Miller",
      parentName: "Robert Miller",
      type: "Developmental",
      status: "Completed",
      date: "2023-03-10",
      score: 72,
    },
    {
      id: "ASS-1005",
      childName: "Ava Wilson",
      parentName: "Jessica Wilson",
      type: "Speech",
      status: "Completed",
      date: "2023-03-08",
      score: 91,
    },
    {
      id: "ASS-1006",
      childName: "Lucas Brown",
      parentName: "David Brown",
      type: "Behavioral",
      status: "In Progress",
      date: "2023-03-17",
      score: null,
    },
    {
      id: "ASS-1007",
      childName: "Sophia Martinez",
      parentName: "Maria Martinez",
      type: "Developmental",
      status: "Scheduled",
      date: "2023-03-25",
      score: null,
    },
  ]

  // Filter assessments based on active tab
  const filteredAssessments = assessments.filter((assessment) => {
    if (activeTab === "all") return true
    if (activeTab === "completed") return assessment.status === "Completed"
    if (activeTab === "inProgress") return assessment.status === "In Progress"
    if (activeTab === "scheduled") return assessment.status === "Scheduled"
    return true
  })

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Scheduled":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Handle form submission
  const handleCreateAssessment = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally save the assessment data
    setIsCreateDialogOpen(false)
    // Add success notification
  }

  return (
    <div className="flex-1">
      <AdminHeader title="Assessments" description="Manage all patient assessments" />

      <main className="p-6">
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2 w-full md:w-auto">
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search assessments..." className="pl-10" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Assessment Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="developmental">Developmental</SelectItem>
                    <SelectItem value="speech">Speech</SelectItem>
                    <SelectItem value="behavioral">Behavioral</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>

                <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      New Assessment
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <form onSubmit={handleCreateAssessment}>
                      <DialogHeader>
                        <DialogTitle>Create New Assessment</DialogTitle>
                        <DialogDescription>
                          Create a new assessment for a patient. Fill in all the required fields.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="childName">Child Name</Label>
                            <Input id="childName" placeholder="Enter child name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="parentName">Parent Name</Label>
                            <Input id="parentName" placeholder="Enter parent name" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="assessmentType">Assessment Type</Label>
                            <Select defaultValue="developmental">
                              <SelectTrigger id="assessmentType">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="developmental">Developmental</SelectItem>
                                <SelectItem value="speech">Speech</SelectItem>
                                <SelectItem value="behavioral">Behavioral</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="assessmentDate">Assessment Date</Label>
                            <Input id="assessmentDate" type="date" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Assessment Status</Label>
                          <RadioGroup defaultValue="scheduled">
                            <div className="flex items-center space-x-6">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="scheduled" id="scheduled" />
                                <Label htmlFor="scheduled">Scheduled</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="inProgress" id="inProgress" />
                                <Label htmlFor="inProgress">In Progress</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="completed" id="completed" />
                                <Label htmlFor="completed">Completed</Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="notes">Notes</Label>
                          <Textarea id="notes" placeholder="Enter any additional notes" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Create Assessment</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Assessments</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="inProgress">In Progress</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">
                  Assessment List
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    ({filteredAssessments.length} assessments)
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">ID</th>
                        <th className="text-left py-3 px-4 font-medium">Child</th>
                        <th className="text-left py-3 px-4 font-medium">Parent</th>
                        <th className="text-left py-3 px-4 font-medium">Type</th>
                        <th className="text-left py-3 px-4 font-medium">Status</th>
                        <th className="text-left py-3 px-4 font-medium">Date</th>
                        <th className="text-left py-3 px-4 font-medium">Score</th>
                        <th className="text-right py-3 px-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAssessments.map((assessment) => (
                        <tr key={assessment.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{assessment.id}</td>
                          <td className="py-3 px-4">{assessment.childName}</td>
                          <td className="py-3 px-4">{assessment.parentName}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-gray-500" />
                              {assessment.type}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assessment.status)}`}
                            >
                              {assessment.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">{assessment.date}</td>
                          <td className="py-3 px-4">{assessment.score !== null ? assessment.score : "-"}</td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Showing {filteredAssessments.length} of {assessments.length} assessments
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Assessment Types</CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                  <div className="h-full flex items-center justify-center">
                    <p className="text-gray-500">Assessment types chart would go here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Completion Rate</CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                  <div className="h-full flex items-center justify-center">
                    <p className="text-gray-500">Completion rate chart would go here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Average Scores</CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                  <div className="h-full flex items-center justify-center">
                    <p className="text-gray-500">Average scores chart would go here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

