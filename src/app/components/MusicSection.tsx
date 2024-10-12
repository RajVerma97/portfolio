"use client";

import { useContext } from "react";
import { CursorContext } from "./CursorProvider";
import MusicCard from "./MusicCard";

export default function MusicSection() {
  const cursorState = useContext(CursorContext);
  const setCursorType = cursorState ? cursorState[1] : undefined;

  // Sample song data
  const songs = [
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      album: "÷",
      image: "/perfect.png",
      audio: "/perfect.mp3",
    },
    {
      title: "Sugar",
      artist: "Maroon 5",
      album: "Songs About Jane",
      image: "/sugar.png",
      audio: "/sugar.mp3",
    },
    {
      title: "Tu Hai Kahan",
      artist: "Uraan",
      album: "Tu Hai Kahan",
      image: "/tu-hai-kahan.png",
      audio: "/tu-hai-kahan.mp3",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 bg-black">
      <div className="flex justify-center items-center gap-10 mb-8">
        <h1
          className="tracking-tight inline font-semibold text-4xl lg:text-6xl text-white"
          onPointerEnter={() => setCursorType?.("hovered")}
          onPointerLeave={() => setCursorType?.("default")}
        >
          Music
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {songs.map((song, index) => {
          return (
            <MusicCard
              key={index}
              title={song.title}
              artist={song.artist}
              album={song.album}
              image={song.image}
              audioSrc={song.audio}
            />
          );
        })}
      </div>
    </div>
  );
}
