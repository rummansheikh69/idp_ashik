import { motion } from "framer-motion";
import { Calendar, FileBarChart, Award, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function ScoreValiditySection() {
  return (
    <section id="scores" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
              Scores & Validity
            </h2>
            <h3 className="text-4xl  font-bold text-foreground mb-6">
              Understanding your results
            </h3>
            <p className="text-muted-foreground text-lg">
              PTE scores are graded on the Global Scale of English, giving you
              an accurate, numeric assessment of your English ability.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-muted p-8 rounded-3xl h-full border border-border">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-2xl  font-bold mb-4">
                The Global Scale of English (10-90)
              </h4>
              <p className="text-muted-foreground mb-6">
                Instead of confusing bands or letters, we use a granular 10-90
                scale. This allows institutions to precisely measure your
                proficiency.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-12 text-center font-bold text-primary bg-primary/10 rounded py-1">
                    85+
                  </div>
                  <div className="text-sm font-medium">
                    Expert / Proficient (C2)
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-12 text-center font-bold text-primary bg-primary/10 rounded py-1">
                    76-84
                  </div>
                  <div className="text-sm font-medium">Advanced (C1)</div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-12 text-center font-bold text-primary bg-primary/10 rounded py-1">
                    59-75
                  </div>
                  <div className="text-sm font-medium">
                    Upper Intermediate (B2)
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-12 text-center font-bold text-primary bg-primary/10 rounded py-1">
                    43-58
                  </div>
                  <div className="text-sm font-medium">Intermediate (B1)</div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h4 className="text-2xl  font-bold mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-secondary" />
              Common Questions
            </h4>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="validity"
                className="border-b border-border py-2"
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                  How long are my scores valid?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  For most study applications, PTE scores are valid for{" "}
                  <strong>2 years</strong> from the date of the test. For
                  Australian general skilled migration visas, scores are valid
                  for up to <strong>3 years</strong>.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="sending"
                className="border-b border-border py-2"
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                  How do I send scores to universities?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  You can send your scores to an unlimited number of
                  institutions via your myPTE account, completely free of
                  charge. Institutions verify your scores directly through our
                  secure online portal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="retaking"
                className="border-b border-border py-2"
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                  Can I retake the test?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Yes, you can retake the test as many times as you like.
                  However, you must wait to receive your scores from one test
                  before booking another.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
