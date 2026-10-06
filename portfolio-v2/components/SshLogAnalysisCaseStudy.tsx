import Link from 'next/link';
import type { CyberProject } from '@/types';

const SectionTitle = ({ number, children }: { number: string; children: React.ReactNode }) => (
  <h2 className="case-title"><span>{number}</span>{children}</h2>
);

const eventCounts = [
  ['Successful SSH Login', '306'],
  ['Failed SSH Login', '305'],
  ['Multiple Failed Authentication Attempts', '303'],
  ['Connection Without Authentication', '286'],
];

const workflow = [
  ['01', 'Upload SSH Logs', 'Uploaded the JSON SSH dataset into Splunk Enterprise using the Add Data workflow.'],
  ['02', 'Validate Fields', 'Confirmed key fields such as event_type, auth_success, auth_attempts, id.orig_h, and id.resp_h were parsed.'],
  ['03', 'Count Event Types', 'Used SPL to summarize SSH activity across successful logins, failed logins, repeated failures, and unauthenticated connections.'],
  ['04', 'Analyze Failed Logins', 'Grouped failed login attempts by source IP to identify repeated authentication failures.'],
  ['05', 'Review Brute-Force Indicators', 'Compared source and destination pairs for multiple failed authentication attempts.'],
  ['06', 'Document Alert Logic', 'Defined a high-risk alert condition for repeated failures within a short window.'],
];

const splSearches = [
  {
    title: 'Validate SSH Event Categories',
    query: 'index=ssh_logs source="ssh_logs.json"\n| stats count by event_type',
  },
  {
    title: 'Failed SSH Logins by Source IP',
    query: 'index=ssh_logs source="ssh_logs.json" event_type="Failed SSH Login"\n| stats count by id.orig_h\n| head 10',
  },
  {
    title: 'Multiple Failed Authentication Attempts',
    query: 'index=ssh_logs source="ssh_logs.json" event_type="Multiple Failed Authentication Attempts"\n| stats count by id.orig_h id.resp_h',
  },
  {
    title: 'Successful SSH Logins',
    query: 'index=ssh_logs source="ssh_logs.json" event_type="Successful SSH Login"\n| stats count by id.orig_h id.resp_h',
  },
  {
    title: 'Connections Without Authentication',
    query: 'index=ssh_logs event_type="Connection Without Authentication"\n| stats count by id.orig_h',
  },
];

export default function SshLogAnalysisCaseStudy({ project }: { project: CyberProject }) {
  return (
    <main className="case-page relative px-6 py-14 md:py-20 max-w-6xl mx-auto">
      <Link href="/#cybersecurity-projects" className="text-link">← Back to Cybersecurity Projects</Link>

      <header id="overview" className="case-hero">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="status-badge status-completed">Completed</span>
          <span className="status-badge">SIEM &amp; Log Analysis</span>
          <span className="status-badge status-progress">Local SOC Lab</span>
        </div>
        <h1>{project.title}</h1>
        <p className="case-supporting">{project.platform} — {project.scenarioTitle}</p>
        <p className="case-lead">{project.scenarioOverview}</p>
        <dl className="case-summary">
          {[
            ['Role', project.role],
            ['Environment', project.platform],
            ['Scenario', project.scenarioTitle],
            ['Status', project.status],
            ['SIEM', project.siem],
            ['Events', '1,200 SSH events'],
          ].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
        <div className="flex flex-wrap gap-3 mt-7">
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="button-secondary">View GitHub Documentation ↗</a>}
        </div>
      </header>

      <nav className="case-toc" aria-label="Case study sections">
        {[
          ['Overview', '#overview'],
          ['Workflow', '#workflow'],
          ['Event Counts', '#event-counts'],
          ['SPL', '#spl'],
          ['Alert Logic', '#alert-logic'],
          ['Findings', '#findings'],
          ['Skills', '#skills'],
          ['Lessons', '#lessons'],
        ].map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>

      <section className="case-block">
        <SectionTitle number="01">Scenario Overview</SectionTitle>
        <p>This case study documents a hands-on SSH authentication investigation using Splunk Enterprise. The lab focused on ingesting a JSON SSH dataset, validating extracted fields, and using SPL searches to identify suspicious login behavior.</p>
        <p>The investigation covered successful logins, failed logins, multiple failed authentication attempts, and connections that reached SSH without completing authentication.</p>
      </section>

      <section id="workflow" className="case-block">
        <SectionTitle number="02">Investigation Workflow</SectionTitle>
        <div className="workflow-list">
          {workflow.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="event-counts" className="case-block">
        <SectionTitle number="03">SSH Event Counts</SectionTitle>
        <p>The validation search returned 1,200 total SSH events across four categories.</p>
        <div className="case-card-grid">
          {eventCounts.map(([label, count]) => (
            <article key={label}>
              <span>Event Type</span>
              <h3>{count}</h3>
              <p>{label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="spl" className="case-block">
        <SectionTitle number="04">SPL Searches Practiced</SectionTitle>
        <div className="case-card-grid">
          {splSearches.map(search => (
            <article key={search.title}>
              <span>SPL</span>
              <h3>{search.title}</h3>
              <pre className="mt-4 whitespace-pre-wrap rounded border border-[#1e2d4d] bg-[#08111f] p-4 text-xs text-[#a6b2ca]">{search.query}</pre>
            </article>
          ))}
        </div>
      </section>

      <section id="alert-logic" className="case-block">
        <SectionTitle number="05">Alert Logic</SectionTitle>
        <p>The brute-force detection logic focused on source and destination pairs with repeated failed authentication activity.</p>
        <div className="correlation-callout">Multiple Failed Attempts <b>+</b> Source IP <b>+</b> Destination Host <strong>→ High-Risk SSH Alert</strong></div>
        <pre className="mt-5 whitespace-pre-wrap rounded border border-[#1e2d4d] bg-[#08111f] p-4 text-sm text-[#a6b2ca]">{'index=ssh_logs event_type="Multiple Failed Authentication Attempts"\n| stats count by id.orig_h id.resp_h\n| where count > 5'}</pre>
      </section>

      <section id="findings" className="case-block">
        <SectionTitle number="06">Key Findings</SectionTitle>
        <ul className="responsibility-grid">
          {[
            'Splunk successfully ingested and parsed the JSON SSH dataset.',
            'The dataset contained 1,200 SSH-related events.',
            'Failed login analysis identified source IPs generating authentication failures.',
            'Multiple failed authentication attempts provided a brute-force detection path.',
            'Connections without authentication may indicate SSH probing or scanning.',
            'Successful login tracking can help identify suspicious access after repeated failures.',
          ].map(item => <li key={item}>✓ <span>{item}</span></li>)}
        </ul>
      </section>

      <section id="skills" className="case-block">
        <SectionTitle number="07">Skills Demonstrated</SectionTitle>
        <div className="case-card-grid">
          {project.skills.map(skill => <article key={skill}><h3>{skill}</h3><p>Practiced during the SSH log analysis workflow.</p></article>)}
        </div>
      </section>

      <section id="lessons" className="case-block">
        <SectionTitle number="08">Lessons Learned</SectionTitle>
        <p>This lab reinforced that effective Splunk analysis starts with a clear security question. The most useful workflow was to identify the behavior, choose the fields, build the SPL search, review the evidence, and explain the security meaning.</p>
        <p>The project also showed how visualizations and alert logic can help turn raw authentication logs into an analyst-friendly SOC workflow.</p>
      </section>

      <section className="training-context">
        <SectionTitle number="09">Training Context</SectionTitle>
        <p>This case study uses lab-provided SSH log data for educational purposes. The activity patterns are part of a controlled training environment and do not represent production systems.</p>
      </section>

      <div className="flex flex-wrap justify-between gap-4 mt-10">
        <Link href="/#cybersecurity-projects" className="text-link">← Back to Cybersecurity Projects</Link>
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link">View GitHub Documentation ↗</a>}
      </div>
    </main>
  );
}
