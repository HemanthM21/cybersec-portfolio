import { motion } from 'framer-motion'
import { FiHeart, FiShield, FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative py-12 border-t border-cyber-gray/30">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                            <FiShield className="text-cyber-green text-xl" />
                            <span className="font-bold gradient-text">CyberSec Portfolio</span>
                        </div>
                        <p className="text-cyber-light text-sm flex items-center gap-1 justify-center md:justify-start">
                            Made with <FiHeart className="text-cyber-red animate-pulse" /> by Hemanth
                        </p>
                        <p className="text-cyber-light/50 text-xs mt-1">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </motion.div>

                    {/* Quick links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex gap-6 text-sm"
                    >
                        {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                            <motion.a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-cyber-light hover:text-cyber-green transition-colors"
                                whileHover={{ y: -2 }}
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                {link}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-4"
                    >
                        {[
                            { icon: <FiGithub />, url: 'https://github.com/HemanthM21' },
                            { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/mada-hemanth-0774892ab/' },
                            { icon: <FiTwitter />, url: 'https://x.com/nameissunny3' },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 glass rounded-lg flex items-center justify-center text-cyber-light hover:text-cyber-green transition-colors"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll to top button */}
                <motion.button
                    onClick={scrollToTop}
                    className="fixed right-6 bottom-6 w-12 h-12 bg-cyber-green text-cyber-dark rounded-xl flex items-center justify-center shadow-lg z-40"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)' }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <FiArrowUp className="text-xl" />
                </motion.button>

                {/* Terminal-style footer text */}
                <motion.div
                    className="text-center mt-8 pt-8 border-t border-cyber-gray/20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="font-mono text-xs text-cyber-light/50">
                        <span className="text-cyber-green">$</span> echo "Stay secure, stay curious"
                        <span className="animate-pulse">█</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
