"use client";

import { motion } from "framer-motion";

export default function Community() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="container mx-auto text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-12 text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Life at VisionEngiX
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    {[
                        "Collaborative culture",
                        "Peer learning & mentorship",
                        "Open knowledge sharing",
                        "Support for beginners and professionals"
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="glass-card p-8 rounded-2xl flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span className="text-xl font-medium text-white">{item}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="inline-block px-8 py-4 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-lg font-semibold"
                >
                    Promise: No one is limited by lack of experience.
                </motion.div>
            </div>
        </div>
    );
}
