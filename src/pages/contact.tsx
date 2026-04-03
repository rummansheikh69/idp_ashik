import { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowLeft,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link } from "wouter";

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "Head Office",
    value: " Tribune Tower (Level#3), 2/B KDA Avenue (Dhaka Bank Building)",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+880 421-60000 · +880 1711-000111",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@globalvisa.com",
    href: "mailto:info@globalvisa.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Saturday – Thursday: 9:00 AM – 6:00 PM",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition";
  const labelCls = "block text-sm font-semibold text-foreground/70 mb-1.5";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
              Contact Us
            </h1>
            <p className="text-white/75 text-lg">
              We're here to help. Reach out and we'll respond within 24 hours.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Info panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info cards */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="bg-primary px-6 py-5">
                  <h2 className="font-display font-bold text-white text-lg">
                    Get in Touch
                  </h2>
                  <p className="text-white/60 text-sm mt-1">
                    Our counsellors are always ready to assist you.
                  </p>
                </div>
                <div className="divide-y divide-border">
                  {INFO_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 px-6 py-4"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-primary font-semibold hover:underline"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground/80">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com/globalvisa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-4 h-4" /> Facebook
                  </a>
                  <a
                    href="https://instagram.com/globalvisa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                  <a
                    href="https://youtube.com/@globalvisa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors"
                  >
                    <Youtube className="w-4 h-4" /> YouTube
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5104813642683!2d89.55050037603236!3d22.82059572383406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9002f2b06059%3A0xbe526dba7b864771!2sVisa%20Express!5e0!3m2!1sen!2sbd!4v1775173725271!5m2!1sen!2sbd"
                  title="GlobalVisa Head Office location"
                  className="w-full h-56 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-border shadow-sm p-16 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-primary mb-3">
                    Message Sent!
                  </h2>
                  <p className="text-muted-foreground max-w-sm text-sm mb-8">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="text-primary font-semibold underline underline-offset-2 text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                  <div className="p-8">
                    <h2 className="text-2xl font-display font-bold text-primary mb-1">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground text-sm mb-8">
                      Fill in the form below and we'll get back to you promptly.
                    </p>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls}>Full Name *</label>
                          <input
                            required
                            value={form.name}
                            onChange={(e) => set("name", e.target.value)}
                            placeholder="Your full name"
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
                            placeholder="you@example.com"
                            className={inputCls}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls}>Phone Number</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => set("phone", e.target.value)}
                            placeholder="+880 1700-000000"
                            className={inputCls}
                          />
                        </div>
                        <div>
                          <label className={labelCls}>Subject *</label>
                          <input
                            required
                            value={form.subject}
                            onChange={(e) => set("subject", e.target.value)}
                            placeholder="e.g. UK Student Visa Enquiry"
                            className={inputCls}
                          />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls}>Message *</label>
                        <textarea
                          required
                          rows={6}
                          value={form.message}
                          onChange={(e) => set("message", e.target.value)}
                          placeholder="Tell us about your study plans, visa questions, or any other enquiry..."
                          className={inputCls + " resize-none"}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 active:scale-[0.99] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 text-sm"
                      >
                        <Send className="w-4 h-4" /> Send Message
                      </button>
                      <p className="text-center text-xs text-muted-foreground">
                        We typically respond within 2–4 business hours.
                      </p>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
