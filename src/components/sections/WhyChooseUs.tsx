import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { WhyUsIllustration } from "../illustrations/WhyUsIllustration";

const features = [
  "Certified & Experienced Trainers (Band 9 Achievers)",
  "Small Batch Sizes for Personalised Attention",
  "Comprehensive & Updated Study Material",
  "Weekly Mock Tests with Detailed Feedback",
  "Flexible Timings (Morning, Evening, Weekend)",
  "State-of-the-art Computer Lab for CBT Practice",
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Wave SVG background */}
      <svg
        className="absolute bottom-0 left-0 w-full text-secondary/40"
        viewBox="0 0 1440 320"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <WhyUsIllustration className="w-full max-w-[500px] mx-auto" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">Visa Express?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just teach English; we strategize your success. Our
              proven framework ensures you hit your target score with
              confidence.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex-shrink-0 text-primary">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
