"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const bios = [
    {
        name: "Sudhersan G",
        role: "Founder & CEO – VisionEngiX",
        tags: ["AI", "Web Technologies", "Training & Development"],
        desc: "Sudhersan G leads VisionEngiX’s overall technology vision, product strategy, and execution. Engineer, technologist, and community builder. With over four years of experience across AI, web technologies, software systems, and training & development, he focuses on building scalable digital solutions while nurturing an engineering-driven community rooted in innovation, responsibility, and long-term impact."
    },
    {
        name: "Mohammed",
        role: "Chief Technology Officer (CTO) – VisionEngiX",
        tags: ["AI Systems Architect"],
        desc: "With five years of experience in artificial intelligence and scalable system design, Mohammed specializes in architecting AI-driven web platforms and leading high-performance engineering teams. His expertise ensures VisionEngiX delivers robust, future-ready, and performance-oriented technology solutions."
    },
    {
        name: "Sivaranjani Deepak",
        role: "Marketing Lead – VisionEngiX",
        tags: ["Marketing & Business Strategy"],
        desc: "Sivaranjani Deepak brings over four years of experience as a business consultant, alongside her role as Business Head at Aroora Industry and Managing Director of Kidz Wing. At VisionEngiX, she leads marketing strategy, brand positioning, and business growth initiatives with a strong focus on sustainability and market relevance."
    },
    {
        name: "Deepak R K",
        role: "Business Operations Lead – VisionEngiX",
        tags: ["Operations", "Finance"],
        desc: "With six years of experience in the banking sector and five years in business operations, Deepak R K oversees financial planning, operational workflows, and process optimization at VisionEngiX. His role ensures stability, transparency, and scalable operational growth across all business verticals."
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

export default function Testimonials() {
    return (
        <div className="min-h-screen pb-20">
            <section className="pt-32 pb-16 text-center px-4">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Impact & Leadership
                </motion.h1>
            </section>

            {/* What We've Built */}
            <section className="container mx-auto px-4 mb-24">
                <h2 className="text-3xl font-bold text-white mb-10 text-center">What We’ve Built</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Client platforms", "Internal tools", "Community projects", "Startup MVPs"].map((item, i) => (
                        <motion.div
                            key={i}
                            className="glass-card p-6 rounded-2xl text-center flex flex-col items-center justify-center min-h-[140px]"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span className="text-lg font-semibold text-neon-blue">{item}</span>
                        </motion.div>
                    ))}
                </div>
                <p className="text-center mt-8 text-gray-400 italic">Focus: Practical impact over showcase noise.</p>
            </section>

            {/* Behind VisionEngiX */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Behind VisionEngiX</h2>
                    <p className="text-xl text-white font-serif italic">“Engineering is not just about code — it’s about responsibility.”</p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {bios.map((person, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-8 md:p-12 rounded-3xl"
                            variants={itemVariants}
                        >
                            <div className="flex flex-col gap-6 items-start">
                                <div className="w-24 h-24 md:w-32 md:h-32 relative flex-shrink-0 rounded-full overflow-hidden border-2 border-neon-blue/30">
                                    <Image
                                        src="/avatar.svg"
                                        alt={person.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{person.name}</h3>
                                    <p className="text-neon-blue font-medium mb-3">{person.role}</p>
                                    <div className="flex gap-2 flex-wrap mb-4">
                                        {person.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300 border border-white/5">{tag}</span>
                                        ))}
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                        {person.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
}
