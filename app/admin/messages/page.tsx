"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter, Send, CheckCircle, Trash2, Star, StarOff, Archive, RefreshCw, Edit, Plus } from "lucide-react"
import AdminHeader from "@/components/admin/admin-header"

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState("compose")
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([])
  const [messageSubject, setMessageSubject] = useState("")
  const [messageContent, setMessageContent] = useState("")

  // Mock patient data
  const patients = [
    { id: "1", name: "Sarah Johnson", email: "sarah.johnson@example.com", lastVisit: "2023-03-15" },
    { id: "2", name: "Michael Williams", email: "michael.williams@example.com", lastVisit: "2023-03-10" },
    { id: "3", name: "Jennifer Davis", email: "jennifer.davis@example.com", lastVisit: "2023-03-08" },
    { id: "4", name: "Robert Miller", email: "robert.miller@example.com", lastVisit: "2023-03-12" },
    { id: "5", name: "Jessica Wilson", email: "jessica.wilson@example.com", lastVisit: "2023-03-05" },
    { id: "6", name: "David Brown", email: "david.brown@example.com", lastVisit: "2023-03-01" },
    { id: "7", name: "Maria Martinez", email: "maria.martinez@example.com", lastVisit: "2023-02-28" },
    { id: "8", name: "James Taylor", email: "james.taylor@example.com", lastVisit: "2023-02-25" },
    { id: "9", name: "Lisa Anderson", email: "lisa.anderson@example.com", lastVisit: "2023-02-20" },
    { id: "10", name: "Thomas Jackson", email: "thomas.jackson@example.com", lastVisit: "2023-02-18" },
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

  const toggleRecipient = (id: string) => {
    if (selectedRecipients.includes(id)) {
      setSelectedRecipients(selectedRecipients.filter((r) => r !== id))
    } else {
      setSelectedRecipients([...selectedRecipients, id])
    }
  }

  const selectAllRecipients = () => {
    if (selectedRecipients.length === patients.length) {
      setSelectedRecipients([])
    } else {
      setSelectedRecipients(patients.map((p) => p.id))
    }
  }

  const handleSendMessage = () => {
    // In a real app, this would send the message
    alert(`Message sent to ${selectedRecipients.length} recipients!`)
    setSelectedRecipients([])
    setMessageSubject("")
    setMessageContent("")
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
                          <Input placeholder="Search patients..." className="pl-10" />
                        </div>
                        <Button variant="outline" size="icon">
                          <Filter className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-2">
                        <Select defaultValue="all">
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
                                  checked={selectedRecipients.length === patients.length}
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
                          {patients.map((patient) => (
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
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        value={messageContent}
                        onChange={(e) => setMessageContent(e.target.value)}
                        placeholder="Type your message here..."
                        className="mt-1 min-h-[200px]"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <Checkbox id="save-template" />
                      <label htmlFor="save-template" className="text-sm">
                        Save as template
                      </label>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        onClick={handleSendMessage}
                        disabled={selectedRecipients.length === 0 || !messageSubject || !messageContent}
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
                    <Button variant="outline" size="icon">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Archive className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
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
                        <Button variant="ghost" size="icon" className="h-8 w-8">
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
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Appointment Reminder</h3>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                        This is a friendly reminder about your upcoming appointment on [DATE] at [TIME]. Please arrive
                        10 minutes early to complete any necessary paperwork.
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Last used: 2 days ago</span>
                        <Button variant="outline" size="sm">
                          Use
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Assessment Results</h3>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                        Thank you for completing the assessment. Please find attached the detailed results. We recommend
                        scheduling a follow-up appointment to discuss these results in detail.
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Last used: 1 week ago</span>
                        <Button variant="outline" size="sm">
                          Use
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Welcome Message</h3>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                        Welcome to Onesti! We're excited to have you join our community. Here's some important
                        information to help you get started with our services.
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Last used: 3 days ago</span>
                        <Button variant="outline" size="sm">
                          Use
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">Feedback Request</h3>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                        We value your opinion! Please take a moment to complete our satisfaction survey. Your feedback
                        helps us improve our services and better meet your needs.
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Last used: 2 weeks ago</span>
                        <Button variant="outline" size="sm">
                          Use
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-md transition-shadow border-dashed">
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
    </div>
  )
}

