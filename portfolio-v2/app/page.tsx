import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CredentialsSection from '@/components/CredentialsSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';

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
          <CredentialsSection />
          <Divider />
          <SkillsSection />
          <Divider />
          <ProjectsSection />
          <Divider />
          <ContactSection />
        </main>
        <Footer />
      </ScrollRevealProvider>
    </>
  );
}
