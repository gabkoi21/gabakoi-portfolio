import type {
  Course,
  SkillGroup,
  Project,
  ActivityItem,
  Stat,
  NavItem,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Credentials", href: "#credentials" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS: Stat[] = [
  { value: "10+", label: "Certifications" },
  // { value: '2', label: 'Live Projects' },
  { value: "3+", label: "Years Dev Exp" },
  { value: "BSc", label: "Cybersecurity" },
];

export const HERO_TAGS: string[] = [
  "SIEM/SOAR",
  "Network Defense",
  "Python Automation",
  "Incident Response",
  "Full-Stack Dev",
];

export const CS50_COURSES: Course[] = [
  { number: "01", title: "Securing Accounts" },
  { number: "02", title: "Securing Data" },
  { number: "03", title: "Securing Systems" },
  { number: "04", title: "Securing Software" },
  { number: "05", title: "Preserving Privacy" },
];

export const GOOGLE_COURSES: Course[] = [
  { number: "01", title: "Foundations of Cybersecurity" },
  { number: "02", title: "Protecting Devices and Networks" },
  { number: "03", title: "Identity and Access Management" },
  { number: "04", title: "Threat Intelligence and Risk" },
  { number: "05", title: "Security Operations and SIEM" },
  { number: "06", title: "Incident Response and Forensics" },
  { number: "07", title: "Data Protection and Privacy" },
  { number: "08", title: "Career Readiness and Capstone" },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Security Tools & Platforms",
    variant: "teal",
    skills: [
      "Wireshark",
      "Tcpdump",
      "Suricata",
      // "AI"
      // "Nmap",
      "Splunk",
      "Chronicle",
      "Linux CLI",
      "SQL",
    ],
  },
  {
    label: "Languages, Frameworks & Infrastructure",
    variant: "purple",
    skills: [
      "TypeScript",
      "React",
      "FastAPI",
      "Next.js",
      "Python",
      "PostgreSQL",
      "Git/GitHub",
    ],
  },
  {
    label: "Security Concepts & Frameworks",
    variant: "blue",
    skills: [
      "SIEM / SOAR Triage",
      // "IAM",
      "Network Security",
      "Risk Management",
      "NIST Framework",
      "Incident Response",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Pharmacybook-v1",
    subtitle: "Secure Full-Stack Dashboard",
    description:
      "A secure full-stack pharmacy management dashboard featuring robust input validation, secure data state management via PostgreSQL, and granular user role controls. Built with a security-first architecture to handle local pharmacy information and inventory data responsibly.",
    tags: [
      "JavaScript React",
      "Python FastAPI",
      "PostgreSQL",
      "Role-Based Access",
      "Input Validation",
    ],
    status: "live",
    statusLabel: "Live · Full-Stack Application",
    featured: true,
    githubUrl: "https://github.com/gabrielakoi",
    demoLabel: "Live Demo",
    demoUrl: "https://www.pharmaciesbook.com/",
  },
  // {
  //   title: "Security Automation & Incident Response Lab",
  //   subtitle: "Python Security Tooling",
  //   description:
  //     "A portfolio lab highlighting Python scripting for automated log analysis, security auditing, and proactive threat detection. Simulates real-world SOC workflows including alert triage, SIEM rule writing, and post-incident reporting.",
  //   tags: [
  //     "Python",
  //     "Log Analysis",
  //     "SIEM Rules",
  //     "Threat Detection",
  //     "Automation",
  //   ],
  //   status: "lab",
  //   statusLabel: "Security Lab",
  //   githubUrl: "https://github.com/gabrielakoi",
  //   demoLabel: "Documentation",
  //   demoUrl: "#",
  // },

  {
    title: "WassceLab",
    subtitle: "WASSCE Exam Preparation Platform",
    description:
      "An AI-powered WASSCE preparation platform with study support, practice questions, mock exams, and performance tracking.",
    tags: [
      "Education",
      "WASSCE",
      "E-Learning",
      "Practice Tests",
      "Student Analytics",
      "Exam Preparation",
    ],
    status: "lab",
    statusLabel: "EdTech Platform",
    githubUrl: "https://github.com/gabrielakoi",
    // demoLabel: "Coming Soon",
    demoUrl: "https://mywasscelab.com/",
  },
];

export const ACTIVITY_ITEMS: ActivityItem[] = [
  {
    text: "Completed Google Cybersecurity Professional Certificate — all 8 courses verified.",
    time: "Recently",
    color: "teal",
  },
  {
    text: 'Published: "Automating Log Analysis with Python — A Practical Guide"',
    time: "Article · LinkedIn",
    color: "purple",
  },
  {
    text: "Open to cybersecurity analyst, security engineer, and full-stack dev roles.",
    time: "Status update",
    color: "blue",
  },
];
