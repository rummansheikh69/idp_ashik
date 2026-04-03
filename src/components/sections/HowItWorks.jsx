import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, BookOpenCheck, GraduationCap } from "lucide-react";

const steps = [
  {
    title: "Diagnostic Test & Enrol",
    description:
      "Take a free mock test to identify your baseline score and choose the right batch.",
    icon: ClipboardList,
  },
  {
    title: "Learn Strategies",
    description:
      "Attend interactive classes and master specific techniques for all four modules.",
    icon: BookOpenCheck,
  },
  {
    title: "Achieve Target Band",
    description:
      "Give the final exam with full confidence and secure your desired IELTS score.",
    icon: GraduationCap,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple, structured, and effective process to get you from
            enrollment to achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting dashed line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-secondary border-t-2 border-dashed border-border" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary shadow-lg flex items-center justify-center z-10 mb-6 relative">
                  <Icon size={36} className="text-primary" />

                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
