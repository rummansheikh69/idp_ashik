import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../../lib/data";

const AUTOPLAY_MS = 4000;

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const N = TESTIMONIALS.length;

  const startAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDir(1);
      setIdx((i) => (i + 1) % N);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const go = (newDir: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDir(newDir);
    setIdx((i) => (i + newDir + N) % N);
    startAutoplay();
  };

  const t = TESTIMONIALS[idx];

  return (
    <section
      id="testimonials"
      className="py-24 bg-secondary/50 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, hsl(358 68% 95%) 0px, hsl(358 68% 95%) 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 bg-primary/8 px-4 py-2 rounded-full mb-5 border border-primary/12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What Our Clients Say
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
            Success Stories From{" "}
            <span className="text-accent">Our Students</span>
          </h2>
        </div>

        {/* Single-card slider */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => go(-1)}
            className="shrink-0 w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white shadow-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 overflow-hidden">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={idx}
                custom={dir}
                initial={(d: number) => ({
                  x: d > 0 ? "60%" : "-60%",
                  opacity: 0,
                })}
                animate={{ x: "0%", opacity: 1 }}
                exit={(d: number) => ({
                  x: d > 0 ? "-60%" : "60%",
                  opacity: 0,
                })}
                transition={{ duration: 0.38, ease: "easeInOut" }}
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-border relative">
                  {/* Red accent bar at top */}
                  <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />

                  <Quote className="w-10 h-10 text-primary/10 mb-4 mt-2" />

                  <div className="flex space-x-1 mb-5">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star
                        key={s}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed italic mb-8 text-base md:text-lg">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/15 shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-primary text-base">
                        {t.name}
                      </h4>
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                        {t.country}
                      </p>
                    </div>
                    {/* Counter */}
                    <div className="ml-auto text-sm text-muted-foreground font-medium">
                      {idx + 1} / {N}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => go(1)}
            className="shrink-0 w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white shadow-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > idx ? 1 : -1);
                setIdx(i);
                startAutoplay();
              }}
              className={`rounded-full transition-all duration-300 ${i === idx ? "w-7 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-primary/20 hover:bg-primary/40"}`}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
