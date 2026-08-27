export const PERSONAL_INFO = {
  name: "Santhosh Balamurugan",
  shortName: "Santhosh",
  title: "Full Stack Java Developer",
  roles: [
    "Full Stack Java Developer",
    "React.js & Spring Boot Engineer",
    "REST API & Backend Specialist",
    "Software Developer",
    "Freelance Developer"
  ],
  bio: "Full Stack Java Developer with hands-on experience in Java, Spring Boot, Spring Security, React.js, MySQL, and REST API development. Delivered production-grade projects reducing manual workload and passionate about scalable software architecture.",
  location: "India",
  availability: "Available for Full-time Roles & Freelance Projects",
  phone: "+91 9345897419",
  email: "santhoshb1503@gmail.com",
  github: "https://github.com/santhosh-15082003",
  linkedin: "https://www.linkedin.com/in/santhoshb150803/",
  instagram: "https://www.instagram.com/x._.saz._.x/",
  education: [
    {
      degree: "M.Sc Computer Science",
      institution: "Sri Krishna Adithya College of Arts and Science",
      period: "2024 – 2026",
      score: "84%",
      focus: "Software Engineering, Advanced Data Structures, Web Architecture & Database Systems"
    },
    {
      degree: "B.Sc Information Technology",
      institution: "Sri Krishna Adithya College of Arts and Science",
      period: "2021 – 2024",
      score: "86%",
      focus: "Object-Oriented Programming, Database Management, System Analysis"
    }
  ],
  experience: [
    {
      role: "Technical Support & Java Developer Intern",
      company: "Cyprus Info Tech",
      period: "Jan 2025 – Mar 2025",
      type: "90 Days",
      highlights: [
        "Developed responsive web application components using React.js and Tailwind CSS.",
        "Assisted in building & testing backend APIs using Java, Spring Boot, Spring Security, and JWT Authentication.",
        "Designed MySQL database tables, wrote optimized SQL queries, and ensured data integrity."
      ]
    },
    {
      role: "Flutter App Development Intern",
      company: "I-Tech Soft Solution",
      period: "Aug 2024",
      type: "30 Days",
      highlights: [
        "Developed mobile UI interfaces using Flutter/Dart following Material Design guidelines.",
        "Optimized state management and completed full mobile app lifecycle from UI to deployment."
      ]
    }
  ],
  stats: [
    { label: "Production Projects", value: "2+", suffix: "Grade" },
    { label: "Technologies Mastered", value: "15+", suffix: "Stack" },
    { label: "Internships Completed", value: "2", suffix: "Roles" },
    { label: "Code Quality & Delivery", value: "100%", suffix: "Committed" }
  ]
};

export const SKILLS_DATA = [
  {
    category: "Languages & Core",
    id: "languages",
    skills: [
      { name: "Java", level: "Advanced", icon: "Coffee", desc: "OOP principles, Collections framework, Multithreading, MVC" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode", desc: "Async/await, DOM APIs, modern ECMAScript features" },
      { name: "SQL", level: "Advanced", icon: "Database", desc: "Query optimization, indexing, schema normalization" },
      { name: "HTML5 & CSS3", level: "Expert", icon: "Layout", desc: "Semantic markup, responsive layouts, accessibility" }
    ]
  },
  {
    category: "Backend & Security",
    id: "backend",
    skills: [
      { name: "Spring Boot", level: "Advanced", icon: "Server", desc: "Microservices architecture, Spring MVC, dependency injection" },
      { name: "Spring Security & JWT", level: "Proficient", icon: "ShieldCheck", desc: "Token authentication, role-based authorization" },
      { name: "RESTful APIs", level: "Expert", icon: "Network", desc: "Secure endpoints, JSON serialization, integration" },
      { name: "Hibernate / JPA", level: "Proficient", icon: "Layers", desc: "ORM data modeling, entity relationships, CRUD transactions" }
    ]
  },
  {
    category: "Frontend & UI",
    id: "frontend",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Code2", desc: "Component architecture, hooks, state management, SPA" },
      { name: "Tailwind CSS", level: "Expert", icon: "Palette", desc: "Utility-first modern styling, responsive grid & flexbox" },
      { name: "Responsive Web Design", level: "Expert", icon: "Layout", desc: "Mobile-first layouts, cross-browser compatibility" }
    ]
  },
  {
    category: "Databases & DevOps",
    id: "databases-devops",
    skills: [
      { name: "MySQL", level: "Advanced", icon: "Database", desc: "Relational database design, query optimization, storage" },
      { name: "Git & GitHub", level: "Expert", icon: "GitBranch", desc: "Version control, branching workflows, collaborative CI" },
      { name: "Docker (Fundamentals)", level: "Familiar", icon: "Package", desc: "Containerization concepts and local deployment" },
      { name: "Postman & Maven", level: "Advanced", icon: "Send", desc: "API testing, automation, Java build lifecycle" }
    ]
  }
];

export const WORK_PROJECTS = [
  {
    id: "edudoc-recovery-system",
    title: "EduDoc Recovery System",
    subtitle: "Secure Educational Document Management",
    description: "A full-stack document management system that digitized student document requests, reducing manual processing by 90%. Features React.js admin dashboard, Spring Security, JWT authentication, QR-code verification, and MySQL.",
    tags: ["React.js", "Spring Boot", "Spring Security", "MySQL", "JWT", "Tailwind CSS"],
    image: "/assets/project-edudoc.jpg",
    github: "https://github.com/santhosh-15082003/EduDoc-Recovery-System",
    featured: true,
    highlights: [
      "Digitized student document requests, reducing manual workload by 90%",
      "React admin dashboard with real-time status tracking (Approved / Rejected / Under Verification)",
      "Secure REST APIs with Spring Security & JWT token authentication",
      "QR-code verification & email notification integration with 95% verification accuracy"
    ]
  },
  {
    id: "ai-tagging-system",
    title: "AI-Based Image Tagging and Browsing System",
    subtitle: "AI-Driven Image Annotation Engine",
    description: "Designed and implemented an AI-driven image tagging engine in Java using iterative user feedback loops, automating ~60% of manual annotation tasks and reducing retrieval time by 30%.",
    tags: ["Java", "JavaScript", "HTML5", "CSS3", "MySQL", "MVC", "AI/ML"],
    image: "/assets/project-ai-tagging.jpg",
    github: "https://github.com/santhosh-15082003/AI-Based-Tagging-and-Browsing-for-Efficient-Manual-Image-Annotation",
    featured: true,
    highlights: [
      "Automated image tagging engine reducing manual annotation by ~60%",
      "Optimized search & filtering functionality reducing image retrieval time by 30%",
      "Structured SQL database for efficient metadata storage and analytical reporting",
      "Released 3 iterative updates based on cross-functional usability testing"
    ]
  },
  {
    id: "recipe-app",
    title: "Recipe App",
    subtitle: "Modern Culinary Discovery & Meal Planning",
    description: "A feature-rich culinary exploration web application featuring dynamic dietary filtering, real-time recipe search, interactive nutrition breakdowns, and responsive state management.",
    tags: ["Development", "API", "React.js", "State Management", "UI/UX"],
    image: "/assets/project-recipe.jpg",
    github: "", // button hidden or placeholder
    featured: true,
    highlights: [
      "Instant search & category filter by dietary preferences",
      "Nutritional calculation and ingredient checklist widgets",
      "Responsive, clean card grid with smooth modal view"
    ]
  }
];

export const FREELANCE_PROJECTS = [
  {
    id: "venus-academy",
    title: "Venus Academy",
    subtitle: "Independent Client Project",
    tagline: "Independent work for real clients",
    description: "A comprehensive educational coaching and academy platform developed for a real client, providing intuitive course listings, batch schedules, faculty directories, and seamless admission inquiry pipelines.",
    tags: ["Client Project", "EdTech Platform", "Responsive UI", "Full Stack", "Student Portal"],
    image: "/assets/project-venus.jpg",
    github: "https://github.com/santhosh-15082003/venus-academy",
    liveUrl: "https://github.com/santhosh-15082003/venus-academy",
    clientName: "Venus Academy",
    highlights: [
      "Custom responsive design tailored to client's branding guidelines",
      "Interactive course directory and dynamic schedule viewer",
      "High-conversion lead capture and inquiry form integrations"
    ]
  }
];
