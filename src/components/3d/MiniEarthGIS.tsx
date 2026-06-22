"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GISMesh() {
  const meshRef = useRef<THREE.Group>(null);
  const [activeLayer, setActiveLayer] = useState<"ndvi" | "ndwi">("ndvi");

  // Toggle layers back and forth periodically to animate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((curr) => (curr === "ndvi" ? "ndwi" : "ndvi"));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = elapsed * 0.15;
      meshRef.current.rotation.x = Math.cos(elapsed * 0.05) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Base Globe Grid */}
      <mesh>
        <sphereGeometry args={[1.5, 24, 24]} />
        <meshBasicMaterial
          color={activeLayer === "ndvi" ? "#10b981" : "#3b82f6"}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Internal core sphere showing density color */}
      <mesh>
        <sphereGeometry args={[1.45, 32, 32]} />
        <meshBasicMaterial
          color={activeLayer === "ndvi" ? "#042c18" : "#081d3c"}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Floating orbital line */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.8, 0.01, 8, 64]} />
        <meshBasicMaterial
          color={activeLayer === "ndvi" ? "#10b981" : "#3b82f6"}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

export default function MiniEarthGIS() {
  return (
    <div className="w-full h-full relative">
      {/* HUD Info */}
      <div className="absolute top-2 left-2 z-10 font-mono text-[8px] bg-black/40 border border-white/5 p-1.5 rounded flex flex-col gap-0.5">
        <span className="text-white font-bold">GIS SATELLITE RENDERER</span>
        <span className="text-gray-400">Layer: Vegetation & Water Index Sync</span>
      </div>

      <Canvas camera={{ position: [0, 0, 3.2], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />
        <GISMesh />
      </Canvas>
    </div>
  );
}
