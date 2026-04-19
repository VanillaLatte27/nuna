'use client';

import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
    { name: 'Summary', href: '#summary' },
    { name: 'Works', href: '#projects' },
    { name: 'Services', href: '#experience' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Volunteer', href: '#volunteer' },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const unsubscribe = scrollY.on ?
            scrollY.on("change", (latest) => setIsScrolled(latest > 50)) :
            (scrollY as any).onChange((latest: number) => setIsScrolled(latest > 50));

        return () => unsubscribe();
    }, [scrollY]);

    if (!mounted) return null;

    return (
        <motion.nav
            style={{ 
                position: 'fixed', 
                top: isScrolled ? '1rem' : '2rem', 
                left: '50%', 
                translateX: '-50%', 
                zIndex: 1000, 
                width: '90%', 
                maxWidth: '650px',
                transition: 'top 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: isScrolled ? 'rgba(20, 20, 20, 0.85)' : 'rgba(20, 20, 20, 0.4)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50px',
                padding: '0.75rem 1.5rem',
                boxShadow: isScrolled ? '0 20px 40px rgba(0, 0, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.4s ease',
                overflowX: 'auto',
                scrollbarWidth: 'none'
            }}>
                {navItems.map((item) => (
                    <a key={item.name} href={item.href} style={{
                        color: '#acc1d1',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        padding: '0.5rem 0.75rem',
                        borderRadius: '20px',
                        transition: 'all 0.3s',
                        whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#acc1d1'; e.currentTarget.style.background = 'transparent'; }}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
}
