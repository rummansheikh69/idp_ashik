import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

export function BookTestSection() {
  return (
    <section id="book" className="py-24 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden"
        >
          {/* Decorative orange blob */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-flex items-center justify-center p-4 bg-primary/5 rounded-2xl mb-8">
            <CalendarDays className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl  font-bold text-foreground mb-6">
            Take the next step in your journey.
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join millions of students and professionals who have chosen PTE to
            prove their English skills globally. Book your test at one of our
            3,000+ global test centers today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-lg px-10 py-7 rounded-full shadow-lg font-bold group"
            >
              Find a Test Center & Book
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-7 rounded-full text-primary border-primary/20 hover:bg-primary/5"
            >
              <MapPin className="mr-2 w-5 h-5" />
              Check Availability
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground font-medium">
            Seats fill up quickly. We recommend booking at least 48 hours in
            advance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
