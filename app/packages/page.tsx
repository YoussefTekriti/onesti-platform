"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, CreditCard, ShoppingCart } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import TrialSessionCard from "@/components/packages/trial-session-card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import TestimonialsSection from "@/components/packages/testimonials-section"
// import CostCalculator from "@/components/packages/cost-calculator"

// Update the packages array to reflect the new service offerings and pricing structure

const packages = [
  {
    id: "developmental-thrive",
    name: "Developmental Thrive Path",
    description: "Comprehensive support for developmental delays or conditions",
    price: 840,
    regionalPrice: 600,
    features: [
      "In-depth initial assessment with a multidisciplinary review",
      "12 therapy sessions to be used at the child's requirement",
      "Personalized dashboard with progress tracking",
      "One Facilitator Coaching session",
      "Calendar integration with reminders",
      "4 video reviews with detailed feedback",
      "Secure messaging and live chat with therapists",
      "Regular parent and therapist coordination meetings",
      "Dedicated case manager for coordination",
    ],
    recommended: true,
  },
  {
    id: "developmental-empower",
    name: "Developmental Empower Path",
    description: "Balanced support for developmental needs",
    price: 600,
    regionalPrice: 400,
    features: [
      "In-depth initial assessment with a multidisciplinary review",
      "8 therapy sessions to be used flexibly",
      "Bi-monthly progress/coordination meetings",
      "Personalized dashboard with progress tracking",
      "Calendar integration with reminders",
      "2 video reviews with detailed feedback",
      "Parental guidance sessions",
      "Dedicated case manager for coordination",
    ],
    recommended: false,
  },
  {
    id: "developmental-nurture",
    name: "Developmental Nurture Path",
    description: "Essential support for developmental needs",
    price: 320,
    regionalPrice: 200,
    features: [
      "In-depth initial assessment with a multidisciplinary review",
      "4 therapy sessions to be used flexibly",
      "One progress/coordination meeting/Month",
      "Personalized dashboard with progress tracking",
      "Calendar integration with reminders",
      "Dedicated case manager for coordination",
    ],
    recommended: false,
  },
]

// Add service categories for the tabs
const serviceCategories = [
  { id: "developmental", name: "Developmental Interventions" },
  { id: "routine", name: "Routine-Based Interventions" },
  { id: "aba", name: "Applied Behavior Analysis (ABA)" },
  { id: "counseling", name: "Counseling & Single Sessions" },
]

// Add routine intervention packages
const routinePackages = [
  {
    id: "routine-thrive",
    name: "Routine Thrive Path",
    description: "Comprehensive support for routine-based challenges",
    price: 420,
    regionalPrice: 300,
    features: [
      "In-depth initial assessment with a multidisciplinary review",
      "6 therapy sessions",
      "Personalized dashboard with progress tracking",
      "Parent education hub with resources",
      "Personalized therapy plan with targeted objectives",
    ],
    recommended: true,
  },
  {
    id: "routine-empower",
    name: "Routine Empower Path",
    description: "Balanced support for routine-based challenges",
    price: 300,
    regionalPrice: 200,
    features: [
      "In-depth initial assessment with a multidisciplinary review",
      "4 therapy sessions",
      "Access to basic digital progress tracking",
    ],
    recommended: false,
  },
  {
    id: "routine-nurture",
    name: "Routine Nurture Path",
    description: "Essential support for routine-based challenges",
    price: 160,
    regionalPrice: 100,
    features: [
      "In-depth initial assessment with a multidisciplinary review",
      "2 therapy sessions",
      "Access to basic digital progress tracking",
    ],
    recommended: false,
  },
]

// Add ABA therapy packages
const abaPackages = [
  {
    id: "aba-thrive",
    name: "ABA Thrive Path",
    description: "Comprehensive support for complex behavioral needs",
    price: 1200,
    regionalPrice: 800,
    features: [
      "Multidisciplinary assessment",
      "10 ABA sessions + additional therapist input",
      "Personalized behavior intervention plan",
      "Regular progress monitoring",
      "Parent training sessions",
    ],
    recommended: true,
  },
  {
    id: "aba-empower",
    name: "ABA Empower Path",
    description: "Balanced support for moderate behavioral needs",
    price: 840,
    regionalPrice: 540,
    features: [
      "Multidisciplinary assessment",
      "6 therapy sessions",
      "Behavior intervention plan",
      "Progress monitoring",
    ],
    recommended: false,
  },
  {
    id: "aba-nurture",
    name: "ABA Nurture Path",
    description: "Essential support for single behavioral issues",
    price: 450,
    regionalPrice: 300,
    features: ["ABA behavior assessment", "3 therapy sessions", "Basic behavior plan"],
    recommended: false,
  },
]

// Add counseling packages
const counselingPackages = [
  {
    id: "counseling-extended",
    name: "Extended Support",
    description: "Comprehensive counseling support",
    price: 480,
    regionalPrice: 420,
    features: ["6 counseling sessions", "Brief weekly check-ins via email or chat", "Access to resources"],
    recommended: true,
  },
  {
    id: "counseling-bundle",
    name: "Session Bundle",
    description: "Multiple sessions at your convenience",
    price: 270,
    regionalPrice: 195,
    features: ["Package of 3 counseling sessions", "Can be scheduled at your convenience"],
    recommended: false,
  },
  {
    id: "counseling-single",
    name: "Single Session",
    description: "One-time counseling support",
    price: 90,
    regionalPrice: 70,
    features: ["One-time counseling session", "Focused on immediate concerns"],
    recommended: false,
  },
]

// Update the component to include tabs for different service categories
export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState("developmental")
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const [customizing, setCustomizing] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [purchaseComplete, setPurchaseComplete] = useState(false)
  const [paymentOption, setPaymentOption] = useState("upfront")
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const [packageToConfirm, setPackageToConfirm] = useState<string | null>(null)
  const [cart, setCart] = useState<string[]>([])
  const [showCartSummary, setShowCartSummary] = useState(false)

  // Get the appropriate package list based on selected category
  const getPackagesByCategory = () => {
    switch (selectedCategory) {
      case "routine":
        return routinePackages
      case "aba":
        return abaPackages
      case "counseling":
        return counselingPackages
      default:
        return packages
    }
  }

  const currentPackages = getPackagesByCategory()
  
  // Get all packages from all categories
  const getAllPackages = () => {
    return [...packages, ...routinePackages, ...abaPackages, ...counselingPackages]
  }
  
  // Calculate total cart value
  const calculateCartTotal = () => {
    const allPackages = getAllPackages()
    return cart.reduce((total, pkgId) => {
      const pkg = allPackages.find(p => p.id === pkgId)
      return total + (pkg?.price || 0)
    }, 0)
  }

  // Calculate payment amounts based on selected option
  const calculatePayment = (price: number) => {
    switch (paymentOption) {
      case "weekly":
        return `$${Math.round(price / 4)}/week`
      case "monthly":
        return `$${Math.round(price / 2)}/month`
      default:
        return `$${price}`
    }
  }

  const handlePackageSelect = (packageId: string) => {
    setPackageToConfirm(packageId)
    setConfirmDialogOpen(true)
  }

  const handleCustomize = () => {
    setCustomizing(true)
  }

  const handleProceedToPayment = () => {
    setShowPayment(true)
  }

  const handleCompletePurchase = () => {
    setPurchaseComplete(true)
  }

  const handleStartOver = () => {
    setSelectedPackage(null)
    setCustomizing(false)
    setShowPayment(false)
    setPurchaseComplete(false)
    setCart([])
  }

  // Add function to confirm package selection
  const confirmPackageSelection = () => {
    if (packageToConfirm) {
      setCart(prev => [...prev, packageToConfirm])
      setSelectedPackage(packageToConfirm)
      setConfirmDialogOpen(false)
    }
  }

  // Add function to add to cart without proceeding to checkout
  const addToCartOnly = () => {
    if (packageToConfirm) {
      setCart(prev => [...prev, packageToConfirm])
      setConfirmDialogOpen(false)
    }
  }
  
  // Function to remove a package from cart
  const removeFromCart = (packageId: string) => {
    setCart(prev => prev.filter(id => id !== packageId))
    if (selectedPackage === packageId) {
      setSelectedPackage(null)
    }
  }
  
  // Show floating checkout button when there are items in cart
  useEffect(() => {
    setShowCartSummary(cart.length > 0)
  }, [cart])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Packages & Payment</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Choose a therapy package that fits your child's needs and your budget
          </p>
        </div>

        {/* Floating Cart Summary */}
        {showCartSummary && !showPayment && !purchaseComplete && (
          <div className="fixed bottom-4 right-4 z-50">
            <div className="bg-white rounded-lg shadow-lg border p-4 w-72">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Cart Summary</h3>
                <span className="text-sm bg-primary text-white rounded-full px-2 py-0.5">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'}
                </span>
              </div>
              
              {cart.length > 0 && (
                <div className="max-h-40 overflow-auto mb-3">
                  {cart.map((pkgId) => {
                    const allPackages = getAllPackages();
                    const pkg = allPackages.find(p => p.id === pkgId);
                    return pkg ? (
                      <div key={pkgId} className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm truncate max-w-[150px]">{pkg.name}</span>
                        <div className="flex items-center">
                          <span className="text-sm font-medium mr-2">${pkg.price}</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-6 w-6 p-0" 
                            onClick={() => removeFromCart(pkgId)}
                          >
                            ✕
                          </Button>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              )}
              
              <div className="flex justify-between items-center font-semibold mb-3">
                <span>Total:</span>
                <span>${calculateCartTotal()}</span>
              </div>
              
              <Button 
                className="w-full" 
                onClick={() => {
                  if (selectedPackage) {
                    handleProceedToPayment();
                  } else if (cart.length > 0) {
                    setSelectedPackage(cart[0]);
                    handleProceedToPayment();
                  }
                }}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}

        <div className="mx-auto mt-12 max-w-7xl">
          {!selectedPackage && !purchaseComplete && (
            <>
              <Tabs defaultValue="developmental" onValueChange={setSelectedCategory}>
                <TabsList className="grid w-full grid-cols-4">
                  {serviceCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent value="developmental" className="mt-6">
                  <div className="mb-6 rounded-lg bg-muted p-4">
                    <h2 className="text-lg font-semibold">Developmental Interventions</h2>
                    <p className="mt-2 text-muted-foreground">
                      Long-term, multidisciplinary therapy addressing developmental delays or conditions like autism,
                      speech delays, or motor skill challenges.
                    </p>
                  </div>
                  <div className="grid gap-8 lg:grid-cols-3">
                    {packages.map((pkg) => (
                      <Card
                        key={pkg.id}
                        className={`flex flex-col transition-all duration-200 hover:border-primary hover:shadow-md ${
                          pkg.recommended ? "border-primary shadow-md" : ""
                        }`}
                      >
                        {pkg.recommended && (
                          <div className="rounded-t-lg bg-primary px-4 py-1 text-center text-sm font-medium text-primary-foreground">
                            Recommended
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{pkg.name}</CardTitle>
                          <CardDescription>{pkg.description}</CardDescription>
                          <div className="mt-4 flex items-baseline text-gray-900">
                            <span className="text-3xl font-bold tracking-tight">${pkg.price}</span>
                            <span className="ml-1 text-xl font-semibold">/package</span>
                          </div>
                          <div className="mt-1 text-sm text-muted-foreground">Regional price: ${pkg.regionalPrice}</div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <ul className="space-y-3">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className="w-full"
                            variant={pkg.recommended ? "default" : "outline"}
                            onClick={() => handlePackageSelect(pkg.id)}
                          >
                            Select This Package
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="routine" className="mt-6">
                  <div className="mb-6 rounded-lg bg-muted p-4">
                    <h2 className="text-lg font-semibold">Routine-Based Interventions</h2>
                    <p className="mt-2 text-muted-foreground">
                      Short-term, multidisciplinary therapy for specific challenges like feeding, sleeping, or potty
                      training.
                    </p>
                  </div>
                  <div className="grid gap-8 lg:grid-cols-3">
                    {routinePackages.map((pkg) => (
                      <Card
                        key={pkg.id}
                        className={`flex flex-col transition-all duration-200 hover:border-primary hover:shadow-md ${
                          pkg.recommended ? "border-primary shadow-md" : ""
                        }`}
                      >
                        {pkg.recommended && (
                          <div className="rounded-t-lg bg-primary px-4 py-1 text-center text-sm font-medium text-primary-foreground">
                            Recommended
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{pkg.name}</CardTitle>
                          <CardDescription>{pkg.description}</CardDescription>
                          <div className="mt-4 flex items-baseline text-gray-900">
                            <span className="text-3xl font-bold tracking-tight">${pkg.price}</span>
                            <span className="ml-1 text-xl font-semibold">/package</span>
                          </div>
                          <div className="mt-1 text-sm text-muted-foreground">Regional price: ${pkg.regionalPrice}</div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <ul className="space-y-3">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-3">
                          <Button
                            className="w-full"
                            variant={pkg.recommended ? "default" : "outline"}
                            onClick={() => handlePackageSelect(pkg.id)}
                          >
                            Select This Package
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="aba" className="mt-6">
                  <div className="mb-6 rounded-lg bg-muted p-4">
                    <h2 className="text-lg font-semibold">Applied Behavior Analysis (ABA)</h2>
                    <p className="mt-2 text-muted-foreground">
                      Targeted therapy for behavioral challenges and skill acquisition, integrated with other
                      developmental therapies where needed.
                    </p>
                  </div>
                  <div className="grid gap-8 lg:grid-cols-3">
                    {abaPackages.map((pkg) => (
                      <Card
                        key={pkg.id}
                        className={`flex flex-col transition-all duration-200 hover:border-primary hover:shadow-md ${
                          pkg.recommended ? "border-primary shadow-md" : ""
                        }`}
                      >
                        {pkg.recommended && (
                          <div className="rounded-t-lg bg-primary px-4 py-1 text-center text-sm font-medium text-primary-foreground">
                            Recommended
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{pkg.name}</CardTitle>
                          <CardDescription>{pkg.description}</CardDescription>
                          <div className="mt-4 flex items-baseline text-gray-900">
                            <span className="text-3xl font-bold tracking-tight">${pkg.price}</span>
                            <span className="ml-1 text-xl font-semibold">/package</span>
                          </div>
                          <div className="mt-1 text-sm text-muted-foreground">Regional price: ${pkg.regionalPrice}</div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <ul className="space-y-3">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-3">
                          <Button
                            className="w-full"
                            variant={pkg.recommended ? "default" : "outline"}
                            onClick={() => handlePackageSelect(pkg.id)}
                          >
                            Select This Package
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="counseling" className="mt-6">
                  <div className="mb-6 rounded-lg bg-muted p-4">
                    <h2 className="text-lg font-semibold">Counseling & Single Sessions</h2>
                    <p className="mt-2 text-muted-foreground">
                      Standalone therapy or consultation sessions addressing emotional well-being, parental support, or
                      other specific needs.
                    </p>
                  </div>
                  <div className="grid gap-8 lg:grid-cols-3">
                    {counselingPackages.map((pkg) => (
                      <Card
                        key={pkg.id}
                        className={`flex flex-col transition-all duration-200 hover:border-primary hover:shadow-md ${
                          pkg.recommended ? "border-primary shadow-md" : ""
                        }`}
                      >
                        {pkg.recommended && (
                          <div className="rounded-t-lg bg-primary px-4 py-1 text-center text-sm font-medium text-primary-foreground">
                            Recommended
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{pkg.name}</CardTitle>
                          <CardDescription>{pkg.description}</CardDescription>
                          <div className="mt-4 flex items-baseline text-gray-900">
                            <span className="text-3xl font-bold tracking-tight">${pkg.price}</span>
                            <span className="ml-1 text-xl font-semibold">/package</span>
                          </div>
                          <div className="mt-1 text-sm text-muted-foreground">Regional price: ${pkg.regionalPrice}</div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <ul className="space-y-3">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-3">
                          <Button
                            className="w-full"
                            variant={pkg.recommended ? "default" : "outline"}
                            onClick={() => handlePackageSelect(pkg.id)}
                          >
                            Select This Package
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Why Choose ONESTI Section */}
              <div className="mt-12 bg-gray-50 rounded-lg p-8">
                <div className="mx-auto max-w-3xl text-center mb-8">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Why Choose ONESTI</h2>
                  <p className="mt-4 text-gray-600">
                    We provide comprehensive, personalized care for your child's developmental journey
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="h-12 w-12 bg-[#4b2e83]/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-[#4b2e83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">
                      Our multidisciplinary team of specialists brings years of experience in pediatric therapy and
                      development.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="h-12 w-12 bg-[#4b2e83]/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-[#4b2e83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">
                      We tailor our therapy packages to meet your child's unique needs, goals, and developmental
                      timeline.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="h-12 w-12 bg-[#4b2e83]/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-[#4b2e83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Comprehensive Care</h3>
                    <p className="text-gray-600">
                      From assessments to therapy sessions and parent coaching, we provide all the support your family
                      needs.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="h-12 w-12 bg-[#4b2e83]/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-[#4b2e83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">
                      We offer convenient appointment times, including evenings and weekends, to accommodate your busy
                      family schedule.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="h-12 w-12 bg-[#4b2e83]/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-[#4b2e83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Family-Centered</h3>
                    <p className="text-gray-600">
                      We involve parents and caregivers in the therapy process, providing education and support for
                      continued progress at home.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="h-12 w-12 bg-[#4b2e83]/10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="h-6 w-6 text-[#4b2e83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Evidence-Based Practices</h3>
                    <p className="text-gray-600">
                      Our therapy approaches are grounded in research and proven methodologies for optimal developmental
                      outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <TrialSessionCard />
              </div>

              {/* <TestimonialsSection /> */}

              <div className="mt-12 rounded-lg border p-6">
                <h2 className="text-xl font-semibold">Need Help Choosing?</h2>
                <p className="mt-2 text-muted-foreground">
                  Our support team is available to help you select the right package for your child's needs.
                </p>
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      // Use a safer approach to open chat
                      const chatTrigger = document.querySelector('[data-sidebar="trigger"]');
                      if (chatTrigger && 'click' in chatTrigger) {
                        (chatTrigger as HTMLElement).click();
                      }
                    }}
                  >
                    Chat with Support
                  </Button>
                </div>
              </div>
            </>
          )}

          {selectedPackage && !customizing && !showPayment && !purchaseComplete && (
            <Card>
              <CardHeader>
                <CardTitle>Package Selection</CardTitle>
                <CardDescription>Review your selected package before proceeding to payment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {cart.length > 0 && (
                    <div className="rounded-lg bg-muted p-4">
                      <h3 className="font-medium mb-4">Your Selected Packages</h3>
                      {cart.map((pkgId) => {
                        const allPackages = getAllPackages();
                        const pkg = allPackages.find(p => p.id === pkgId);
                        return pkg ? (
                          <div key={pkgId} className="flex justify-between items-center py-2 border-b last:border-0">
                            <div>
                              <p className="font-medium">{pkg.name}</p>
                              <p className="text-sm text-muted-foreground">{pkg.description}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">${pkg.price}</p>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-red-500 h-8" 
                                onClick={() => removeFromCart(pkgId)}
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        ) : null;
                      })}
                      <div className="flex justify-between items-center font-semibold mt-4 pt-2 border-t">
                        <span>Total:</span>
                        <span>${calculateCartTotal()}</span>
                      </div>
                    </div>
                  )}

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Choose Your Payment Option</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Select a payment plan that works best for your budget
                    </p>

                    <RadioGroup
                      defaultValue="upfront"
                      onValueChange={setPaymentOption}
                      className="mt-4 grid gap-4 sm:grid-cols-3"
                    >
                      <div
                        className={`flex cursor-pointer items-start space-x-3 rounded-lg border p-4 transition-colors hover:bg-muted/50 ${paymentOption === "upfront" ? "border-primary bg-primary/5" : ""}`}
                      >
                        <RadioGroupItem value="upfront" id="upfront" className="mt-1" />
                        <div className="space-y-2">
                          <Label htmlFor="upfront" className="text-base font-medium">
                            Pay Upfront
                          </Label>
                          <p className="text-sm text-muted-foreground">Full payment with 10% discount</p>
                          <p className="font-medium text-primary">
                            ${Math.round(calculateCartTotal() * 0.9)}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex cursor-pointer items-start space-x-3 rounded-lg border p-4 transition-colors hover:bg-muted/50 ${paymentOption === "monthly" ? "border-primary bg-primary/5" : ""}`}
                      >
                        <RadioGroupItem value="monthly" id="monthly" className="mt-1" />
                        <div className="space-y-2">
                          <Label htmlFor="monthly" className="text-base font-medium">
                            Pay Monthly
                          </Label>
                          <p className="text-sm text-muted-foreground">Split into 2 monthly payments</p>
                          <p className="font-medium text-primary">
                            ${Math.round(calculateCartTotal() / 2)}/month
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex cursor-pointer items-start space-x-3 rounded-lg border p-4 transition-colors hover:bg-muted/50 ${paymentOption === "weekly" ? "border-primary bg-primary/5" : ""}`}
                      >
                        <RadioGroupItem value="weekly" id="weekly" className="mt-1" />
                        <div className="space-y-2">
                          <Label htmlFor="weekly" className="text-base font-medium">
                            Pay Weekly
                          </Label>
                          <p className="text-sm text-muted-foreground">Split into 4 weekly payments</p>
                          <p className="font-medium text-primary">
                            ${Math.round(calculateCartTotal() / 4)}/week
                          </p>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleStartOver}>
                  Back to Packages
                </Button>
                <Button onClick={handleProceedToPayment}>Proceed to Payment</Button>
              </CardFooter>
            </Card>
          )}

          {customizing && !showPayment && !purchaseComplete && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Customize Your Package</CardTitle>
                    <CardDescription>Tailor your therapy package to meet your specific needs</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setCustomizing(false)}>
                    Back
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="focus-area">Area of Focus</Label>
                    <Select defaultValue="speech">
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select focus area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="speech">Speech & Language</SelectItem>
                        <SelectItem value="motor">Motor Skills</SelectItem>
                        <SelectItem value="cognitive">Cognitive Development</SelectItem>
                        <SelectItem value="social">Social-Emotional</SelectItem>
                        <SelectItem value="sensory">Sensory Processing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="session-frequency">Session Frequency</Label>
                    <Select defaultValue="weekly">
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly (Recommended)</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="session-length">Session Length</Label>
                    <Select defaultValue="45">
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes (Recommended)</SelectItem>
                        <SelectItem value="60">60 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget Constraints</Label>
                    <div className="mt-1">
                      <Input type="range" min="50" max="300" step="10" defaultValue="150" className="w-full" />
                      <div className="mt-2 flex justify-between text-sm">
                        <span>$50</span>
                        <span className="font-medium">$150/month</span>
                        <span>$300</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="font-medium">Recommended Package Based on Your Selections</h3>
                    <div className="mt-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Focus Area:</span>
                        <span className="text-sm font-medium">Speech & Language</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Sessions:</span>
                        <span className="text-sm font-medium">Weekly, 45 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Specialist:</span>
                        <span className="text-sm font-medium">Speech-Language Pathologist</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-medium">Monthly Cost:</span>
                        <span className="font-medium">$150</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setCustomizing(false)}>
                  Back
                </Button>
                <Button onClick={handleProceedToPayment}>Proceed to Payment</Button>
              </CardFooter>
            </Card>
          )}

          {showPayment && !purchaseComplete && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Payment</CardTitle>
                    <CardDescription>Complete your payment to activate your therapy package</CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setShowPayment(false)
                      if (customizing) {
                        setCustomizing(true)
                      }
                    }}
                  >
                    Back
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="font-medium">Order Summary</h3>
                    
                    {cart.length > 0 ? (
                      <div className="mt-4 space-y-2">
                        {cart.map((pkgId, index) => {
                          const allPackages = getAllPackages();
                          const pkg = allPackages.find(p => p.id === pkgId);
                          return pkg ? (
                            <div key={pkgId} className="flex justify-between py-1">
                              <span className="text-sm text-muted-foreground">{pkg.name}:</span>
                              <span className="text-sm font-medium">${pkg.price}</span>
                            </div>
                          ) : null;
                        })}
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Payment Option:</span>
                          <span className="text-sm font-medium">
                            {paymentOption === 'upfront' ? 'Pay Upfront (10% off)' : 
                             paymentOption === 'monthly' ? 'Monthly Payments' : 'Weekly Payments'}
                          </span>
                        </div>
                        
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-medium">Total:</span>
                          <span className="font-medium">
                            {paymentOption === 'upfront' 
                              ? `$${Math.round(calculateCartTotal() * 0.9)} (Saved $${Math.round(calculateCartTotal() * 0.1)})`
                              : paymentOption === 'monthly'
                                ? `$${calculateCartTotal()} ($${Math.round(calculateCartTotal() / 2)}/month × 2)`
                                : `$${calculateCartTotal()} ($${Math.round(calculateCartTotal() / 4)}/week × 4)`
                            }
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Package:</span>
                          <span className="text-sm font-medium">
                            {customizing
                              ? "Customized Package"
                              : currentPackages.find((p) => p.id === selectedPackage)?.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Billing Cycle:</span>
                          <span className="text-sm font-medium">Monthly</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-medium">Total:</span>
                          <span className="font-medium">
                            ${customizing ? "150" : currentPackages.find((p) => p.id === selectedPackage)?.price}/month
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <Tabs defaultValue="card">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="card">Credit Card</TabsTrigger>
                      <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
                    </TabsList>
                    <TabsContent value="card" className="space-y-4">
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="name">Name on Card</Label>
                          <Input id="name" placeholder="John Doe" />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="bank" className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Bank Transfer Details</h3>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Bank Name:</span>
                            <span className="text-sm font-medium">Example Bank</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Account Name:</span>
                            <span className="text-sm font-medium">Onesti Therapy Services</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Account Number:</span>
                            <span className="text-sm font-medium">1234567890</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Routing Number:</span>
                            <span className="text-sm font-medium">987654321</span>
                          </div>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">
                          Please include your name and "Therapy Package" in the transfer description.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handleCompletePurchase}>
                  <CreditCard className="mr-2 h-4 w-4" /> Complete Purchase
                </Button>
              </CardFooter>
            </Card>
          )}

          {purchaseComplete && (
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Purchase Complete!</CardTitle>
                <CardDescription>Your therapy package has been activated successfully</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-muted p-4">
                  <div className="space-y-3">
                    {cart.length > 1 ? (
                      <>
                        <h4 className="font-medium">Purchased Packages:</h4>
                        {cart.map((pkgId, index) => {
                          const allPackages = getAllPackages();
                          const pkg = allPackages.find(p => p.id === pkgId);
                          return pkg ? (
                            <div key={pkgId} className="flex justify-between">
                              <span className="text-sm text-muted-foreground">{pkg.name}:</span>
                              <span className="text-sm font-medium">${pkg.price}</span>
                            </div>
                          ) : null;
                        })}
                      </>
                    ) : (
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Package:</span>
                        <span className="text-sm font-medium">
                          {customizing
                            ? "Customized Package"
                            : currentPackages.find((p) => p.id === selectedPackage)?.name}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Billing Cycle:</span>
                      <span className="text-sm font-medium">
                        {paymentOption === 'upfront' 
                          ? 'One-time Payment (10% discount applied)' 
                          : paymentOption === 'monthly'
                            ? 'Monthly (2 payments)'
                            : 'Weekly (4 payments)'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Next Billing Date:</span>
                      <span className="text-sm font-medium">
                        {paymentOption === 'upfront' 
                          ? 'N/A (Paid in full)' 
                          : new Date(Date.now() + (paymentOption === 'monthly' ? 30 : 7) * 24 * 60 * 60 * 1000)
                              .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-medium">Total Amount:</span>
                      <span className="font-medium">
                        ${paymentOption === 'upfront' 
                          ? Math.round(calculateCartTotal() * 0.9)
                          : calculateCartTotal()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    A confirmation email has been sent to your registered email address with all the details.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Your first therapy session will be scheduled soon. Please check your dashboard for updates.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 sm:flex-row">
                <Button asChild className="w-full">
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
                <Button variant="outline" className="w-full" onClick={handleStartOver}>
                  Explore Other Packages
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>

      <Dialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Package Selection</DialogTitle>
            <DialogDescription>
              You've selected the {packageToConfirm && getPackagesByCategory().find(p => p.id === packageToConfirm)?.name} package.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-2">Would you like to proceed to checkout or add more packages to your cart?</p>
            {cart.length > 0 && (
              <div className="mt-4 p-3 bg-muted rounded-md">
                <p className="font-medium">Current Cart: {cart.length} package(s)</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {cart.map((pkgId, index) => {
                    const allPackages = getAllPackages();
                    const pkg = allPackages.find(p => p.id === pkgId);
                    return (
                      <li key={index} className="flex justify-between">
                        <span>{pkg?.name || 'Package'}</span>
                        <span>${pkg?.price || 0}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={addToCartOnly} className="sm:order-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button onClick={confirmPackageSelection} className="sm:order-2">
              Proceed to Checkout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

