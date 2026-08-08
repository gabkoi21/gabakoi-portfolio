export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Course {
  number: string;
  title: string;
}

export interface SkillGroup {
  label: string;
  variant: 'teal' | 'purple' | 'blue';
  skills: string[];
}

export type CyberProjectStatus = 'Completed' | 'In Progress' | 'Coming Soon';

export interface CyberProject {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  skills: string[];
  status: CyberProjectStatus;
  platform?: string;
  scenarioTitle?: string;
  role?: string;
  siem?: string;
  github?: string;
  scenarioOverview?: string;
  investigationObjective?: string;
  alertDetails?: {
    alertType?: string;
    severity?: string;
    timestamp?: string;
    sender?: string;
    recipient?: string;
    subject?: string;
    sourceIp?: string;
    domain?: string;
    url?: string;
    fileName?: string;
    fileHash?: string;
  };
  indicators?: Array<{ type: string; value: string; notes?: string }>;
  investigationSteps?: string[];
  findings?: string[];
  classification?: 'True Positive' | 'False Positive' | 'Benign Positive' | 'Needs Further Investigation';
  classificationReason?: string;
  escalationDecision?: 'Escalation Required' | 'No Escalation Required';
  escalationReason?: string;
  remediation?: string[];
  lessonsLearned?: string[];
  evidence?: Array<{ image: string; alt: string; caption?: string }>;
}

export interface CaseStudyStep { number: string; title: string; description: string; }
export interface CaseStudyTool { name: string; purpose: string; description: string; }
export interface CaseStudyGroup { title: string; items: string[]; }

export interface TryHackMeAchievement {
  id: number;
  title: string;
  description: string;
  rarity?: string;
  category: 'SOC' | 'Learning';
}

export interface TryHackMeLab {
  id: number;
  title: string;
  type: 'Room' | 'Lab' | 'SOC Scenario';
  status: 'Completed' | 'In Progress';
  skills: string[];
  description?: string;
  writeupUrl?: string;
}

export type TryHackMeRoomCategory =
  | 'SOC Operations'
  | 'Alert Triage & Investigation'
  | 'SOC Performance'
  | 'Threat & Attack Awareness'
  | 'Security Foundations';

export interface TryHackMeRoom {
  id: number;
  title: string;
  slug: string;
  url: string;
  description: string;
  category: TryHackMeRoomCategory;
  difficulty: 'Easy' | 'Info';
  access?: 'Free Walkthrough' | 'Premium Walkthrough';
  status: 'Completed';
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: 'live' | 'lab';
  statusLabel: string;
  featured?: boolean;
  githubUrl: string;
  demoUrl?: string;
  demoLabel?: string;
}

export interface ActivityItem {
  text: string;
  time: string;
  color: 'teal' | 'purple' | 'blue';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
