import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Vector3 } from "three";
import { Points as CustomPoint } from "three";

function GuitarNotes({ count = 5000 }: { count?: number }) {
  const ref = useRef<CustomPoint>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(count * 3), { radius: 1.5 })
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState(new Vector3(0, 0, 0));

  useFrame((state, delta) => {
    if (ref.current) {
      const points = ref.current as CustomPoint;
      points.rotation.x -= delta / 10;
      points.rotation.y -= delta / 15;
      points.position.lerp(cursorPos, 0.02);
    }
  });

  const handlePointerMove = (event: PointerEvent) => {
    setCursorPos(
      new Vector3(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
        0
      )
    );
  };

  const handlePointerOver = (event: any) => {
    setHoveredIndex(event.index);
  };

  const handlePointerOut = () => {
    setHoveredIndex(null);
  };

  const handleClick = () => {
    random.inSphere(sphere, { radius: 3 });
  };

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        onPointerMove={handlePointerMove}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <PointMaterial
          transparent
          color={hoveredIndex !== null ? "#ff4081" : "#ffffff"}
          size={hoveredIndex !== null ? 0.015 : 0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function AnimatedText({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Attempt to play audio when component mounts
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  }, []);

  const toggleAudio = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (audioPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      setAudioPlaying(!audioPlaying);
    }
  };

  const handleUserInteraction = () => {
    const audioElement = audioRef.current;
    if (audioElement && audioElement.muted) {
      audioElement.muted = false; // Unmute on user interaction
      audioElement.play().catch((error) => {
        console.error("Error playing audio on interaction:", error);
      });
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseMove={(e) => e.preventDefault()}
    >
      <Canvas camera={{ position: [0, 0, 1] }} style={{ background: "black" }}>
        <GuitarNotes />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10">
          <AnimatedText>
            <h1 className="text-6xl font-bold mb-4 text-white">
              Welcome to My Portfolio
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.5}>
            <p className="text-2xl text-gray-300">Software Developer</p>
          </AnimatedText>
          <AnimatedText delay={1}>
            <p className="text-xl text-gray-400 mt-4">
              Scroll down to explore my world
            </p>
          </AnimatedText>
          <button
            onClick={toggleAudio}
            className="mt-8 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {audioPlaying ? "Pause Music" : "Play Music"}
          </button>
        </div>
        <audio
          ref={audioRef}
          id="bg-music"
          src="/space-music.mp3"
          loop
          muted // Mute audio initially to allow autoplay
          style={{ display: "block" }} // Make audio element visible for testing
        />
      </div>
    </div>
  );
}
