import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/pte-hero";
import { AboutSection } from "../components/sections/about";
import { FormatsSection } from "../components/sections/formats";
import { SkillsSection } from "../components/sections/skills";
import { WhyPteSection } from "../components/sections/why-pte";
import { PrepTipsSection } from "../components/sections/prep-tips";
import { ScoreValiditySection } from "../components/sections/score-validity";
import { BookTestSection } from "../components/sections/book-test";

export default function Pte() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[80px]">
        <HeroSection />
        <AboutSection />
        <FormatsSection />
        <SkillsSection />
        <WhyPteSection />
        <PrepTipsSection />
        <ScoreValiditySection />
        <BookTestSection />
      </main>
      <Footer />
    </div>
  );
}
