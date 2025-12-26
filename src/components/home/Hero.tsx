"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#030712]">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 max-w-7xl mx-auto">
                    {/* Left Column: Logo */}
                    <motion.div
                        className="relative w-48 h-48 md:w-80 md:h-80 flex-shrink-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Image
                            src="/logo.png"
                            alt="VisionEngiX Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                        />
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        className="text-center md:text-left max-w-2xl"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <span className="text-white">VisionEngiX</span>
                            <br />
                            <span className="text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Engineering Intelligence.
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Empowering Innovation.
                        </motion.p>

                        <motion.p
                            className="text-lg text-gray-400 mb-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            VisionEngiX is a next-generation engineering collective where technology,
                            talent, and purpose come together. We design scalable digital solutions,
                            empower engineers through real-world execution, and transform ideas into meaningful impact.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <Link
                                href="/contact"
                                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your Journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>

                            <Link
                                href="/discover"
                                className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 text-white font-medium backdrop-blur-sm transition-all hover:border-white/40"
                            >
                                Explore VisionEngiX
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
