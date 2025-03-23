"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Search, Filter, Download, Plus, Eye, Edit, Trash2, Check, AlertCircle } from "lucide-react"
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
import { useToast } from "@/components/ui/use-toast"

// Mock user data to link with assessments
const users = [
  { id: "USR001", name: "Sarah Johnson", email: "sarah.j@example.com", role: "Parent", children: ["Emma Johnson"] },
  { id: "USR002", name: "Michael Williams", email: "michael.w@example.com", role: "Parent", children: ["Noah Williams"] },
  { id: "USR003", name: "Jennifer Davis", email: "jennifer.d@example.com", role: "Parent", children: ["Olivia Davis"] },
  { id: "USR004", name: "Robert Miller", email: "robert.m@example.com", role: "Parent", children: ["Liam Miller"] },
  { id: "USR005", name: "Jessica Wilson", email: "jessica.w@example.com", role: "Parent", children: ["Ava Wilson"] },
  { id: "USR006", name: "David Brown", email: "david.b@example.com", role: "Parent", children: ["Lucas Brown"] },
  { id: "USR007", name: "Maria Martinez", email: "maria.m@example.com", role: "Parent", children: ["Sophia Martinez"] },
];

// Mock assessment types data
const assessmentTypes = [
  { id: "AST001", name: "Developmental", description: "Evaluates developmental milestones and progress" },
  { id: "AST002", name: "Speech", description: "Evaluates speech patterns and language development" },
  { id: "AST003", name: "Behavioral", description: "Evaluates behavior patterns and social interactions" },
  { id: "AST004", name: "Cognitive", description: "Evaluates cognitive abilities and learning skills" },
];

// Update the component to include the create assessment dialog
export default function AssessmentsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [selectedAssessment, setSelectedAssessment] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [selectedUserId, setSelectedUserId] = useState("")
  const [selectedChildName, setSelectedChildName] = useState("")
  const [availableChildren, setAvailableChildren] = useState<string[]>([])
  const { toast } = useToast()

  // Mock assessment data
  const assessments = [
    {
      id: "ASS-1001",
      childName: "Emma Johnson",
      parentName: "Sarah Johnson",
      parentId: "USR001",
      type: "Developmental",
      typeId: "AST001",
      status: "Completed",
      date: "2023-03-15",
      score: 85,
      notes: "Good progress in motor skills development. Follow-up recommended in 3 months.",
    },
    {
      id: "ASS-1002",
      childName: "Noah Williams",
      parentName: "Michael Williams",
      parentId: "USR002",
      type: "Speech",
      typeId: "AST002",
      status: "In Progress",
      date: "2023-03-18",
      score: null,
      notes: "Initial assessment started. Requires additional sessions.",
    },
    {
      id: "ASS-1003",
      childName: "Olivia Davis",
      parentName: "Jennifer Davis",
      parentId: "USR003",
      type: "Behavioral",
      typeId: "AST003",
      status: "Scheduled",
      date: "2023-03-22",
      score: null,
      notes: "First assessment scheduled with Dr. Parker.",
    },
    {
      id: "ASS-1004",
      childName: "Liam Miller",
      parentName: "Robert Miller",
      parentId: "USR004",
      type: "Developmental",
      typeId: "AST001",
      status: "Completed",
      date: "2023-03-10",
      score: 72,
      notes: "Some delays in fine motor skills. Recommended exercises provided.",
    },
    {
      id: "ASS-1005",
      childName: "Ava Wilson",
      parentName: "Jessica Wilson",
      parentId: "USR005",
      type: "Speech",
      typeId: "AST002",
      status: "Completed",
      date: "2023-03-08",
      score: 91,
      notes: "Excellent progress in speech therapy. No significant concerns.",
    },
    {
      id: "ASS-1006",
      childName: "Lucas Brown",
      parentName: "David Brown",
      parentId: "USR006",
      type: "Behavioral",
      typeId: "AST003",
      status: "In Progress",
      date: "2023-03-17",
      score: null,
      notes: "Showing improvements in social interactions. Continuing assessment.",
    },
    {
      id: "ASS-1007",
      childName: "Sophia Martinez",
      parentName: "Maria Martinez",
      parentId: "USR007",
      type: "Developmental",
      typeId: "AST001",
      status: "Scheduled",
      date: "2023-03-25",
      score: null,
      notes: "Initial developmental assessment scheduled.",
    },
  ]

  // Update available children when parent changes
  useEffect(() => {
    if (selectedUserId) {
      const user = users.find(user => user.id === selectedUserId);
      setAvailableChildren(user?.children || []);
      if (user?.children?.length === 1) {
        setSelectedChildName(user.children[0]);
      } else {
        setSelectedChildName("");
      }
    } else {
      setAvailableChildren([]);
      setSelectedChildName("");
    }
  }, [selectedUserId]);

  // Filter assessments based on active tab, search term, and type filter
  const filteredAssessments = assessments.filter((assessment) => {
    // Filter by tab (status)
    const matchesTab = 
      activeTab === "all" || 
      (activeTab === "completed" && assessment.status === "Completed") ||
      (activeTab === "inProgress" && assessment.status === "In Progress") ||
      (activeTab === "scheduled" && assessment.status === "Scheduled");
    
    // Filter by search term
    const matchesSearch = 
      assessment.childName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by assessment type
    const matchesType = typeFilter === "all" || assessment.typeId === typeFilter;
    
    return matchesTab && matchesSearch && matchesType;
  });

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

  // Export assessments to CSV
  const exportToCSV = () => {
    // Column headers
    const headers = ["ID", "Child Name", "Parent Name", "Type", "Status", "Date", "Score", "Notes"];
    
    // Format data rows
    const rows = filteredAssessments.map(assessment => [
      assessment.id,
      assessment.childName,
      assessment.parentName,
      assessment.type,
      assessment.status,
      assessment.date,
      assessment.score !== null ? assessment.score : "",
      assessment.notes || ""
    ]);
    
    // Combine headers and rows
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `assessments-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export Successful",
      description: `${filteredAssessments.length} assessments exported to CSV`,
    });
  };

  // View assessment details
  const viewAssessment = (assessment: any) => {
    setSelectedAssessment(assessment);
    setIsViewDialogOpen(true);
  };

  // Handle form submission
  const handleCreateAssessment = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally save the assessment data
    toast({
      title: "Assessment Created",
      description: "The new assessment has been created successfully.",
      icon: <Check className="h-4 w-4" />
    });
    setIsCreateDialogOpen(false)
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
                  <Input 
                    placeholder="Search assessments..." 
                    className="pl-10" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Assessment Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {assessmentTypes.map(type => (
                      <SelectItem key={type.id} value={type.id}>{type.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button variant="outline" onClick={exportToCSV}>
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
                        <div className="space-y-2">
                          <Label htmlFor="parentUser">Parent/Guardian</Label>
                          <Select value={selectedUserId} onValueChange={setSelectedUserId} required>
                            <SelectTrigger id="parentUser">
                              <SelectValue placeholder="Select parent user" />
                            </SelectTrigger>
                            <SelectContent>
                              {users.filter(user => user.role === "Parent").map(user => (
                                <SelectItem key={user.id} value={user.id}>
                                  {user.name} ({user.email})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="childName">Child</Label>
                          <Select 
                            value={selectedChildName} 
                            onValueChange={setSelectedChildName} 
                            disabled={availableChildren.length === 0}
                            required
                          >
                            <SelectTrigger id="childName">
                              <SelectValue placeholder={availableChildren.length === 0 ? "Select a parent first" : "Select child"} />
                            </SelectTrigger>
                            <SelectContent>
                              {availableChildren.map(childName => (
                                <SelectItem key={childName} value={childName}>
                                  {childName}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {availableChildren.length === 0 && selectedUserId && (
                            <p className="text-xs text-amber-600 flex items-center mt-1">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              No children found for this parent
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="assessmentType">Assessment Type</Label>
                            <Select defaultValue={assessmentTypes[0].id}>
                              <SelectTrigger id="assessmentType">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                {assessmentTypes.map(type => (
                                  <SelectItem key={type.id} value={type.id}>
                                    {type.name}
                                  </SelectItem>
                                ))}
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
                          <td className="py-3 px-4">
                            <Button variant="link" className="p-0 h-auto" onClick={() => window.location.href = `/admin/users/${assessment.parentId}`}>
                              {assessment.parentName}
                            </Button>
                          </td>
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
                              <Button variant="ghost" size="icon" onClick={() => viewAssessment(assessment)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => window.location.href = `/admin/assessments/${assessment.id}/edit`}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => {
                                toast({
                                  title: "Assessment Deleted",
                                  description: "The assessment has been deleted",
                                })
                              }}>
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

      {/* View Assessment Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedAssessment && (
            <>
              <DialogHeader>
                <DialogTitle>Assessment Details</DialogTitle>
                <DialogDescription>
                  Viewing assessment #{selectedAssessment.id}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Child</h3>
                    <p className="text-base">{selectedAssessment.childName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Parent</h3>
                    <p className="text-base">{selectedAssessment.parentName}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Assessment Type</h3>
                    <p className="text-base">{selectedAssessment.type}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Date</h3>
                    <p className="text-base">{selectedAssessment.date}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Status</h3>
                    <p className="text-base">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedAssessment.status)}`}>
                        {selectedAssessment.status}
                      </span>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Score</h3>
                    <p className="text-base">{selectedAssessment.score !== null ? selectedAssessment.score : "Not scored yet"}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Notes</h3>
                  <p className="text-base">{selectedAssessment.notes || "No notes available"}</p>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => window.location.href = `/admin/assessments/${selectedAssessment.id}/edit`}>
                  Edit Assessment
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

