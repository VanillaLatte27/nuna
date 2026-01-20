'use client';

import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <section className="cta-container">
      <motion.div
        className="cta-box"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2>Let&apos;s Work Together</h2>
        <p>Open for opportunities in HR, Recruitment, and Training Development.</p>
        <a href="mailto:nunasivaa@gmail.com" className="cta-btn">
          <FaPaperPlane /> Send me an email
        </a>
      </motion.div>

    </section>
  );
}
