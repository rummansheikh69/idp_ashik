import { motion } from "framer-motion";
import { CheckCircle, PlayCircle, FileText, Laptop } from "lucide-react";
import { Button } from "../ui/button";

export function PrepTipsSection() {
  const tips = [
    {
      title: "Take a Scored Practice Test",
      description:
        "Get familiar with the format and receive a realistic score report before the real exam.",
      icon: <Laptop className="w-6 h-6" />,
    },
    {
      title: "Use the Official PTE App",
      description:
        "Practice on the go with free interactive questions and study plans on your mobile.",
      icon: <PlayCircle className="w-6 h-6" />,
    },
    {
      title: "Review Question Types",
      description:
        "Understand exactly what each of the 20 question types expects from you.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Check Microphone Position",
      description:
        "Practice speaking clearly with a headset microphone positioned correctly.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  return (
    <section id="prep" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-primary/10" />
              <img
                src="/images/student-studying.jpg"
                alt="Student studying for PTE"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl">
                <h4 className=" font-bold text-xl text-primary mb-2">
                  90/90 Achiever
                </h4>
                <p className="text-sm text-foreground/80 italic">
                  "The scored practice tests were exactly like the real exam.
                  They gave me the confidence I needed."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-3">
              Preparation
            </h2>
            <h3 className="text-4xl  font-bold text-foreground mb-6">
              Ready to score your best?
            </h3>
            <p className="text-muted-foreground text-lg mb-10">
              Preparation is key. We provide a range of free and premium
              materials to help you understand the test format and feel
              confident on test day.
            </p>

            <div className="space-y-6 mb-10">
              {tips.map((tip, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    {tip.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">
                      {tip.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-full shadow-md font-bold px-8">
              Explore Prep Materials
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
