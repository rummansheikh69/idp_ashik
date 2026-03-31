import { Navbar } from "../components/layout/Navbar";
import { HeroSlider } from "../components/home/HeroSlider";
import { Stats } from "../components/home/Stats";
import { About } from "../components/home/About";
import { ServicesGrid } from "../components/home/ServicesGrid";
import { HowItWorks } from "../components/home/HowItWorks";
import { Testimonials } from "../components/home/Testimonials";
import { CTA } from "../components/home/CTA";
import { Counseling } from "../components/home/Counseling";
import { VideoBlog } from "../components/home/VideoBlog";
import { Partners } from "../components/home/Partners";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider />

        {/* Stats + About combined layout */}
        <section
          id="about"
          className="relative bg-background"
          style={{
            backgroundImage: "url('/building-sketch.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          {/* Light overlay so text stays readable — sketch shows as subtle watermark */}
          <div className="absolute inset-0 bg-white/88 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: About content */}
              <div className="pt-20 pb-20 lg:pt-24 lg:pb-28">
                <About />
              </div>

              {/* Right: Stats card — overlaps hero by a moderate amount */}
              <div className="hidden lg:block">
                <div className="-mt-24 pb-20 relative z-30">
                  {/* Gradient above stats card — blends hero into card top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-10 rounded-t-2xl pointer-events-none z-40"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(100,10,10,0.18), transparent)",
                    }}
                  />
                  <Stats />
                </div>
              </div>
            </div>

            {/* Mobile: Stats below about */}
            <div className="lg:hidden pb-16">
              <Stats />
            </div>
          </div>
        </section>

        <ServicesGrid />
        <HowItWorks />
        <Testimonials />
        <CTA />
        <Counseling />
        <VideoBlog />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
