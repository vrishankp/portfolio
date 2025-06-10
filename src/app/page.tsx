import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { PhotographySection } from '@/components/sections/photography-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection id="home" />
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <PhotographySection id="photography" />
        <SkillsSection id="skills" />
        <ExperienceSection id="experience" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}
