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
    </motion.div>
  );
}
