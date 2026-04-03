import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { ArrowLeft, GraduationCap, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const COUNTRIES = [
  {
    name: "China ",
    flag: "🇨🇳",
    lang: "Chinese (Mandarin)",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&fit=crop",
    desc: [
      "Studying in China is an increasingly popular choice for Bangladeshi students due to its affordable tuition fees, diverse programs, and strong global academic reputation. To apply for a Bachelor’s or Master’s program, students must meet academic and language requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with good grades is required. For postgraduate programs, applicants must hold a recognized Bachelor’s degree in a relevant field with a satisfactory CGPA.",
      "Language requirements depend on the program. For Chinese-taught courses, students must provide HSK (Chinese proficiency test) results, while English-taught programs usually require IELTS (around 5.5–6.5) or TOEFL scores. Some universities may also conduct interviews or entrance exams.",
      "Applicants must submit documents such as academic transcripts, certificates, a valid passport, a study plan or statement of purpose (SOP), recommendation letters, and a medical examination report. After acceptance, universities issue official documents like the JW202/JW201 form required for visa processing.",
      "Students must then apply for an X1 or X2 student visa. Visa requirements include proof of admission, financial capability, and medical clearance. The processing time usually takes a few weeks, so early application and proper documentation are essential for a smooth admission process in China.",
    ],
  },
  {
    name: "South Korea ",
    flag: "🇰🇷",
    lang: "Korean",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&fit=crop",
    desc: [
      "Studying in South Korea is a popular choice for Bangladeshi students due to its advanced education system and strong global reputation. To apply for a Bachelor’s or Master’s program, students must meet academic and language requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with good academic performance is required. For postgraduate programs, applicants must hold a recognized Bachelor’s degree in a relevant field with a satisfactory CGPA.",
      "Language proficiency is an important requirement. For Korean-taught programs, students must provide TOPIK (Test of Proficiency in Korean) scores. For English-taught programs, universities typically require IELTS (around 5.5–6.5) or TOEFL scores. Some institutions may also conduct interviews or require additional documents such as a study plan or portfolio.",
      "Applicants must submit essential documents including academic transcripts, certificates, a valid passport, statement of purpose (SOP), CV, and recommendation letters. After receiving an admission offer, students must confirm enrollment and receive a Certificate of Admission from the university.",
      "The next step is applying for a student visa (D-2). Students must provide proof of sufficient financial resources, accommodation arrangements, and medical insurance. The visa processing time usually takes a few weeks, so early preparation and accurate documentation are crucial for a smooth admission process in South Korea.",
    ],
  },
  {
    name: "Thailand ",
    flag: "🇹🇭",
    lang: "Thai",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&fit=crop",
    desc: [
      "Studying in Thailand is an attractive option for Bangladeshi students due to its affordable education, cultural proximity, and availability of international programs. To apply for a Bachelor’s or Master’s program, students must meet academic and language requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with satisfactory grades is required. For postgraduate programs, applicants must hold a recognized Bachelor’s degree in a relevant field with a good CGPA.",
      "English language proficiency is essential for international programs. Universities typically require IELTS (around 5.5–6.5) or TOEFL scores. However, some institutions may accept alternative proof of English proficiency or conduct their own language assessments or interviews.",
      "Applicants must prepare and submit important documents such as academic transcripts, certificates, a valid passport, a statement of purpose (SOP), CV, and recommendation letters. Some programs may also require an interview or entrance test depending on the field of study.",
      "After receiving an admission offer, students must confirm their enrollment and pay any required tuition deposit. The next step is applying for a Non-Immigrant ED (Education) visa. Students must provide proof of sufficient financial resources, accommodation, and health insurance. The processing time usually takes a few weeks, so early application and proper documentation are essential.",
    ],
  },
  {
    name: "Malaysia  ",
    flag: "🇲🇾",
    lang: "Malaysian",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&fit=crop",
    desc: [
      "Studying in Malaysia is a popular choice for Bangladeshi students due to its affordable tuition fees, multicultural environment, and internationally recognized degrees. To apply for a Bachelor’s or Master’s program, students must meet academic and language requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with good academic performance is required. For postgraduate programs, applicants must hold a recognized Bachelor’s degree in a relevant field with a satisfactory CGPA.",
      "English language proficiency is essential, as most programs are taught in English. Universities typically require IELTS (around 5.5–6.5) or TOEFL scores. Some institutions may also accept alternative English tests or conduct internal assessments.",
      "Applicants must submit necessary documents including academic transcripts, certificates, a valid passport, a statement of purpose (SOP), CV, and recommendation letters. Some programs may also require interviews or additional documentation depending on the field of study.",
      "After receiving an offer letter, students must confirm admission and pay the required fees. The university will then assist in applying for a student pass through the Education Malaysia Global Services.",
      "Students must provide proof of financial capability, medical reports, and health insurance. The processing time usually takes several weeks, so early application and accurate documentation are important for a smooth admission process.",
    ],
  },
  {
    name: "United Arab Emirates ",
    flag: "🇦🇪",
    lang: "Arabic",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&fit=crop",
    desc: [
      "Studying in the United Arab Emirates is an attractive option for Bangladeshi students due to its modern infrastructure, diverse universities, and proximity to home. To apply for a Bachelor’s or Master’s program, students must meet academic and language requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with good grades is required. For postgraduate programs, applicants must hold a recognized Bachelor’s degree in a relevant field with a satisfactory CGPA.",
      "English language proficiency is essential, as most programs are taught in English. Universities typically require IELTS (around 5.5–6.5) or TOEFL scores. Some institutions may also conduct interviews or require additional documents such as a CV or portfolio depending on the course.",
      "Applicants must submit key documents including academic transcripts, certificates, a valid passport, statement of purpose (SOP), and recommendation letters. After receiving an offer letter, students must confirm admission and pay the required tuition deposit.",
      "The next step is applying for a student visa, usually sponsored by the university. Students must provide proof of sufficient financial resources, accommodation arrangements, and valid health insurance. The processing time is generally quick, often taking a few weeks, but early application and proper documentation are essential for a smooth admission process.",
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
                {c?.desc?.map((line: any, idx: any) => (
                  <p
                    key={`${idx}-${line}`}
                    className="text-foreground/80 leading-relaxed mb-5"
                  >
                    <span>{line}</span>
                  </p>
                ))}
                {c?.highlights && (
                  <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="font-bold text-primary text-sm">
                        Key Highlights
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {c?.highlights?.map((h) => (
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
                )}
                <Link
                  href="/apply"
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
