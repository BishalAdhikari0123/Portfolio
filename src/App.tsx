import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
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
