import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center py-16 md:py-24">
          {/* Left content */}
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Get <span className="text-onesti-purple">The Right Support</span> For
              <br />
              Your Child's Unique Needs.
            </h1>
            <p className="text-xl text-gray-600 mb-8">Start your journey with ONESTI</p>
            <p className="text-xl font-medium text-onesti-purple mb-6">Unlock personalized care designed specifically for your child's unique needs.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-onesti-purple text-white hover:bg-onesti-lightblue hover:text-white hover:border-onesti-lightblue"
              >
                <Link href="/assessments">Start Assessment</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-onesti-purple border-onesti-purple hover:bg-onesti-lightblue hover:text-white hover:border-onesti-lightblue"
              >
                <Link href="/consultation">Free Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="md:w-1/2">
            <div className="relative h-[400px] md:h-[500px] w-full">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Mother and child together"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

