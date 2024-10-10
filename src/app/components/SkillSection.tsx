import React, { useState, useRef } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { Html, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import Image from "next/image";

const skills = [
  {
    name: "JavaScript",
    description:
      "A versatile programming language primarily used for web development.",
    projects: ["Project A", "Project B"],
    image: "/javascript.svg",
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    projects: ["Project C", "Project D"],
    image: "/react.svg",
  },
  {
    name: "Next.js",
    description: "A React framework for server-rendered applications.",
    projects: ["Project E", "Project F"],
    image: "/nextjs.svg",
  },
  {
    name: "TypeScript",
    description: "A superset of JavaScript that adds static types.",
    projects: ["Project G", "Project H"],
    image: "/typescript.svg",
  },
  {
    name: "React Native",
    description: "A framework for building native mobile apps with React.",
    projects: ["Project I", "Project J"],
    image: "/typescript.svg",
  },
  {
    name: "MongoDB",
    description: "A NoSQL database for modern applications.",
    projects: ["Project I", "Project J"],
    image: "/mongodb.png",
  },
];

const SkillCard: React.FC<{ skill: (typeof skills)[0]; index: number }> = ({
  skill,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.2;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime + index) * 0.1;
    }
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  const positionX = (index - (skills.length - 1) / 2) * 7;

  return (
    <motion.mesh
      ref={meshRef}
      position={[positionX, 0, 0]}
      onClick={handleClick}
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      scale={isHovered ? 1.1 : 1}
      animate={{ rotateY: isFlipped ? Math.PI : 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <boxGeometry args={[1.8, 2.5, 0.1]} />
      {/* Set opacity to 0 to remove visible box */}
      <meshStandardMaterial transparent={true} opacity={0} />
      <Html
        transform
        occlude
        position={[0, 0, 0.1]}
        style={{
          transition: "all 0.3s",
          opacity: isHovered ? 1 : 0.8,
          transform: `rotateY(${isFlipped ? "180deg" : "0"})`,
        }}
      >
        <div className="w-64 h-80 p-4 rounded-lg shadow-lg overflow-hidden flex flex-col items-center bg-white">
          <Image
            width={100}
            height={100}
            src={skill.image}
            alt={skill.name}
            className="w-16 h-16 mb-4" // Adjust image size as needed
          />
          {!isFlipped ? (
            <div className="h-full flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-600 text-center">{skill.description}</p>
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold mb-2">Projects:</h3>
              <ul className="list-disc list-inside">
                {skill.projects.map((project, index) => (
                  <li key={index} className="text-gray-600">
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Html>
    </motion.mesh>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 25]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default SkillsSection;
