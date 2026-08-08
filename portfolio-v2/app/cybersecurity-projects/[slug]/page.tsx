import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CYBER_PROJECTS, getCyberProject } from '@/data/cyberProjects';
import { CASE_SKILLS, CASE_TOOLS, REPORT_STRUCTURE, RESPONSIBILITIES, TAKEAWAYS, WORKFLOW } from '@/data/phishingCaseStudy';

export function generateStaticParams() { return CYBER_PROJECTS.map(project => ({ slug: project.slug })); }

const SectionTitle = ({ number, children }: { number: string; children: React.ReactNode }) => <h2 className="case-title"><span>{number}</span>{children}</h2>;

export default function CyberProjectDetail({ params }: { params: { slug: string } }) {
  const project = getCyberProject(params.slug);
  if (!project) notFound();

  return (
    <main className="case-page relative px-6 py-14 md:py-20 max-w-6xl mx-auto">
      <Link href="/#cybersecurity-projects" className="text-link">← Back to Cybersecurity Projects</Link>
      <header id="overview" className="case-hero">
        <div className="flex flex-wrap gap-2 mb-6"><span className="status-badge status-completed">Completed</span><span className="status-badge">SOC Investigation</span><span className="status-badge status-progress">Hands-On SOC Training</span></div>
        <h1>Phishing Email Investigation</h1>
        <p className="case-supporting">TryHackMe SOC Simulator — Introduction to Phishing</p>
        <p className="case-lead">A hands-on SOC Level 1 investigation completed within the TryHackMe SOC Simulator, focused on alert triage, phishing analysis, SIEM investigation, indicator validation, alert classification, documentation, and escalation workflows.</p>
        <dl className="case-summary">
          {[['Role', project.role], ['Environment', project.platform], ['Scenario', project.scenarioTitle], ['Status', project.status], ['SIEM', project.siem]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
        <div className="flex flex-wrap gap-3 mt-7"><a href="https://tryhackme.com/p/gabakoi21" target="_blank" rel="noopener noreferrer" className="button-secondary">View TryHackMe Profile ↗</a>{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="button-secondary">View GitHub Documentation ↗</a>}</div>
      </header>

      <nav className="case-toc" aria-label="Case study sections">{[['Overview','#overview'],['Role','#role'],['Workflow','#workflow'],['Tools','#tools'],['Classification','#classification'],['Reporting','#reporting'],['Escalation','#escalation'],['Skills','#skills'],['Lessons','#lessons']].map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>

      <section className="case-block"><SectionTitle number="01">Scenario Overview</SectionTitle><p>The <strong>Introduction to Phishing</strong> scenario provided a simulated Security Operations Center environment where I worked in the role of a <strong>SOC Level 1 Analyst</strong>.</p><p>The environment provided access to an Alert Queue, SIEM platform, Live Analyst VM, investigation resources, and supporting documentation. I used these resources to review alerts, investigate suspicious activity, validate indicators, classify alerts, document findings, and determine whether escalation was required. I selected <strong>Splunk</strong> as the SIEM platform for the simulation.</p></section>

      <section className="case-block"><SectionTitle number="02">Why Splunk?</SectionTitle><p>I selected <strong>Splunk</strong> because it is widely used for enterprise security monitoring and log analysis. I also wanted additional hands-on exposure to investigating security events through a widely adopted SIEM platform.</p></section>

      <section id="role" className="case-block"><SectionTitle number="03">My Role — SOC Level 1 Analyst</SectionTitle><p>During the simulation, I worked as the first line of security alert triage. My responsibility was to review available information, assess severity, investigate suspicious activity, gather evidence, determine a classification, document findings, and identify whether escalation was necessary.</p><ul className="responsibility-grid">{RESPONSIBILITIES.map(item => <li key={item}>✓ <span>{item}</span></li>)}</ul></section>

      <section className="case-block"><SectionTitle number="04">Alert Queue &amp; Prioritization</SectionTitle><p>The <strong>Alert Queue</strong> served as the starting point. Severity helped prioritize activity, with higher-severity alerts requiring more detailed investigation. A decision was not made from severity alone; additional evidence needed review before determining whether activity represented a genuine threat.</p></section>

      <section className="case-block"><SectionTitle number="05">Understanding Email Direction</SectionTitle><div className="comparison-grid"><article><h3>Inbound Email</h3><strong>External Sender → Internal Recipient</strong><p>An email originating outside the organization and delivered internally.</p></article><article><h3>Outbound Email</h3><strong>Internal Sender → External Recipient</strong><p>An email originating within the organization and sent externally.</p></article></div><p className="mt-5">Understanding direction provided additional context before reaching a classification decision.</p></section>

      <section id="workflow" className="case-block"><SectionTitle number="06">Investigation Workflow</SectionTitle><div className="workflow-list">{WORKFLOW.map(step => <article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></article>)}</div></section>

      <section id="tools" className="case-block"><SectionTitle number="07">Investigation Tools</SectionTitle><div className="case-card-grid">{CASE_TOOLS.map(tool => <article key={tool.name}><span>{tool.purpose}</span><h3>{tool.name}</h3><p>{tool.description}</p></article>)}</div></section>

      <section className="case-block"><SectionTitle number="08">Correlating Evidence</SectionTitle><p>An important part of the investigation was avoiding conclusions based on a single source. Information from the Alert Queue, Splunk, VirusTotal, TryDetectThis, and available documentation could be compared to build a clearer understanding of the activity.</p><div className="correlation-callout">Alert Data <b>+</b> Logs <b>+</b> Indicators <b>+</b> Reputation <b>+</b> Context <strong>→ Classification Decision</strong></div></section>

      <section id="classification" className="case-block"><SectionTitle number="09">Alert Classification</SectionTitle><div className="comparison-grid"><article><h3>True Positive</h3><p>The alert correctly identified malicious or unauthorized activity. Evidence should be documented with enough context for escalation and response.</p></article><article><h3>False Positive</h3><p>The alert triggered, but the investigation did not identify malicious activity that justified treating it as a confirmed incident. The decision still requires documented findings.</p></article></div><p className="method-note">These cards explain the methodology practiced; they do not disclose or assign a classification to any specific protected scenario alert.</p></section>

      <section id="reporting" className="case-block"><SectionTitle number="10">SOC L1 Investigation Reporting</SectionTitle><p>After investigating an alert, I documented the investigation so another analyst could understand what was reviewed, what was discovered, and why the decision was made.</p><div className="report-grid">{REPORT_STRUCTURE.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section id="escalation" className="case-block"><SectionTitle number="11">SOC Escalation</SectionTitle><p>A SOC L1 Analyst performs initial triage and investigation. When malicious activity is confirmed and further response is required, findings should be documented clearly for escalation.</p><div className="escalation-flow"><span>Security Alert</span><i>↓</i><span>SOC L1 Triage</span><i>↓</i><span>Investigation</span><i>↓</i><span>Classification</span><i>↓</i><strong>True Positive?</strong><div><span>No → Close / Document</span><span>Yes → Document → SOC L2 → Remediation</span></div></div><h3 className="case-subheading">Escalation Documentation</h3><ul className="responsibility-grid">{['What triggered the alert','What was investigated','What evidence was identified','Which indicators were analyzed','Why the alert was classified as malicious','What further investigation or remediation may be required'].map(item => <li key={item}>✓ <span>{item}</span></li>)}</ul></section>

      <section id="skills" className="case-block"><SectionTitle number="12">Skills Demonstrated</SectionTitle><div className="case-card-grid">{CASE_SKILLS.map(group => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

      <section id="lessons" className="case-block"><SectionTitle number="13">Key Lessons Learned</SectionTitle><p>The simulation strengthened my understanding that a SOC L1 Analyst should not classify an alert from a single indicator or tool. A structured investigation requires alert context, relevant logs, indicator validation, evidence correlation, and clear reasoning.</p><div className="takeaway-grid">{TAKEAWAYS.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="training-context"><SectionTitle number="14">Training Context</SectionTitle><p>This case study documents my hands-on learning within the <strong>TryHackMe SOC Simulator — Introduction to Phishing</strong> scenario. The work was performed in a controlled, simulated SOC environment for training and skill development. It is not presented as professional production SOC employment experience.</p><p>The case study focuses on investigation methodology, workflow, tools, reasoning, and lessons learned. Protected answers, flags, credentials, proprietary instructions, sensitive information, and fabricated evidence are intentionally excluded.</p></section>
      <div className="flex flex-wrap justify-between gap-4 mt-10"><Link href="/#cybersecurity-projects" className="text-link">← Back to Cybersecurity Projects</Link><a href="https://tryhackme.com/p/gabakoi21" target="_blank" rel="noopener noreferrer" className="text-link">View TryHackMe Profile ↗</a></div>
    </main>
  );
}
