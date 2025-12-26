"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
    return (
        <div className="min-h-screen pb-20">
            <section className="pt-32 pb-16 px-4 container mx-auto text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Why VisionEngiX?
                </motion.h1>
            </section>

            {/* What Makes Us Different */}
            <section className="py-10 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        "Community-driven engineering model",
                        "Real-world project execution",
                        "Long-term system thinking",
                        "Industry-aligned skill development",
                        "Transparent processes and ethics",
                        "Human-centric engineering culture"
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-4 p-6 glass-card rounded-xl"
                        >
                            <CheckCircle2 className="text-neon-green" size={24} />
                            <span className="text-lg font-medium text-gray-200">{item}</span>
                        </motion.div>
                    ))}
                </div>

                {/* What We Do */}
                <div className="space-y-16">
                    <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Engineering & Software Solutions",
                                items: ["Custom web and app development", "Backend systems & APIs", "AI/ML applications", "Automation & integrations", "Scalable architectures", "ERP / CRM systems"]
                            },
                            {
                                title: "Digital Growth & Online Presence",
                                items: ["High-performance websites", "SEO & organic growth", "Digital marketing", "Analytics & optimization"]
                            },
                            {
                                title: "SaaS Training, Internships & Mentorship",
                                items: ["Industry-oriented programs", "Internship-driven learning", "Project-based mentorship", "Career guidance"]
                            },
                            {
                                title: "Marketing",
                                items: ["Campaign strategy", "SEO & content marketing", "Social media management", "Performance tracking"]
                            },
                            {
                                title: "Outsourcing",
                                items: ["Project-based outsourcing", "Dedicated resources", "Workflow optimization", "Flexible engagement models"]
                            },
                            {
                                title: "Startup & MSME Support",
                                items: ["MVP development", "Technology consulting", "Cost-effective solutions", "Long-term partnerships"]
                            }
                        ].map((category, idx) => (
                            <motion.div
                                key={idx}
                                className="glass-card p-8 rounded-3xl border-l-4 border-l-neon-blue"
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                            >
                                <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {category.items.map((item, k) => (
                                        <li key={k} className="text-gray-400 text-sm flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
