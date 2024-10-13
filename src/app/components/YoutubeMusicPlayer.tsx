// YouTubeMusicPlayer.tsx
import React from "react";

interface YouTubeMusicPlayerProps {
  videoUrl: string;
}

const YouTubeMusicPlayer: React.FC<YouTubeMusicPlayerProps> = ({
  videoUrl,
}) => {
  // Extract the video ID from the URL
  const videoId = videoUrl.split("v=")[1]?.split("&")[0];

  return (
    <div className="youtube-music-player">
      {videoId ? (
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1`}
          title="YouTube Music Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Invalid YouTube URL</p>
      )}
    </div>
  );
};

export default YouTubeMusicPlayer;
