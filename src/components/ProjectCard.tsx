'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  index: string;
  marginTop?: string;
}

export default function ProjectCard({ title, description, link, index, marginTop }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4/3',
        backgroundColor: '#0a0a0a',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        cursor: 'pointer',
        marginTop: marginTop || '0',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
        {/* Background Canvas */}
        <motion.div 
          style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Small Floating Content box (simulating image collage effect) */}
        <motion.div
           style={{
             position: 'absolute',
             top: '50%',
             left: '50%',
             width: '60%',
             height: '60%',
             backgroundColor: '#1c1c1c',
             border: '1px solid rgba(255,255,255,0.05)',
             borderRadius: '1rem',
             boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             padding: '2rem',
             textAlign: 'center'
           }}
           animate={{
               x: '-50%',
               y: isHovered ? '-55%' : '-50%',
               scale: isHovered ? 1.02 : 1
           }}
           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
           <p style={{ color: '#a3a3a3', fontSize: '0.95rem', lineHeight: '1.5' }}>{description}</p>
        </motion.div>

        {/* Footer Labels */}
        <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>{title}</h3>
          <span style={{ fontSize: '1rem', color: '#666', fontWeight: 500, fontFamily: 'monospace' }}>({index})</span>
        </div>
      </Link>
    </motion.div>
  );
}
