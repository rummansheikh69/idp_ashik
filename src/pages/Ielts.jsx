import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Stats } from "../components/sections/Stats";
import { Courses } from "../components/sections/Courses";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Contact } from "../components/sections/Contact";
import { Spoken } from "../components/sections/Spoken";

export default function Ielts() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Courses />
        <WhyChooseUs />
        <Spoken />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
