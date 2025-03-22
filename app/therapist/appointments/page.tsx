"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, User, Video, MapPin, CheckCircle, XCircle, CalendarIcon, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data
const upcomingAppointments = [
  {
    id: 1,
    clientName: "Ahmed Al-Farsi",
    clientAge: 5,
    date: "Mar 23, 2025",
    time: "2:00 PM - 3:00 PM",
    type: "Speech Therapy",
    format: "In-person",
    location: "Dubai Healthcare City, Building 4",
    status: "Confirmed",
  },
  {
    id: 2,
    clientName: "Fatima Khalid",
    clientAge: 7,
    date: "Mar 24, 2025",
    time: "10:00 AM - 11:00 AM",
    type: "Initial Assessment",
    format: "Virtual",
    location: "Zoom Meeting",
    status: "Confirmed",
  },
  {
    id: 3,
    clientName: "Mohammed Rahman",
    clientAge: 4,
    date: "Mar 24, 2025",
    time: "4:30 PM - 5:30 PM",
    type: "Speech Therapy",
    format: "In-person",
    location: "Dubai Healthcare City, Building 4",
    status: "Pending",
  },
]

const pastAppointments = [
  {
    id: 4,
    clientName: "Ahmed Al-Farsi",
    clientAge: 5,
    date: "Mar 16, 2025",
    time: "2:00 PM - 3:00 PM",
    type: "Speech Therapy",
    format: "In-person",
    location: "Dubai Healthcare City, Building 4",
    status: "Completed",
    notes: true,
  },
  {
    id: 5,
    clientName: "Layla Mahmoud",
    clientAge: 6,
    date: "Mar 15, 2025",
    time: "11:00 AM - 12:00 PM",
    type: "Speech Therapy",
    format: "Virtual",
    location: "Zoom Meeting",
    status: "Completed",
    notes: true,
  },
  {
    id: 6,
    clientName: "Fatima Khalid",
    clientAge: 7,
    date: "Mar 10, 2025",
    time: "3:30 PM - 4:30 PM",
    type: "Initial Assessment",
    format: "In-person",
    location: "Dubai Healthcare City, Building 4",
    status: "Completed",
    notes: false,
  },
]

export default function TherapistAppointments() {
  const [activeTab, setActiveTab] = useState("upcoming")

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
          <h1 className="text-2xl font-bold tracking-tight">Appointments</h1>
          <p className="text-muted-foreground">Manage your upcoming and past appointments</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Appointment Types</SelectItem>
              <SelectItem value="speech">Speech Therapy</SelectItem>
              <SelectItem value="assessment">Initial Assessment</SelectItem>
              <SelectItem value="followup">Follow-up Session</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all-format">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-format">All Formats</SelectItem>
              <SelectItem value="in-person">In-person</SelectItem>
              <SelectItem value="virtual">Virtual</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="bg-onesti-purple hover:bg-purple-800 text-white">
          <CalendarIcon className="mr-2 h-4 w-4" />
          View Calendar
        </Button>
      </div>

      <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((appointment) => (
              <Card key={appointment.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                        <User className="h-6 w-6 text-onesti-purple" />
                      </div>
                      <div>
                        <h3 className="font-medium">{appointment.clientName}</h3>
                        <p className="text-sm text-gray-500">Age: {appointment.clientAge}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 md:gap-6">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                        <span className="text-sm">{appointment.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-gray-500" />
                        <span className="text-sm">{appointment.time}</span>
                      </div>
                      <div className="flex items-center">
                        {appointment.format === "Virtual" ? (
                          <Video className="mr-2 h-4 w-4 text-gray-500" />
                        ) : (
                          <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                        )}
                        <span className="text-sm">{appointment.format}</span>
                      </div>
                      <Badge variant={appointment.status === "Confirmed" ? "success" : "warning"}>
                        {appointment.status === "Confirmed" ? (
                          <CheckCircle className="mr-1 h-3 w-3" />
                        ) : (
                          <XCircle className="mr-1 h-3 w-3" />
                        )}
                        {appointment.status}
                      </Badge>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {appointment.status === "Confirmed" && (
                        <Button size="sm" className="bg-onesti-purple hover:bg-purple-800 text-white">
                          Start Session
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">Type:</span>
                        <span className="text-sm">{appointment.type}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">Location:</span>
                        <span className="text-sm">{appointment.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-gray-100 p-3 mb-2">
                  <Calendar className="h-6 w-6 text-gray-500" />
                </div>
                <h3 className="font-medium">No Upcoming Appointments</h3>
                <p className="text-sm text-gray-500 mt-1">You don't have any upcoming appointments scheduled.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          {pastAppointments.length > 0 ? (
            pastAppointments.map((appointment) => (
              <Card key={appointment.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                        <User className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">{appointment.clientName}</h3>
                        <p className="text-sm text-gray-500">Age: {appointment.clientAge}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 md:gap-6">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                        <span className="text-sm">{appointment.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-gray-500" />
                        <span className="text-sm">{appointment.time}</span>
                      </div>
                      <div className="flex items-center">
                        {appointment.format === "Virtual" ? (
                          <Video className="mr-2 h-4 w-4 text-gray-500" />
                        ) : (
                          <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                        )}
                        <span className="text-sm">{appointment.format}</span>
                      </div>
                      <Badge variant="outline">{appointment.status}</Badge>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {!appointment.notes && (
                        <Button size="sm" className="bg-onesti-purple hover:bg-purple-800 text-white">
                          Add Notes
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">Type:</span>
                        <span className="text-sm">{appointment.type}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">Location:</span>
                        <span className="text-sm">{appointment.location}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">Session Notes:</span>
                        <span className="text-sm">{appointment.notes ? "Completed" : "Pending"}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-gray-100 p-3 mb-2">
                  <Calendar className="h-6 w-6 text-gray-500" />
                </div>
                <h3 className="font-medium">No Past Appointments</h3>
                <p className="text-sm text-gray-500 mt-1">You don't have any past appointments.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

