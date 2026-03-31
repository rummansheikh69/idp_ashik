import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const COUNTRIES = [
  "United Kingdom", "United States", "Canada", "Australia",
  "Germany", "France", "Netherlands", "Ireland", "New Zealand", "Other"
];

const PROGRAMS = [
  "Undergraduate Degree", "Postgraduate / Masters", "PhD / Research",
  "Foundation / Diploma", "Language Course", "Professional Certificate",
  "Visa Only", "Not Sure Yet"
];

export function Counseling() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", country: "", program: "", message: ""
  });

  const set = (field: string, value: string) =>
    setForm(f => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="counseling" className="py-24 bg-background relative overflow-hidden">
      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Background radial glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center bg-primary/8 px-4 py-2 rounded-full mb-5 border border-primary/12">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Free Session</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-5 leading-tight">
              Get Free <span className="text-accent">Counseling</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Talk to one of our certified education consultants at no cost. We'll review your profile and guide you toward the best study or visa pathway.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "Call Us", value: "+44 20 7946 0958" },
                { icon: Mail, label: "Email Us", value: "counsel@globalvisa.com" },
                { icon: MapPin, label: "Visit Us", value: "14 Oxford Street, London W1D 1AR" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="font-semibold text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["Free Consultation", "No Hidden Fees", "Expert Advisors", "Same Day Reply"].map(b => (
                <span key={b} className="inline-flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full text-xs font-semibold text-foreground/70 border border-border">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-xl border border-border p-8 md:p-10 relative overflow-hidden">
              {/* Top accent strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">Request Received!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    One of our counsellors will be in touch with you within 24 hours. Check your inbox!
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", country:"", program:"", message:"" }); }}
                    className="mt-8 text-sm font-semibold text-primary underline underline-offset-2"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-display font-bold text-foreground mb-7">Book Your Free Session</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground/70 mb-1.5">Full Name *</label>
                        <input
                          required
                          value={form.name}
                          onChange={e => set("name", e.target.value)}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/40 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground/70 mb-1.5">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={e => set("email", e.target.value)}
                          placeholder="john@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/40 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-foreground/70 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => set("phone", e.target.value)}
                          placeholder="+1 555 000 0000"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/40 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground/70 mb-1.5">Study Destination *</label>
                        <select
                          required
                          value={form.country}
                          onChange={e => set("country", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/40 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition appearance-none"
                        >
                          <option value="">Select country</option>
                          {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground/70 mb-1.5">Program of Interest</label>
                      <select
                        value={form.program}
                        onChange={e => set("program", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/40 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition appearance-none"
                      >
                        <option value="">Select program</option>
                        {PROGRAMS.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground/70 mb-1.5">Your Message</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={e => set("message", e.target.value)}
                        placeholder="Tell us about your goals, qualifications, or any questions..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/40 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-base"
                    >
                      <Send className="w-4 h-4" />
                      Send My Request
                    </button>

                    <p className="text-center text-xs text-muted-foreground">
                      We'll respond within 24 hours. Your data is 100% private.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
