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

            <style jsx>{`
                .volunteer-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    padding: 1.25rem;
                    cursor: default;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }

                .icon-box {
                    flex-shrink: 0;
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 1.2rem;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                .default-icon {
                    font-size: 1.5rem;
                    line-height: 0;
                }

                .info {
                    flex: 1;
                }

                h3 {
                    font-size: 1rem;
                    color: #e0e0e0;
                    margin-bottom: 0.25rem;
                    font-weight: 600;
                }

                p {
                    font-size: 0.85rem;
                    color: #8899a6;
                }
            `}</style>
        </motion.div>
    );
}
