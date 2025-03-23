"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpDown, Calendar, Clock, Download, Filter, MoreHorizontal, Plus, Search, Trash } from "lucide-react"
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
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

// Mock data for users/clients
const users = [
  { id: "u1", name: "Sarah Johnson", email: "sarah@example.com", type: "client", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "u2", name: "Michael Chen", email: "michael@example.com", type: "client", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "u3", name: "Emma Wilson", email: "emma@example.com", type: "client", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "u4", name: "James Rodriguez", email: "james@example.com", type: "client", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "u5", name: "Olivia Taylor", email: "olivia@example.com", type: "client", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "u6", name: "William Brown", email: "william@example.com", type: "client", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "u7", name: "Dr. Emily Parker", email: "emily@onesti.com", type: "therapist", specialty: "Speech Therapist", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "u8", name: "Dr. David Wilson", email: "david@onesti.com", type: "therapist", specialty: "Occupational Therapist", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "u9", name: "Dr. Jessica Lee", email: "jessica@onesti.com", type: "therapist", specialty: "Behavioral Therapist", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "u10", name: "Dr. Robert Brown", email: "robert@onesti.com", type: "therapist", specialty: "Speech Therapist", avatar: "/placeholder.svg?height=32&width=32" },
];

// Mock data for packages
const packages = [
  { id: "p1", name: "Thrive Path", sessions: 12, price: 1200 },
  { id: "p2", name: "Empower Path", sessions: 8, price: 900 },
  { id: "p3", name: "Nurture Path", sessions: 6, price: 750 },
  { id: "p4", name: "Single Session", sessions: 1, price: 150 },
];

// Mock data for appointments
const appointments = [
  {
    id: "a1",
    clientId: "u1",
    client: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    therapistId: "u7",
    therapist: {
      name: "Dr. Emily Parker",
      specialty: "Speech Therapist",
    },
    date: "2023-03-18",
    time: "10:00 AM",
    duration: "60 min",
    status: "confirmed",
    type: "Developmental",
    package: "Thrive Path",
    packageId: "p1",
    notes: "Initial consultation to assess speech development challenges"
  },
  {
    id: "a2",
    client: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    therapist: {
      name: "Dr. David Wilson",
      specialty: "Occupational Therapist",
    },
    date: "2023-03-18",
    time: "2:00 PM",
    duration: "45 min",
    status: "confirmed",
    type: "Routine",
    package: "Empower Path",
  },
  {
    id: "a3",
    client: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    therapist: {
      name: "Dr. Jessica Lee",
      specialty: "Behavioral Therapist",
    },
    date: "2023-03-19",
    time: "10:00 AM",
    duration: "60 min",
    status: "pending",
    type: "ABA",
    package: "Nurture Path",
  },
  {
    id: "a4",
    client: {
      name: "James Rodriguez",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    therapist: {
      name: "Dr. Robert Brown",
      specialty: "Speech Therapist",
    },
    date: "2023-03-19",
    time: "1:15 PM",
    duration: "45 min",
    status: "confirmed",
    type: "Developmental",
    package: "Thrive Path",
  },
  {
    id: "a5",
    client: {
      name: "Olivia Taylor",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    therapist: {
      name: "Dr. Sarah Johnson",
      specialty: "Developmental Psychologist",
    },
    date: "2023-03-19",
    time: "3:45 PM",
    duration: "60 min",
    status: "pending",
    type: "Counseling",
    package: "Single Session",
  },
  {
    id: "a6",
    client: {
      name: "William Brown",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    therapist: {
      name: "Dr. Emily Parker",
      specialty: "Speech Therapist",
    },
    date: "2023-03-20",
    time: "9:30 AM",
    duration: "60 min",
    status: "confirmed",
    type: "Developmental",
    package: "Empower Path",
  },
  {
    id: "a7",
    client: {
      name: "Sophia Martinez",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    therapist: {
      name: "Dr. Michael Chen",
      specialty: "ABA Therapist",
    },
    date: "2023-03-20",
    time: "11:00 AM",
    duration: "90 min",
    status: "confirmed",
    type: "ABA",
    package: "Thrive Path",
  },
  {
    id: "a8",
    client: {
      name: "Ethan Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    therapist: {
      name: "Dr. Jessica Lee",
      specialty: "Behavioral Therapist",
    },
    date: "2023-03-17",
    time: "2:30 PM",
    duration: "60 min",
    status: "completed",
    type: "ABA",
    package: "Nurture Path",
  },
  {
    id: "a9",
    client: {
      name: "Ava Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    therapist: {
      name: "Dr. David Wilson",
      specialty: "Occupational Therapist",
    },
    date: "2023-03-17",
    time: "4:00 PM",
    duration: "45 min",
    status: "completed",
    type: "Routine",
    package: "Empower Path",
  },
  {
    id: "a10",
    client: {
      name: "Noah Garcia",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    therapist: {
      name: "Dr. Sarah Johnson",
      specialty: "Developmental Psychologist",
    },
    date: "2023-03-16",
    time: "10:15 AM",
    duration: "60 min",
    status: "canceled",
    type: "Counseling",
    package: "Single Session",
  },
]

// Function to export table data to CSV
const exportToCSV = (data) => {
  // Column headers
  const headers = ["Client", "Therapist", "Specialty", "Date", "Time", "Duration", "Type", "Package", "Status"];
  
  // Format data rows
  const rows = data.map(appointment => [
    appointment.client.name,
    appointment.therapist.name,
    appointment.therapist.specialty,
    new Date(appointment.date).toLocaleDateString(),
    appointment.time,
    appointment.duration,
    appointment.type,
    appointment.package,
    appointment.status
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
  link.setAttribute('download', `appointments-${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function AppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newAppointment, setNewAppointment] = useState({
    clientId: "",
    therapistId: "",
    date: "",
    time: "",
    duration: "60 min",
    type: "",
    packageId: "",
    notes: ""
  })
  const { toast } = useToast()

  // Filter appointments based on search term and filters
  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.therapist.specialty.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || appointment.status === statusFilter
    const matchesType = typeFilter === "all" || appointment.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  // Get unique types for filter
  const types = [...new Set(appointments.map((a) => a.type))]

  // Filter users to just get clients
  const clients = users.filter(user => user.type === "client")
  
  // Filter users to just get therapists
  const therapists = users.filter(user => user.type === "therapist")

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewAppointment(prev => ({ ...prev, [name]: value }))
  }

  // Handler for creating a new appointment
  const handleCreateAppointment = (e) => {
    e.preventDefault()
    
    // In a real application, you would make an API call here
    // For now, we'll just show a toast notification
    toast({
      title: "Appointment Created",
      description: `New appointment scheduled for ${new Date(newAppointment.date).toLocaleDateString()} at ${newAppointment.time}`,
    })
    
    setIsModalOpen(false)
    // Reset form
    setNewAppointment({
      clientId: "",
      therapistId: "",
      date: "",
      time: "",
      duration: "60 min",
      type: "",
      packageId: "",
      notes: ""
    })
  }

  return (
    <div className="flex-1">
      <AdminHeader title="Appointment Management" description="View and manage scheduled sessions" />

      <main className="p-6">
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Appointments</CardTitle>
              <CardDescription>Manage therapy sessions, consultations, and assessments</CardDescription>
            </div>
            <div className="mt-4 flex flex-col sm:mt-0 sm:flex-row sm:gap-2">
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Appointment
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Create New Appointment</DialogTitle>
                    <DialogDescription>
                      Schedule a new appointment for a client with a therapist.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleCreateAppointment}>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="clientId" className="text-right">
                          Client
                        </Label>
                        <Select 
                          name="clientId" 
                          value={newAppointment.clientId} 
                          onValueChange={(value) => handleInputChange({ target: { name: 'clientId', value } })}
                          required
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a client" />
                          </SelectTrigger>
                          <SelectContent>
                            {clients.map(client => (
                              <SelectItem key={client.id} value={client.id}>
                                {client.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="therapistId" className="text-right">
                          Therapist
                        </Label>
                        <Select 
                          name="therapistId" 
                          value={newAppointment.therapistId} 
                          onValueChange={(value) => handleInputChange({ target: { name: 'therapistId', value } })}
                          required
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a therapist" />
                          </SelectTrigger>
                          <SelectContent>
                            {therapists.map(therapist => (
                              <SelectItem key={therapist.id} value={therapist.id}>
                                {therapist.name} ({therapist.specialty})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                          Date
                        </Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={newAppointment.date}
                          onChange={handleInputChange}
                          className="col-span-3"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="time" className="text-right">
                          Time
                        </Label>
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          value={newAppointment.time}
                          onChange={handleInputChange}
                          className="col-span-3"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="duration" className="text-right">
                          Duration
                        </Label>
                        <Select 
                          name="duration" 
                          value={newAppointment.duration} 
                          onValueChange={(value) => handleInputChange({ target: { name: 'duration', value } })}
                          required
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30 min">30 min</SelectItem>
                            <SelectItem value="45 min">45 min</SelectItem>
                            <SelectItem value="60 min">60 min</SelectItem>
                            <SelectItem value="90 min">90 min</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="type" className="text-right">
                          Type
                        </Label>
                        <Select 
                          name="type" 
                          value={newAppointment.type} 
                          onValueChange={(value) => handleInputChange({ target: { name: 'type', value } })}
                          required
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select appointment type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Developmental">Developmental</SelectItem>
                            <SelectItem value="ABA">ABA</SelectItem>
                            <SelectItem value="Counseling">Counseling</SelectItem>
                            <SelectItem value="Routine">Routine</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="packageId" className="text-right">
                          Package
                        </Label>
                        <Select 
                          name="packageId" 
                          value={newAppointment.packageId} 
                          onValueChange={(value) => handleInputChange({ target: { name: 'packageId', value } })}
                          required
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select package" />
                          </SelectTrigger>
                          <SelectContent>
                            {packages.map(pkg => (
                              <SelectItem key={pkg.id} value={pkg.id}>
                                {pkg.name} ({pkg.sessions} sessions)
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="notes" className="text-right">
                          Notes
                        </Label>
                        <Textarea
                          id="notes"
                          name="notes"
                          value={newAppointment.notes}
                          onChange={handleInputChange}
                          className="col-span-3"
                          placeholder="Add any additional notes here"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Create Appointment</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
              <Button variant="outline" onClick={() => exportToCSV(filteredAppointments)}>
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search appointments..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="canceled">Canceled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-[180px]">
                      <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        <SelectValue placeholder="Type" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {types.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto rounded-md border">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1">
                        Client
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1">
                        Therapist
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1">
                        Date & Time
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1">
                        Type
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1">
                        Status
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-right text-sm font-medium text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.map((appointment) => (
                    <tr key={appointment.id} className="border-t">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={appointment.client.avatar} alt={appointment.client.name} />
                            <AvatarFallback>{appointment.client.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{appointment.client.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium">{appointment.therapist.name}</p>
                          <p className="text-xs text-muted-foreground">{appointment.therapist.specialty}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                            <span>{new Date(appointment.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                            <span>
                              {appointment.time} ({appointment.duration})
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div>
                          <p>{appointment.type}</p>
                          <p className="text-xs text-muted-foreground">{appointment.package}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div
                            className={`mr-2 h-2 w-2 rounded-full ${
                              appointment.status === "confirmed"
                                ? "bg-green-500"
                                : appointment.status === "pending"
                                  ? "bg-yellow-500"
                                  : appointment.status === "completed"
                                    ? "bg-blue-500"
                                    : "bg-red-500"
                            }`}
                          />
                          <span className="capitalize">{appointment.status}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">
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
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Appointment</DropdownMenuItem>
                            <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                            {appointment.status === "confirmed" && (
                              <DropdownMenuItem>Mark as Completed</DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash className="mr-2 h-4 w-4" />
                              Cancel Appointment
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <strong>{filteredAppointments.length}</strong> of <strong>{appointments.length}</strong>{" "}
                appointments
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

