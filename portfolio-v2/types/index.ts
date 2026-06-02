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
