'use client';

import { ReactNode } from 'react';

interface ExperienceItemProps {
    role: string;
    company: string;
    period: string;
    children: ReactNode;
    index: string;
}

export default function ExperienceItem({ role, company, period, children, index }: ExperienceItemProps) {
    return (
        <div className="bordered-item">
            <div className="bordered-item-number">({index})</div>
            <div>
                <h3 className="bordered-item-title">{role}</h3>
                <div style={{ color: '#888', marginTop: '0.5rem', fontWeight: 500, letterSpacing: '0.02em', fontSize: '0.95rem' }}>
                    {company} &bull; {period}
                </div>
            </div>
            <div className="bordered-item-desc" style={{ paddingLeft: '1rem' }}>
                {children}
            </div>
        </div>
    );
}
