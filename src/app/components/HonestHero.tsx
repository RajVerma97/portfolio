"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CursorContext } from "@/providers/cursorProvider";
import { motion, useMotionValue } from "framer-motion";
import DiscordButton from "../DiscordButton";
import PrintButton from "../PrintButton";

export default function HonestHero() {
  const [cursorType, setCursorType] = useContext<any>(CursorContext);
  const [cursorPosition, setCursorPosition] = useState<any>({
    x: 1000,
    y: 1000,
  });
  useEffect(() => {
    const moveCursor2 = (e: any) => {
      setCursorPosition({
        x: e.clientX - 0.5 * window.innerWidth,
        y: e.clientY - 0.5 * window.innerHeight,
      });
    };
    window.addEventListener("mousemove", moveCursor2);
    return () => {
      window.removeEventListener("mousemove", moveCursor2);
    };
  }, []);
  const variants = {
    hovered: {
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
    default: {
      opacity: 0,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="mask w-full h-screen bg flex items-center justify-center absolute top-0 left-0 z-10"
      style={{
        maskPosition: `${cursorPosition.x}px ${cursorPosition.y}px`,
        WebkitMaskPositionX: cursorPosition.x,
        WebkitMaskPositionY: cursorPosition.y,
      }}
      animate={cursorType == "hovered" ? "hovered" : "default"}
      variants={variants}
    >
      <div className="md:w-[clamp(400px,60vw,800px)] flex items-center justify-center flex-col w-full p-4 rounded-xl gap-8 ">
        <div
          className="flex flex-col items-center"
          onPointerEnter={() => setCursorType("hovered")}
          onPointerLeave={() => setCursorType("default")}
        >
          <h1>AI is coming for our jobs</h1>
          <h2>Prepare yourself for the singularity :&#39;&#41;</h2>
        </div>
        <div className="flex flex-row gap-8 justify-end items-center ">
          <PrintButton />
          <DiscordButton />
        </div>
        <Link href="/about">Learn More</Link>
      </div>
    </motion.div>
  );
}
