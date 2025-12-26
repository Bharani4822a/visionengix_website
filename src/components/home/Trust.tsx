"use client";

import { motion } from "framer-motion";
import { Shield, Users, Leaf, Heart } from "lucide-react";

const principles = [
    {
        icon: Shield,
        title: "Ethical",
        description: "Building with integrity and purpose at every step."
    },
    {
        icon: Users,
        title: "Transparent",
        description: "Open collaboration and clear communication."
    },
    {
        icon: Leaf,
        title: "Sustainable",
        description: "Technology that lasts and respects resources."
    },
    {
        icon: Heart,
        title: "Human-centric",
        description: "Solutions designed for real people."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
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

export function Trust() {
    return (
        <section className="py-24 relative overflow-hidden">
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
                    <span className="text-neon-blue font-semibold tracking-wider uppercase text-sm mb-2 block">
                        Our Core Values
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                        Engineering With Responsibility
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                >
                    {principles.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            className="glass-card p-6 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                                <item.icon className="text-blue-400 group-hover:text-blue-300" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
