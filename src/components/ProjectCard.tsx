'use client';

import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project <FaExternalLinkAlt size={12} style={{ marginLeft: '6px' }} />
      </Link>

    </motion.div>
  );
}
