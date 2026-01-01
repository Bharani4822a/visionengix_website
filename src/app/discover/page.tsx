"use client";

import { motion } from "framer-motion";



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

export default function Discover() {
    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <section className="pt-32 pb-20 px-4 container mx-auto text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Discover VisionEngiX
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    VisionEngiX is not just a technology company. It is an engineering community
                    built on collaboration, responsibility, and execution. Builders matter more than titles.
                    Execution matters more than noise.
                </motion.p>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-white/5">
                <motion.div
                    className="container mx-auto px-4 grid md:grid-cols-2 gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Vision */}
                    <motion.div
                        className="glass-card p-10 rounded-3xl"
                        variants={itemVariants}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-neon-blue">Vision</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            To create a global engineering community where innovation is continuous,
                            talent is respected, and technology is built with purpose and ethics.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        className="glass-card p-10 rounded-3xl"
                        variants={itemVariants}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-neon-purple">Mission</h2>
                        <ul className="space-y-4 text-gray-300">
                            {["Build scalable, future-ready digital solutions",
                                "Empower engineers through mentorship and real-world exposure",
                                "Bridge education and industry",
                                "Support startups, MSMEs, and enterprises",
                                "Create a sustainable tech ecosystem"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-purple-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </section>


        </div >
    );
}
