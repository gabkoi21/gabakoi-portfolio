import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CredentialsSection from '@/components/CredentialsSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';
import AboutSection from '@/components/AboutSection';
import CybersecurityProjects from '@/components/CybersecurityProjects';
import ResumeSection from '@/components/ResumeSection';
import CybersecurityTraining from '@/components/CybersecurityTraining';

export default function Home() {
  return (
    <>
      {/* Fixed grid background */}
      <div className="grid-bg" aria-hidden="true" />

      <Navbar />

      <ScrollRevealProvider>
        <main>
          <HeroSection />
          <Divider />
          <AboutSection />
          <Divider />
          <SkillsSection />
          <Divider />
          <CybersecurityProjects />
          <Divider />
          <CybersecurityTraining />
          <Divider />
          <ProjectsSection />
          <Divider />
          <CredentialsSection />
          <Divider />
          <ResumeSection />
          <Divider />
          <ContactSection />
        </main>
        <Footer />
      </ScrollRevealProvider>
    </>
  );
}
