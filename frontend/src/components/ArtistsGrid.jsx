import React from "react";
import ArtistCard from "./ArtistCard";

const ArtistsGrid = ({ onGift, onPlay }) => {
  const artists = [
    { name: "MC Urbano", image: "/image/MC Urbano.png", description: "El rey del urbano", song: { title: "Urban Vibes", artist: "MC Urbano", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" } },
    { name: "Aurora", image: "/image/Aurora.png", description: "Ritmos frescos y únicos", song: { title: "Aurora Beats", artist: "Aurora", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" } },
    { name: "DJ Flow", image: "/image/DJ Flow.png", description: "Maestro de las mezclas", song: { title: "Flowing Rhythm", artist: "DJ Flow", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" } },
    { name: "NeoBit", image: "/image/NeoBit.png", description: "Fusión electrónica urbana", song: { title: "Neo Beats", artist: "NeoBit", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" } },
    { name: "Luna", image: "/image/Luna.png", description: "Ritmos suaves y urbanos", song: { title: "Moonlight Vibes", artist: "Luna", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" } },
  ];

  return (
    <div className="p-4 overflow-x-auto">
      <div className="flex gap-[25px]">
        {artists.map((artist) => (
          <ArtistCard
            key={artist.name}
            name={artist.name}
            image={artist.image}
            description={artist.description}
            onGift={onGift}
            onPlay={() => onPlay(artist.song)}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistsGrid;






