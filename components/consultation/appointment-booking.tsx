"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Clock, Calendar, Check } from "lucide-react"

type Doctor = {
  id: string
  name: string
  title: string
  image: string
}

type TimeSlot = {
  id: string
  time: string
  available: boolean
}

type BookingConfirmation = {
  doctor: Doctor
  date: string
  time: string
}

const doctors: Doctor[] = [
  {
    id: "dr-john-doe",
    name: "Dr. John Doe",
    title: "MBBS, Dentist",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "dr-sarah-smith",
    name: "Dr. Sarah Smith",
    title: "Child Psychologist",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "dr-darren-elder",
    name: "Dr. Darren Elder",
    title: "Child Development Specialist",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const days = [
  { day: "MONDAY", date: "SEP 5" },
  { day: "TUESDAY", date: "SEP 6" },
  { day: "WED", date: "SEP 7" },
  { day: "THURS", date: "SEP 8" },
  { day: "FRI", date: "SEP 9" },
  { day: "SAT", date: "SEP 10" },
  { day: "SUN", date: "SEP 11" },
]

const timeSlots = {
  morning: [
    { id: "1", time: "09:00 - 09:30", available: true },
    { id: "2", time: "10:00 - 10:30", available: true },
  ],
  afternoon: [
    { id: "3", time: "12:00 - 12:30", available: true },
    { id: "4", time: "01:00 - 01:30", available: true },
  ],
  evening: [
    { id: "5", time: "03:00 - 03:30", available: true },
    { id: "6", time: "04:00 - 04:30", available: true },
  ],
}

export default function AppointmentBooking() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(doctors[0])
  const [selectedDate, setSelectedDate] = useState<string>("SEP 7")
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingConfirmed, setBookingConfirmed] = useState<BookingConfirmation | null>(null)

  const handleNext = () => {
    if (currentStep === 1 && selectedTimeSlot) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      // Simulate booking confirmation
      if (selectedDoctor && selectedTimeSlot) {
        setBookingConfirmed({
          doctor: selectedDoctor,
          date: selectedDate,
          time: selectedTimeSlot.time,
        })
        setCurrentStep(3)
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {currentStep < 3 && (
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Book an Appointment</h1>
          <div className="mt-4 flex items-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              1
            </div>
            <div className={`h-1 w-24 ${currentStep >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              2
            </div>
            <div className={`h-1 w-24 ${currentStep >= 3 ? "bg-blue-600" : "bg-gray-200"}`}></div>
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${currentStep >= 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              3
            </div>
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Select Available Slots</h2>
              <div className="mt-4 flex items-center">
                <div className="mr-4">
                  <label htmlFor="date-range" className="block text-sm font-medium text-gray-700">
                    Choose Date
                  </label>
                  <div className="mt-1 relative">
                    <div className="flex items-center border rounded-md p-2">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span>08/10/2023 - 08/11/2023</span>
                      <ChevronRight className="h-5 w-5 text-gray-400 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-4 border-b">
                  <button className="text-blue-600">
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <div className="grid grid-cols-7 gap-4 text-center">
                    {days.map((day) => (
                      <div
                        key={day.day}
                        className={`cursor-pointer ${selectedDate === day.date ? "text-blue-600 font-bold" : ""}`}
                        onClick={() => setSelectedDate(day.date)}
                      >
                        <div className="text-sm font-medium">{day.day}</div>
                        <div className="text-xs">{day.date}</div>
                      </div>
                    ))}
                  </div>
                  <button className="text-blue-600">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                <div className="p-4">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-center mb-4">Morning</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {timeSlots.morning.map((slot) => (
                        <div
                          key={slot.id}
                          className={`flex items-center justify-center p-4 rounded-md border cursor-pointer ${
                            selectedTimeSlot?.id === slot.id ? "bg-blue-50 border-blue-500" : "bg-gray-50"
                          }`}
                          onClick={() => setSelectedTimeSlot(slot)}
                        >
                          <Clock className="h-5 w-5 mr-2 text-gray-500" />
                          <span>{slot.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-center mb-4">Afternoon</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {timeSlots.afternoon.map((slot) => (
                        <div
                          key={slot.id}
                          className={`flex items-center justify-center p-4 rounded-md border cursor-pointer ${
                            selectedTimeSlot?.id === slot.id ? "bg-blue-50 border-blue-500" : "bg-gray-50"
                          }`}
                          onClick={() => setSelectedTimeSlot(slot)}
                        >
                          <Clock className="h-5 w-5 mr-2 text-gray-500" />
                          <span>{slot.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-center mb-4">Evening</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {timeSlots.evening.map((slot) => (
                        <div
                          key={slot.id}
                          className={`flex items-center justify-center p-4 rounded-md border cursor-pointer ${
                            selectedTimeSlot?.id === slot.id ? "bg-blue-50 border-blue-500" : "bg-gray-50"
                          }`}
                          onClick={() => setSelectedTimeSlot(slot)}
                        >
                          <Clock className="h-5 w-5 mr-2 text-gray-500" />
                          <span>{slot.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Button onClick={() => {}}>Load More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>

                <div className="border rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={selectedDoctor?.image || "/placeholder.svg"}
                        alt={selectedDoctor?.name || "Doctor"}
                        fill
                        alt={selectedDoctor?.name || "Doctor"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{selectedDoctor?.name}</h3>
                      <p className="text-sm text-gray-500">{selectedDoctor?.title}</p>
                      <Button variant="link" className="p-0 h-auto text-blue-600" onClick={() => {}}>
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Appointment Details</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-medium">
                          {selectedDate
                            ? new Date(`2023 ${selectedDate.replace("SEP", "September")}`).toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : "Select a date"}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-medium">
                          {selectedTimeSlot ? selectedTimeSlot.time : "Select a time slot"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Your Specialist</h3>
                    <p className="text-sm text-gray-600">
                      You'll be meeting with {selectedDoctor?.name}, who specializes in {selectedDoctor?.title}.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Confirm Your Details</h2>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full p-2 border rounded-md" placeholder="john.doe@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full p-2 border rounded-md" placeholder="+1 (555) 123-4567" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit</label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows={3}
                    placeholder="Please describe your reason for booking this appointment..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input type="checkbox" id="terms" className="h-4 w-4 mt-1 text-blue-600" />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                    I agree to the{" "}
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {currentStep === 3 && (
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <Check className="h-10 w-10 text-green-600" />
              </div>

              <h2 className="text-3xl font-bold mb-2">Appointment booked Successfully!</h2>
              <p className="text-lg text-gray-600 mb-2">Appointment booked with {bookingConfirmed?.doctor.name}</p>
              <p className="text-lg text-gray-600 mb-6">
                on {bookingConfirmed?.date} {bookingConfirmed?.time}
              </p>

              <Button className="bg-blue-500 hover:bg-blue-600">View Invoice</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {currentStep < 3 && (
        <div className="mt-8 flex justify-between">
          {currentStep > 1 ? (
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
          ) : (
            <div></div>
          )}
          <Button onClick={handleNext} disabled={currentStep === 1 && !selectedTimeSlot}>
            {currentStep === 1 ? "Next" : "Confirm Booking"}
          </Button>
        </div>
      )}
    </div>
  )
}

