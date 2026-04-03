import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const textCls = (scrolled: boolean, location: string) =>
  scrolled || location !== "/" ? "text-foreground/80 " : "text-white/90";

const dropdownItemCls =
  "flex items-center px-5 py-3 text-sm font-medium text-foreground/80 hover:bg-primary/5 hover:text-primary transition-colors cursor-pointer w-full";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = isScrolled || location !== "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${solid ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div
              className={`${isScrolled || location !== "/" ? "w-12" : "w-20"} transition-all duration-300`}
            >
              <img
                src="/logo.png"
                alt="logo"
                className=" w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-2 font-medium text-sm transition-colors hover:text-accent ${textCls(isScrolled, location)}`}
            >
              Home
            </Link>

            {/* About Us dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-3 py-2 font-medium text-sm transition-colors hover:text-accent ${textCls(isScrolled, location)}`}
              >
                About Us{" "}
                <ChevronDown className="w-3.5 h-3.5 mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 pt-2 z-50 min-w-[220px]">
                <div className="bg-white rounded-xl shadow-2xl border border-border overflow-hidden">
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
                    className={dropdownItemCls}
                  >
                    Our Services
                  </Link>
                  <Link href="/about/director" className={dropdownItemCls}>
                    Message from Director
                  </Link>
                  <Link
                    href="/#counseling"
                    onClick={(e) => {
                      e.preventDefault();

                      if (window.location.pathname !== "/") {
                        window.location.href = "/#counseling";
                      } else {
                        document.getElementById("counseling")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                    className={dropdownItemCls}
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </div>

            {/* Language Courses dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-3 py-2 font-medium text-sm transition-colors hover:text-accent ${textCls(isScrolled, location)}`}
              >
                Language Courses{" "}
                <ChevronDown className="w-3.5 h-3.5 mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 pt-2 z-50 min-w-[220px]">
                <div className="bg-white rounded-xl shadow-2xl border border-border overflow-hidden">
                  <Link href="/ielts" className={dropdownItemCls}>
                    IELTS
                  </Link>
                  <Link href="/pte" className={dropdownItemCls}>
                    PTE
                  </Link>
                </div>
              </div>
            </div>
            {/* study abroad dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-3 py-2 font-medium text-sm transition-colors hover:text-accent ${textCls(isScrolled, location)}`}
              >
                Study Abroad{" "}
                <ChevronDown className="w-3.5 h-3.5 mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute hidden group-hover:block top-full left-0 pt-2 z-50 min-w-[220px]">
                <div className="bg-white rounded-xl shadow-2xl border border-border overflow-hidden">
                  <Link
                    href="/language-courses/english"
                    className={dropdownItemCls}
                  >
                    English Countries
                  </Link>
                  <Link
                    href="/language-courses/european"
                    className={dropdownItemCls}
                  >
                    European Countries
                  </Link>
                  <Link
                    href="/language-courses/other"
                    className={dropdownItemCls}
                  >
                    Other Countries
                  </Link>
                </div>
              </div>
            </div>

            {/* Branches */}
            <Link
              href="/branches"
              className={`px-3 py-2 font-medium text-sm transition-colors hover:text-accent ${textCls(isScrolled, location)}`}
            >
              Branches
            </Link>

            <Link
              href="/gallery"
              className={`px-3 py-2 font-medium text-sm transition-colors hover:text-accent ${textCls(isScrolled, location)}`}
            >
              Gallery
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3 py-2 font-medium text-sm transition-colors hover:text-accent ${textCls(isScrolled, location)}`}
            >
              Contact
            </Link>

            {/* Apply Now */}
            <Link
              href="/apply"
              className="ml-3 bg-accent text-white hover:bg-accent/90 font-semibold rounded-full px-6 py-2.5 text-sm shadow-lg shadow-accent/20 transition-colors inline-block"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X
                className={`w-6 h-6 ${solid ? "text-primary" : "text-white"}`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${solid ? "text-primary" : "text-white"}`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-1">
              <Link
                href="/"
                onClick={() => {
                  setMobileOpen(false);
                }}
                className="py-2.5 px-3 font-medium text-foreground border-b border-border/40"
              >
                Home
              </Link>

              {/* About Us mobile */}
              <div>
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === "about" ? null : "about",
                    )
                  }
                  className="w-full flex justify-between items-center py-2.5 px-3 font-medium text-foreground border-b border-border/40"
                >
                  About Us{" "}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileExpanded === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpanded === "about" && (
                  <div className="pl-4 bg-secondary/40 rounded-lg mt-1 mb-1 py-1">
                    <Link
                      href="/#services"
                      onClick={(e) => {
                        setMobileOpen(false);
                        e.preventDefault();

                        if (window.location.pathname !== "/") {
                          window.location.href = "/#services";
                        } else {
                          document.getElementById("services")?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                      className="block py-2 px-3 text-sm text-foreground/80"
                    >
                      Our Services
                    </Link>
                    <Link
                      href="/about/director"
                      onClick={() => {
                        setMobileOpen(false);
                      }}
                      className="block py-2 px-3 text-sm text-foreground/80"
                    >
                      Message from Director
                    </Link>
                    <Link
                      href="/#counseling"
                      onClick={() => {
                        setMobileOpen(false);
                      }}
                      className="block py-2 px-3 text-sm text-foreground/80"
                    >
                      Book an Appointment
                    </Link>
                  </div>
                )}
              </div>

              {/* Study abroad mobile */}
              <div>
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === "lang" ? null : "lang")
                  }
                  className="w-full flex justify-between items-center py-2.5 px-3 font-medium text-foreground border-b border-border/40"
                >
                  Study Abroad{" "}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileExpanded === "lang" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpanded === "lang" && (
                  <div className="pl-4 bg-secondary/40 rounded-lg mt-1 mb-1 py-1">
                    <Link
                      href="/language-courses/english"
                      onClick={() => {
                        setMobileOpen(false);
                      }}
                      className="block py-2 px-3 text-sm text-foreground/80"
                    >
                      English Countries
                    </Link>
                    <Link
                      href="/language-courses/european"
                      onClick={() => {
                        setMobileOpen(false);
                      }}
                      className="block py-2 px-3 text-sm text-foreground/80"
                    >
                      European Countries
                    </Link>
                    <Link
                      href="/language-courses/other"
                      onClick={() => {
                        setMobileOpen(false);
                      }}
                      className="block py-2 px-3 text-sm text-foreground/80"
                    >
                      Other Countries
                    </Link>
                  </div>
                )}
              </div>

              {/*  Language Courses mobile */}
              <div>
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === "study" ? null : "study",
                    )
                  }
                  className="w-full flex justify-between items-center py-2.5 px-3 font-medium text-foreground border-b border-border/40"
                >
                  Language Courses{" "}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileExpanded === "study" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpanded === "study" && (
                  <div className="pl-4 bg-secondary/40 rounded-lg mt-1 mb-1 py-1">
                    <Link
                      href="/ielts"
                      onClick={() => {
                        setMobileOpen(false);
                      }}
                      className="block py-2 px-3 text-sm text-foreground/80"
                    >
                      IELTS
                    </Link>
                    <Link
                      href="/pte"
                      onClick={() => {
                        setMobileOpen(false);
                      }}
                      className="block py-2 px-3 text-sm text-foreground/80"
                    >
                      PTE
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/branches"
                onClick={() => {
                  setMobileOpen(false);
                }}
                className="py-2.5 px-3 font-medium text-foreground border-b border-border/40"
              >
                Branches
              </Link>
              <Link
                href="/gallery"
                onClick={() => {
                  setMobileOpen(false);
                }}
                className="py-2.5 px-3 font-medium text-foreground border-b border-border/40"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                onClick={() => {
                  setMobileOpen(false);
                }}
                className="py-2.5 px-3 font-medium text-foreground border-b border-border/40"
              >
                Contact
              </Link>

              <Link
                href="/apply"
                onClick={() => {
                  setMobileOpen(false);
                }}
                className="mt-3 bg-accent text-white font-bold py-3 rounded-xl text-center block"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
