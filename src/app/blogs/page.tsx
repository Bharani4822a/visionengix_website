"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Brain, Rocket } from "lucide-react";

export default function Blogs() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 relative flex flex-col items-center">
            <motion.div
                className="text-center z-10 w-full max-w-6xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                {/* Recognition Section */}
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-white">Our Recognition</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
                    {["MSME Registered", "Startup India Recognized", "Partnered Clients & Institutions", "Community Testimonials"].map((item, i) => (
                        <div key={i} className="glass-card p-6 rounded-xl border-l-4 border-l-green-500">
                            <span className="text-xl font-semibold text-white">{item}</span>
                        </div>
                    ))}
                </div>

                <p className="text-2xl text-gray-300 font-serif italic mb-20">
                    “Trust is built through consistency and delivery.”
                </p>

                {/* Technologies Section */}
                <div className="w-full">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
                        Technologies We <span className="text-neon-blue">Master</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Web Development",
                                desc: "High-performance, scalable web applications using Next.js and React.",
                                icon: <Code size={32} />
                            },
                            {
                                title: "App Development",
                                desc: "Native and cross-platform mobile solutions for iOS and Android.",
                                icon: <Smartphone size={32} />
                            },
                            {
                                title: "Artificial Intelligence",
                                desc: "Smart algorithms and ML models to automate and innovate.",
                                icon: <Brain size={32} />
                            },
                            {
                                title: "Digital Marketing",
                                desc: "Strategic growth, SEO, and branding to elevate your presence.",
                                icon: <Rocket size={32} />
                            }
                        ].map((tech, i) => (
                            <motion.div
                                key={i}
                                className="glass-card p-10 min-h-[320px] flex flex-col justify-center rounded-3xl hover:bg-white/10 transition-all duration-300 group border border-white/5 text-left"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="mb-4 p-3 bg-neon-blue/10 rounded-xl w-fit text-neon-blue group-hover:scale-110 transition-transform">
                                    {tech.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
                                <p className="text-sm text-gray-400">{tech.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
