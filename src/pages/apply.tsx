import { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { CheckCircle2, Send } from "lucide-react";
import { Link } from "wouter";

const FLAGS = [
  { code: "GB", name: "UK", flag: "🇬🇧", color: "from-blue-800 to-red-700" },
  { code: "US", name: "USA", flag: "🇺🇸", color: "from-blue-900 to-red-600" },
  { code: "CA", name: "Canada", flag: "🇨🇦", color: "from-red-700 to-red-500" },
  {
    code: "AU",
    name: "Australia",
    flag: "🇦🇺",
    color: "from-blue-900 to-red-700",
  },
  {
    code: "NZ",
    name: "New Zealand",
    flag: "🇳🇿",
    color: "from-blue-900 to-red-600",
  },
  {
    code: "IE",
    name: "Ireland",
    flag: "🇮🇪",
    color: "from-green-700 to-orange-500",
  },
  {
    code: "DE",
    name: "Germany",
    flag: "🇩🇪",
    color: "from-gray-900 to-red-700",
  },
  { code: "FR", name: "France", flag: "🇫🇷", color: "from-blue-700 to-red-600" },
];

const COUNTRIES = [
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "New Zealand",
  "Ireland",
  "Germany",
  "France",
  "Netherlands",
  "Spain",
  "Japan",
  "South Korea",
  "Other",
];
const LEVELS = [
  "Foundation / Pre-University",
  "Undergraduate Degree",
  "Postgraduate / Masters",
  "PhD / Research",
  "Diploma / Certificate",
  "Language Course",
  "Other",
];
const IELTS = [
  "Not yet taken",
  "4.0 – 4.5",
  "5.0 – 5.5",
  "6.0 – 6.5",
  "7.0 – 7.5",
  "8.0+",
  "Using PTE / TOEFL",
];
const PASSPORT = [
  "Valid passport",
  "Expired — needs renewal",
  "No passport yet",
];

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    country: "",
    level: "",
    course: "",
    education: "",
    ielts: "",
    passport: "",
    message: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition";
  const labelCls = "block text-sm font-semibold text-foreground/70 mb-1.5";

  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      <main className="pt-20">
        {/* Country flags hero */}
        <div className="bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
                Start Your Application
              </h1>
              <p className="text-white/75 text-lg">
                Join 50,000+ students who studied abroad with GlobalVisa
              </p>
            </div>

            {/* Flag cards */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 max-w-4xl mx-auto">
              {FLAGS.map((f) => (
                <div
                  key={f.code}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div
                    className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform duration-200`}
                  >
                    {f.flag}
                  </div>
                  <span className="text-white/80 text-xs font-semibold">
                    {f.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {submitted ? (
            <div className="bg-white rounded-3xl border border-border shadow-xl p-16 text-center">
              <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">
                Application Received!
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Thank you! Our team will review your application and get in
                touch within 24 hours. Check your email inbox.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    dob: "",
                    country: "",
                    level: "",
                    course: "",
                    education: "",
                    ielts: "",
                    passport: "",
                    message: "",
                  });
                }}
                className="text-primary font-semibold underline underline-offset-2 text-sm"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-border shadow-xl overflow-hidden">
              {/* Top stripe */}
              <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-display font-bold text-primary mb-2">
                  Personal & Study Details
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  All fields marked * are required. We'll contact you within 24
                  hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal info */}
                  <div>
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 pb-2 border-b border-border">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>First Name *</label>
                        <input
                          required
                          value={form.firstName}
                          onChange={(e) => set("firstName", e.target.value)}
                          placeholder="John"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>Last Name *</label>
                        <input
                          required
                          value={form.lastName}
                          onChange={(e) => set("lastName", e.target.value)}
                          placeholder="Smith"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>Email Address *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder="john@email.com"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>Phone Number *</label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          placeholder="+1 555 000 0000"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>Date of Birth</label>
                        <input
                          type="date"
                          value={form.dob}
                          onChange={(e) => set("dob", e.target.value)}
                          className={inputCls}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Study preferences */}
                  <div>
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 pb-2 border-b border-border">
                      Study Preferences
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelCls}>Preferred Country *</label>
                        <select
                          required
                          value={form.country}
                          onChange={(e) => set("country", e.target.value)}
                          className={inputCls + " appearance-none"}
                        >
                          <option value="">Select destination</option>
                          {COUNTRIES.map((c) => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Level of Study *</label>
                        <select
                          required
                          value={form.level}
                          onChange={(e) => set("level", e.target.value)}
                          className={inputCls + " appearance-none"}
                        >
                          <option value="">Select level</option>
                          {LEVELS.map((l) => (
                            <option key={l}>{l}</option>
                          ))}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className={labelCls}>
                          Course / Program of Interest
                        </label>
                        <input
                          value={form.course}
                          onChange={(e) => set("course", e.target.value)}
                          placeholder="e.g. Computer Science, Business Administration"
                          className={inputCls}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Academic background */}
                  <div>
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 pb-2 border-b border-border">
                      Academic & Visa Status
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label className={labelCls}>Highest Education</label>
                        <input
                          value={form.education}
                          onChange={(e) => set("education", e.target.value)}
                          placeholder="e.g. HSC / A-Levels"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>IELTS Score</label>
                        <select
                          value={form.ielts}
                          onChange={(e) => set("ielts", e.target.value)}
                          className={inputCls + " appearance-none"}
                        >
                          <option value="">Select score</option>
                          {IELTS.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Passport Status</label>
                        <select
                          value={form.passport}
                          onChange={(e) => set("passport", e.target.value)}
                          className={inputCls + " appearance-none"}
                        >
                          <option value="">Select status</option>
                          {PASSPORT.map((p) => (
                            <option key={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelCls}>Additional Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="Tell us more about your goals, previous study history, or any questions you have..."
                      className={inputCls + " resize-none"}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 active:scale-[0.99] transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-2 text-base"
                  >
                    <Send className="w-4 h-4" /> Submit My Application
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to our privacy policy. Your
                    information is secure and confidential.
                  </p>
                </form>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Need help?{" "}
              <Link
                href="/#counseling"
                className="text-primary font-semibold hover:underline"
              >
                Book a free counseling session
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
