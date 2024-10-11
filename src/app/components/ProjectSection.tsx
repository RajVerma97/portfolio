"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "./CursorProvider";

const projects = [
  {
    name: "Stock Glimpse",
    description:
      "A web app to track your favorite stocks built using Nextjs ,Mongdb ,Typescript",
    image: "/stock-glimpse.png",
    path: "https://stock-glimpse.vercel.app/",
  },
  {
    name: "Thunder Chat App",
    description: "A chat app built using React Native and Firebase",
    image: "/thunder-chat-app.png",
    path: "https://thunder-chat-app-1.vercel.app/",
  },
  {
    name: "Pleasure Fashion",
    description:
      "A fashion ecommerce store showcasing  clothing for women built using  Express,Mongodb",
    image: "/pleasure-fashion.png",
    path: "https://pleasurefashion-56nk.onrender.com/",
  },
  {
    name: "Movie Zone",
    description:
      "A movie streaming website with a sleek UI and responsive design built using React and Firebase",
    image: "/movie-zone.png",
    path: "https://moviezone97.netlify.app/",
  },
];

function ProjectCard({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  const cursorState = useContext(CursorContext);
  const setCursorType = cursorState ? cursorState[1] : undefined; // Will be undefi
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onPointerEnter={() => setCursorType?.("hovered")}
      onPointerLeave={() => setCursorType?.("default")}
    >
      <Card className="bg-white p-4 rounded-md flex justify-center items-center h-[25rem]">
        <CardBody className="overflow-visible py-2">
          <Image
            alt={`${name} screenshot`}
            className="object-cover rounded-md w-full h-auto p-2"
            src={image}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="text-lg">{name}</h4>
          <p className=" font-medium text-gray-400">{description}</p>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const cursorState = useContext(CursorContext);
  const setCursorType = cursorState ? cursorState[1] : undefined; // Will be undefi
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
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
