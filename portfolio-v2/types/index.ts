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
  github?: string;
  image?: string;
  scenario?: string;
  alertDetails?: {
    alertType?: string;
    severity?: string;
    source?: string;
    timestamp?: string;
    sender?: string;
    recipient?: string;
    ip?: string;
    domain?: string;
    fileHash?: string;
  };
  indicators?: string[];
  investigationSteps?: string[];
  findings?: string[];
  classification?: 'True Positive' | 'False Positive' | 'Benign Positive' | 'Needs Further Investigation';
  escalation?: string;
  remediation?: string[];
  lessonsLearned?: string[];
}

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
