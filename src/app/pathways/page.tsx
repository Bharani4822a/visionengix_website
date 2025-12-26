"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, Cpu, ShieldCheck, Zap } from "lucide-react";

const tracks = [
    {
        title: "Foundation Engineering Track",
        icon: BookOpen,
        desc: "Master the core principles of computer science, algorithms, and problem-solving to build a strong engineering base."
    },
    {
        title: "Full-Stack & System Design Track",
        icon: Code,
        desc: "Build scalable end-to-end applications and understand complex system architectures for modern web development."
    },
    {
        title: "AI & Data Engineering Track",
        icon: Cpu,
        desc: "Dive into intelligent systems, machine learning pipelines, and big data processing to drive automation."
    },
    {
        title: "Cyber & Security Track",
        icon: ShieldCheck,
        desc: "Learn to secure digital infrastructures, understand vulnerabilities, and implement robust defense mechanisms."
    },
    {
        title: "Product Engineering Track",
        icon: Zap,
        desc: "Bridge the gap between code and user value by focusing on product lifecycle, UX, and agile execution."
    },
];

export default function Pathways() {
    return (
        <div className="min-h-screen pb-20">
            <section className="pt-32 pb-16 text-center px-4">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-4 text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Engineering Pathways
                </motion.h1>
                <motion.p
                    className="text-xl text-white font-medium mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Learn • Build • Deploy
                </motion.p>
            </section>

            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid gap-6">
                    {tracks.map((track, i) => (
                        <motion.div
                            key={i}
                            className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-white/10 transition-all cursor-pointer group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="p-4 bg-blue-600/20 rounded-xl group-hover:bg-blue-600/30 transition-colors flex-shrink-0">
                                <track.icon className="text-blue-400" size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-200 group-hover:text-white mb-2">{track.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{track.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 text-center glass-card p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 to-purple-900/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-2">Purpose</h3>
                    <p className="text-gray-300 text-lg">
                        Transform learners into engineers through execution, not theory.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
