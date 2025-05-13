import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { Section } from "../ui/Section";
import { ProductCard } from "../ui/ProductCard";

// Sample product data
const products = [
  {
    id: 1,
    name: "AeroDrone Pro X9",
    category: "Professional",
    description:
      "High-end professional drone with advanced stabilization and 8K camera",
    image:
      "https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$1,999",
  },
  {
    id: 2,
    name: "SkyView Compact",
    category: "Consumer",
    description: "Portable drone with 4K camera and 30-minute flight time",
    image:
      "https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$799",
  },
  {
    id: 3,
    name: "RacerX 500",
    category: "Racing",
    description:
      "Ultra-fast racing drone with customizable LED and low latency transmission",
    image:
      "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$599",
  },
  {
    id: 4,
    name: "IndustriDrone Heavy",
    category: "Industrial",
    description: "Heavy-duty industrial drone for surveying and mapping",
    image:
      "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$3,499",
  },
  {
    id: 5,
    name: "MicroFPV",
    category: "Racing",
    description: "Compact FPV drone for indoor racing and stunts",
    image: "/src/assets/micro fvp.jpg",
    price: "$349",
  },
  {
    id: 6,
    name: "AgriScan Pro",
    category: "Agricultural",
    description: "Specialized agricultural drone with multispectral imaging",
    image: "/src/assets/agri pro.jpg",
    price: "$2,899",
  },
];

interface LightboxProps {
  product: (typeof products)[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  product,
  onClose,
  onPrev,
  onNext,
}) => {
  const [rotation, setRotation] = useState(0);

  const handleRotate = () => {
    setRotation((prev) => prev + 45);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        className="absolute top-6 right-6 text-white hover:text-primary-400 focus:outline-none"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <button
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-400 focus:outline-none"
        onClick={onPrev}
        aria-label="Previous product"
      >
        <ChevronLeft size={40} />
      </button>

      <button
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-primary-400 focus:outline-none"
        onClick={onNext}
        aria-label="Next product"
      >
        <ChevronRight size={40} />
      </button>

      <div className="max-w-4xl w-full">
        <motion.div
          className="relative aspect-video rounded-xl overflow-hidden shadow-2xl mb-8"
          animate={{ rotate: rotation }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="text-center mb-8">
          <button
            className="bg-dark-800/80 hover:bg-dark-700/80 text-white py-2 px-4 rounded-lg flex items-center justify-center mx-auto"
            onClick={handleRotate}
          >
            <RotateCcw size={16} className="mr-2" />
            Rotate 360°
          </button>
        </div>

        <div className="bg-dark-800/80 backdrop-blur-md rounded-xl p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
          <div className="flex justify-between items-center mb-4">
            <span className="text-primary-400 font-medium">
              {product.category}
            </span>
            <span className="text-xl font-bold">{product.price}</span>
          </div>
          <p className="text-gray-300">{product.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const ProductGallerySection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  const handleProductClick = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  const handlePrev = () => {
    if (!selectedProduct) return;
    const currentIndex = products.findIndex((p) => p.id === selectedProduct.id);
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    setSelectedProduct(products[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedProduct) return;
    const currentIndex = products.findIndex((p) => p.id === selectedProduct.id);
    const nextIndex = (currentIndex + 1) % products.length;
    setSelectedProduct(products[nextIndex]);
  };

  return (
    <Section id="gallery" className="bg-gray-50 dark:bg-dark-900/50 py-24">
      <AnimatePresence>
        {selectedProduct && (
          <Lightbox
            product={selectedProduct}
            onClose={handleClose}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Our{" "}
            <span className="text-secondary-500 dark:text-secondary-400">
              Product Line
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-dark-600 dark:text-dark-300 text-lg">
            Explore our range of cutting-edge drones designed for various
            industries and applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <ProductCard
                product={product}
                onClick={() => handleProductClick(product)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
