import { Link } from "wouter";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";

export function Footer() {
  const queryClient = useQueryClient();
  const authUser = queryClient.getQueryData(["authUser"]);
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="size-14 ">
                <img
                  src="/white-logo.png"
                  alt=""
                  className=" w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Visa Express
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed text-justify">
              Your trusted partner for international visa processing,
              immigration consulting, and global mobility solutions. Experience
              the world without borders.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/visaaexpress"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/+8801718502964"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/visa_express_bd/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/visaexpress/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@visa_express_bd"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  onClick={(e) => {
                    e.preventDefault();

                    if (window.location.pathname !== "/") {
                      window.location.href = "/#about";
                    } else {
                      document.getElementById("about")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => {
                    e.preventDefault();

                    if (window.location.pathname !== "/") {
                      window.location.href = "/#services";
                    } else {
                      document.getElementById("services")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  onClick={(e) => {
                    e.preventDefault();

                    if (window.location.pathname !== "/") {
                      window.location.href = "/#process";
                    } else {
                      document.getElementById("process")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  onClick={(e) => {
                    e.preventDefault();

                    if (window.location.pathname !== "/") {
                      window.location.href = "/#testimonials";
                    } else {
                      document.getElementById("testimonials")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/ielts"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  IELTS
                </Link>
              </li>
              <li>
                <Link
                  href="/pte"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  PTE
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className="text-white/70 hover:text-accent transition-colors">
                  Eligibility Check
                </Link>
              </li>
              <li>
                <Link className="text-white/70 hover:text-accent transition-colors">
                  Language Preparation
                </Link>
              </li>
              <li>
                <Link className="text-white/70 hover:text-accent transition-colors">
                  Language Testing Partner
                </Link>
              </li>
              <li>
                <Link className="text-white/70 hover:text-accent transition-colors">
                  Free Counselling
                </Link>
              </li>
              <li>
                <Link className="text-white/70 hover:text-accent transition-colors">
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link className="text-white/70 hover:text-accent transition-colors">
                  Free Application
                </Link>
              </li>
              <li>
                <Link className="text-white/70 hover:text-accent transition-colors">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link className="text-white/70 hover:text-accent transition-colors">
                  Pre-Arrival and Air Ticket Confirmation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/70">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Head Office - Tribune Tower (Level#3), 2/B KDA Avenue (Dhaka
                  Bank Building)
                </span>
              </li>
              <li className="flex items-center space-x-3 text-white/70">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+8801718502964</span>
              </li>
              <li className="flex items-center space-x-3 text-white/70">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>contact@visaexpressbd.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Visa Express. All rights reserved.
          </p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <a
              href="https://sgp.mywhiteserver.com:2096/"
              target="_blank"
              className="text-white/50 hover:text-white text-sm"
            >
              Webmail
            </a>
            <Link
              href="/admission"
              className="text-white/50 hover:text-white text-sm"
            >
              Go
            </Link>
            {!!authUser && !!authUser?.isAdmin && (
              <Link
                href="/dashboard"
                className="text-white/50 hover:text-white text-sm"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
