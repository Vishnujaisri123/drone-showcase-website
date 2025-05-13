import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  
  return (
    <motion.button
      onClick={toggleDarkMode}
      className="relative p-2 rounded-full bg-primary-100 dark:bg-dark-700 text-primary-600 dark:text-primary-300 focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 0 : 180 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {darkMode ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </motion.button>
  );
};