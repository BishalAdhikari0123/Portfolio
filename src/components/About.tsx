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
      title: "Backend Expertise",
      description:
        "Specialized in building robust, scalable server-side applications with Node.js and TypeScript",
    },
    {
      icon: Globe,
      title: "Full-Stack Capability",
      description:
        "Comprehensive understanding of both frontend and backend development ecosystems",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description:
        "Optimizing applications for speed, efficiency, and seamless user experiences",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description:
        "Experience working in teams and contributing to open-source projects",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-secondary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                I'm a passionate backend-focused full-stack developer based in
                the beautiful city of Pokhara, Nepal. With a strong foundation
                in server-side technologies, I specialize in creating scalable
                REST APIs and real-time applications that power modern web
                experiences.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                My expertise lies primarily in Node.js and TypeScript, where
                I've built robust backend systems using PostgreSQL and MongoDB.
                I'm proficient in modern frameworks like Express.js and Fastify,
                and I understand the importance of clean architecture and
                maintainable code.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                While my heart lies in backend development, I'm equally
                comfortable with frontend technologies like React and Next.js,
                allowing me to contribute to full-stack projects and understand
                the complete development lifecycle.
              </p>
            </div>
          </motion.div>

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
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 hover:border-accent-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-600 to-secondary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
