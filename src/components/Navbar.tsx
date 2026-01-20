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

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    // Spring physics for smooth expansion
    // const width = useSpring(isScrolled ? 10 : 90, { stiffness: 300, damping: 30 });
    // Actually, let's keep it simpler for now - just background change interaction

    return (
        <>
            <motion.nav
                className="navbar"
                style={{ top: isScrolled ? '1rem' : '2rem' }}
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
