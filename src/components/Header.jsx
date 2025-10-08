import React from "react";
import { Music, Star, Bell, User } from "lucide-react";
import { useWallet } from "../context/WalletContext.jsx";

const Header = () => {
  const { wallet, connectWallet, disconnectWallet } = useWallet();

  return (
    <header
      className="h-[67px] flex items-center justify-between px-[39px] 
                 bg-gradient-to-r from-black via-gray-900 to-gray-800
                 text-synthWhite sticky top-0 z-50"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Music className="w-6 h-6 text-white" />
        <span className="text-2xl font-bold bg-gradient-main text-transparent bg-clip-text animate-gradient-x">
          SYNTHFLOW
        </span>
      </div>

      {/* Nav */}
      <nav className="flex items-center space-x-6 text-[16px] text-synthGray96">
        <a href="#" className="hover:text-white transition-colors">Todo</a>
        <a href="#" className="hover:text-white transition-colors">Música</a>
        <a href="#" className="hover:text-white transition-colors">TOP</a>
        <input
          type="text"
          placeholder="Buscar..."
          className="w-[180px] px-3 py-1 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        <a href="#" className="hover:text-white transition-colors">Artistas</a>
        <a href="#" className="hover:text-white transition-colors">Explorar</a>
        <a href="#" className="hover:text-white transition-colors">Acerca</a>
      </nav>

      {/* Wallet & Icons */}
      <div className="flex items-center gap-4">
        <Star className="w-5 h-5 text-yellow-400 hover:brightness-110 transition-all cursor-pointer" />
        <Bell className="w-5 h-5 text-white hover:brightness-110 transition-all cursor-pointer" />
        <User className="w-5 h-5 text-white hover:brightness-110 transition-all cursor-pointer" />

        <button
          onClick={() => (wallet ? disconnectWallet() : connectWallet())}
          className="px-[20px] py-[8px] rounded-full bg-gradient-main text-synthWhite text-[14px] font-medium hover:brightness-110 transition-all"
        >
          {wallet
            ? `${wallet.address.slice(0, 6)}...${wallet.address.slice(-4)}`
            : "Conectar Wallet"}
        </button>
      </div>
    </header>
  );
};

export default Header;






