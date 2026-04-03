import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "../../hooks/use-toast"; // Adjust path as needed
import { Button } from "../ui/button";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Schema for validation
  const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number required"),
    course: z.string().min(1, "Please select a course"),
    message: z.string().optional(),
  });

  // Form initialization (Generic types removed)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema), // Ensure formSchema is imported/defined
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form data:", data);

    toast({
      title: "Enquiry Submitted Successfully!",
      description: "Our team will contact you within 24 hours.",
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-primary/5 -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get In <span className="text-primary">Touch</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Ready to start your IELTS preparation? Reach out to us for a
                free counseling session.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    Our Location
                  </h4>
                  <p className="text-muted-foreground">
                    Tribune Tower (Level#3), 2/B KDA Avenue. (Dhaka Bank
                    Building)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Call Us</h4>
                  <p className="text-muted-foreground">
                    +44 20 7123 4567
                    <br />
                    +44 77 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    Email Us
                  </h4>
                  <p className="text-muted-foreground">
                    admissions@mahdiielts.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    Office Hours
                  </h4>
                  <p className="text-muted-foreground">
                    Sat - Thu: 9:00 AM to 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 md:p-10 rounded-[var(--radius-card)] shadow-xl border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Enquire Now
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Full Name
                    </label>
                    <input
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-sm bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-sm bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="+1 234 567 890"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-3 rounded-sm bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Interested Course
                    </label>
                    <select
                      {...register("course")}
                      className="w-full px-4 py-3 rounded-sm bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                    >
                      <option value="">Select a course...</option>
                      <option value="Foundation IELTS">Foundation IELTS</option>
                      <option value="Easy IELTS">Easy IELTS</option>
                      <option value="Advance IELTS">Advance IELTS</option>
                      <option value="Executive IELTS">Executive IELTS</option>
                      <option value="IELTS Express">IELTS Express</option>
                      <option value="Single Mock">Single Mock</option>
                      <option value="Number Of Three Mock Tests">
                        Number Of Three Mock Tests
                      </option>
                      <option value="Number Of five Mock Tests">
                        Number Of five Mock Tests
                      </option>
                      <option value="Number Of ten Mock Tests">
                        Number Of ten Mock Tests
                      </option>
                      <option value="Unlimited Mock">Unlimited Mock</option>
                      <option value="Fundamental Spoken English">
                        Fundamental Spoken English
                      </option>
                      <option value="Advanced Spoken English">
                        Advanced Spoken English
                      </option>
                    </select>
                    {errors.course && (
                      <p className="text-destructive text-sm">
                        {errors.course.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Message (Optional)
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-sm bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your target band score or specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full flex gap-2 items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Enquiry <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
