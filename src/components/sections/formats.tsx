import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Home as HomeIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export function FormatsSection() {
  const formats = [
    {
      id: "academic",
      title: "PTE Academic",
      description:
        "For study abroad and immigration. Accepted by universities worldwide and governments in the UK, Australia, and New Zealand.",
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      features: [
        "2 hour duration",
        "4 sections",
        "Score: 10-90",
        "Academic English",
      ],
      color: "border-primary",
    },
    {
      id: "core",
      title: "PTE Core",
      description:
        "For Canadian migration and everyday life. A general English test recognized by the Canadian government (IRCC).",
      icon: <Briefcase className="w-8 h-8 text-secondary" />,
      features: [
        "2 hour duration",
        "4 sections",
        "Score: 10-90",
        "Everyday English",
      ],
      color: "border-secondary",
    },
    {
      id: "home",
      title: "PTE Home",
      description:
        "For family and settlement visas in the UK. A fast, fair and convenient computer-based English test.",
      icon: <HomeIcon className="w-8 h-8 text-accent-foreground" />,
      features: [
        "< 30 mins duration",
        "Speaking & Listening",
        "Pass/Fail grading",
        "UK Visa approved",
      ],
      color: "border-accent-foreground",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="formats" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
              Test Formats
            </h2>
            <h3 className="text-4xl  font-bold text-foreground mb-6">
              Choose the right test for your goals
            </h3>
            <p className="text-muted-foreground text-lg">
              Whether you're aiming to study at a top university, migrate to a
              new country, or join your family, we have a test designed for your
              specific needs.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {formats.map((format) => (
            <motion.div key={format.id} variants={itemVariants}>
              <Card
                className={`h-full flex flex-col border-t-4 hover:-translate-y-2 transition-transform duration-300 ${format.color} shadow-lg shadow-black/5`}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
                    {format.icon}
                  </div>
                  <CardTitle className="text-2xl ">{format.title}</CardTitle>
                  <CardDescription className="text-base text-foreground/70 mt-2">
                    {format.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="space-y-3 mb-8">
                    {format.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm font-medium"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full font-semibold border-primary/20 hover:bg-primary hover:text-white transition-colors"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
