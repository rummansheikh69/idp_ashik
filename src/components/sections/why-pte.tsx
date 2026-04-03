import { motion } from "framer-motion";
import { Building2, Earth, Zap, Target } from "lucide-react";

export function WhyPteSection() {
  const stats = [
    {
      value: "3,300+",
      label: "Universities & Colleges",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      value: "70+",
      label: "Countries with Test Centers",
      icon: <Earth className="w-5 h-5" />,
    },
    {
      value: "48h",
      label: "Average Result Time",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      value: "100%",
      label: "Computer-based & Objective",
      icon: <Target className="w-5 h-5" />,
    },
  ];

  return (
    <section
      id="why"
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border-[20px] border-secondary/20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">
              Why Choose PTE
            </h2>
            <h3 className="text-4xl md:text-5xl  font-bold text-white mb-6">
              Trusted globally. Designed for you.
            </h3>
            <p className="text-primary-foreground/80 text-lg">
              We've built a test that puts you first. Less stress, faster
              results, and total fairness.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white mb-6">
                {stat.icon}
              </div>
              <h4 className="text-4xl font-bold  text-white mb-2">
                {stat.value}
              </h4>
              <p className="text-primary-foreground/80 font-medium text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-white text-foreground max-w-4xl mx-auto shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Zap className="w-32 h-32" />
          </div>
          <h4 className="text-2xl md:text-3xl  font-bold text-primary mb-4 relative z-10">
            "The AI scoring makes it completely fair."
          </h4>
          <p className="text-lg text-muted-foreground mb-6 relative z-10">
            Traditional testing can be subjective. Our AI scoring engine is
            trained on thousands of accents and voices from around the world,
            ensuring you are graded solely on what you say—not where you're from
            or how you look.
          </p>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
              AI
            </div>
            <div>
              <p className="font-bold text-foreground">
                Advanced Algorithmic Scoring
              </p>
              <p className="text-sm text-muted-foreground">
                Trained on 10,000+ data points
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
