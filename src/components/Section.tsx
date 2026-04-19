import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    title: string;
    id: string;
    children: ReactNode;
    superscript?: string;
}

export default function Section({ title, id, children, superscript }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '8rem' }}
        >
            <motion.h2
                className="section-header"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {title}
                {superscript && <span className="section-header-superscript">({superscript})</span>}
            </motion.h2>
            
            <div style={{ paddingTop: '2rem' }}>
                {children}
            </div>
        </motion.section>
    );
}
