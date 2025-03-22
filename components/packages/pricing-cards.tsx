import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, User, Home, Building } from "lucide-react"

export default function PricingCards() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Choose Your Plan</h2>
          <p className="mt-4 text-lg text-gray-600">Select the package that best fits your child's needs</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Single Session */}
          <Card className="border">
            <CardHeader>
              <div className="flex items-center mb-2">
                <User className="h-6 w-6 text-onesti-blue mr-2" />
                <CardTitle>Single Session</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-4xl font-bold">$90</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">What's included</h3>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-onesti-purple mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Affordable start to your counseling journey.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-onesti-purple mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">1 Counseling Session</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-onesti-purple hover:bg-onesti-purple/90" asChild>
                <Link href="/consultation?plan=single">Choose Plan</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Session Bundle */}
          <Card className="border-0 bg-onesti-purple text-white">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Home className="h-6 w-6 text-white mr-2" />
                <CardTitle className="text-white">Session Bundle</CardTitle>
              </div>
              <div className="inline-block bg-onesti-purple/40 text-white px-3 py-1 rounded-md text-sm">Popular</div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-4xl font-bold">$270</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">What's included</h3>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                    <span className="text-sm">Flexible scheduling and payment options.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                    <span className="text-sm">3 Counseling Sessions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                    <span className="text-sm">Scheduled At The Client's Convenience</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-onesti-lightblue hover:bg-onesti-lightblue/90 text-white" asChild>
                <Link href="/consultation?plan=bundle">Choose Plan</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Extended Support */}
          <Card className="border">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Building className="h-6 w-6 text-onesti-blue mr-2" />
                <CardTitle>Extended Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-4xl font-bold">$480</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">What's included</h3>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-onesti-purple mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Customizable frequency and scheduling.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-onesti-purple mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">6 Counseling Sessions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-onesti-purple mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Brief Weekly Check-ins Via Email</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-onesti-purple hover:bg-onesti-purple/90" asChild>
                <Link href="/consultation?plan=extended">Choose Plan</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            Looking for a Customized Plan?{" "}
            <Link href="/contact" className="text-onesti-purple font-medium">
              Contact Us!
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

