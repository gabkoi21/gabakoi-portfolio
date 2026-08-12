import type { CyberProject } from '@/types';

export const CYBER_PROJECTS: CyberProject[] = [
  {
    id: 3,
    slug: 'splunk-the-basics',
    title: 'Splunk: The Basics',
    category: 'SIEM & Log Analysis',
    status: 'Completed',
    platform: 'TryHackMe Splunk Simulation',
    scenarioTitle: 'Splunk: The Basics',
    role: 'SOC Analyst Trainee',
    siem: 'Splunk Enterprise',
    description: 'Configured a Splunk index, ingested newline-delimited JSON VPN logs, validated event parsing, and used Search Processing Language queries to investigate users, source IP addresses, and geographic activity.',
    tools: ['Splunk Enterprise', 'SPL', 'JSON', 'TryHackMe'],
    skills: ['Log Ingestion', 'Index Management', 'Field Extraction', 'SPL Searching', 'Event Filtering', 'Statistical Analysis', 'VPN Log Analysis'],
    scenarioOverview: 'A hands-on TryHackMe room covering Splunk architecture, the data-ingestion workflow, core metadata fields, and practical investigation of VPN events with SPL.',
  },
  {
    id: 2,
    slug: 'endpoint-detection-response-investigation',
    title: 'Endpoint Detection & Response Investigation',
    category: 'SOC Alert Triage',
    status: 'Completed',
    platform: 'TryHackMe EDR Simulation',
    scenarioTitle: 'Introduction to EDR',
    role: 'SOC Analyst',
    siem: 'EDR Console',
    github: 'https://github.com/gabkoi21/cybersecurity-lab-portfolio',
    description: 'Triaged multiple medium- and high-severity endpoint detections in a simulated EDR console by analyzing process chains, command lines, file activity, network connections, IOCs, and threat-intelligence context across three hosts.',
    tools: ['EDR Console', 'MITRE ATT&CK', 'Threat Intelligence', 'TryHackMe'],
    skills: ['EDR Alert Triage', 'Process Analysis', 'IOC Correlation', 'Endpoint Investigation', 'Network Analysis', 'Threat Intel Validation', 'Evidence Documentation'],
    scenarioOverview: 'A hands-on TryHackMe investigation focused on understanding the endpoint visibility available to a SOC analyst and using that evidence to triage several detections. Acknowledgement and response actions were outside the exercise scope.',
  },
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
