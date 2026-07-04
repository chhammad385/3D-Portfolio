import { StatItem, SkillCategory, SkillProgress, ProjectItem, EducationItem, CertificateItem } from "./types";

export const statsData: StatItem[] = [
  {
    id: "coding-years",
    value: "4+",
    label: "Years Coding"
  },
  {
    id: "major-projects",
    value: "5+",
    label: "Major Projects"
  },
  {
    id: "technologies",
    value: "18+",
    label: "Technologies"
  },
  {
    id: "cgpa",
    value: "3.70",
    label: "CGPA"
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "html", color: "#E34F26" },
      { name: "CSS3", icon: "css", color: "#1572B6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Flutter", icon: "flutter", color: "#02569B" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: "java", color: "#007396" },
      { name: "Spring Boot", icon: "springboot", color: "#6DB33F" },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "REST API", icon: "rest", color: "#009688" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "SQLite", icon: "sqlite", color: "#003B57" },
      { name: "Firebase", icon: "firebase", color: "#FFCA28" }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#FFFFFF" },
      { name: "Maven", icon: "maven", color: "#C71A36" },
      { name: "VS Code", icon: "vscode", color: "#007ACC" }
    ]
  }
];

export const skillsProgress: SkillProgress[] = [
  { name: "Java", percentage: 95 },
  { name: "Spring Boot", percentage: 90 },
  { name: "MySQL", percentage: 85 },
  { name: "React", percentage: 80 },
  { name: "Docker", percentage: 75 }
];

export const projectsData: ProjectItem[] = [
  {
    id: "jeewan-avenue",
    title: "Jeewan Avenue Society",
    subtitle: "Society Management System",
    description: "Engineered a comprehensive Society Management System to streamline dues tracking and generate financial reports, significantly improving administrative workflows by 50% and enhancing record management accuracy. Integrated REST APIs that provided realtime updates and improved data handling.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chhammad385/Jeewan-Avenue-Society",
    demo: "https://www.jeewanavenuesociety.me/home.html"
  },
  {
    id: "ai-voice-studio",
    title: "AI Voice Studio",
    subtitle: "AI Voice Assistant Desktop App",
    description: "An interactive desktop application built with Python and Electron that serves as an intelligent voice assistant. Features real-time speech processing and natural user interface animations.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=500&q=80",
    tags: ["Python", "Electron", "React"],
    github: "https://github.com/chhammad385/Ai-Voice-Studio"
  },
  {
    id: "business-mgt-system",
    title: "Raza & Sons Trader",
    subtitle: "Business Management System",
    description: "Developed a feature-rich Flutter-based Business Management System including invoicing and inventory management, effectively enhancing user productivity by 30%. Utilized SQLite for offline data storage and REST APIs for seamless synchronization, optimizing operational workflows with clear business impact and user-focused outcomes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    tags: ["Flutter", "SQLite", "Firebase"]
  },
  {
    id: "comsats-lost-found",
    title: "COMSATS Lost & Found Portal",
    subtitle: "Web Portal for Lost & Found",
    description: "Designed and implemented a robust web-based Lost & Found System, streamlining item recovery processes on campus through enhanced user authentication, effective item tracking, and real-time search features. Improved user satisfaction by 40% with an intuitive design and rapid access to item information.",
    image: "https://images.unsplash.com/photo-1626010448982-0fec79ed1979?w=500&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chhammad385"
  },
  {
    id: "icon-clothe",
    title: "Icon Clothe",
    subtitle: "E-Commerce Website (WordPress)",
    description: "A high-performance e-commerce website built on WordPress with a custom Elementor design, offering responsive product catalogs, secure checkouts, and clean category navigation.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80",
    tags: ["WordPress", "Elementor"]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "comsats-edu",
    period: "2024 - Present",
    institution: "COMSATS University Islamabad, Sahiwal Campus",
    degree: "Bachelor of Computer Science",
    details: "CGPA: 3.70 / 4.00"
  },
  {
    id: "fsc-edu",
    period: "2021 - 2023",
    institution: "F.Sc (Pre Engineering)",
    degree: "Higher Secondary Certificate",
    details: ""
  },
  {
    id: "matric-edu",
    period: "2019 - 2021",
    institution: "Matriculation",
    degree: "Secondary School Certificate",
    details: "Marks: 1031 / 1100"
  }
];

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-html",
    title: "HTML",
    organization: "LinkedIn",
    verified: true,
    logo: "In"
  },
  {
    id: "cert-css",
    title: "CSS",
    organization: "LinkedIn",
    verified: true,
    logo: "In"
  },
  {
    id: "cert-js",
    title: "JavaScript",
    organization: "LinkedIn",
    verified: true,
    logo: "In"
  },
  {
    id: "cert-wp",
    title: "WordPress",
    organization: "LinkedIn",
    verified: true,
    logo: "In"
  },
  {
    id: "cert-elementor",
    title: "Elementor",
    organization: "LinkedIn",
    verified: true,
    logo: "In"
  }
];
