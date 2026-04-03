import { motion } from "framer-motion";

export function Partners() {
  return (
    <section className="py-14 bg-white border-t border-border">
      <div className=" md:grid grid-cols-8  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-5">
        <div className=" col-span-5 ">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-5"
          >
            <p className="text-primary font-bold text-sm uppercase tracking-[0.25em] mb-2">
              Official Language Partners
            </p>
            <div className="mx-auto w-12 h-0.5 bg-primary rounded-full" />
          </motion.div>

          {/* Logos — use the provided partners image */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <img
              src="/partners.png"
              alt="Our global partners — British Council, IDP, Pearson, Edvoy, Navitas"
              className=" w-[443px] object-contain"
              style={{ filter: "grayscale(0%)" }}
            />
          </motion.div>
        </div>
        <div className=" col-span-3 ">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-5"
          >
            <p className="text-primary font-bold text-sm uppercase tracking-[0.25em] mb-2">
              Official Test Partners
            </p>
            <div className="mx-auto w-12 h-0.5 bg-primary rounded-full" />
          </motion.div>

          {/* Logos — use the provided partners image */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <img
              src="/ielts-idp-logo.png"
              alt="Our global partners — British Council, IDP, Pearson, Edvoy, Navitas"
              className=" object-contain"
              style={{ filter: "grayscale(0%)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
