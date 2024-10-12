"use client";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { PauseCircleIcon, PlayCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import React, { useContext, useRef, useState } from "react";
import { CursorContext } from "./CursorProvider";

// Icons for Next and Previous
export const NextIcon = ({
  size = 24,
  width = 24,
  height = 24,
  ...props
}: {
  size?: number;
  width?: number;
  height?: number;
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M3.76172 7.21957V16.7896C3.76172 18.7496 5.89172 19.9796 7.59172 18.9996L11.7417 16.6096L15.8917 14.2096C17.5917 13.2296 17.5917 10.7796 15.8917 9.79957L11.7417 7.39957L7.59172 5.00957C5.89172 4.02957 3.76172 5.24957 3.76172 7.21957Z"
      fill="currentColor"
    />
    <path
      d="M20.2383 18.9303C19.8283 18.9303 19.4883 18.5903 19.4883 18.1803V5.82031C19.4883 5.41031 19.8283 5.07031 20.2383 5.07031C20.6483 5.07031 20.9883 5.41031 20.9883 5.82031V18.1803C20.9883 18.5903 20.6583 18.9303 20.2383 18.9303Z"
      fill="currentColor"
    />
  </svg>
);

export const PreviousIcon = ({
  size = 24,
  width = 24,
  height = 24,
  ...props
}: {
  size?: number;
  width?: number;
  height?: number;
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M20.2409 7.21957V16.7896C20.2409 18.7496 18.1109 19.9796 16.4109 18.9996L12.2609 16.6096L8.11094 14.2096C6.41094 13.2296 6.41094 10.7796 8.11094 9.79957L12.2609 7.39957L16.4109 5.00957C18.1109 4.02957 20.2409 5.24957 20.2409 7.21957Z"
      fill="currentColor"
    />
    <path
      d="M3.76172 18.9303C3.35172 18.9303 3.01172 18.5903 3.01172 18.1803V5.82031C3.01172 5.41031 3.35172 5.07031 3.76172 5.07031C4.17172 5.07031 4.51172 5.41031 4.51172 5.82031V18.1803C4.51172 18.5903 4.17172 18.9303 3.76172 18.9303Z"
      fill="currentColor"
    />
  </svg>
);

// MusicCard component with animation and styling improvements
interface MusicCardProps {
  title: string;
  artist: string;
  album: string;
  image: string;
  audioSrc: string;
}

export default function MusicCard({
  title,
  artist,
  image,
  audioSrc,
}: MusicCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const cursorState = useContext(CursorContext);
  const setCursorType = cursorState ? cursorState[1] : undefined;

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Toggle play/pause
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-white p-2 rounded-xl flex justify-center items-center"
      onPointerEnter={() => setCursorType?.("hovered")}
      onPointerLeave={() => setCursorType?.("default")}
    >
      <Card
        isBlurred
        className="bg-gray-700 dark:bg-gray-900 max-w-[610px] rounded-xl p-4"
        shadow="md"
      >
        <CardBody>
          <div className="">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative col-span-6 md:col-span-4"
            >
              <Image
                alt="Album cover"
                className="object-cover rounded-lg w-full h-full"
                src={image}
              />
            </motion.div>
          </div>
        </CardBody>

        <CardHeader>
          <div className="flex flex-col col-span-6 md:col-span-8 py-4">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-gray-200 dark:text-white">
                  {artist}
                </h3>
                <h1 className="text-xl font-bold mt-1 text-white dark:text-white">
                  {title}
                </h1>
              </div>
            </div>

            <div className="flex w-full mt-4">
              <Button
                isIconOnly
                className="w-auto h-auto bg-white hover:bg-gray-700"
                radius="full"
                variant="light"
                onPress={handlePlayPause}
              >
                {isPlaying ? (
                  <PauseCircleIcon size={54} />
                ) : (
                  <PlayCircleIcon size={54} />
                )}
              </Button>
            </div>
            <audio ref={audioRef} src={audioSrc} />
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
