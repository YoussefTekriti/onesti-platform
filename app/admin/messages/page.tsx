"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Search, 
  Filter, 
  Send, 
  CheckCircle, 
  Trash2, 
  Star, 
  StarOff, 
  Archive, 
  RefreshCw, 
  Edit, 
  Plus, 
  Save,
  Check 
} from "lucide-react"
import AdminHeader from "@/components/admin/admin-header"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState("compose")
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([])
  const [messageSubject, setMessageSubject] = useState("")
  const [messageContent, setMessageContent] = useState("")
  const [templateName, setTemplateName] = useState("")
  const [isSavingTemplate, setIsSavingTemplate] = useState(false)
  const [saveAsTemplate, setSaveAsTemplate] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [isEditTemplateDialogOpen, setIsEditTemplateDialogOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null)
  const [patientFilter, setPatientFilter] = useState("all")
  const { toast } = useToast()
  const templateContentRef = useRef<HTMLTextAreaElement>(null)
  const templateSubjectRef = useRef<HTMLInputElement>(null)

  // Mock patient data
  const patients = [
    { id: "1", name: "Sarah Johnson", email: "sarah.johnson@example.com", lastVisit: "2023-03-15", status: "active" },
    { id: "2", name: "Michael Williams", email: "michael.williams@example.com", lastVisit: "2023-03-10", status: "active" },
    { id: "3", name: "Jennifer Davis", email: "jennifer.davis@example.com", lastVisit: "2023-03-08", status: "inactive" },
    { id: "4", name: "Robert Miller", email: "robert.miller@example.com", lastVisit: "2023-03-12", status: "active" },
    { id: "5", name: "Jessica Wilson", email: "jessica.wilson@example.com", lastVisit: "2023-03-05", status: "recent" },
    { id: "6", name: "David Brown", email: "david.brown@example.com", lastVisit: "2023-03-01", status: "recent" },
    { id: "7", name: "Maria Martinez", email: "maria.martinez@example.com", lastVisit: "2023-02-28", status: "active" },
    { id: "8", name: "James Taylor", email: "james.taylor@example.com", lastVisit: "2023-02-25", status: "inactive" },
    { id: "9", name: "Lisa Anderson", email: "lisa.anderson@example.com", lastVisit: "2023-02-20", status: "recent" },
    { id: "10", name: "Thomas Jackson", email: "thomas.jackson@example.com", lastVisit: "2023-02-18", status: "active" },
  ]

  // Mock messages data
  const messages = [
    {
      id: "1",
      from: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      subject: "Question about assessment results",
      preview: "Hello, I had a question about my child's recent assessment results...",
      date: "2023-03-15",
      read: true,
      starred: false,
    },
    {
      id: "2",
      from: "Michael Williams",
      email: "michael.williams@example.com",
      subject: "Appointment rescheduling",
      preview: "I need to reschedule our appointment for next week due to a conflict...",
      date: "2023-03-14",
      read: false,
      starred: true,
    },
    {
      id: "3",
      from: "Jennifer Davis",
      email: "jennifer.davis@example.com",
      subject: "Package inquiry",
      preview: "I'm interested in the comprehensive therapy package and would like more information...",
      date: "2023-03-13",
      read: false,
      starred: false,
    },
    {
      id: "4",
      from: "Robert Miller",
      email: "robert.miller@example.com",
      subject: "Thank you for the session",
      preview: "I wanted to express my gratitude for the excellent therapy session yesterday...",
      date: "2023-03-12",
      read: true,
      starred: true,
    },
    {
      id: "5",
      from: "Jessica Wilson",
      email: "jessica.wilson@example.com",
      subject: "Insurance coverage question",
      preview: "Could you please provide information about which insurance plans you accept...",
      date: "2023-03-11",
      read: true,
      starred: false,
    },
  ]

  // Mock templates data
  const templates = [
    {
      id: "1",
      name: "Appointment Reminder",
      subject: "Reminder: Your Upcoming Appointment",
      content: "This is a friendly reminder about your upcoming appointment on [DATE] at [TIME]. Please arrive 10 minutes early to complete any necessary paperwork.",
      lastUsed: "2 days ago"
    },
    {
      id: "2",
      name: "Assessment Results",
      subject: "Your Assessment Results",
      content: "Thank you for completing the assessment. Please find attached the detailed results. We recommend scheduling a follow-up appointment to discuss these results in detail.",
      lastUsed: "1 week ago"
    },
    {
      id: "3",
      name: "Welcome Message",
      subject: "Welcome to Onesti",
      content: "Welcome to Onesti! We're excited to have you join our community. Here's some important information to help you get started with our services.",
      lastUsed: "3 days ago"
    },
    {
      id: "4",
      name: "Feedback Request",
      subject: "We'd Like Your Feedback",
      content: "We value your opinion! Please take a moment to complete our satisfaction survey. Your feedback helps us improve our services and better meet your needs.",
      lastUsed: "2 weeks ago"
    }
  ]

  // Filter patients based on search term and status filter
  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          patient.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = patientFilter === "all" || 
                          (patientFilter === "recent" && patient.status === "recent") ||
                          (patientFilter === "active" && patient.status === "active") ||
                          (patientFilter === "inactive" && patient.status === "inactive");
    
    return matchesSearch && matchesFilter;
  });

  const toggleRecipient = (id: string) => {
    if (selectedRecipients.includes(id)) {
      setSelectedRecipients(selectedRecipients.filter((r) => r !== id))
    } else {
      setSelectedRecipients([...selectedRecipients, id])
    }
  }

  const selectAllRecipients = () => {
    if (selectedRecipients.length === filteredPatients.length) {
      setSelectedRecipients([])
    } else {
      setSelectedRecipients(filteredPatients.map((p) => p.id))
    }
  }

  const handleSendMessage = () => {
    if (selectedRecipients.length === 0 || !messageSubject || !messageContent) {
      return;
    }

    // Save template if needed
    if (saveAsTemplate && templateName) {
      saveTemplate(templateName, messageSubject, messageContent);
    }

    // In a real app, this would send the message to an API
    toast({
      title: "Message Sent",
      description: `Message successfully sent to ${selectedRecipients.length} recipients`,
    });

    // Reset form
    setSelectedRecipients([])
    setMessageSubject("")
    setMessageContent("")
    setSaveAsTemplate(false)
    setTemplateName("")
  }

  // Save message as a template
  const saveTemplate = (name: string, subject: string, content: string) => {
    // In a real app, this would save to an API
    toast({
      title: "Template Saved",
      description: `"${name}" template has been saved for future use`,
    });
  }

  // Use an existing template
  const useTemplate = (template: any) => {
    setActiveTab("compose");
    setMessageSubject(template.subject);
    setMessageContent(template.content);
    
    toast({
      title: "Template Loaded",
      description: "Template has been loaded into the composer",
    });
  }

  // Edit a template
  const editTemplate = (template: any) => {
    setSelectedTemplate(template);
    setIsEditTemplateDialogOpen(true);
  }

  // Create a new template
  const createNewTemplate = () => {
    setSelectedTemplate({
      id: "",
      name: "",
      subject: "",
      content: ""
    });
    setIsEditTemplateDialogOpen(true);
  }

  // Save template edits
  const saveTemplateEdits = () => {
    if (!templateSubjectRef.current || !templateContentRef.current) return;
    
    const updatedTemplate = {
      ...selectedTemplate,
      subject: templateSubjectRef.current.value,
      content: templateContentRef.current.value
    };

    // In a real app, this would save to an API
    toast({
      title: selectedTemplate.id ? "Template Updated" : "Template Created",
      description: selectedTemplate.id 
        ? `"${selectedTemplate.name}" has been updated`
        : "New template has been created",
    });

    setIsEditTemplateDialogOpen(false);
  }

  return (
    <div className="flex-1">
      <AdminHeader title="Messages" description="Manage communication with patients" />

      <main className="p-6">
        <Tabs defaultValue="compose" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="compose">Compose</TabsTrigger>
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="sent">Sent</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="compose" className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Compose New Message</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-4">Select Recipients</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 w-full md:w-auto">
                        <div className="relative w-full md:w-80">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Search patients..." 
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
                        <Select value={patientFilter} onValueChange={setPatientFilter}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Patients</SelectItem>
                            <SelectItem value="recent">Recent Patients</SelectItem>
                            <SelectItem value="active">Active Patients</SelectItem>
                            <SelectItem value="inactive">Inactive Patients</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50 border-b">
                            <th className="py-3 px-4 text-left">
                              <div className="flex items-center">
                                <Checkbox
                                  checked={selectedRecipients.length === filteredPatients.length && filteredPatients.length > 0}
                                  onCheckedChange={selectAllRecipients}
                                  id="select-all"
                                />
                                <label htmlFor="select-all" className="ml-2 text-sm font-medium">
                                  Select All
                                </label>
                              </div>
                            </th>
                            <th className="py-3 px-4 text-left">Name</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Last Visit</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredPatients.map((patient) => (
                            <tr key={patient.id} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4">
                                <Checkbox
                                  checked={selectedRecipients.includes(patient.id)}
                                  onCheckedChange={() => toggleRecipient(patient.id)}
                                  id={`patient-${patient.id}`}
                                />
                              </td>
                              <td className="py-3 px-4">
                                <label htmlFor={`patient-${patient.id}`} className="cursor-pointer">
                                  {patient.name}
                                </label>
                              </td>
                              <td className="py-3 px-4">{patient.email}</td>
                              <td className="py-3 px-4">{patient.lastVisit}</td>
                            </tr>
                          ))}
                          {filteredPatients.length === 0 && (
                            <tr>
                              <td colSpan={4} className="py-4 text-center text-sm text-gray-500">
                                No patients found matching your search or filter criteria
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 text-sm text-gray-500">{selectedRecipients.length} recipients selected</div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Subject</label>
                      <Input
                        value={messageSubject}
                        onChange={(e) => setMessageSubject(e.target.value)}
                        placeholder="Enter message subject"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-medium">Message</label>
                        <Select onValueChange={(value) => {
                          const template = templates.find(t => t.id === value);
                          if (template) {
                            setMessageSubject(template.subject);
                            setMessageContent(template.content);
                          }
                        }}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Use template" />
                          </SelectTrigger>
                          <SelectContent>
                            {templates.map(template => (
                              <SelectItem key={template.id} value={template.id}>
                                {template.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Textarea
                        value={messageContent}
                        onChange={(e) => setMessageContent(e.target.value)}
                        placeholder="Type your message here..."
                        className="mt-1 min-h-[200px]"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          id="save-template" 
                          checked={saveAsTemplate}
                          onCheckedChange={(checked) => setSaveAsTemplate(!!checked)}
                        />
                        <label htmlFor="save-template" className="text-sm">
                          Save as template
                        </label>
                      </div>
                      
                      {saveAsTemplate && (
                        <div className="ml-6">
                          <Input
                            value={templateName}
                            onChange={(e) => setTemplateName(e.target.value)}
                            placeholder="Template name"
                            className="max-w-sm"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex justify-end">
                      <Button
                        onClick={handleSendMessage}
                        disabled={selectedRecipients.length === 0 || !messageSubject || !messageContent || (saveAsTemplate && !templateName)}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inbox" className="space-y-6">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative w-full md:w-80">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input placeholder="Search messages..." className="pl-10" />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => {
                      toast({
                        title: "Refreshed",
                        description: "Your inbox has been refreshed",
                      });
                    }}>
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => {
                      toast({
                        title: "Archived",
                        description: "Selected messages have been archived",
                      });
                    }}>
                      <Archive className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={() => {
                      toast({
                        title: "Deleted",
                        description: "Selected messages have been moved to trash",
                      });
                    }}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">
                  Inbox
                  <span className="ml-2 text-sm font-normal text-gray-500">(2 unread)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer ${!message.read ? "bg-blue-50" : ""}`}
                      onClick={() => {
                        toast({
                          title: "Message Opened",
                          description: `Viewing message from ${message.from}`,
                        });
                      }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${!message.read ? "bg-blue-500" : "bg-transparent"}`}
                          ></div>
                          <span className={`font-medium ${!message.read ? "font-semibold" : ""}`}>{message.from}</span>
                        </div>
                        <div className="ml-4">
                          <p className={`text-sm ${!message.read ? "font-semibold" : ""}`}>{message.subject}</p>
                          <p className="text-sm text-gray-500 truncate">{message.preview}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">{message.date}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => {
                          e.stopPropagation();
                          toast({
                            title: message.starred ? "Removed from Starred" : "Added to Starred",
                            description: message.starred 
                              ? "Message has been removed from starred items" 
                              : "Message has been added to starred items",
                          });
                        }}>
                          {message.starred ? (
                            <Star className="h-4 w-4 text-yellow-400" />
                          ) : (
                            <StarOff className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sent" className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Sent Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">All Patients</span>
                        <span className="text-xs text-gray-500">(10 recipients)</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm">Upcoming System Maintenance</p>
                        <p className="text-sm text-gray-500 truncate">
                          We will be performing system maintenance on Friday, March 18th from 10 PM to 2 AM...
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">2023-03-15</span>
                      <div className="flex items-center gap-1 text-green-500 text-xs">
                        <CheckCircle className="h-3 w-3" />
                        <span>Sent</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Recent Patients</span>
                        <span className="text-xs text-gray-500">(5 recipients)</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm">Feedback Request</p>
                        <p className="text-sm text-gray-500 truncate">
                          We value your opinion! Please take a moment to complete our satisfaction survey...
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">2023-03-10</span>
                      <div className="flex items-center gap-1 text-green-500 text-xs">
                        <CheckCircle className="h-3 w-3" />
                        <span>Sent</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Sarah Johnson</span>
                        <span className="text-xs text-gray-500">(1 recipient)</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm">Assessment Results</p>
                        <p className="text-sm text-gray-500 truncate">
                          Thank you for completing the assessment. Please find attached the detailed results...
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">2023-03-08</span>
                      <div className="flex items-center gap-1 text-green-500 text-xs">
                        <CheckCircle className="h-3 w-3" />
                        <span>Sent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Message Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {templates.map(template => (
                    <Card key={template.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">{template.name}</h3>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => editTemplate(template)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                          {template.content}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Last used: {template.lastUsed}</span>
                          <Button variant="outline" size="sm" onClick={() => useTemplate(template)}>
                            Use
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Card className="cursor-pointer hover:shadow-md transition-shadow border-dashed" onClick={createNewTemplate}>
                    <CardContent className="p-4 flex flex-col items-center justify-center h-full text-center">
                      <Plus className="h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm font-medium">Create New Template</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Template Edit Dialog */}
      <Dialog open={isEditTemplateDialogOpen} onOpenChange={setIsEditTemplateDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{selectedTemplate?.id ? "Edit Template" : "Create Template"}</DialogTitle>
            <DialogDescription>
              {selectedTemplate?.id 
                ? "Modify this message template for future use" 
                : "Create a new message template for future use"}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="template-name">Template Name</Label>
              <Input
                id="template-name"
                defaultValue={selectedTemplate?.name}
                placeholder="Enter a name for this template"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="template-subject">Subject Line</Label>
              <Input
                id="template-subject"
                defaultValue={selectedTemplate?.subject}
                placeholder="Enter subject line"
                ref={templateSubjectRef}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="template-content">Message Content</Label>
              <Textarea
                id="template-content"
                defaultValue={selectedTemplate?.content}
                placeholder="Type template content here..."
                className="min-h-[200px]"
                ref={templateContentRef}
              />
              <p className="text-xs text-gray-500">
                You can use placeholders like [NAME], [DATE], [TIME] which will be replaced when sending
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditTemplateDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveTemplateEdits}>
              <Save className="h-4 w-4 mr-2" />
              {selectedTemplate?.id ? "Update Template" : "Save Template"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

