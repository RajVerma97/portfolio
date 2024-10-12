// LandingPage.tsx
import { Canvas } from "@react-three/fiber";
import { NeonWaveContainer } from "./NeonWave"; // Import the NeonWaveContainer component
import { CursorContext } from "./CursorProvider";
import { useContext } from "react";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
const socials = [
  {
    name: "Github",
    image: "/github.svg",
    path: "https://github.com/RajVerma97",
    bgColor: "bg-gray-800", // Darker gray for a sleek look
  },
  {
    name: "Twitter",
    image: "/twitter.svg",
    path: "https://x.com/RajVerma885633",
    bgColor: "bg-blue-500", // Bright blue to stand out
  },
  {
    name: "LinkedIn",
    image: "/linkedin.svg",
    path: "https://www.linkedin.com/in/rajneesh-verma-026b141b7/",
    bgColor: "bg-[#0077B5]", // LinkedIn blue
  },
  {
    name: "Leetcode",
    image: "/leetcode.png",
    path: "https://leetcode.com/u/RajneeshVerma42/",
    bgColor: "bg-[#F9C32B]", // LeetCode yellow for contrast
  },
];
export default function LandingPage() {
  const cursorState = useContext(CursorContext);
  const setCursorType = cursorState ? cursorState[1] : undefined; // Will be undefined if context is not provided

  return (
    <div className="relative w-full h-screen p-14 flex flex-col justify-between mb-10">
      {/* Centered content box */}
      <div className="flex flex-col z-20">
        <div className="flex flex-col ">
          <h1
            className="tracking-tight font-semibold text-6xl text-white"
            onPointerEnter={() => setCursorType?.("hovered")}
            onPointerLeave={() => setCursorType?.("default")}
          >
            Hello! I am Rajneesh Kumar
          </h1>

          <div className="flex items-center gap-4">
            <h4
              className="tracking-tight  text-2xl text-white"
              onPointerEnter={() => setCursorType?.("hovered")}
              onPointerLeave={() => setCursorType?.("default")}
            >
              Full Software Developer
            </h4>
            <Image src="/code-2.png" alt="dev" width={80} height={50} />
          </div>
        </div>
      </div>

      <div className="w-full h-[35rem] mt-8">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <NeonWaveContainer />
        </Canvas>
      </div>

      {/* Social Icons Container */}
      <div className="absolute top-[15rem] left-[2rem] transform flex flex-col gap-8 p-4 rounded-full shadow-md">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.path}
            target="_blank"
            rel="noopener noreferrer"
            onPointerEnter={() => setCursorType?.("hovered")}
            onPointerLeave={() => setCursorType?.("default")}
          >
            <motion.div
              whileHover={{ scale: 1.3 }}
              className={`flex flex-col items-center cursor-pointer mx-2 p-2 rounded-full bg-white `}
            >
              <Image
                src={social.image}
                alt={`${social.name} logo`}
                width={40}
                height={40}
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
