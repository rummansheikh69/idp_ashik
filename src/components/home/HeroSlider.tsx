import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "wouter";

const slides = [
  {
    image: "/banner1.png",
    tag: "Study Abroad",
    title: "Study in The USA, Canada & Australia",
    description:
      "Book your free consultation with Certified Counsellors. We guide you from course selection to visa approval.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    tag: "Visa Processing",
    title: "Your Gateway to the World",
    description:
      "Expert visa processing with guaranteed accuracy and speed. We make your global travel dreams a reality.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    tag: "University Admissions",
    title: "120+ Partner Universities Worldwide",
    description:
      "Get access to top-ranked institutions across 16+ nationalities. Your academic future starts here.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2070&auto=format&fit=crop",
    tag: "Expert Guidance",
    title: "99% Visa Success Rate",
    description:
      "Our experienced consultants have helped over 50,000 students achieve their international education goals.",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-[79svh] min-h-[600px] w-full bg-primary overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent z-10" />
          <img
            src={slides[current].image}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white text-sm font-medium tracking-wide uppercase">
                  {slides[current].tag}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
                {slides[current].description}
              </p>
              <div className=" hidden md:flex flex-col sm:flex-row gap-4">
                <Link href="/apply">
                  <Button
                    size="lg"
                    className="bg-accent text-primary hover:bg-accent/90 text-lg px-8 py-6 rounded-full font-bold shadow-xl shadow-accent/20"
                  >
                    Start Application
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute z-20 bottom-32 right-8 flex space-x-4 md:right-16">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute z-20 bottom-32 left-8 md:left-auto md:right-[350px] flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-accent"
                : "w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
