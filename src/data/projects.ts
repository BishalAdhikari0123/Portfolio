import { ProjectCaseStudy } from "../types/content";

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "zombie-survival-fullstack-game",
    title: "Zombie Survival – Full-Stack Game",
    summary:
      "A real-time multiplayer zombie game with JWT auth, WebSocket combat updates, and a production-grade backend architecture.",
    year: "2026",
    problem:
      "Most indie multiplayer game demos break under concurrent users because gameplay state, matchmaking, and persistence are loosely coupled. I needed a backend that could coordinate real-time combat while keeping leaderboard and account data consistent.",
    solution:
      "I split responsibilities across modular Express services, used PostgreSQL for durable game data, and WebSocket channels for low-latency battle events. JWT-based auth secured player sessions, and background workers handled leaderboard aggregation.",
    techUsed: ["TypeScript", "Next.js", "Express", "PostgreSQL", "WebSocket", "JWT"],
    challenges: [
      "Keeping combat events in sync without introducing noticeable lag.",
      "Preventing leaderboard exploits and duplicate score submissions.",
      "Designing APIs that worked for both matchmaking and profile dashboards.",
    ],
    screenshots: [
      {
        label: "Gameplay dashboard and combat HUD",
        url: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        label: "Leaderboard and season progression view",
        url: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
    repoUrl: "https://github.com/BishalAdhikari0123/zombie-survival",
    liveUrl: "https://zombie-survival-zeta.vercel.app/",
  },
  {
    slug: "levelup-skill-community-platform",
    title: "LevelUp – Skill Based Community App",
    summary:
      "A gamified learning community with role-based access, activity points, and real-time user interaction.",
    year: "2025",
    problem:
      "Learning communities often lose engagement because contribution quality and consistency are hard to reward. I wanted a platform that tracked meaningful activity and turned progress into visible levels.",
    solution:
      "I built a full-stack architecture with a Prisma + PostgreSQL backend and Next.js frontend, then layered point-based leveling rules, profile milestones, and a real-time chat system to keep learners active.",
    techUsed: ["Next.js", "Node.js", "Express", "Prisma", "PostgreSQL", "React Native"],
    challenges: [
      "Designing fair leveling rules that discourage spam.",
      "Modeling relational data for users, achievements, and activity logs.",
      "Synchronizing mobile and web behavior for core social flows.",
    ],
    screenshots: [
      {
        label: "Community feed and progression widgets",
        url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        label: "User dashboard with badges and levels",
        url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
    repoUrl: "https://github.com/BishalAdhikari0123/LevelUp",
    liveUrl: "https://level-up-olive-gamma.vercel.app/eng/home",
  },
  {
    slug: "jokepatra-ai-news-portal",
    title: "JokePatra – AI Powered News Portal",
    summary:
      "An AI-assisted news portal with personalized feed generation and secure user sessions.",
    year: "2025",
    problem:
      "Traditional news portals give every user the same feed, creating low relevance and short session duration. The challenge was delivering personalized content while preserving fast page performance.",
    solution:
      "I used Next.js + Supabase to handle authentication and storage, then implemented user preference signals and AI-assisted categorization for customized feed ranking.",
    techUsed: ["Next.js", "Supabase", "AI/ML", "TypeScript"],
    challenges: [
      "Balancing personalization quality with generation cost.",
      "Keeping feed rendering fast as article metadata scales.",
      "Structuring content moderation controls for generated summaries.",
    ],
    screenshots: [
      {
        label: "Personalized home feed",
        url: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        label: "Saved articles and reader preferences",
        url: "https://images.pexels.com/photos/3944425/pexels-photo-3944425.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
    repoUrl: null,
    liveUrl: "https://joke-patra-ai-powered-news-portal.vercel.app/",
  },
  {
    slug: "topcollec-blog-platform",
    title: "TopCollec – Full-Stack Blog Platform",
    summary:
      "A role-based blog system focused on clean author workflows, secure CRUD operations, and SEO-friendly content pages.",
    year: "2025",
    problem:
      "Many starter blog apps treat publishing as simple text storage and miss moderation, roles, and edit history. I wanted to design a production-minded platform where publishing was safe and structured.",
    solution:
      "I created a Next.js + PostgreSQL platform with role-aware endpoints, validated post creation flows, and optimized content routes for discoverability.",
    techUsed: ["Next.js", "PostgreSQL", "TypeScript"],
    challenges: [
      "Protecting write actions with strict role checks.",
      "Building reusable editor and preview components.",
      "Designing query patterns for tag/category filtering.",
    ],
    screenshots: [
      {
        label: "Author dashboard and content manager",
        url: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        label: "Public article page layout",
        url: "https://images.pexels.com/photos/267385/pexels-photo-267385.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
    repoUrl: null,
    liveUrl: "https://top-collec-full-stack.vercel.app/",
  },
  {
    slug: "recipe-raid-multiplayer-platform",
    title: "Recipe Raid Co-op – Multiplayer Cooking Raids",
    summary:
      "A co-op cooking game platform with 30+ REST endpoints, JWT auth, leaderboard APIs, and media uploads.",
    year: "2025",
    problem:
      "Co-op gameplay needs quick updates, reliable scorekeeping, and robust identity controls. The challenge was to keep the API contract clean across many interconnected raid features.",
    solution:
      "I built a modular TypeScript Express backend with a 16-table PostgreSQL schema, then connected a Next.js PWA frontend and Supabase storage for photo uploads and raid proof handling.",
    techUsed: ["TypeScript", "Express", "Next.js", "PostgreSQL", "Supabase", "JWT"],
    challenges: [
      "Maintaining schema clarity with many relationship-heavy tables.",
      "Managing image upload pipeline reliability.",
      "Reducing endpoint complexity while preserving game flexibility.",
    ],
    screenshots: [
      {
        label: "Raid queue and co-op activity panel",
        url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        label: "Leaderboard snapshots and challenge history",
        url: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
    repoUrl: "https://github.com/BishalAdhikari0123/RecipeRaid",
    liveUrl: null,
  },
  {
    slug: "bookly-digital-books-platform",
    title: "Bookly – E-commerce for Digital Books",
    summary:
      "A PHP + MySQL platform for discovering, purchasing, and reading digital books with an admin dashboard.",
    year: "2024",
    problem:
      "A local digital bookstore workflow needed both customer convenience and admin-level catalog control. Existing systems were either too complex or lacked localized UX.",
    solution:
      "I built a tailored PHP/MySQL app with account management, order flows, and downloadable content delivery while adding an admin panel for product and user operations.",
    techUsed: ["PHP", "MySQL"],
    challenges: [
      "Securing file delivery so only authorized users can access purchased books.",
      "Handling order status updates and edge-case payment states.",
      "Designing a simple but effective admin moderation workflow.",
    ],
    screenshots: [
      {
        label: "Book catalog and detail pages",
        url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        label: "Admin dashboard overview",
        url: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
    repoUrl: "https://github.com/lgic-project/BookComSystem",
    liveUrl: null,
  },
  {
    slug: "portfolio-website-case-study",
    title: "Portfolio Website",
    summary:
      "A modern developer portfolio designed for credibility, discoverability, and long-form technical content.",
    year: "2025",
    problem:
      "A single landing page is visually impressive but often weak for SEO, discoverability, and ad policy compliance. I needed a structure that gave each project and topic its own high-value page.",
    solution:
      "I transformed the portfolio into a routed, content-rich website with project case studies, blog posts, and clear navigation architecture.",
    techUsed: ["React", "TypeScript", "Vite", "TailwindCSS"],
    challenges: [
      "Migrating from section anchors to route-based navigation.",
      "Keeping visual consistency across old and new layouts.",
      "Designing scalable content models for future posts.",
    ],
    screenshots: [
      {
        label: "Homepage hero and quick navigation",
        url: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        label: "Project case study detail page",
        url: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
    repoUrl: "https://github.com/BishalAdhikari0123/Portfolio",
    liveUrl: null,
  },
];
