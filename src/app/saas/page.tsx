"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function SaaS() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <motion.div className="text-center mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Build Your Career With VisionEngiX</h1>
                    <p className="text-xl text-gray-400">We value mindset, curiosity, and execution over resumes.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Internship Programs", desc: "Start your journey with real-world exposure." },
                        { title: "Long-term Roles", desc: "Grow with us as we scale new heights." },
                        { title: "Learning + Earning Model", desc: "Gain skills while contributing to impact." },
                        { title: "Growth-oriented Environment", desc: "A culture that nurtures talent." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="glass-card p-8 rounded-3xl hover:bg-white/5 transition-colors group relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 mb-6">{item.desc}</p>
                            <Link href="/contact" className="flex items-center gap-2 text-neon-blue font-semibold group-hover:gap-3 transition-all">
                                Apply Now <ArrowUpRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
