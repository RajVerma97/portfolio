"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Anime Tracker",
    description: "A web app to track your favorite anime series",
  },
  {
    name: "Music Visualizer",
    description: "An interactive music visualizer using Web Audio API",
  },
  {
    name: "Portfolio Website",
    description: "This website, built with Next.js and Framer Motion",
  },
];

function ProjectCard({
  name,
  description,
  index,
}: {
  name: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      className="bg-gray-700 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <motion.h2
        className="text-4xl font-bold mb-8 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} {...project} index={index} />
        ))}
      </div>
    </div>
  );
}
