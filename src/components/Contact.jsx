import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiMapPin, FiLock, FiUnlock, FiTerminal } from 'react-icons/fi'

const socialLinks = [
    {
        name: 'GitHub',
        icon: <FiGithub />,
        url: 'https://github.com/HemanthM21',
        color: '#ffffff',
        hoverColor: '#6e5494'
    },
    {
        name: 'LinkedIn',
        icon: <FiLinkedin />,
        url: 'https://www.linkedin.com/in/mada-hemanth-0774892ab/',
        color: '#0077b5',
        hoverColor: '#00a0dc'
    },
    {
        name: 'Twitter',
        icon: <FiTwitter />,
        url: 'https://x.com/nameissunny3',
        color: '#1da1f2',
        hoverColor: '#1a91da'
    },
    {
        name: 'Email',
        icon: <FiMail />,
        url: 'mailto:mhemanth212@gmail.com',
        color: '#00ff88',
        hoverColor: '#00cc6a'
    },
]

const Contact = () => {
    const [isLocked, setIsLocked] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setFormData({ name: '', email: '', message: '' })
        alert('Message sent successfully!')
    }

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent" />

            {/* Animated background circles */}
            <motion.div
                className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-cyber-green/5 blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-cyber-cyan/5 blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-cyber-green font-mono text-sm tracking-wider uppercase">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 mb-6 tracking-tight">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyber-gradient mx-auto rounded-full mb-6" />
                    <p className="text-cyber-light max-w-2xl mx-auto">
                        Have a security challenge? Want to collaborate on a project?
                        Or just want to say hi? I'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact info side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Lock animation */}
                        <motion.div
                            className="flex items-center gap-4 mb-8"
                            onClick={() => setIsLocked(!isLocked)}
                        >
                            <motion.div
                                className="w-16 h-16 rounded-xl bg-cyber-green/10 flex items-center justify-center cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                animate={isLocked ? {} : { rotate: [0, -10, 10, -10, 0] }}
                            >
                                {isLocked ? (
                                    <FiLock className="text-3xl text-cyber-green" />
                                ) : (
                                    <FiUnlock className="text-3xl text-cyber-green" />
                                )}
                            </motion.div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Secure Communication</h3>
                                <p className="text-cyber-light text-sm">Click the lock to unlock my details</p>
                            </div>
                        </motion.div>

                        {/* Contact details */}
                        <motion.div
                            className="space-y-6"
                            animate={{ opacity: isLocked ? 0.5 : 1, filter: isLocked ? 'blur(4px)' : 'blur(0px)' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center gap-4 glass p-4 rounded-xl">
                                <div className="w-12 h-12 rounded-lg bg-cyber-green/10 flex items-center justify-center">
                                    <FiMail className="text-xl text-cyber-green" />
                                </div>
                                <div>
                                    <p className="text-cyber-light text-sm">Email</p>
                                    <p className="text-white font-medium">mhemanth212@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 glass p-4 rounded-xl">
                                <div className="w-12 h-12 rounded-lg bg-cyber-cyan/10 flex items-center justify-center">
                                    <FiMapPin className="text-xl text-cyber-cyan" />
                                </div>
                                <div>
                                    <p className="text-cyber-light text-sm">Location</p>
                                    <p className="text-white font-medium">India</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Social links */}
                        <div className="pt-8">
                            <h4 className="text-lg font-semibold mb-6 text-cyber-light">Connect with me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 glass rounded-xl flex items-center justify-center text-2xl hover-glow"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -5,
                                            color: social.hoverColor,
                                            boxShadow: `0 0 20px ${social.color}40`
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        style={{ color: social.color }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Terminal decoration */}
                        <motion.div
                            className="glass rounded-xl p-4 font-mono text-sm mt-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <FiTerminal className="text-cyber-green" />
                                <span className="text-cyber-light text-xs">terminal</span>
                            </div>
                            <p className="text-cyber-light">
                                <span className="text-cyber-green">$</span> echo "Looking forward to connecting!"
                            </p>
                            <p className="text-white mt-1">Looking forward to connecting!</p>
                        </motion.div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <FiSend className="text-cyber-green" />
                                Send a Message
                            </h3>

                            <div className="space-y-6">
                                {/* Name field */}
                                <div>
                                    <label className="block text-cyber-light text-sm mb-2" htmlFor="name">
                                        Your Name
                                    </label>
                                    <motion.input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-cyber-darker/50 border border-cyber-gray rounded-xl text-white focus:outline-none focus:border-cyber-green transition-colors"
                                        placeholder="John Doe"
                                        whileFocus={{ borderColor: '#00ff88' }}
                                    />
                                </div>

                                {/* Email field */}
                                <div>
                                    <label className="block text-cyber-light text-sm mb-2" htmlFor="email">
                                        Your Email
                                    </label>
                                    <motion.input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-cyber-darker/50 border border-cyber-gray rounded-xl text-white focus:outline-none focus:border-cyber-green transition-colors"
                                        placeholder="john@example.com"
                                        whileFocus={{ borderColor: '#00ff88' }}
                                    />
                                </div>

                                {/* Message field */}
                                <div>
                                    <label className="block text-cyber-light text-sm mb-2" htmlFor="message">
                                        Your Message
                                    </label>
                                    <motion.textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-cyber-darker/50 border border-cyber-gray rounded-xl text-white focus:outline-none focus:border-cyber-green transition-colors resize-none"
                                        placeholder="I'd like to discuss a security project..."
                                        whileFocus={{ borderColor: '#00ff88' }}
                                    />
                                </div>

                                {/* Submit button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-cyber px-8 py-4 bg-cyber-green text-cyber-dark font-bold rounded-xl text-lg flex items-center justify-center gap-3 disabled:opacity-50"
                                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 255, 136, 0.5)' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                className="w-5 h-5 border-2 border-cyber-dark border-t-transparent rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
