import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "PHP", "C", "C++", "SQL", "NoSQL"],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Fastify",
        "Prisma",
        "Supabase",
        "Mongoose",
      ],
    },
    {
      title: "Frontend",
      skills: ["Next.js", "React", "React Native", "TailwindCSS"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "Supabase", "MongoDB", "MySQL"],
    },
    {
      title: "Tools & APIs",
      skills: [
        "REST APIs",
        "WebSocket",
        "OAuth",
        "JWT",
        "Git",
        "Postman",
        "pgAdmin",
        "MongoDB Compass",
      ],
    },
    {
      title: "Deployment",
      skills: ["Vercel", "Render", "Railway", "GitHub Pages"],
    },
    {
      title: "Architecture",
      skills: ["Microservices", "Modular Design", "MVC"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-black relative overflow-hidden"
    >
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
            Technical <span className="relative inline-block">Skills
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-8">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-bw rounded-2xl overflow-hidden hover:glass-bw-strong hover-lift transition-all duration-300 group border border-white/10 hover:border-white/30"
            >
              <div className="h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all duration-200 cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
