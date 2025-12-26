"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Discover", href: "/discover" },
    { name: "Why Us", href: "/why-us" },
    { name: "Pathways", href: "/pathways" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Community", href: "/community" },
    { name: "SaaS", href: "/saas" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "glass-nav py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">

                    <span className="text-xl font-bold tracking-tight text-white">
                        VisionEngiX
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-neon-blue",
                                pathname === item.href ? "text-neon-blue" : "text-gray-300"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
                    >
                        Start Building
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 lg:hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium transition-colors hover:text-neon-blue",
                                        pathname === item.href ? "text-neon-blue" : "text-gray-300"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 text-center px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
                            >
                                Start Building
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
