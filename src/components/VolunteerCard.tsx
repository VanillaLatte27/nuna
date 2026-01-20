'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface VolunteerCardProps {
    role: string;
    organization: string;
    icon?: ReactNode;
}

export default function VolunteerCard({ role, organization, icon }: VolunteerCardProps) {
    return (
        <motion.div
            className="volunteer-card"
            whileHover={{ scale: 1.03, rotate: 0.5, backgroundColor: 'rgba(255,255,255,0.08)' }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="icon-box">
                {icon || <span className="default-icon">✦</span>}
            </div>
            <div className="info">
                <h3>{role}</h3>
                <p>{organization}</p>
            </div>

        </motion.div>
    );
}
