import type { CyberProject } from '@/types';

export const CYBER_PROJECTS: CyberProject[] = [
  {
    id: 1,
    slug: 'phishing-email-investigation',
    title: 'Phishing Email Investigation',
    category: 'SOC Investigation',
    status: 'Completed',
    platform: 'TryHackMe SOC Simulator',
    scenarioTitle: 'Introduction to Phishing',
    role: 'SOC Level 1 Analyst',
    siem: 'Splunk',
    description: 'Completed the TryHackMe SOC Simulator Introduction to Phishing scenario through a structured SOC L1 investigation workflow involving alert triage, SIEM investigation, indicator analysis, classification, documentation, and escalation decision-making.',
    tools: ['Splunk', 'VirusTotal', 'TryDetectThis', 'TryHackMe'],
    skills: ['Alert Triage', 'Phishing Analysis', 'IOC Analysis', 'SIEM Investigation', 'Email Security', 'Alert Classification', 'Incident Documentation', 'SOC Escalation'],
    scenarioOverview: 'This case study is based on the completed TryHackMe SOC Simulator Introduction to Phishing scenario. It documents a hands-on SOC training investigation without publishing protected scenario answers, flags, or proprietary instructions.',
  },
];

export function getCyberProject(slug: string) {
  return CYBER_PROJECTS.find(project => project.slug === slug);
}
