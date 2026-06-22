"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Custom atmosphere glow shader using a uniform color
const AtmosphereShader = {
  vertexShader: `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vNormal;
    uniform vec3 uColor;
    void main() {
      float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
      gl_FragColor = vec4(uColor, 1.0) * intensity;
    }
  `
};

const lerpNum = (a: number, b: number, t: number) => a + (b - a) * t;

interface ProceduralGlobeProps {
  isDark: boolean;
}

function ProceduralGlobe({ isDark }: ProceduralGlobeProps) {
  const globeRef = useRef<THREE.Group>(null);
  const pointsMatRef = useRef<THREE.PointsMaterial>(null);
  const wireframeMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const atmosphereMatRef = useRef<THREE.ShaderMaterial>(null);
  const coreNodeMatRef = useRef<THREE.MeshBasicMaterial>(null);

  const particleCount = 2500;

  // Generate random points on a sphere surface for a high-tech dotted grid look
  const points = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0; // Globe radius

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    return arr;
  }, []);

  // Set up pulsing monitoring nodes
  const nodePositions = useMemo(() => {
    return [
      new THREE.Vector3(1.2, 1.4, 0.8),   // Smart City Node
      new THREE.Vector3(-1.5, 0.8, -1.0), // Rainforest Sensor
      new THREE.Vector3(0.5, -1.8, 0.7),  // Ocean Telemetry
      new THREE.Vector3(-0.8, -1.2, 1.3), // Landfill U-Net Vetting
      new THREE.Vector3(0.0, 1.9, 0.5),   // Arctic Monitoring
    ];
  }, []);

  // Targets for smooth color transitions
  const targetPointsColor = useMemo(() => new THREE.Color(), []);
  const targetWireframeColor = useMemo(() => new THREE.Color(), []);
  const targetCoreNodeColor = useMemo(() => new THREE.Color(), []);
  const targetAtmosphereColor = useMemo(() => new THREE.Color(), []);

  const uniforms = useMemo(() => ({
    uColor: { value: new THREE.Color(0.06, 0.72, 0.5) }
  }), []);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (globeRef.current) {
      // Steady rotation
      globeRef.current.rotation.y = elapsed * 0.08;
      globeRef.current.rotation.x = Math.sin(elapsed * 0.02) * 0.1;
    }

    const t = 0.08; // Lerp interpolation speed

    // Lerp points material (lighter in dark mode, darker in light mode)
    if (pointsMatRef.current) {
      targetPointsColor.set(isDark ? "#6ee7b7" : "#022c16");
      pointsMatRef.current.color.lerp(targetPointsColor, t);
      const targetOpacity = isDark ? 0.85 : 0.95;
      pointsMatRef.current.opacity = lerpNum(pointsMatRef.current.opacity, targetOpacity, t);

      const expectedBlending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
      if (pointsMatRef.current.blending !== expectedBlending) {
        pointsMatRef.current.blending = expectedBlending;
        pointsMatRef.current.needsUpdate = true;
      }
    }

    // Lerp wireframe material
    if (wireframeMatRef.current) {
      targetWireframeColor.set(isDark ? "#115e59" : "#475569");
      wireframeMatRef.current.color.lerp(targetWireframeColor, t);
      const targetOpacity = isDark ? 0.25 : 0.35;
      wireframeMatRef.current.opacity = lerpNum(wireframeMatRef.current.opacity, targetOpacity, t);
    }

    // Lerp atmosphere material
    if (atmosphereMatRef.current) {
      targetAtmosphereColor.set(isDark ? "#10b981" : "#10b981");
      uniforms.uColor.value.lerp(targetAtmosphereColor, t);
      const targetOpacity = isDark ? 1.0 : 0.45;
      atmosphereMatRef.current.opacity = lerpNum(atmosphereMatRef.current.opacity, targetOpacity, t);

      const expectedBlending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
      if (atmosphereMatRef.current.blending !== expectedBlending) {
        atmosphereMatRef.current.blending = expectedBlending;
        atmosphereMatRef.current.needsUpdate = true;
      }
    }

    // Lerp core node material
    if (coreNodeMatRef.current) {
      targetCoreNodeColor.set(isDark ? "#3b82f6" : "#1d4ed8");
      coreNodeMatRef.current.color.lerp(targetCoreNodeColor, t);
    }
  });

  return (
    <group ref={globeRef}>
      {/* 1. Dotted Globe Mesh */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[points, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          ref={pointsMatRef}
          size={0.035}
          color={isDark ? "#6ee7b7" : "#022c16"}
          transparent
          opacity={isDark ? 0.85 : 0.95}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
          depthWrite={false}
        />
      </points>

      {/* 2. Wireframe Shell for grid texture */}
      <mesh>
        <sphereGeometry args={[1.99, 32, 32]} />
        <meshBasicMaterial
          ref={wireframeMatRef}
          color={isDark ? "#115e59" : "#475569"}
          wireframe
          transparent
          opacity={isDark ? 0.25 : 0.35}
        />
      </mesh>

      {/* 3. Outer Glow atmosphere layer */}
      <mesh>
        <sphereGeometry args={[2.15, 32, 32]} />
        <shaderMaterial
          ref={atmosphereMatRef}
          attach="material"
          vertexShader={AtmosphereShader.vertexShader}
          fragmentShader={AtmosphereShader.fragmentShader}
          uniforms={uniforms}
          blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
          side={THREE.BackSide}
          transparent
          opacity={isDark ? 1.0 : 0.3}
        />
      </mesh>

      {/* 4. Pulsing Nodes */}
      {nodePositions.map((pos, idx) => (
        <group key={idx} position={pos}>
          {/* Core dot */}
          <mesh>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial ref={coreNodeMatRef} color={isDark ? "#3b82f6" : "#1d4ed8"} />
          </mesh>
          {/* Radar Wave */}
          <PulseRing isDark={isDark} />
        </group>
      ))}

      {/* 5. Floating Satellites & Orbits */}
      <SatelliteOrbit radius={2.7} speed={0.15} color={isDark ? "#3b82f6" : "#1d4ed8"} axis={new THREE.Vector3(1, 0.5, 0).normalize()} isDark={isDark} />
      <SatelliteOrbit radius={3.1} speed={0.09} color="#10b981" axis={new THREE.Vector3(-0.5, 1, 0.2).normalize()} isDark={isDark} />
    </group>
  );
}

function PulseRing({ isDark }: { isDark: boolean }) {
  const ringRef = useRef<THREE.Mesh>(null);
  const ringMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const targetColor = useMemo(() => new THREE.Color(), []);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    const scale = 1 + (elapsed * 1.5) % 2.5;
    const baseOpacity = Math.max(0, 1 - ((elapsed * 1.5) % 2.5) / 2.5);

    if (ringRef.current) {
      ringRef.current.scale.set(scale, scale, scale);
    }

    const t = 0.08;
    if (ringMatRef.current) {
      targetColor.set(isDark ? "#3b82f6" : "#1d4ed8");
      ringMatRef.current.color.lerp(targetColor, t);
      const targetOpacity = baseOpacity * (isDark ? 0.8 : 0.95);
      ringMatRef.current.opacity = lerpNum(ringMatRef.current.opacity, targetOpacity, t);

      const expectedBlending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
      if (ringMatRef.current.blending !== expectedBlending) {
        ringMatRef.current.blending = expectedBlending;
        ringMatRef.current.needsUpdate = true;
      }
    }
  });

  return (
    <mesh ref={ringRef}>
      <ringGeometry args={[0.08, 0.14, 32]} />
      <meshBasicMaterial
        ref={ringMatRef}
        color={isDark ? "#3b82f6" : "#1d4ed8"}
        transparent
        opacity={1}
        side={THREE.DoubleSide}
        depthWrite={false}
        blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
      />
    </mesh>
  );
}

interface SatelliteOrbitProps {
  radius: number;
  speed: number;
  color: string;
  axis: THREE.Vector3;
  isDark: boolean;
}

function SatelliteOrbit({ radius, speed, color, axis, isDark }: SatelliteOrbitProps) {
  const satelliteRef = useRef<THREE.Group>(null);
  const satelliteMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const flareMatRef = useRef<THREE.MeshBasicMaterial>(null);

  const targetOrbitColor = useMemo(() => new THREE.Color(), []);
  const targetFlareColor = useMemo(() => new THREE.Color(), []);

  // Generate orbit ring coordinates
  const orbitPoints = useMemo(() => {
    const pts = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;

      // Calculate point on XY plane
      const p = new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);

      // Rotate path to align with custom orbit axis
      const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), axis);
      p.applyQuaternion(quaternion);
      pts.push(p);
    }
    return new THREE.CatmullRomCurve3(pts).getPoints(128);
  }, [radius, axis]);

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(orbitPoints);
  }, [orbitPoints]);

  const orbitLine = useMemo(() => {
    const mat = new THREE.LineBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: isDark ? 0.15 : 0.25
    });
    return new THREE.Line(lineGeometry, mat);
  }, [lineGeometry]);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    const angle = elapsed * speed;

    if (satelliteRef.current) {
      // Calculate local path position
      const p = new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), axis);
      p.applyQuaternion(quaternion);

      satelliteRef.current.position.copy(p);
    }

    const t = 0.08;

    // Lerp orbit path color/opacity
    const orbitMat = orbitLine.material as THREE.LineBasicMaterial;
    if (orbitMat) {
      targetOrbitColor.set(color);
      orbitMat.color.lerp(targetOrbitColor, t);
      const targetOrbitOpacity = isDark ? 0.15 : 0.25;
      orbitMat.opacity = lerpNum(orbitMat.opacity, targetOrbitOpacity, t);
    }

    // Lerp satellite item color/opacity
    if (satelliteMatRef.current) {
      const targetSatColor = isDark ? "#ffffff" : "#0c1811";
      const currentSatColor = new THREE.Color(targetSatColor);
      satelliteMatRef.current.color.lerp(currentSatColor, t);
    }

    // Lerp signal flare color/opacity/blending
    if (flareMatRef.current) {
      targetFlareColor.set(color);
      flareMatRef.current.color.lerp(targetFlareColor, t);
      const targetFlareOpacity = isDark ? 0.4 : 0.3;
      flareMatRef.current.opacity = lerpNum(flareMatRef.current.opacity, targetFlareOpacity, t);

      const expectedBlending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
      if (flareMatRef.current.blending !== expectedBlending) {
        flareMatRef.current.blending = expectedBlending;
        flareMatRef.current.needsUpdate = true;
      }
    }
  });

  return (
    <group>
      {/* Thin orbit path */}
      <primitive object={orbitLine} />

      {/* Floating satellite item */}
      <group ref={satelliteRef}>
        {/* Glowing Node */}
        <mesh>
          <boxGeometry args={[0.08, 0.08, 0.08]} />
          <meshBasicMaterial ref={satelliteMatRef} color={isDark ? "#ffffff" : "#0c1811"} />
        </mesh>
        {/* Signal flare */}
        <mesh>
          <sphereGeometry args={[0.18, 8, 8]} />
          <meshBasicMaterial
            ref={flareMatRef}
            color={color}
            transparent
            opacity={isDark ? 0.4 : 0.3}
            blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function InteractiveGlobe() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const html = document.documentElement;
    setIsDark(html.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"));
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-full relative">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,var(--background)_90%] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(16,185,129,0.04)_0%,transparent_60%] z-10 pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <ProceduralGlobe isDark={isDark} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
