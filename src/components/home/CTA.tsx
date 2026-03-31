import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <img
          src="/globe-network.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary/80 mb-10 font-medium max-w-2xl mx-auto">
            Get your visa processed securely, quickly, and affordably. Our
            experts are standing by to review your profile for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 text-lg px-10 py-6 rounded-full font-bold shadow-xl shadow-primary/20"
            >
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 text-primary hover:bg-primary hover:text-white text-lg px-10 py-6 rounded-full font-bold"
            >
              Call Us Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
