import { BlogPost } from "../types/content";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-i-fixed-nextjs-typescript-build-error",
    title: "How I Fixed a Next.js TypeScript Build Error",
    excerpt:
      "A practical debugging flow for build-time type failures in Next.js projects.",
    publishedAt: "2026-03-20",
    readTime: "8 min read",
    tags: ["Next.js", "TypeScript", "Debugging"],
    intro:
      "Build errors in Next.js TypeScript apps usually happen because runtime assumptions drift away from static types. This is the exact flow I use to move from red build to stable deployment.",
    sections: [
      {
        heading: "Step 1: Reproduce in a clean environment",
        paragraphs: [
          "I start by running a production build locally. Development mode can hide type issues due to partial compilation paths.",
          "If the issue only appears in CI, I align Node version and package lock first before touching code.",
        ],
      },
      {
        heading: "Step 2: Narrow the failing boundary",
        paragraphs: [
          "I look for the first meaningful error line, not the final cascade. Then I trace the failing type back to API response shapes or component props.",
          "Most fixes come from making contracts explicit: shared interfaces, narrowed unions, or safer null checks.",
        ],
      },
      {
        heading: "Step 3: Lock in the fix",
        paragraphs: [
          "After fixing types, I add a small test or assertion close to the bug source so it cannot silently regress.",
          "Finally I rerun build + lint together to verify the entire pipeline is green.",
        ],
      },
    ],
    keyTakeaways: [
      "Always debug production build, not just dev server.",
      "Fix the root type contract, not symptom casts.",
      "Guard against regressions with tiny, targeted checks.",
    ],
  },
  {
    slug: "beginner-guide-supabase-auth",
    title: "Beginner Guide to Supabase Auth",
    excerpt:
      "A straightforward roadmap for adding authentication with Supabase in React and Next.js apps.",
    publishedAt: "2026-03-18",
    readTime: "10 min read",
    tags: ["Supabase", "Authentication", "React"],
    intro:
      "Supabase Auth is beginner-friendly, but production reliability depends on getting session lifecycle and route protection right from day one.",
    sections: [
      {
        heading: "Start with auth states",
        paragraphs: [
          "Think in three states: loading, authenticated, and anonymous. Rendering the wrong UI between these states causes flicker and security bugs.",
          "Use one top-level provider to hydrate session status before rendering sensitive pages.",
        ],
      },
      {
        heading: "Protecting routes correctly",
        paragraphs: [
          "Client-side redirects improve UX, but true protection still belongs on server/API checks.",
          "Always validate session tokens in backend endpoints that return private data.",
        ],
      },
      {
        heading: "Common beginner mistakes",
        paragraphs: [
          "Storing custom auth flags in localStorage without server verification.",
          "Skipping email confirmation handling and then misreading login failures.",
        ],
      },
    ],
    keyTakeaways: [
      "Auth state handling is as important as login UI.",
      "Server validation is required for real security.",
      "Design for loading and token refresh from the start.",
    ],
  },
  {
    slug: "how-to-deploy-nextjs-app",
    title: "How to Deploy a Next.js App (Without Last-Minute Panic)",
    excerpt:
      "A deployment checklist covering environment variables, build validation, and post-deploy checks.",
    publishedAt: "2026-03-16",
    readTime: "7 min read",
    tags: ["Next.js", "Deployment", "Vercel"],
    intro:
      "Deployment should be boring. If deploy day feels chaotic, the preflight checklist is incomplete.",
    sections: [
      {
        heading: "Pre-deploy checks",
        paragraphs: [
          "Run lint, typecheck, and production build locally before pushing.",
          "Confirm every required environment variable exists in deployment settings.",
        ],
      },
      {
        heading: "Deployment workflow",
        paragraphs: [
          "Use preview deployments for every major feature branch.",
          "Test critical flows immediately after deploy: auth, forms, API requests, and error pages.",
        ],
      },
      {
        heading: "Post-deploy monitoring",
        paragraphs: [
          "Watch logs for the first 30 minutes to catch hidden runtime issues.",
          "Track web vitals and core page response times to spot regressions.",
        ],
      },
    ],
    keyTakeaways: [
      "Treat deployment as a repeatable process.",
      "Validate production build before every release.",
      "Use preview environments to reduce risk.",
    ],
  },
  {
    slug: "common-react-project-mistakes",
    title: "Common Mistakes in React Projects (And How to Avoid Them)",
    excerpt:
      "The repeated patterns that quietly hurt maintainability and performance.",
    publishedAt: "2026-03-14",
    readTime: "9 min read",
    tags: ["React", "Best Practices", "Code Quality"],
    intro:
      "Most React problems are not framework limitations. They are architecture and state-shape mistakes that compound over time.",
    sections: [
      {
        heading: "State design mistakes",
        paragraphs: [
          "Duplicating derived state in multiple components makes bugs inevitable.",
          "I keep a single source of truth and derive everything else at render time.",
        ],
      },
      {
        heading: "Component boundaries",
        paragraphs: [
          "Huge components become change-resistant. I split by responsibility: data, layout, and interaction.",
          "Reusable pieces should expose small, predictable props.",
        ],
      },
      {
        heading: "Performance anti-patterns",
        paragraphs: [
          "Premature memoization can increase complexity with little gain.",
          "Measure first, optimize second, and remove wasted renders where profiling proves value.",
        ],
      },
    ],
    keyTakeaways: [
      "Clear state ownership prevents most UI bugs.",
      "Smaller components are easier to test and evolve.",
      "Optimization should be evidence-driven.",
    ],
  },
  {
    slug: "how-i-built-portfolio-website",
    title: "How I Built My Portfolio Website",
    excerpt:
      "From one-page showcase to multi-page portfolio with case studies and technical articles.",
    publishedAt: "2026-03-12",
    readTime: "8 min read",
    tags: ["Portfolio", "React", "TailwindCSS"],
    intro:
      "A portfolio should do two jobs: present your work and answer the questions clients or recruiters are already searching for.",
    sections: [
      {
        heading: "Initial version",
        paragraphs: [
          "The first version focused on visual impact but had limited depth for project storytelling.",
          "That made it harder to rank on long-tail technical searches.",
        ],
      },
      {
        heading: "What I changed",
        paragraphs: [
          "I introduced dedicated project and post pages, then standardized content structure for each case study.",
          "Navigation now supports discovery: home, projects, individual studies, and long-form posts.",
        ],
      },
      {
        heading: "Why this works better",
        paragraphs: [
          "Each page now has specific intent and keyword coverage.",
          "This improves both user trust and ad policy alignment by increasing content depth.",
        ],
      },
    ],
    keyTakeaways: [
      "Visual design is important, but depth builds trust.",
      "Case studies convert better than project name lists.",
      "Long-form technical content compounds over time.",
    ],
  },
  {
    slug: "express-api-architecture-patterns",
    title: "Express API Architecture Patterns I Use in Production",
    excerpt:
      "A practical backend structure for scalable Node.js projects.",
    publishedAt: "2026-03-10",
    readTime: "11 min read",
    tags: ["Node.js", "Express", "Architecture"],
    intro:
      "Backend maintainability comes from boundaries, not just syntax. These are the patterns I reuse across projects.",
    sections: [
      {
        heading: "Layered design",
        paragraphs: [
          "I separate routes, services, repositories, and validation schemas.",
          "Each layer has one job, reducing accidental coupling.",
        ],
      },
      {
        heading: "Error strategy",
        paragraphs: [
          "Typed domain errors improve handler clarity and response consistency.",
          "A global error middleware keeps response format predictable.",
        ],
      },
      {
        heading: "Observability basics",
        paragraphs: [
          "Structured logging with request IDs makes debugging distributed flows easier.",
          "I always log at API boundaries, not inside every low-level helper.",
        ],
      },
    ],
    keyTakeaways: [
      "Stable boundaries scale better than clever shortcuts.",
      "Consistent error contracts improve frontend integration.",
      "Logging strategy matters as much as endpoint count.",
    ],
  },
  {
    slug: "postgresql-performance-basics-for-web-apps",
    title: "PostgreSQL Performance Basics for Web Apps",
    excerpt:
      "Foundational query and indexing techniques that matter early.",
    publishedAt: "2026-03-08",
    readTime: "9 min read",
    tags: ["PostgreSQL", "Database", "Performance"],
    intro:
      "You do not need advanced tuning to get meaningful speedups. A few core habits usually deliver big wins.",
    sections: [
      {
        heading: "Index with intent",
        paragraphs: [
          "Index frequently filtered columns, but avoid index spam.",
          "Composite indexes should mirror real query patterns, not guesses.",
        ],
      },
      {
        heading: "Measure query plans",
        paragraphs: [
          "I use EXPLAIN ANALYZE before and after each tuning change.",
          "Without plan evidence, performance work turns into speculation.",
        ],
      },
      {
        heading: "Pagination and filtering",
        paragraphs: [
          "Offset pagination can degrade heavily on large tables.",
          "Cursor strategies are often better for feeds and activity timelines.",
        ],
      },
    ],
    keyTakeaways: [
      "Measure first, optimize second.",
      "Indexes should match actual workload.",
      "Query plan literacy is a superpower.",
    ],
  },
  {
    slug: "jwt-auth-mistakes-and-fixes",
    title: "JWT Auth Mistakes I Made and How I Fixed Them",
    excerpt:
      "Real mistakes from implementing token auth in production-style apps.",
    publishedAt: "2026-03-06",
    readTime: "8 min read",
    tags: ["JWT", "Security", "Backend"],
    intro:
      "JWT auth feels easy until edge cases hit: expiry, refresh, revocation, and route-level trust assumptions.",
    sections: [
      {
        heading: "Token lifetime strategy",
        paragraphs: [
          "Long-lived access tokens increase risk. I switched to short-lived access plus refresh flow.",
          "Refresh tokens need server-side rotation and invalidation support.",
        ],
      },
      {
        heading: "Authorization boundaries",
        paragraphs: [
          "Authentication and authorization are different checks.",
          "I validate roles and resource ownership separately after identity verification.",
        ],
      },
      {
        heading: "Operational hardening",
        paragraphs: [
          "Secrets should rotate and never live in client bundles.",
          "Audit logs around auth events help detect suspicious patterns quickly.",
        ],
      },
    ],
    keyTakeaways: [
      "Short token lifetimes reduce blast radius.",
      "Always separate identity from permission checks.",
      "Security maturity is process, not one-time setup.",
    ],
  },
  {
    slug: "websocket-realtime-feature-design",
    title: "Designing Reliable Real-Time Features with WebSockets",
    excerpt:
      "Patterns for event naming, reconnection, and consistency in realtime systems.",
    publishedAt: "2026-03-04",
    readTime: "10 min read",
    tags: ["WebSocket", "Realtime", "System Design"],
    intro:
      "Realtime features fail when event contracts are vague. Reliability starts with explicit protocols and fallback behavior.",
    sections: [
      {
        heading: "Event contract design",
        paragraphs: [
          "I define strict payload schemas for each event name.",
          "Versioning events avoids breaking older clients during rollout.",
        ],
      },
      {
        heading: "Reconnect strategy",
        paragraphs: [
          "Clients should recover gracefully with exponential backoff and state re-sync.",
          "A reconnect without state sync can produce ghost UI behavior.",
        ],
      },
      {
        heading: "Server-side safeguards",
        paragraphs: [
          "Rate limits and room-level guards protect from abuse and accidental loops.",
          "Acknowledgement events improve certainty for critical actions.",
        ],
      },
    ],
    keyTakeaways: [
      "Define event schemas before implementation.",
      "Reconnection must include state reconciliation.",
      "Guardrails are essential for realtime stability.",
    ],
  },
  {
    slug: "from-monolith-to-modular-backend",
    title: "From Monolith to Modular Backend: My Transition Strategy",
    excerpt:
      "How to split a growing Node.js backend without breaking everything.",
    publishedAt: "2026-03-02",
    readTime: "9 min read",
    tags: ["Backend", "Refactoring", "Node.js"],
    intro:
      "A complete rewrite is rarely the answer. I prefer incremental modularization guided by business boundaries.",
    sections: [
      {
        heading: "Find domain seams",
        paragraphs: [
          "I identify high-change modules first: auth, billing, and notifications are common candidates.",
          "These become boundaries for extracting service modules.",
        ],
      },
      {
        heading: "Extract safely",
        paragraphs: [
          "I use adapter layers so old routes can call new modules during migration.",
          "This lets me migrate feature by feature without downtime.",
        ],
      },
      {
        heading: "Stabilize with tests",
        paragraphs: [
          "Contract tests between modules reduce regression risk.",
          "Refactoring speed improves once core boundaries are validated automatically.",
        ],
      },
    ],
    keyTakeaways: [
      "Incremental refactoring beats full rewrites.",
      "Boundary quality determines long-term maintainability.",
      "Adapters help migration without product freeze.",
    ],
  },
  {
    slug: "prisma-schema-design-tips",
    title: "Prisma Schema Design Tips I Wish I Knew Earlier",
    excerpt:
      "Data modeling lessons for cleaner queries and safer migrations.",
    publishedAt: "2026-02-28",
    readTime: "8 min read",
    tags: ["Prisma", "Database", "TypeScript"],
    intro:
      "Prisma is fast to start with, but schema choices can either unlock velocity or create future pain.",
    sections: [
      {
        heading: "Model for query patterns",
        paragraphs: [
          "I design relations around how data is read most often, not just how it is conceptually grouped.",
          "That reduces over-fetching and awkward nested query chains.",
        ],
      },
      {
        heading: "Migration discipline",
        paragraphs: [
          "Small, frequent migrations are easier to reason about and rollback.",
          "I treat destructive changes as multi-step migrations with compatibility windows.",
        ],
      },
      {
        heading: "Type-safe service layer",
        paragraphs: [
          "I avoid scattering Prisma calls throughout routes.",
          "A service layer keeps data access patterns centralized and easier to evolve.",
        ],
      },
    ],
    keyTakeaways: [
      "Schema design should follow query reality.",
      "Migration safety is part of feature delivery.",
      "Centralized data access improves maintainability.",
    ],
  },
  {
    slug: "api-validation-with-zod-patterns",
    title: "API Validation with Zod: Patterns That Scale",
    excerpt:
      "A predictable validation strategy for safer endpoint evolution.",
    publishedAt: "2026-02-26",
    readTime: "7 min read",
    tags: ["Zod", "API", "Validation"],
    intro:
      "Validation is not boilerplate. It is the contract between frontend and backend trust.",
    sections: [
      {
        heading: "Schema-first handlers",
        paragraphs: [
          "I define Zod schemas before writing business logic.",
          "That keeps input shape assumptions explicit and testable.",
        ],
      },
      {
        heading: "Error consistency",
        paragraphs: [
          "Validation errors should return stable structures for frontend rendering.",
          "I map raw parser errors into predictable field-level messages.",
        ],
      },
      {
        heading: "Reuse across layers",
        paragraphs: [
          "Shared schema fragments reduce duplication across endpoints.",
          "This helps keep forms and APIs aligned as requirements change.",
        ],
      },
    ],
    keyTakeaways: [
      "Validation belongs at boundaries.",
      "Consistent error shapes improve UX.",
      "Schema reuse reduces drift between client and server.",
    ],
  },
];
