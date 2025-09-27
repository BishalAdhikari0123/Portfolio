import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "PHP", "C", "C++", "SQL", "NoSQL"],
      color: "from-accent-500 to-accent-700"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Fastify", "Prisma", "Sequelize", "Mongoose"],
      color: "from-secondary-500 to-secondary-700"
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "React Native", "Expo"],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
      color: "from-emerald-500 to-emerald-700"
    },
    {
      title: "Tools & APIs",
      skills: ["REST APIs", "WebSocket", "OAuth", "JWT", "Git", "Postman", "pgAdmin", "MongoDB Compass", "Bruno"],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      title: "Deployment",
      skills: ["GitHub Pages", "Cloudflare", "Render", "Vercel"],
      color: "from-orange-500 to-orange-700"
    },
    {
      title: "Architecture",
      skills: ["Microservices", "MVC", "Modular Design"],
      color: "from-pink-500 to-pink-700"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="bg-gradient-to-r from-accent-600 to-secondary-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 group"
            >
              <div className={`h-1 bg-gradient-to-r ${category.color} group-hover:h-2 transition-all duration-300`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-display">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200 hover:border-accent-300 hover:bg-accent-50 hover:text-accent-700 transition-all duration-200 font-mono text-xs"
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