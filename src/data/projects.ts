import { ProjectCaseStudy } from "../types/content";

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "zombie-survival-fullstack-game",
    title: "Zombie Survival Game 🧟",
    summary:
      "A fast-paced 2D top-down zombie survival game built with Next.js 14, TypeScript, and HTML Canvas with a custom game loop and modular systems.",
    year: "2026",
    problem:
      "Most browser shooters either rely heavily on external engines or become unmaintainable as waves, weapons, particles, and controls grow. I wanted to build a high-performance game architecture from scratch where combat felt responsive on desktop and mobile, while keeping the codebase modular enough to evolve into leaderboard and multiplayer features.",
    solution:
      "I implemented a custom requestAnimationFrame game loop with decoupled systems for spawning, collisions, powerups, and particles. The frontend uses Next.js App Router and a Canvas-based renderer with OOP entities (Player, Zombie, Bullet, Powerup, Particle). I added dynamic wave scaling, tiered loot drops, advanced weapon progression, and responsive touch joystick controls for mobile devices.",
    techUsed: ["Next.js 14", "TypeScript", "HTML Canvas API", "Custom Game Loop", "OOP Entity System"],
    challenges: [
      "Balancing weapon feel and enemy difficulty so each wave is hard but fair.",
      "Maintaining 60fps during heavy particle effects, screen shake, and large zombie counts.",
      "Designing input handling that works smoothly with keyboard/mouse and mobile touch joysticks.",
      "Keeping game systems decoupled so new weapons and mechanics can be added without rewriting core logic.",
    ],
    images: [
      {
        label: "Top-down combat scene with live wave pressure and effects",
        url: "/zombieSS.webp",
      },
      {
        label: "HUD and progression-focused gameplay presentation",
        url: "/zombieSS2.webp",
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
    images: [
      {
        label: "Community feed and progression widgets",
        url: "/leveluplandingpage.webp",
      },
      {
        label: "User dashboard with badges and levels",
        url: "/levelupdashboard.webp",
      },
    ],
    repoUrl: "https://github.com/BishalAdhikari0123/LevelUp",
    liveUrl: "https://level-up-olive-gamma.vercel.app/eng/home",
  },
  {
    slug: "jokepatra-ai-news-portal",
    title: "JokePatra – AI Satirical News Platform",
    summary:
      "A daily AI-generated satirical news platform about Nepal powered by Google Gemini 1.5 Flash, with secure admin workflows and automation support.",
    year: "2025",
    problem:
      "Creating consistent, high-quality satirical content every day is time intensive. I needed a platform that could generate articles automatically, keep editorial controls in human hands, and ensure the full content pipeline remained secure and maintainable.",
    solution:
      "I built a Next.js + Supabase architecture with a protected admin dashboard, JWT authentication, and automated article generation using Gemini prompts. The platform includes moderated publishing flows, RLS-protected data access, and optional cron-based daily generation for hands-off content publishing.",
    techUsed: ["Next.js 13", "TypeScript", "Supabase", "Google Gemini 1.5 Flash", "JWT", "Joi"],
    challenges: [
      "Designing AI prompts that keep tone sarcastic yet readable and relevant to local context.",
      "Securing admin-only generation endpoints while keeping public article APIs performant.",
      "Integrating cron automation with robust secret validation to prevent unauthorized triggers.",
      "Maintaining clear disclaimer boundaries for satirical content.",
    ],
    images: [
      {
        label: "Personalized home feed",
        url: "/jokepatra.webp",
      },
    ],
    repoUrl: null,
    liveUrl: "https://joke-patra-ai-powered-news-portal.vercel.app/",
  },
  {
    slug: "topcollec-blog-platform",
    title: "TopCollec – Full-Stack Blog Platform",
    summary:
      "A full-featured WordPress-inspired blog + CMS built with modern JAMstack architecture for performance, SEO, and developer productivity.",
    year: "2025",
    problem:
      "Most developer blog starters are either too basic for real publishing workflows or too heavy to customize. I wanted to build a modern CMS that supports serious publishing features (SEO, moderation, analytics, author/tag discovery) while staying type-safe and performant.",
    solution:
      "I implemented a Next.js 14+ App Router app with Supabase backend services, protected admin tools, markdown authoring, storage uploads, and content discovery pages. The public site uses SEO-rich metadata (Open Graph, Twitter Cards, JSON-LD), paginated listings, full-text search, and SSR/ISR to deliver fast load times.",
    techUsed: ["Next.js 14+", "TypeScript", "Supabase", "Tailwind CSS", "PostgreSQL Full-Text Search", "Markdown"],
    challenges: [
      "Combining CMS-level flexibility with strict type-safe data access patterns.",
      "Designing an admin UI that is powerful but simple enough for daily publishing.",
      "Keeping SEO metadata consistent across single posts, tags, and author pages.",
      "Balancing image-heavy articles with fast performance budgets on mobile.",
    ],
    images: [
      {
        label: "Author dashboard and content manager",
        url: "/topcollec.webp",
      },
    ],
    repoUrl: null,
    liveUrl: "https://topcollec.vercel.app/",
  },
  {
    slug: "parkour-obby-3d-browser-game",
    title: "3D Parkour Game",
    summary:
      "A complete 3D obby/parkour browser game with physics-based movement, edge climbing, platform mechanics, and pointer-lock camera controls.",
    year: "2025",
    problem:
      "Browser 3D movement often feels rigid or disorienting, especially when camera movement, jumping, and platform interactions are not tightly synchronized. I wanted to build a smooth third-person parkour experience where controls feel natural, climbing works reliably, and platform mechanics create meaningful level difficulty.",
    solution:
      "I built the game with Next.js 14, React Three Fiber, and Rapier physics. The player controller supports camera-relative WASD movement, edge climbing, jump mechanics, and platform sticking behavior that keeps the character moving correctly with dynamic platforms. I also implemented checkpoints, timer tracking with best time persistence, finish detection, and responsive controls.",
    techUsed: ["Next.js 14", "TypeScript", "React Three Fiber", "@react-three/rapier", "Pointer Lock API"],
    challenges: [
      "Implementing stable movement on moving and rotating platforms without jitter.",
      "Designing camera-relative controls that feel intuitive for both casual and advanced players.",
      "Building reliable edge climbing logic that avoids accidental teleports or stuck states.",
      "Keeping rendering and physics smooth for 60fps gameplay in browser environments.",
    ],
    images: [
      {
        label: "Third-person character and floating platform level",
        url: "https://images.pexels.com/photos/7862491/pexels-photo-7862491.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        label: "Gameplay sequence with checkpoints and obstacle traversal",
        url: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
    repoUrl: "https://github.com/BishalAdhikari0123/parkour-game",
    liveUrl: null,
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
    images: [
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
    images: [
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
    images: [
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
