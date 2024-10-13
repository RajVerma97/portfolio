"use client";

import { useEffect, useContext } from "react";
import { motion, useMotionValue, Variants } from "framer-motion";
import { CursorContext } from "./CursorProvider";
import { useMediaQuery } from "react-responsive";

export default function CustomCursor() {
  const cursorState = useContext(CursorContext);
  const cursorType = cursorState[0];

  const WIDTH = 25; // Cursor size
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - WIDTH / 2); // Center the cursor
      cursorY.set(e.clientY - WIDTH / 2); // Center the cursor
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  const hoverVariants: Variants = {
    hovered: {
      scale: 1.5,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
      opacity: 1,
      mixBlendMode: "difference", // Blend the background with the foreground
      background: "white", // White background on hover
      boxShadow: "0 0 30px rgba(173, 216, 230, 0.8)", // Bright white shadow on hover
    },
    default: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 100,
      },
      opacity: 1,
      background: "white", // White background by default
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", // Light shadow
    },
  };

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    !isMobile && (
      <motion.div
        variants={hoverVariants}
        animate={cursorType}
        className="fixed left-0 top-0 w-12 h-12 rounded-full pointer-events-none z-50"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          borderRadius: "50%",
          transition: "all 0.1s ease-out",
        }}
      ></motion.div>
    )
  );
}
