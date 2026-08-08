import type { CyberProject } from '@/types';

export const CYBER_PROJECTS: CyberProject[] = [
  {
    id: 1,
    slug: 'phishing-email-investigation',
    title: 'Phishing Email Investigation',
    category: 'SOC Investigation',
    description: 'A structured phishing-alert investigation covering email indicators, reputation checks, alert classification, and incident documentation. Investigation evidence and results will be published after the lab is complete.',
    tools: ['Splunk', 'VirusTotal', 'TryHackMe SOC Simulator'],
    skills: ['Alert Triage', 'Phishing Analysis', 'IOC Analysis', 'Email Security', 'Incident Documentation'],
    status: 'In Progress',
    scenario: 'A sanitized phishing investigation case study is being prepared. No investigation outcome is claimed until the analysis is complete.',
    classification: 'Needs Further Investigation',
  },
];

export function getCyberProject(slug: string) {
  return CYBER_PROJECTS.find((project) => project.slug === slug);
}
