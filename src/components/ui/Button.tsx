import React from 'react';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 dark:bg-primary-600 dark:hover:bg-primary-500',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500 dark:bg-secondary-600 dark:hover:bg-secondary-500',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500 dark:bg-accent-600 dark:hover:bg-accent-500',
    outline: 'border border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-dark-800',
    ghost: 'text-primary-500 hover:bg-primary-50 focus:ring-primary-500 dark:text-primary-400 dark:hover:bg-dark-800',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  const iconStyles = icon ? (iconPosition === 'left' ? 'mr-2' : 'ml-2') : '';

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ''}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className={iconStyles}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={iconStyles}>{icon}</span>}
    </motion.button>
  );
};