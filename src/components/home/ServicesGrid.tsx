import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../../lib/data";

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full mb-6 border border-primary/10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Comprehensive <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From study abroad guidance to visa processing, we provide end-to-end
            support for your international journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg shadow-primary/5 border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                {/* Icon badge */}
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-white/95 shadow-lg flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pb-0 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow text-base">
                  {service.shortDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
