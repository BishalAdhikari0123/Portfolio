import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import SiteFooter from "./components/SiteFooter";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectCaseStudyPage from "./pages/ProjectCaseStudyPage";
import PostsPage from "./pages/PostsPage";
import PostDetailPage from "./pages/PostDetailPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
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
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:slug" element={<PostDetailPage />} />
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
