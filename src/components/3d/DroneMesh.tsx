import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DroneMeshProps {
  mousePosition: { x: number; y: number };
  hovering?: boolean;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export const DroneMesh: React.FC<DroneMeshProps> = ({ 
  mousePosition, 
  hovering = false,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0]
}) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Animate the drone based on mouse position
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Calculate base movement
    let tiltX = mousePosition.y * 0.1;
    let tiltZ = -mousePosition.x * 0.1;
    
    // Add hover animation if enabled
    const time = state.clock.getElapsedTime();
    const hoverY = hovering ? Math.sin(time * 2) * 0.1 : 0;
    
    // Apply smooth transitions
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      rotation[0] + tiltX,
      0.05
    );
    
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      rotation[2] + tiltZ,
      0.05
    );
    
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      position[1] + hoverY,
      0.1
    );
  });
  
  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.2, 1.5]} />
        <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Arms */}
      {[[-0.65, 0, -0.65], [0.65, 0, -0.65], [-0.65, 0, 0.65], [0.65, 0, 0.65]].map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="#555" />
        </mesh>
      ))}
      
      {/* Propellers */}
      {[[-0.65, 0.1, -0.65], [0.65, 0.1, -0.65], [-0.65, 0.1, 0.65], [0.65, 0.1, 0.65]].map((pos, i) => (
        <mesh key={i} position={pos} rotation={[0, Math.PI * 0.25 * i, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.05, 32]} />
          <meshStandardMaterial color="#222" opacity={0.8} transparent={true} />
        </mesh>
      ))}
      
      {/* Camera */}
      <mesh position={[0, -0.1, -0.7]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      
      {/* Lens */}
      <mesh position={[0, -0.1, -0.8]}>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 32]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      
      {/* Camera highlight */}
      <mesh position={[0, -0.1, -0.85]}>
        <ringGeometry args={[0.03, 0.05, 32]} />
        <meshStandardMaterial emissive="#00f7ff" emissiveIntensity={2} />
      </mesh>
      
      {/* Status lights */}
      {[[-0.7, 0.12, -0.7], [0.7, 0.12, -0.7], [-0.7, 0.12, 0.7], [0.7, 0.12, 0.7]].map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial 
            emissive={i % 2 === 0 ? "#ff0000" : "#00ff00"} 
            emissiveIntensity={2} 
          />
        </mesh>
      ))}
    </group>
  );
};