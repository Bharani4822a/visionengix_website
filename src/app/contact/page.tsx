"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div className="text-center mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">Start Building With VisionEngiX</h1>
                    <p className="text-gray-400">Online-first presence. Connect with us anytime.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="glass-card p-8 rounded-3xl">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <MessageSquare className="text-neon-blue" /> Project Enquiry
                            </h3>
                            <form className="space-y-4">
                                <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon-blue outline-none transition-colors" />
                                <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon-blue outline-none transition-colors" />
                                <textarea placeholder="Tell us about your project" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon-blue outline-none transition-colors" />
                                <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">
                                    Send Enquiry
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="glass-card p-8 rounded-3xl">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <Mail className="text-neon-purple" /> Connect Directly
                            </h3>
                            <div className="space-y-4">
                                <button className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl transition-colors">
                                    Chat on WhatsApp
                                </button>
                                <button className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-black font-bold py-4 rounded-xl transition-colors">
                                    Internship Application
                                </button>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl text-center">
                            <p className="text-lg font-medium text-white mb-2">Let’s build something meaningful — together.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
