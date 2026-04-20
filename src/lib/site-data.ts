import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Blocks,
  BrainCircuit,
  Cloud,
  Cpu,
  Facebook,
  Gauge,
  GitBranch,
  Github,
  Globe2,
  Layers3,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  RadioTower,
  ScanLine,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  TerminalSquare,
  Workflow,
  Wrench
} from "lucide-react";

// Replace personal details, links, images, and project URLs here.
// Components read from this file so future edits stay simple.
export const siteConfig = {
  name: "Ahmed Hadi",
  initials: "AH",
  title: "IoT Engineer & Full Stack Developer",
  shortTitle: "IoT Engineer + Full Stack Developer",
  email: "ahmed777hady@gmail.com",
  phone: "+60 11-3542 0412",
  whatsapp: "https://wa.me/601135420412",
  location: "Kuala Perlis, Malaysia",
  cvPath: "/cv/Ahmed_Hadi_CV.pdf",
  profileImage: "/images/my photo.jpeg",
  social: {
    linkedin:
      "https://www.linkedin.com/in/mr-ahmed-mahram-327a83285?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/AhmedHadi77/omnisite-ai",
    facebook: "https://www.facebook.com/share/18ZobQef1h/"
  }
};

export const navItems = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Services", href: "#services", sectionId: "services" },
  { label: "Process", href: "#process", sectionId: "process" },
  { label: "Contact", href: "#contact", sectionId: "contact" }
];

export const heroBadges = [
  "Device Monitoring",
  "Realtime Dashboards",
  "Digital Twin Platforms",
  "API Architecture",
  "Full Stack Systems",
  "CMS & Commerce"
];

export const heroSignals = [
  { label: "Telemetry", value: "Live pipelines", icon: Activity },
  { label: "Devices", value: "Monitored at scale", icon: RadioTower },
  { label: "APIs", value: "Clear contracts", icon: ServerCog },
  { label: "Interfaces", value: "Operational clarity", icon: ScanLine }
];

export const stats = [
  { label: "Projects completed", value: 21, suffix: "+" },
  { label: "Technologies used", value: 39, suffix: "+" },
  { label: "Platforms built", value: 9, suffix: "+" },
  { label: "Years hands-on", value: 4, suffix: "+" }
];

export const credibilitySignals = [
  {
    label: "System Scope",
    value: "Device-to-cloud systems",
    detail: "Telemetry ingestion, monitoring flows, API services, and dashboards"
  },
  {
    label: "Engineering Style",
    value: "Architecture-first delivery",
    detail: "Typed components, reusable modules, clean data contracts, and maintainable boundaries"
  },
  {
    label: "Product Strength",
    value: "Realtime operations",
    detail: "Device states, alerts, anomaly indicators, health signals, and live interfaces"
  },
  {
    label: "Career Signal",
    value: "End-to-end ownership",
    detail: "Frontend polish, backend structure, database thinking, and deployment awareness"
  }
];

export type SkillCategory = {
  title: string;
  summary: string;
  icon: LucideIcon;
  color: string;
  skills: {
    name: string;
    level: number;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "IoT Engineering",
    summary:
      "Device-aware engineering across simulation, MQTT, telemetry flow, monitoring states, automation, and edge-to-cloud product logic.",
    icon: Cpu,
    color: "#00A99A",
    skills: [
      { name: "Sensor integration", level: 88 },
      { name: "Device simulation", level: 92 },
      { name: "MQTT", level: 86 },
      { name: "Real-time telemetry", level: 91 },
      { name: "Device monitoring", level: 89 },
      { name: "Smart systems", level: 85 },
      { name: "Automation", level: 84 },
      { name: "Edge-to-cloud systems", level: 87 }
    ]
  },
  {
    title: "Frontend",
    summary:
      "Dashboard-grade interfaces with responsive layouts, typed React components, motion polish, clear hierarchy, and usable realtime states.",
    icon: LayoutDashboard,
    color: "#FF5D5D",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Responsive design", level: 93 },
      { name: "Framer Motion", level: 86 }
    ]
  },
  {
    title: "CMS & Commerce",
    summary:
      "Practical web platform delivery across WordPress, Shopify, Webflow, landing pages, CMS structure, storefronts, and conversion-focused websites.",
    icon: Globe2,
    color: "#008F86",
    skills: [
      { name: "WordPress", level: 88 },
      { name: "Shopify", level: 82 },
      { name: "Webflow", level: 80 },
      { name: "CMS architecture", level: 84 },
      { name: "E-commerce storefronts", level: 80 },
      { name: "Landing page systems", level: 90 }
    ]
  },
  {
    title: "Backend",
    summary:
      "Backend systems for REST APIs, authentication, WebSocket events, service boundaries, and realtime application architecture.",
    icon: ServerCog,
    color: "#F4C542",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 86 },
      { name: "REST APIs", level: 91 },
      { name: "WebSockets", level: 84 },
      { name: "Authentication", level: 82 },
      { name: "Realtime architecture", level: 87 }
    ]
  },
  {
    title: "Database & Cloud",
    summary:
      "Storage and deployment decisions for telemetry history, user data, operational analytics, cloud services, and scalable product workflows.",
    icon: Cloud,
    color: "#A9D94F",
    skills: [
      { name: "PostgreSQL", level: 84 },
      { name: "MongoDB", level: 83 },
      { name: "Redis", level: 76 },
      { name: "Supabase", level: 85 },
      { name: "Firebase", level: 82 },
      { name: "Cloud deployment", level: 84 }
    ]
  },
  {
    title: "Tools",
    summary:
      "Engineering workflow across source control, API testing, container basics, implementation tooling, and design-to-code collaboration.",
    icon: Wrench,
    color: "#19C7B2",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "Postman", level: 89 },
      { name: "Docker", level: 76 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 }
    ]
  }
];

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  role: string;
  outcome: string;
  architecture: string;
  highlight: string;
  links: {
    live: string;
    github: string;
    caseStudy: string;
  };
};

export const projects: Project[] = [
  {
    title: "Global Digital Twin Infrastructure Platform",
    eyebrow: "IoT digital twin",
    description:
      "An IoT infrastructure platform for virtual device simulation, realtime telemetry, device health visibility, alert states, and operational monitoring.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    tags: ["Next.js", "TypeScript", "MQTT", "Realtime", "Telemetry", "Dashboards"],
    role: "System architecture, realtime dashboard UX, telemetry interface design",
    outcome: "Turns simulated infrastructure data into a clear operational view for monitoring, diagnostics, and decision-making.",
    architecture: "Virtual device layer, telemetry stream, health model, alert indicators, analytics UI, and modular dashboard surfaces.",
    highlight: "Device-to-dashboard system",
    features: [
      "Real-time telemetry dashboards",
      "Device simulation",
      "Alerts and anomaly indicators",
      "Device health monitoring",
      "Historical analytics",
      "Scalable architecture"
    ],
    links: {
      live: "https://global-digital-twin-frontend.vercel.app/dashboard",
      github: "#contact",
      caseStudy: "#contact"
    }
  },
  {
    title: "Virflow Social Media App",
    eyebrow: "Full stack social product",
    description:
      "A full stack social platform focused on feed interaction, short-form media patterns, profile surfaces, and scalable product UI foundations.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85",
    tags: ["React", "Node.js", "Realtime UX", "Media", "Profiles"],
    role: "Frontend architecture, product UI, interaction patterns, responsive implementation",
    outcome: "Demonstrates the ability to design and build a modern application experience with reusable social product modules.",
    architecture: "Composable feed system, profile views, media components, interaction states, and mobile-first layout logic.",
    highlight: "Scalable social UI",
    features: [
      "Social feed",
      "Reels-style short videos",
      "User profiles",
      "Engagement interactions",
      "Responsive mobile-first UI"
    ],
    links: {
      live: "#contact",
      github: "#contact",
      caseStudy: "#contact"
    }
  },
  {
    title: "Omnisite AI",
    eyebrow: "AI automation platform",
    description:
      "An AI-powered full stack platform that connects automation workflows, API-driven operations, modern UI, and intelligent product experiences.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    tags: ["AI Automation", "APIs", "Full Stack", "Product UI", "Cloud Deployment"],
    role: "Workflow design, API-connected frontend, automation UI, and deployment-ready product structure",
    outcome: "Shows how intelligent automation and clean interface design can reduce manual work and make complex workflows easier to manage.",
    architecture: "AI workflow screens, API integrations, automation states, reusable UI modules, and production deployment flow.",
    highlight: "AI workflow platform",
    features: [
      "AI-powered workflows",
      "API-driven operations",
      "Modern responsive interface",
      "Automation dashboard",
      "Reusable product modules"
    ],
    links: {
      live: "https://omnisite-ai-api.vercel.app/",
      github: "https://github.com/AhmedHadi77/omnisite-ai",
      caseStudy: "#contact"
    }
  },
  {
    title: "ElvateAI Website",
    eyebrow: "Modern web experience",
    description:
      "A polished web experience built around responsive structure, strong content rhythm, clean implementation, and conversion-aware presentation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    tags: ["Next.js", "Responsive Design", "Tailwind CSS", "UI Engineering", "Web Experience"],
    role: "Responsive frontend implementation, layout system, UI polish, deployment",
    outcome: "Communicates brand value through fast, structured pages that remain clean across mobile, tablet, and desktop.",
    architecture: "Section-based page system, responsive grid, reusable content blocks, interaction states, and polished CTAs.",
    highlight: "Responsive frontend delivery",
    features: [
      "Professional landing experience",
      "Responsive section architecture",
      "Clean visual hierarchy",
      "Reusable page components",
      "Deployment-ready frontend"
    ],
    links: {
      live: "https://growmodo-website-web-274o-37eekkfsi-ahmedhadi77s-projects.vercel.app/",
      github: "#contact",
      caseStudy: "#contact"
    }
  }
];

export const services = [
  {
    title: "IoT Platforms",
    description:
      "Platforms that connect virtual or physical devices to telemetry streams, dashboards, alerts, and operational workflows.",
    icon: Network
  },
  {
    title: "Full Stack Web Applications",
    description:
      "End-to-end applications with structured frontend components, backend services, authentication, APIs, and deployment-ready architecture.",
    icon: Layers3
  },
  {
    title: "Realtime Dashboards",
    description:
      "Dashboards that surface live metrics, device state, anomalies, health indicators, and historical context for fast decisions.",
    icon: Gauge
  },
  {
    title: "API & Backend Systems",
    description:
      "Backend services with clean routes, predictable data contracts, realtime events, access control, and integration-ready structure.",
    icon: Blocks
  },
  {
    title: "Digital Twin Solutions",
    description:
      "Virtual infrastructure models for simulating assets, tracking state, visualizing health, and understanding complex environments.",
    icon: Globe2
  },
  {
    title: "Smart Monitoring Systems",
    description:
      "Monitoring products that combine sensors, rules, notifications, dashboards, and historical data into one useful workflow.",
    icon: ShieldCheck
  },
  {
    title: "Scalable Frontend Experiences",
    description:
      "Responsive interfaces with clear information architecture, stable components, polished motion, and maintainable UI patterns.",
    icon: Smartphone
  }
];

export const processSteps = [
  {
    title: "Discover",
    description:
      "Define the business objective, users, device environment, data sources, constraints, and success criteria before implementation.",
    icon: BrainCircuit
  },
  {
    title: "Architect",
    description:
      "Map the system shape: data models, API contracts, realtime paths, device states, user journeys, and deployment boundaries.",
    icon: GitBranch
  },
  {
    title: "Develop",
    description:
      "Build typed frontend and backend modules with reusable components, stable patterns, and clear separation of concerns.",
    icon: TerminalSquare
  },
  {
    title: "Integrate",
    description:
      "Connect telemetry, APIs, dashboards, authentication, storage, notifications, and external services into one coherent product.",
    icon: Workflow
  },
  {
    title: "Optimize",
    description:
      "Improve performance, responsiveness, state handling, data clarity, error paths, and maintainability before release.",
    icon: Activity
  },
  {
    title: "Deploy",
    description:
      "Prepare for real usage with environment setup, release checks, documentation, deployment flow, and monitoring readiness.",
    icon: Rocket
  }
];

export const testimonials = [
  {
    quote:
      "I think in systems first: devices, data contracts, realtime states, backend services, and interfaces all need to support one coherent operational workflow.",
    name: "Architecture Signal",
    role: "Device-to-cloud product thinking"
  },
  {
    quote:
      "Strong dashboards are not just charts. They expose health, risk, history, anomalies, and next actions in a way that helps people understand what is happening quickly.",
    name: "Realtime Signal",
    role: "Monitoring and dashboard execution"
  },
  {
    quote:
      "My full stack work is built to be maintainable: typed UI, reusable components, clear API boundaries, deployment awareness, and practical product decisions.",
    name: "Delivery Signal",
    role: "Scalable full stack implementation"
  }
];

export const contactMethods = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail
  },
  {
    label: "LinkedIn",
    value: "Professional profile",
    href: siteConfig.social.linkedin,
    icon: Linkedin
  },
  {
    label: "GitHub",
    value: "Code and projects",
    href: siteConfig.social.github,
    icon: Github
  },
  {
    label: "Facebook",
    value: "Social profile",
    href: siteConfig.social.facebook,
    icon: Facebook
  },
  {
    label: "WhatsApp",
    value: siteConfig.phone,
    href: siteConfig.whatsapp,
    icon: MessageCircle
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: "#contact",
    icon: MapPin
  }
];
