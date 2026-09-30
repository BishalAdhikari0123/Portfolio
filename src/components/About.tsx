import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Globe, Zap, Users } from "lucide-react";

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const highlights = [
    {
      icon: Server,
      title: "Data and backend work",
      description:
      "Comfortable moving from data cleaning and feature engineering to APIs and maintainable server-side systems",
    },
    {
      icon: Globe,
      title: "Useful analysis",
      description:
      "Interested in making model outputs and product data understandable to the people who use them",
    },
    {
      icon: Zap,
      title: "Strong foundations",
      description:
      "Python, SQL, databases, testing, and clear documentation are part of how I approach a project",
    },
    {
      icon: Users,
      title: "Still learning",
      description:
      "Currently completing an MSc in Data Science and building projects alongside postgraduate study",
    },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="relative inline-block">Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                I am an MSc Data Science student and backend-focused developer based in London. I enjoy work that sits
                between software engineering and analysis: reliable APIs, useful databases, and models that can be explained.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                My recent projects use Python, Pandas, NumPy, Scikit-learn, SQL, and Streamlit alongside Node.js,
                TypeScript, PostgreSQL, MongoDB, and Next.js. I care about evaluation, data quality, and the details that
                make a system easier for another developer to pick up.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                I am especially interested in customer behaviour, responsible machine learning, NLP, and product decisions
                grounded in evidence. My goal is to keep building software that is technically sound and genuinely useful.
              </p>
            </div>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-3 border-y border-white/10 py-6 text-center lg:col-span-2">
            <div>
              <p className="text-2xl font-bold text-white">9+</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">documented projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">30+</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">API endpoints in one build</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">MSc</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">data science, in progress</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass-bw p-6 rounded-2xl hover:glass-bw-strong hover-lift transition-all duration-300 group cursor-pointer border border-white/10 hover:border-white/30"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-glow"
                >
                  <item.icon className="text-black" size={24} />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
