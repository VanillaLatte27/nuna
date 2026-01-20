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

      <style jsx>{`
        .cta-container {
          padding: 4rem 1rem;
          display: flex;
          justify-content: center;
        }

        .cta-box {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0,0,0,0));
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3rem;
          border-radius: 24px;
          text-align: center;
          max-width: 600px;
          width: 100%;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }
        
        .cta-box::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
            z-index: -1;
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #fff;
          background: linear-gradient(to right, #fff, #999);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        p {
          color: #ccc;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #fff;
          color: #0f171e;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s, background 0.2s;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          background: #ddd;
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
