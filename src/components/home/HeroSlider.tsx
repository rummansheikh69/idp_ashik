import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Loader2, ImageOff } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { SERVER_URL } from "../../lib/data";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // 1. Fetch banners from your backend
  const { data: slides = [], isLoading } = useQuery({
    queryKey: ["banners-public"],
    queryFn: async () => {
      const res = await fetch(`${SERVER_URL}/api/user/banners`);
      if (!res.ok) throw new Error("Failed to fetch banners");
      return res.json();
    },
  });

  // 2. Auto-play logic (only if 2+ slides exist)
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Loading State
  if (isLoading) {
    return (
      <div className="h-[79svh] min-h-[600px] w-full bg-primary flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-accent" />
      </div>
    );
  }

  // Empty State (If you haven't added any banners in the Admin yet)
  if (slides.length === 0) {
    return (
      <div className="h-[79svh] min-h-[600px] w-full bg-primary flex flex-col items-center justify-center text-white/20 p-4">
        <ImageOff size={48} className="mb-4" />
        <p className="text-xl font-medium">No banners found in database</p>
      </div>
    );
  }

  return (
    <div className="relative h-[79svh] min-h-[600px] w-full bg-primary overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current]._id} // Use MongoDB ID as key for smooth transitions
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent z-10" />
          <img
            src={slides[current].image}
            alt={slides[current].title}
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
              {/* Conditional Tag (Checks if 'tag' exists in your schema) */}
              {slides[current].tag && (
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-white text-sm font-medium tracking-wide uppercase">
                    {slides[current].tag}
                  </span>
                </div>
              )}

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
                {slides[current].title}
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
                {slides[current].description}
              </p>

              <div className="hidden md:flex flex-col sm:flex-row gap-4">
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

      {/* Navigation Controls (Only render if there's more than 1 slide) */}
      {slides.length > 1 && (
        <>
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
        </>
      )}
    </div>
  );
}
