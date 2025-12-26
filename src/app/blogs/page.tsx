"use client";

import { motion } from "framer-motion";

export default function Blogs() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 relative flex flex-col items-center justify-center">
            <motion.div
                className="text-center z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-white">Our Recognition</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
                    {["MSME Registered", "Startup India Recognized", "Partnered Clients & Institutions", "Community Testimonials"].map((item, i) => (
                        <div key={i} className="glass-card p-6 rounded-xl border-l-4 border-l-green-500">
                            <span className="text-xl font-semibold text-white">{item}</span>
                        </div>
                    ))}
                </div>

                <p className="text-2xl text-gray-300 font-serif italic">
                    “Trust is built through consistency and delivery.”
                </p>
            </motion.div>
        </div>
    );
}
