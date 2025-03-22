"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, FileText, Calendar, Plus, Edit, Eye } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data
const sessionNotes = [
  {
    id: 1,
    clientName: "Ahmed Al-Farsi",
    clientAge: 5,
    date: "Mar 20, 2025",
    type: "Speech Therapy",
    status: "Completed",
    goals: ["Improve articulation of /s/ sound", "Increase vocabulary"],
    progress: "Good progress on articulation. Vocabulary expanding steadily.",
    nextSteps: "Continue with current exercises. Introduce new vocabulary themes.",
    lastEdited: "Mar 20, 2025",
  },
  {
    id: 2,
    clientName: "Fatima Khalid",
    clientAge: 7,
    date: "Mar 18, 2025",
    type: "Speech Therapy",
    status: "Completed",
    goals: ["Improve reading fluency", "Work on comprehension"],
    progress: "Excellent progress on reading fluency. Comprehension improving.",
    nextSteps: "Increase complexity of reading materials. Continue comprehension exercises.",
    lastEdited: "Mar 18, 2025",
  },
  {
    id: 3,
    clientName: "Mohammed Rahman",
    clientAge: 4,
    date: "Mar 15, 2025",
    type: "Initial Assessment",
    status: "Completed",
    goals: ["Assess speech and language skills", "Identify areas of concern"],
    progress: "Initial assessment completed. Identified speech delay and social communication challenges.",
    nextSteps: "Develop treatment plan focusing on expressive language and social communication.",
    lastEdited: "Mar 15, 2025",
  },
  {
    id: 4,
    clientName: "Layla Mahmoud",
    clientAge: 6,
    date: "Mar 10, 2025",
    type: "Speech Therapy",
    status: "Completed",
    goals: ["Reduce stuttering frequency", "Improve fluency"],
    progress: "Moderate progress on fluency. Stuttering frequency reduced by approximately 30%.",
    nextSteps: "Continue with fluency techniques. Introduce more challenging speaking scenarios.",
    lastEdited: "Mar 10, 2025",
  },
  {
    id: 5,
    clientName: "Ahmed Al-Farsi",
    clientAge: 5,
    date: "Mar 23, 2025",
    type: "Speech Therapy",
    status: "Pending",
    goals: [],
    progress: "",
    nextSteps: "",
    lastEdited: "",
  },
]

export default function TherapistNotes() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Filter notes based on search term and active tab
  const filteredNotes = sessionNotes.filter((note) => {
    const matchesSearch =
      note.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.type.toLowerCase().includes(searchTerm.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "completed") return matchesSearch && note.status === "Completed"
    if (activeTab === "pending") return matchesSearch && note.status === "Pending"

    return matchesSearch
  })

  return (
    <div className="space-y-6 pb-8">
      <div className="flex items-center">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/therapist">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Session Notes</h1>
          <p className="text-muted-foreground">Manage and review your session notes</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search notes..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <Select defaultValue="all-clients">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by client" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-clients">All Clients</SelectItem>
              <SelectItem value="ahmed">Ahmed Al-Farsi</SelectItem>
              <SelectItem value="fatima">Fatima Khalid</SelectItem>
              <SelectItem value="mohammed">Mohammed Rahman</SelectItem>
              <SelectItem value="layla">Layla Mahmoud</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-onesti-purple hover:bg-purple-800 text-white">
            <Plus className="mr-2 h-4 w-4" />
            New Note
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Notes</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4 mt-4">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <Card key={note.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                        <FileText className="h-5 w-5 text-onesti-purple" />
                      </div>
                      <div>
                        <h3 className="font-medium">{note.clientName}</h3>
                        <p className="text-sm text-gray-500">Age: {note.clientAge}</p>
                        <div className="flex items-center mt-1">
                          <Calendar className="mr-1 h-3 w-3 text-gray-500" />
                          <span className="text-xs text-gray-500">{note.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-4">
                      <Badge variant="outline">{note.type}</Badge>
                      <Badge variant={note.status === "Completed" ? "success" : "warning"}>{note.status}</Badge>
                    </div>

                    <div className="flex space-x-2">
                      {note.status === "Completed" ? (
                        <>
                          <Button variant="outline" size="sm">
                            <Eye className="mr-1 h-3 w-3" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="mr-1 h-3 w-3" />
                            Edit
                          </Button>
                        </>
                      ) : (
                        <Button size="sm" className="bg-onesti-purple hover:bg-purple-800 text-white">
                          <Edit className="mr-1 h-3 w-3" />
                          Add Notes
                        </Button>
                      )}
                    </div>
                  </div>

                  {note.status === "Completed" && (
                    <div className="mt-4 pt-4 border-t">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Goals</h4>
                          <ul className="list-disc list-inside text-sm space-y-1">
                            {note.goals.map((goal, index) => (
                              <li key={index}>{goal}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Progress</h4>
                          <p className="text-sm">{note.progress}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Next Steps</h4>
                          <p className="text-sm">{note.nextSteps}</p>
                        </div>
                      </div>
                      <div className="mt-4 text-xs text-gray-500">Last edited: {note.lastEdited}</div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-gray-100 p-3 mb-2">
                  <FileText className="h-6 w-6 text-gray-500" />
                </div>
                <h3 className="font-medium">No Notes Found</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {searchTerm ? "No notes match your search criteria." : "You don't have any notes in this category."}
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

