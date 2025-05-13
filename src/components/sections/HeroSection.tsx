import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { DroneScene } from "../3d/DroneScene";

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-white to-primary-50 dark:from-dark-900 dark:to-dark-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-30 dark:opacity-20" />

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center z-10">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-16 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-900 dark:text-white leading-tight mb-4">
            Command the
            <span className="text-primary-500 dark:text-primary-400 ml-3">
              {" "}
              Skies{" "}
            </span>
            <br />
            with Dronyx Precision
          </h1>

          <p className="text-lg md:text-xl text-dark-600 dark:text-dark-300 mb-8 max-w-lg">
            At Dronyx, we rise beyond limits — crafting next-generation drones
            that redefine flight through innovation, precision, and relentless
            evolution.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg">Explore Drones</Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* 3D Drone Model */}
        <motion.div
          className="md:w-1/2 h-[400px] md:h-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <DroneScene
            interactive={true}
            orbitControls={false}
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
      >
        <button
          onClick={scrollToNext}
          className="text-dark-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </button>
      </motion.div>
    </motion.div>
  );
};
