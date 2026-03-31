import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import {
  ArrowLeft,
  GraduationCap,
  DollarSign,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const COUNTRIES = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "World-class universities, rich culture, global recognition",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=900&auto=format&fit=crop",
    description:
      "The United Kingdom is home to some of the world's most prestigious universities, including Oxford, Cambridge, and Imperial College. English language courses in the UK range from General English to IELTS preparation and academic English programmes.",
    cost: "£800 – £1,800/month",
    duration: "4 weeks – 1 year",
    highlights: [
      "IELTS & Cambridge exams",
      "Work while studying (20hrs/week)",
      "Post-study work visa available",
      "140+ accredited English schools",
    ],
  },
  {
    name: "United States",
    flag: "🇺🇸",
    tagline: "Diverse campuses, cutting-edge programs, endless opportunities",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=900&auto=format&fit=crop",
    description:
      "The USA offers intensive English language programs (IEP) at universities and private language schools. These programs prepare international students for academic study at American universities with TOEFL and English for Academic Purposes courses.",
    cost: "$1,200 – $2,500/month",
    duration: "4 – 52 weeks",
    highlights: [
      "TOEFL & SAT preparation",
      "Conditional university admission",
      "Cultural immersion programs",
      "University pathway options",
    ],
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    tagline: "Safe, multicultural, and globally recognised qualifications",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=900&auto=format&fit=crop",
    description:
      "Canada is one of the safest and most welcoming destinations for international students. English programs include General English, Business English, IELTS preparation, and academic pathway programmes at colleges and private language schools.",
    cost: "CAD 900 – CAD 2,000/month",
    duration: "1 – 52 weeks",
    highlights: [
      "Bilingual environment",
      "Pathway to PR available",
      "Affordable living costs",
      "High quality of life",
    ],
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    tagline: "Stunning lifestyle, top-ranked institutions, sunny weather",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=900&auto=format&fit=crop",
    description:
      "Australia's English language courses are regulated by the Australian government's NEAS quality framework. Programs include General English, IELTS preparation, Cambridge Exam preparation, and English for Academic Purposes at ELICOS centres.",
    cost: "AUD 300 – AUD 600/week",
    duration: "4 – 48 weeks",
    highlights: [
      "NEAS accredited schools",
      "Part-time work allowed",
      "Pathway to university",
      "IELTS & PTE preparation",
    ],
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    tagline: "Breathtaking scenery, friendly locals, quality education",
    image:
      "https://images.unsplash.com/photo-1469521669194-babb45599def?q=80&w=900&auto=format&fit=crop",
    description:
      "New Zealand offers high-quality English language courses in a safe, peaceful environment. Programmes are delivered by government-accredited language schools and range from beginner English to advanced academic preparation.",
    cost: "NZD 250 – NZD 550/week",
    duration: "4 – 52 weeks",
    highlights: [
      "Small class sizes",
      "IELTS preparation",
      "Pathway to NZ university",
      "Scenic campus environments",
    ],
  },
  {
    name: "Ireland",
    flag: "🇮🇪",
    tagline: "Friendly culture, European access, affordable options",
    image:
      "https://images.unsplash.com/photo-1549918864-48ac978761a4?q=80&w=900&auto=format&fit=crop",
    description:
      "Ireland is the only English-speaking country in the Eurozone, making it a strategic destination. Language courses are offered at MEI RELSA accredited schools with options including General English, Business English, and exam preparation.",
    cost: "€200 – €450/week",
    duration: "2 – 52 weeks",
    highlights: [
      "EU member state",
      "MEI RELSA accredited",
      "Friendly Irish culture",
      "Gateway to Europe",
    ],
  },
];

export default function EnglishCountriesPage() {
  const [selected, setSelected] = useState(0);
  const country = COUNTRIES[selected];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero banner */}
        <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              English Speaking Countries
            </h1>
            <p className="text-white/80 text-lg">
              Explore language courses across 6 premier English-speaking
              destinations
            </p>
          </div>
        </div>

        {/* Country tabs */}
        <div className="sticky top-[60px] z-30 bg-white border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4 flex gap-1 overflow-x-auto py-3">
            {COUNTRIES.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setSelected(i)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selected === i
                    ? "bg-primary text-white shadow-md"
                    : "bg-secondary text-foreground/70 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                <span>{c.flag}</span> {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{country.flag}</span>
                <div>
                  <h2 className="text-3xl font-display font-bold text-primary">
                    {country.name}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {country.tagline}
                  </p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-8 text-base">
                {country.description}
              </p>

              {/* Key info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary/50 rounded-2xl p-4 border border-border">
                  <DollarSign className="w-5 h-5 text-accent mb-2" />
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">
                    Average Cost
                  </p>
                  <p className="font-bold text-foreground text-sm">
                    {country.cost}
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-2xl p-4 border border-border">
                  <Clock className="w-5 h-5 text-accent mb-2" />
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">
                    Course Duration
                  </p>
                  <p className="font-bold text-foreground text-sm">
                    {country.duration}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-bold text-primary">
                    Key Highlights
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {country.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2.5 text-sm text-foreground/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/#counseling"
                className="mt-6 inline-flex items-center gap-2 bg-primary text-white font-bold py-3.5 px-8 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Get Free Counseling for {country.name}
              </Link>
            </div>

            {/* Right: Country image */}
            <div className="lg:sticky lg:top-28">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border">
                <img
                  src={country.image}
                  alt={`${country.name} landscape`}
                  className="w-full h-80 lg:h-[480px] object-cover"
                />
              </div>
              <div className="mt-4 bg-white rounded-2xl p-4 border border-border shadow-sm flex items-center gap-3">
                <span className="text-3xl">{country.flag}</span>
                <div>
                  <p className="font-bold text-primary">{country.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Click the tabs above to explore other countries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
