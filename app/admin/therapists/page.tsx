"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpDown, Download, Filter, MoreHorizontal, Search, Star, Trash, UserPlus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AdminHeader from "@/components/admin/admin-header"
// import AdminSidebar from "@/components/admin/admin-sidebar"

// Mock data for therapists
const therapists = [
  {
    id: "t1",
    name: "Dr. Emily Parker",
    email: "emily.p@example.com",
    specialty: "Speech Therapist",
    status: "active",
    rating: 4.9,
    sessionsCompleted: 128,
    availability: "Mon, Wed, Fri",
    joinDate: "Feb 28, 2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "t2",
    name: "Dr. David Wilson",
    email: "david.w@example.com",
    specialty: "Occupational Therapist",
    status: "active",
    rating: 4.7,
    sessionsCompleted: 95,
    availability: "Tue, Thu, Sat",
    joinDate: "Feb 25, 2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "t3",
    name: "Dr. Jessica Lee",
    email: "jessica.l@example.com",
    specialty: "Behavioral Therapist",
    status: "active",
    rating: 4.8,
    sessionsCompleted: 112,
    availability: "Mon, Tue, Wed, Thu",
    joinDate: "Feb 20, 2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "t4",
    name: "Dr. Robert Brown",
    email: "robert.b@example.com",
    specialty: "Speech Therapist",
    status: "active",
    rating: 4.6,
    sessionsCompleted: 87,
    availability: "Wed, Thu, Fri",
    joinDate: "Feb 15, 2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "t5",
    name: "Dr. Sarah Johnson",
    email: "sarah.j@example.com",
    specialty: "Developmental Psychologist",
    status: "active",
    rating: 4.9,
    sessionsCompleted: 145,
    availability: "Mon, Tue, Wed, Fri",
    joinDate: "Feb 10, 2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "t6",
    name: "Dr. Michael Chen",
    email: "michael.c@example.com",
    specialty: "ABA Therapist",
    status: "pending",
    rating: 0,
    sessionsCompleted: 0,
    availability: "Pending",
    joinDate: "Mar 14, 2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "t7",
    name: "Dr. Emma Wilson",
    email: "emma.w@example.com",
    specialty: "Occupational Therapist",
    status: "inactive",
    rating: 4.5,
    sessionsCompleted: 62,
    availability: "Inactive",
    joinDate: "Jan 20, 2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export default function TherapistsPage() {
  const [mounted, setMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [specialtyFilter, setSpecialtyFilter] = useState("all")

  // Only render UI elements on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Filter therapists based on search term and filters
  const filteredTherapists = therapists.filter((therapist) => {
    const matchesSearch =
      therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      therapist.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      therapist.specialty.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || therapist.status === statusFilter
    const matchesSpecialty = specialtyFilter === "all" || therapist.specialty === specialtyFilter

    return matchesSearch && matchesStatus && matchesSpecialty
  })

  // Get unique specialties for filter
  const specialties = [...new Set(therapists.map((t) => t.specialty))]

  return (
    <div className="flex-1">
      <AdminHeader title="Therapist Management" description="View and manage platform therapists" />

      <main className="p-6">
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Therapists</CardTitle>
              <CardDescription>Manage therapist profiles, specialties, and availability</CardDescription>
            </div>
            <div className="mt-4 flex flex-col sm:mt-0 sm:flex-row sm:gap-2">
              <Button asChild>
                <Link href="/admin/therapists/new">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Therapist
                </Link>
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {mounted && (
              <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search therapists..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    suppressHydrationWarning
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-[130px]">
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4" />
                          <SelectValue placeholder="Status" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                      <SelectTrigger className="w-[200px]">
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4" />
                          <SelectValue placeholder="Specialty" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Specialties</SelectItem>
                        {specialties.map((specialty) => (
                          <SelectItem key={specialty} value={specialty}>
                            {specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            <div className="overflow-x-auto rounded-md border">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1">
                        Therapist
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1">
                        Specialty
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1">
                        Status
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1">
                        Rating
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1">
                        Sessions
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1">
                        Availability
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-right text-sm font-medium text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTherapists.map((therapist) => (
                    <tr key={therapist.id} className="border-t">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={therapist.avatar} alt={therapist.name} />
                            <AvatarFallback>{therapist.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{therapist.name}</p>
                            <p className="text-xs text-muted-foreground">{therapist.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">{therapist.specialty}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div
                            className={`mr-2 h-2 w-2 rounded-full ${
                              therapist.status === "active"
                                ? "bg-green-500"
                                : therapist.status === "pending"
                                  ? "bg-yellow-500"
                                  : "bg-gray-300"
                            }`}
                          />
                          <span className="capitalize">{therapist.status}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          {therapist.rating > 0 ? (
                            <>
                              <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{therapist.rating}</span>
                            </>
                          ) : (
                            <span className="text-muted-foreground">N/A</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">{therapist.sessionsCompleted}</td>
                      <td className="px-4 py-3">{therapist.availability}</td>
                      <td className="px-4 py-3 text-right">
                        {mounted && (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Edit Therapist</DropdownMenuItem>
                              <DropdownMenuItem>Manage Schedule</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Therapist
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <strong>{filteredTherapists.length}</strong> of <strong>{therapists.length}</strong> therapists
              </p>
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
      </main>
    </div>
  )
}

