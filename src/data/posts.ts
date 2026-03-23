import { BlogPost } from "../types/content";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-i-fixed-nextjs-typescript-build-error",
    title: "How I Fixed a Next.js TypeScript Build Error",
    excerpt:
      "A detailed production-grade debugging workflow for stubborn build-time type failures in Next.js.",
    publishedAt: "2026-03-20",
    readTime: "14 min read",
    tags: ["Next.js", "TypeScript", "Debugging"],
    intro:
      "Build-time TypeScript failures in Next.js usually appear at the worst possible time: right before deployment. What makes them frustrating is that the app can look perfectly fine in local development while CI fails hard. This post is the exact end-to-end process I used to debug and fix a real error, including how I isolated the root cause, stabilized the type contracts, and prevented the same class of issue from returning later.",
    sections: [
      {
        heading: "Step 1: Reproduce the failure exactly like CI",
        paragraphs: [
          "The first trap is trying to fix the issue from memory. I always reproduce with the production build command instead of relying on the dev server. Development mode can hide type mismatches because not every file path is compiled in the same way, and hot reload gives a false sense of correctness.",
          "If CI fails but local succeeds, I align runtime versions before touching any code: Node version, package manager major version, and lockfile state. In one recent case, the lockfile mismatch itself was the first failure, which masked the actual TypeScript issue. Only after dependency parity did the true typing error surface clearly.",
          "I also remove stale assumptions by running a clean install, then build, then typecheck. This sequence tells me whether the error is package-resolution related, source-level related, or both. That simple discipline saves hours of random edits.",
        ],
      },
      {
        heading: "Step 2: Trace the first meaningful type boundary",
        paragraphs: [
          "Most TypeScript build logs contain a cascade, but only the first meaningful boundary matters. I trace that boundary to one of three areas: API response shape drift, optional/null handling drift, or overloaded component props. In my case, a server response evolved, but the frontend type was still assuming an older contract.",
          "Instead of sprinkling casts, I created a single shared interface for the response shape and consumed it across route handlers and UI layers. When a field is nullable in the data source, I model it as nullable in the contract and narrow safely where it is rendered. This keeps correctness visible instead of hidden behind `as`.",
          "I also audit utility functions that transform data. These are frequent type drift hotspots because they silently reshape objects in ways that no longer match component expectations. Once those conversion points are strongly typed, most downstream errors disappear.",
        ],
      },
      {
        heading: "Step 3: Lock the fix with safeguards",
        paragraphs: [
          "After the fix compiles, I add one guard close to the source. That can be a schema validator, a narrow helper, or a simple runtime assertion in a critical parser. The goal is not just passing once; it is making regression difficult.",
          "Then I run the complete verification path: lint, typecheck, build. If any one of these is skipped, you risk shipping code that compiles but fails quality or runtime assumptions. For production projects, this full gate should run both locally and in CI.",
          "Finally, I document the root cause in the project notes. This sounds minor, but it helps future contributors understand why the contract exists and discourages accidental reintroduction of weak typing shortcuts.",
        ],
      },
    ],
    keyTakeaways: [
      "Always debug production build, not just dev server.",
      "Stabilize one shared contract across API and UI layers.",
      "Use narrowers/validators to block silent regressions.",
    ],
  },
  {
    slug: "beginner-guide-supabase-auth",
    title: "Beginner Guide to Supabase Auth",
    excerpt:
      "A practical, production-aware beginner roadmap for Supabase authentication in modern React/Next.js apps.",
    publishedAt: "2026-03-18",
    readTime: "15 min read",
    tags: ["Supabase", "Authentication", "React"],
    intro:
      "Supabase Auth is one of the fastest ways to add login to a project, but speed can hide foundational mistakes. Many beginners get signup working and then hit issues with session flicker, route access leaks, confusing token expiry behavior, or weak API protection. This guide explains a beginner-friendly setup that still follows production thinking from day one.",
    sections: [
      {
        heading: "Model authentication as explicit app states",
        paragraphs: [
          "The most important concept is state modeling. You need at least three states: loading, authenticated, and anonymous. If you skip the loading state, your app can momentarily render protected UI before redirecting, creating both UX flicker and trust issues.",
          "I initialize session state at the application boundary and do not render protected layouts until that state is resolved. This one decision prevents many race-condition style bugs where components assume user data exists while auth hydration is still in progress.",
          "For maintainability, keep auth state in one place and expose helper hooks for role checks, session presence, and logout behavior. Centralization makes security logic easier to audit and refactor.",
        ],
      },
      {
        heading: "Protect routes at both UI and API boundaries",
        paragraphs: [
          "Client-side route guards improve user flow, but they are not security boundaries. Real protection lives in server-side validation and database rules. Any endpoint returning private data should verify a valid session token and user permissions, regardless of frontend state.",
          "In Supabase projects, Row Level Security is a major strength. Use it intentionally, with explicit policies that match business behavior rather than broad allow rules. A clean policy set is often the difference between demo-level auth and production-ready auth.",
          "I also avoid trusting user role data from local storage or unverified client claims. Roles and ownership checks should come from trusted backend sources every time.",
        ],
      },
      {
        heading: "Common mistakes and how to avoid them",
        paragraphs: [
          "A frequent beginner mistake is storing custom `isLoggedIn` flags and treating them as truth. These flags can improve UX hints, but never replace token/session validation. Another common issue is skipping email confirmation flows and mislabeling expected behavior as a bug.",
          "Token refresh handling is another subtle area. If refresh is not handled gracefully, users get random logouts and failed API calls. Build clear fallback behavior: retry once, refresh, then redirect with a clear message if refresh fails.",
          "Finally, test auth behavior on slow networks and mobile devices. Timing-related bugs are often invisible on fast local setups but become obvious in real user conditions.",
        ],
      },
    ],
    keyTakeaways: [
      "Treat auth as state architecture, not just a login form.",
      "Use RLS and server checks as the real security boundary.",
      "Design for session refresh and edge networks early.",
    ],
  },
  {
    slug: "how-to-deploy-nextjs-app",
    title: "How to Deploy a Next.js App (Without Last-Minute Panic)",
    excerpt:
      "A complete, practical deployment checklist for shipping Next.js confidently and repeatedly.",
    publishedAt: "2026-03-16",
    readTime: "13 min read",
    tags: ["Next.js", "Deployment", "Vercel"],
    intro:
      "A reliable deployment process should feel routine, not stressful. When releases are chaotic, the root issue is usually missing preflight checks, weak environment management, or unclear rollback planning. In this guide, I share the deployment workflow I follow to ship Next.js apps safely from local development through production verification.",
    sections: [
      {
        heading: "Pre-deploy: verify the same pipeline CI will run",
        paragraphs: [
          "Before any deployment, I run lint, typecheck, and production build locally. If local cannot pass the same quality gates, CI should not be expected to succeed magically. This also catches package-lock mismatches or Node version mismatches earlier.",
          "Environment variables are the second major checkpoint. I maintain a clear list of required variables and confirm each one exists in preview and production environments. Missing secrets are one of the most common causes of runtime failure after an otherwise successful build.",
          "I also test key edge cases before merge: empty states, unauthorized access, failed API responses, and non-happy-path forms. Deploying only after happy-path checks is how subtle bugs reach users.",
        ],
      },
      {
        heading: "Use preview deployments as a release safety net",
        paragraphs: [
          "Preview deployments are underrated. I use them to validate major feature branches with realistic hosted behavior. This catches issues that do not appear locally, such as CSP conflicts, route rewrites, or environment-based logic errors.",
          "After preview is healthy, I check critical user journeys in order: authentication, data reads, data writes, navigation, and error boundaries. I test both desktop and mobile viewport behavior because layout regressions often appear only on small screens.",
          "When everything passes, production deployment becomes a controlled step rather than a gamble. The goal is to remove surprises, not simply to 'hope it works'.",
        ],
      },
      {
        heading: "Post-deploy monitoring and rollback discipline",
        paragraphs: [
          "The first 30 minutes after deploy are crucial. I monitor logs for error spikes, failed API calls, and suspicious auth patterns. Most high-impact regressions surface quickly if you are watching actively.",
          "I also track performance indicators and web vitals. Even if functionality works, a large asset or heavy script can degrade UX and search visibility. Performance is part of release quality, not a separate afterthought.",
          "Finally, I always keep rollback criteria explicit. If critical flow X fails for Y minutes, rollback immediately. Clear rollback rules reduce emotional decision-making during incident pressure.",
        ],
      },
    ],
    keyTakeaways: [
      "Shipping quality is mostly process discipline.",
      "Preview deployments are your best early-warning system.",
      "Monitoring + rollback plans are part of deployment, not extras.",
    ],
  },
  {
    slug: "common-react-project-mistakes",
    title: "Common Mistakes in React Projects (And How to Avoid Them)",
    excerpt:
      "The most frequent architecture mistakes that quietly damage React codebases over time.",
    publishedAt: "2026-03-14",
    readTime: "14 min read",
    tags: ["React", "Best Practices", "Code Quality"],
    intro:
      "Most React pain comes from architecture decisions, not from React itself. Projects become difficult when state ownership is unclear, components do too many jobs, and data contracts drift across layers. This article highlights mistakes I repeatedly see in real projects and explains practical fixes that improve reliability without overengineering.",
    sections: [
      {
        heading: "State ownership mistakes",
        paragraphs: [
          "The first mistake is duplicating state that should be derived. For example, storing both a raw list and a filtered list in state introduces synchronization bugs. I keep a single source of truth and derive filtered or sorted versions during render or memoized selectors.",
          "Another common issue is placing shared state too low in the tree, which leads to prop drilling and inconsistent updates. If multiple siblings need the same data, move ownership up or use a dedicated state boundary.",
          "State naming clarity matters too. Ambiguous names like `data` or `itemState` make maintenance harder. Descriptive names reduce bugs by making intent obvious during future edits.",
        ],
      },
      {
        heading: "Component boundary and responsibility drift",
        paragraphs: [
          "Large components are not automatically bad, but mixed responsibilities are. A component handling data fetching, business logic, animation, and layout simultaneously becomes hard to reason about. I split by concern: data containers, presentational components, and interaction modules.",
          "Reusable components should have narrow, explicit prop contracts. If a single UI component requires ten optional props to behave correctly, it usually represents multiple component roles hidden in one file.",
          "I also prefer composition over configuration complexity. Composable primitives are easier to test and adapt than one mega-component with dozens of mode flags.",
        ],
      },
      {
        heading: "Performance myths and anti-patterns",
        paragraphs: [
          "A major myth is that more memoization always equals better performance. Overusing memo hooks can increase cognitive load and still fail to remove the actual bottlenecks. I profile first, then optimize where a measurable issue exists.",
          "Another anti-pattern is triggering expensive operations during render due to unstable dependencies or recreated objects. Stable references and careful effect dependencies solve many unnecessary rerender chains.",
          "Finally, avoid shipping huge bundles by default. Code splitting, lazy boundaries, and image optimization often provide bigger user-facing gains than micro-optimizing local component logic.",
        ],
      },
    ],
    keyTakeaways: [
      "Most React bugs are ownership and boundary problems.",
      "Prefer clear contracts over giant flexible components.",
      "Measure performance before optimizing.",
    ],
  },
  {
    slug: "how-i-built-portfolio-website",
    title: "How I Built My Portfolio Website",
    excerpt:
      "From a simple one-page profile to a multi-page portfolio designed for trust, SEO, and policy compliance.",
    publishedAt: "2026-03-12",
    readTime: "12 min read",
    tags: ["Portfolio", "React", "TailwindCSS"],
    intro:
      "I initially built my portfolio as a visual one-pager. It looked clean, but it lacked the depth needed for search discovery, content quality signals, and detailed project storytelling. Over time, I redesigned it into a multi-page technical portfolio with case studies, long-form articles, and stronger information architecture. This is the step-by-step process and why each decision mattered.",
    sections: [
      {
        heading: "Where the first version fell short",
        paragraphs: [
          "The original portfolio focused heavily on hero design and section animations. It was good for first impressions but weak for depth. Recruiters and clients could see project names but not the engineering thinking behind them.",
          "From an SEO perspective, one page also limited topical coverage. It is difficult to rank well when everything from About to Projects to technical writing is compressed into a single route with shallow textual context.",
          "I also recognized policy risk: pages with low textual value are less likely to pass ad-network quality reviews. I needed richer, intent-driven content that clearly serves users.",
        ],
      },
      {
        heading: "What I changed in the architecture",
        paragraphs: [
          "I introduced route-based navigation with dedicated pages for projects, individual case studies, article listings, and article detail views. This immediately improved discoverability and made each page intent-specific.",
          "For projects, I standardized every entry into a case-study format: Problem, Solution, Tech Used, Challenges, and Screenshots. This structure makes the content more useful to readers and easier for search engines to interpret.",
          "For posts, I moved from short blurbs to longer practical tutorials based on real implementation experience. That shift improved both relevance and trust because readers can follow a complete thought process instead of skimming generic tips.",
        ],
      },
      {
        heading: "Why this approach performs better",
        paragraphs: [
          "Each page now has a clear purpose: introduce, explain, teach, or convert. That clarity helps users navigate faster and spend more time on pages that match their intent.",
          "The portfolio is also better aligned with quality-content expectations: meaningful text, descriptive project detail, and clear legal/informational pages like Privacy Policy and Terms. These are trust signals for both human readers and platform reviewers.",
          "Finally, the architecture is now scalable. Adding new projects and articles is a data update, not a redesign. That makes consistent publishing realistic, which is crucial for long-term growth.",
        ],
      },
    ],
    keyTakeaways: [
      "Design attracts attention; depth earns trust.",
      "Case studies communicate engineering maturity clearly.",
      "Consistent long-form content compounds traffic over time.",
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
