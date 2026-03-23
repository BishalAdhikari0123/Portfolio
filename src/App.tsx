import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
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
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <PrivacyPolicy />
        <Contact />
      </main>


      <footer className="bg-black border-t border-white/10 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 Bishal Adhikari. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/BishalAdhikari0123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 font-medium underline-animate"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bishal-adhikari-051a09296/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 font-medium underline-animate"
              >
                LinkedIn
              </a>
              <a
                href="mailto:bsaladkari@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200 font-medium underline-animate"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
