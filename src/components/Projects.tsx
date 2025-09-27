import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Code } from "lucide-react";

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "LevelUp – Skill Based Community App",
      description:
        "A comprehensive community platform that connects users based on their skills and interests. Features user authentication, skill matching, community forums, and real-time messaging.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      techStack: ["Next.js", "Node.js", "Prisma", "PostgreSQL"],
      github: "https://github.com/BishalAdhikari0123/LevelUp",
      live: "https://level-up-olive-gamma.vercel.app/eng/home",
      featured: true,
    },
    {
      title: "Group Chat API",
      description:
        "A robust real-time chat API built with Node.js and Express, featuring WebSocket connections, user authentication, message persistence, and group management capabilities.",
      image:
        "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=800",
      techStack: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/BishalAdhikari0123/Group-Chat",
      live: null,
      featured: false,
    },
    {
      title: "Bookly – E-commerce for Digital Books",
      description:
        "A full-featured e-commerce platform specialized for digital book sales. Includes user management, payment processing, digital delivery, and comprehensive admin dashboard.",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      techStack: ["PHP", "MySQL"],
      github: "https://github.com/lgic-project/BookComSystem",
      live: null,
      featured: false,
    },
    {
      title: "TopCollec – Fantasy Blog",
      description:
        "A creative fantasy blog platform featuring rich content management, responsive design, and optimized for SEO. Built with modern WordPress techniques and custom themes.",
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      techStack: ["WordPress"],
      github: null,
      live: "https://topcollec.wordpress.com",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my backend development expertise and full-stack
            capabilities
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                project.featured
                  ? "border-2 border-accent-200 ring-2 ring-accent-100"
                  : "border border-gray-200"
              }`}
            >
              <div
                className={`grid ${project.featured ? "lg:grid-cols-2" : "md:grid-cols-3"} gap-0`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary-600 to-primary-800 text-white text-sm font-medium rounded-full">
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-accent-600 to-secondary-600 text-white text-sm font-medium rounded-full shadow-lg">
                        ⭐ Featured
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className={`p-6 ${project.featured ? "" : "md:col-span-2"} flex flex-col justify-between`}
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-display">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 hover:shadow-lg transition-all duration-200 font-medium"
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-accent-600 to-secondary-600 text-white rounded-xl hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-200 font-medium"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-2xl border border-gray-200 shadow-lg">
            <Code className="text-accent-600 mr-3" size={24} />
            <span className="text-gray-700 font-medium">
              More projects available on my GitHub
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
