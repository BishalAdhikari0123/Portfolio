import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Code, Database } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Subtle Gradient Orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[150px] animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-[150px] animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="w-48 h-48 mx-auto mb-8 rounded-full relative group"
            >
              <div className="absolute inset-0 bg-white rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-1 bg-black rounded-full"></div>
              <img
                src="/profile.jpg"
                alt="Bishal Adhikari"
                className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] object-cover rounded-full transition-all duration-500"
              />
            </motion.div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block text-white"
              >
                Bishal
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block text-white font-extrabold relative inline-block"
              >
                Adhikari
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            {/* Location Badge */}
            <div className="inline-flex items-center px-6 py-3 glass-bw rounded-full mb-6 hover:glass-bw-strong transition-all duration-300">
              <MapPin size={18} className="text-white mr-2" />
              <span className="text-gray-300 font-medium">Pokhara, Nepal</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6 font-semibold">
              Backend-focused Full-Stack Developer
            </h2>

            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Crafting <span className="text-white font-semibold">scalable REST APIs</span> and{" "}
              <span className="text-white font-semibold">real-time applications</span>.
              Specialized in Node.js/TypeScript, PostgreSQL, and MongoDB.
            </p>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="group flex items-center px-6 py-4 glass-bw rounded-2xl hover:glass-bw-strong hover-lift cursor-pointer transition-all duration-300">
              <Code className="text-white mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
              <span className="text-gray-300 font-medium">Backend Architecture</span>
            </div>
            <div className="group flex items-center px-6 py-4 glass-bw rounded-2xl hover:glass-bw-strong hover-lift cursor-pointer transition-all duration-300">
              <Database className="text-white mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
              <span className="text-gray-300 font-medium">Database Design</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 hover-scale"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-bw text-white font-semibold rounded-xl border-2 border-white/20 hover:border-white/60 hover:glass-bw-strong transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            onClick={scrollToAbout}
            className="animate-float"
          >
            <ArrowDown
              size={32}
              className="text-white hover:text-gray-300 transition-colors duration-200 animate-bounce"
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
