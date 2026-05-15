import { Project, Experience, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Hybrid-Rerank RAG: A Local-First Evaluated Pipeline",
    description: "A sophisticated local-first RAG system for document QA using LangChain and ChromaDB. Features a retrieve-then-rerank pipeline with BM25 and SBERT CrossEncoder, delivering citation-grounded answers with production-style evaluation and quality controls.",
    tags: ["LangChain", "ChromaDB", "BM25", "SBERT", "Python", "Streamlit"],
    metrics: ["Benchmarked 4 retrieval strategies", "CI-based regression gating", "Runtime telemetry"],
    github: "https://github.com/Nanvithaa/Production-RAG-Application",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "JAI – Job Application Intelligence",
    description: "End-to-end automation platform integrating a Chrome Extension with a Next.js backend. Automates job application workflows, generates ATS-compliant resumes, and features a hybrid autofill engine with AI-assisted fallback.",
    tags: ["Next.js", "Chrome Extension", "OAuth", "NextAuth", "LaTeX", "AI"],
    metrics: ["Automated resume generation", "Secure session management", "Hybrid autofill engine"],
    github: "https://github.com/Nanvithaa/JAI",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "SEO Reports Generator SaaS",
    description: "AI-powered SEO analytics platform processing 10K+ records daily. Integrates Bright Data and GPT-4o to deliver keyword and content insights, cutting manual reporting time by 70% through automated pipelines.",
    tags: ["GPT-4o", "Bright Data", "Async APIs", "Caching", "SaaS"],
    metrics: ["70% reduction in reporting time", "10K+ records/day", "45% lower response latency"],
    github: "https://github.com/Nanvithaa/seo_AI_saas_nextjs-15",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Integrating Social and Spatial Networks for Rumor Diffusion",
    description: "Large-scale graph analysis of 500K nodes and 3M edges. Combines Twitter follow graphs with spatial proximity data from 1M building footprints to study online-offline rumor diffusion using Independent Cascade Model.",
    tags: ["Graph Theory", "Geospatial", "Python", "NetworkX", "Big Data"],
    metrics: ["500K+ nodes / 3M+ edges", "Community detection", "Spatial coupling"],
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1558486012-817176f84c6d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Internship Program Management System",
    description: "Role-aware workflow platform that automated 300+ approvals per term. Features stale-while-revalidate hooks for sub-200ms data freshness and high test coverage.",
    tags: ["React", "REST APIs", "SWR", "Testing", "Workflow Automation"],
    metrics: ["300+ approvals/term", "92% test coverage", "50% reduction in review time"],
    github: "https://github.com/Nanvithaa/IPMS",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AI Web Agent",
    description: "Chrome extension performing real-time summarization and contextual search for 1.2K+ users, integrating LLM-based retrieval workflows with AES-256 encryption.",
    tags: ["LLM", "Chrome Extension", "Security", "NLP"],
    github: "https://github.com/Nanvithaa/AI-Web-Agent",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Plant Disease Detection",
    description: "Computer vision classifier with 92% accuracy using TensorFlow/PyTorch, integrated into a full-stack React application for agricultural users.",
    tags: ["TensorFlow", "PyTorch", "Computer Vision", "React"],
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Electricity Theft Detection",
    description: "DNN-based anomaly detection model with 93% precision on 20K+ smart grid readings, featuring SHAP-based explainable AI visualizations.",
    tags: ["Deep Learning", "Anomaly Detection", "Explainable AI", "Azure Data Factory"],
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "University of Oklahoma, TRICS Lab",
    role: "Graduate Research Assistant — Full Stack AI Systems",
    period: "Dec 2025 – Present",
    location: "Norman, OK",
    videoUrl: "/videos/gra-demo.mp4",
    highlights: [
      "Designed and deployed cloud-native web portals using Django, Flask, Docker, Google Cloud Run, PostgreSQL, and Google Cloud Storage.",
      "Developed the SPTC Report Management System, a Django-based platform for secure multi-university report submission and tracking.",
      "Engineered real-time data ingestion pipelines and OpenStreetMap-based geolocation enrichment workflows.",
      "Built AI/NLP workflows for disaster-text analysis and LLM-assisted summaries, reducing analysis time by 95%."
    ],
    detailedHighlights: [
      "At the TRICS Lab, I work on full-stack research systems that support transportation, disaster-risk, and infrastructure analytics.",
      "I designed and deployed cloud-native web portals using Django, Flask, Docker, Google Cloud Run, PostgreSQL, and Google Cloud Storage. One of my major projects is the SPTC Report Management System, a Django-based platform that helps affiliated universities submit, validate, review, and track multiple report types through a secure workflow.",
      "My work also includes real-time data ingestion pipelines, OpenStreetMap-based geolocation enrichment, AI/NLP workflows for disaster-text analysis, LLM-assisted summaries, and geospatial dashboards for researchers and administrators.",
      "The systems I built support 10+ researchers, unify multiple research workflows into one secure portal, and reduce manual analysis time from around 6 hours to nearly 15 minutes."
    ]
  },
  {
    company: "JHUB JNTUH, Wadhwani Foundation",
    role: "AI/ML Product Developer Intern",
    period: "Jan 2023 – Nov 2023",
    location: "Hyderabad, India",
    videoUrl: "/videos/agritech-demo.mp4",
    highlights: [
      "Built an AI-powered agri-tech venture for tomato disease detection, improving identification accuracy by 25%.",
      "Developed Python-based image classification workflows for 5K+ crop images with ~90% precision.",
      "Translated 20+ product requirements into implementable workflows and acceptance criteria.",
      "Refined application across 5+ prototype iterations, resolving 30+ usability issues."
    ],
    detailedHighlights: [
      "Built an AI-powered agri-tech solution for tomato disease detection using Python, TensorFlow, and OCI services, delivering a computer-vision MVP that increased early disease identification accuracy by about 25 % compared with manual inspection in pilot tests",
      "Developed Python-based image classification workflows to process 5K+ tomato crop images, achieving ~90% precision and generating infection likelihood scores to support farmer decision-making.",
      "Translated 20+ product and venture requirements into implementable software workflows, user stories, and acceptance criteria, reducing requirement ambiguity by ~40%.",
      "Refined the application across five prototype iterations, using usability testing and bug-tracking tools to resolve over 30 usability and logic issues, which raised stakeholder satisfaction from roughly 3.5 / 5 to 4.5 / 5",
      "Advanced the solution into a market-ready agri-tech product, maintaining technical documentation in Confluence and updating the roadmap across three development cycles, which reduced onboarding time by about 30 %"
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "AI / ML / NLP",
    skills: ["Python", "LangChain", "ChromaDB", "Transformers", "LLM Systems", "Computer Vision", "TensorFlow", "PyTorch", "SBERT"]
  },
  {
    name: "Full Stack Development",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Flask", "Java", "REST APIs", "SQL"]
  },
  {
    name: "Data & Geospatial Systems",
    skills: ["PostgreSQL", "MongoDB", "Azure Data Factory", "Geospatial Analytics", "OpenStreetMap", "Graph Analysis"]
  },
  {
    name: "Cloud / DevOps / Tooling",
    skills: ["Git", "GitHub", "CI/CD", "Postman", "Caddy", "Azure", "Docker", "Observability"]
  },
  {
    name: "Engineering Foundations",
    skills: ["Data Structures", "Algorithms", "Distributed Systems", "Microservices", "SDLC", "Testing/Automation", "Design Patterns"]
  }
];

export const EDUCATION = [
  {
    school: "University of Oklahoma",
    degree: "Master of Science, Computer Science",
    period: "Aug 2024 – May 2026",
    gpa: "3.78/4.0",
    location: "Norman, OK"
  },
  {
    school: "Malla Reddy Engineering College for Women",
    degree: "Bachelor of Technology, Computer Science and Engineering",
    period: "Nov 2020 – May 2024",
    gpa: "9.2/10",
    location: "Hyderabad, India"
  }
];

export const CERTIFICATIONS = [
  "OCI Developer Professional",
  "OCI DevOps Professional",
  "OCI AI Professional",
  "OCI AI Foundations Associate",
  "Hugging Face Fundamentals of Agents",
  "AWS Building Modern Python Applications",
  "IBM Python for Data Science",
  "Google Foundations of Project Management"
];
