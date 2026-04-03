import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../ui/button";

const features = [
  "Study in UK, USA, Canada, Australia & more",
  "Expert visa consultants with 10+ years experience",
  "100% transparent process with no hidden fees",
  "Dedicated case manager for every application",
  "University admission guidance & application support",
  "Post-visa support and pre-departure briefings",
];

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="inline-flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full mb-5 border border-primary/10">
        <span className="text-primary font-semibold text-xs uppercase tracking-widest">
          ABOUT VISA EXPRESS
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
        Empowering Dreams,{" "}
        <span className="text-accent">Connecting Worlds</span>
      </h2>

      <p className="text-lg text-muted-foreground mb-4 leading-relaxed  text-justify">
        Visa Express is a consultancy firm dedicated to providing expert
        guidance and support for students and individuals pursuing international
        education and visa services. The company specializes in assisting
        clients with university selection, application processing,
        documentation, and visa submission. By streamlining complex immigration
        procedures, Visa Express offers comprehensive, step-by-step assistance
        along with access to up-to-date information.
      </p>
      <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-justify">
        In addition, Visa Express provides valuable counseling on language
        preparation and examination guidelines, study destinations, financial
        requirements, and interview preparation. This support enhances clients'
        prospects of successfully studying or settling abroad.
      </p>
    </motion.div>
  );
}
