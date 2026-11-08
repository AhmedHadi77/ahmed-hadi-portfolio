import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { PrinciplesSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ServicesSection />
      <ProcessSection />
      <PrinciplesSection />
      <ContactSection />
    </>
  );
}
