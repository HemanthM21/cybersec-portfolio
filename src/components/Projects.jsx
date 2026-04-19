import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight, FiTerminal, FiShield, FiCode, FiFolder, FiGlobe } from 'react-icons/fi'

const projects = [
    {
        id: 1,
        title: 'ARP Spoofing + MITM Attack',
        subtitle: 'Network Security / Red & Blue Team Lab',
        description: 'Hands-on home lab project demonstrating a Man-in-the-Middle attack using ARP Spoofing on Kali Linux. Intercepted HTTP, FTP credentials, and DNS queries via Wireshark — covering both attacker execution and defender detection.',
        tech: ['Kali Linux', 'Wireshark', 'arpspoof', 'Metasploitable 2'],
        github: 'https://github.com/HemanthM21/ARP-Spoofing-MITM-Project',
        demo: 'https://www.loom.com/share/f512145461df41cfadc5b47036e1eea0',
        icon: <FiCode />,
        color: '#9d4edd',
        image: null,
    },
    {
        id: 2,
        title: 'Advanced Port Scanner',
        subtitle: 'Network Reconnaissance Tool',
        description: 'A high-performance, multi-threaded port scanner built with Python. Features include service detection, OS fingerprinting, and customizable scan profiles.',
        tech: ['Python', 'Socket', 'Threading', 'Nmap'],
        github: 'https://github.com/HemanthM21/port-scanner',
        demo: 'https://github.com/HemanthM21/port-scanner/blob/main/README.md',
        icon: <FiTerminal />,
        color: '#00ff88',
        image: null, // Add your project screenshot path here
    },
    {
        id: 3,
        title: 'Subnet Calculator',
        subtitle: 'IPv4 Subnet & CIDR Calculator',
        description: 'Interactive web tool for instant IPv4 subnet calculations. Calculate network addresses, IP ranges, usable hosts, and CIDR notation with a beautiful UI.',
        tech: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
        github: 'https://github.com/HemanthM21/Subnet-Calculator',
        demo: 'https://subnet-calculator-one.vercel.app/',
        icon: <FiGlobe />,
        color: '#06b6d4',
        image: null,
    },
    {
        id: 4,
        title: 'Vulnerability Scanner',
        subtitle: 'Automated Security Assessment',
        description: 'Automated vulnerability assessment tool that identifies common security weaknesses including SQL injection, XSS, and CSRF vulnerabilities.',
        tech: ['Python', 'BeautifulSoup', 'Requests', 'SQLMap'],
        github: 'https://github.com/yourusername/vuln-scanner',
        demo: '#',
        icon: <FiShield />,
        color: '#ff3366',
        image: null,
    },
    {
        id: 5,
        title: 'Secure File Encryptor',
        subtitle: 'End-to-End Encryption',
        description: 'End-to-end file encryption tool using AES-256. Features include secure key generation, file integrity verification, and cross-platform support.',
        tech: ['Python', 'Cryptography', 'AES-256', 'SHA-256'],
        github: 'https://github.com/yourusername/file-encryptor',
        demo: 'https://share.google/sBQ46WF4l7SoK3lof',
        icon: <FiFolder />,
        color: '#fcc624',
        image: null,
    },
]

// Individual Project Row Component - Full Width Cinematic Style
const ProjectRow = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false)
    const rowRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: rowRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    const isEven = index % 2 === 0

    return (
        <motion.div
            ref={rowRef}
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ opacity }}
        >
            {/* Full-width project container */}
            <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {/* Background gradient on hover */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        background: `linear-gradient(${isEven ? '135deg' : '225deg'}, ${project.color}08, transparent 70%)`
                    }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                />

                {/* Main content container */}
                <div className={`relative z-10 py-16 md:py-24 px-6 md:px-16 lg:px-24 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 border-b border-cyber-gray/20`}>

                    {/* Project Number & Icon */}
                    <motion.div
                        className="flex-shrink-0 relative"
                        style={{ y }}
                    >
                        {/* Project number - positioned above icon */}
                        <motion.span
                            className="block font-mono text-6xl md:text-7xl font-bold mb-4 select-none"
                            style={{ color: project.color, opacity: isHovered ? 0.4 : 0.15 }}
                            animate={{ scale: isHovered ? 1.05 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            0{index + 1}
                        </motion.span>

                        <div
                            className="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center relative overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
                                border: `1px solid ${project.color}30`
                            }}
                        >
                            {/* Animated glow */}
                            <motion.div
                                className="absolute inset-0"
                                style={{ background: `radial-gradient(circle at center, ${project.color}30, transparent 70%)` }}
                                animate={{ scale: isHovered ? [1, 1.2, 1] : 1, opacity: isHovered ? [0.5, 1, 0.5] : 0.3 }}
                                transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
                            />
                            <span className="text-4xl md:text-5xl relative z-10" style={{ color: project.color }}>
                                {project.icon}
                            </span>
                        </div>
                    </motion.div>

                    {/* Project info */}
                    <div className={`flex-grow ${isEven ? 'text-left' : 'md:text-right'}`}>
                        {/* Subtitle */}
                        <motion.p
                            className="text-sm font-mono uppercase tracking-wider mb-2"
                            style={{ color: project.color }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            {project.subtitle}
                        </motion.p>

                        {/* Title */}
                        <motion.h3
                            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white transition-colors duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="inline-block relative">
                                {project.title}
                                {/* Animated underline */}
                                <motion.span
                                    className="absolute bottom-0 left-0 h-1 rounded-full"
                                    style={{ backgroundColor: project.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: isHovered ? '100%' : 0 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </span>
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                            className="text-cyber-light text-lg max-w-2xl mb-6 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            {project.description}
                        </motion.p>

                        {/* Tech stack */}
                        <motion.div
                            className={`flex flex-wrap gap-3 mb-6 ${isEven ? '' : 'md:justify-end'}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            {project.tech.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 text-sm font-mono rounded-full border transition-all duration-300"
                                    style={{
                                        borderColor: isHovered ? project.color : 'rgba(255,255,255,0.1)',
                                        color: isHovered ? project.color : '#94a3b8',
                                        backgroundColor: isHovered ? `${project.color}10` : 'transparent'
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        {/* Links */}
                        <motion.div
                            className={`flex items-center gap-6 ${isEven ? '' : 'md:justify-end'}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-cyber-light hover:text-white transition-colors"
                                whileHover={{ x: 5 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <FiGithub className="text-xl" />
                                <span className="font-medium">View Code</span>
                            </motion.a>

                            <motion.span
                                className="flex items-center gap-2 font-medium"
                                style={{ color: project.color }}
                                animate={{ x: isHovered ? 10 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                View Project
                                <FiArrowRight className="text-xl" />
                            </motion.span>
                        </motion.div>
                    </div>

                    {/* Floating arrow indicator */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                            >
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: project.color }}
                                >
                                    <FiExternalLink className="text-2xl text-cyber-dark" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.a>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker/50 via-transparent to-cyber-darker/50" />

            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />
            </div>

            <div className="relative z-10">
                {/* Section header */}
                <div className="max-w-7xl mx-auto px-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <span className="text-cyber-green font-mono text-sm tracking-wider uppercase">My Work</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mt-4 mb-6 tracking-tight">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <div className="w-24 h-1 bg-cyber-gradient mx-auto rounded-full mb-6" />
                        <p className="text-cyber-light max-w-2xl mx-auto text-lg">
                            Security tools and projects built to explore vulnerabilities,
                            analyze networks, and strengthen digital defenses.
                        </p>
                    </motion.div>
                </div>

                {/* Projects list - Full width rows */}
                <div className="relative">
                    {/* Decorative line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-green/20 to-transparent hidden md:block" style={{ left: '10%' }} />
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-cyan/20 to-transparent hidden md:block" style={{ right: '10%' }} />

                    {projects.map((project, index) => (
                        <ProjectRow key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    className="max-w-7xl mx-auto px-6 mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <motion.a
                        href="https://github.com/HemanthM21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 px-10 py-5 glass rounded-2xl text-cyber-green font-medium text-lg hover-glow group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FiGithub className="text-2xl" />
                        <span>View All Projects on GitHub</span>
                        <motion.span
                            className="group-hover:translate-x-2 transition-transform"
                        >
                            <FiArrowRight className="text-xl" />
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
