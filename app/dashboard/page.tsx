"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  User,
  Package,
  CalendarDays,
  ArrowRight,
  CheckCircle,
  FileText,
  Heart,
  MessageCircle,
  Users,
  Settings,
  LogOut,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Sample data for purchased packages
const purchasedPackages = [
  {
    id: 1,
    name: "Speech Therapy Package",
    sessions: {
      total: 12,
      used: 5,
      remaining: 7,
    },
    validUntil: "June 30, 2025",
    status: "Active",
  },
  {
    id: 2,
    name: "Occupational Therapy Assessment",
    sessions: {
      total: 1,
      used: 0,
      remaining: 1,
    },
    validUntil: "April 15, 2025",
    status: "Active",
  },
]

// Sample data for upcoming appointments
const upcomingAppointments = [
  {
    id: 1,
    therapistName: "Dr. Sarah Johnson",
    specialty: "Speech Therapist",
    date: "Mar 25, 2025",
    time: "2:00 PM - 3:00 PM",
    child: "Emma",
    format: "In-person",
    location: "Dubai Healthcare City, Building 4",
  },
  {
    id: 2,
    therapistName: "Dr. Ahmed Hassan",
    specialty: "Occupational Therapist",
    date: "Apr 2, 2025",
    time: "10:00 AM - 11:00 AM",
    child: "Emma",
    format: "Virtual",
    location: "Zoom Meeting",
  },
]

// Sample data for children
const children = [
  {
    id: 1,
    name: "Emma",
    age: "5 years, 7 months",
    patientId: "PT254655",
    active: true,
    gender: "Female",
    image: "/placeholder.svg?height=120&width=120",
    nextAssessment: "May 20, 2025",
    assessments: [],
    healthRecords: {
      lastVisit: "10 Feb 2025",
    },
  },
  {
    id: 2,
    name: "Alex",
    age: "3 years, 2 months",
    patientId: "PT254656",
    active: false,
    gender: "Male",
    image: "/placeholder.svg?height=120&width=120",
    nextAssessment: "April 15, 2025",
    assessments: [],
    healthRecords: {
      lastVisit: "25 Mar 2025",
    },
  },
]

export default function DashboardPage() {
  const [activeChildIndex, setActiveChildIndex] = useState(0)
  const [activeSection, setActiveSection] = useState("dashboard")
  const activeChild = children[activeChildIndex]

  const upcomingSessions = [
    {
      id: 1,
      specialist: "Dr. Sarah Johnson",
      specialty: "Speech-Language Pathologist",
      date: "March 21, 2025",
      time: "10:30 PM",
      child: "Alex",
    },
    {
      id: 2,
      specialist: "Dr. Michael Chen",
      specialty: "Behavioral Therapist",
      date: "March 23, 2025",
      time: "2:00 PM",
      child: "Emma",
    },
  ]

  // Parent profile data
  const parentProfile = {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Anytown, USA",
    profileImage: "/placeholder.svg?height=120&width=120",
  }

  // Render the appropriate content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="assessments">Assessments</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* Purchased Packages */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Package className="mr-2 h-5 w-5" />
                    Your Packages
                  </CardTitle>
                  <CardDescription>View and manage your purchased therapy packages</CardDescription>
                </CardHeader>
                <CardContent>
                  {purchasedPackages.length > 0 ? (
                    <div className="space-y-4">
                      {purchasedPackages.map((pkg) => (
                        <div key={pkg.id} className="border rounded-lg p-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                              <h3 className="font-medium">{pkg.name}</h3>
                              <Badge className="mt-1" variant="outline">
                                {pkg.status}
                              </Badge>
                            </div>

                            <div className="flex flex-wrap gap-4">
                              <div className="text-center">
                                <p className="text-sm text-gray-500">Total Sessions</p>
                                <p className="font-bold">{pkg.sessions.total}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-sm text-gray-500">Used</p>
                                <p className="font-bold">{pkg.sessions.used}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-sm text-gray-500">Remaining</p>
                                <p className="font-bold text-green-600">{pkg.sessions.remaining}</p>
                              </div>
                            </div>

                            <div>
                              <p className="text-sm text-gray-500">Valid Until</p>
                              <p>{pkg.validUntil}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="flex justify-end mt-4">
                        <Button variant="outline" asChild>
                          <Link href="/packages">
                            View All Packages
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium">No Packages Purchased</h3>
                      <p className="text-gray-500 mb-4">You haven't purchased any therapy packages yet</p>
                      <Button asChild>
                        <Link href="/packages">Browse Packages</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Book Appointment */}
              <Card className="bg-primary text-white">
                <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                  <div className="md:flex-1">
                    <h3 className="text-xl font-bold mb-2">Book a new Appointment</h3>
                    <p className="mb-4">Schedule your next consultation or therapy session</p>
                    <Button variant="secondary" asChild>
                      <Link href="/consultation">Book Now</Link>
                    </Button>
                  </div>
                  <div className="flex-shrink-0 bg-white rounded-full p-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Appointments */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <CalendarDays className="mr-2 h-5 w-5" />
                    Upcoming Appointments
                  </CardTitle>
                  <CardDescription>Your scheduled therapy sessions and consultations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex overflow-x-auto gap-2 pb-4">
                    {[19, 20, 21, 22, 23].map((day, index) => (
                      <div
                        key={day}
                        className={`flex-shrink-0 w-16 h-16 flex flex-col items-center justify-center rounded-lg border ${day === 21 ? "bg-primary text-white" : "hover:bg-gray-50"}`}
                      >
                        <div className="text-lg font-bold">{day}</div>
                        <div className="text-xs">{["Mon", "Tue", "Wed", "Thu", "Fri"][index]}</div>
                      </div>
                    ))}
                  </div>

                  {upcomingSessions.length > 0 ? (
                    <div className="space-y-4 mt-4">
                      {upcomingSessions
                        .filter((session) => session.child === activeChild.name)
                        .map((session) => (
                          <div key={session.id} className="border rounded-lg p-4">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/placeholder.svg?height=60&width=60"
                                alt={session.specialist}
                                width={60}
                                height={60}
                                className="rounded-full"
                              />
                              <div>
                                <h3 className="font-bold">{session.specialist}</h3>
                                <p className="text-sm text-gray-500">{session.specialty}</p>
                              </div>
                              <div className="ml-auto">
                                <Button size="icon" variant="outline">
                                  <Calendar className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>

                            <div className="mt-4 flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-2" />
                              {session.date} - {session.time}
                            </div>

                            <div className="mt-4 flex gap-2">
                              <Button variant="outline" className="flex-1">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                Chat Now
                              </Button>
                              <Button className="flex-1">Attend</Button>
                            </div>
                          </div>
                        ))}

                      {upcomingSessions.filter((session) => session.child === activeChild.name).length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                          No upcoming appointments for {activeChild.name}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">No upcoming appointments</div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assessments" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Assessment History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">
                    <p>No assessments completed yet</p>
                    <Button className="mt-4" asChild>
                      <Link href="/assessments">Take an Assessment</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appointments" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingSessions.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingSessions.map((session) => (
                        <div key={session.id} className="border rounded-lg p-4">
                          <div className="flex items-center gap-4">
                            <Image
                              src="/placeholder.svg?height=60&width=60"
                              alt={session.specialist}
                              width={60}
                              height={60}
                              className="rounded-full"
                            />
                            <div>
                              <h3 className="font-bold">{session.specialist}</h3>
                              <p className="text-sm text-gray-500">{session.specialty}</p>
                              <p className="text-xs text-primary mt-1">For: {session.child}</p>
                            </div>
                            <div className="ml-auto">
                              <Button size="icon" variant="outline">
                                <Calendar className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="mt-4 flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-2" />
                            {session.date} - {session.time}
                          </div>

                          <div className="mt-4 flex gap-2">
                            <Button variant="outline" className="flex-1">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Chat Now
                            </Button>
                            <Button className="flex-1">Attend</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">No upcoming appointments</div>
                  )}

                  <div className="mt-6 flex justify-center">
                    <Button asChild>
                      <Link href="/consultation">Book New Appointment</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Appointment History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">No past appointments found</div>

                  <div className="mt-4 text-sm text-gray-500 text-center">
                    Your appointment history will appear here after your first session
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )

      case "appointments":
        return (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Manage Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Upcoming Appointments</h3>
                    <Button asChild>
                      <Link href="/consultation">Book New Appointment</Link>
                    </Button>
                  </div>

                  {upcomingSessions.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingSessions.map((session) => (
                        <div key={session.id} className="border rounded-lg p-4">
                          <div className="flex items-center gap-4">
                            <Image
                              src="/placeholder.svg?height=60&width=60"
                              alt={session.specialist}
                              width={60}
                              height={60}
                              className="rounded-full"
                            />
                            <div>
                              <h3 className="font-bold">{session.specialist}</h3>
                              <p className="text-sm text-gray-500">{session.specialty}</p>
                              <p className="text-xs text-primary mt-1">For: {session.child}</p>
                            </div>
                            <div className="ml-auto flex gap-2">
                              <Button size="sm" variant="outline">
                                Reschedule
                              </Button>
                              <Button size="sm" variant="destructive">
                                Cancel
                              </Button>
                            </div>
                          </div>

                          <div className="mt-4 flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-2" />
                            {session.date} - {session.time}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">No upcoming appointments</div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Past Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">No past appointments found</div>
              </CardContent>
            </Card>
          </div>
        )

      case "dependants":
        return (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Manage Family Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Children</h3>
                    <Button>Add Child</Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {children.map((child) => (
                      <div key={child.id} className="border rounded-lg p-4">
                        <div className="flex items-center gap-4">
                          <Image
                            src={child.image || "/placeholder.svg"}
                            alt={child.name}
                            width={60}
                            height={60}
                            className="rounded-full"
                          />
                          <div>
                            <h3 className="font-bold">{child.name}</h3>
                            <p className="text-sm text-gray-500">{child.age}</p>
                            <p className="text-xs text-gray-500">ID: {child.patientId}</p>
                          </div>
                          <div className="ml-auto">
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-500">Gender:</span> {child.gender}
                          </div>
                          <div>
                            <span className="text-gray-500">Next Assessment:</span> {child.nextAssessment}
                          </div>
                          <div>
                            <span className="text-gray-500">Assessments:</span> {child.assessments?.length || 0}
                          </div>
                          <div>
                            <span className="text-gray-500">Last Visit:</span> {child.healthRecords?.lastVisit || "N/A"}
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setActiveChildIndex(children.indexOf(child))}
                          >
                            View Dashboard
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Family Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium">Adults</h3>
                  <Button>Add Family Member</Button>
                </div>

                <div className="text-center py-8 text-gray-500">No other family members added yet</div>
              </CardContent>
            </Card>
          </div>
        )

      case "medical-records":
        return (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Medical Records</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Documents</h3>
                    <Button>Upload Document</Button>
                  </div>

                  <div className="text-center py-8 text-gray-500">No medical records uploaded yet</div>

                  <div className="bg-amber-50 p-4 rounded-lg text-amber-800">
                    <p className="text-sm">
                      You can upload medical records, reports, and other documents to keep track of your child's health
                      history. All documents are securely stored and only accessible to you and your healthcare
                      providers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Select Child</h3>
                  </div>

                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {children.map((child) => (
                      <button
                        key={child.id}
                        className={`flex items-center gap-2 p-2 rounded-md border ${
                          activeChildIndex === children.indexOf(child)
                            ? "border-primary bg-primary/10"
                            : "border-gray-200"
                        }`}
                        onClick={() => setActiveChildIndex(children.indexOf(child))}
                      >
                        <Image
                          src={child.image || "/placeholder.svg"}
                          alt={child.name}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span>{child.name}</span>
                      </button>
                    ))}
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold text-lg mb-4">Health Timeline for {activeChild.name}</h3>

                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                            <Heart className="h-4 w-4" />
                          </div>
                          <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{activeChild.healthRecords?.lastVisit || "N/A"}</div>
                          <div className="font-medium">Regular Checkup</div>
                          <div className="text-sm mt-1">Overall health assessment completed</div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                            <FileText className="h-4 w-4" />
                          </div>
                          <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">March 1, 2025</div>
                          <div className="font-medium">Assessment</div>
                          <div className="text-sm mt-1">Initial evaluation completed</div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                            <Calendar className="h-4 w-4" />
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Initial Registration</div>
                          <div className="font-medium">Joined Onesti Platform</div>
                          <div className="text-sm mt-1">Profile created</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "profile":
        return (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <Image
                        src={parentProfile.profileImage || "/placeholder.svg"}
                        alt={parentProfile.name}
                        width={120}
                        height={120}
                        className="rounded-full"
                      />
                      <button className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full">
                        <Settings className="h-4 w-4" />
                      </button>
                    </div>
                    <h2 className="mt-4 font-bold text-xl">{parentProfile.name}</h2>
                    <p className="text-gray-500">Parent Account</p>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Full Name</label>
                        <input
                          type="text"
                          value={parentProfile.name}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Email</label>
                        <input
                          type="email"
                          value={parentProfile.email}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Phone</label>
                        <input
                          type="tel"
                          value={parentProfile.phone}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Address</label>
                        <input
                          type="text"
                          value={parentProfile.address}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-500">Password</label>
                      <input
                        type="password"
                        value="••••••••"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                      <Button variant="link" className="mt-1 h-auto p-0 text-sm">
                        Change Password
                      </Button>
                    </div>

                    <div className="flex justify-end">
                      <Button>Save Changes</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-gray-500">Receive email updates about appointments and assessments</p>
                    </div>
                    <div className="h-6 w-11 bg-primary rounded-full relative">
                      <div className="absolute right-1 top-1 bg-white h-4 w-4 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">SMS Notifications</h3>
                      <p className="text-sm text-gray-500">Receive text message reminders for upcoming appointments</p>
                    </div>
                    <div className="h-6 w-11 bg-primary rounded-full relative">
                      <div className="absolute right-1 top-1 bg-white h-4 w-4 rounded-full"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Newsletter</h3>
                      <p className="text-sm text-gray-500">Receive monthly updates about new features and resources</p>
                    </div>
                    <div className="h-6 w-11 bg-gray-200 rounded-full relative">
                      <div className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return <div>Page not found</div>
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {/* Profile Section */}
              <div className="relative">
                <div className="bg-blue-900 h-32"></div>
                <div className="absolute top-16 left-0 w-full flex justify-center">
                  <div className="relative">
                    <Image
                      src={
                        activeSection === "profile"
                          ? parentProfile.profileImage
                          : activeChild.image || "/placeholder.svg"
                      }
                      alt={activeSection === "profile" ? parentProfile.name : activeChild.name}
                      width={120}
                      height={120}
                      className="rounded-full border-4 border-white"
                    />
                    <div className="absolute bottom-1 right-1 bg-green-500 h-4 w-4 rounded-full border-2 border-white"></div>
                  </div>
                </div>
              </div>

              <div className="pt-16 pb-6 px-4 text-center">
                <h2 className="text-2xl font-bold">
                  {activeSection === "profile" ? parentProfile.name : activeChild.name}
                </h2>
                <p className="text-gray-500">
                  {activeSection === "profile" ? "Parent Account" : `Patient ID: ${activeChild.patientId}`}
                </p>
                {activeSection !== "profile" && (
                  <p className="text-gray-500 flex items-center justify-center gap-2 mt-1">
                    {activeChild.gender} • {activeChild.age}
                  </p>
                )}
              </div>

              {/* Child Selector */}
              {activeSection !== "profile" && children.length > 1 && (
                <div className="px-4 pb-4">
                  <div className="text-sm font-medium mb-2">Switch Child Profile:</div>
                  <div className="flex flex-col gap-2">
                    {children.map((child, index) => (
                      <button
                        key={child.id}
                        onClick={() => setActiveChildIndex(index)}
                        className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                          activeChildIndex === index ? "bg-primary/10 text-primary" : "hover:bg-gray-100"
                        }`}
                      >
                        <Image
                          src={child.image || "/placeholder.svg"}
                          alt={child.name}
                          width={24}
                          height={24}
                          className="rounded-full"
                        />
                        <span>{child.name}</span>
                        {activeChildIndex === index && <CheckCircle className="h-4 w-4 ml-auto text-primary" />}
                      </button>
                    ))}
                    <Button variant="ghost" size="sm" className="mt-2" onClick={() => setActiveSection("dependants")}>
                      <Users className="h-4 w-4 mr-2" />
                      Manage Children
                    </Button>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="border-t">
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left ${
                    activeSection === "dashboard" ? "bg-primary/10 border-l-4 border-primary" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveSection("dashboard")}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="font-medium">Dashboard</span>
                </button>

                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left ${
                    activeSection === "appointments" ? "bg-primary/10 border-l-4 border-primary" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveSection("appointments")}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="font-medium">My Appointments</span>
                </button>

                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left ${
                    activeSection === "dependants" ? "bg-primary/10 border-l-4 border-primary" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveSection("dependants")}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Users className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="font-medium">Family Members</span>
                </button>

                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left ${
                    activeSection === "medical-records" ? "bg-primary/10 border-l-4 border-primary" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveSection("medical-records")}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="font-medium">Medical Records</span>
                </button>

                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left ${
                    activeSection === "profile" ? "bg-primary/10 border-l-4 border-primary" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveSection("profile")}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Settings className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="font-medium">Profile Settings</span>
                </button>

                <Link
                  href="/login"
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 text-red-500"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <LogOut className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Logout</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}

