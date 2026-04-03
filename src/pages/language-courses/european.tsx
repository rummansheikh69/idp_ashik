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
    desc: [
      "Studying in Germany is a highly attractive option for Bangladeshi students due to its globally recognized universities and low or no tuition fees at public institutions. To apply for a Bachelor’s or Master’s program, students must meet specific academic requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) is required, though many students may need to complete a foundation year (Studienkolleg). For postgraduate programs, applicants must hold a recognized Bachelor’s degree in a relevant field with a good CGPA.",
      "Language proficiency is an important requirement. Programs taught in German require certificates such as TestDaF or DSH, while English-taught programs usually require IELTS (around 6.0–6.5) or TOEFL scores. Some universities may also require GRE/GMAT scores, depending on the course.",
      "Applicants must submit documents including academic transcripts, certificates, a valid passport, statement of purpose (SOP), CV, and recommendation letters. Many students also need to apply through platforms like uni-assist for document evaluation.",
      "After receiving an admission letter, students must apply for a student visa. Requirements include proof of financial resources (such as a blocked account), health insurance, and accommodation. The entire process may take several months, so early preparation is essential for successful admission to Germany.",
    ],
    // highlights: [
    //   "Free public university tuition",
    //   "Strong engineering & science programs",
    //   "TestDaF & Goethe Institut exams",
    //   "Post-study work visa available",
    // ],
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    lang: "Italian",
    image:
      "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=800&fit=crop",
    desc: [
      "Studying in Italy is an attractive option for Bangladeshi students due to its rich academic tradition and affordable education system. To apply for a Bachelor’s or Master’s program, students must meet academic qualifications. For undergraduate programs, completion of the Higher Secondary Certificate (HSC) with good grades is required. For postgraduate studies, applicants must hold a recognized Bachelor’s degree in a relevant field with a satisfactory CGPA.",
      "English language proficiency is required for English-taught programs, with IELTS (usually 6.0–6.5) or TOEFL scores commonly accepted. Some programs are offered in Italian, requiring proof of Italian language proficiency. Depending on the course, universities may also conduct entrance exams or interviews.",
      "Applicants must submit essential documents including academic transcripts, certificates, a valid passport, statement of purpose (SOP), CV, and recommendation letters. In many cases, students need to complete a pre-enrollment process through platforms like Universitaly.",
      "After receiving an acceptance letter, students must apply for a student visa. Visa requirements include proof of sufficient funds, accommodation, and health insurance. The processing time can take several weeks to a few months, so early preparation and accurate documentation are important for successful admission to Italy.",
    ],
    // highlights: [
    //   "Affordable top universities",
    //   "DELF & DALF certification",
    //   "Art, fashion & culinary programs",
    //   "Rich cultural experience",
    // ],
  },
  {
    name: "Netherlands",
    flag: "🇳🇱",
    lang: "Dutch / English",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=800&fit=crop",
    desc: [
      "Studying in the Netherlands is a popular choice for Bangladeshi students due to its high-quality education system and wide range of English-taught programs. To apply for a Bachelor’s or Master’s degree, students must meet academic and language requirements. For undergraduate programs, completion of the Higher Secondary Certificate (HSC) with strong academic performance is required. For postgraduate studies, applicants must hold a recognized Bachelor’s degree in a relevant field with a good CGPA.",
      "English language proficiency is essential, as many programs are offered in English. Most universities require IELTS (typically 6.0–6.5 for Bachelor’s and 6.5–7.0 for Master’s) or TOEFL scores. Some programs may also require additional documents such as a motivation letter, CV, or portfolio, and occasionally entrance exams or interviews.",
      "Applicants must submit documents including academic transcripts, certificates, a valid passport, statement of purpose (SOP), and recommendation letters. Many institutions use centralized application systems or their own portals.",
      "After receiving an admission offer, students must confirm enrollment. The university often assists in applying for a student visa and residence permit (MVV and VVR). Requirements include proof of sufficient funds, accommodation, and health insurance. The processing time may take several weeks, so early application is highly recommended for successful admission.",
    ],
    // highlights: [
    //   "1,000+ English-taught programs",
    //   "NT2 Dutch language certification",
    //   "Innovation hub in Europe",
    //   "High quality of life",
    // ],
  },
  {
    name: "Sweden",
    flag: "🇸🇪",
    lang: "Swedish",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&fit=crop",
    desc: [
      "Studying in Sweden is a popular choice for Bangladeshi students due to its high-quality education system and strong focus on innovation and research. To apply for a Bachelor’s or Master’s program, students must meet academic and language requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with good academic results is required. For postgraduate programs, applicants must hold a recognized Bachelor’s degree in a relevant field with a strong CGPA.",
      "English language proficiency is essential, as most international programs are taught in English. Universities typically require IELTS (around 6.5 for Bachelor’s and 6.5–7.0 for Master’s) or TOEFL scores. Some programs may also require additional documents such as a motivation letter, CV, or portfolio, and occasionally entrance exams or interviews.",
      "Applicants must submit key documents including academic transcripts, certificates, a valid passport, statement of purpose (SOP), and recommendation letters. Most applications are processed through the centralized portal Universityadmissions.se.",
      "After receiving an admission offer, students must confirm their place and pay any required tuition fees. The next step is applying for a residence permit. Requirements include proof of sufficient financial resources, accommodation, and health insurance. The processing time may take several weeks to a few months, so early application is essential for success.",
    ],
    // highlights: [
    //   "DELE certification",
    //   "Vibrant student cities",
    //   "Affordable living costs",
    //   "Global language advantage",
    // ],
  },
  {
    name: "Russia",
    flag: "🇷🇺",
    lang: "Russian",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&fit=crop",
    desc: [
      "Studying in Russia is a popular option for Bangladeshi students due to its affordable tuition fees and wide range of academic programs. To apply for a Bachelor’s or Master’s program, students must meet academic and language requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with acceptable grades is required. For postgraduate programs, applicants must hold a recognized Bachelor’s degree in a relevant field with a satisfactory CGPA.",
      "Language proficiency depends on the program. Many courses are offered in Russian, requiring students to complete a preparatory language course or provide proof of Russian language proficiency. English-taught programs may require IELTS (typically 5.5–6.5) or TOEFL scores. Some universities may also conduct entrance exams or interviews.",
      "Applicants must prepare and submit important documents such as academic transcripts, certificates, a valid passport, a statement of purpose (SOP), and medical certificates. After receiving an official invitation letter from a Russian university, students can proceed with the visa application.",
      "The student visa process requires proof of admission, financial capability, and health documents, including HIV test results. The processing time may take several weeks, so early application is recommended. Proper documentation and timely preparation ensure a smooth process for studying in Russia.",
    ],
  },
  {
    name: "Georgia",
    flag: "🇬🇪",
    lang: "Georgian",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&fit=crop",
    desc: [
      "Studying in Georgia is an increasingly popular option for Bangladeshi students due to its affordable tuition fees and relatively simple admission process. To apply for a Bachelor’s or Master’s program, students must meet basic academic and language requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with satisfactory grades is required. For postgraduate programs, applicants must hold a recognized Bachelor’s degree in a relevant field with a minimum acceptable CGPA.",
      "English language proficiency is required for most programs, as many universities offer courses in English. Some institutions may ask for IELTS or TOEFL scores (typically around 5.5–6.5), while others may conduct internal English proficiency tests or interviews instead.",
      "Applicants must submit necessary documents including academic transcripts, certificates, a valid passport, a statement of purpose (SOP), and sometimes recommendation letters. The application process is usually done directly through the university, and admission decisions are often quick.",
      "After receiving an offer letter, students must apply for a student visa or residence permit. Requirements include proof of sufficient financial resources, accommodation, and valid health insurance. The overall processing time is relatively short compared to other European countries, but early preparation and proper documentation are still important for a smooth admission process.",
    ],
  },
  {
    name: "Romania ",
    flag: "🇷🇴",
    lang: "Romanian",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&fit=crop",
    desc: [
      "Studying in Romania is an increasingly attractive option for Bangladeshi students due to its affordable tuition fees and diverse academic programs. To apply for a Bachelor’s or Master’s program, students must meet academic and language requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with good academic results is necessary. For postgraduate programs, applicants must hold a recognized Bachelor’s degree in a relevant field with a satisfactory CGPA.",
      "English language proficiency is required for programs taught in English, with IELTS (usually 5.5–6.5) or TOEFL scores commonly accepted. Some universities may also offer programs in Romanian, which require proof of Romanian language proficiency or completion of a preparatory language year.",
      "Applicants must submit essential documents including academic transcripts, certificates, a valid passport, a statement of purpose (SOP), CV, and recommendation letters. In some cases, students may need to apply through the Ministry of Education for recognition of their qualifications.",
      "After receiving an acceptance letter, students must apply for a long-stay student visa. Visa requirements include proof of sufficient financial resources, accommodation, and valid health insurance. The processing time can take several weeks to a few months, so early preparation and accurate documentation are crucial for successful admission.",
    ],
  },
  {
    name: "Malta ",
    flag: "🇲🇹",
    lang: "Maltese",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&fit=crop",
    desc: [
      "Studying in Malta is an attractive option for Bangladeshi students due to its English-speaking environment and internationally recognized education system. To apply for a Bachelor’s or Master’s program, students must meet academic and language requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with good academic performance is required. For postgraduate programs, applicants must hold a recognized Bachelor’s degree in a relevant field with a satisfactory CGPA.",
      "English language proficiency is essential, as most programs are taught in English. Universities typically require IELTS (around 6.0–6.5) or TOEFL scores. Some courses may also involve interviews or additional assessments depending on the field of study.",
      "Applicants must submit necessary documents including academic transcripts, certificates, a valid passport, a statement of purpose (SOP), CV, and recommendation letters. After receiving an offer letter, students need to confirm admission and pay any required tuition deposit.",
      "The next step is applying for a student visa. Visa requirements include proof of sufficient financial resources to cover tuition and living expenses, accommodation arrangements, and valid health insurance. The processing time can take several weeks, so early application and accurate documentation are essential for a successful study plan in Malta.",
    ],
  },
  {
    name: "Hungary ",
    flag: "🇭🇺",
    lang: "Hungarian",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&fit=crop",
    desc: [
      "Studying in Hungary is an increasingly popular choice for Bangladeshi students due to its affordable tuition fees and internationally recognized degrees. To apply for a Bachelor’s or Master’s program, students must meet certain academic and language requirements. For undergraduate programs, completion of the Higher Secondary Certificate (HSC) with good academic results is required. For postgraduate studies, applicants must hold a recognized Bachelor’s degree in a relevant subject with a satisfactory CGPA.",
      "English language proficiency is essential for most international programs. Universities typically require IELTS (around 5.5–6.5) or TOEFL scores. Some programs may also include entrance exams or online interviews as part of the selection process, especially in competitive fields.",
      "Applicants need to prepare and submit important documents such as academic transcripts, certificates, a valid passport, a statement of purpose (SOP), CV, and recommendation letters. After receiving an admission offer, students must confirm their place and pay any required tuition deposit.",
      "The next step is applying for a student visa or residence permit. Students must provide proof of sufficient financial resources, accommodation arrangements, and valid health insurance. The entire processing time may take several weeks to a few months, so early application and accurate documentation are crucial for a smooth admission process.",
    ],
  },
  {
    name: "Lithuania ",
    flag: "🇱🇹",
    lang: "Lithuanian",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&fit=crop",
    desc: [
      "Studying in Lithuania is an emerging option for Bangladeshi students due to its affordable tuition fees and growing number of English-taught programs. To apply for a Bachelor’s or Master’s program, students must meet academic and language requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with satisfactory grades is required. For postgraduate programs, applicants must hold a recognized Bachelor’s degree in a relevant field with a good CGPA.",
      "English language proficiency is essential for most programs. Universities generally require IELTS (around 5.5–6.5) or TOEFL scores. Some institutions may also conduct entrance exams or interviews, depending on the chosen course.",
      "Applicants must prepare and submit important documents such as academic transcripts, certificates, a valid passport, a statement of purpose (SOP), CV, and recommendation letters. Once an admission offer is received, students must confirm their place and pay any necessary tuition deposit.",
      "The next step is applying for a national visa (D) or temporary residence permit. Students must provide proof of sufficient financial resources, accommodation arrangements, and valid health insurance. The overall processing time may take several weeks to a few months, so early application and proper documentation are crucial for a smooth admission process.",
    ],
  },
  {
    name: "Finland ",
    flag: "🇫🇮",
    lang: "Finnish",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&fit=crop",
    desc: [
      "Studying in Finland is an excellent option for Bangladeshi students due to its world-class education system and focus on research and innovation. To apply for a Bachelor’s or Master’s program, students must meet academic and language requirements. For undergraduate programs, completion of the Higher Secondary Certificate (HSC) with strong academic results is required. For postgraduate studies, applicants must hold a recognized Bachelor’s degree in a relevant field with a good CGPA.",
      "English language proficiency is mandatory, as many programs are offered in English. Most universities require IELTS (typically 6.0–6.5 for Bachelor’s and 6.5–7.0 for Master’s) or TOEFL scores. Some programs may also require entrance exams, portfolios, or interviews depending on the field of study.",
      "Applicants need to submit essential documents including academic transcripts, certificates, a valid passport, a statement of purpose (SOP), CV, and recommendation letters. After receiving an offer letter, students must confirm their place and pay any required tuition deposit.",
      "The next step is applying for a student residence permit. Requirements include proof of sufficient funds, accommodation arrangements, and valid health insurance. The processing time can take several weeks to a few months, so early application and proper documentation are crucial for successful admission.",
    ],
  },
  {
    name: "Estonia",
    flag: "🇪🇪",
    lang: "Estonian",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&fit=crop",
    desc: [
      "Studying in Estonia is an increasingly popular choice for Bangladeshi students due to its innovative education system and affordable tuition fees. To apply for a Bachelor’s or Master’s program, students must meet specific academic and language requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with good grades is required, while postgraduate applicants must hold a recognized Bachelor’s degree in a relevant field.",
      "English language proficiency is essential, as many programs are taught in English. Most universities require IELTS (usually 6.0–6.5) or TOEFL scores. Some institutions may also conduct entrance exams or interviews depending on the program.",
      "Applicants must prepare and submit important documents such as academic transcripts, certificates, a valid passport, a statement of purpose (SOP), and recommendation letters. After receiving an offer letter from an Estonian university, students need to confirm their admission and pay any required fees.",
      "The next step is applying for a long-term student visa or a temporary residence permit. Students must provide proof of sufficient financial resources, accommodation, and valid health insurance. The processing time may take several weeks to a few months, so early application is strongly recommended to ensure a smooth admission process.",
    ],
  },
  {
    name: "Czech Republic",
    flag: "🇨🇿",
    lang: "Czech",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&fit=crop",
    desc: [
      "Studying in the Czech Republic is becoming increasingly popular among Bangladeshi students due to its affordable tuition fees and high-quality education system. To apply for a Bachelor’s or Master’s program, students must meet specific academic and language requirements. For undergraduate programs, completion of the Higher Secondary Certificate (HSC) with satisfactory grades is necessary. For postgraduate studies, applicants must hold a recognized Bachelor’s degree in a relevant field.",
      "Language proficiency depends on the program. Courses taught in English typically require IELTS (minimum 6.0–6.5) or TOEFL scores, while programs in Czech may require proof of Czech language proficiency. Some universities may also require entrance exams or interviews as part of the admission process.",
      "Applicants need to submit essential documents such as academic transcripts, certificates, a valid passport, a statement of purpose (SOP), and recommendation letters. After receiving an acceptance letter, students must apply for a long-term student visa. Visa requirements include proof of accommodation, sufficient financial resources, and health insurance.",
      "The admission and visa processing time may take several weeks to a few months. Therefore, early application and proper documentation are highly recommended to ensure a smooth transition for studying in the Czech Republic.",
    ],
  },
  {
    name: "Austria ",
    flag: "🇦🇹",
    lang: "German",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&fit=crop",
    desc: [
      "Studying in Austria is an excellent option for Bangladeshi students seeking high-quality and affordable education in Europe. To enroll in a Bachelor’s or Master’s program, students must first meet academic qualifications. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with good grades is required, while postgraduate applicants must hold a recognized Bachelor’s degree in a relevant field.",
      "A key requirement in Austria is proof of eligibility to study the same subject in Bangladesh, meaning students may need to show admission to a similar program in their home country. Language proficiency is also essential. Many programs are taught in German, requiring certificates like ÖSD or TestDaF, while English-taught programs usually require IELTS (around 6.0–6.5) or TOEFL.",
      "Applicants must prepare documents including academic transcripts, certificates, passport, motivation letter, CV, and sometimes recommendation letters. After receiving an admission letter, students must apply for a residence permit (student visa). This process requires proof of sufficient financial resources, accommodation, and health insurance.",
      "The application and visa process can take several months, so early preparation is crucial. Careful documentation and meeting all requirements improve the chances of successful admission and study in Austria.",
    ],
  },
  {
    name: "Cyprus",
    flag: "🇨🇾",
    lang: "Greek / Turkish",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&fit=crop",
    desc: [
      "Studying in Cyprus is an increasingly popular option for Bangladeshi students due to its affordable tuition fees and wide range of English-taught programs. To apply for a Bachelor’s or Master’s program, students must meet academic and language requirements. For undergraduate studies, completion of the Higher Secondary Certificate (HSC) with satisfactory grades is required. For postgraduate programs, applicants must hold a recognized Bachelor’s degree in a relevant field with a good CGPA.",
      "English language proficiency is essential, as most programs are offered in English. Universities typically require IELTS (around 4.0–6.5) or TOEFL scores, although some institutions may accept alternative proof of English proficiency or conduct internal language tests or interviews.",
      "Applicants must submit important documents including academic transcripts, certificates, a valid passport, a statement of purpose (SOP), CV, and recommendation letters. Some programs may also require an interview or additional documentation depending on the course.",
      "After receiving an admission offer, students must confirm their enrollment and pay any required tuition deposit. The next step is applying for a student visa. Students must provide proof of sufficient financial resources, accommodation arrangements, and health insurance. The processing time usually takes several weeks, so early application and accurate documentation are essential for a smooth admission process in Cyprus.",
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
                  href="/#counseling"
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

        <p className=" text-center py-7">
          N.B: We collaborate with a number of countries, <br /> including:
          Greece, Latvia, Luxembourg, Norway, Poland, Portugal, Spain, and
          Switzerland
        </p>
      </main>
      <Footer />
    </div>
  );
}
