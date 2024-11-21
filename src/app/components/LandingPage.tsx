import { Canvas } from "@react-three/fiber";
import { NeonWaveContainer } from "./NeonWave"; 
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
    bgColor: "bg-white", 
  },
  {
    name: "Twitter",
    image: "/twitter.svg",
    path: "https://x.com/RajVerma885633",
    bgColor: "bg-blue-500", 
  },
  {
    name: "LinkedIn",
    image: "/linkedin.svg",
    path: "https://www.linkedin.com/in/rajneesh-verma-026b141b7/",
    bgColor: "bg-[#0077B5]", 
  },
  {
    name: "Leetcode",
    image: "/leetcode.png",
    path: "https://leetcode.com/u/RajneeshVerma42/",
    bgColor: "bg-[#F9C32B]", 
  },
];

export default function LandingPage() {
  const cursorState = useContext(CursorContext);
  const setCursorType = cursorState ? cursorState[1] : undefined;

  return (
    <div className="relative w-full ">
      <div className="flex flex-col z-20 ">
        <h1
          className="tracking-tight font-semibold text-3xl md:text-6xl text-white"
          onPointerEnter={() => setCursorType?.("hovered")}
          onPointerLeave={() => setCursorType?.("default")}
          data-aos="slide-left"
          data-aos-offset="200"
          data-aos-delay="200"
        >
          Hello! I am Rajneesh
        </h1>

        <div className="flex items-center gap-4">
          <h4
            className="tracking-tight text-lg md:text-2xl text-white mt-2"
            onPointerEnter={() => setCursorType?.("hovered")}
            onPointerLeave={() => setCursorType?.("default")}
            data-aos="slide-right"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            Full Stack Software Developer
          </h4>
          <Image
            src="/code-2.png"
            alt="dev"
            className="w-8 h-8 md:w-16 md:h-16"
          />
        </div>

        
        <div
          className="mt-4 flex md:hidden z-20 gap-4 mb-4"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="300"
        >
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
                className={`flex items-center cursor-pointer mx-2 p-2 rounded-full bg-white `}
              >
                <Image
                  src={social.image}
                  alt={`${social.name} logo`}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

     
      <div className="w-full h-[25rem]    mt-8 z-10 ">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <NeonWaveContainer />
        </Canvas>
      </div>

    
      <div
        className="hidden md:flex absolute top-[12rem]  transform flex-col gap-8 p-4 rounded-full shadow-md"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="300"
      >
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
              className={`flex flex-col items-center cursor-pointer p-2 rounded-full bg-white`}
            >
              <Image
                src={social.image}
                alt={`${social.name} logo`}
                className="w-6 h-6 md:w-10 md:h-10"
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
