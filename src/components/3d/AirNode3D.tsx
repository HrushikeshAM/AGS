"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SensorMesh() {
  const sensorGroupRef = useRef<THREE.Group>(null);
  const particleCount = 100;

  // Generate random particles inside a volume representing air particles floating
  const particlePositions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 4;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 4;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (sensorGroupRef.current) {
      sensorGroupRef.current.rotation.y = elapsed * 0.25;
      sensorGroupRef.current.rotation.x = Math.sin(elapsed * 0.1) * 0.15;
    }
  });

  return (
    <group>
      {/* Sensor Casing */}
      <group ref={sensorGroupRef}>
        {/* Outer frame */}
        <mesh>
          <boxGeometry args={[1.5, 1.8, 1.5]} />
          <meshBasicMaterial
            color="#10b981"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
        {/* Inner solid sensor core */}
        <mesh>
          <boxGeometry args={[1.0, 1.3, 1.0]} />
          <meshBasicMaterial
            color="#041f12"
            transparent
            opacity={0.7}
          />
        </mesh>
        {/* Glowing laser telemetry core */}
        <mesh>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshBasicMaterial
            color="#3b82f6"
            toneMapped={false}
          />
        </mesh>
        {/* Antenna line */}
        <mesh position={[0, 1.1, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Floating particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#10b981"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default function AirNode3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />
        <SensorMesh />
      </Canvas>
    </div>
  );
}
