import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiTerminal, FiShield, FiTarget, FiCode, FiAward, FiCpu } from 'react-icons/fi'

const highlights = [
    { icon: <FiShield />, label: 'Security First', value: 'Mindset' },
    { icon: <FiTarget />, label: 'Network Projects', value: '5+' },
    { icon: <FiCode />, label: 'Tools Built', value: '4+ Built' },
    { icon: <FiAward />, label: 'Certifications', value: 'In Progress' },
]

const About = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    return (
        <section id="about" ref={containerRef} className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-gray/10 to-transparent" />

            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}
                />
            </div>

            <div className="relative z-10">
                {/* Section Header - Full Width */}
                <div className="max-w-7xl mx-auto px-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <span className="text-cyber-green font-mono text-sm tracking-wider uppercase">Who I Am</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mt-4 mb-6 tracking-tight">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-cyber-gradient mx-auto rounded-full" />
                    </motion.div>
                </div>

                {/* Main Content - Editorial Layout */}
                <div className="max-w-7xl mx-auto px-6">
                    {/* Big Statement */}
                    <motion.div
                        className="mb-24"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.p
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-5xl"
                            style={{ y: y2 }}
                        >
                            I'm a <span className="gradient-text">Computer Science student</span> with a deep passion for{' '}
                            <span className="text-cyber-cyan">computer networks</span> and{' '}
                            <span className="text-cyber-green">cyber security</span>.
                        </motion.p>
                    </motion.div>

                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Left Column - Story */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Terminal Card */}
                            <div className="glass rounded-2xl p-6 border border-cyber-green/20">
                                <div className="flex items-center gap-2 mb-4">
                                    <FiTerminal className="text-cyber-green text-lg" />
                                    <span className="text-cyber-light text-sm font-mono">about.sh</span>
                                </div>
                                <div className="font-mono text-sm space-y-2">
                                    <p className="text-cyber-light">
                                        <span className="text-cyber-green">$</span> whoami
                                    </p>
                                    <p className="text-white pl-4">networking_and_security_enthusiast</p>
                                    <p className="text-cyber-light mt-3">
                                        <span className="text-cyber-green">$</span> cat mission.txt
                                    </p>
                                    <p className="text-white pl-4">Understanding networks deeply,</p>
                                    <p className="text-white pl-4">building tools that matter.</p>
                                    <p className="text-cyber-light mt-3">
                                        <span className="text-cyber-green">$</span> echo $FOCUS
                                    </p>
                                    <p className="text-cyber-cyan pl-4">Computer Networks | Cyber Security | Python</p>
                                </div>
                            </div>

                            {/* Story paragraphs */}
                            <div className="space-y-6">
                                <motion.p
                                    className="text-lg text-cyber-light leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    My journey began with curiosity about how data travels across networks —
                                    how packets are routed, intercepted, and analyzed. That curiosity grew into a
                                    <span className="text-white font-medium"> deep understanding of networking protocols</span> and how they can be leveraged or exploited.
                                </motion.p>

                                <motion.p
                                    className="text-lg text-cyber-light leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Today, I work with tools like Wireshark, Nmap, and tcpdump to analyze
                                    real network traffic, and I build Python-based networking tools and security
                                    projects. I believe in
                                    <span className="text-cyber-green font-medium"> learning by building and breaking things</span> in a safe, ethical environment.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Right Column - Stats & Highlights */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ y: y1 }}
                        >
                            {/* Highlight Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                {highlights.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="glass rounded-2xl p-6 border border-cyber-gray/30 hover:border-cyber-green/50 transition-all duration-300 group cursor-default"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                    >
                                        <div className="text-cyber-green text-3xl mb-4 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
                                        <p className="text-cyber-light text-sm">{item.label}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quote Card */}
                            <motion.div
                                className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-cyber-green/10 to-cyber-cyan/5 border border-cyber-green/20"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <FiCpu className="text-4xl text-cyber-green mb-4" />
                                <p className="text-xl text-white font-medium leading-relaxed">
                                    "The best way to predict the future of security is to
                                    <span className="gradient-text"> understand its vulnerabilities</span> today."
                                </p>
                                <p className="text-cyber-light mt-4 font-mono text-sm">— My Philosophy</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        className="mt-20 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center gap-3 text-cyber-green font-medium text-lg group"
                            whileHover={{ x: 10 }}
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            <span>Let's work together</span>
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="text-2xl"
                            >
                                →
                            </motion.span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About