'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { useRef, useEffect, useState, useMemo } from 'react';
import * as THREE from 'three';
// @ts-ignore - Suppressing TS error for three examples import
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { motion } from 'framer-motion';

const droneModelUrl = new URL('../drone_costum.obj', import.meta.url).href;

function DroneMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const obj = useLoader(OBJLoader, droneModelUrl);

  const transform = useMemo(() => {
    const box = new THREE.Box3().setFromObject(obj);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxSize = Math.max(size.x, size.y, size.z, 1);
    const scale = 1.8 / maxSize;
    return {
      scale,
      position: [-center.x * scale, -center.y * scale - 0.55, -center.z * scale],
    };
  }, [obj]);

  useEffect(() => {
    obj.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const color = new THREE.Color('#b0b0b0'); // Cement gray
        const emissive = new THREE.Color('#2a2a2a'); // Subtle dark gray
        const premiumMaterial = new THREE.MeshPhysicalMaterial({
          color,
          emissive,
          metalness: 0.45,
          roughness: 0.65, // More matte like cement
          clearcoat: 0.15,
          clearcoatRoughness: 0.4,
          reflectivity: 0.3,
          side: THREE.DoubleSide,
          envMapIntensity: 1.2,
        });

        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map((material) => {
            if (material instanceof THREE.MeshStandardMaterial || material instanceof THREE.MeshPhysicalMaterial) {
              const mat = material.clone();
              mat.color = color;
              mat.metalness = 0.5;
              mat.roughness = 0.6;
              if (mat instanceof THREE.MeshPhysicalMaterial) {
                mat.clearcoat = 0.2;
              }
              mat.envMapIntensity = 1.5;
              mat.needsUpdate = true;
              return mat;
            }
            return premiumMaterial;
          });
        } else if (mesh.material) {
          if (mesh.material instanceof THREE.MeshStandardMaterial || mesh.material instanceof THREE.MeshPhysicalMaterial) {
            const mat = mesh.material.clone();
            mat.color = color;
            mat.metalness = 0.5;
            mat.roughness = 0.6;
            if (mat instanceof THREE.MeshPhysicalMaterial) {
              mat.clearcoat = 0.2;
            }
            mat.envMapIntensity = 1.5;
            mat.needsUpdate = true;
            mesh.material = mat;
          } else {
            mesh.material = premiumMaterial;
          }
        }
      }
    });
  }, [obj]);

  useEffect(() => {
    const animate = () => {
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.005;
        groupRef.current.rotation.z = Math.sin(Date.now() * 0.001) * 0.15;
        groupRef.current.position.y = Math.sin(Date.now() * 0.0015) * 0.2 + 0.3; // Move on up and float
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <group ref={groupRef}>
      <primitive object={obj} scale={transform.scale} position={transform.position} />
    </group>
  );
}

export function Hero3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 2]} performance={{ current: 1 }}>
          <PerspectiveCamera makeDefault position={[0, 0, isMobile ? 4.5 : 3.2]} fov={54} />
          <Environment preset="city" />

          <ambientLight intensity={0.7} />
          <directionalLight
            position={[4, 8, 6]}
            intensity={1.8}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <spotLight
            position={[-3, 6, 5]}
            angle={0.35}
            intensity={1.1}
            penumbra={0.4}
            castShadow
          />
          <pointLight position={[10, 8, 10]} intensity={0.8} color="#f8fafc" />

          {/* Render the model but moved backward and less prominent on mobile */}
          <DroneMesh />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
            maxPolarAngle={Math.PI * 0.75}
            minPolarAngle={Math.PI * 0.25}
          />
        </Canvas>
      </div>

      {/* HTML Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none px-4">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-xl">Chandru S</h1>
          <p className="mt-4 text-xl md:text-3xl text-sky-300 font-semibold drop-shadow-md">UAV System Engineer</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-blue-300 drop-shadow-md"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
}
