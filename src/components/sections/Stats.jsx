import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Award, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: "5000+", label: "Students Trained" },
  { icon: Target, value: "9.0", label: "Band Achievers" },
  { icon: Award, value: "15+", label: "Expert Trainers" },
  { icon: Trophy, value: "98%", label: "Success Rate" },
];

export const Stats = () => {
  return (
    <section className="py-16 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            // Assigning the icon component to a capitalized variable for JSX rendering
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container with Hover Effects */}
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Icon
                    className="text-primary group-hover:text-white transition-colors duration-300"
                    size={32}
                  />
                </div>

                {/* Statistic Value */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </h3>

                {/* Statistic Label */}
                <p className="text-white/70 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
