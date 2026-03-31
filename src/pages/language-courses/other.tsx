import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { ArrowLeft, GraduationCap, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const COUNTRIES = [
  {
    name: "Japan",
    flag: "🇯🇵",
    lang: "Japanese",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&fit=crop",
    desc: "Japan offers world-class technology and engineering education. Japanese language courses prepare students for JLPT certification and university entry.",
    highlights: [
      "JLPT N1–N5 certification",
      "Strong tech & anime culture",
      "Low crime & safe environment",
      "Scholarship opportunities",
    ],
  },
  {
    name: "South Korea",
    flag: "🇰🇷",
    lang: "Korean",
    image:
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=800&fit=crop",
    desc: "South Korea blends ancient tradition with modern innovation. Korean language courses through TOPIK certification open doors to top Korean universities.",
    highlights: [
      "TOPIK certification",
      "K-pop & cultural exposure",
      "Government scholarships (KGSP)",
      "Fast-growing job market",
    ],
  },
  {
    name: "China",
    flag: "🇨🇳",
    lang: "Mandarin",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800&fit=crop",
    desc: "Mandarin is the world's most spoken language. Chinese language courses offer HSK exam preparation with pathways to China's prestigious universities.",
    highlights: [
      "HSK 1–6 certification",
      "World's largest economy",
      "Confucius Institute programs",
      "Government scholarships",
    ],
  },
  {
    name: "Turkey",
    flag: "🇹🇷",
    lang: "Turkish",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&fit=crop",
    desc: "Turkey bridges Europe and Asia with affordable, quality education. Turkish language courses with TÖMER certification open pathways to Turkish universities.",
    highlights: [
      "Affordable tuition fees",
      "TÖMER certification",
      "Türkiye Scholarships program",
      "Strategic location between continents",
    ],
  },
];

export default function OtherCountriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
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
              Other Countries
            </h1>
            <p className="text-white/80 text-lg">
              Explore language programs across Asia and beyond
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
          {COUNTRIES.map((c, i) => (
            <div
              key={c.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{c.flag}</span>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-primary">
                      {c.name}
                    </h2>
                    <span className="text-xs bg-accent/15 text-accent font-bold px-2 py-0.5 rounded-full">
                      {c.lang}
                    </span>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-5">
                  {c.desc}
                </p>
                <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="font-bold text-primary text-sm">
                      Key Highlights
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {c.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />{" "}
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/#counseling"
                  className="mt-5 inline-flex bg-primary text-white font-bold py-3 px-7 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-sm"
                >
                  Enquire About {c.name}
                </Link>
              </div>
              <div
                className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-72 object-cover rounded-3xl shadow-xl border border-border"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
