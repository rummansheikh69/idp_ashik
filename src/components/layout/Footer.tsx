import { Link } from "wouter";
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background abstract texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <img 
          src={`${import.meta.env.BASE_URL}images/globe-network.png`} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-white/10 p-2 rounded-xl">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Global<span className="text-accent">Visa</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted partner for international visa processing, immigration consulting, and global mobility solutions. Experience the world without borders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-white/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="text-white/70 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/#process" className="text-white/70 hover:text-accent transition-colors">How It Works</Link></li>
              <li><Link href="/#testimonials" className="text-white/70 hover:text-accent transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/tourist-visa" className="text-white/70 hover:text-accent transition-colors">Tourist Visa</Link></li>
              <li><Link href="/services/student-visa" className="text-white/70 hover:text-accent transition-colors">Student Visa</Link></li>
              <li><Link href="/services/work-permit" className="text-white/70 hover:text-accent transition-colors">Work Permit</Link></li>
              <li><Link href="/services/business-visa" className="text-white/70 hover:text-accent transition-colors">Business Visa</Link></li>
              <li><Link href="/services/family-reunion" className="text-white/70 hover:text-accent transition-colors">Family Reunion</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/70">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>123 Global Avenue, Suite 500<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-white/70">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-white/70">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@globalvisa.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} GlobalVisa Processing Center. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
