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

export function DroneShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 border-y border-slate-800">
      <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">UAV Model Showcase</h2>
          <p className="text-sky-300 text-lg max-w-2xl mx-auto">
            Interactive 3D representation of a custom drone architecture. Drag to rotate and explore the design.
          </p>
        </motion.div>
      </div>

      <div className="w-full h-[60vh] md:h-[70vh] relative z-0">
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

          <DroneMesh />

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
            maxPolarAngle={Math.PI * 0.85}
            minPolarAngle={Math.PI * 0.15}
          />
        </Canvas>
      </div>
    </section>
  );
}
