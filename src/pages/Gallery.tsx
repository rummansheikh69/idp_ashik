import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { SERVER_URL } from "../lib/data";

// Match the Backend Schema
interface GalleryItem {
  _id: string;
  title: string;
  description?: string;
  image: string;
}

export default function Gallery() {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Fetching data from your backend
  const { data: items = [], isLoading } = useQuery({
    queryKey: ["gallery-public"],
    queryFn: async () => {
      const res = await fetch(`${SERVER_URL}/api/user/gallery`);
      if (!res.ok) throw new Error("Failed to fetch gallery");
      return res.json();
    },
  });

  return (
    <div className="min-h-screen bg-[#FFF5F5] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-[80px]">
        {/* Page Header */}
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
                students, and milestones.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Masonry Grid Section */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-24 text-[#8B0000]">
              <Loader2 className="w-10 h-10 animate-spin mb-4" />
              <p className="font-medium">Loading gallery...</p>
            </div>
          ) : (
            <>
              <motion.div
                layout
                className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
              >
                <AnimatePresence mode="popLayout">
                  {items.map((item: GalleryItem, i: number) => (
                    <motion.div
                      key={item._id}
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

              {items.length === 0 && (
                <div className="text-center py-24 text-red-300">
                  No items in the gallery yet.
                </div>
              )}
            </>
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
        src={item.image}
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

      {/* Title & description */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white font-semibold text-lg leading-tight">
          {item.title}
        </p>
        {item.description && (
          <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            {item.description}
          </p>
        )}
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
        className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-contain max-h-[75vh] mx-auto bg-black/20"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4A0010]/95 via-[#4A0010]/70 to-transparent p-8">
          <h2 className="text-white text-2xl font-bold">{item.title}</h2>
          {item.description && (
            <p className="text-white/70 text-base mt-2 max-w-2xl">
              {item.description}
            </p>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#C0152A]/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#C0152A] transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}
