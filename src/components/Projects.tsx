import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Code, Star } from "lucide-react";

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Zombie Survival – Full-Stack Game",
      description:
        "Full-stack zombie survival game combining frontend and backend repos. TypeScript-based Next.js frontend with Express backend, PostgreSQL database, and JWT authentication. Features multiplayer combat, leaderboard system, and real-time game updates via WebSocket. Backend architecture follows microservices and modular design.",
      image:
        "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=800",
      techStack: ["TypeScript", "Next.js", "Express", "PostgreSQL", "WebSocket", "JWT"],
      github: "https://github.com/BishalAdhikari0123/zombie-survival",
      live: "https://zombie-survival-zeta.vercel.app/",
      featured: true,
      year: "2026",
    },
    {
      title: "LevelUp – Skill Based Community App",
      description:
        "Full-stack platform for skill learning and participation-based leveling with gamification. Backend: Node.js, Express, Prisma ORM, PostgreSQL. Frontend: Next.js web app and React Native client. Includes real-time chat, user dashboards, and role-based access. Currently under development.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      techStack: ["Next.js", "Node.js", "Express", "Prisma", "PostgreSQL", "React Native"],
      github: "https://github.com/BishalAdhikari0123/LevelUp",
      live: "https://level-up-olive-gamma.vercel.app/eng/home",
      featured: true,
      year: "2025",
    },
    {
      title: "JokePatra – AI Powered News Portal",
      description:
        "Next.js and Supabase system that generates personalized news using AI. Implements authentication, content feed, and image storage. Features intelligent content curation and user personalization.",
      image:
        "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800",
      techStack: ["Next.js", "Supabase", "AI/ML", "TypeScript"],
      github: null,
      live: "https://joke-patra-ai-powered-news-portal.vercel.app/",
      featured: false,
      year: "2025",
    },
    {
      title: "TopCollec – Full-Stack Blog Platform",
      description:
        "Next.js blogging platform with CRUD posts, PostgreSQL backend, and role-based access. Features modern content management, responsive design, and optimized performance. Currently in progress.",
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      techStack: ["Next.js", "PostgreSQL", "TypeScript"],
      github: null,
      live: "https://top-collec-full-stack.vercel.app/",
      featured: false,
      year: "2025",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with Next.js and TailwindCSS showcasing projects and achievements. Features modern design, smooth animations, and responsive layout across all devices.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      techStack: ["Next.js", "TailwindCSS", "TypeScript"],
      github: "https://github.com/BishalAdhikari0123/Portfolio",
      live: null,
      featured: false,
      year: "2025",
    },
    {
      title: "Recipe Raid Co-op – Multiplayer Cooking Raids",
      description:
        "Multiplayer cooking raid platform with TypeScript Express backend and Next.js PWA frontend. Implements 30+ REST endpoints for raid-system, leaderboard, authentication, and photo uploads. PostgreSQL relational schema (16 tables) with Supabase storage and JWT authentication. Production-ready backend architecture with 7,700+ LOC.",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      techStack: ["TypeScript", "Express", "Next.js", "PostgreSQL", "Supabase", "JWT"],
      github: "https://github.com/BishalAdhikari0123/RecipeRaid",
      live: null,
      featured: true,
      year: "2025",
    },
    {
      title: "Bookly – E-commerce for Digital Books",
      description:
        "PHP + MySQL system for buying, reading, and managing digital books. Includes admin dashboard for content management, user authentication, and digital book delivery system.",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      techStack: ["PHP", "MySQL"],
      github: "https://github.com/lgic-project/BookComSystem",
      live: null,
      featured: false,
      year: "2024",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
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
            Featured <span className="relative inline-block">Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-8">
            A showcase of my backend development expertise and full-stack capabilities
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`glass-bw rounded-2xl overflow-hidden hover-lift group transition-all duration-300 ${project.featured
                ? "border-2 border-white/30"
                : "border border-white/10 hover:border-white/30"
                }`}
            >
              <div
                className={`grid ${project.featured ? "lg:grid-cols-2" : "md:grid-cols-3"} gap-0`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-4 py-2 bg-white text-black text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                      <Star size={16} className="fill-current" />
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 px-3 py-1 glass-bw rounded-full text-white text-sm font-semibold">
                    {project.year}
                  </div>
                </div>

                <div
                  className={`p-6 ${project.featured ? "" : "md:col-span-2"} flex flex-col justify-between`}
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm font-medium rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-200"
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
                        className="inline-flex items-center px-6 py-3 glass-bw text-white rounded-xl hover:glass-bw-strong border border-white/20 hover:border-white/40 transition-all duration-200 font-medium"
                      >
                        <Github size={18} className="mr-2" />
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
                        className="inline-flex items-center px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-all duration-200"
                      >
                        <ExternalLink size={18} className="mr-2" />
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
          <div className="inline-flex items-center px-6 py-3 glass-bw rounded-2xl border border-white/20">
            <Code className="text-white mr-3" size={24} />
            <span className="text-gray-300 font-medium">
              More projects available on my GitHub
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
