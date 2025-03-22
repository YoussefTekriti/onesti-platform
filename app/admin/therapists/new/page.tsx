"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import AdminHeader from "@/components/admin/admin-header"

// Specialties available in the platform
const specialties = [
  "Speech Therapist",
  "Occupational Therapist",
  "Behavioral Therapist",
  "ABA Therapist",
  "Developmental Psychologist",
  "Educational Therapist",
  "Physical Therapist",
  "Music Therapist",
  "Art Therapist",
  "Play Therapist",
]

// Days of the week for availability
const daysOfWeek = [
  { id: "monday", label: "Monday" },
  { id: "tuesday", label: "Tuesday" },
  { id: "wednesday", label: "Wednesday" },
  { id: "thursday", label: "Thursday" },
  { id: "friday", label: "Friday" },
  { id: "saturday", label: "Saturday" },
  { id: "sunday", label: "Sunday" },
]

// Time slots for availability
const timeSlots = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
  "5:00 PM - 6:00 PM",
  "6:00 PM - 7:00 PM",
  "7:00 PM - 8:00 PM",
  "8:00 PM - 9:00 PM",
]

export default function NewTherapistPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("personal")
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [selectedDays, setSelectedDays] = useState<Record<string, boolean>>({})
  const [dayTimeSlots, setDayTimeSlots] = useState<Record<string, string[]>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [accountCreation, setAccountCreation] = useState("create")

  // Handle profile image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle day selection for availability
  const handleDaySelection = (day: string, checked: boolean) => {
    setSelectedDays((prev) => ({ ...prev, [day]: checked }))

    // Initialize time slots for the day if it's selected
    if (checked && !dayTimeSlots[day]) {
      setDayTimeSlots((prev) => ({ ...prev, [day]: [] }))
    }
  }

  // Handle time slot selection for a specific day
  const handleTimeSlotSelection = (day: string, timeSlot: string) => {
    setDayTimeSlots((prev) => {
      const currentSlots = prev[day] || []
      if (currentSlots.includes(timeSlot)) {
        return { ...prev, [day]: currentSlots.filter((slot) => slot !== timeSlot) }
      } else {
        return { ...prev, [day]: [...currentSlots, timeSlot] }
      }
    })
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect to therapists list with success message
      router.push("/admin/therapists?success=Therapist added successfully")
    }, 1500)
  }

  // Remove profile image
  const removeProfileImage = () => {
    setProfileImage(null)
  }

  return (
    <div className="flex-1">
      <AdminHeader title="Add New Therapist" description="Register a new therapist to the platform" />

      <main className="p-6">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/therapists">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Therapists
            </Link>
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="professional">Professional Info</TabsTrigger>
              <TabsTrigger value="availability">Availability</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Enter the therapist's basic personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3 space-y-4">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="relative">
                          {profileImage ? (
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
                              <img
                                src={profileImage || "/placeholder.svg"}
                                alt="Profile"
                                className="w-full h-full object-cover"
                              />
                              <button
                                type="button"
                                onClick={removeProfileImage}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ) : (
                            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                              <Upload className="h-8 w-8 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col items-center">
                          <Label htmlFor="profile-image" className="cursor-pointer text-sm text-blue-600">
                            Upload Photo
                          </Label>
                          <Input
                            id="profile-image"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                          />
                          <p className="text-xs text-gray-500 mt-1">Recommended: 300x300px</p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-2/3 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name *</Label>
                          <Input id="first-name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name *</Label>
                          <Input id="last-name" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" type="tel" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dob">Date of Birth</Label>
                          <Input id="dob" type="date" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea id="address" rows={3} />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => router.push("/admin/therapists")}>
                    Cancel
                  </Button>
                  <Button type="button" onClick={() => setActiveTab("professional")}>
                    Next: Professional Info
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Professional Information Tab */}
            <TabsContent value="professional">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Information</CardTitle>
                  <CardDescription>Enter the therapist's professional details and qualifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Primary Specialty *</Label>
                      <Select required>
                        <SelectTrigger id="specialty">
                          <SelectValue placeholder="Select a specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          {specialties.map((specialty) => (
                            <SelectItem key={specialty} value={specialty}>
                              {specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="secondary-specialty">Secondary Specialty (Optional)</Label>
                      <Select>
                        <SelectTrigger id="secondary-specialty">
                          <SelectValue placeholder="Select a secondary specialty (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          {specialties.map((specialty) => (
                            <SelectItem key={specialty} value={specialty}>
                              {specialty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="qualifications">Qualifications & Certifications *</Label>
                      <Textarea
                        id="qualifications"
                        placeholder="List all relevant qualifications, degrees, and certifications"
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Input id="experience" type="number" min="0" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="languages">Languages Spoken *</Label>
                      <Input id="languages" placeholder="e.g., English, Arabic, French" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Professional Bio *</Label>
                      <Textarea
                        id="bio"
                        placeholder="Write a professional bio that will be displayed on the therapist's profile"
                        rows={5}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="approach">Therapeutic Approach</Label>
                      <Textarea
                        id="approach"
                        placeholder="Describe the therapist's approach to therapy and treatment"
                        rows={3}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => setActiveTab("personal")}>
                    Previous: Personal Info
                  </Button>
                  <Button type="button" onClick={() => setActiveTab("availability")}>
                    Next: Availability
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Availability Tab */}
            <TabsContent value="availability">
              <Card>
                <CardHeader>
                  <CardTitle>Availability Settings</CardTitle>
                  <CardDescription>Set the therapist's working days and available time slots</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label>Working Days</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {daysOfWeek.map((day) => (
                          <div key={day.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={day.id}
                              checked={selectedDays[day.id] || false}
                              onCheckedChange={(checked) => handleDaySelection(day.id, checked as boolean)}
                            />
                            <Label htmlFor={day.id} className="font-normal">
                              {day.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-muted-foreground" />
                        <Label>Available Time Slots</Label>
                      </div>

                      {Object.keys(selectedDays)
                        .filter((day) => selectedDays[day])
                        .map((day) => (
                          <div key={`timeslots-${day}`} className="space-y-2">
                            <h4 className="font-medium capitalize">{day}</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                              {timeSlots.map((timeSlot) => (
                                <div key={`${day}-${timeSlot}`} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`${day}-${timeSlot}`}
                                    checked={(dayTimeSlots[day] || []).includes(timeSlot)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        handleTimeSlotSelection(day, timeSlot)
                                      } else {
                                        handleTimeSlotSelection(day, timeSlot)
                                      }
                                    }}
                                  />
                                  <Label htmlFor={`${day}-${timeSlot}`} className="font-normal text-sm">
                                    {timeSlot}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                      {Object.keys(selectedDays).filter((day) => selectedDays[day]).length === 0 && (
                        <div className="text-center p-4 border border-dashed rounded-md">
                          <Clock className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                          <p className="text-muted-foreground">Please select working days first</p>
                        </div>
                      )}
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <Label>Session Settings</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="session-duration">Default Session Duration</Label>
                          <Select defaultValue="60">
                            <SelectTrigger id="session-duration">
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="30">30 minutes</SelectItem>
                              <SelectItem value="45">45 minutes</SelectItem>
                              <SelectItem value="60">60 minutes</SelectItem>
                              <SelectItem value="90">90 minutes</SelectItem>
                              <SelectItem value="120">120 minutes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="buffer-time">Buffer Time Between Sessions</Label>
                          <Select defaultValue="15">
                            <SelectTrigger id="buffer-time">
                              <SelectValue placeholder="Select buffer time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">No buffer</SelectItem>
                              <SelectItem value="5">5 minutes</SelectItem>
                              <SelectItem value="10">10 minutes</SelectItem>
                              <SelectItem value="15">15 minutes</SelectItem>
                              <SelectItem value="30">30 minutes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => setActiveTab("professional")}>
                    Previous: Professional Info
                  </Button>
                  <Button type="button" onClick={() => setActiveTab("account")}>
                    Next: Account Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Account Tab */}
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Set up the therapist's account and platform access</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Account Creation Method</Label>
                      <RadioGroup
                        value={accountCreation}
                        onValueChange={setAccountCreation}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="create" id="create-account" />
                          <Label htmlFor="create-account" className="font-normal">
                            Create account now (admin will set password)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="invite" id="invite-therapist" />
                          <Label htmlFor="invite-therapist" className="font-normal">
                            Send invitation email (therapist will complete registration)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {accountCreation === "create" && (
                      <div className="space-y-4 border p-4 rounded-md">
                        <div className="space-y-2">
                          <Label htmlFor="username">Username *</Label>
                          <Input id="username" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="password">Password *</Label>
                            <Input id="password" type="password" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm Password *</Label>
                            <Input id="confirm-password" type="password" required />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label>Initial Account Status</Label>
                      <Select defaultValue="active">
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active (can login immediately)</SelectItem>
                          <SelectItem value="pending">Pending (requires admin approval)</SelectItem>
                          <SelectItem value="inactive">Inactive (account disabled)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Platform Permissions</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="perm-appointments" defaultChecked />
                          <Label htmlFor="perm-appointments" className="font-normal">
                            Manage appointments
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="perm-clients" defaultChecked />
                          <Label htmlFor="perm-clients" className="font-normal">
                            View assigned clients
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="perm-notes" defaultChecked />
                          <Label htmlFor="perm-notes" className="font-normal">
                            Create session notes
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="perm-resources" defaultChecked />
                          <Label htmlFor="perm-resources" className="font-normal">
                            Access resources library
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="perm-blog" />
                          <Label htmlFor="perm-blog" className="font-normal">
                            Create blog content
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Notification Preferences</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="notif-email" defaultChecked />
                          <Label htmlFor="notif-email" className="font-normal">
                            Email notifications
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="notif-sms" defaultChecked />
                          <Label htmlFor="notif-sms" className="font-normal">
                            SMS notifications
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="notif-app" defaultChecked />
                          <Label htmlFor="notif-app" className="font-normal">
                            In-app notifications
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => setActiveTab("availability")}>
                    Previous: Availability
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save Therapist"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </form>
      </main>
    </div>
  )
}

