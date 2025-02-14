"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "./CursorProvider";
import { useMediaQuery } from "react-responsive";

interface Project {
  name: string;
  description: string;
  mobileImage: string;
  pcImage: string;
  path: string;
  tags: string[];
}

type Projects = Project[];

const projects: Projects = [
  {
    name: "Stock Glimpse",
    description: "Track and monitor your favorite stocks in real-time.",
    mobileImage: "/stock-glimpse.png",
    pcImage: "/stock-glimpse-pc.png",
    path: "https://stock-glimpse.vercel.app/",
    // tags: ["Next.js", "MongoDB", "TypeScript"],
    tags: [
      "Golang",
      "React.js",
      "MongoDB",
      "TypeScript",
      "Prometheus",
      "Grafana",
    ],
  },

  {
    name: "Pleasure Fashion",
    description: "An e-commerce platform featuring women's fashion clothing.",
    mobileImage: "/pleasure-fashion.png",
    pcImage: "/pleasure-fashion-pc.png",
    path: "https://pleasurefashion.up.railway.app/",
    // tags: ["Node.js", "Express", "MongoDB"],
    tags: ["Golang", "Docker", "React"],
  },

  // {
  //   name: "Positive Mindcare App",
  //   description:
  //     "A comprehensive mental wellness application designed to empower users in managing their emotional health through engaging features. ",
  //   mobileImage: "positive-mindcare.jpg",
  //   pcImage: "positive-mindcare.jpg",
  //   path: "#",
  //   tags: ["React Native", "Typescript", "Firebase", "Zustand", "Native Base"],
  // },

  {
    name: "Thunder Chat App",
    description: "A real-time chat application with sleek and modern design.",
    mobileImage: "/thunder-chat.jpg",
    pcImage: "/thunder-chat.jpg",
    path: "#",
    // tags: ["React Native", "Firebase", "Redux", "Postresql"],
    tags: ["Golang", "Rabbitmq", "React Native", "Redux", "Postresql"],
  },

  {
    name: "Movie Zone",
    description: " Stream movies online with a sleek and responsive interface.",
    mobileImage: "/movie-zone.png",
    pcImage: "/movie-zone-pc.png",
    path: "https://moviezone97.netlify.app/",
    tags: ["React", "Golang"],
  },
];

function ProjectCard({
  name,
  description,
  mobileImage,
  pcImage,
  tags,
}: {
  name: string;
  description: string;
  mobileImage: string;
  pcImage: string;
  tags: string[];
}) {
  const cursorState = useContext(CursorContext);
  const setCursorType = cursorState ? cursorState[1] : undefined;
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onPointerEnter={() => setCursorType?.("hovered")}
      onPointerLeave={() => setCursorType?.("default")}
      data-aos="fade-up"
    >
      <Card className="bg-black shadow-lg flex flex-col overflow-hidden  p-8  md:p-6  border-1 rounded-md ">
        <CardBody className="overflow-hidden flex justify-center items-center ">
          <Image
            alt={`${name} screenshot`}
            src={isMobile ? mobileImage : pcImage}
            className="object-fit w-full h-[30rem]  md:h-[18rem]  rounded-md   p-0 "
          />
        </CardBody>
        <CardHeader className="flex-col items-start  md:py-6 mt-4 md:mt-0">
          <h4 className="text-lg font-semibold text-white">{name}</h4>
          <p className="font-medium mt-1 text-gray-400">{description}</p>
          <div className="mt-3 flex flex-wrap gap-4 ">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-2 md:px-4 md:py-2 rounded-full"
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
    <div className="w-full flex flex-col items-center justify-center p-4 gap-8">
      <div className="flex justify-center items-center gap-12">
        <h1
          className="tracking-tight inline font-semibold text-4xl lg:text-6xl text-white"
          onPointerEnter={() => setCursorType?.("hovered")}
          onPointerLeave={() => setCursorType?.("default")}
        >
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8 md:gap-12 max-w-6xl">
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
