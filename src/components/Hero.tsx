'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr', gap: '5rem', alignItems: 'center', margin: '0 auto', width: '90%', maxWidth: '1200px' }}>
        
        {/* Left Column: Portrait Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', aspectRatio: '3/4', position: 'relative', borderRadius: '1.5rem', overflow: 'hidden' }}
        >
          <Image
             src="/profile.jpeg"
             alt="Nuna Siva"
             fill
             style={{ objectFit: 'cover' }}
             priority
          />
        </motion.div>

        {/* Right Column: Information & Actions */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pill-badge" style={{ marginBottom: '2rem' }}>
            Nuna Siva Hambami Fathika
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 6vw, 6.5rem)', 
            lineHeight: '1.05', 
            marginBottom: '2.5rem', 
            textTransform: 'uppercase',
            letterSpacing: '-0.04em'
          }}>
            Human<br />Capital<br />Intern©
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#a3a3a3', 
            marginBottom: '3.5rem', 
            maxWidth: '500px',
            lineHeight: '1.6'
          }}>
            Psychology Student processing recruitment end to end. +1 year of structured process, high volume candidates, and relentless honest discipline.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
             <a href="mailto:nunasivaa@gmail.com" className="pill-btn" style={{ background: '#FFFFFF', color: '#000000' }}>
               Contact Me
             </a>
             <a href="https://www.linkedin.com/in/nuna-siva" target="_blank" rel="noreferrer" className="pill-btn">
               <FaLinkedin style={{ marginRight: '0.5rem' }} /> LinkedIn
             </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
