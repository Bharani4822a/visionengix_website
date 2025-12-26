"use client";

import { motion } from "framer-motion";

const groups = [
    "Startups",
    "MSMEs",
    "Enterprises",
    "Students",
    "Professionals"
];

export function WhoWeWorkWith() {
    return (
        <section className="py-20 border-t border-white/5 bg-[#030712]">
            <div className="container mx-auto px-4 text-center">
                <motion.h3
                    className="text-2xl font-semibold text-gray-300 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Who We Work With
                </motion.h3>

                <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                    {groups.map((group, index) => (
                        <motion.div
                            key={group}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <span className="text-xl md:text-3xl font-bold text-gray-600 group-hover:text-white transition-colors cursor-default">
                                {group}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
