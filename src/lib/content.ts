export type NavSection = {
  id: string;
  number: string;
  label: string;
};

export const navSections: NavSection[] = [
  {id: "intro", number: "01", label: "INTRO"},
  {id: "about", number: "02", label: "ABOUT"},
  {id: "experience", number: "03", label: "EXPERIENCE"},
  {id: "stack", number: "04", label: "STACK"},
  {id: "think", number: "05", label: "THINK"},
  {id: "contact", number: "06", label: "CONTACT"},
];

export type ExperienceEntry = {
  number: string;
  role: string;
  company: string;
  companyUrl?: string;
  date: string;
  technologies: string[];
};

export const experience: ExperienceEntry[] = [
  {
    number: "01",
    role: "Associate Developer",
    company: "Darse Technologies Pvt. Ltd.",
    companyUrl: "https://darsetech.com",
    date: "January 2025 — Present",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Pytest",
      "REST APIs",
    ],
  },
  {
    number: "02",
    role: "Contract Developer (Part-Time)",
    company: "Connectifi Solution Pvt. Ltd.",
    date: "May 2026 — August 2026",
    technologies: [
      "Next.js",
      "React.js",
      "Prisma",
      "Google Authentication",
      "Object/Bucket Storage",
      "PHP",
    ],
  },
  {
    number: "03",
    role: "Freelance Backend/API Developer",
    company: "Remote",
    date: "2024 — Present",
    technologies: [
      "FastAPI",
      "Flask",
      "Django REST Framework",
      "Docker",
      "Nginx",
      "Linux",
      "VPS",
    ],
  },
];

export type StackGroup = {
  category: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    category: "Backend",
    items: ["Python", "FastAPI", "Django", "Django REST Framework", "Flask"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Qdrant"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React.js", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Infrastructure",
    items: [
      "Docker",
      "Docker Compose",
      "Nginx",
      "Linux",
      "VPS",
      "Object/Bucket Storage",
    ],
  },
  {
    category: "Security",
    items: [
      "JWT",
      "Authentication",
      "Authorization",
      "RBAC",
      "Permissions",
      "API Security",
    ],
  },
  {
    category: "Testing",
    items: ["Pytest", "Unit Testing", "API Testing"],
  },
];

export type ThinkEntry = {
  number: string;
  title: string;
  description: string;
};

export const think: ThinkEntry[] = [
  {
    number: "01",
    title: "Backend Architecture",
    description:
      "Structuring services and modules so systems stay maintainable as scope and teams grow.",
  },
  {
    number: "02",
    title: "Database Performance",
    description:
      "Designing efficient queries, indexes and data access patterns that keep applications responsive as they grow.",
  },
  {
    number: "03",
    title: "Distributed Systems",
    description:
      "Thinking through how services communicate, fail and recover when they no longer run on a single machine.",
  },
  {
    number: "04",
    title: "AI Agents & LLM Applications",
    description:
      "Building backend systems that integrate language models and agents into real application workflows.",
  },
  {
    number: "05",
    title: "Cloud Infrastructure",
    description:
      "Deploying and operating applications reliably using Docker, Nginx and Linux-based environments.",
  },
  {
    number: "06",
    title: "Software Engineering",
    description:
      "The discipline behind the code — testing, review and process that make software easier to trust.",
  },
];
