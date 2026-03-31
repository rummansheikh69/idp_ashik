import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ArrowLeft,
} from "lucide-react";
import { Link } from "wouter";

const BRANCHES = [
  {
    city: "Jessore",
    address: "Rahman Plaza, 2nd Floor, Court Road, Jessore - 7400, Bangladesh",
    phone: "+880 421-60000",
    mobile: "+880 1711-000111",
    email: "jessore@globalvisa.com",
    mapSrc:
      "https://maps.google.com/maps?q=Jessore,Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed",
    social: {
      facebook: "https://facebook.com/globalvisa.jessore",
      instagram: "https://instagram.com/globalvisa.jessore",
      youtube: "https://youtube.com/@globalvisa",
    },
    hours: "Sat – Thu: 9:00 AM – 6:00 PM",
  },
  {
    city: "Khulna",
    address: "City Centre, 3rd Floor, KDA Avenue, Khulna - 9100, Bangladesh",
    phone: "+880 41-720000",
    mobile: "+880 1722-000222",
    email: "khulna@globalvisa.com",
    mapSrc:
      "https://maps.google.com/maps?q=Khulna,Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed",
    social: {
      facebook: "https://facebook.com/globalvisa.khulna",
      instagram: "https://instagram.com/globalvisa.khulna",
      youtube: "https://youtube.com/@globalvisa",
    },
    hours: "Sat – Thu: 9:00 AM – 6:00 PM",
  },
];

function BranchCard({ branch }: { branch: (typeof BRANCHES)[0] }) {
  return (
    <div className="bg-white rounded-3xl border border-border shadow-xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-primary px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">
              {branch.city} Branch
            </h2>
            <p className="text-white/60 text-sm">{branch.hours}</p>
          </div>
        </div>
      </div>

      {/* Contact info */}
      <div className="px-8 py-6 space-y-4 border-b border-border">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <p className="text-foreground/80 text-sm leading-relaxed">
            {branch.address}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-accent shrink-0" />
          <div>
            <p className="text-sm text-foreground font-medium">
              {branch.phone}
            </p>
            <p className="text-sm text-foreground/70">{branch.mobile}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-accent shrink-0" />
          <a
            href={`mailto:${branch.email}`}
            className="text-sm text-primary font-semibold hover:underline"
          >
            {branch.email}
          </a>
        </div>
      </div>

      {/* Social links */}
      <div className="px-8 py-5 border-b border-border">
        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-3">
          Follow Us
        </p>
        <div className="flex gap-3">
          <a
            href={branch.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href={branch.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={branch.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 min-h-[280px]">
        <iframe
          src={branch.mapSrc}
          title={`${branch.city} location`}
          className="w-full h-full min-h-[280px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      {/* CTA */}
      <div className="px-8 py-5">
        <Link
          href="/#counseling"
          className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-sm flex items-center justify-center gap-2"
        >
          Book Appointment at {branch.city}
        </Link>
      </div>
    </div>
  );
}

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <div className="bg-primary text-white py-16 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Our Branches
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Visit us at any of our branches across Bangladesh. Our expert
              counsellors are ready to guide you.
            </p>
          </div>
        </div>

        {/* Branches grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {BRANCHES.map((b) => (
              <BranchCard key={b.city} branch={b} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
