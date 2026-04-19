import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown, FiShield, FiLock } from 'react-icons/fi'

// Animated grid with flowing particles
const AnimatedGrid = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Particle system
        const particles = []
        const particleCount = 50

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1
            })
        }

        const draw = () => {
            // Fade effect
            ctx.fillStyle = 'rgba(10, 10, 15, 0.1)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw grid
            ctx.strokeStyle = 'rgba(0, 255, 136, 0.05)'
            ctx.lineWidth = 1
            const gridSize = 60

            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath()
                ctx.moveTo(x, 0)
                ctx.lineTo(x, canvas.height)
                ctx.stroke()
            }

            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath()
                ctx.moveTo(0, y)
                ctx.lineTo(canvas.width, y)
                ctx.stroke()
            }

            // Draw and update particles
            particles.forEach((particle, i) => {
                // Update position
                particle.x += particle.vx
                particle.y += particle.vy

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width
                if (particle.x > canvas.width) particle.x = 0
                if (particle.y < 0) particle.y = canvas.height
                if (particle.y > canvas.height) particle.y = 0

                // Draw particle
                ctx.fillStyle = `rgba(0, 255, 136, ${Math.random() * 0.5 + 0.3})`
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fill()

                // Connect nearby particles
                particles.forEach((otherParticle, j) => {
                    if (i !== j) {
                        const dx = particle.x - otherParticle.x
                        const dy = particle.y - otherParticle.y
                        const distance = Math.sqrt(dx * dx + dy * dy)

                        if (distance < 150) {
                            ctx.strokeStyle = `rgba(0, 255, 136, ${(1 - distance / 150) * 0.2})`
                            ctx.lineWidth = 0.5
                            ctx.beginPath()
                            ctx.moveTo(particle.x, particle.y)
                            ctx.lineTo(otherParticle.x, otherParticle.y)
                            ctx.stroke()
                        }
                    }
                })
            })
        }

        const interval = setInterval(draw, 33)

        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 opacity-30"
            style={{ zIndex: 0 }}
        />
    )
}

// Typing effect hook
const useTypingEffect = (texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentText = texts[currentIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime)
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setCurrentIndex((prev) => (prev + 1) % texts.length)
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseTime])

    return displayText
}

const Hero = () => {
    const typingTexts = [
        'Full Stack Developer',
        'Cybersecurity Enthusiast',
        'Networking & Security Researcher',
        'Problem Solver',
    ]
    const typedText = useTypingEffect(typingTexts)

    const scrollToAbout = () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Grid Background */}
            <AnimatedGrid />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-transparent to-cyber-dark z-10" />
            <div className="absolute inset-0 bg-gradient-radial from-cyber-green/5 via-transparent to-transparent z-10" />

            {/* Floating elements */}
            <motion.div
                className="absolute top-1/4 left-10 text-cyber-green/20 text-6xl"
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
                <FiLock />
            </motion.div>
            <motion.div
                className="absolute bottom-1/4 right-10 text-cyber-cyan/20 text-6xl"
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
                <FiShield />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
                {/* Terminal-style intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                >
                    <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                    <span className="text-cyber-light font-mono text-sm">System Online</span>
                </motion.div>

                {/* Main heading with text reveal */}
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[0.95] tracking-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-white">Hello, I'm </span>
                    <motion.span
                        className="gradient-text inline-block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        HEMANTH
                    </motion.span>
                </motion.h1>

                {/* Typing effect subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl md:text-2xl lg:text-3xl text-cyber-light mb-8 h-10"
                >
                    <span className="font-mono">&gt; </span>
                    <span className="text-cyber-green">{typedText}</span>
                    <span className="animate-pulse text-cyber-green">|</span>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-lg text-cyber-light max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Passionate about building innovative solutions and securing digital systems.
                    Specialized in full-stack development, cybersecurity, and creating impactful technology.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.a
                        href="#projects"
                        className="btn-cyber px-8 py-4 bg-cyber-green text-cyber-dark font-bold rounded-lg text-lg inline-flex items-center gap-2"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 136, 0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.preventDefault()
                            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        View My Work
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="px-8 py-4 border-2 border-cyber-green text-cyber-green font-bold rounded-lg text-lg hover:bg-cyber-green/10 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.preventDefault()
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={scrollToAbout}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyber-green z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, y: { duration: 1.5, repeat: Infinity } }}
            >
                <FiChevronDown className="text-4xl" />
            </motion.button>
        </section>
    )
}

export default Hero
