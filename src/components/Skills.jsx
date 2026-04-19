import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
    FiWifi, FiShield, FiCode, FiDatabase,
    FiTerminal, FiLock, FiServer, FiGlobe,
    FiCpu, FiActivity, FiZap, FiLayers
} from 'react-icons/fi'
import {
    SiPython, SiLinux, SiWireshark, SiDocker
} from 'react-icons/si'

const skillCategories = [
    {
        id: 'networking',
        title: 'Networking',
        subtitle: 'Protocols & Analysis',
        color: '#ff3366',
        icon: <FiWifi />,
        skills: [
            { name: 'TCP/IP Protocols', level: 90 },
            { name: 'Packet Analysis', level: 85 },
            { name: 'Subnetting & CIDR', level: 88 },
            { name: 'DNS & HTTP/S', level: 80 },
        ]
    },
    {
        id: 'defensive',
        title: 'Defensive Security',
        subtitle: 'Protection & Monitoring',
        color: '#00ff88',
        icon: <FiShield />,
        skills: [
            { name: 'Network Security', level: 85 },
            { name: 'Incident Response', level: 70 },
            { name: 'Traffic Monitoring', level: 82 },
            { name: 'Vulnerability Scanning', level: 75 },
        ]
    },
    {
        id: 'development',
        title: 'Development',
        subtitle: 'Building Tools',
        color: '#00d4ff',
        icon: <FiCode />,
        skills: [
            { name: 'Python', level: 88 },
            { name: 'SQL', level: 75 },
            { name: 'Web Technologies', level: 70 },
            { name: 'Scripting & Automation', level: 72 },
        ]
    },
    {
        id: 'infrastructure',
        title: 'Infrastructure',
        subtitle: 'Systems & Networks',
        color: '#9d4edd',
        icon: <FiServer />,
        skills: [
            { name: 'Linux Administration', level: 85 },
            { name: 'Docker', level: 55 },
            { name: 'Network Protocols', level: 88 },
            { name: 'Virtualization (VMs)', level: 78 },
        ]
    },
]

const tools = [
    { name: 'Nmap', icon: <FiTerminal />, color: '#00ff88' },
    { name: 'Wireshark', icon: <SiWireshark />, color: '#1679a7' },
    { name: 'Kali Linux', icon: <SiLinux />, color: '#557ebf' },
    { name: 'Python', icon: <SiPython />, color: '#3776ab' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ed' },
    { name: 'tcpdump', icon: <FiActivity />, color: '#00ff88' },
]

const learningTools = [
    { name: 'Metasploit', icon: <FiShield />, color: '#ff3366' },
    { name: 'Burp Suite', icon: <FiGlobe />, color: '#ff6b35' },
    { name: 'XSS Techniques', icon: <FiCode />, color: '#fcc624' },
    { name: 'Nessus', icon: <FiLock />, color: '#00d4ff' },
]

const SkillCard = ({ category, index, isActive, onClick }) => {
    return (
        <motion.div
            className={`relative cursor-pointer group ${isActive ? 'lg:col-span-2' : ''}`}
            onClick={onClick}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            layout
        >
            <div
                className={`h-full rounded-2xl p-8 border transition-all duration-500 ${isActive
                    ? 'glass border-opacity-50'
                    : 'bg-cyber-darker/50 border-cyber-gray/20 hover:border-opacity-40'
                    }`}
                style={{ borderColor: isActive ? category.color : undefined }}
            >
                {/* Category Number */}
                <motion.span
                    className="absolute bottom-4 right-6 font-mono text-6xl font-bold pointer-events-none select-none"
                    style={{ color: category.color, opacity: isActive ? 0.15 : 0.08 }}
                >
                    0{index + 1}
                </motion.span>

                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                    <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300"
                        style={{
                            backgroundColor: `${category.color}15`,
                            color: category.color,
                        }}
                    >
                        {category.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                        <p className="text-cyber-light text-sm">{category.subtitle}</p>
                    </div>
                </div>

                {/* Skills */}
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-4 overflow-hidden"
                        >
                            {category.skills.map((skill, idx) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="flex justify-between mb-2">
                                        <span className="text-white font-medium">{skill.name}</span>
                                        <span className="text-cyber-light font-mono text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-cyber-gray/30 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: category.color }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: idx * 0.1 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Collapsed View */}
                {!isActive && (
                    <div className="flex gap-2 flex-wrap">
                        {category.skills.slice(0, 3).map((skill, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 rounded-full text-xs font-medium"
                                style={{
                                    backgroundColor: `${category.color}15`,
                                    color: category.color,
                                }}
                            >
                                {skill.name}
                            </span>
                        ))}
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyber-gray/30 text-cyber-light">
                            +{category.skills.length - 3}
                        </span>
                    </div>
                )}

                {/* Expand Indicator */}
                <motion.div
                    className="absolute bottom-4 right-4 text-sm font-medium"
                    style={{ color: category.color }}
                    animate={{ opacity: isActive ? 0 : 1 }}
                >
                    Click to expand →
                </motion.div>
            </div>
        </motion.div>
    )
}

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('networking')
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [50, -50])

    return (
        <section id="skills" ref={containerRef} className="py-32 relative overflow-hidden bg-cyber-darker/30">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, #00ff88 1px, transparent 0)`,
                            backgroundSize: '50px 50px'
                        }}
                    />
                </div>
            </div>

            {/* Decorative Lines */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-green/20 to-transparent" style={{ left: '5%' }} />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-cyan/20 to-transparent" style={{ right: '5%' }} />

            <div className="relative z-10">
                {/* Section Header */}
                <div className="max-w-7xl mx-auto px-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <span className="text-cyber-green font-mono text-sm tracking-wider uppercase">My Expertise</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mt-4 mb-6 tracking-tight">
                            Skills & <span className="gradient-text">Arsenal</span>
                        </h2>
                        <div className="w-24 h-1 bg-cyber-gradient mx-auto rounded-full mb-6" />
                        <p className="text-cyber-light max-w-2xl mx-auto text-lg">
                            A practical toolkit built around computer networking, traffic analysis,
                            and network security — with more being added every day.
                        </p>
                    </motion.div>
                </div>

                {/* Big Statement */}
                <div className="max-w-7xl mx-auto px-6 mb-16">
                    <motion.p
                        className="text-2xl md:text-3xl font-bold text-white max-w-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        From <span className="text-cyber-red">deep network analysis</span> to{' '}
                        <span className="text-cyber-green">building security tools</span> —
                        I focus on understanding networks from the ground up.
                    </motion.p>
                </div>

                {/* Skill Categories Grid */}
                <div className="max-w-7xl mx-auto px-6 mb-24">
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        layout
                    >
                        {skillCategories.map((category, index) => (
                            <SkillCard
                                key={category.id}
                                category={category}
                                index={index}
                                isActive={activeCategory === category.id}
                                onClick={() => setActiveCategory(category.id)}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Tools Section */}
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            <FiTerminal className="inline-block mr-3 text-cyber-green" />
                            Tools of the Trade
                        </h3>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        style={{ y }}
                    >
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                className="glass px-6 py-4 rounded-2xl flex items-center gap-3 border border-cyber-gray/20 hover:border-cyber-green/50 transition-colors cursor-default group"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -3 }}
                            >
                                <span
                                    className="text-2xl transition-transform group-hover:scale-110"
                                    style={{ color: tool.color }}
                                >
                                    {tool.icon}
                                </span>
                                <span className="font-medium text-white">{tool.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Currently Learning Tools */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-16 mb-8"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                            <FiZap className="inline-block mr-3 text-cyber-cyan" />
                            Currently Learning
                        </h3>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {learningTools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                className="glass px-6 py-4 rounded-2xl flex items-center gap-3 border border-cyber-gray/20 hover:border-cyber-green/50 transition-colors cursor-default group"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -3 }}
                            >
                                <span
                                    className="text-2xl transition-transform group-hover:scale-110"
                                    style={{ color: tool.color }}
                                >
                                    {tool.icon}
                                </span>
                                <span className="font-medium text-white">{tool.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {[
                            { icon: <FiActivity />, value: '50+', label: 'Hours of Practice' },
                            { icon: <FiLayers />, value: '5+', label: 'Projects Built' },
                            { icon: <FiWifi />, value: '5+', label: 'Network Labs Completed' },
                            { icon: <FiLock />, value: '∞', label: 'Learning Never Stops' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-6 rounded-2xl bg-cyber-gray/10 border border-cyber-gray/20"
                                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 255, 136, 0.3)' }}
                            >
                                <div className="text-cyber-green text-2xl mb-3 flex justify-center">
                                    {stat.icon}
                                </div>
                                <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                                <p className="text-cyber-light text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Skills