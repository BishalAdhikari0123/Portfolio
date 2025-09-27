import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Code, Database } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent-600 via-secondary-600 to-accent-800 shadow-2xl shadow-accent-500/25 flex items-center justify-center text-white text-6xl font-bold font-display animate-glow"
            >
              BA
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 font-display">
              <span className="block">Bishal</span>
              <span className="block bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">Adhikari</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-white/20 mb-6">
              <MapPin size={18} className="text-accent-600 mr-2" />
              <span className="text-gray-700 font-medium">Pokhara, Nepal</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-4 font-medium">
              Backend-focused Full-Stack Developer
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate about designing scalable REST APIs and real-time applications. 
              Strong in Node.js/TypeScript, PostgreSQL, and MongoDB, with solid React/Next.js frontend skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center px-6 py-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <Code className="text-accent-600 mr-3" size={24} />
              <span className="text-gray-700 font-medium">Backend Architecture</span>
            </div>
            <div className="flex items-center px-6 py-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <Database className="text-secondary-600 mr-3" size={24} />
              <span className="text-gray-700 font-medium">Database Design</span>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={scrollToAbout}
            className="animate-float"
          >
            <ArrowDown size={32} className="text-accent-600 hover:text-accent-800 transition-colors duration-200" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;