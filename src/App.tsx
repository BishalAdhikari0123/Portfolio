import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import SiteFooter from "./components/SiteFooter";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectCaseStudyPage from "./pages/ProjectCaseStudyPage";
import PostsPage from "./pages/PostsPage";
import PostDetailPage from "./pages/PostDetailPage";
import TutorialsPage from "./pages/TutorialsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ManualPostPage from "./pages/ManualPostPage";
import { projectCaseStudies } from "./data/projects";

function App() {
  const location = useLocation();
  const siteUrl = "https://bishaladhikari1.com.np";

  const upsertMetaTag = (selector: string, attributes: Record<string, string>, content: string) => {
    let tag = document.querySelector<HTMLMetaElement>(selector);

    if (!tag) {
      tag = document.createElement("meta");
      Object.entries(attributes).forEach(([key, value]) => {
        tag?.setAttribute(key, value);
      });
      document.head.appendChild(tag);
    }

    tag.setAttribute("content", content);
  };

  const upsertLinkTag = (selector: string, attributes: Record<string, string>) => {
    let tag = document.querySelector<HTMLLinkElement>(selector);

    if (!tag) {
      tag = document.createElement("link");
      document.head.appendChild(tag);
    }

    Object.entries(attributes).forEach(([key, value]) => {
      tag?.setAttribute(key, value);
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const defaultTitle = "Bishal Adhikari | Full Stack Developer in Nepal (Node.js, Next.js)";
    const defaultDescription =
      "Full Stack Developer in Nepal specializing in Node.js backend APIs, Next.js apps, and scalable real-time systems.";

    let title = defaultTitle;
    let description = defaultDescription;
    const canonicalPath = location.pathname === "/" ? "/" : location.pathname;

    if (location.pathname === "/") {
      title = "Bishal Adhikari | Full Stack Developer in Nepal (Node.js, Next.js)";
      description =
        "Backend-focused full stack developer building scalable APIs, real-time apps, and modern web platforms. View projects, tutorials, and hire options.";
    } else if (location.pathname === "/posts" || location.pathname === "/blog") {
      title = "Node.js & Next.js Blog | Bishal Adhikari";
      description =
        "Read practical Node.js, Next.js, and backend architecture articles from a full stack developer in Nepal.";
    } else if (location.pathname === "/tutorials") {
      title = "Full-Stack Tutorials | Bishal Adhikari";
      description =
        "Step-by-step tutorials on React, TypeScript, Next.js, Supabase, and scalable API development.";
    } else if (location.pathname === "/projects") {
      title = "Project Case Studies | Bishal Adhikari";
      description =
        "Explore real project case studies with problem, solution, technical decisions, and engineering outcomes.";
    } else if (location.pathname === "/contact") {
      title = "Hire Full Stack Developer in Nepal | Contact Bishal Adhikari";
      description = "Get in touch for backend API development, full-stack projects, and freelance engineering collaboration.";
    } else if (location.pathname === "/blog/new") {
      title = "Publish Blog Post | Bishal Adhikari";
      description = "Secure manual publishing page for adding blog posts and optional cover images.";
    } else if (location.pathname.startsWith("/posts/")) {
      title = "Blog Post | Bishal Adhikari";
      description = "Read practical software engineering notes, tutorials, and backend development guides.";
    } else if (location.pathname.startsWith("/projects/")) {
      const slug = location.pathname.replace("/projects/", "");
      const project = projectCaseStudies.find((item) => item.slug === slug);
      if (project) {
        title = `${project.title} | Project Case Study`;
        description = project.summary;
      }
    }

    document.title = title;
    upsertMetaTag('meta[name="description"]', { name: "description" }, description);
    upsertMetaTag('meta[name="robots"]', { name: "robots" }, "index, follow");
    upsertMetaTag('meta[property="og:type"]', { property: "og:type" }, "website");
    upsertMetaTag('meta[property="og:title"]', { property: "og:title" }, title);
    upsertMetaTag('meta[property="og:description"]', { property: "og:description" }, description);
    upsertMetaTag('meta[property="og:url"]', { property: "og:url" }, `${siteUrl}${canonicalPath}`);
    upsertMetaTag('meta[property="og:image"]', { property: "og:image" }, `${siteUrl}/profile.webp`);
    upsertMetaTag('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image");
    upsertMetaTag('meta[name="twitter:title"]', { name: "twitter:title" }, title);
    upsertMetaTag('meta[name="twitter:description"]', { name: "twitter:description" }, description);
    upsertMetaTag('meta[name="twitter:image"]', { name: "twitter:image" }, `${siteUrl}/profile.webp`);
    upsertLinkTag('link[rel="canonical"]', {
      rel: "canonical",
      href: `${siteUrl}${canonicalPath}`,
    });
  }, [location.pathname]);

  useEffect(() => {
    const schemaId = "person-website-schema";
    const existing = document.getElementById(schemaId);
    if (existing) {
      existing.remove();
    }

    const schemaScript = document.createElement("script");
    schemaScript.id = schemaId;
    schemaScript.type = "application/ld+json";
    schemaScript.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Bishal Adhikari",
        jobTitle: "Full Stack Developer",
        url: siteUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pokhara",
          addressCountry: "NP",
        },
        sameAs: [
          "https://github.com/BishalAdhikari0123",
          "https://www.linkedin.com/in/bishal-adhikari-051a09296/",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Bishal Adhikari Portfolio",
        url: siteUrl,
      },
    ]);

    document.head.appendChild(schemaScript);

    return () => {
      schemaScript.remove();
    };
  }, [location.pathname]);

  useEffect(() => {
    const MIN_MAIN_CONTENT_LENGTH = 500;
    const main = document.querySelector("main");
    const mainContentLength = (main?.textContent ?? "")
      .replace(/\s+/g, " ")
      .trim()
      .length;

    if (mainContentLength < MIN_MAIN_CONTENT_LENGTH) {
      return;
    }

    if (document.querySelector('script[data-adsense-loader="true"]')) {
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1189166525318639";
    script.setAttribute("data-adsense-loader", "true");
    document.head.appendChild(script);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudyPage />} />
          <Route path="/blog" element={<PostsPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/posts/:slug" element={<PostDetailPage />} />
          <Route path="/blog/new" element={<ManualPostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
