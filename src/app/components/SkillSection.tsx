"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", color: "bg-yellow-400" },
  { name: "React", color: "bg-cyan-400" },
  { name: "Next.js", color: "bg-white" },
  { name: "TypeScript", color: "bg-blue-500" },
  { name: "Tailwind CSS", color: "bg-teal-400" },
];

function SkillIcon({
  name,
  color,
  index,
}: {
  name: string;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      className={`w-24 h-24 ${color} rounded-lg flex items-center justify-center text-gray-800 font-bold`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {name}
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <div className="w-full min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4">
      <motion.h2
        className="text-4xl font-bold mb-8 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <SkillIcon key={skill.name} {...skill} index={index} />
        ))}
      </div>
    </div>
  );
}
