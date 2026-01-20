'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ToolBadgeProps {
  icon: ReactNode;
  name: string;
}

export default function ToolBadge({ icon, name }: ToolBadgeProps) {
  return (
    <motion.div
      className="tool-badge"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="icon">{icon}</span>
      <span className="name">{name}</span>
      <style jsx>{`
        .tool-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.5rem 1rem;
          margin: 0.25rem;
          cursor: default;
        }

        .icon {
          display: flex;
          align-items: center;
          margin-right: 0.5rem;
          font-size: 1.2rem;
          color: #fff; /* Monochrome */
        }

        .name {
          font-size: 0.9rem;
          font-weight: 500;
          color: #eee;
        }
      `}</style>
    </motion.div>
  );
}
