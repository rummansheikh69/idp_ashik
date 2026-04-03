import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { ArrowLeft, GraduationCap, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const COUNTRIES = [
  {
    name: "United States",
    flag: "🇺🇸",
    lang: "English",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&fit=crop",
    desc: [
      "For Bangladeshi students planning to pursue a Bachelor’s or Master’s degree in the United States, meeting admission and visa requirements is essential for successful processing. Undergraduate applicants must have completed HSC or equivalent, while postgraduate applicants need a recognized Bachelor’s degree in a relevant field with a competitive GPA.",
      "English language proficiency is required through tests such as IELTS, TOEFL, or Duolingo, depending on university requirements. Additionally, standardized tests like SAT (for undergraduate) or GRE/GMAT (for certain graduate programs) may be required.",
      "Applicants must submit key documents including academic transcripts, certificates, a Statement of Purpose (SOP), Letters of Recommendation (LOR), and a valid passport. Financial documents proving the ability to cover tuition and living expenses are also mandatory.",
      "After receiving admission, universities issue an I-20 form, which is required to apply for an F-1 student visa. Students must pay the SEVIS fee, complete the DS-160 form, and attend a visa interview at the U.S. Embassy. Medical and security clearances may also be required. Proper preparation and accurate documentation significantly improve the chances of admission and visa approval.",
    ],
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    lang: "English",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&fit=crop",
    desc: [
      "For Bangladeshi students planning to pursue a Bachelor’s or Master’s degree in the United Kingdom, meeting both academic and visa requirements is essential for successful processing. Undergraduate applicants must have completed HSC or equivalent qualifications, while postgraduate applicants need a recognized Bachelor’s degree in a relevant subject with a satisfactory GPA.",
      "English language proficiency is mandatory and typically demonstrated through IELTS, PTE, or other approved tests, depending on university requirements. Applicants must submit essential documents including academic transcripts, certificates, a Statement of Purpose (SOP), Letters of Recommendation (LOR), and a valid passport.",
      "Once a student receives an offer from a university, they must accept it and obtain a Confirmation of Acceptance for Studies (CAS), which is required to apply for a Student visa. Financial proof showing the ability to cover tuition fees and living expenses must also be provided.",
      "Additionally, students may need to undergo a tuberculosis (TB) test and meet credibility interview requirements if applicable. Accurate documentation, financial readiness, and proper guidance significantly increase the chances of successful admission and visa approval.",
    ],
  },
  {
    name: "Canada ",
    flag: "🇨🇦",
    lang: "English",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&fit=crop",
    desc: [
      "For Bangladeshi students planning to pursue a Bachelor’s or Master’s degree in Canada, meeting the academic and visa requirements is essential for successful processing. Undergraduate applicants must have completed HSC or equivalent with good academic results, while postgraduate applicants need a recognized Bachelor’s degree in a relevant field with a competitive GPA.",
      "English language proficiency is mandatory and is usually demonstrated through IELTS, PTE, or TOEFL, depending on the institution. Some programs may also have additional requirements such as GRE or GMAT for graduate studies. Applicants must prepare key documents including academic transcripts, certificates, a Statement of Purpose (SOP), Letters of Recommendation (LOR), and a valid passport.",
      "After receiving a Letter of Acceptance (LOA) from a designated learning institution (DLI), students can apply for a study permit. Financial proof is required to demonstrate the ability to cover tuition fees, living expenses, and travel costs. Students may also need to provide a Guaranteed Investment Certificate (GIC) under the SDS (Student Direct Stream) program.",
      "Additionally, applicants must complete medical examinations and provide biometrics. Proper documentation and accurate processing significantly increase the chances of visa approval and successful study in Canada.",
    ],
  },
  {
    name: "Australia ",
    flag: "🇦🇺",
    lang: "English",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&fit=crop",
    desc: [
      "For Bangladeshi students planning to pursue a Bachelor’s or Master’s degree in Australia, fulfilling the entry requirements is essential for a smooth admission and visa process. Students applying for undergraduate programs must have completed HSC or equivalent with satisfactory academic results, while postgraduate applicants must hold a recognized Bachelor’s degree in a relevant field with a good GPA.",
      "English language proficiency is mandatory, typically demonstrated through IELTS, PTE, or equivalent tests, with score requirements varying by university and course. Applicants must also prepare essential documents, including a valid passport, academic transcripts and certificates, a Statement of Purpose (SOP), and in some cases, Letters of Recommendation (LOR).",
      "Financial capability is a key requirement, where students must show proof of funds to cover tuition fees, living expenses, and travel costs. After receiving an offer letter from a university, students must accept it and obtain a Confirmation of Enrolment (CoE), which is required to apply for a student visa.",
      "Additionally, applicants must meet the Genuine Student (GS) criteria, undergo medical examinations, and provide police clearance if required. Proper documentation and accurate processing significantly increase the chances of admission and visa approval.",
    ],
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    lang: "English",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&fit=crop",
    desc: [
      "For Bangladeshi students planning to pursue a Bachelor’s or Master’s degree in New Zealand, meeting academic and visa requirements is essential for smooth processing. Undergraduate applicants must have completed HSC or equivalent with satisfactory results, while postgraduate applicants need a recognized Bachelor’s degree in a relevant field with a good GPA.",
      "English language proficiency is mandatory and typically demonstrated through IELTS, PTE, or TOEFL, depending on the institution and program. Applicants must submit key documents including academic transcripts, certificates, a Statement of Purpose (SOP), Letters of Recommendation (LOR), and a valid passport. Some programs may also require relevant work experience.",
      "Once a student receives an Offer of Place from a New Zealand institution, they can proceed with the student visa application. Financial proof is required to show the ability to cover tuition fees, living expenses, and travel costs.",
      "Additionally, students must undergo medical examinations and provide police clearance certificates if required. Meeting Genuine Temporary Entrant (GTE) requirements is also important. Proper documentation and accurate processing significantly improve the chances of successful admission and visa approval.",
    ],
  },
  {
    name: "Ireland ",
    flag: "🇮🇪",
    lang: "English",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&fit=crop",
    desc: [
      " Studying in Ireland is an attractive option for Bangladeshi students due to its high-quality education system and globally recognized degrees. To apply for a Bachelor’s or Master’s program, students must first meet academic requirements. For undergraduate courses, completion of Higher Secondary Certificate (HSC) with strong grades is required, while postgraduate applicants need a relevant Bachelor’s degree with a good CGPA.",
      "English language proficiency is mandatory. Most universities accept IELTS (usually 6.0–6.5 for Bachelor’s and 6.5–7.0 for Master’s) or equivalent tests like TOEFL or PTE. Students must also prepare essential documents such as academic transcripts, certificates, a statement of purpose (SOP), recommendation letters, and a valid passport.",
      "After receiving an offer letter from an Irish institution, students must pay a deposit to secure admission. The next step is applying for a student visa. Visa requirements include proof of sufficient funds (to cover tuition fees and living expenses), medical insurance, and a clear immigration history.",
      "The processing time for admission and visa can take several weeks, so early application is advised. Proper planning and accurate documentation significantly increase the chances of acceptance and successful study in Ireland.",
    ],
  },
];

export default function EnglishCountriesPage() {
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
              English Countries
            </h1>
            <p className="text-white/80 text-lg">
              Discover language courses across top English-speaking study
              destinations
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
                  className="mt-3 inline-flex bg-primary text-white font-bold py-3 px-7 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-sm"
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
