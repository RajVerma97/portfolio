"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "./CursorProvider";

interface Project {
  name: string;
  description: string;
  image: string;
  path: string;
  tags: string[];
}

type Projects = Project[];

const projects: Projects = [
  {
    name: "Stock Glimpse",
    description: "A web app to track your favorite stocks",
    image: "/stock-glimpse.png",
    path: "https://stock-glimpse.vercel.app/",
    tags: ["Next.js", "MongoDB", "TypeScript"],
  },
  {
    name: "Thunder Chat App",
    description: "A chat app built with React Native and Firebase.",
    image: "/thunder-chat-app.png",
    path: "https://thunder-chat-app-1.vercel.app/",
    tags: ["React Native", "Firebase"],
  },
  {
    name: "Pleasure Fashion",
    description: "A fashion e-commerce store showcasing clothing for women.",
    image: "/pleasure-fashion.png",
    path: "https://pleasurefashion-ekqb.onrender.com",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    name: "Movie Zone",
    description:
      "A movie streaming website with a sleek UI and responsive design.",
    image: "/movie-zone.png",
    path: "https://moviezone97.netlify.app/",
    tags: ["React", "Firebase"],
  },
];

function ProjectCard({
  name,
  description,
  image,
  tags,
}: {
  name: string;
  description: string;
  image: string;
  tags: string[];
}) {
  const cursorState = useContext(CursorContext);
  const setCursorType = cursorState ? cursorState[1] : undefined;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onPointerEnter={() => setCursorType?.("hovered")}
      onPointerLeave={() => setCursorType?.("default")}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="bg-white  shadow-lg h-[30rem] flex flex-col overflow-hidden p-2">
        <CardBody className=" overflow-hidden ">
          <Image
            alt={`${name} screenshot`}
            src={image}
            className="object-fit h-[15rem] w-full rounded-md " // Ensure the image covers its container
            height={300}
            width={300}
          />
        </CardBody>
        <CardHeader className=" flex-col items-start">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="font-medium text-gray-400">{description}</p>
          <div className="mt-2  flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const cursorState = useContext(CursorContext);
  const setCursorType = cursorState ? cursorState[1] : undefined;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 gap-8">
      <div className="flex justify-center items-center gap-10">
        <h1
          className="tracking-tight inline font-semibold text-4xl lg:text-6xl text-white"
          onPointerEnter={() => setCursorType?.("hovered")}
          onPointerLeave={() => setCursorType?.("default")}
        >
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard {...project} />
          </Link>
        ))}
      </div>
    </div>
  );
}
