'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const volunteers = [
  { role: "Mentor (Guide)", org: "School Goes to Psychology 2022" },
  { role: "Public Relation", org: "Dopamination 2023" },
  { role: "Public Relation", org: "OpteamA Training Center" },
  { role: "Facilitator", org: "Kids Event by Awan Kecil 2025" },
  { role: "Public Relation", org: "KKN Patuk Prana 2025" },
  { role: "Registration Staff", org: "Adira Finance gathering event" }
];

export default function VolunteerSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section id="volunteer" ref={ref} style={{ position: 'relative', overflow: 'hidden', padding: '12rem 0', backgroundColor: '#000' }}>
      {/* Huge Background Text */}
      <motion.div style={{ position: 'absolute', top: '30%', left: 0, x: bgX, whiteSpace: 'nowrap', opacity: 0.03, fontSize: 'clamp(10rem, 20vw, 20rem)', fontWeight: 800, textTransform: 'uppercase', pointerEvents: 'none', lineHeight: 1 }}>
        VOLUNTEER &bull; VOLUNTEER &bull; VOLUNTEER &bull; 
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <h2 className="section-header" style={{ marginBottom: '6rem' }}>
          Volunteer<span className="section-header-superscript">(06)</span>
        </h2>
        
        <motion.div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', y: cardsY }}>
           {volunteers.map((vol, i) => (
             <motion.div 
               key={i}
               style={{
                 background: 'rgba(20, 20, 20, 0.7)',
                 backdropFilter: 'blur(12px)',
                 border: '1px solid rgba(255,255,255,0.08)',
                 borderRadius: '2rem',
                 padding: '3rem 2.5rem',
                 marginTop: i % 2 !== 0 ? '4rem' : '0', // Staggered layout 
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'center'
               }}
               whileHover={{ y: -10, borderColor: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(30, 30, 30, 0.9)' }}
               transition={{ duration: 0.3 }}
             >
               <div style={{ fontSize: '2rem', marginBottom: '1.5rem', opacity: 0.2 }}>✦</div>
               <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 600, letterSpacing: '-0.02em' }}>{vol.role}</h3>
               <p style={{ color: '#888', fontSize: '1rem', lineHeight: '1.5' }}>{vol.org}</p>
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
