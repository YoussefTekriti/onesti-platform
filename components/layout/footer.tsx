"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  // Function to open milestone tracker popup
  const openMilestonePopup = () => {
    // This assumes there's a milestone tracker popup trigger element with this data attribute
    const popupTrigger = document.querySelector('[data-milestone-popup="trigger"]');
    if (popupTrigger && 'click' in popupTrigger) {
      (popupTrigger as HTMLElement).click();
    }
  };

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
              <p className="text-sm text-gray-600">letstalk@onestiglobal.com</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Said Freiha street, Shawki Lutfala bldg. Second floor
              </p>
              <div className="w-full h-48 mt-2 rounded-md overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.416892558931!2d35.56730947614503!3d33.848982380657544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17c1c18d92e9%3A0x1da4b2e4f8da38d7!2sOnesti%20Therapy%20%26%20Learning%20Center!5e0!3m2!1sen!2sus!4v1718557046278!5m2!1sen!2sus" 
                  className="w-full h-full border-0" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Onesti Location"
                  aria-label="Map showing Onesti Global location"
                ></iframe>
              </div>
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

          {/* Main Pages */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Main Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-onesti-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services & Tools */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services & Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/packages" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Therapy Packages
                </Link>
              </li>
              <li>
                <Link href="/assessments" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Screening
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Consultation
                </Link>
              </li>
              <li>
                <Link href="/milestone-tracker" className="text-sm text-gray-600 hover:text-onesti-purple">
                  Milestone Tracker
                </Link>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Join Our Newsletter</h3>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Input type="email" placeholder="Enter Email" className="bg-white" id="footer-email" />
                  <Button
                    className="bg-onesti-purple hover:bg-onesti-purple/90 text-white"
                    onClick={() => {
                      document.getElementById("subscription-success")?.classList.remove("hidden")
                      const emailInput = document.getElementById("footer-email") as HTMLInputElement;
                      if (emailInput) {
                        emailInput.value = "";
                      }
                    }}
                  >
                    Submit
                  </Button>
                </div>
                <div id="subscription-success" className="hidden text-green-600 text-sm font-medium">
                  Thank you for subscribing to our newsletter!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
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

