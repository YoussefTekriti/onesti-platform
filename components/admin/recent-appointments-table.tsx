"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Calendar, Clock, MoreHorizontal } from "lucide-react"

// Mock data for recent appointments
const recentAppointments = [
  {
    id: "a1",
    client: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    therapist: {
      name: "Dr. Emily Parker",
      specialty: "Speech Therapist",
    },
    date: "Today",
    time: "2:00 PM",
    status: "confirmed",
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
    date: "Today",
    time: "4:30 PM",
    status: "confirmed",
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
    date: "Tomorrow",
    time: "10:00 AM",
    status: "pending",
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
    date: "Tomorrow",
    time: "1:15 PM",
    status: "confirmed",
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
    date: "Tomorrow",
    time: "3:45 PM",
    status: "pending",
  },
]

export default function RecentAppointmentsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-sm font-medium text-muted-foreground">
            <th className="pb-3 pl-4">Client</th>
            <th className="pb-3">Therapist</th>
            <th className="pb-3">Schedule</th>
            <th className="pb-3 pr-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recentAppointments.map((appointment) => (
            <tr key={appointment.id} className="border-b last:border-0">
              <td className="py-3 pl-4">
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
              <td className="py-3">
                <div>
                  <p className="font-medium">{appointment.therapist.name}</p>
                  <p className="text-xs text-muted-foreground">{appointment.therapist.specialty}</p>
                </div>
              </td>
              <td className="py-3">
                <div>
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span>{appointment.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span>{appointment.time}</span>
                  </div>
                </div>
              </td>
              <td className="py-3 pr-4 text-right">
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
                    <DropdownMenuItem>Reschedule</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Cancel Session</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

