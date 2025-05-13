import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { DroneMesh } from './DroneMesh';
import { useMouseParallax } from '../../hooks/useMouseParallax';

interface DroneSceneProps {
  interactive?: boolean;
  orbitControls?: boolean;
  autoRotate?: boolean;
  background?: string;
  className?: string;
}

export const DroneScene: React.FC<DroneSceneProps> = ({
  interactive = true,
  orbitControls = false,
  autoRotate = false,
  background = 'transparent',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  
  const mousePos = useMouseParallax({
    elementRef: containerRef,
    sensitivity: 0.1,
    reverse: true,
  });
  
  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Canvas 
        style={{ background }}
        shadows
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={50} />
        
        {orbitControls && (
          <OrbitControls 
            enableZoom={interactive}
            enablePan={interactive}
            enableRotate={interactive}
            autoRotate={autoRotate}
            autoRotateSpeed={1}
          />
        )}
        
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        
        <DroneMesh 
          mousePosition={interactive ? mousePos : { x: 0, y: 0 }}
          hovering={hovering}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.25, 0]}
          scale={1.5}
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};