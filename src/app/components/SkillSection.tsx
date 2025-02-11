import React, { useContext } from "react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion"; // For smooth hover animations
import { CursorContext } from "./CursorProvider";

interface Skill {
  name: string;
  image: string;
}

type Skills = Skill[];

// Skills data
const skills: Skills = [
  // { name: "Next.js", image: "/nextjs.svg" },
  // { name: "React Native", image: "/react-native.svg" },
  { name: "Golang", image: "/golang.svg" },
  { name: "Prometheus", image: "/prometheus.svg" },
  { name: "Grafana", image: "/grafana.svg" },
  { name: "Kafka", image: "/kafka.svg" },
  { name: "RabbitMq", image: "/rabbitmq.svg" },
  { name: "Docker", image: "/docker.svg" },
  { name: "Kubernetes", image: "/kubernetes.svg" },
  { name: "Git", image: "/git.svg" },
  { name: "AWS", image: "/aws.svg" },
  { name: "Nodejs", image: "/nodejs.svg" },
  { name: "React", image: "/react.svg" },
  // { name: "TypeScript", image: "/typescript.svg" },
  // { name: "Firebase", image: "/firebase.svg" },
  // { name: "JavaScript", image: "/javascript.svg" },
  { name: "MongoDB", image: "/mongodb.png" },

  // { name: "Redux", image: "/redux.png" },
];

// SkillCard component
const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      className="relative p-1 rounded-full shadow-lg cursor-pointer"
      whileHover={{ scale: 1.2, rotate: 5 }} // Smooth hover effect with slight rotation
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Circular gradient border */}
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-1 rounded-full">
        <div className="bg-black rounded-full   w-20 h-20   md:w-24 md:h-24  flex justify-center items-center">
          <Image
            src={skill.image}
            alt={skill.name}
            className="rounded-full w-full  h-[3rem] "
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
    <div className="w-full flex flex-col justify-center items-center">
      <h1
        className="text-4xl lg:text-6xl font-semibold text-white mb-10"
        onPointerEnter={() => setCursorType?.("hovered")}
        onPointerLeave={() => setCursorType?.("default")}
      >
        Skills
      </h1>
      <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6  gap-8 md:gap-12 ">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
