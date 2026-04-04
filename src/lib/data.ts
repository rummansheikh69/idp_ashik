import {
  Plane,
  GraduationCap,
  Briefcase,
  Building,
  Users,
  RefreshCw,
  ClipboardCheck,
  Search,
  FileText,
  MessageSquare,
  FileCheck2,
  Stamp,
  BookOpenCheck,
  Languages,
  Brain,
  ClipboardPenLine,
  Bed,
  TicketCheck,
} from "lucide-react";

export const SERVER_URL = "http://localhost:4000";

export const SERVICES = [
  {
    id: "eligibility-check",
    title: "Eligibility Check",
    icon: ClipboardCheck,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    shortDesc:
      "Visa Express offers a comprehensive student profile eligibility check to evaluate academic qualifications, study gaps, financial capacity, and career goals. Our experts identify suitable countries, universities, and programs, providing accurate guidance to strengthen applications and maximize visa success chances for students planning to study abroad.",
  },
  {
    id: "language-preparation",
    title: "Language Preparation",
    icon: BookOpenCheck,
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
    shortDesc:
      "Visa Express offers expert language preparation to help students and professionals achieve the required English proficiency for global opportunities. Our training covers IELTS and PTE, focusing on all four skills with structured lessons, mock tests, and personalized guidance—ensuring candidates are confident, well-prepared, and successful in high-stakes English exams.",
  },
  {
    id: "language-testing-partner",
    title: "Language Testing Partner",
    icon: Languages,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    shortDesc:
      "Visa Express collaborates with authorized IDP IELTS testing partners to facilitate smooth and reliable exam registration for candidates. We provide complete support—from test booking to preparation guidance—ensuring a hassle-free experience. Our commitment is to help students and professionals confidently take the IELTS exam and achieve their desired scores.",
  },
  {
    id: "free-counselling",
    title: "Free Counselling",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    shortDesc:
      "Visa Express offers free student visa counselling to guide aspiring students toward the right study destination. Our experts provide personalized advice on course selection, university options, admission requirements, and visa processes, ensuring students make informed decisions and confidently pursue their international education goals.",
  },
  {
    id: "free-application",
    title: "Free Application",
    icon: ClipboardPenLine,
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191011?q=80&w=800&auto=format&fit=crop",
    shortDesc:
      "Visa Express offers a free application process for university admissions, assisting students with course selection, document preparation, and submission to international institutions. Our expert team ensures accurate and timely applications, increasing acceptance chances while providing a smooth, hassle-free experience for students pursuing higher education abroad.",
  },
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=800&auto=format&fit=crop",
    shortDesc:
      "Visa Express provides expert interview preparation for university or embassy requirements. Our training includes mock interviews, common questions, and personalized feedback to build confidence and communication skills. We ensure students are well-prepared to present themselves effectively and successfully pass admission and visa interviews.",
  },
  {
    id: "visa-application",
    title: "Visa Application",
    icon: ClipboardCheck,
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=800&auto=format&fit=crop",
    shortDesc:
      "Visa Express provides complete visa application support, guiding clients through documentation, form completion, and submission to embassies. Our expert team ensures accuracy, compliance, and timely processing, reducing errors and delays. We aim to make the visa process smooth, efficient, and successful for students and professionals.",
  },
  {
    id: "accommodation",
    title: "Accommodation",
    icon: Bed,
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=800&auto=format&fit=crop",
    shortDesc:
      "Visa Express assists students in securing safe, comfortable, and affordable accommodation near their universities. We provide guidance on housing options, booking support, and relocation advice to ensure a smooth transition. Our goal is to help students settle and focus on their studies abroad.",
  },
  {
    id: "pre-arrival-support",
    title: "Pre-Arrival and Air Ticket Confirmation",
    icon: TicketCheck,
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=800&auto=format&fit=crop",
    shortDesc:
      "Visa Express provides complete pre-arrival support, including guidance on travel planning and air ticket confirmation. We assist students in booking affordable flights, preparing travel documents, and understanding arrival procedures, ensuring a smooth and stress-free journey to their study destination abroad.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    country: "United Kingdom",
    text: "The team made my work visa process incredibly smooth. They handled all the complicated paperwork and kept me updated every step of the way.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: 2,
    name: "Michael Chen",
    country: "Singapore",
    text: "Applying for a student visa was stressful until I found this center. Their attention to detail ensured my application was approved in record time.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    country: "Spain",
    text: "Highly professional service! We used their family reunion service and the guidance we received was invaluable. Thank you for reuniting our family.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: 4,
    name: "David Adeleke",
    country: "Canada",
    text: "I travel frequently for business. Their quick turnaround time on business visas has saved me countless hours. Simply the best in the industry.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  },
];

export const STEPS = [
  {
    id: 1,
    icon: ClipboardCheck,
    label: "STEP 01",
    title: "Check Your Eligibility",
    desc: "We assess your profile, qualifications, and goals to determine which visa or study program fits you best.",
  },
  {
    id: 2,
    icon: Search,
    label: "STEP 02",
    title: "Find University & Course",
    desc: "Our counsellors shortlist the best universities and courses aligned with your academic background and career goals.",
  },
  {
    id: 3,
    icon: FileText,
    label: "STEP 03",
    title: "Start Application",
    desc: "We handle the entire application process — forms, documents, translations, and embassy submissions on your behalf.",
  },
  {
    id: 4,
    icon: MessageSquare,
    label: "STEP 04",
    title: "Prepare For Interview",
    desc: "Our team conducts mock interviews and provides you with all the coaching you need to ace your visa interview.",
  },
  {
    id: 5,
    icon: FileCheck2,
    label: "STEP 05",
    title: "Complete CAS Application",
    desc: "We guide you through obtaining your Confirmation of Acceptance for Studies (CAS) from your chosen institution.",
  },
  {
    id: 6,
    icon: Stamp,
    label: "STEP 06",
    title: "Apply For Student Visa",
    desc: "We submit your final visa application with all supporting documents for a smooth and successful outcome.",
  },
];

export const VIDEOS = [
  {
    id: 1,
    videoId: "xNKCMVCuOxs",
    title: "UK Student Visa 2024 — Complete Step-by-Step Application Guide",
    channel: "GlobalVisa Tips",
    thumbnail:
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=800&auto=format&fit=crop",
    duration: "18:42",
    views: "124K views",
    date: "2 weeks ago",
    category: "Student Visa",
  },
  {
    id: 2,
    videoId: "4kIMJOSxkxY",
    title: "Study in Canada: Top Universities, Costs & How to Get In",
    channel: "Study Abroad Hub",
    thumbnail:
      "https://images.unsplash.com/photo-1569389397653-c04fe624e663?q=80&w=800&auto=format&fit=crop",
    duration: "22:10",
    views: "89K views",
    date: "1 month ago",
    category: "Study Abroad",
  },
  {
    id: 3,
    videoId: "XDvQMpAGCQY",
    title: "IELTS Preparation: 7 Proven Tips to Score 7+ Bands",
    channel: "English Mastery",
    thumbnail:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    duration: "14:55",
    views: "210K views",
    date: "3 weeks ago",
    category: "IELTS / English",
  },
  {
    id: 4,
    videoId: "F8RnBsX6O4s",
    title: "Australia Student Visa (Subclass 500) — Everything You Need",
    channel: "GlobalVisa Tips",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    duration: "19:30",
    views: "67K views",
    date: "5 days ago",
    category: "Student Visa",
  },
  {
    id: 5,
    videoId: "hB41j5tvfmk",
    title: "How to Write a Strong University Personal Statement",
    channel: "Study Abroad Hub",
    thumbnail:
      "https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=800&auto=format&fit=crop",
    duration: "11:08",
    views: "52K views",
    date: "2 months ago",
    category: "Applications",
  },
  {
    id: 6,
    videoId: "dBX6yBwfcoo",
    title: "Scholarships for International Students 2024 — Full List",
    channel: "Scholarship World",
    thumbnail:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    duration: "16:22",
    views: "178K views",
    date: "1 week ago",
    category: "Scholarships",
  },
];
