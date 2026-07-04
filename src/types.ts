export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon: string;
    color: string;
  }[];
}

export interface SkillProgress {
  name: string;
  percentage: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  degree: string;
  details: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  verified: boolean;
  logo: string;
}
