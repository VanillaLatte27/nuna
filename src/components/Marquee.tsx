'use client';

import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  dark?: boolean;
}

export default function Marquee({ items, dark = false }: MarqueeProps) {
  // Duplicate items to ensure scrolling is completely seamless before looping
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className={`marquee-container ${dark ? 'dark' : ''}`}>
      <motion.div
        className="marquee-content"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
      >
        {duplicatedItems.map((item, i) => (
          <div key={i} className="marquee-item" style={{ padding: '0 3rem' }}>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
