import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award, Sparkles } from "lucide-react";

const Education: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const education = [
        {
            institution: "LA GRANDEE International College",
            degree: "Bachelor of Computer Applications (BCA)",
            location: "Pokhara, Nepal",
            period: "2021 – 2025 (Expected)",
            icon: "🎓",
        },
        {
            institution: "Kalika Secondary College",
            degree: "Science Stream",
            location: "Pokhara, Nepal",
            period: "2019 – 2021",
            grade: "CGPA: 2.72",
            icon: "📚",
        },
        {
            institution: "Good Shepherd English School",
            degree: "SEE (Secondary Education Examination)",
            location: "Pokhara, Nepal",
            period: "2009 – 2019",
            grade: "CGPA: 3.55",
            icon: "🏫",
        },
    ];

    const certifications = [
        {
            title: "Node.js with Express & MongoDB",
            issuer: "BrandBuilder",
            year: "2024",
            icon: "💻",
        },
        {
            title: "Basic Computer Course",
            issuer: "Sega, Pokhara",
            year: "2021",
            icon: "🖥️",
        },
    ];

    return (
        <section id="education" className="py-20 bg-black relative overflow-hidden">
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
                        Education & <span className="relative inline-block">Certifications
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-8">
                        Academic background and professional certifications
                    </p>
                </motion.div>

                {/* Education Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
                        <GraduationCap className="mr-3 text-white" size={32} />
                        Academic Journey
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.institution}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="glass-bw rounded-2xl overflow-hidden hover:glass-bw-strong hover-lift transition-all duration-300 group border border-white/10 hover:border-white/30"
                            >
                                <div className="bg-white p-4 text-center">
                                    <div className="text-5xl mb-2">{edu.icon}</div>
                                    <div className="flex items-center justify-center text-gray-700 text-sm">
                                        <Calendar size={14} className="mr-1" />
                                        {edu.period}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
                                        {edu.institution}
                                    </h4>
                                    <p className="text-gray-300 font-medium mb-2">{edu.degree}</p>
                                    <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                                    {edu.grade && (
                                        <div className="mt-3 pt-3 border-t border-white/10">
                                            <div className="inline-flex items-center px-3 py-1 bg-white/10 text-white rounded-full text-sm font-semibold border border-white/20">
                                                <Award size={14} className="mr-1" />
                                                {edu.grade}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
                        <Award className="mr-3 text-white" size={32} />
                        Professional Certifications
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                                className="glass-bw rounded-2xl p-6 hover:glass-bw-strong hover-lift transition-all duration-300 group border-2 border-white/20 hover:border-white/40"
                            >
                                <div className="flex items-start">
                                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-200">
                                        {cert.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
                                            {cert.title}
                                        </h4>
                                        <p className="text-gray-300 font-medium mb-1">{cert.issuer}</p>
                                        <div className="inline-flex items-center px-3 py-1 bg-white/10 text-white rounded-full text-sm font-semibold mt-2 border border-white/20">
                                            <Calendar size={14} className="mr-1" />
                                            {cert.year}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Currently Exploring */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-white rounded-2xl p-8 shadow-glow-strong max-w-3xl hover-scale transition-all duration-300">
                        <h4 className="text-2xl font-bold text-black mb-4 flex items-center justify-center">
                            <Sparkles className="mr-3" size={28} />
                            Currently Exploring
                        </h4>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Advanced TypeScript backend patterns, PostgreSQL optimization, and scalable real-time architectures
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
