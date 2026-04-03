import { motion } from "framer-motion";
import { ShieldCheck, Clock, Brain, Globe2 } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Unbiased AI Scoring",
      description:
        "Our state-of-the-art AI ensures your English skills are assessed fairly and accurately, without human bias.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fastest Results",
      description:
        "No more waiting weeks. Get your certified results typically within 48 hours of completing your test.",
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Global Recognition",
      description:
        "Accepted by thousands of academic programs worldwide and approved for all UK, Australian, and New Zealand visa and immigration applications.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Highly Secure",
      description:
        "Industry-leading biometric security measures including palm-vein scanning and randomized test forms.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
              About PTE
            </h2>
            <h3 className="text-4xl md:text-5xl  font-bold text-foreground mb-6 leading-tight">
              The smart choice for your global future.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Pearson Test of English (PTE) assesses your speaking, listening,
              reading, and writing skills in a single, secure, two-hour
              computer-based test. We combine human expertise with the latest AI
              technology to deliver a test that is highly accurate, fast, and
              remarkably fair.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-foreground text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="/images/about-center.png"
                alt="Modern PTE Testing Center"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f0f4f8'/%3E%3Ctext x='400' y='300' font-family='' font-size='24' fill='%23005A8E' text-anchor='middle'%3ETesting Center Image%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
