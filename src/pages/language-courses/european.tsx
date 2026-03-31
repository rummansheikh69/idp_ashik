import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { ArrowLeft, GraduationCap, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const COUNTRIES = [
  {
    name: "Germany",
    flag: "🇩🇪",
    lang: "German",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&fit=crop",
    desc: "Germany offers free or low-cost tuition at public universities. German language courses range from A1 to C2 levels, required for university admission and daily life.",
    highlights: [
      "Free public university tuition",
      "Strong engineering & science programs",
      "TestDaF & Goethe Institut exams",
      "Post-study work visa available",
    ],
  },
  {
    name: "France",
    flag: "🇫🇷",
    lang: "French",
    image:
      "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=800&fit=crop",
    desc: "France hosts world-class institutions and vibrant cultural programmes. French language courses prepare students for DELF/DALF examinations and university entry.",
    highlights: [
      "Affordable top universities",
      "DELF & DALF certification",
      "Art, fashion & culinary programs",
      "Rich cultural experience",
    ],
  },
  {
    name: "Netherlands",
    flag: "🇳🇱",
    lang: "Dutch / English",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=800&fit=crop",
    desc: "The Netherlands is one of the most English-friendly non-English countries. Dutch language courses complement hundreds of English-taught degree programs.",
    highlights: [
      "1,000+ English-taught programs",
      "NT2 Dutch language certification",
      "Innovation hub in Europe",
      "High quality of life",
    ],
  },
  {
    name: "Spain",
    flag: "🇪🇸",
    lang: "Spanish",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&fit=crop",
    desc: "Spanish is the world's second most spoken language. Language courses in Spain include DELE exam preparation and immersive cultural programmes.",
    highlights: [
      "DELE certification",
      "Vibrant student cities",
      "Affordable living costs",
      "Global language advantage",
    ],
  },
];

export default function EuropeanCountriesPage() {
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
              European Countries
            </h1>
            <p className="text-white/80 text-lg">
              Discover language courses across top European study destinations
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
