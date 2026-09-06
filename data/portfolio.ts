// Single source of truth for all portfolio content.
// Components should import from here — never hardcode copies of this data.

export interface NavItem {
  label: string;
  href: string;
}

export interface Personal {
  name: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  title: string;
  altTitles: string[];
  heroDescription: string;
  resumeUrl: string;
}

export interface AboutHighlight {
  title: string;
  description: string;
}

export interface Skill {
  name: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  context: string;
  features: string[];
  projectUrl?: string;
  githubUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  expectedGraduation: string;
}

export interface ProfessionalSkill {
  name: string;
}

export interface Language {
  name: string;
  level: "Native" | "Intermediate" | "Fluent" | "Basic";
}

export interface ContactMethod {
  type: "email" | "phone" | "location" | "linkedin";
  label: string;
  value: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Summary", href: "#summary" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const personal: Personal = {
  name: "Siva V",
  phone: "8148522905",
  email: "sivasiva94211@gmail.com",
  location: "Hosur, Tamil Nadu",
  linkedin: "https://www.linkedin.com/in/siva-v-54b210433",
  title: "Python Full Stack Developer",
  altTitles: ["BCA Student", "Full Stack Developer", "Python Developer", "Web Developer"],
  heroDescription:
    "BCA student passionate about web application development and continuous learning.",
  resumeUrl: "/resume.pdf",
};

export const professionalSummary = {
  summary:
    "BCA student at M.G.R College, Hosur with knowledge of Python, HTML, CSS, MySQL, and Full Stack Development. Passionate about web application development and continuous learning.",
  direction:
    "Motivated BCA student seeking opportunities to apply and enhance technical skills in software and web development. Interested in Full Stack Development using Python and eager to contribute to innovative projects while gaining industry experience.",
};

export const aboutHighlights: AboutHighlight[] = [
  { title: "BCA Student", description: "Currently pursuing a Bachelor of Computer Applications at M.G.R College, Hosur." },
  { title: "Python Development", description: "Building a solid foundation in Python for backend and application logic." },
  { title: "Full Stack Development", description: "Learning to connect front-end interfaces with databases and server logic." },
  { title: "Continuous Learner", description: "Always exploring new tools and technologies to grow as a developer." },
];

export const skills: Skill[] = [
  { name: "Python" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Java" },
  { name: "C++" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "MySQL" },
  { name: "GitHub" },
];

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Development using Python",
    company: "Binary Brooks",
    location: "Hosur, Tamil Nadu",
    responsibilities: [
      "Assisted in developing web applications using Python technologies.",
      "Worked with HTML, CSS, and database integration.",
      "Collaborated with team members to deliver project requirements.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SmartCart AI",
    subtitle: "AI-Powered E-Commerce Application",
    description:
      "Developed an online shopping platform with product management, user authentication, shopping cart, and database integration.",
    context:
      "Designed as a smart e-commerce platform concept focused on improving the online shopping experience.",
    features: [
      "Product management",
      "User management",
      "Order management",
      "User authentication",
      "Shopping cart",
      "Database integration",
      "Admin dashboard approach",
    ],
    // No confirmed live URL or repository — intentionally omitted rather than fabricated.
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "M.G.R College, Hosur",
    location: "Hosur, Tamil Nadu",
    expectedGraduation: "2027",
  },
];

export const professionalSkills: ProfessionalSkill[] = [
  { name: "Communication Skills" },
  { name: "Problem Solving" },
  { name: "Team Collaboration" },
  { name: "Time Management" },
  { name: "Critical Thinking" },
];

export const languages: Language[] = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Intermediate" },
  { name: "Telugu", level: "Intermediate" },
];

export const contactMethods: ContactMethod[] = [
  {
    type: "email",
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    type: "phone",
    label: "Phone",
    value: personal.phone,
    href: `tel:+91${personal.phone}`,
  },
  {
    type: "location",
    label: "Location",
    value: personal.location,
    href: "",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "siva-v-54b210433",
    href: personal.linkedin,
  },
];
