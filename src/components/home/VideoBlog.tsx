import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  Eye,
  Clock,
} from "lucide-react";
import { VIDEOS } from "../../lib/data";

const VISIBLE = 3;
const AUTOPLAY_MS = 5000;

export function VideoBlog() {
  const [startIdx, setStartIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const N = VIDEOS.length;

  const startAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDir(1);
      setStartIdx((i) => (i + 1) % N);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const go = (d: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDir(d);
    setStartIdx((i) => (i + d + N) % N);
    startAuto();
  };

  const cards = Array.from(
    { length: VISIBLE },
    (_, i) => VIDEOS[(startIdx + i) % N],
  );

  return (
    <section
      id="blog"
      className="py-24 bg-foreground/[0.02] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center bg-primary/8 px-4 py-2 rounded-full mb-5 border border-primary/12">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Video Blog
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Learn From Our <span className="text-accent">Experts</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed md:text-right">
            Watch our free guides on visas, university applications, and life
            abroad.
          </p>
        </div>

        {/* Slider */}
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
                key={startIdx}
                custom={dir}
                initial={(d: number) => ({
                  x: d > 0 ? "40%" : "-40%",
                  opacity: 0,
                })}
                animate={{ x: "0%", opacity: 1 }}
                exit={(d: number) => ({
                  x: d > 0 ? "-40%" : "40%",
                  opacity: 0,
                })}
                transition={{ duration: 0.38, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {cards.map((video, ci) => (
                  <a
                    key={`${video.id}-${ci}`}
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden bg-foreground/10">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <PlayCircle className="w-14 h-14 text-white drop-shadow-xl group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {/* Duration badge */}
                      <span className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-xs font-bold px-2 py-0.5 rounded">
                        {video.duration}
                      </span>
                      {/* Category badge */}
                      <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {video.category}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-display font-bold text-foreground text-sm leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-semibold mb-4">
                        {video.channel}
                      </p>
                      <div className="flex items-center gap-4 mt-auto text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" /> {video.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {video.date}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
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
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > startIdx ? 1 : -1);
                setStartIdx(i);
                startAuto();
              }}
              className={`rounded-full transition-all duration-300 ${i === startIdx ? "w-7 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-primary/20 hover:bg-primary/40"}`}
              aria-label={`Video ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
