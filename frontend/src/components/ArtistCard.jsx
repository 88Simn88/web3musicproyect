import React from "react";

const ArtistCard = ({ name, image, description, onGift }) => {
  return (
    <div className="w-[195px] h-[195px] relative group">
      <div className="w-full h-full bg-gray-900 rounded-[12px] flex flex-col items-center overflow-hidden transition-all duration-300 
                      hover:shadow-[0_0_20px_rgba(62,129,246,0.6)] 
                      hover:border hover:border-indigo-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 p-[2px]">
        <div className="w-full h-full bg-gray-900 rounded-[10px] flex flex-col items-center overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="w-full h-[100px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <h3 className="text-[14px] font-semibold text-white mt-[6px] text-center px-2">{name}</h3>
          <p className="text-[12px] text-gray-300 mt-[2px] px-2 text-center leading-snug">{description}</p>

          {/* Botón de regalo */}
          {onGift && (
            <button
              onClick={() => onGift(name)}
              className="absolute bottom-2 right-2 text-white text-[12px] font-semibold px-3 py-1 rounded-lg shadow-lg
                         bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-110 
                         transition-all hover:scale-110 active:scale-95 animate-pulse"
            >
              🎁
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;






