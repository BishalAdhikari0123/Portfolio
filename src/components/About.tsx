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
        "Experience working in teams and contributing to production systems",
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
                Backend-focused full-stack developer with hands-on experience building scalable REST APIs and microservices.
                Skilled in JavaScript/TypeScript, PostgreSQL, and MongoDB, and comfortable developing full-stack applications
                with Next.js.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                My expertise lies in designing robust backend architectures using Node.js, Express.js, and modern ORMs like
                Prisma. I have production experience implementing authentication systems (OAuth, JWT), real-time features
                (WebSocket), and building microservice-based applications.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                Highly motivated to deepen backend architecture skills and contribute to production systems. Currently exploring
                advanced TypeScript backend patterns, PostgreSQL optimization, and scalable real-time architectures.
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
