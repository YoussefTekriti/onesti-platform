import type React from "react"
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Static sidebar - using minimal HTML */}
      <div className="fixed top-0 left-0 w-64 h-screen bg-white border-r z-30 overflow-y-auto">
        <div className="p-4 border-b">
          <a href="/admin" className="text-xl font-bold text-purple-700">
            Onesti Admin
          </a>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <a href="/admin" className="flex items-center px-4 py-3 text-sm rounded-md hover:bg-gray-100">
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/admin/appointments"
                className="flex items-center px-4 py-3 text-sm rounded-md hover:bg-gray-100"
              >
                Appointments
              </a>
            </li>
            <li>
              <a href="/admin/users" className="flex items-center px-4 py-3 text-sm rounded-md hover:bg-gray-100">
                Users
              </a>
            </li>
            <li>
              <a href="/admin/therapists" className="flex items-center px-4 py-3 text-sm rounded-md hover:bg-gray-100">
                Therapists
              </a>
            </li>
            <li>
              <a href="/admin/assessments" className="flex items-center px-4 py-3 text-sm rounded-md hover:bg-gray-100">
                Assessments
              </a>
            </li>
            <li>
              <a href="/admin/finance" className="flex items-center px-4 py-3 text-sm rounded-md hover:bg-gray-100">
                Finance
              </a>
            </li>
            <li>
              <a href="/admin/analytics" className="flex items-center px-4 py-3 text-sm rounded-md hover:bg-gray-100">
                Analytics
              </a>
            </li>
            <li>
              <a href="/admin/messages" className="flex items-center px-4 py-3 text-sm rounded-md hover:bg-gray-100">
                Messages
              </a>
            </li>
            <li>
              <a href="/admin/blogs" className="flex items-center px-4 py-3 text-sm rounded-md hover:bg-gray-100">
                Blogs
              </a>
            </li>
            <li>
              <a href="/admin/settings" className="flex items-center px-4 py-3 text-sm rounded-md hover:bg-gray-100">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="ml-64 w-full">{children}</div>
    </div>
  )
}

