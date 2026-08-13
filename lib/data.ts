export const profile = {
  name: 'Reet Bhatia',
  handle: 'reet',
  role: 'Cybersecurity Analyst',
  focusLine: 'Cloud Security • Security Operations • AI',
  intro: [
    'Building practical security solutions in cloud security, threat detection, incident response, and AI-assisted security.',
    
  ],
  links: {
    resume: '/resume.pdf',
    linkedin: 'https://www.linkedin.com/in/reet-bhatia/',
    github: 'https://github.com/reetbhatia',
    email: 'mailto:reetbhatia02@gmail.com',
  },
  system: [
    { label: 'SYSTEM STATUS', value: 'ONLINE', online: true },
    { label: 'FOCUS', value: 'SECURITY OPERATIONS' },
    { label: 'ENVIRONMENT', value: 'AWS' },
    { label: 'EDUCATION', value: 'UMD' },
  ],
}

export type Project = {
  id: string
  index: string
  slug: string
  title: string
  short: string
  description: string
  status: 'ACTIVE DEVELOPMENT' | 'COMPLETED' | 'ARCHIVED'
  tech: string[]
  github?: string
  featured?: boolean
  meta: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    id: 'aegis',
    index: '01',
    slug: 'aegis',
    title: 'Aegis — Agentic AI SOC Analyst & Threat Hunting Agent',
    short: 'Agentic AI SOC analyst with a custom O-H-P-V-R reasoning framework.',
    description:
      'Built Aegis, an agentic AI SOC analyst using Gemini 2.5 Flash and a custom O-H-P-V-R reasoning framework for threat hunting across security telemetry. Added guardrails, MITRE ATT&CK validation, deterministic CVSS scoring, IOC correlation, VirusTotal enrichment, and token/cost tracking for LLM usage.',
    status: 'ACTIVE DEVELOPMENT',
    tech: [
      'Gemini 2.5 Flash',
      'Python',
      'Agentic AI',
      'MITRE ATT&CK',
      'CVSS',
      'VirusTotal',
      'KQL',
      'Threat Hunting',
    ],
    featured: true,
    meta: [
      { label: 'domain', value: 'AI / Threat Hunting' },
      { label: 'framework', value: 'O-H-P-V-R' },
      { label: 'model', value: 'Gemini 2.5 Flash' },
    ],
  },
  {
    id: 'dfir',
    index: '02',
    slug: 'dfir',
    title: 'Digital Forensics Investigation of a Multi-Stage Malware Campaign',
    short: 'Forensic reconstruction of a multi-stage malware campaign.',
    description:
      'Investigated a multi-stage malware campaign using Autopsy, Wireshark, and VeraCrypt to analyze forensic artifacts, network traffic, reconstruct the attack timeline, and map findings to MITRE ATT&CK.',
    status: 'COMPLETED',
    tech: [
      'Autopsy',
      'Wireshark',
      'VeraCrypt',
      'MITRE ATT&CK',
      'Digital Forensics',
      'Malware Analysis',
    ],
    github: 'https://github.com/reetbhatia/digital-forensics-malware-investigation',
    meta: [
      { label: 'domain', value: 'DFIR' },
      { label: 'artifacts', value: 'disk / pcap' },
      { label: 'mapping', value: 'MITRE ATT&CK' },
    ],
  },
  {
    id: 'aws-security',
    index: '03',
    slug: 'aws-security',
    title: 'AWS Security Vulnerability Assessment',
    short: 'Cloud security assessment across EC2, VPC, IAM, and databases.',
    description:
      'Assessed an AWS-hosted application for security vulnerabilities across EC2, VPC, IAM, and database configurations using CIS Benchmarks and OWASP guidance.',
    status: 'COMPLETED',
    tech: ['AWS', 'EC2', 'VPC', 'IAM', 'CIS Benchmarks', 'OWASP'],
    github: 'https://github.com/reetbhatia/aws-security-assessment',
    meta: [
      { label: 'domain', value: 'Cloud Security' },
      { label: 'standard', value: 'CIS / OWASP' },
      { label: 'scope', value: 'EC2 / VPC / IAM' },
    ],
  },
  {
    id: 'incident-response',
    index: '04',
    slug: 'incident-response',
    title: 'Cisco IOS XE Web UI Exploitation — Incident Response Investigation',
    short: 'IR investigation of a simulated Cisco IOS XE compromise.',
    description:
      'Investigated a simulated Cisco IOS XE compromise using syslog analysis, IOC correlation, and threat intelligence.',
    status: 'COMPLETED',
    tech: [
      'Cisco IOS XE',
      'Syslog',
      'IOC Correlation',
      'Threat Intelligence',
      'Incident Response',
    ],
    github: 'https://github.com/reetbhatia/incident-response-investigation',
    meta: [
      { label: 'domain', value: 'Incident Response' },
      { label: 'source', value: 'syslog' },
      { label: 'method', value: 'IOC correlation' },
    ],
  },
]

export const ohpvr = [
  { key: 'O', label: 'OBSERVATION', note: 'ingest & normalize telemetry' },
  { key: 'H', label: 'HYPOTHESIS', note: 'form candidate threat theories' },
  { key: 'P', label: 'PLANNING', note: 'select checks & data sources' },
  { key: 'V', label: 'VERIFICATION', note: 'validate against evidence' },
  { key: 'R', label: 'RESULT', note: 'score, enrich & report' },
  { key: 'P', label: 'PIVOT', note: 'branch on new indicators' },
]

export type SkillGroup = {
  id: string
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'secops',
    title: 'SECURITY OPERATIONS',
    items: [
      'SIEM',
      'Incident Response',
      'Threat Hunting',
      'Security Monitoring',
      'Vulnerability Management',
    ],
  },
  {
    id: 'cloud',
    title: 'CLOUD SECURITY',
    items: ['AWS', 'EC2', 'VPC', 'IAM', 'S3', 'CloudTrail', 'AWS Config'],
  },
  {
    id: 'tools',
    title: 'SECURITY TOOLS',
    items: [
      'Splunk',
      'Microsoft Sentinel',
      'Microsoft Defender',
      'Wireshark',
      'Autopsy',
      'Nmap',
    ],
  },
  {
    id: 'engineering',
    title: 'ENGINEERING',
    items: ['Python', 'Bash', 'Linux', 'Terraform', 'Docker', 'Kubernetes'],
  },
  {
    id: 'ai',
    title: 'AI / SECURITY',
    items: ['Agentic AI', 'MITRE ATT&CK', 'CVSS', 'LLM Security'],
  },
]

export type Experience = {
  id: string
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    id: 'spectra',
    role: 'Technical Operations Intern',
    company: 'Spectra Outsource Solutions',
    location: 'New Delhi, India',
    period: 'Jan 2024 – Jun 2024',
    bullets: [
      'Handled 14+ ServiceNow incidents and requests daily.',
      'Supported Windows/Linux servers and production troubleshooting.',
      'Processed user access requests and supported role-based access controls.',
    ],
  },
  {
    id: 'cloudus',
    role: 'Cloud Security Intern',
    company: 'Cloudus Soft IT Solutions',
    location: 'New Delhi, India',
    period: 'Jun 2023 – Aug 2023',
    bullets: [
      'Deployed microservices on AWS using Terraform, Docker, and EKS.',
      'Set up monitoring using OpenTelemetry, Prometheus, CloudWatch, and Alertmanager.',
      'Automated deployments with Helm and GitHub Actions.',
    ],
  },
]

export const education = [
  {
    id: 'umd',
    school: 'University of Maryland, College Park',
    entries: [
      { degree: 'M.Eng. Cybersecurity', detail: 'May 2026' },
      { degree: 'Graduate Certificate in Cloud Engineering', detail: 'GPA: 3.78' },
    ],
  },
  {
    id: 'vit',
    school: 'Vellore Institute of Technology',
    entries: [{ degree: 'B.Tech. Computer Science & Engineering', detail: 'Aug 2024' }],
  },
]

export const certifications = [
  { id: 'sec-plus', name: 'Security+', issuer: 'CompTIA', code: 'SEC+' },
  {
    id: 'isc2-cc',
    name: 'ISC2 Certified in Cybersecurity',
    issuer: 'ISC2',
    code: 'CC',
  },
  { id: 'sc-900', name: 'Security, Compliance & Identity', issuer: 'Microsoft', code: 'SC-900' },
]

export const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
]
