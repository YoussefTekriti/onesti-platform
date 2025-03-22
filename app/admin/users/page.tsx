"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpDown, Download, Filter, MoreHorizontal, Search, Trash, UserPlus } from "lucide-react"
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

// Mock data for users
const users = [
  {
    id: "u1",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    status: "active",
    role: "Parent",
    joinDate: "Mar 15, 2023",
    lastActive: "Today",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "u2",
    name: "Michael Chen",
    email: "michael.c@example.com",
    status: "active",
    role: "Parent",
    joinDate: "Mar 14, 2023",
    lastActive: "Yesterday",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "u3",
    name: "Emma Wilson",
    email: "emma.w@example.com",
    status: "pending",
    role: "Parent",
    joinDate: "Mar 14, 2023",
    lastActive: "2 days ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "u4",
    name: "James Rodriguez",
    email: "james.r@example.com",
    status: "active",
    role: "Parent",
    joinDate: "Mar 13, 2023",
    lastActive: "Today",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "u5",
    name: "Olivia Taylor",
    email: "olivia.t@example.com",
    status: "inactive",
    role: "Parent",
    joinDate: "Mar 12, 2023",
    lastActive: "1 week ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "u6",
    name: "Dr. Emily Parker",
    email: "emily.p@example.com",
    status: "active",
    role: "Therapist",
    joinDate: "Feb 28, 2023",
    lastActive: "Today",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "u7",
    name: "Dr. David Wilson",
    email: "david.w@example.com",
    status: "active",
    role: "Therapist",
    joinDate: "Feb 25, 2023",
    lastActive: "Yesterday",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "u8",
    name: "Dr. Jessica Lee",
    email: "jessica.l@example.com",
    status: "active",
    role: "Therapist",
    joinDate: "Feb 20, 2023",
    lastActive: "Today",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "u9",
    name: "Dr. Robert Brown",
    email: "robert.b@example.com",
    status: "active",
    role: "Therapist",
    joinDate: "Feb 15, 2023",
    lastActive: "3 days ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "u10",
    name: "Admin User",
    email: "admin@onesti.com",
    status: "active",
    role: "Admin",
    joinDate: "Jan 1, 2023",
    lastActive: "Today",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [roleFilter, setRoleFilter] = useState("all")

  // Filter users based on search term and filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    const matchesRole = roleFilter === "all" || user.role === roleFilter

    return matchesSearch && matchesStatus && matchesRole
  })

  return (
    <div className="flex-1">
      <AdminHeader title="User Management" description="View and manage platform users" />

      <main className="p-6">
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Users</CardTitle>
              <CardDescription>Manage user accounts, permissions, and access</CardDescription>
            </div>
            <div className="mt-4 flex flex-col sm:mt-0 sm:flex-row sm:gap-2">
              <Button asChild>
                <Link href="/admin/users/new">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add User
                </Link>
              </Button>
              <Button variant="outline">
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
                  placeholder="Search users..."
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
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Select value={roleFilter} onValueChange={setRoleFilter}>
                    <SelectTrigger className="w-[130px]">
                      <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        <SelectValue placeholder="Role" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="Parent">Parent</SelectItem>
                      <SelectItem value="Therapist">Therapist</SelectItem>
                      <SelectItem value="Admin">Admin</SelectItem>
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
                        User
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
                        Role
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1">
                        Joined
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1">
                        Last Active
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-right text-sm font-medium text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-t">
                      <td className="px-4 py-3">
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
                      <td className="px-4 py-3">
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
                      <td className="px-4 py-3">{user.role}</td>
                      <td className="px-4 py-3">{user.joinDate}</td>
                      <td className="px-4 py-3">{user.lastActive}</td>
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
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit User</DropdownMenuItem>
                            <DropdownMenuItem>Reset Password</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash className="mr-2 h-4 w-4" />
                              Delete User
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
                Showing <strong>{filteredUsers.length}</strong> of <strong>{users.length}</strong> users
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

