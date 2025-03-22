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
import { MoreHorizontal } from "lucide-react"

// Mock data for recent users
const recentUsers = [
  {
    id: "u1",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    status: "active",
    joinDate: "Mar 15, 2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "u2",
    name: "Michael Chen",
    email: "michael.c@example.com",
    status: "active",
    joinDate: "Mar 14, 2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "u3",
    name: "Emma Wilson",
    email: "emma.w@example.com",
    status: "pending",
    joinDate: "Mar 14, 2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "u4",
    name: "James Rodriguez",
    email: "james.r@example.com",
    status: "active",
    joinDate: "Mar 13, 2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "u5",
    name: "Olivia Taylor",
    email: "olivia.t@example.com",
    status: "inactive",
    joinDate: "Mar 12, 2023",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export default function RecentUsersTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-sm font-medium text-muted-foreground">
            <th className="pb-3 pl-4">User</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Joined</th>
            <th className="pb-3 pr-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recentUsers.map((user) => (
            <tr key={user.id} className="border-b last:border-0">
              <td className="py-3 pl-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="py-3">
                <div className="flex items-center">
                  <div
                    className={`mr-2 h-2 w-2 rounded-full ${
                      user.status === "active"
                        ? "bg-green-500"
                        : user.status === "pending"
                          ? "bg-yellow-500"
                          : "bg-gray-300"
                    }`}
                  />
                  <span className="capitalize">{user.status}</span>
                </div>
              </td>
              <td className="py-3">{user.joinDate}</td>
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
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit User</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Deactivate</DropdownMenuItem>
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

