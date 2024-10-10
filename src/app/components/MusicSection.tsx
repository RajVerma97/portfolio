"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Music } from "lucide-react";

export default function MusicSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
    // Here you would typically trigger audio playback
  };

  return (
    <div className="w-full min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4">
      <motion.h2
        className="text-4xl font-bold mb-8 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Music
      </motion.h2>
      <motion.div
        className={`w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center cursor-pointer`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        <Music size={48} color="white" />
      </motion.div>
      <motion.p
        className="text-xl text-white mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {isPlaying ? "Now Playing" : "Click to Play"}
      </motion.p>
    </div>
  );
}
