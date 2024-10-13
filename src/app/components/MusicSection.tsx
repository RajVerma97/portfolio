"use client";

import { useContext } from "react";
import { CursorContext } from "./CursorProvider";
import MusicCard from "./MusicCard";
import { Youtube } from "lucide-react";
import YouTubeMusicPlayer from "./YoutubeMusicPlayer";

export default function MusicSection() {
  const cursorState = useContext(CursorContext);
  const setCursorType = cursorState ? cursorState[1] : undefined;

  // Sample song data
  const songs = [
    {
      title: "Perfect",
      videoUrl: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    },
    {
      title: "Sugar",
      videoUrl: "https://www.youtube.com/watch?v=09R8_2nJtjg",
    },
    {
      title: "Tu Hai Kahan",
      videoUrl: "https://www.youtube.com/watch?v=AX6OrbgS8lI",
    },
    {
      title: "We dont'talk anymore ",
      videoUrl: "https://www.youtube.com/watch?v=3AtDnEC4zak",
    },
  ];

  return (
    <div className="w-full  flex flex-col  p-4 bg-black">
      <div className="flex justify-center items-center gap-10 mb-8">
        <h1
          className="tracking-tight inline font-semibold text-4xl lg:text-6xl text-white"
          onPointerEnter={() => setCursorType?.("hovered")}
          onPointerLeave={() => setCursorType?.("default")}
        >
          Creative Soundtracks
        </h1>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl"
        data-aos="fade-up"
      >
        {songs.map((song, index) => {
          return <YouTubeMusicPlayer videoUrl={song.videoUrl} key={index} />;
        })}
      </div>
    </div>
  );
}
