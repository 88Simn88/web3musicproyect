// src/components/Releases.jsx
import React, { useState } from "react";
import { Play, Pause } from "lucide-react";

const Releases = ({ onPlaySong }) => {
  const [playing, setPlaying] = useState(null);

  const releases = [
    { title: "Release 1", artist: "MC Urbano", url: "/image/audio/Audio 1.mp3", image: "/image/Release 1.png" },
    { title: "Release 2", artist: "Aurora", url: "/image/audio/Audio 2.mp3", image: "/image/Release 2.png" },
    { title: "Release 3", artist: "NeoBit", url: "/image/audio/Audio 3.mp3", image: "/image/Release 3.png" },
    { title: "Release 4", artist: "DJ Flow", url: "/image/audio/Audio 4.mp3", image: "/image/Release 4.png" },
    { title: "Release 5", artist: "Luna", url: "/image/audio/Audio 5.mp3", image: "/image/Release 5.png" },
  ];

  const handlePlayRelease = (release) => {
    setPlaying(release.title);
    if (onPlaySong) onPlaySong(release);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-[25px] p-4">
      {releases.map((release) => (
        <div key={release.title} className="w-[195px] h-[195px] relative group">
          <div className="w-full h-full bg-gray-900 rounded-[12px] flex flex-col items-center overflow-hidden transition-all duration-300 
                          hover:shadow-[0_0_20px_rgba(62,129,246,0.6)] 
                          hover:border hover:border-indigo-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 p-[2px]">
            <div className="w-full h-full bg-gray-900 rounded-[10px] flex flex-col items-center overflow-hidden relative">
              
              <img
                src={release.image}
                alt={release.title}
                className="w-full h-[100px] object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <h3 className="text-[14px] font-semibold text-white mt-[6px] text-center px-2">
                {release.title}
              </h3>

              <button
                onClick={() => handlePlayRelease(release)}
                className="absolute bottom-2 right-2 w-10 h-10 flex items-center justify-center rounded-full
                           bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                           shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              >
                {playing === release.title ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Releases;











