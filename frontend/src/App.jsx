import React, { useState } from "react";
import { WalletProvider, useWallet } from "./context/WalletContext.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import RightSidebar from "./components/RightSidebar.jsx";
import ArtistsGrid from "./components/ArtistsGrid.jsx";
import ListenAgain from "./components/ListenAgain.jsx";
import Releases from "./components/Releases.jsx";
import PlayerBar from "./components/PlayerBar.jsx";
import ModalTip from "./components/ModalTip.jsx";

const AppContent = () => {
  const { account, connectWallet } = useWallet();
  const [selectedArtist, setSelectedArtist] = useState(null);

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleGift = (artistName) => {
    setSelectedArtist(artistName);
  };

  const handlePlaySong = (song) => {
    if (currentSong?.url === song.url) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-synthBlack text-synthWhite">
      <Header>
        <button
          onClick={connectWallet}
          className="ml-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white"
        >
          {account ? account.slice(0, 6) + "..." + account.slice(-4) : "Conectar Wallet"}
        </button>
      </Header>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-6 space-y-10 pr-[56px]">
          <section>
            <h2 className="text-[20px] font-bold mb-4">Artistas Destacados</h2>
            <ArtistsGrid onGift={handleGift} onPlay={handlePlaySong} />
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4">Escuchar otra vez</h2>
            <ListenAgain
              onPlaySong={handlePlaySong}
              currentSong={currentSong}
            />
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4">Lanzamientos</h2>
            <Releases
              onPlaySong={handlePlaySong}
              currentSong={currentSong}
            />
          </section>
        </main>

        <RightSidebar />
      </div>

      <PlayerBar
        song={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      {selectedArtist && (
        <ModalTip
          artist={selectedArtist}
          onClose={() => setSelectedArtist(null)}
        />
      )}
    </div>
  );
};

const App = () => (
  <WalletProvider>
    <AppContent />
  </WalletProvider>
);

export default App;


















