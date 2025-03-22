"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, Check, CreditCard, Calendar } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CheckoutModalProps {
  assessmentName: string
  price: string
  children: React.ReactNode
}

export function CheckoutModal({ assessmentName, price, children }: CheckoutModalProps) {
  const [step, setStep] = useState<"details" | "payment" | "confirmation">("details")
  const [loading, setLoading] = useState(false)

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false)
      setStep("confirmation")
    }, 1500)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        {step === "details" && (
          <>
            <DialogHeader>
              <DialogTitle>Book Assessment</DialogTitle>
              <DialogDescription>
                {assessmentName} - {price}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitDetails} className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" required />
              </div>
              <div className="space-y-2">
                <Label>Preferred contact method</Label>
                <RadioGroup defaultValue="email">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="contact-email" />
                    <Label htmlFor="contact-email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="contact-phone" />
                    <Label htmlFor="contact-phone">Phone</Label>
                  </div>
                </RadioGroup>
              </div>
              <Button type="submit" className="w-full">
                Continue to Payment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </>
        )}

        {step === "payment" && (
          <>
            <DialogHeader>
              <DialogTitle>Payment Details</DialogTitle>
              <DialogDescription>
                {assessmentName} - {price}
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="card" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="card">Credit Card</TabsTrigger>
                <TabsTrigger value="paypal">PayPal</TabsTrigger>
              </TabsList>
              <TabsContent value="card">
                <form onSubmit={handleSubmitPayment} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-name">Name on card</Label>
                    <Input id="card-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card number</Label>
                    <div className="relative">
                      <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                      <CreditCard className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry date</Label>
                      <div className="relative">
                        <Input id="expiry" placeholder="MM/YY" required />
                        <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Processing..." : "Complete Payment"}
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="paypal">
                <div className="pt-4 space-y-4">
                  <p className="text-sm text-gray-500">You will be redirected to PayPal to complete your payment.</p>
                  <Button
                    onClick={handleSubmitPayment}
                    className="w-full bg-[#0070ba] hover:bg-[#005ea6]"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Pay with PayPal"}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}

        {step === "confirmation" && (
          <>
            <DialogHeader>
              <DialogTitle>Booking Confirmed</DialogTitle>
              <DialogDescription>Thank you for booking {assessmentName}</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center py-6 space-y-4">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium">Payment Successful</h3>
                <p className="text-sm text-gray-500 mt-1">We've sent a confirmation email with all the details.</p>
              </div>
              <div className="border rounded-lg p-4 w-full bg-gray-50">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">Assessment:</span>
                  <span className="text-sm font-medium">{assessmentName}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">Amount:</span>
                  <span className="text-sm font-medium">{price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Transaction ID:</span>
                  <span className="text-sm font-medium">
                    ONS-{Math.random().toString(36).substring(2, 10).toUpperCase()}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Our team will contact you within 24 hours to schedule your assessment.
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

