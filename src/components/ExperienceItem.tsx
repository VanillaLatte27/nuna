'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ExperienceItemProps {
    role: string;
    company: string;
    period: string;
    image?: string;
    children: ReactNode;
}

export default function ExperienceItem({ role, company, period, image, children }: ExperienceItemProps) {
    return (
        <motion.div
            className="experience-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="content">
                <div className="header">
                    <div>
                        <h3>{role}</h3>
                        <div className="subtitle">{company} &bull; <span className="period">{period}</span></div>
                    </div>
                </div>
                <div className="details">
                    {children}
                </div>
            </div>

            {image && (
                <div className="image-wrapper">
                    <Image
                        src={image}
                        alt={`${company} Experience`}
                        width={300}
                        height={200}
                        style={{ objectFit: 'cover', borderRadius: '12px' }}
                    />
                </div>
            )}

        </motion.div>
    );
}
