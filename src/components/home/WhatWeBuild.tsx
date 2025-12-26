"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Globe, GraduationCap, Rocket } from "lucide-react";

const solutions = [
    {
        icon: Code2,
        title: "Software Solutions",
        desc: "Scalable, performance-driven applications built for growth."
    },
    {
        icon: Brain,
        title: "AI & Data Engineering",
        desc: "Intelligent automation and insights to drive decisions."
    },
    {
        icon: Globe,
        title: "Web & Platform Development",
        desc: "Fast, secure, modern platforms for the digital age."
    },
    {
        icon: GraduationCap,
        title: "SaaS Training & Internships",
        desc: "Real projects, real execution. bridging the gap."
    },
    {
        icon: Rocket,
        title: "Startup & MSME Support",
        desc: "Cost-effective technology partnerships for emerging businesses."
    }
];
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
};

export function WhatWeBuild() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#030712] to-[#0b1121] relative">
            <motion.div
                className="container mx-auto px-4 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        What We Build
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From intelligent systems to educational pathways, we architect the future.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                >
                    {solutions.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            className="glass-card p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 group"
                        >
                            <div className="mb-6 inline-block p-3 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors">
                                <item.icon className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
