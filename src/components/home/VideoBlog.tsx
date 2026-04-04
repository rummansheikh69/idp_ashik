import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { useRef } from "react";

// Add your YouTube Video IDs here
const VIDEO_BLOGS = [
  {
    id: "1",
    title: "Study in Australia",
    youtubeId: "v40VV5HMmhY", // Replace with actual ID
    category: "Study Abroad",
  },
  {
    id: "2",
    title: "Top 10 Universities in Canada",
    youtubeId: "dQw4w9WgXcQ",
    category: "University",
  },
  {
    id: "3",
    title: "IELTS Speaking Tips & Tricks",
    youtubeId: "dQw4w9WgXcQ",
    category: "IELTS",
  },
  {
    id: "4",
    title: "Life as an International Student",
    youtubeId: "dQw4w9WgXcQ",
    category: "Lifestyle",
  },
];

export function VideoBlog() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-5 border border-primary/10">
              <PlayCircle className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-semibold text-xs uppercase tracking-widest">
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

        {/* Swiper Container */}
        <div className="relative group px-4">
          {/* Custom Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-800 border border-slate-900 flex items-center justify-center  shadow-xl  text-white transition-all duration-300 md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={3}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="rounded-2xl"
          >
            {VIDEO_BLOGS.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 h-full flex flex-col">
                  {/* YouTube Embed Container */}
                  <div className="relative aspect-video w-full bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Video Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-accent/5 px-2 py-1 rounded">
                        {video.category}
                      </span>
                      <h3 className="mt-3 font-display font-bold text-lg text-primary leading-tight line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                    <button
                      onClick={() =>
                        window.open(
                          `https://www.youtube.com/watch?v=${video.youtubeId}`,
                          "_blank",
                        )
                      }
                      className="mt-4 text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1"
                    >
                      WATCH ON YOUTUBE <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-slate-800 border border-slate-900 flex items-center justify-center  shadow-xl  text-white transition-all duration-300 md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
