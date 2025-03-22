import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, MessageCircle, Share2, User } from "lucide-react"

// This would normally come from a database or CMS
const posts = [
  {
    id: 1,
    slug: "autism-spectrum-disorder",
    title: "Autism Spectrum Disorder: Signs, Symptoms, and Support",
    description:
      "Learn about the early signs of autism, diagnostic process, and how to support your child's development with effective interventions.",
    date: "Mar 16, 2023",
    category: { id: "autism", name: "Autism" },
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_404443582-g8BdYp49g78Tiv5oaNjVkKK40LGK9Y.jpeg",
    author: {
      name: "Dr. Sarah Johnson",
      role: "Autism Specialist",
      imageUrl: "/placeholder.svg?height=80&width=80",
    },
    content: `
      <p>Autism Spectrum Disorder (ASD) is a complex neurodevelopmental condition that affects how a person perceives and interacts with the world around them. Early identification and intervention are crucial for supporting optimal development in children with autism.</p>
      
      <h2>Early Signs of Autism</h2>
      
      <p>While every child develops at their own pace, there are certain red flags that may indicate autism spectrum disorder:</p>
      
      <ul>
        <li>Limited or no eye contact during interactions</li>
        <li>Delayed speech or language skills</li>
        <li>Repetitive behaviors or movements (stimming)</li>
        <li>Intense focus on specific interests</li>
        <li>Difficulty with social interactions and understanding social cues</li>
        <li>Sensory sensitivities (to sounds, lights, textures, etc.)</li>
        <li>Resistance to changes in routine</li>
      </ul>
      
      <h2>The Diagnostic Process</h2>
      
      <p>If you notice signs of autism in your child, the first step is to speak with your pediatrician. They may refer you to specialists who can conduct a comprehensive evaluation, which typically includes:</p>
      
      <ul>
        <li>Developmental assessments</li>
        <li>Behavioral observations</li>
        <li>Parent interviews</li>
        <li>Standardized screening tools</li>
      </ul>
      
      <p>A diagnosis is usually made by a team of professionals, including developmental pediatricians, child psychologists, and speech-language pathologists.</p>
      
      <h2>Evidence-Based Interventions</h2>
      
      <p>There are many effective approaches to supporting children with autism. Early intervention services may include:</p>
      
      <ul>
        <li>Applied Behavior Analysis (ABA)</li>
        <li>Speech and language therapy</li>
        <li>Occupational therapy</li>
        <li>Social skills training</li>
        <li>Parent training and education</li>
      </ul>
      
      <p>The most effective intervention plans are individualized to address each child's unique strengths and challenges.</p>
      
      <h2>Supporting Your Child at Home</h2>
      
      <p>As a parent, you play a crucial role in your child's development. Some strategies that can help include:</p>
      
      <ul>
        <li>Establishing consistent routines</li>
        <li>Using visual supports and schedules</li>
        <li>Creating a sensory-friendly environment</li>
        <li>Following your child's lead in play</li>
        <li>Celebrating small achievements</li>
        <li>Connecting with other families for support</li>
      </ul>
      
      <p>Remember that every child with autism is unique, with their own strengths, challenges, and personality. With the right support, children with autism can thrive and reach their full potential.</p>
    `,
    relatedAssessment: {
      id: "developmental",
      name: "Developmental Checklist",
      description: "Evaluate your child's developmental milestones with our comprehensive assessment.",
    },
  },
  {
    id: 2,
    slug: "healthy-sleep-routines",
    title: "Establishing Healthy Sleep Routines for Children",
    description:
      "Discover effective strategies to establish consistent sleep patterns and overcome common bedtime challenges for children of all ages.",
    date: "Feb 12, 2023",
    category: { id: "daily-routines", name: "Daily Routines" },
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_205813503%20%281%29-WM0lWmFovXLbeQUUpcSN4R3jdzaw2t.jpeg",
    author: {
      name: "Dr. Emma Rodriguez",
      role: "Child Development Specialist",
      imageUrl: "/placeholder.svg?height=80&width=80",
    },
    content: `
      <p>Quality sleep is essential for children's physical health, emotional well-being, and cognitive development. Yet many families struggle with bedtime battles and sleep disruptions. Establishing healthy sleep routines can help children get the rest they need to thrive.</p>
      
      <h2>The Importance of Sleep for Development</h2>
      
      <p>Sleep plays a crucial role in:</p>
      
      <ul>
        <li>Brain development and learning</li>
        <li>Emotional regulation and mood</li>
        <li>Physical growth and immune function</li>
        <li>Attention and behavior during the day</li>
      </ul>
      
      <p>Children who consistently get adequate sleep are better able to focus, regulate their emotions, and engage in learning activities.</p>
      
      <h2>How Much Sleep Do Children Need?</h2>
      
      <p>Sleep requirements vary by age:</p>
      
      <ul>
        <li>Infants (4-12 months): 12-16 hours (including naps)</li>
        <li>Toddlers (1-2 years): 11-14 hours (including naps)</li>
        <li>Preschoolers (3-5 years): 10-13 hours (including naps)</li>
        <li>School-age children (6-12 years): 9-12 hours</li>
        <li>Teenagers (13-18 years): 8-10 hours</li>
      </ul>
      
      <h2>Creating an Effective Bedtime Routine</h2>
      
      <p>A consistent bedtime routine signals to your child that it's time to wind down and prepare for sleep. An effective routine might include:</p>
      
      <ul>
        <li>Setting a consistent bedtime and wake-up time</li>
        <li>Dimming lights and reducing screen time 1-2 hours before bed</li>
        <li>Calming activities like a warm bath, gentle massage, or quiet play</li>
        <li>Reading books or telling stories</li>
        <li>Creating a comfortable sleep environment (cool, dark, and quiet)</li>
      </ul>
      
      <h2>Addressing Common Sleep Challenges</h2>
      
      <p><strong>Bedtime Resistance:</strong> Be consistent with limits while acknowledging feelings. "I understand you want to play more, but it's time for sleep now. We can play again tomorrow."</p>
      
      <p><strong>Night Wakings:</strong> Keep interactions brief and boring during night wakings. Provide reassurance without creating new sleep associations that require your presence.</p>
      
      <p><strong>Early Rising:</strong> Use room-darkening shades and consider a toddler clock that visually shows when it's time to get up.</p>
      
      <p><strong>Nightmares and Night Terrors:</strong> Comfort your child after nightmares, but know that during night terrors, children are not fully awake and typically won't remember the episode in the morning.</p>
      
      <h2>When to Seek Help</h2>
      
      <p>Consider consulting with a healthcare provider if:</p>
      
      <ul>
        <li>Your child snores loudly or has pauses in breathing during sleep</li>
        <li>Sleep problems persist despite consistent routines</li>
        <li>Sleep issues significantly impact daytime functioning</li>
        <li>You notice unusual behaviors during sleep</li>
      </ul>
      
      <p>Remember that establishing healthy sleep habits is a process that requires patience and consistency. With time and the right approach, most children can develop the skills they need for restful sleep.</p>
    `,
    relatedAssessment: {
      id: "sleep",
      name: "Peaceful ZZ",
      description: "Evaluate your child's sleep patterns and get personalized recommendations.",
    },
  },
]

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug) || posts[0]

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-primary">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/resources" className="text-gray-500 hover:text-primary">
            Resources
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/resources/blog" className="text-gray-500 hover:text-primary">
            Blog
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-primary">{post.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

            <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author.name}
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2" />0 Comments
              </div>
            </div>

            <div className="mb-8 relative aspect-[16/9]">
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>

            <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Related Assessment CTA - Moved below article content */}
            <Card className="bg-primary/5 border-primary/20 mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">Take the {post.relatedAssessment.name}</h3>
                    <p className="text-gray-700 mb-4">{post.relatedAssessment.description}</p>
                    <Button asChild>
                      <Link href={`/assessments?type=${post.relatedAssessment.id}`}>
                        Start Assessment <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="md:w-1/3 relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Assessment"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Author Bio */}
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg mb-8">
              <Image
                src={post.author.imageUrl || "/placeholder.svg"}
                alt={post.author.name}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">{post.author.name}</h3>
                <p className="text-gray-500">{post.author.role}</p>
                <p className="text-sm mt-2">
                  Specialist with extensive experience in child development and pediatric care.
                </p>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex items-center justify-between p-4 border rounded-lg mb-8">
              <span className="font-medium">Share this article:</span>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 rounded-md hover:bg-gray-100">
                    <span>Child Development</span>
                    <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">5</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-md hover:bg-gray-100">
                    <span>Daily Routines</span>
                    <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">4</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-md hover:bg-gray-100">
                    <span>Behavior</span>
                    <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">3</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-md hover:bg-gray-100">
                    <span>Autism</span>
                    <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">3</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-md hover:bg-gray-100">
                    <span>Parenting</span>
                    <span className="text-sm bg-gray-200 px-2 py-0.5 rounded-full">2</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Latest News */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Latest News</h3>
                <div className="space-y-4">
                  {posts.map((relatedPost) => (
                    <div key={relatedPost.id} className="flex gap-3">
                      <div className="flex-shrink-0">
                        <Image
                          src={relatedPost.imageUrl || "/placeholder.svg"}
                          alt={relatedPost.title}
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">{relatedPost.date}</div>
                        <Link
                          href={`/resources/blog/${relatedPost.slug}`}
                          className="font-medium text-sm hover:text-primary"
                        >
                          {relatedPost.title}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Assessment CTA */}
            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Free Assessment</h3>
                <p className="mb-4">
                  Take our free developmental assessment to identify potential areas of concern for your child.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/assessments">Start Assessment</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

