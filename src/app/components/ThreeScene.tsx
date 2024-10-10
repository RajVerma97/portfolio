"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null); // To store the request ID

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Create the scene
      const scene = new THREE.Scene();

      // Set up the cameraff
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Set up the renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Append the renderer to the container
      const currentContainer = containerRef.current;
      currentContainer?.appendChild(renderer.domElement);

      // Create a geometry and material, then mesh them together
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ffe3 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Animation function
      const animate = () => {
        requestRef.current = requestAnimationFrame(animate);

        // Rotate the cube
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // Render the scene from the perspective of the camera
        renderer.render(scene, camera);
      };
      animate();

      // Clean up on unmount
      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
        if (currentContainer) {
          currentContainer.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    }
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeScene;
