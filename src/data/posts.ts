import { BlogPost, PostSection } from "../types/content";

type PostSeed = {
  slug: string;
  category: "blog" | "tutorial";
  title: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  focus: string;
  stack: string;
  resourceLinks?: { label: string; href: string; type?: "internal" | "external" }[];
};

const authorProfileLinks = [
  {
    label: "GitHub profile backlink",
    href: "https://github.com/BishalAdhikari0123",
    type: "external" as const,
  },
  {
    label: "LinkedIn profile backlink",
    href: "https://www.linkedin.com/in/bishal-adhikari-051a09296/",
    type: "external" as const,
  },
  {
    label: "Dev.to profile backlink",
    href: "https://dev.to/bishaladhikari0123",
    type: "external" as const,
  },
  {
    label: "Medium profile backlink",
    href: "https://medium.com/@bishaladhikari0123",
    type: "external" as const,
  },
];

const longSection = (
  heading: string,
  focus: string,
  stack: string,
  angle: string,
): PostSection => ({
  heading,
  paragraphs: [
    `${focus} looks easy at a glance, but most real projects fail when teams skip structure and jump straight into implementation. My approach is to define outcomes first, then constrain the solution with practical limits like deployment platform, contributor skill level, and maintenance cost. This avoids architecture drift and keeps the project understandable six months later. In this article, every recommendation is grounded in what I have seen work repeatedly across production-oriented side projects built with ${stack}.`,
    `A second principle is reducing hidden complexity. Many tutorials show ideal paths that ignore edge behavior, error handling, and future updates. I prefer designing for change from day one: clear module boundaries, explicit data contracts, and predictable naming. That makes onboarding easier and prevents the “only the original author understands this” problem. For ${focus}, this means documenting trade-offs, choosing boring defaults where possible, and shipping iterative improvements instead of over-engineered first versions.`,
    `${angle} is where quality becomes visible to users. Fast pages, clear messaging, and stable flows build trust faster than flashy effects. I measure success with practical metrics: deployment reliability, bug frequency, and how easily new features can be added without regressions. If a pattern improves those outcomes, I keep it. If it only increases cleverness, I remove it. That discipline consistently leads to stronger products and content that readers can apply immediately in their own ${stack} projects.`,
  ],
});

const buildLongSections = (focus: string, stack: string): PostSection[] => [
  longSection("Foundation and planning", focus, stack, "Planning"),
  longSection("Implementation architecture", focus, stack, "Architecture"),
  longSection("Debugging and reliability", focus, stack, "Reliability"),
  longSection("Performance and user experience", focus, stack, "Performance"),
  longSection("SEO, scaling, and long-term maintenance", focus, stack, "Growth"),
];

const seeds: PostSeed[] = [
  {
    slug: "nodejs-developer-portfolio-nepal-backend-api-guide",
    category: "blog",
    title: "Node.js Developer Portfolio Nepal: How I Build Scalable Backend APIs",
    excerpt:
      "Keyword-focused backend guide explaining how a Node.js developer in Nepal designs reliable APIs for production workloads.",
    publishedAt: "2026-03-27",
    tags: ["Node.js Developer Nepal", "Backend API Development", "Portfolio SEO"],
    focus: "building scalable backend APIs as a Node.js developer in Nepal",
    stack: "Node.js + Express + TypeScript + PostgreSQL",
    resourceLinks: [
      { label: "See all project case studies", href: "/projects", type: "internal" },
      { label: "Hire me for backend API work", href: "/contact", type: "internal" },
      {
        label: "Recipe Raid backend case study",
        href: "/projects/recipe-raid-multiplayer-platform",
        type: "internal",
      },
      ...authorProfileLinks,
    ],
  },
  {
    slug: "hire-full-stack-developer-nepal-checklist",
    category: "blog",
    title: "Hire Full Stack Developer in Nepal: 7-Point Project Checklist",
    excerpt:
      "A practical hiring checklist to evaluate full-stack developers in Nepal for API-heavy and modern web app projects.",
    publishedAt: "2026-03-26",
    tags: ["Hire Full Stack Developer Nepal", "Technical Hiring", "Project Delivery"],
    focus: "evaluating and hiring a full stack developer in Nepal",
    stack: "Node.js + Next.js + TypeScript delivery workflows",
    resourceLinks: [
      { label: "Browse implementation case studies", href: "/projects", type: "internal" },
      { label: "Start a project discussion", href: "/contact", type: "internal" },
      {
        label: "LevelUp full-stack case study",
        href: "/projects/levelup-skill-community-platform",
        type: "internal",
      },
      ...authorProfileLinks,
    ],
  },
  {
    slug: "nextjs-portfolio-example-nepal-seo-conversion-playbook",
    category: "blog",
    title: "Next.js Portfolio Example for Nepal Developers: SEO + Conversion Playbook",
    excerpt:
      "A detailed SEO and conversion framework for developers in Nepal who want portfolio sites that rank and generate leads.",
    publishedAt: "2026-03-25",
    tags: ["Next.js Portfolio Example", "Developer SEO Nepal", "Conversion Optimization"],
    focus: "optimizing a Next.js portfolio for SEO and conversion in Nepal",
    stack: "Next.js/React SEO architecture + technical content strategy",
    resourceLinks: [
      { label: "View all project pages", href: "/projects", type: "internal" },
      { label: "Contact for portfolio optimization help", href: "/contact", type: "internal" },
      {
        label: "Portfolio website case study",
        href: "/projects/portfolio-website-case-study",
        type: "internal",
      },
      ...authorProfileLinks,
    ],
  },
  {
    slug: "how-to-build-react-apps-architecture-guide",
    category: "tutorial",
    title: "How to Build React Apps That Stay Maintainable",
    excerpt:
      "A complete architecture-first tutorial for building React applications that scale without turning messy.",
    publishedAt: "2026-03-23",
    tags: ["React", "Architecture", "Frontend"],
    focus: "building React apps",
    stack: "React + TypeScript",
  },
  {
    slug: "nodejs-beginner-guide-real-projects",
    category: "tutorial",
    title: "Node.js Beginner Guide for Real Projects",
    excerpt:
      "A beginner-friendly Node.js roadmap focused on production habits rather than toy examples.",
    publishedAt: "2026-03-22",
    tags: ["Node.js", "Backend", "Beginner"],
    focus: "starting with Node.js",
    stack: "Node.js + Express + TypeScript",
  },
  {
    slug: "top-hosting-platforms-in-nepal-for-developers",
    category: "blog",
    title: "Top Hosting Platforms in Nepal for Developers",
    excerpt:
      "A practical comparison of hosting options for developers in Nepal with deployment and cost considerations.",
    publishedAt: "2026-03-21",
    tags: ["Hosting", "Nepal", "Deployment"],
    focus: "choosing a hosting platform in Nepal",
    stack: "Vercel, Render, Railway, VPS providers",
  },
  {
    slug: "how-i-fixed-nextjs-typescript-build-error",
    category: "tutorial",
    title: "How I Fixed a Next.js TypeScript Build Error",
    excerpt:
      "A practical debugging blueprint for stubborn CI/build type errors in Next.js applications.",
    publishedAt: "2026-03-20",
    tags: ["Next.js", "TypeScript", "Debugging"],
    focus: "fixing Next.js TypeScript build errors",
    stack: "Next.js + TypeScript",
  },
  {
    slug: "beginner-guide-supabase-auth",
    category: "tutorial",
    title: "Beginner Guide to Supabase Auth",
    excerpt:
      "A production-aware step-by-step guide for auth with Supabase in modern web apps.",
    publishedAt: "2026-03-18",
    tags: ["Supabase", "Authentication", "React"],
    focus: "implementing Supabase authentication",
    stack: "Supabase + React/Next.js",
  },
  {
    slug: "how-to-deploy-nextjs-app",
    category: "tutorial",
    title: "How to Deploy a Next.js App Without Last-Minute Panic",
    excerpt:
      "Deployment checklist and reliability workflow for shipping Next.js projects with confidence.",
    publishedAt: "2026-03-16",
    tags: ["Next.js", "Deployment", "Vercel"],
    focus: "deploying Next.js applications",
    stack: "Next.js + Vercel + CI",
  },
  {
    slug: "common-react-project-mistakes",
    category: "blog",
    title: "Common Mistakes in React Projects and How to Avoid Them",
    excerpt:
      "A field-tested breakdown of architecture and state mistakes that hurt React codebases.",
    publishedAt: "2026-03-14",
    tags: ["React", "Best Practices", "Code Quality"],
    focus: "avoiding React project mistakes",
    stack: "React + TypeScript",
  },
  {
    slug: "how-i-built-portfolio-website",
    category: "blog",
    title: "How I Built My Portfolio Website as a Tech Blog + Portfolio Combo",
    excerpt:
      "From one-page design to content-rich technical site optimized for trust, SEO, and growth.",
    publishedAt: "2026-03-12",
    tags: ["Portfolio", "SEO", "React"],
    focus: "building a tech blog + portfolio combo",
    stack: "Vite + React + TailwindCSS",
  },
  {
    slug: "express-api-architecture-patterns",
    category: "blog",
    title: "Express API Architecture Patterns I Use in Production",
    excerpt:
      "Modular backend structure patterns for stable APIs and cleaner scaling paths.",
    publishedAt: "2026-03-10",
    tags: ["Node.js", "Express", "Architecture"],
    focus: "structuring Express APIs",
    stack: "Express + TypeScript + PostgreSQL",
  },
  {
    slug: "postgresql-performance-basics-for-web-apps",
    category: "blog",
    title: "PostgreSQL Performance Basics for Web Apps",
    excerpt:
      "Practical indexing and query analysis habits that improve web app database performance early.",
    publishedAt: "2026-03-08",
    tags: ["PostgreSQL", "Database", "Performance"],
    focus: "improving PostgreSQL performance",
    stack: "PostgreSQL + Node.js",
  },
  {
    slug: "jwt-auth-mistakes-and-fixes",
    category: "blog",
    title: "JWT Auth Mistakes I Made and How I Fixed Them",
    excerpt:
      "A practical security-focused article on common JWT pitfalls and maintainable fixes.",
    publishedAt: "2026-03-06",
    tags: ["JWT", "Security", "Backend"],
    focus: "building JWT authentication correctly",
    stack: "Node.js + JWT + Refresh tokens",
  },
  {
    slug: "websocket-realtime-feature-design",
    category: "blog",
    title: "Designing Reliable Real-Time Features with WebSockets",
    excerpt:
      "Realtime system design patterns for stable event flows and better reconnect behavior.",
    publishedAt: "2026-03-04",
    tags: ["WebSocket", "Realtime", "System Design"],
    focus: "designing WebSocket realtime systems",
    stack: "WebSocket + Node.js + React",
  },
  {
    slug: "from-monolith-to-modular-backend",
    category: "blog",
    title: "From Monolith to Modular Backend: My Transition Strategy",
    excerpt:
      "Incremental modularization approach for growing Node.js backends without rewrite chaos.",
    publishedAt: "2026-03-02",
    tags: ["Backend", "Refactoring", "Node.js"],
    focus: "moving from monolith to modular backend",
    stack: "Node.js + layered architecture",
  },
  {
    slug: "prisma-schema-design-tips",
    category: "blog",
    title: "Prisma Schema Design Tips I Wish I Knew Earlier",
    excerpt:
      "Data modeling guidance that improves query clarity and migration safety in Prisma projects.",
    publishedAt: "2026-02-28",
    tags: ["Prisma", "Database", "TypeScript"],
    focus: "designing Prisma schemas",
    stack: "Prisma + PostgreSQL + TypeScript",
  },
  {
    slug: "api-validation-with-zod-patterns",
    category: "tutorial",
    title: "API Validation with Zod: Patterns That Scale",
    excerpt:
      "A tutorial on schema-first API validation and consistent error contracts with Zod.",
    publishedAt: "2026-02-26",
    tags: ["Zod", "API", "Validation"],
    focus: "implementing Zod validation patterns",
    stack: "Node.js + Zod + TypeScript",
  },
  {
    slug: "how-to-write-better-technical-case-studies",
    category: "tutorial",
    title: "How to Write Better Technical Case Studies",
    excerpt:
      "A tutorial for converting project summaries into high-value case studies people actually read.",
    publishedAt: "2026-02-24",
    tags: ["Writing", "Portfolio", "Case Study"],
    focus: "writing technical project case studies",
    stack: "Portfolio content strategy",
  },
  {
    slug: "seo-basics-for-developer-portfolios",
    category: "tutorial",
    title: "SEO Basics for Developer Portfolios",
    excerpt:
      "Titles, meta descriptions, internal links, and sitemap strategy for portfolio discoverability.",
    publishedAt: "2026-02-22",
    tags: ["SEO", "Portfolio", "Content Strategy"],
    focus: "adding SEO basics to a portfolio",
    stack: "Technical SEO for SPAs",
  },
];

export const blogPosts: BlogPost[] = seeds.map((seed) => ({
  slug: seed.slug,
  category: seed.category,
  title: seed.title,
  excerpt: seed.excerpt,
  publishedAt: seed.publishedAt,
  readTime: "16-20 min read",
  tags: seed.tags,
  intro: `${seed.focus} is most effective when implementation quality, publishing consistency, and user trust are treated as one system instead of separate tasks. In this long-form guide, I break down the exact decisions, trade-offs, and execution details I use in real projects built with ${seed.stack}. The goal is not just to finish quickly, but to build in a way that remains understandable, searchable, and maintainable over time.`,
  sections: buildLongSections(seed.focus, seed.stack),
  keyTakeaways: [
    `Define clear outcomes before implementing ${seed.focus}.`,
    "Prioritize maintainability and reliable deployment over short-term hacks.",
    "Use internal linking and consistent publishing to compound SEO value.",
  ],
  resourceLinks: seed.resourceLinks,
}));
