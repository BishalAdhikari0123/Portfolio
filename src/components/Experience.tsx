import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

const Experience: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const experience = {
        company: "BrandBuilder Pvt. Ltd.",
        position: "Backend Developer Intern",
        location: "Pokhara, Nepal",
        period: "Jan 2025 – August 2025",
        responsibilities: [
            "Developing a ride-sharing mobile app using microservice architecture and React Native.",
            "Implementing OAuth authentication, secure APIs, and modular services.",
            "Integrated map APIs and MongoDB for geolocation features.",
            "Collaborating with frontend team on real-time events and user flows.",
        ],
    };

    return (
        <section id="experience" className="py-20 bg-black relative overflow-hidden">
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
                        Professional <span className="relative inline-block">Experience
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-white"></span>
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-8">
                        Building production-ready backend systems and scalable architectures
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass-bw rounded-2xl overflow-hidden hover:glass-bw-strong hover-lift transition-all duration-300 border border-white/20">
                        <div className="bg-white p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-black mb-2">
                                        {experience.position}
                                    </h3>
                                    <div className="flex items-center text-gray-700 mb-2">
                                        <Briefcase size={18} className="mr-2" />
                                        <span className="font-medium text-lg">{experience.company}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mt-4 md:mt-0">
                                    <div className="flex items-center text-gray-700">
                                        <Calendar size={16} className="mr-2" />
                                        <span className="text-sm">{experience.period}</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <MapPin size={16} className="mr-2" />
                                        <span className="text-sm">{experience.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                <span className="w-1 h-6 bg-white mr-3 rounded-full"></span>
                                Key Responsibilities
                            </h4>
                            <ul className="space-y-4">
                                {experience.responsibilities.map((responsibility, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        className="flex items-start group"
                                    >
                                        <CheckCircle
                                            size={20}
                                            className="text-white mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                                        />
                                        <span className="text-gray-300 leading-relaxed">
                                            {responsibility}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex flex-wrap gap-2">
                                    {["Microservices", "React Native", "OAuth", "MongoDB", "REST APIs", "Geolocation"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 bg-white/5 text-gray-300 text-sm font-medium rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
