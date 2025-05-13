import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Battery, Cpu, Eye, Radio, Map, Heart, Sparkles } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

const features = [
  {
    icon: Camera,
    title: '4K HDR Camera',
    description: 'Capture stunning aerial footage with our professional-grade 4K camera with HDR capabilities.',
    color: 'primary',
  },
  {
    icon: Battery,
    title: 'Extended Battery',
    description: 'Industry-leading 35-minute flight time with smart power management technology.',
    color: 'secondary',
  },
  {
    icon: Cpu,
    title: 'AI Processing',
    description: 'Advanced onboard AI for subject tracking, obstacle avoidance, and automated flight paths.',
    color: 'accent',
  },
  {
    icon: Eye,
    title: 'Object Detection',
    description: 'Real-time identification and tracking of subjects with intelligent focus lock.',
    color: 'success',
  },
  {
    icon: Radio,
    title: '10KM Range',
    description: 'Ultra-long range transmission with crystal clear live video feed and minimal latency.',
    color: 'warning',
  },
  {
    icon: Map,
    title: 'GPS Precision',
    description: 'Multi-satellite positioning system for centimeter-level hovering accuracy.',
    color: 'error',
  },
  {
    icon: Heart,
    title: 'Fail-Safe Systems',
    description: 'Multiple redundant safety systems ensure your drone returns home safely.',
    color: 'primary',
  },
  {
    icon: Sparkles,
    title: 'Noise Reduction',
    description: 'Ultra-quiet propellers and aerodynamic design for minimal flight noise.',
    color: 'secondary',
  },
];

export const FeaturesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <Section 
      id="features" 
      className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900 py-24"
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Advanced <span className="text-primary-500 dark:text-primary-400">Features</span>
          </h2>
          <p className="max-w-2xl mx-auto text-dark-600 dark:text-dark-300 text-lg">
            Our drones combine cutting-edge technology with intuitive design to deliver
            an unparalleled aerial experience.
          </p>
        </motion.div>
        
        <div 
          ref={containerRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colorClasses = {
              primary: 'text-primary-500 dark:text-primary-400',
              secondary: 'text-secondary-500 dark:text-secondary-400',
              accent: 'text-accent-500 dark:text-accent-400',
              success: 'text-success-500 dark:text-success-400',
              warning: 'text-warning-500 dark:text-warning-400',
              error: 'text-error-500 dark:text-error-400',
            };
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card 
                  glassEffect={true}
                  hoverEffect={true}
                  className="h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className={`${colorClasses[feature.color as keyof typeof colorClasses]} p-3 rounded-lg mb-4 self-start`}>
                      <IconComponent size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-dark-600 dark:text-dark-300 mb-4">
                      {feature.description}
                    </p>
                    <div className="mt-auto">
                      <motion.button
                        className={`text-sm font-medium ${colorClasses[feature.color as keyof typeof colorClasses]}`}
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        Learn more
                      </motion.button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};