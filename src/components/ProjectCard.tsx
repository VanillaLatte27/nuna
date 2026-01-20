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

      <style jsx>{`
        .project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          /* Removed manual transition in favor of framer-motion */
        }

        .project-card:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.3); 
          background: rgba(255, 255, 255, 0.08);
        }

        h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #fff;
        }

        p {
          font-size: 0.95rem;
          line-height: 1.5;
          color: #ccc;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          color: #ddd;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          margin-top: auto;
        }

        .project-link:hover {
          text-decoration: underline;
          color: #fff;
        }
      `}</style>
    </motion.div>
  );
}
