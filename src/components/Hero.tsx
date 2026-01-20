'use client';

import Image from 'next/image';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const yText = useTransform(springScroll, [0, 1], ["0%", "100%"]);
    const yImage = useTransform(springScroll, [0, 1], ["0%", "40%"]);
    const scaleImage = useTransform(springScroll, [0, 0.5], [1, 1.2]);
    const opacity = useTransform(springScroll, [0, 0.6], [1, 0]);
    const rotate = useTransform(springScroll, [0, 1], [0, 15]);

    // Use stable values for SSR to prevent hydration mismatch
    const animatedStyle = mounted ? { opacity } : { opacity: 1 };
    const parallaxStyle = mounted ? { y: yText, opacity } : { opacity: 1 };
    const imageStyle = mounted ? { y: yImage, scale: scaleImage, opacity, rotateZ: rotate } : { opacity: 1 };

    return (
        <header className="hero" ref={ref} style={{ perspective: '1000px' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    style={imageStyle}
                    initial={{ opacity: 0, scale: 0.3, rotateY: -45 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                >
                    <Image
                        src="/profile.jpeg"
                        alt="Nuna Siva"
                        width={180}
                        height={180}
                        className="profile-img"
                        priority
                    />
                </motion.div>

                <motion.h1
                    style={parallaxStyle}
                    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
                >
                    Nuna Siva Hambami Fathika
                </motion.h1>

                <motion.div
                    className="contact-info"
                    style={parallaxStyle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    {['mailto:nunasivaa@gmail.com', 'tel:+6287888818946', 'Jakarta, Indonesia', 'https://www.linkedin.com/in/nuna-siva'].map((content, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            {i === 0 && <a href={content}><FaEnvelope /> nunasivaa@gmail.com</a>}
                            {i === 1 && <a href={content}><FaPhone /> +62 878‑888‑18946</a>}
                            {i === 2 && <span><FaMapMarkerAlt /> {content}</span>}
                            {i === 3 && <a href={content} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>}
                            {i < 3 && <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </header>
    );
}
