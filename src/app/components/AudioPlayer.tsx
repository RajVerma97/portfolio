import React from "react";
import { Play, Pause } from "lucide-react";

interface AudioClip {
  name: string;
  url: string;
}

interface AudioPlayerProps {
  audioClips: AudioClip[];
  currentClip: AudioClip;
  setCurrentClip: (clip: AudioClip) => void;
  isPlaying: boolean;
  togglePlayback: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioClips,
  currentClip,
  setCurrentClip,
  isPlaying,
  togglePlayback,
}) => {
  return (
    <div className="mt-6 w-full max-w-4xl bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{currentClip.name}</h2>
        <button
          onClick={togglePlayback}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          <span className="ml-2">{isPlaying ? "Pause" : "Play"}</span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {audioClips.map((clip) => (
          // <button
          //   key={clip.name}
          //   onClick={() => setCurrentClip(clip)}
          //   className={`p-2 rounded-md text-sm ${
          //     currentClip.name === clip.name
          //       ? "bg-blue-500 text-white"
          //       : "bg-gray-700 hover:bg-gray-600"
          //   }`}
          // >
            {clip.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AudioPlayer;
