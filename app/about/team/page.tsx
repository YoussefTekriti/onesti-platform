import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
    id: 11,
    name: "Katia Hazoury",
    role: "Co-founder & Technical Advisor of Academic Department",
    bio: "MA in Special Education, Reading Specialist, Teacher Trainer, Educational Evaluator, Published Researcher and Author. With over 20 years of experience in education, specializing in educational administration, team leadership, program development, and academic research.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Special Education", "Reading Specialist", "Educational Administration"],
    education: "MA in Special Education",
    experience: "20+ years",
    fullBio: `Co-founder and Technical Advisor of the academic department at ONESTI Global, MA in special educator, reading specialist, teacher trainer, educational evaluator, teacher, published researcher and author.

With more than 20 years of experience in the field of education, I am adept in educational administration, team leadership, proposal and report writing, program evaluation, curricular and program development, academic research translation and book writing.

Worked closely with school administrators, teachers, coordinators, parents, and specialists (physicians, psychologists, speech therapists, and OTs).

Moreover, while my on-the-job experience has afforded me a well-rounded skill set, including analytical and problem solving abilities, I am known to empower my teams, and motivate them to give their best in the face of constraints and crises.

Highlights of my achievements include:

Created the remedial reading program My First Letters, a pioneering tool to help struggling readers in Arabic
Established a special education department at schools
Adapted to Arabic a 162 page online course to initiate teachers and parents on the basics of dyslexia
Founded centers to assess and remediate students with learning disabilities
Managed special education departments in various schools in Lebanon and Arab countries
Co-authored 3 published research articles
Taught a graduate course at a prestigious university in Lebanon
Wrote countless reports, program evaluations, proposals, and funding requests
In addition to my extensive work experience, I have a solid educational foundation and a passion for languages and helping others, from children to adults.

I am a dynamic, detail-oriented, a go-getter, and a humanist.

I am also a mother of two kids and I enjoy cooking and walking. People say that I am funny. You can only discover that during my sessions.`,
    personalInterests: "Cooking, walking, spending time with my two children",
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

In addition to all my years of experience, I can say that one of my greatest learning opportunities was being a mother of two boys. Having my own family as my rock, played a significant role in my drive to help other families build healthy relationships and maintain a healthy family dynamic.`,
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

My work is not only a passion but I also consider it my favorite hobby. I will explain why… it's because a lot of what I do as an occupational therapist includes all types of art! I use my love for hand-crafts to customize technical aids.`,
    personalInterests: "Hand-crafts, design, creating sensory tools",
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
    id: 7,
    name: "Marylynn Deeb",
    role: "Psychosocial Counselor",
    bio: "Bachelor degree in Psychology and Master's degree in Clinical psychology in progress. Started as a behavioral technician working with children on the autism spectrum, then worked as a support teacher for children with special needs.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Behavioral Support", "Mental Health Advocacy", "Child Psychology"],
    education: "BA in Psychology, MA in Clinical Psychology (in progress)",
    experience: "5+ years",
    fullBio: `I started my career out as a behavioral technician, working with children on the autism spectrum. After graduating with a BA degree in psychology, I worked as a support teacher for children with special needs where I was fortunate enough to work with children of different ages, needs, family dynamics and cultural backgrounds.

I entered this field with a big passion for psychology and advocacy for mental health, that is why the most rewarding gift in and by itself is working with families to guide and help better their quality of life.`,
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

Outside of my professional work, I used to serve as an EMT and an ambulance driver at the Lebanese Red Cross.`,
    personalInterests: "Emergency medical services, ambulance driving",
  },
  {
    id: 10,
    name: "Mireille Der Arakelian",
    role: "Educational Psychologist",
    bio: "MA in Clinical Psychology in progress and a BA in Psychology. Started career as a pre-school teacher, then became a shadow teacher for special needs students, and now specializes in educational psychology.",
    image: "/placeholder.svg?height=400&width=400",
    specialties: ["Educational Psychology", "ADHD Support", "Cognitive Assessment"],
    education: "BA in Psychology, MA in Clinical Psychology (in progress)",
    experience: "6+ years",
    fullBio: `I started my career as a pre-school teacher and fell in love with children, I later worked as a shadow teacher for special needs students.

With a passion for psychology, I continued my education and am now in the process of completing my Master's degree in Clinical Psychology.

I conducted multiple workshops in my community on a variety of topics including: dealing with ADHD, and how to talk about puberty with your children.`,
    personalInterests: "Community education, conducting workshops on psychological topics",
  },
]

export default function TeamPage() {
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
              <span className="text-blue-600">Our Team</span>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Team</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our team of experienced specialists dedicated to supporting your child's development journey
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-4">{member.bio}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span key={specialty} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Education:</h4>
                  <p className="text-sm text-gray-600">{member.education}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Experience:</h4>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/team/${member.id}`}>View Full Profile</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step in supporting your child's development by scheduling a consultation with one of our
            specialists.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/consultation">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/assessments">Take a Screening</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

