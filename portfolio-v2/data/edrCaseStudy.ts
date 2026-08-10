export const EDR_WORKFLOW = [
  ['01', 'Prioritize detections', 'Reviewed medium- and high-severity alerts, affected hosts, users, timestamps, and confidence scores.'],
  ['02', 'Read the detection summary', 'Established what triggered each alert and identified the behavior that needed validation.'],
  ['03', 'Trace the process chain', 'Followed parent-child relationships and command lines to reconstruct activity on the endpoint.'],
  ['04', 'Inspect host evidence', 'Compared executable paths, signatures, hashes, file activity, and user context.'],
  ['05', 'Review network activity', 'Examined destination domains, IP addresses, URLs, and the purpose of outbound connections.'],
  ['06', 'Correlate IOCs', 'Connected file, domain, IP, hash, and URL indicators back to the process activity.'],
  ['07', 'Check threat intelligence', 'Used the EDR threat-intelligence label to distinguish known internal software from suspicious activity.'],
  ['08', 'Document findings', 'Recorded the evidence-backed answer for each alert without performing response actions.'],
] as const;

export const EDR_DETECTIONS = [
  {
    host: 'DESKTOP-HR01', severity: 'High', user: 'alice.thomas', title: 'Office macro staged a downloaded payload',
    summary: 'A macro-enabled invoice document opened in Microsoft Word spawned CMD, which launched cURL to download a payload. The file was written to the Public folder but was not executed.',
    chain: 'WINWORD.EXE → CMD.EXE → cURL.EXE → INSTALL.EXE',
    findings: ['Download utility: CURL.exe', 'Downloaded file: C:\\Users\\Public\\install.exe', 'Source document: invoice.docm', 'External domain: ayebd.thm', 'External IP: 1.161.138.92', 'Execution was not observed; the behavior was consistent with payload staging.'],
    mitre: 'Initial Access · T1566.001 — Spearphishing Attachment',
  },
  {
    host: 'WIN-ENG-LAPTOP03', severity: 'High', user: 'haris.khan', title: 'Suspicious service attempted data exfiltration',
    summary: 'The investigation identified a suspicious syncsvc.exe running from a user Temp directory and communicating with an external file-transfer URL associated with an attempted dump-file upload.',
    chain: 'Endpoint process activity → syncsvc.exe → outbound HTTPS upload',
    findings: ['Suspicious binary: C:\\Users\\haris.khan\\AppData\\Local\\Temp\\syncsvc.exe', 'Exfiltration URL: https://files-wetransfer.com/upload/session/ab12cd34ef56/dump_2025.dmp', 'The Temp-directory location increased suspicion.', 'The destination path indicated an attempted upload of dump_2025.dmp.'],
    mitre: 'Exfiltration · outbound transfer over a web service',
  },
  {
    host: 'DESKTOP-DEV01', severity: 'Medium', user: 'Developer endpoint', title: 'Update utility validated with threat intelligence',
    summary: 'A detection involving UpdateAgent.exe required context from the EDR threat-intelligence panel before a conclusion could be reached.',
    chain: 'Endpoint detection → UpdateAgent.exe → threat-intelligence validation',
    findings: ['Threat Intel label: Known internal IT utility tool', 'The label supplied essential business context.', 'The alert demonstrated why severity and process names alone are not enough for classification.'],
    mitre: 'Contextual validation · internal utility identification',
  },
] as const;

export const EDR_IOCS = [
  ['File path', 'C:\\Users\\Public\\install.exe', 'Downloaded payload'],
  ['Domain', 'ayebd.thm', 'External download source / C2 indicator'],
  ['IP address', '1.161.138.92', 'External download connection'],
  ['SHA-256', '9e107d9d372bb6826bd81d3542a419d6eaf1e3f5b94fc3b1f69413c5c30ef2e5', 'Unknown executable'],
  ['Document', 'C:\\User\\alice\\Downloads\\invoice.docm', 'Suspicious macro-enabled attachment'],
  ['File path', 'C:\\Users\\haris.khan\\AppData\\Local\\Temp\\syncsvc.exe', 'Suspicious Temp binary'],
  ['URL', 'https://files-wetransfer.com/upload/session/ab12cd34ef56/dump_2025.dmp', 'Attempted exfiltration destination'],
] as const;
