import React, { useContext } from "react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion"; // For smooth hover animations
import { CursorContext } from "./CursorProvider";

// Skills data
const skills = [
  { name: "Next.js", image: "/nextjs.svg" },
  { name: "React Native", image: "/react-native.svg" },
  { name: "Nodejs", image: "/nodejs.svg" },
  { name: "React", image: "/react.svg" },
  { name: "TypeScript", image: "/typescript.svg" },
  { name: "Firebase", image: "/firebase.svg" },
  { name: "JavaScript", image: "/javascript.svg" },
  { name: "MongoDB", image: "/mongodb.png" },
  { name: "Docker", image: "/docker.svg" },
  { name: "Git", image: "/git.svg" },
  { name: "AWS", image: "/aws.svg" },
  { name: "Redux", image: "/redux.png" },
];

// SkillCard component
const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="relative p-1 rounded-full shadow-lg cursor-pointer"
      whileHover={{ scale: 1.2, rotate: 5 }} // Smooth hover effect with slight rotation
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Circular gradient border */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-1 rounded-full">
        <div className="bg-black rounded-full w-32 h-32 flex justify-center items-center">
          <Image
            src={skill.image}
            alt={skill.name}
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
      </div>
      <h2 className="mt-4 text-center text-white text-lg font-semibold">
        {skill.name}
      </h2>
    </motion.div>
  );
};

export default function SkillsSection() {
  const cursorState = useContext(CursorContext);
  const setCursorType = cursorState ? cursorState[1] : undefined; // Will be undefined if context is not provided
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1
        className="text-4xl lg:text-6xl font-semibold text-white mb-10"
        onPointerEnter={() => setCursorType?.("hovered")}
        onPointerLeave={() => setCursorType?.("default")}
      >
        Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 px-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
