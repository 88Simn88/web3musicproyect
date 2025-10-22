import React, { useState } from "react";
import { Play, Pause } from "lucide-react";

const ListenAgain = ({ onPlaySong }) => {
  const [playing, setPlaying] = useState(null);

  const songs = [
    { title: "Canción 1", artist: "Artista Famoso", url: "/image/audio/Audio 1.mp3", image: "/image/Cancion 1.png" },
    { title: "Canción 2", artist: "Artista Famoso", url: "/image/audio/Audio 2.mp3", image: "/image/Cancion 2.png" },
    { title: "Canción 3", artist: "Artista Famoso", url: "/image/audio/Audio 3.mp3", image: "/image/Cancion 3.png" },
    { title: "Canción 4", artist: "Artista Famoso", url: "/image/audio/Audio 4.mp3", image: "/image/Cancion 4.png" },
    { title: "Canción 5", artist: "Artista Famoso", url: "/image/audio/Audio 5.mp3", image: "/image/Cancion 5.png" },
  ];

  const handlePlay = (song) => {
    setPlaying(song.title);
    if (onPlaySong) onPlaySong(song);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-[25px] p-4">
      {songs.map((song) => (
        <div key={song.title} className="w-[195px] h-[195px] relative group">
          <div className="w-full h-full bg-gray-900 rounded-[12px] flex flex-col items-center overflow-hidden transition-all duration-300 
                          hover:shadow-[0_0_20px_rgba(62,129,246,0.6)] 
                          hover:border hover:border-indigo-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 p-[2px]">
            <div className="w-full h-full bg-gray-900 rounded-[10px] flex flex-col items-center overflow-hidden relative">
              
              <img
                src={song.image}
                alt={song.title}
                className="w-full h-[100px] object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <h3 className="text-[14px] font-semibold text-white mt-[6px] text-center px-2">
                {song.title}
              </h3>

              <button
                onClick={() => handlePlay(song)}
                className="absolute bottom-2 right-2 w-10 h-10 flex items-center justify-center rounded-full
                           bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                           shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              >
                {playing === song.title ? (
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

export default ListenAgain;











