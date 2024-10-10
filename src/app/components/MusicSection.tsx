"use client";

import MusicCard from "./MusicCard";

export default function MusicSection() {
  const songs = [
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      album: "÷",
      image: "/tu-hai-kahan.png",
    },
    {
      title: "Sugar",
      artist: "Maroon 5",
      album: "Songs About Jane",
      image: "perfect.png",
    },
    {
      title: "Tuhaikahan",
      artist: "Uraan",
      album: "Tuhaikahan",
      image: "/sugar.png",
    },
    {
      title: "Tuhaikahan",
      artist: "Uraan",
      album: "Tuhaikahan",
      image: "/sugar.png",
    },
  ];
  return (
    <div className="w-full min-h-screen  flex flex-col items-center justify-center p-4">
      <div className="flex justify-center items-center gap-10">
        <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl text-white mb-8">
          Music
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl">
        {songs.map((song, index) => {
          return (
            <MusicCard
              key={index}
              title={song.title}
              artist={song.artist}
              album={song.album}
              image={song.image}
            />
          );
        })}
      </div>
    </div>
  );
}
