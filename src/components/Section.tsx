import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    title: string;
    id: string;
    children: ReactNode;
}

export default function Section({ title, id, children }: SectionProps) {
    return (
        <motion.section
            className="card"
            id={id}
            initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1], // Custom effortless ease
                scale: { duration: 1.2 },
                rotateX: { duration: 1.2 }
            }}
        >
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                {children}
            </motion.div>
        </motion.section>
    );
}
