import React, { useState, useEffect, useRef } from "react";
import { Shuffle, SkipBack, Play, Pause, SkipForward, Repeat, Star, Gift, Volume2 } from "lucide-react";

const PlayerBar = ({ song, isPlaying, setIsPlaying, onNext }) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (song && audioRef.current) {
      audioRef.current.src = song.url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [song]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && song) {
        setCurrentTime(audioRef.current.currentTime);
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        if (audioRef.current.ended) {
          if (onNext) onNext();
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, [song, onNext]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (sec) => {
    if (!sec) return "0:00";
    return `${Math.floor(sec / 60)}:${("0" + Math.floor(sec % 60)).slice(-2)}`;
  };

  return (
    <>
      <audio ref={audioRef} />
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2
                      w-[1024px] h-[60px] bg-gray-600 bg-opacity-90 rounded-[30px]
                      flex items-center justify-between px-6 shadow-lg z-50">

        {/* Lado izquierdo: título y artista */}
        <div className="flex flex-col justify-center w-[200px]">
          <span className="text-white text-[14px] font-semibold truncate">
            {song ? song.title : "Sin canción seleccionada"}
          </span>
          <span className="text-gray-300 text-[12px] truncate">
            {song ? song.artist : "-"}
          </span>
        </div>

        {/* Botones centrales y línea de progreso */}
        <div className="flex flex-col items-center w-[590px] h-full justify-center">
          <div className="flex items-center justify-center gap-4 mb-1">
            <Shuffle className="w-6 h-6 text-white hover:brightness-110 transition-all" />
            <SkipBack className="w-6 h-6 text-white hover:brightness-110 transition-all" />

            <button
              onClick={togglePlay}
              className={`w-10 h-10 flex items-center justify-center rounded-full
                         ${song ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg" : "bg-gray-600"} 
                         hover:scale-105 transition-transform`}
              disabled={!song}
            >
              {isPlaying && song ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 text-white" />}
            </button>

            <SkipForward className="w-6 h-6 text-white hover:brightness-110 transition-all" />
            <Repeat className="w-6 h-6 text-white hover:brightness-110 transition-all" />
          </div>

          {/* Línea de progreso */}
          <div className="w-full h-2 bg-gray-500 rounded-full">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Lado derecho */}
        <div className="flex items-center gap-3 text-white w-[180px] justify-end">
          <span className="text-[12px]">{formatTime(currentTime)}</span>
          <Star className="w-6 h-6 text-yellow-400 hover:brightness-110 transition-all" />
          <Gift className="w-6 h-6 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-lg hover:brightness-110 transition-all" />
          <Volume2 className="w-6 h-6 text-white hover:brightness-110 transition-all" />
        </div>
      </div>
    </>
  );
};

export default PlayerBar;



















