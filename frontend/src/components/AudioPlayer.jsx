import React, { useState, useRef } from "react";

const AudioPlayer = ({ song }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player p-4 border rounded shadow-md flex flex-col items-center gap-2">
      <h3 className="font-bold">{song.title}</h3>
      <p className="text-sm text-gray-600">{song.artist}</p>
      <audio ref={audioRef} src={song.url} preload="auto" />
      <button
        onClick={togglePlay}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default AudioPlayer;
