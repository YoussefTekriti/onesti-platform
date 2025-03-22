"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

// Update the navigation array to include "I'm a Therapist" that links to the login page
const navigation = [
  { name: "I'm a Parent", href: "/#parent-journey" },
  { name: "I'm a School", href: "/#professional-development" },
  { name: "I'm a Therapist", href: "/login" },
  { name: "Packages", href: "/packages" },
  { name: "Blogs", href: "/blogs" },
  { name: "About Us", href: "/about" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // This would be replaced with actual auth state
  const isLoggedIn = false

  // Handle smooth scrolling for section links on the homepage
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only apply special handling for hash links on the homepage
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
        if (mobileMenuOpen) setMobileMenuOpen(false)
      }
    }
  }

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Onesti</span>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image001.jpg-lRBjbexqlJ9PjqISbLsUVR8QmtOJt5.jpeg"
              alt="Onesti Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-semibold leading-6 ${
                pathname === item.href.replace(/#.*$/, "") ? "text-onesti-purple" : "text-gray-900"
              } hover:text-onesti-purple transition-colors`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isLoggedIn ? (
            <Link href="/dashboard" className="text-sm font-semibold leading-6 text-gray-900">
              Dashboard <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Log in / Sign up <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Onesti</span>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image001.jpg-lRBjbexqlJ9PjqISbLsUVR8QmtOJt5.jpeg"
                  alt="Onesti Logo"
                  width={150}
                  height={50}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block rounded-lg px-3 py-2 text-sm font-semibold leading-6 ${
                        pathname === item.href.replace(/#.*$/, "")
                          ? "text-onesti-purple bg-gray-50"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  {isLoggedIn ? (
                    <Link
                      href="/dashboard"
                      className="block rounded-lg px-3 py-2.5 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <Link
                      href="/login"
                      className="block rounded-lg px-3 py-2.5 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in / Sign up
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

