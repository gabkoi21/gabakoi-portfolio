import Link from 'next/link';
import { CYBER_PROJECTS } from '@/data/cyberProjects';
import type { CyberProject } from '@/types';

function CyberProjectCard({ project }: { project: CyberProject }) {
  return (
    <article className="project-card">
      <div className="flex items-center justify-between gap-3 mb-5">
        <span className="eyebrow">{project.category}</span>
        <span className={`status-badge ${project.status === 'In Progress' ? 'status-progress' : ''}`}>{project.status}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
      <p className="text-sm text-[#a6b2ca] leading-6 mb-5">{project.description}</p>
      <div className="mb-4"><p className="card-label">Tools</p><div className="tag-list">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div></div>
      <div className="mb-6"><p className="card-label">Skills demonstrated</p><div className="tag-list subtle">{project.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
      <div className="flex flex-wrap gap-5 pt-5 border-t border-[#1e2d4d]">
        <Link href={`/cybersecurity-projects/${project.slug}`} className="text-link">View case study <span aria-hidden="true">→</span></Link>
        {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-link secondary">GitHub ↗</a>}
      </div>
    </article>
  );
}

export default function CybersecurityProjects() {
  return (
    <section id="cybersecurity-projects" className="reveal px-6 py-20 max-w-6xl mx-auto scroll-mt-20">
      <div className="section-kicker"><span>{'//'}</span> Primary Career Focus</div>
      <h2 className="section-title mb-4">Cybersecurity Projects &amp; <span>SOC Investigations.</span></h2>
      <p className="section-intro">Practical, documented security work focused on how alerts are investigated, evidence is handled, and decisions are communicated. Projects are clearly labeled while work is underway.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 max-w-3xl">{CYBER_PROJECTS.map(project => <CyberProjectCard key={project.id} project={project} />)}</div>
    </section>
  );
}
