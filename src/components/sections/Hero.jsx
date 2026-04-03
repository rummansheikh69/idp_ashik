import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { HeroIllustration } from "../illustrations/HeroIllustration";

export const Hero = () => {
  // Removed TypeScript type annotation (id: string)
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 -z-10 w-full md:w-1/2 h-full bg-secondary/50 rounded-bl-[100px] lg:rounded-bl-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              #1 IELTS Coaching Institute
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Achieve Your Dream{" "}
              <span className="text-primary">IELTS Score</span> On The First Try
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert coaching in Reading, Writing, Listening & Speaking. Join
              thousands of successful students who have achieved Band 8.5 with
              our proven methodology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={(e) => {
                  e.preventDefault();

                  if (window.location.pathname !== "/") {
                    window.location.href = "/apply";
                  } else {
                    document.getElementById("apply")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("courses")}
              >
                View Courses
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm font-medium text-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=e2e8f0`}
                      alt="Student avatar"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <p>
                Trusted by{" "}
                <span className="text-primary font-bold">5,000+</span> students
              </p>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <HeroIllustration className="w-full max-w-[500px] mx-auto drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
