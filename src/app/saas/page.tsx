"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cloud, Globe, Database, Layers, Users as UsersIcon, BarChart as BarChartIcon } from "lucide-react";
import Link from "next/link";

export default function SaaS() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Original Career Section */}
                <motion.div className="text-center mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Build Your Career With VisionEngiX</h1>
                    <p className="text-xl text-gray-400">We value mindset, curiosity, and execution over resumes.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
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

                {/* Divider/Spacing */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

                {/* What is SaaS Section */}
                <motion.div
                    className="mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            <span className="text-neon-blue">SaaS</span> Solutions
                        </h2>
                        <p className="text-lg text-gray-400">Understanding the power of cloud-based delivery.</p>
                    </div>

                    <div className="glass-card p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg">
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-white mb-6">What is SaaS?</h3>
                                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                                    Software as a Service (SaaS) is a cloud-based software distribution model where a cloud provider hosts applications and makes them available to end users over the internet.
                                </p>
                                <p className="text-lg text-gray-400 leading-relaxed">
                                    Instead of installing and maintaining software, you simply access it via the Internet, freeing yourself from complex software and hardware management.
                                </p>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <Cloud className="w-48 h-48 text-neon-blue opacity-80" strokeWidth={1} />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Where We Use SaaS Section */}
                <div className="mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        Where We Use SaaS
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Enterprise Resource Planning",
                                desc: "Integrated management of main business processes, often in real-time.",
                                icon: <Layers size={32} />
                            },
                            {
                                title: "CRM Systems",
                                desc: "Managing interactions with current and potential customers.",
                                icon: <Globe size={32} />
                            },
                            {
                                title: "Cloud Platforms",
                                desc: "Custom scalable platforms for data storage and processing.",
                                icon: <Database size={32} />
                            },
                            {
                                title: "Collaboration Tools",
                                desc: "Seamless communication and project management for distributed teams.",
                                icon: <UsersIcon size={32} />
                            },
                            {
                                title: "Analytics Dashboards",
                                desc: "Real-time data visualization for informed decision making.",
                                icon: <BarChartIcon size={32} />
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="glass-card p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group relative overflow-hidden border border-white/5"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="mb-6 p-4 bg-neon-blue/10 rounded-2xl w-fit text-neon-blue group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 mb-6">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
