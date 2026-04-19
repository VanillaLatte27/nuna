'use client';

import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="cta-container" style={{ padding: '10rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <h2 style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 1, letterSpacing: '-0.04em' }}>
          Have an<br/>Idea?©
        </h2>
        <p style={{ color: '#999', fontSize: '1.25rem', marginBottom: '4rem', maxWidth: '500px' }}>
          Open for opportunities in HR, Recruitment, and Training Development. Let's discuss how we can work together.
        </p>
        <a href="mailto:nunasivaa@gmail.com" className="pill-btn" style={{ background: '#FFFFFF', color: '#000000', fontSize: '1.25rem', padding: '1.25rem 3.5rem' }}>
          Send an email
        </a>
      </motion.div>
    </section>
  );
}
