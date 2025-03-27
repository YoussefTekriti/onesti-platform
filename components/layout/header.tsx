"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

// TypeScript interfaces for navigation
interface BaseNavItem {
  name: string;
}

interface NavItem extends BaseNavItem {
  href: string;
}

interface NavItemWithDescription extends NavItem {
  description: string;
}

interface NavSection {
  section: string;
  items: NavItemWithDescription[];
}

interface NavItemWithDropdown extends BaseNavItem {
  dropdown: (NavSection | NavItem)[];
}

type NavigationItem = NavItem | NavItemWithDropdown;

// Define navigation menu in both languages
const navigationEN: NavigationItem[] = [
  { name: "I'm a Parent", href: "/#parent-journey" },
  { name: "Programs", href: "/programs" },
  { name: "Learning", href: "/blogs" },
  {
    name: "Services",
    dropdown: [
      { 
        section: "OUR SERVICES",
        items: [
          { name: "Assessments", href: "/assessments-catalog", description: "Comprehensive evaluation services" },
          { name: "Screenings", href: "/assessments", description: "Developmental screening services" },
          { name: "Packages", href: "/packages", description: "Customized therapy solutions" },
          { name: "Trainings", href: "/training", description: "Professional development courses" }
        ]
      }
    ]
  },
  { name: "About Onesti", href: "/about" },
  { name: "Contact", href: "/contact" }
]

const navigationAR: NavigationItem[] = [
  { name: "أنا والد", href: "/#parent-journey" },
  { name: "البرامج", href: "/programs" },
  { name: "التعلم", href: "/blogs" },
  {
    name: "الخدمات",
    dropdown: [
      {
        section: "خدماتنا",
        items: [
          { name: "التقييمات", href: "/assessments-catalog", description: "خدمات التقييم الشاملة" },
          { name: "الفحوصات", href: "/assessments", description: "خدمات فحص التطور" },
          { name: "الباقات", href: "/packages", description: "حلول علاجية مخصصة" },
          { name: "التدريبات", href: "/training", description: "دورات التطوير المهني" }
        ]
      }
    ]
  },
  { name: "عن أونستي", href: "/about" },
  { name: "اتصل بنا", href: "/contact" }
]

// Type guard functions
const isNavItemWithDropdown = (item: NavigationItem): item is NavItemWithDropdown => {
  return 'dropdown' in item;
}

const isNavSection = (item: NavSection | NavItem): item is NavSection => {
  return 'section' in item;
}

const isNavItem = (item: NavigationItem): item is NavItem => {
  return 'href' in item;
}

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const pathname = usePathname()

  // This would be replaced with actual auth state
  const isLoggedIn = false

  // Only render client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  // Toggle language between English and Arabic
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  // Get the navigation based on current language
  const navigation = language === "en" ? navigationEN : navigationAR

  // Handle smooth scrolling for section links on the homepage
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!mounted) return
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
    <header className="bg-white shadow-sm relative">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:p-6 lg:px-8" aria-label="Global">
        {/* Logo - fixed width on left */}
        <div className="flex lg:w-64">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Onesti</span>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image001.jpg-lRBjbexqlJ9PjqISbLsUVR8QmtOJt5.jpeg"
              alt="Onesti Logo"
              width={130}
              height={45}
              className="h-7 lg:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Navigation - centered */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-8">
          {mounted && navigation.map((item) => (
            isNavItemWithDropdown(item) ? (
              <div key={item.name} className="relative group">
                <button className="text-sm font-semibold leading-6 flex items-center text-gray-900 hover:text-onesti-purple transition-colors py-2">
                  {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {/* Simple CSS dropdown that appears on hover */}
                <div className="absolute z-10 left-0 mt-1 w-[400px] bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-left">
                  <div className="p-4">
                    {item.dropdown.map((section, idx) => (
                      <div key={idx} className="space-y-4">
                        {isNavSection(section) && (
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {section.section}
                          </h3>
                        )}
                        <div className="grid gap-4">
                          {isNavSection(section) ? (
                            section.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="group grid gap-1 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                <div className="font-semibold text-gray-900 group-hover:text-onesti-purple">
                                  {item.name}
                                </div>
                                {item.description && (
                                  <div className="text-sm text-gray-500">
                                    {item.description}
                                  </div>
                                )}
                              </Link>
                            ))
                          ) : (
                            <Link
                              href={section.href}
                              className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {section.name}
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                suppressHydrationWarning
                className={`text-sm font-semibold leading-6 ${
                  pathname === item.href.replace(/#.*$/, "") ? "text-onesti-purple" : "text-gray-900"
                } hover:text-onesti-purple transition-colors py-2`}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile header controls */}
        <div className="flex items-center lg:hidden">
          {/* Language toggle for mobile */}
          <div className="mr-2">
            <div className="relative flex items-center bg-white rounded-full p-1 w-20 h-8 shadow-sm border border-gray-200">
              {/* Sliding background */}
              <div 
                suppressHydrationWarning 
                className={`absolute w-10 h-6 bg-onesti-purple rounded-full transition-transform duration-300 ${
                  language === "en" ? "transform translate-x-9" : "transform translate-x-0"
                }`}
              ></div>
              
              {/* AR Button */}
              <button
                onClick={() => setLanguage("ar")}
                suppressHydrationWarning
                className={`z-10 flex justify-center items-center rounded-full h-6 w-10 font-semibold transition-colors duration-300 ${
                  language === "ar" ? "text-white" : "text-gray-500"
                } text-xs`}
                aria-label="Switch to Arabic"
              >
                عربي
              </button>
              
              {/* EN Button */}
              <button
                onClick={() => setLanguage("en")}
                suppressHydrationWarning
                className={`z-10 flex justify-center items-center rounded-full h-6 w-10 font-semibold transition-colors duration-300 ${
                  language === "en" ? "text-white" : "text-gray-700 hover:text-gray-900"
                } text-xs`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white bg-onesti-purple shadow-md"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Account - fixed width on right */}
        <div className="hidden lg:flex lg:items-center lg:w-64 lg:justify-end">
          {/* Language toggle for desktop */}
          <div className="relative flex items-center bg-white rounded-full p-1 w-28 h-10 shadow-md border border-gray-200 mr-4">
            {/* Sliding background */}
            <div 
              suppressHydrationWarning 
              className={`absolute w-14 h-8 bg-onesti-purple rounded-full transition-transform duration-300 ${
                language === "en" ? "transform translate-x-12" : "transform translate-x-0"
              }`}
            ></div>
            
            {/* AR Button */}
            <button
              onClick={() => setLanguage("ar")}
              suppressHydrationWarning
              className={`z-10 flex justify-center items-center rounded-full h-8 w-14 font-semibold transition-colors duration-300 ${
                language === "ar" ? "text-white" : "text-gray-500"
              }`}
              aria-label="Switch to Arabic"
            >
              عربي
            </button>
            
            {/* EN Button */}
            <button
              onClick={() => setLanguage("en")}
              suppressHydrationWarning
              className={`z-10 flex justify-center items-center rounded-full h-8 w-14 font-semibold transition-colors duration-300 ${
                language === "en" ? "text-white" : "text-gray-500"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {isLoggedIn ? (
            <Link href="/dashboard" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <span suppressHydrationWarning>
                {language === "en" ? (
                  <>Dashboard <span aria-hidden="true" className="ml-1">&rarr;</span></>
                ) : (
                  <><span aria-hidden="true" className="mr-1">&larr;</span> لوحة التحكم</>
                )}
              </span>
            </Link>
          ) : (
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
              <span suppressHydrationWarning>
                {language === "en" ? (
                  <>Log in / Sign up <span aria-hidden="true" className="ml-1">&rarr;</span></>
                ) : (
                  <><span aria-hidden="true" className="mr-1">&larr;</span> تسجيل الدخول / التسجيل</>
                )}
              </span>
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {mounted && mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/60" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
          <div className={`fixed inset-y-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${language === "ar" ? "right-0" : "left-0"}`}>
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
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
                className="rounded-full p-2.5 text-gray-700 bg-gray-100"
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
                    isNavItemWithDropdown(item) ? (
                      <div key={item.name} className="space-y-1">
                        <div className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-gray-50">
                          {item.name}
                        </div>
                        <div className="pl-4">
                          {item.dropdown.map((section, idx) => (
                            <div key={idx}>
                              {isNavSection(section) ? (
                                <>
                                  <div className="px-3 py-1 text-xs font-semibold text-onesti-purple uppercase tracking-wider">
                                    {section.section}
                                  </div>
                                  {section.items.map(item => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      className="block rounded-lg px-3 py-2 text-sm font-medium leading-6 text-gray-700 hover:bg-gray-50 hover:text-onesti-purple"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </>
                              ) : (
                                <Link
                                  key={section.name}
                                  href={section.href}
                                  className="block rounded-lg px-3 py-2 text-sm font-medium leading-6 text-gray-700 hover:bg-gray-50 hover:text-onesti-purple"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {section.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href);
                          setMobileMenuOpen(false);
                        }}
                        className={`block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${
                          pathname === item.href.replace(/#.*$/, "")
                            ? "text-onesti-purple bg-gray-50"
                            : "text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </div>
                <div className="py-6">
                  {isLoggedIn ? (
                    <Link
                      href="/dashboard"
                      className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {language === "en" ? "Dashboard" : "لوحة التحكم"}
                    </Link>
                  ) : (
                    <Link
                      href="/login"
                      className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {language === "en" ? "Log in / Sign up" : "تسجيل الدخول / التسجيل"}
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

