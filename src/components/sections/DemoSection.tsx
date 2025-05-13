import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, RotateCw, MoveDiagonal, RotateCcw, Grab } from 'lucide-react';
import { Section } from '../ui/Section';
import { DroneScene } from '../3d/DroneScene';
import { Button } from '../ui/Button';

const controls = [
  { icon: Plus, label: 'Zoom In', action: 'zoomIn' },
  { icon: Minus, label: 'Zoom Out', action: 'zoomOut' },
  { icon: RotateCw, label: 'Rotate Right', action: 'rotateRight' },
  { icon: RotateCcw, label: 'Rotate Left', action: 'rotateLeft' },
  { icon: MoveDiagonal, label: 'Reset View', action: 'reset' },
  { icon: Grab, label: 'Toggle Orbit', action: 'toggleOrbit' },
];

const demoScenes = [
  { id: 'hover', name: 'Hovering', description: 'Stable hover with automatic position hold' },
  { id: 'track', name: 'Object Tracking', description: 'AI-powered subject tracking with dynamic movement' },
  { id: 'follow', name: 'Follow Mode', description: 'Seamless follow shots with terrain awareness' },
  { id: 'orbit', name: 'Orbit Capture', description: 'Perfect circular orbit around point of interest' },
];

export const DemoSection: React.FC = () => {
  const [activeScene, setActiveScene] = useState(demoScenes[0].id);
  const [useOrbitControls, setUseOrbitControls] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleControlClick = (action: string) => {
    switch(action) {
      case 'toggleOrbit':
        setUseOrbitControls(prev => !prev);
        break;
      // Other controls would typically modify the Three.js camera/scene
      // In a real implementation, these would interact with the 3D scene
      // through refs or context
      default:
        console.log(`${action} triggered`);
    }
  };
  
  return (
    <Section 
      id="demo" 
      className="bg-gradient-to-br from-dark-900 to-dark-800 py-24 overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interactive <span className="text-accent-400">Demo</span>
          </h2>
          <p className="max-w-2xl mx-auto text-dark-300 text-lg">
            Experience our drone technology with this interactive demonstration.
            Control the view and see different flight patterns in action.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:w-2/3">
            <div 
              ref={containerRef}
              className="relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl overflow-hidden shadow-neon-primary h-[400px] md:h-[500px]"
            >
              <DroneScene 
                interactive={true} 
                orbitControls={useOrbitControls}
                autoRotate={activeScene === 'orbit'}
                className="w-full h-full"
              />
              
              {/* Glowing grid floor effect */}
              <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-20 pointer-events-none" />
              
              {/* Controls overlay */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2 bg-dark-800/60 backdrop-blur-sm rounded-full px-2 py-1">
                {controls.map((control, index) => {
                  const IconComponent = control.icon;
                  const isActive = control.action === 'toggleOrbit' && useOrbitControls;
                  
                  return (
                    <motion.button
                      key={index}
                      className={`p-2 rounded-full ${isActive ? 'bg-primary-500 text-white' : 'text-white hover:bg-dark-700'} transition-colors duration-200`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleControlClick(control.action)}
                      aria-label={control.label}
                      title={control.label}
                    >
                      <IconComponent size={18} />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-dark-800 rounded-xl shadow-lg p-6 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Flight Patterns</h3>
              
              <div className="space-y-4 mb-8">
                {demoScenes.map((scene) => (
                  <motion.button
                    key={scene.id}
                    className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                      activeScene === scene.id 
                        ? 'bg-primary-500/20 border border-primary-500/50' 
                        : 'bg-dark-700/50 hover:bg-dark-700/80'
                    }`}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveScene(scene.id)}
                  >
                    <h4 className={`font-bold mb-1 ${
                      activeScene === scene.id ? 'text-primary-400' : 'text-white'
                    }`}>
                      {scene.name}
                    </h4>
                    <p className="text-dark-300 text-sm">{scene.description}</p>
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-auto">
                <Button className="w-full" variant="primary" size="lg">
                  Request Full Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};