import { motion } from "framer-motion";
import { BookOpen, PenTool, Mic, Headphones } from "lucide-react";

export function SkillsSection() {
  const sections = [
    {
      id: "speaking",
      title: "Speaking",
      description:
        "Test your ability to speak English in an academic environment. You will read aloud, repeat sentences, describe images, and answer short questions.",
      icon: <Mic className="w-10 h-10" />,
      color: "bg-blue-50 text-primary border-blue-100",
      time: "Part 1",
    },
    {
      id: "writing",
      title: "Writing",
      description:
        "Demonstrate your writing skills by summarizing written text and writing an essay on a given topic using correct grammar and spelling.",
      icon: <PenTool className="w-10 h-10" />,
      color: "bg-orange-50 text-secondary border-orange-100",
      time: "Part 1",
    },
    {
      id: "reading",
      title: "Reading",
      description:
        "Evaluate your reading comprehension through multiple-choice questions, reordering paragraphs, and fill-in-the-blanks exercises.",
      icon: <BookOpen className="w-10 h-10" />,
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
      time: "Part 2",
    },
    {
      id: "listening",
      title: "Listening",
      description:
        "Assess your ability to understand spoken English. You will listen to audio clips and answer questions, summarize spoken text, and write from dictation.",
      icon: <Headphones className="w-10 h-10" />,
      color: "bg-purple-50 text-purple-700 border-purple-100",
      time: "Part 3",
    },
  ];

  return (
    <section id="sections" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
              Test Structure
            </h2>
            <h3 className="text-4xl font-bold text-foreground mb-6 leading-tight">
              Four skills.
              <br />
              One sitting.
              <br />
              Two hours.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The PTE test assesses your real-life English skills. You will be
              tested on your ability to understand and communicate effectively
              in academic or everyday environments.
            </p>
            <div className="p-6 rounded-2xl bg-muted border border-border">
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                <span className="flex h-6 w-6 rounded-full bg-secondary text-white text-xs items-center justify-center">
                  !
                </span>
                Did you know?
              </h4>
              <p className="text-sm text-muted-foreground">
                Unlike other tests, PTE integrates skills. You might be asked to
                listen to a lecture and write a summary, testing both listening
                and writing simultaneously.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-8 rounded-3xl border transition-all hover:shadow-xl ${section.color}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    {section.icon}
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/50 border border-current/10">
                      {section.time}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-foreground">
                    {section.title}
                  </h4>
                  <p className="text-foreground/70 text-sm leading-relaxed font-medium">
                    {section.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
