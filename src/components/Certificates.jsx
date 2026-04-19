import { motion } from 'framer-motion'
import { FiAward, FiCalendar, FiExternalLink, FiCheckCircle } from 'react-icons/fi'
import { SiHackthebox, SiTryhackme } from 'react-icons/si'

const certificates = [
    {
        id: 1,
        title: 'Introduction to Networking',
        issuer: 'HackTheBox Academy',
        date: '2026',
        description: 'Completed HTB Academy\'s foundational networking module covering network topologies, protocols (TCP/UDP/IPX), OSI & TCP/IP models, IP addressing, subnetting, and how hosts communicate across network structures.',
        icon: <SiHackthebox />,
        color: '#9fef00',
        credentialUrl: 'https://academy.hackthebox.com/achievement/2415476/81',
        skills: ['TCP/IP', 'OSI Model', 'Network Protocols', 'Subnetting'],
    },
    {
        id: 2,
        title: 'Networking Concepts',
        issuer: 'TryHackMe',
        date: '2026',
        description: 'Completed TryHackMe\'s Networking Concepts room covering OSI & TCP/IP models, IP addressing, subnets, routing, TCP vs UDP, and packet encapsulation with hands-on telnet exercises.',
        icon: <SiTryhackme />,
        color: '#00ff88',
        credentialUrl: 'https://tryhackme.com/room/networkingconcepts',
        skills: ['OSI Model', 'TCP/UDP', 'IP Addressing', 'Encapsulation'],
    },
    {
        id: 3,
        title: 'Intro to Networking',
        issuer: 'TryHackMe',
        date: '2025',
        description: 'Completed TryHackMe\'s Introductory Networking room covering the OSI model, TCP/IP model, three-way handshake, packets & frames, and practical use of basic networking tools.',
        icon: <SiTryhackme />,
        color: '#00d4ff',
        credentialUrl: 'https://tryhackme.com/room/introtonetworking',
        skills: ['OSI Model', 'TCP Handshake', 'Packets & Frames', 'Networking Tools'],
    },
    {
        id: 4,
        title: 'Intro to Web Application Security',
        issuer: 'TryHackMe',
        date: '2025',
        description: 'Completed TryHackMe\'s Web Application Security room covering OWASP Top 10, common vulnerabilities like IDOR and broken access control, authentication failures, and cryptographic weaknesses.',
        icon: <SiTryhackme />,
        color: '#ff6b35',
        credentialUrl: 'https://tryhackme.com/room/introwebapplicationsecurity',
        skills: ['OWASP Top 10', 'IDOR', 'Broken Access Control', 'Auth Failures'],
    },
    {
        id: 5,
        title: 'Intro to Defensive Security',
        issuer: 'TryHackMe',
        date: '2025',
        description: 'Completed TryHackMe\'s Defensive Security Intro room covering SOC operations, SIEM tools, Digital Forensics & Incident Response (DFIR), threat intelligence, and hands-on SIEM alert analysis.',
        icon: <SiTryhackme />,
        color: '#9d4edd',
        credentialUrl: 'https://tryhackme.com/room/defensivesecurityintro',
        skills: ['SOC Operations', 'SIEM', 'DFIR', 'Threat Intelligence'],
    },
]

const CertificateCard = ({ cert, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
        >
            {/* Timeline connector (for larger screens) */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-cyber-gray -translate-x-8">
                <motion.div
                    className="absolute top-8 -left-2 w-5 h-5 rounded-full border-2 bg-cyber-dark flex items-center justify-center"
                    style={{ borderColor: cert.color }}
                    whileHover={{ scale: 1.2 }}
                >
                    <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: cert.color }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </div>

            <motion.div
                className="glass rounded-2xl p-6 hover-glow relative overflow-hidden"
                whileHover={{ x: 5 }}
            >
                {/* Accent line */}
                <div
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{ backgroundColor: cert.color }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <motion.div
                            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                            style={{
                                backgroundColor: `${cert.color}20`,
                                color: cert.color
                            }}
                            whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                            {cert.icon}
                        </motion.div>
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyber-green transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-cyber-light text-sm">{cert.issuer}</p>
                        </div>
                    </div>

                    <motion.a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-light hover:text-white transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FiExternalLink className="text-xl" />
                    </motion.a>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-cyber-light text-sm mb-4">
                    <FiCalendar className="text-cyber-green" />
                    {cert.date}
                </div>

                {/* Description */}
                <p className="text-cyber-light text-sm leading-relaxed mb-4">
                    {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                        <motion.span
                            key={idx}
                            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-mono rounded-full bg-cyber-gray/50 text-cyber-light"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            whileHover={{ scale: 1.05, color: cert.color }}
                        >
                            <FiCheckCircle className="text-cyber-green" />
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

const Certificates = () => {
    return (
        <section id="certificates" className="py-32 relative overflow-hidden bg-cyber-darker/30">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `linear-gradient(90deg, #00ff88 1px, transparent 1px), linear-gradient(#00ff88 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-cyber-green font-mono text-sm tracking-wider uppercase">Achievements</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 mb-6 tracking-tight">
                        Certificates & <span className="gradient-text">Training</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyber-gradient mx-auto rounded-full mb-6" />
                    <p className="text-cyber-light max-w-2xl mx-auto">
                        Hands-on learning through platforms like HackTheBox and TryHackMe —
                        building real knowledge in networking and security, one room at a time.
                    </p>
                </motion.div>

                {/* Certificates timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-green via-cyber-cyan to-cyber-purple opacity-30" />

                    <div className="space-y-8 md:ml-16">
                        {certificates.map((cert, index) => (
                            <CertificateCard key={cert.id} cert={cert} index={index} />
                        ))}
                    </div>
                </div>

                {/* Additional info */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="inline-flex items-center gap-3 glass px-6 py-4 rounded-xl">
                        <FiAward className="text-2xl text-cyber-green" />
                        <span className="text-cyber-light">More certifications in progress...</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Certificates