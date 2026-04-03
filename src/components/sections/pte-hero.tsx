import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Globe, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://blog.onevasco.com/wp-content/uploads/Famous-Buildings-in-Australia.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-primary/90 bg-gradient-to-r from-primary via-primary/95 to-primary/40 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Globe className="w-4 h-4 text-secondary" />
            <span>The World's Leading Computer-Based English Test</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl  font-bold text-white leading-[1.1] mb-6"
          >
            Prove your English. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
              Pursue your dreams.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-foreground/90 mb-10 max-w-2xl leading-relaxed font-light"
          >
            Trusted by 3,300+ universities and global governments. Get your
            results in just 48 hours with our AI-powered, unbiased computer
            testing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 rounded-full shadow-xl shadow-secondary/20 font-bold group"
              asChild
            >
              <a href="#book">
                Book Your Test
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
              asChild
            >
              <a href="#formats">Explore Test Formats</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-wrap gap-6 text-white/80 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span>Results in 48 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span>Accepted globally</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              <span>Fair AI scoring</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
