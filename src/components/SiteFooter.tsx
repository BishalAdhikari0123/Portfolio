import { Link } from "react-router-dom";

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm md:text-base">
            © 2026 Bishal Adhikari. Built with React, TypeScript, and way too much coffee.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm">
            <Link
              to="/projects"
              className="text-gray-400 hover:text-white transition-colors duration-200 font-medium underline-animate"
            >
              Case Studies
            </Link>
            <Link
              to="/posts"
              className="text-gray-400 hover:text-white transition-colors duration-200 font-medium underline-animate"
            >
              Posts
            </Link>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
