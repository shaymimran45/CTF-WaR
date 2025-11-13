"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function LearnPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = [
        { id: "all", name: "All Topics", icon: "🎯" },
        { id: "basics", name: "CTF Basics", icon: "📚" },
        { id: "web", name: "Web Exploitation", icon: "🌐" },
        { id: "crypto", name: "Cryptography", icon: "🔐" },
        { id: "forensics", name: "Forensics", icon: "🔍" },
        { id: "pwn", name: "Binary Exploitation", icon: "💣" },
        { id: "reversing", name: "Reverse Engineering", icon: "⚙️" },
        { id: "tools", name: "Essential Tools", icon: "🛠️" },
    ];

    const learningResources = [
        {
            id: 1,
            category: "basics",
            title: "Introduction to CTF Competitions",
            description: "Learn the fundamentals of Capture The Flag competitions and how to get started",
            videoUrl: "https://www.youtube.com/watch?v=8ev9ZX9J45A",
            channel: "John Hammond",
            duration: "15:30",
            difficulty: "Beginner",
            topics: ["CTF Basics", "Getting Started", "Competition Format"],
        },
        {
            id: 2,
            category: "web",
            title: "Web Application Hacking Full Course",
            description: "Complete guide to web security testing and common vulnerabilities",
            videoUrl: "https://www.youtube.com/watch?v=X4eRbHgRawI",
            channel: "The Cyber Mentor",
            duration: "2:45:00",
            difficulty: "Intermediate",
            topics: ["SQL Injection", "XSS", "CSRF", "IDOR"],
        },
        {
            id: 3,
            category: "crypto",
            title: "Cryptography for Hackers",
            description: "Understanding encryption, hashing, and breaking weak crypto",
            videoUrl: "https://www.youtube.com/watch?v=jhXCTbFnK8o",
            channel: "LiveOverflow",
            duration: "45:20",
            difficulty: "Intermediate",
            topics: ["Encryption", "Hashing", "RSA", "AES"],
        },
        {
            id: 4,
            category: "forensics",
            title: "Digital Forensics Tutorial",
            description: "Learn how to analyze files, memory dumps, and network captures",
            videoUrl: "https://www.youtube.com/watch?v=kGYQ7VN6VHE",
            channel: "HackerSploit",
            duration: "55:15",
            difficulty: "Intermediate",
            topics: ["File Analysis", "Steganography", "Memory Forensics"],
        },
        {
            id: 5,
            category: "pwn",
            title: "Buffer Overflow Exploitation",
            description: "Master binary exploitation techniques and memory corruption",
            videoUrl: "https://www.youtube.com/watch?v=1S0aBV-Waeo",
            channel: "Gynvael Coldwind",
            duration: "1:30:45",
            difficulty: "Advanced",
            topics: ["Buffer Overflow", "Shellcode", "Stack Smashing"],
        },
        {
            id: 6,
            category: "reversing",
            title: "Reverse Engineering Basics",
            description: "Introduction to analyzing binaries with Ghidra and IDA",
            videoUrl: "https://www.youtube.com/watch?v=gh2RXE9BIN8",
            channel: "Guided Hacking",
            duration: "1:15:30",
            difficulty: "Intermediate",
            topics: ["Ghidra", "IDA Pro", "Assembly", "Debugging"],
        },
        {
            id: 7,
            category: "basics",
            title: "PicoCTF Walkthrough Series",
            description: "Complete beginner-friendly CTF challenges step by step",
            videoUrl: "https://www.youtube.com/watch?v=7Ebq6qWNgxU",
            channel: "Martin Carlisle",
            duration: "25:40",
            difficulty: "Beginner",
            topics: ["PicoCTF", "Beginner Challenges", "Problem Solving"],
        },
        {
            id: 8,
            category: "tools",
            title: "Essential Hacking Tools Tutorial",
            description: "Learn Burp Suite, Wireshark, Metasploit, and more",
            videoUrl: "https://www.youtube.com/watch?v=qJJE4M4jkPk",
            channel: "NetworkChuck",
            duration: "1:05:20",
            difficulty: "Beginner",
            topics: ["Burp Suite", "Wireshark", "Metasploit", "Nmap"],
        },
    ];

    const tools = [
        {
            name: "Burp Suite",
            description: "Web application security testing platform",
            url: "https://portswigger.net/burp",
            category: "Web",
            icon: "🌐",
        },
        {
            name: "Ghidra",
            description: "Free reverse engineering tool by NSA",
            url: "https://ghidra-sre.org/",
            category: "Reversing",
            icon: "⚙️",
        },
        {
            name: "Wireshark",
            description: "Network protocol analyzer",
            url: "https://www.wireshark.org/",
            category: "Forensics",
            icon: "🔍",
        },
        {
            name: "John the Ripper",
            description: "Password cracking tool",
            url: "https://www.openwall.com/john/",
            category: "Crypto",
            icon: "🔐",
        },
        {
            name: "pwntools",
            description: "CTF framework for binary exploitation",
            url: "https://github.com/Gallopsled/pwntools",
            category: "Pwn",
            icon: "💣",
        },
        {
            name: "CyberChef",
            description: "Web app for encryption, encoding, and data analysis",
            url: "https://gchq.github.io/CyberChef/",
            category: "Crypto",
            icon: "🔐",
        },
        {
            name: "Radare2",
            description: "Unix-like reverse engineering framework",
            url: "https://rada.re/",
            category: "Reversing",
            icon: "⚙️",
        },
        {
            name: "sqlmap",
            description: "Automatic SQL injection tool",
            url: "https://sqlmap.org/",
            category: "Web",
            icon: "🌐",
        },
    ];

    const filteredResources = activeCategory === "all"
        ? learningResources
        : learningResources.filter(r => r.category === activeCategory);

    return (
        <div className="min-h-screen bg-black text-green-400 relative">
            {/* Scan Line Effect */}
            <div className="scan-line"></div>

            {/* Matrix Background */}
            <div className="matrix-bg"></div>

            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4 neon-green terminal-cursor">
                        [LEARN] CTF KNOWLEDGE BASE
                    </h1>
                    <p className="text-xl text-green-300">
                        Master cybersecurity through video tutorials and hands-on practice
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-3 font-bold uppercase tracking-wider transition-all ${activeCategory === cat.id
                                    ? "bg-green-500 text-black shadow-lg shadow-green-500/50"
                                    : "bg-gray-900 text-green-400 border-2 border-green-500 hover:bg-green-500 hover:text-black"
                                }`}
                        >
                            {cat.icon} {cat.name}
                        </button>
                    ))}
                </div>

                {/* Video Tutorials */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 neon-blue flex items-center">
                        <span className="mr-3">📺</span> VIDEO TUTORIALS
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredResources.map((resource) => (
                            <div
                                key={resource.id}
                                className="cyber-card p-6 hover:shadow-2xl hover:shadow-green-500/30 transition-all group"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <span className={`px-3 py-1 text-xs font-bold uppercase ${resource.difficulty === "Beginner"
                                            ? "bg-green-500 text-black"
                                            : resource.difficulty === "Intermediate"
                                                ? "bg-yellow-500 text-black"
                                                : "bg-red-500 text-white"
                                        }`}>
                                        {resource.difficulty}
                                    </span>
                                    <span className="text-green-300 text-sm">{resource.duration}</span>
                                </div>

                                <h3 className="text-xl font-bold text-green-400 mb-2 group-hover:text-green-300">
                                    {resource.title}
                                </h3>

                                <p className="text-green-300 text-sm mb-3 opacity-80">
                                    {resource.description}
                                </p>

                                <div className="mb-3">
                                    <p className="text-blue-400 text-sm font-semibold mb-2">📺 {resource.channel}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {resource.topics.slice(0, 3).map((topic, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-2 py-1 bg-gray-900 text-green-400 border border-green-500"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={resource.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cyber-button w-full text-center block mt-4"
                                >
                                    🎬 WATCH NOW
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Essential Tools */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 neon-red flex items-center">
                        <span className="mr-3">🛠️</span> ESSENTIAL TOOLS
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tools.map((tool, idx) => (
                            <div
                                key={idx}
                                className="cyber-card p-6 hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
                            >
                                <div className="text-4xl mb-3">{tool.icon}</div>
                                <h3 className="text-xl font-bold text-green-400 mb-2">{tool.name}</h3>
                                <p className="text-green-300 text-sm mb-3 opacity-80">
                                    {tool.description}
                                </p>
                                <span className="inline-block text-xs px-3 py-1 bg-blue-900 text-blue-300 mb-3">
                                    {tool.category}
                                </span>
                                <a
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-2 bg-gray-900 text-green-400 border-2 border-green-500 hover:bg-green-500 hover:text-black transition-all font-bold uppercase"
                                >
                                    DOWNLOAD
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Resources */}
                <div className="mt-16 cyber-card p-8">
                    <h2 className="text-3xl font-bold mb-6 neon-green">📚 MORE RESOURCES</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <a
                            href="https://ctftime.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-card p-6 hover:shadow-xl hover:shadow-green-500/30 transition-all text-center"
                        >
                            <h3 className="text-xl font-bold text-green-400 mb-2">CTFtime</h3>
                            <p className="text-sm text-green-300">Upcoming CTF competitions and rankings</p>
                        </a>
                        <a
                            href="https://www.hackthebox.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-card p-6 hover:shadow-xl hover:shadow-green-500/30 transition-all text-center"
                        >
                            <h3 className="text-xl font-bold text-green-400 mb-2">Hack The Box</h3>
                            <p className="text-sm text-green-300">Practice penetration testing skills</p>
                        </a>
                        <a
                            href="https://tryhackme.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cyber-card p-6 hover:shadow-xl hover:shadow-green-500/30 transition-all text-center"
                        >
                            <h3 className="text-xl font-bold text-green-400 mb-2">TryHackMe</h3>
                            <p className="text-sm text-green-300">Guided cybersecurity learning paths</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
