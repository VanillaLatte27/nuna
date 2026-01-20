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

            <style jsx>{`
                .navbar {
                    position: fixed;
                    top: ${isScrolled ? '1rem' : '2rem'};
                    left: 50%;
                    transform: translateX(-50%) !important;
                    z-index: 1000;
                    width: 90%;
                    max-width: 600px;
                    transition: top 0.3s ease;
                }

                .nav-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: rgba(15, 23, 30, 0.5); /* Less opaque initially */
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50px;
                    padding: 0.75rem 1.5rem;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.4s ease;
                    overflow-x: auto;
                    scrollbar-width: none;
                }
                
                .nav-container.scrolled {
                    background: rgba(15, 23, 30, 0.85); /* More opaque */
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
                    border-color: rgba(255, 255, 255, 0.2);
                    padding: 0.6rem 1.5rem; /* Slightly smaller */
                }

                .nav-container::-webkit-scrollbar {
                    display: none;
                }

                .nav-link {
                    color: #acc1d1;
                    text-decoration: none;
                    font-size: 0.9rem;
                    font-weight: 500;
                    padding: 0.5rem 0.75rem;
                    border-radius: 20px;
                    transition: all 0.3s;
                    white-space: nowrap;
                    position: relative;
                }

                .nav-link:hover {
                    color: #fff;
                    background: rgba(255, 255, 255, 0.1);
                }
            `}</style>
        </>
    );
}
