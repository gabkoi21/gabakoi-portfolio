import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CYBER_PROJECTS, getCyberProject } from '@/data/cyberProjects';

export function generateStaticParams() {
  return CYBER_PROJECTS.map(project => ({ slug: project.slug }));
}

function ListSection({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return <section className="case-section"><h2>{title}</h2><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></section>;
}

export default function CyberProjectDetail({ params }: { params: { slug: string } }) {
  const project = getCyberProject(params.slug);
  if (!project) notFound();
  const details = project.alertDetails ? Object.entries(project.alertDetails).filter(([, value]) => value) : [];

  return (
    <main className="relative px-6 py-16 md:py-24 max-w-4xl mx-auto">
      <Link href="/#cybersecurity-projects" className="text-link">← Back to cybersecurity projects</Link>
      <header className="py-12 border-b border-[#1e2d4d]">
        <div className="flex flex-wrap items-center gap-3 mb-5"><span className="eyebrow">{project.category}</span><span className="status-badge">{project.status}</span></div>
        <h1 className="text-[clamp(2.2rem,6vw,4rem)] leading-tight font-semibold mb-5">{project.title}</h1>
        <p className="text-lg text-[#a6b2ca] leading-8">{project.description}</p>
      </header>

      {project.scenario && <section className="case-section"><h2>1. Scenario</h2><p>{project.scenario}</p></section>}
      {details.length > 0 && <section className="case-section"><h2>2. Alert Details</h2><dl className="detail-grid">{details.map(([key, value]) => <div key={key}><dt>{key.replace(/([A-Z])/g, ' $1')}</dt><dd>{value}</dd></div>)}</dl></section>}
      <ListSection title="3. Investigation Process" items={project.investigationSteps} />
      <ListSection title="4. Indicators of Compromise" items={project.indicators} />
      <ListSection title="5. Tools Used" items={project.tools} />
      {project.image && <section className="case-section"><h2>6. Evidence</h2><Image src={project.image} alt={`Sanitized evidence for ${project.title}`} width={1400} height={900} className="w-full h-auto border border-[#1e2d4d]" /></section>}
      <ListSection title="7. Findings" items={project.findings} />
      {project.classification && <section className="case-section"><h2>8. Alert Classification</h2><p>{project.classification}</p></section>}
      {project.escalation && <section className="case-section"><h2>9. Escalation Decision</h2><p>{project.escalation}</p></section>}
      <ListSection title="10. Recommended Remediation" items={project.remediation} />
      <ListSection title="11. Lessons Learned" items={project.lessonsLearned} />
      {project.status !== 'Completed' && <aside className="notice"><strong>Case study status: {project.status}</strong><p>This page intentionally omits findings, evidence, and conclusions that have not yet been documented. No investigation results have been invented.</p></aside>}
    </main>
  );
}
