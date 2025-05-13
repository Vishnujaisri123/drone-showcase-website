import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  fullHeight = false,
}) => {
  return (
    <motion.section
      id={id}
      className={`relative px-4 py-16 md:px-8 lg:px-16 ${fullHeight ? 'min-h-screen' : ''} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  );
};