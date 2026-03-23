import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Posts", href: "/posts" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy-policy" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "glass-bw-strong shadow-2xl shadow-white/5 border-b border-white/10"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white"
          >
            BA
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `transition-all duration-200 font-medium relative group underline-animate ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/bishal_adhikari_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-all duration-200"
            >
              <Download size={16} className="mr-2" />
              Resume
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <motion.a
                whileTap={{ scale: 0.95 }}
                href="/bishal_adhikari_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 bg-white text-black rounded-xl font-medium w-fit hover:bg-gray-200 transition-all duration-200"
              >
                <Download size={16} className="mr-2" />
                Resume
              </motion.a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
