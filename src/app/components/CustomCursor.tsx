// CustomCursor.tsx
import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";
import * as THREE from "three";

export default function CustomCursor() {
  const meshRef = useRef<THREE.Mesh>(null); // Reference for cursor mesh
  const [hovered, setHovered] = useState(false); // Hover state

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse move event listener to track the cursor position
  const handleMouseMove = (event: MouseEvent) => {
    setMousePos({
      x: (event.clientX / window.innerWidth) * 2 - 1, // Normalize to range (-1 to 1)
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    });
  };

  useEffect(() => {
    // Attach mousemove event to update position
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate cursor position and scale
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x = mousePos.x * 5;
      meshRef.current.position.y = mousePos.y * 5;

      // Scale on hover
      meshRef.current.scale.x =
        meshRef.current.scale.y =
        meshRef.current.scale.z =
          THREE.MathUtils.lerp(meshRef.current.scale.x, hovered ? 1.5 : 1, 0.1);

      // Add a continuous rotation effect
      meshRef.current.rotation.z += 0.01;
    }
  });

  // Change cursor when hovering over interactive elements
  useCursor(hovered);

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "white"} />
    </mesh>
  );
}
