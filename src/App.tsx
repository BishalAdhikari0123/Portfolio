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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const defaultTitle = "Bishal Adhikari | Tech Blog + Portfolio";
    const defaultDescription =
      "Technical tutorials, project case studies, and backend/full-stack engineering notes by Bishal Adhikari.";

    let title = defaultTitle;
    let description = defaultDescription;

    if (location.pathname === "/") {
      title = "Home | Bishal Adhikari";
      description =
        "Tech blog + portfolio featuring development tutorials, case studies, and practical engineering insights.";
    } else if (location.pathname === "/posts" || location.pathname === "/blog") {
      title = "Blog | Bishal Adhikari";
      description =
        "Read in-depth software engineering articles on React, Next.js, Node.js, deployment, and backend architecture.";
    } else if (location.pathname === "/tutorials") {
      title = "Tutorials | Bishal Adhikari";
      description =
        "Step-by-step tutorials for full-stack developers: React, TypeScript, Supabase, Next.js, and APIs.";
    } else if (location.pathname === "/projects") {
      title = "Projects | Bishal Adhikari";
      description =
        "Explore project case studies with problem statements, solutions, tech stack, challenges, and images.";
    } else if (location.pathname === "/contact") {
      title = "Contact | Bishal Adhikari";
      description = "Get in touch with Bishal Adhikari for collaboration, freelance projects, or backend development work.";
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
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
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
