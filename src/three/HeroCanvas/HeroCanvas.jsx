import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Rotating Cube
const RotatingCube = () => {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      {/* Bigger Cube */}
      <boxGeometry args={[3, 3, 3]} /> {/* Size aur bada kiya */}
      <meshStandardMaterial
        color="#6366F1"
        metalness={0.7}
        roughness={0.2}
        envMapIntensity={1}
      />
    </mesh>
  );
};

const HeroCanvas = () => {
  return (
    <Canvas
      camera={{ position: [6, 5, 8], fov: 60 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.6} />

      {/* Only Cube */}
      <RotatingCube />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default HeroCanvas;
