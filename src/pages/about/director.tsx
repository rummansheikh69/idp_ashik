import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Link } from "wouter";

const HIGHLIGHTS = [
  "15+ years leading Visa Express to success",
  "Personally guided over 50,000 students",
  "Certified IELTS & Visa Consultant",
  "Speaker at international education forums",
  "Committed to 100% transparent counselling",
];

const MESSAGE_PARAS = [
  "Since the establishment of Visa Express in July 2010, our mission has been clear—to provide reliable, transparent, and high-quality consultancy services to individuals who aspire to study, work, and build a future abroad. What began as a vision to simplify the complex visa process has grown into a trusted platform that has helped countless students and professionals achieve their international goals.",
  "We understand that every client comes to us with a unique dream and a personal story. For many, the journey toward studying or working abroad can feel overwhelming, filled with uncertainty and complex procedures. At Visa Express, we take pride in transforming that journey into a smooth, well-guided experience. Our team is dedicated to offering personalized support at every stage—from initial counselling and university selection to visa application and pre-departure guidance.",
  "Our success over the years has been driven by our unwavering commitment to excellence and client satisfaction. We believe in maintaining the highest standards of professionalism, integrity, and transparency in all our services. This commitment has allowed us to build long-term relationships with our clients, partners, and institutions around the world.",
  "A key strength of Visa Express lies in our people. Our experienced and passionate team works tirelessly to stay updated with global immigration policies, education trends, and industry best practices. We continuously invest in training, technology, and partnerships to ensure that we remain at the forefront of the consultancy sector.",
  "Looking ahead, our goal is not only to expand our services but also to enhance the value we provide to our clients. We are committed to introducing new opportunities such as advanced language preparation programs, including OET, to support healthcare professionals aiming for international careers.",
  "As the Founder & Managing Director, I firmly believe that our clients’ success defines our own. We will continue to uphold our core values, deliver exceptional service, and guide you with honesty and dedication as you take the next step toward a brighter global future.",
];

export default function DirectorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero — background image + director profile */}
        <div className="relative min-h-[520px] flex items-end">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            alt="Office background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-primary/20" />

          {/* Back link */}
          <div className="absolute top-24 left-0 right-0 z-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
            </div>
          </div>

          {/* Profile card overlapping hero bottom */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-0">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 pb-10">
              {/* Director avatar — rounded box */}
              <div className="shrink-0 relative">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="/director.jpeg"
                    alt="Director"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Verified badge */}
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Name & title */}
              <div className="text-center md:text-left md:pb-4">
                <div className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 mb-3">
                  Director's Message
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-white drop-shadow-md">
                  Ashik Rahman
                </h1>
                <p className="text-white/80 text-base mt-1">
                  Founder & Director — Visa Express
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content below hero */}
        <div className="bg-secondary/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left: Message */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Quote className="w-16 h-16 text-primary/8 absolute -top-4 -left-4" />
                  <div className="space-y-5 relative z-10">
                    {MESSAGE_PARAS.map((p, i) => (
                      <p
                        key={i}
                        className={`leading-relaxed text-foreground/80 ${i === 0 ? "text-lg font-medium text-foreground" : "text-base"}`}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Highlights card */}
              <div className="space-y-5">
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                  <h3 className="font-display font-bold text-primary mb-4 text-lg">
                    Achievements
                  </h3>
                  <ul className="space-y-3">
                    {HIGHLIGHTS.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-foreground/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact director CTA */}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="font-display font-bold mb-2">
                    Speak with the Director
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    Book a personal counselling session directly with our
                    director for complex cases.
                  </p>
                  <Link
                    href="/#counseling"
                    className="block w-full bg-white text-primary font-bold py-2.5 rounded-xl text-center text-sm hover:bg-white/90 transition-colors"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="mailto:director@globalvisa.com"
                    className="block mt-2 text-center text-white/60 text-xs hover:text-white transition-colors"
                  >
                    director@visaexpressbd.com
                  </a>
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
