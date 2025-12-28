"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Smartphone, Brain, Rocket } from "lucide-react";
import Image from "next/image";

const slides = [
    {
        text: "Dream is not that which you see while sleeping it is something that does not let you sleep.",
        image: "/abdul_kalam_1.jpg"
    },
    {
        text: "You have to dream before your dreams can come true.",
        image: "/abdul_kalam_2.jpg"
    },
    {
        text: "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
        image: "/abdul_kalam_3.jpg"
    },
    {
        text: "If you want to shine like a sun, first burn like a sun.",
        image: "/abdul_kalam_4.jpg"
    },
    {
        text: "To succeed in your mission, you must have single-minded devotion to your goal.",
        image: "/abdul_kalam_5.jpg"
    }
];

export default function Blogs() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

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
                <div className="w-full mb-24">
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

                {/* Inspiration Carousel */}
                <div className="w-full max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8">Inspiration</h2>
                    <div className="relative min-h-[400px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row items-center gap-24 w-full"
                            >
                                <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-full overflow-hidden border-4 border-neon-blue shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                    <Image
                                        src={slides[currentSlide].image}
                                        alt="Dr. APJ Abdul Kalam"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <p className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed">
                                        "{slides[currentSlide].text}"
                                    </p>
                                    <p className="mt-4 text-neon-blue font-bold text-lg">- Dr. APJ Abdul Kalam</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Indicators */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-neon-blue w-8" : "bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
