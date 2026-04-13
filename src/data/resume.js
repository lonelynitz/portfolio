// src/data/resume.js

export const personal = {
  name: "Vasanth Murugesan",
  title: "Full Stack Developer",
  tagline: "Full Stack Developer with 2.7 years of MERN stack experience building scalable web applications.",
  email: "vasanthmurugesan47@gmail.com",
  phone: "+91 6369083520",
  linkedin: "https://www.linkedin.com/in/vasanth-murugesan-m",
};

export const about = {
  summary:
  "Full Stack Developer with 2.7 years of experience in the MERN stack, building scalable web applications. Proficient in React, Node.js, and TypeScript, with experience in Next.js, Remix, and backend development including Python. Strong in API development and database design (PostgreSQL, MySQL), with experience in backend optimization using Redis, focused on delivering clean, efficient, and maintainable solutions.",
  education: {
    degree: "B.Sc. Computer Science",
    institution: "Sri Ramakrishna College of Arts & Science, Coimbatore",
    years: "2020–2023",
  },
  certifications: [
    { name: "Docker Fundamentals", issuer: "KodeKloud", year: "2026" },
    { name: "AWS Cloud Practitioner Essential", issuer: "AWS", year: "2026" },
  ],
};

export const skills = {
  primary: [
    "React.js", "Next.js", "Node.js", "TypeScript",
    "JavaScript (ES6+)", "PostgreSQL", "REST APIs","Python",
  ],
  librariesAndFrameworks: [
    "Remix", "Redux", "Express.js", "MongoDB", "MySQL",
    "Redis", "Tailwind CSS", "Prisma", "Zod", "GraphQL",
    "JWT", "Apache Kafka",
  ],
  toolsAndCloud: [
    "Git", "GitLab CI/CD", "Docker", "Postman",
    "AWS (EC2, S3, Lambda)", "Jest", "Playwright", "Cypress",
  ],
};

export const experience = [
  {
    title: "Web Developer",
    company: "Joseph Engineering Service (VerBronnen)",
    location: "Chennai",
    dateRange: "Nov 2025 – Mar 2026",
    bullets: [
      "Built scalable internal ERP system to manage organizational workflows, users, roles, departments, and reports.",
      "Designed and implemented backend APIs using Node.js, Express, and Prisma, incorporating RBAC for secure data handling.",
      "Improved frontend performance using React Query to reduce unnecessary API calls and re-renders, and integrated Zod for secure form validation.",
      "Assisted in environment setup and deployment to ensure smooth staging and production releases.",
    ],
  },
  {
    title: "Web Developer",
    company: "FR8 Logistics",
    location: "Chennai",
    dateRange: "Jun 2024 – Sep 2025",
    bullets: [
      "Developed and scaled the 'Grow App', an internal logistics platform, utilizing Next.js, React, PostgreSQL, and GraphQL to streamline operations.",
      "Led the migration of the application from Next.js to Effect.js, refactoring modules into a functional, type-safe architecture to enhance system scalability.",
      "Optimized SQL queries, successfully reducing query costs by 75%, which significantly improved overall performance and prevented application crashes.",
      "Developed and customized an internal real-time chat application using the Frappe framework with Python backend, improving team collaboration and internal communication.",
      "Built reusable UI components with Tailwind CSS and improved system reliability using Effect-based error handling patterns.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "FR8 Logistics",
    location: "Chennai",
    dateRange: "Sep 2023 – May 2024",
    bullets: [
      "Contributed to full-stack development using React.js, Next.js, Express.js, and PostgreSQL.",
      "Collaborated in Agile sprints, managing issue tracking and code merges via GitLab.",
      "Participated in debugging and testing processes to improve application code quality and user experience.",
    ],
  },
];

export const projects = [
  {
    name: "Internal ERP System",
    description:
      "A scalable internal ERP system built at Joseph Engineering Service to manage organizational workflows, users, roles, departments, and reports. Features RBAC-based secure API design and optimized frontend with React Query.",
    technologies: ["Node.js", "Express", "Prisma", "React", "React Query", "Zod"],
    liveUrl: null,
    repoUrl: null,
  },
  {
    name: "Grow App – Logistics Platform",
    description:
      "An internal logistics platform at FR8 Logistics built with Next.js and GraphQL. Led migration to a functional, type-safe architecture using Effect.js and achieved a 75% reduction in SQL query costs.",
    technologies: ["Next.js", "React", "PostgreSQL", "GraphQL", "Effect.js", "Tailwind CSS"],
    liveUrl: null,
    repoUrl: null,
  },
  {
    name: "FR8 Raven Chat – Internal Communication App",
    description:
      "Customized and maintained an internal real-time chat application for FR8 Logistics using the Frappe Raven framework. Tailored the app to fit internal team workflows, improving collaboration and communication across departments. Backend powered by Python via the Frappe framework.",
    technologies: ["Frappe", "Raven", "Python", "JavaScript", "React"],
    liveUrl: null,
    repoUrl: null,
  },
];
