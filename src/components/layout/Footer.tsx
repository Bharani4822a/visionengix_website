import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/logo.png"
                                    alt="VisionEngiX Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold text-white">VisionEngiX</span>
                        </Link>
                        <p className="text-gray-400 max-w-md mb-6">
                            Engineering is not just about code — it’s about responsibility.
                            We are a next-generation engineering collective where technology, talent, and purpose come together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Explore</h3>
                        <ul className="space-y-4">
                            <li><Link href="/discover" className="text-gray-400 hover:text-neon-blue transition-colors">About Us</Link></li>
                            <li><Link href="/why-us" className="text-gray-400 hover:text-neon-blue transition-colors">Why VisionEngiX</Link></li>
                            <li><Link href="/pathways" className="text-gray-400 hover:text-neon-blue transition-colors">Pathways</Link></li>
                            <li><Link href="/community" className="text-gray-400 hover:text-neon-blue transition-colors">Community</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Connect</h3>
                        <ul className="space-y-4">
                            <li><Link href="/contact" className="text-gray-400 hover:text-neon-blue transition-colors">Contact Us</Link></li>
                            <li><Link href="/saas" className="text-gray-400 hover:text-neon-blue transition-colors">Careers</Link></li>
                            <li><Link href="/blogs" className="text-gray-400 hover:text-neon-blue transition-colors">Blogs</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} VisionEngiX. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
