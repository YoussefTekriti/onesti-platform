import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// This would typically come from a database, but for now we'll use the same data
const teamMembers = [
  {
    id: 1,
    name: "Abeer Atiyeh",
    role: "Founder & Executive Director",
    bio: "MA in Special Education, BA in Elementary Education, Special Education Diploma, minor in psychology, and Board Certified Telepractice Specialist. With extensive experience in education and early intervention, Abeer co-founded the first early intervention center in Lebanon and has worked with international organizations like UNICEF on inclusive education initiatives.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Special Education", "Early Intervention", "Inclusive Education"],
    education: "MA in Special Education, BA in Elementary Education",
    experience: "15+ years",
    fullBio: `After graduating with my BA, I worked as a Grade 1 homeroom teacher. While teaching, I received my Special Education diploma and started a Special Education department at the school.

I co-founded the first early intervention center in Lebanon, and as a service coordinator I successfully developed operations, worked on capacity building, and coordinated five therapy departments, each in its own entity and as a collaborative interdisciplinary team. In addition to initiating a home visiting department, which was also an innovative service in Lebanon. As head of the early intervention unit, I successfully developed the operations and coordinated four additional specialty departments: medical intervention, nutrition, counseling, and social intervention that were merged to the early intervention unit.

I gained valuable experience working at an international non profit organization. I provided capacity building to UNICEF partners on Inclusive Education. Performed mentoring visits to UNICEF implementing partners. Monitored activities in the centers, and communities in regards to inclusive education. Coordinated with other international and local organizations, local government and other stakeholders in the area of education, disability, and child protection.

With ONESTI, I aim for a far more challenging endeavor, and that is, for specialized intervention services to reach every child and family. Via advanced technology and high professional standards, we can change lives for the better across the globe. Yes I am a firm believer in serving humanity and this is at the core of my existence and that of ONESTI.

I'm constantly thinking of ways we can raise the awareness of communities on the importance of intervention and ways to reach the families whose lives and their children's future can tremendously improve with provision of services.

To find balance and clear my head, I find peace in nature. I go on hikes, I contemplate its greatness and its intricacies. I am the mother of two boys, and despite all the success, this fact remains my life's biggest achievement and greatest joy.`,
    personalInterests: "Hiking, nature, spending time with family",
  },
  {
    id: 2,
    name: "Dr. Ahmad Oueini",
    role: "Head of the Diagnostic Unit",
    bio: "Doctorate in Education with concentration in psychological counseling, multiple Master's degrees in education and psychology. Licensed Educational Psychologist with certifications in various teaching methodologies. Author of textbooks and over 35 articles in international journals.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Educational Psychology", "Psychoeducational Assessment", "Learning Disabilities"],
    education: "Doctorate in Education, Multiple Master's degrees in Education and Psychology",
    experience: "20+ years",
    fullBio: `Licensed Educational Psychologist by the Ministry of Health (License #46511/3/2019)

Certified LiPS (Lindamood Phonemic Sequencing program) tutor
Certified in Simultaneous Multisensory Teaching (Canadian Dyslexia Centre)
Certified in Dunn & Dunn Learning Style (New York)
Certified in DALF-C2, highest level of French proficiency
President of Alphabete Learning Center for psychoeducational assessment, intervention and training. Associate professor of education and psychology at the Lebanese American University and former chairperson of the Department of Education.

Author of 2 English textbooks for grades 11 and 12: Insight and Stepping Stones. Author of over 35 articles published in international refereed journals and book chapters on topics ranging from war and stress, effective techniques of motivating students, environmentalism, career counseling, diglossia problems, learning style, and dyslexia in Arabic.

Teacher trainer on such topics as dyslexia, language skills, learning style, classroom management, anger management, decision-making, using humor in the classroom, increasing your child's IQ.

Regular on several TV and radio shows: MTV Alive, Zaven-Bonjourein 93.3 FM as an educational consultant on such topics as parenting skills, intelligence, school failure, learning difficulties, and study skills.`,
    personalInterests: "Music, reading, movies, traveling, and spending quality time with my twins Lucy and Steve",
  },
  {
    id: 3,
    name: "Mona Saab",
    role: "Head of the ABA Department",
    bio: "M.A., BCBA, ABA supervisor, workshop facilitator, and PCM instructor. With a background in education and counseling, Mona specializes in helping children acquire pre-academic/academic skills and developmental milestones, as well as replacing problem behavior with adaptive behavior.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Applied Behavior Analysis", "Functional Analysis", "Skill-Based Treatment"],
    education: "Master's degree in Counseling Children and Young People, BCBA Certification",
    experience: "12+ years",
    fullBio: `I hold a Bachelor's degree in English Language (American University of Beirut) and a Teaching Diploma with a dual emphasis in Early Childhood Education and Teaching Math & Science/Elementary (Lebanese American University). Following a spate of explosions and the 2006 war, having borne witness to the trauma that ensued, I pursued a Master's degree in Counseling Children and Young People (University of Nottingham). After stumbling upon the science of behavior/learning, I completed the BACB Course Sequence through FIT's online program, and became board certified in 2012.

I am now a Board Certified Behavior Analyst (BCBA), working with children (both neurotypical and those with special needs) and their families, to facilitate their acquisition of pre-academic/academic skills and developmental milestones, as well working on replacing problem behavior with adaptive behavior. I also offer workshops on various topics, ranging from functions of behavior to evidence-based approaches to the treatment of Autism Spectrum Disorder and other developmental disabilities. Moreover, I develop individual education plans/behavior protocols, and train/supervise family members, paraprofessionals, and RBT/BCaBA/BCBA candidates in their implementation.

I have, over the years, been implementing the Orton-Gillingham and other Science of Reading aligned approaches in working with students with Dyslexia/reading difficulties. I have also received training in such assessment/curriculum programs as VB-MAPP (Verbal Behavior Milestones Assessment and Placement Program), EFL (Essential for Living), and PEAK Training System, in addition to attending workshops related to such areas as pediatric feeding disorders and the functional analysis of problem behavior. I have received training in Dr Greg Hanley's Practical Functional Assessment (PFA) and Interview-Informed, Synthesized Contingency Analysis (IISCA), and was amongst the first in Lebanon to administer it (and subsequently develop Skill-Based Treatment of Problem Behavior). I am also a certified Professional Crisis Management (PCM) Instructor (PS).

In 2017, I co-founded the Association for Behavior Analysis – Lebanon (ABAL), the Lebanese chapter of the Association for Behavior Analysis International (ABAI). I was subsequently elected as ABAL's first President.`,
    personalInterests:
      "Reading, watching TV shows, eating sweets, spending time with friends, scuba diving, and being with my two daughters",
  },
  {
    id: 4,
    name: "Maritza Abou Halka",
    role: "Co-founder & Managing Partner",
    bio: 'Bachelor of Honors degree in Speech and Language Pathology. Certified therapist in Hanen "More Than Words" program and Certified TED therapist. With 22 years of experience, Maritza specializes in communication disorders in both adults and early childhood.',
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Speech-Language Pathology", "Communication Disorders", "Early Childhood Intervention"],
    education: "Bachelor of Honors in Speech and Language Pathology, Mini-MBA",
    experience: "22+ years",
    fullBio: `Throughout my career I have worked in both private and public sectors, with patients from all ages and diagnosis. I specialized in communication disorders both in adult and in early childhood, dedicating my practice to helping families and children who struggle to cope with demands of home and school, to overcome challenges in daily life.

I focused my ongoing professional development path, on strengthening my practical experience along with clinical supervision and project management which allowed me to manage a program for special needs children in my previous workplace. In my role as Technical Advisor of the speech and language department, I am determined to use my previous experience along with my recently obtained TOT certification, to lead the speech and language therapists team into the best practices available.

Our Life has become more technologically driven and I am excited to share my long experience through online telepractice, giving families access to information, assessment, guidance and therapy, through a comprehensive routine evidence-based approach.

Armed with my 22 years of experience in the field, my newly gained mini-MBA, and my personal experience as mother of 2 boys, I work alongside with the team to provide you with the best support we can.`,
    personalInterests: "Watching movies with my kids and eating chocolate",
  },
  {
    id: 5,
    name: "Lina Al Hussein",
    role: "Co-founder & Technical Advisor of Behavior Department",
    bio: "MA in Special Education, BA in Early Childhood Education, and specialized in behavior modification. Started as a Kindergarten teacher and developed expertise in early intervention and behavior therapy, working with children with disabilities and developmental delays.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Behavior Modification", "Early Intervention", "Special Education"],
    education: "MA in Special Education, BA in Early Childhood Education",
    experience: "10+ years",
    fullBio: `I started my career back in 2011 as a Kindergarten homeroom teacher. I found myself intrigued to know more about children with special needs, so I continued my MA in special education. Meanwhile, in 2014, I began my journey in early intervention. Working with children with disabilities and developmental delays enriched my experience and became a passion of mine. I worked in different settings such as day care centers, schools, home, and nonprofit organizations. The one thing I found to be common in the different settings was that behavioral challenges are a major barrier in children's progress across contexts. That's what inspired me to delve into the field of behavior intervention. So I decided to continue my career path as a behavior therapist. During this phase I had the chance to work in a multidisciplinary team whereI refined my skills under the supervision of a Board Certified Behavior Analyst, BCBA.

In addition to all my years of experience, I can say that one of my greatest learning opportunities was being a mother of two boys. Having my own family as my rock, played a significant role in my drive to help other families build healthy relationships and maintain a healthy family dynamic.

My workday is a joy, yet strenuous and that is why I end my day in my calm place, which is yoga. That is where I find peace and maintain my balance.`,
    personalInterests: "Yoga and spending time with family",
  },
  {
    id: 6,
    name: "Mireille Aalaeddine",
    role: "Co-founder & Technical Advisor of OT Department",
    bio: "Bachelor degree in Occupational therapy and a Masters degree in psychosomatic support. Specialized in sensory integration and Early Intervention. University Instructor, practicum supervisor, and certified feeding therapist.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Sensory Integration", "Early Intervention", "Pediatric Occupational Therapy"],
    education: "Bachelor in Occupational Therapy, Masters in Psychosomatic Support",
    experience: "12+ years",
    fullBio: `I started my career in occupational therapy working at an early intervention center, I also worked in a specialized school for special needs. I have provided numerous professional development training and participated in awareness campaigns in collaboration with different NGOs. I took part in establishing occupational therapy units at health care centers in different rural areas in Lebanon. This experience resulted in a shift in my life perspective. I learned the limitless opportunities that my field can provide in the service of not only individuals, but institutional change, and ultimately society.

I implemented this broad perspective in creating a pediatric occupational therapy intervention unit that reflected a progressive and comprehensive mode of service provision at an early intervention center.

After 12 years of cumulative experience and continuous development, I found that it was time to share my knowledge more extensively. At ONESTI, I will be able to use my expertise to serve any individual wherever they are and help them reach their fullest potential.

My work is not only a passion but I also consider it my favorite hobby. I will explain why… it's because a lot of what I do as an occupational therapist includes all types of art! I use my love for hand-crafts to customize technical aids.

I use my talent in design to adapt and modify the environment to suit every child. I am in my creative element when I create individualized sensory tools. So now you can see how I have a hobby for a job.`,
    personalInterests: "Hand-crafts, design, creating sensory tools",
  },
  {
    id: 7,
    name: "Marylynn Deeb",
    role: "Psychosocial Counselor",
    bio: "Bachelor degree in Psychology and Master's degree in Clinical psychology in progress. Started as a behavioral technician working with children on the autism spectrum, then worked as a support teacher for children with special needs.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Behavioral Support", "Mental Health Advocacy", "Child Psychology"],
    education: "BA in Psychology, MA in Clinical Psychology (in progress)",
    experience: "5+ years",
    fullBio: `I started my career out as a behavioral technician, working with children on the autism spectrum. After graduating with a BA degree in psychology, I worked as a support teacher for children with special needs where I was fortunate enough to work with children of different ages, needs, family dynamics and cultural backgrounds.

I entered this field with a big passion for psychology and advocacy for mental health, that is why the most rewarding gift in and by itself is working with families to guide and help better their quality of life.

Outside the world of psychology, I devote time to a cause that is dear to my heart which is animal welfare. In my free time you would find me rescuing stray puppies or just chilling at home with my two furry friends.`,
    personalInterests: "Animal welfare, rescuing stray puppies, spending time with pets",
  },
  {
    id: 8,
    name: "Hazar Khattar",
    role: "Behavior Therapist",
    bio: "Bachelor degree in Education and Diploma in Special Education. Started as a kindergarten teacher, then became a curriculum coordinator and head of kindergarten division before specializing in behavior modification.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Behavior Modification", "Parenting Guidance", "Special Education"],
    education: "Bachelor in Education, Diploma in Special Education",
    experience: "10+ years",
    fullBio: `I started my career as a kindergarten teacher and later as a curriculum coordinator and head of the kindergarten division. I then moved to work in the field of Special education and became specialized in Behavior modification.

I attended many courses in international institutes to consolidate my expertise in the field of parenting guide and child behavior modification.

I recently became a trainer who teaches mothers how to deal with their children's various impressions and behaviors.

Now … after 10 fruitful years of working with children, I have the ultimate confidence to fulfill my mission.`,
    personalInterests: "Training parents on child behavior management",
  },
  {
    id: 9,
    name: "Cora Bassil",
    role: "Speech and Language Therapist",
    bio: "Diploma and Master's degree in Speech and Language Therapy with over 5 years of clinical experience. Specializes in Family Coaching and Mathematical Cognition.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Speech Therapy", "Family Coaching", "Mathematical Cognition"],
    education: "Master's degree in Speech and Language Therapy",
    experience: "5+ years",
    fullBio: `It's me Cora Bassil, a dedicated speech and language therapist with a strong passion for making a difference in people's lives. I hold a diploma and a master's degree in Speech and Language Therapy. I have over 5 years of clinical experience. I specialize in Family Coaching and Mathematical Cognition.

My career is built on blending intellectual insight with compassionate care, aiming to significantly impact my clients' communication and overall well-being. I have observed the critical role that parents play in therapy, often becoming key partners in the process. This experience has driven me to join the ONESTI team, where I collaborate with other professionals to provide exceptional support and care.

Outside of my professional work, I used to serve as an EMT and an ambulance driver at the Lebanese Red Cross.

My commitment to my field and my community fuels my ongoing dedication to helping those I serve.`,
    personalInterests: "Previously served as an EMT and ambulance driver at the Lebanese Red Cross",
  },
  {
    id: 10,
    name: "Mireille Der Arakelian",
    role: "Educational Psychologist",
    bio: "Bachelor's degree in Psychology and a Master's degree in Educational Psychology. Worked as a support teacher and currently works as a school psychologist delivering character education sessions and providing consultations.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Educational Psychology", "Character Education", "Career Counseling"],
    education: "Bachelor's in Psychology, Master's in Educational Psychology",
    experience: "5+ years",
    fullBio: `After I received my BA in psychology, I worked as a support teacher for students aged between 5 and 8 where I taught different subjects for 5 years at Lebanon Evangelical School for Boys and Girls.

Currently I'm working as a school psychologist at AGBU Schools in Lebanon where I deliver sessions related to character education, provide consultations to teachers, parents, and students, guide students in deciding their future pathways through career counseling, and observe students in different settings upon teachers' requests to make the necessary arrangements regarding each student.

I chose educational psychology because of my passion for improving the learning experience of students by making a meaningful impact on their academic and emotional well-being. My goal is to create inclusive and engaging environments that help students reach their full potential. While my profession brings me a lot of fulfillment, I do enjoy basketball as well as playing the piano during my free time.`,
    personalInterests: "Basketball and playing the piano",
  },
]

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const memberId = Number.parseInt(params.id)
  const member = teamMembers.find((m) => m.id === memberId)

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Team member not found</h1>
          <p className="mt-4">The team member you're looking for doesn't exist.</p>
          <Button asChild className="mt-6">
            <Link href="/about/team">Back to Team</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/about" className="text-gray-500 hover:text-gray-700">
                About
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/about/team" className="text-gray-500 hover:text-gray-700">
                Our Team
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-blue-600">{member.name}</span>
            </li>
          </ol>
        </nav>

        <Button variant="outline" className="mb-8" asChild>
          <Link href="/about/team">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Team
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Image and Quick Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="aspect-square relative rounded-xl overflow-hidden mb-6">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>

              <h1 className="text-2xl font-bold text-gray-900">{member.name}</h1>
              <p className="text-lg text-primary mb-4">{member.role}</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Education</h3>
                  <p className="text-gray-600">{member.education}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Experience</h3>
                  <p className="text-gray-600">{member.experience}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Specialties</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {member.specialties.map((specialty) => (
                      <span key={specialty} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Personal Interests</h3>
                  <p className="text-gray-600">{member.personalInterests}</p>
                </div>

                <Button className="w-full mt-6" asChild>
                  <Link href={`/consultation?specialist=${member.id}`}>Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bio and Details */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About {member.name}</h2>

              {member.fullBio.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Related Team Members */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Team Members</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {teamMembers
                  .filter((m) => m.id !== member.id)
                  .slice(0, 3)
                  .map((relatedMember) => (
                    <Link key={relatedMember.id} href={`/team/${relatedMember.id}`} className="group block">
                      <div className="aspect-square relative rounded-lg overflow-hidden mb-3">
                        <Image
                          src={relatedMember.image || "/placeholder.svg"}
                          alt={relatedMember.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {relatedMember.name}
                      </h4>
                      <p className="text-sm text-gray-600">{relatedMember.role}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

