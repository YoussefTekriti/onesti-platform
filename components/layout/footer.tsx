"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Operating Hours */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image001.jpg-lRBjbexqlJ9PjqISbLsUVR8QmtOJt5.jpeg"
                alt="Onesti Logo"
                width={160}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Operating Hours</h3>
              <p className="text-sm text-gray-600">Monday to Saturday</p>
              <p className="text-sm text-gray-600">9 Am to 9 PM Beirut time</p>
              <p className="text-sm text-gray-600">+961 70 666 064</p>
            </div>
          </div>

          {/* For Families */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">For Families</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-onesti-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Terms Of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
              <address className="not-italic text-sm text-gray-600 space-y-2">
                <p className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Daychounieh street,
                  <br />
                  Hajjar building, 2nd floor,
                  <br />
                  Mansourieh – Lebanon
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +961 70 666 064
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  letstalk@onestiglobal.com
                </p>
              </address>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Join Our Newsletter</h3>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Input type="email" placeholder="Enter Email" className="bg-white" id="footer-email" />
                  <Button
                    className="bg-onesti-purple hover:bg-onesti-purple/90 text-white"
                    onClick={() => {
                      document.getElementById("subscription-success")?.classList.remove("hidden")
                      document.getElementById("footer-email").value = ""
                    }}
                  >
                    Submit
                  </Button>
                </div>
                <div id="subscription-success" className="hidden text-green-600 text-sm font-medium">
                  Thank you for subscribing to our newsletter!
                </div>

                {/* Social Media */}
                <div className="flex space-x-4 mt-4">
                  <Link href="#" className="text-gray-400 hover:text-onesti-purple">
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-onesti-purple">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-onesti-purple">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">Copyright © 2023 Dreamguys. All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-onesti-purple">
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-onesti-purple">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

