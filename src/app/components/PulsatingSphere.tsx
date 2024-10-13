import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Image } from "@nextui-org/react";

const PulsatingSphere = ({
  color,
  position,
  onHover,
  onLeave,
  skillName,
  skillImage,
}) => {
  const sphereRef = useRef();
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  // Animation logic for hover effect
  useFrame(() => {
    if (sphereRef.current) {
      const bounceScale = isHovered ? 1.2 : 1; // Scale up when hovered

      // Set the scale directly without pulsation
      sphereRef.current.scale.set(bounceScale, bounceScale, bounceScale);

      // Optional: Add rotation for a more dynamic look
      sphereRef.current.rotation.y += 0.01; // Rotate slowly
    }
  });

  return (
    <mesh
      ref={sphereRef}
      position={position}
      onPointerEnter={() => {
        setIsHovered(true); // Set hovered state
        onHover(); // Call onHover function
      }}
      onPointerLeave={() => {
        setIsHovered(false); // Reset hovered state
        onLeave(); // Call onLeave function
      }}
    >
      <sphereGeometry args={[2, 32, 32]} />{" "}
      {/* Increased radius to 2 for better visibility */}
      <meshStandardMaterial
        color={color}
        emissive={color} // Set emissive color for the neon effect
        emissiveIntensity={0.5} // Adjust intensity for a stronger glow
      />
      <Html center>
        <div
          className="flex flex-col items-center justify-center"
          style={{
            color: "white",
            fontSize: "1.2em", // Set font size fixed
            textAlign: "center",
            transition: "transform 0.2s ease-in-out", // Smooth transition for the text scaling
          }}
        >
          <Image src={skillImage} alt="dev" width={80} height={50} />
          {skillName} {/* Display the skill name */}
        </div>
      </Html>
    </mesh>
  );
};

export default PulsatingSphere;
