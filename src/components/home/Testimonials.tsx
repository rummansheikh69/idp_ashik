import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export function Testimonials() {
  const [reviews, setReviews] = useState<any[]>([]);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch(
        "https://featurable.com/api/v1/widgets/e6d61b1c-f73c-4cf3-a766-cf1c1e2b4715",
      );
      const data = await res.json();
      if (data.success) setReviews(data.reviews);
    };
    fetchReviews();
  }, []);

  if (!reviews.length) return null;

  return (
    <section className="py-24 bg-secondary/50 relative ">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, hsl(358 68% 95%) 0px, hsl(358 68% 95%) 1px, transparent 1px, transparent 60px)",
        }}
      />
      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <div className="inline-flex items-center space-x-2 bg-primary/8 px-4 py-2 rounded-full mb-5 border border-primary/12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Reviews
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
          Success Stories From
          <span className="text-accent">Our Students</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 shrink-0 w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white shadow-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
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
        >
          {reviews.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl p-6  h-[400px] border border-gray-200 flex flex-col ">
                <div className=" flex items-center justify-between w-full">
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  <a
                    href="https://search.google.com/local/writereview?placeid=ChIJWWCw8gKQ_zkRcUeGe7ptUr4"
                    target="_blank"
                  >
                    <div className=" size-7">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/250px-Google_%22G%22_logo.svg.png"
                        alt="google"
                        className=" w-full h-full object-contain"
                      />
                    </div>
                  </a>
                </div>

                <div className="flex mb-3">
                  {[...Array(t.starRating)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <div className=" flex-1">
                  <p className="text-sm text-gray-600 text-justify italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={
                      t.reviewer?.profilePhotoUrl ||
                      "https://ui-avatars.com/api/?name=User"
                    }
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <p className="font-semibold text-sm">
                    {t.reviewer?.displayName}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 shrink-0 w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white shadow-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
