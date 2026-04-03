import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";

type Category = "All" | "Test Centers" | "Students" | "Achievements" | "Global";

interface GalleryItem {
  id: number;

  src?: string;
}

const ITEMS: GalleryItem[] = [
  {
    id: 1,

    src: "https://i.pinimg.com/736x/8d/8f/0a/8d8f0a482a2fccc637a430b1acd756c5.jpg",
  },
  {
    id: 2,

    src: "https://reutersagency.com/hs-fs/hubfs/Home%20Images/Home%20Hero/Main%20screen%20Jan%2025/reuters-agency-home-hero-jan-25-1-california-wildfires-2.webp?width=1240&height=827&name=reuters-agency-home-hero-jan-25-1-california-wildfires-2.webp",
  },
  {
    id: 3,

    src: "https://blog.onevasco.com/wp-content/uploads/Famous-Buildings-in-Australia.jpg",
  },
  {
    id: 4,

    src: "https://i.pinimg.com/736x/8d/8f/0a/8d8f0a482a2fccc637a430b1acd756c5.jpg",
  },
  {
    id: 5,

    src: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Test Centers",
  "Students",
  "Achievements",
  "Global",
];

const accentStyles: Record<string, string> = {
  red: "bg-[#C0152A] text-white",
  crimson: "bg-[#8B0000] text-white",
  rose: "bg-[#E63950] text-white",
  dark: "bg-[#1A0508] text-white",
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered = ITEMS.filter(
    (item) => activeCategory === "All" || item.category === activeCategory,
  );

  return (
    <div className="min-h-screen bg-[#FFF5F5] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-[80px]">
        {/* Page Header — deep red */}
        <section className="bg-[#8B0000] py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#E63950]" />
            <div className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#C0152A]" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#FF8FA3] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
                Visual Journal
              </p>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-none mb-4">
                Gallery
              </h1>
              <p className="text-white/60 text-lg max-w-md leading-relaxed">
                A curated glimpse into the world of Visa Express — test centers,
                students, milestones, and the global reach of English
                proficiency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="break-inside-avoid mb-4 group relative overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => setLightboxItem(item)}
                >
                  <ImageCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-red-300">
              No items in this category yet.
            </div>
          )}
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function ImageCard({ item }: { item: GalleryItem }) {
  return (
    <>
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Red-tinted gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4A0010]/85 via-[#8B0000]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Zoom icon */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-9 h-9 rounded-full bg-[#C0152A]/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
          <ZoomIn className="w-4 h-4 text-white" />
        </div>
      </div>
    </>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A0508]/92 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover max-h-[75vh]"
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C0152A]/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#C0152A]/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}
