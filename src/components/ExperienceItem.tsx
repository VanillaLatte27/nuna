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

            <style jsx>{`
                .experience-item {
                    background: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 16px;
                    padding: 2rem;
                    margin-bottom: 2rem;
                    display: flex;
                    flex-direction: column; 
                    gap: 1.5rem;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }
                
                /* Decorative top gradient line */
                .experience-item::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #ffffff, transparent);
                    opacity: 0.5;
                }

                .experience-item:hover {
                    transform: translateY(-5px) scale(1.02);
                    border-color: #ffffff; /* Glow border on hover */
                    box-shadow: 0 15px 30px rgba(0,0,0,0.3), 0 0 15px rgba(255, 255, 255, 0.1);
                    background: linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
                }
                
                /* Ensure image container also looks premium */
                .image-wrapper {
                    flex-shrink: 0;
                    width: 100%;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                    border: 1px solid rgba(255,255,255,0.1);
                    transition: transform 0.3s;
                }
                
                .experience-item:hover .image-wrapper {
                     transform: scale(1.02);
                }
            `}</style>
        </motion.div>
    );
}
