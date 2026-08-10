'use client';

import { HERO_STATS, HERO_TAGS } from '@/lib/data';

export default function HeroSection() {
  const scrollToProjects = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.querySelector('#cybersecurity-projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-14 max-w-6xl mx-auto">
      <div className="section-kicker"><span>{'//'}</span> Aspiring SOC Analyst &amp; Cybersecurity Professional</div>
      <h1 className="text-[clamp(2.6rem,7vw,5rem)] font-semibold leading-[1.04] tracking-tight mb-6 max-w-5xl">
        Gabriel Akoi<span className="text-[#00d4b8]">.</span><br />
        <span className="text-[#a6b2ca] font-light">Cybersecurity first.</span><br />
        <span className="text-purple-400">Development</span> informed.
      </h1>
      <p className="text-[clamp(1rem,2vw,1.15rem)] text-[#a6b2ca] max-w-3xl leading-8 font-light mb-7">
        I am developing hands-on experience in security monitoring, alert investigation, phishing analysis, SIEM, incident response, Linux, SQL, and Python—while leveraging my software development background to better understand modern systems and applications.
      </p>
      <div className="flex flex-wrap gap-2 mb-9">{HERO_TAGS.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
      <div className="flex flex-wrap gap-3 mb-14">
        <a href="#cybersecurity-projects" onClick={scrollToProjects} className="button-primary">View Cybersecurity Projects →</a>
        <a href="https://github.com/gabkoi21/cybersecurity-lab-portfolio" target="_blank" rel="noopener noreferrer" className="button-secondary">GitHub ↗</a>
      </div>
      <div className="flex flex-wrap gap-8 md:gap-12 pt-6 border-t border-[#1e2d4d]">{HERO_STATS.map(stat => <div key={stat.label}><div className="font-mono text-2xl md:text-3xl font-bold text-[#00d4b8]">{stat.value}</div><div className="font-mono text-[10px] text-[#8896b3] uppercase tracking-[0.12em] mt-1">{stat.label}</div></div>)}</div>
    </section>
  );
}
