import { motion } from "framer-motion";
import {
  Building2,
  Users,
  BookOpen,
  BadgeCheck,
  Globe,
  UserCog,
  CalendarCheck,
  Tv2,
  GraduationCap,
  Flag,
} from "lucide-react";

const stats = [
  { icon: Building2, value: "120+", label: "Universities" },
  { icon: GraduationCap, value: "7,500+", label: "Happy Students" },
  { icon: BadgeCheck, value: "99%", label: "Visa Ratio" },
  { icon: CalendarCheck, value: "12+", label: "Education Expo" },
  { icon: Tv2, value: "200+", label: "Webinars/Events" },
  { icon: Users, value: "50,000+", label: "Students Served" },
];

export function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-primary rounded-2xl shadow-2xl shadow-primary/40 p-10 w-full"
      style={{ zIndex: 30 }}
    >
      <h3 className="text-white/80 text-xs font-bold uppercase tracking-widest mb-7 border-b border-white/10 pb-4">
        Our Achievements
      </h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
            className="flex items-start space-x-4 group"
          >
            <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mt-0.5 group-hover:bg-accent/20 transition-colors">
              <stat.icon className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-white/60 font-medium leading-tight">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
