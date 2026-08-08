import type { CaseStudyGroup, CaseStudyStep, CaseStudyTool } from '@/types';

export const RESPONSIBILITIES = ['Monitor incoming alerts', 'Review alert severity', 'Investigate suspicious email activity', 'Determine email direction and context', 'Review event and log information', 'Analyze relevant indicators', 'Validate indicators using investigation resources', 'Classify investigated alerts', 'Document investigation findings', 'Determine whether escalation is required'];

export const WORKFLOW: CaseStudyStep[] = [
  { number: '01', title: 'Alert Received', description: 'Review the incoming security alert from the SOC Alert Queue.' },
  { number: '02', title: 'Assess Severity', description: 'Review severity and available alert information to determine investigation priority.' },
  { number: '03', title: 'Understand the Event', description: 'Review email and event context, including whether the activity is inbound or outbound.' },
  { number: '04', title: 'Investigate with Splunk', description: 'Review relevant event and log information associated with the alert.' },
  { number: '05', title: 'Identify Indicators', description: 'Identify relevant URLs, IP addresses, sender information, and other available observables.' },
  { number: '06', title: 'Validate Indicators', description: 'Use VirusTotal and TryDetectThis to gather additional information about relevant indicators.' },
  { number: '07', title: 'Correlate Evidence', description: 'Compare the Alert Queue, Splunk, reputation checks, investigation tools, and documentation.' },
  { number: '08', title: 'Classify the Alert', description: 'Determine whether the evidence supports a True Positive or False Positive classification.' },
  { number: '09', title: 'Document Findings', description: 'Prepare a clear SOC L1 report describing evidence, findings, and classification reasoning.' },
  { number: '10', title: 'Escalate When Required', description: 'Document confirmed malicious activity for SOC Level 2 investigation and remediation when necessary.' },
];

export const CASE_TOOLS: CaseStudyTool[] = [
  { name: 'Splunk', purpose: 'SIEM / Log Investigation', description: 'Used to review security event and log information associated with alerts and gather context beyond the initial Alert Queue.' },
  { name: 'VirusTotal', purpose: 'Indicator Reputation Analysis', description: 'Used to review reputation information for relevant indicators. Results were one part of the investigation, not the sole basis for classification.' },
  { name: 'TryDetectThis', purpose: 'Additional Indicator Investigation', description: 'Used through the Live Analyst VM to support indicator validation and compare findings with other sources.' },
  { name: 'TryHackMe SOC Simulator', purpose: 'Simulated SOC Environment', description: 'Provided the Alert Queue, analyst workflow, Live Analyst VM, documentation, and controlled investigation environment.' },
];

export const REPORT_STRUCTURE = [
  ['Reason for Classification', 'Explain why the available evidence supports the final alert classification.'],
  ['Investigation Findings', 'Document the relevant evidence gathered during the investigation.'],
  ['Attack Indicators', 'Document relevant indicators identified during the investigation.'],
  ['Escalation Decision', 'Explain whether additional investigation or response is required.'],
  ['Recommended Remediation', 'Document appropriate recommended actions when necessary.'],
] as const;

export const CASE_SKILLS: CaseStudyGroup[] = [
  { title: 'SOC Operations', items: ['SOC L1 Alert Triage', 'Security Monitoring', 'Alert Prioritization', 'SOC Escalation'] },
  { title: 'Investigation', items: ['Phishing Analysis', 'Email Security Analysis', 'SIEM Investigation', 'Splunk Log Analysis'] },
  { title: 'Indicator Analysis', items: ['IOC Analysis', 'URL Reputation Analysis', 'IP Reputation Analysis', 'Evidence Correlation'] },
  { title: 'Documentation', items: ['Alert Classification', 'True Positive / False Positive Decision-Making', 'Incident Documentation', 'Investigation Reporting'] },
];

export const TAKEAWAYS = [
  ['Investigate Before Classifying', 'An alert alone does not provide enough information to reach a reliable conclusion.'],
  ['Correlate Multiple Sources', 'Logs, indicators, reputation information, alert context, and supporting resources should be considered together.'],
  ['Document for the Next Analyst', 'Good documentation allows another SOC analyst to understand the evidence and continue the response efficiently.'],
] as const;
