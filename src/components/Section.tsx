import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};
