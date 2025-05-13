import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ 
        scale: 1.03,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotateY: isHovered ? 5 : 0,
            rotateX: isHovered ? -5 : 0,
          }}
          transition={{ duration: 0.4 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="w-full h-full"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {product.category}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-dark-900 dark:text-white">{product.name}</h3>
          <span className="text-primary-500 dark:text-primary-400 font-bold">{product.price}</span>
        </div>
        
        <p className="text-dark-600 dark:text-dark-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <motion.div
          className="inline-flex items-center text-sm font-medium text-secondary-500 dark:text-secondary-400"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          View details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};