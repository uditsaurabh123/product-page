"use client";
import './globals.css';
import { Shield, Download, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

// Main App Component - This would be your page in Next.js (e.g., pages/index.js)
export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation links data
    const navLinks = [
        { href: '#features', label: 'Features' },
        { href: '#about', label: 'About Us' },
        { href: '/download', label: 'Download', isButton: true },
    ];

    // Glassmorphism style class string for reuse
    const glassmorphismStyle = "bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg";

    return (
        <div className="min-h-screen w-full bg-gray-900 text-white font-sans overflow-hidden">
            {/* Background Gradient Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 md:w-96 md:h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 md:w-96 md:h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 md:w-96 md:h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Header/Navbar */}
                <header className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl mx-auto rounded-xl z-50 ${glassmorphismStyle}`}>
                    <div className="flex items-center justify-between p-4">
                        {/* Logo */}
                        <a href="#" className="flex items-center space-x-2">
                            <Shield className="h-8 w-8 text-cyan-400" />
                            <span className="text-2xl font-bold tracking-tight">Zeta Drab</span>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={
                                        link.isButton
                                            ? "flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors duration-300"
                                            : "hover:text-cyan-400 transition-colors duration-300"
                                    }
                                >
                                    <span>{link.label}</span>
                                    {link.isButton && <Download className="h-4 w-4" />}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden px-4 pb-4">
                            <nav className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className={
                                            link.isButton
                                                ? "flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold px-4 py-2 rounded-lg transition-colors duration-300"
                                                : "block text-center py-2 hover:text-cyan-400 transition-colors duration-300"
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span>{link.label}</span>
                                        {link.isButton && <Download className="h-4 w-4" />}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    )}
                </header>

                {/* Hero Section */}
                <main className="flex-grow flex items-center justify-center text-center px-4">
                    <div className={`p-8 md:p-16 rounded-2xl max-w-4xl w-full ${glassmorphismStyle}`}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4">
                            Cybersecurity for <span className="text-cyan-400">All</span>.
                        </h1>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
                            Zeta Drab delivers powerful, intuitive, and accessible security tools. We are on a mission to protect everyones digital life, from individuals to entire enterprises.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#features"
                                className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Explore Our Tools
                            </a>
                            <a
                                href="#about"
                                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="text-center p-6 text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Zeta Drab. All Rights Reserved.</p>
                </footer>
            </div>

            {/* CSS for animations */}
            <style jsx global>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
        </div>
    );
}
