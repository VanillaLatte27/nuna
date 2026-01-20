'use client';

import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
    { name: 'Summary', href: '#summary' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Use the newer .on("change") if available, or fall back to onChange
        const unsubscribe = scrollY.on ?
            scrollY.on("change", (latest) => setIsScrolled(latest > 50)) :
            (scrollY as any).onChange((latest: number) => setIsScrolled(latest > 50));

        return () => unsubscribe();
    }, [scrollY]);

    return (
        <>
            <motion.nav
                className="navbar"
                style={{ top: mounted && isScrolled ? '1rem' : '2rem' }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
            >
                <div className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
                    {navItems.map((item) => (
                        <a key={item.name} href={item.href} className="nav-link">
                            {item.name}
                        </a>
                    ))}
                </div>
            </motion.nav>
        </>
    );
}
