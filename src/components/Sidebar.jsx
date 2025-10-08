import React from "react";
import { FaHome, FaRegClock, FaUser, FaMusic, FaBook, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-[207px] bg-synthBlack text-synthWhite pt-[42px] h-[calc(100vh-67px-51px)] sticky top-[67px] overflow-y-auto px-2">

      {/* Home */}
      <div className="mb-6">
        <span className="text-synthGray96 text-[12px] uppercase font-semibold mb-2 block">Home</span>
        <ul className="flex flex-col space-y-2">
          <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                         text-synthGray96 hover:text-synthWhite hover:bg-gradient-to-r
                         hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                         transition-all duration-300">
            <FaHome className="text-[16px]" />
            <span className="text-[14px] font-medium">Nuevo</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                         text-synthGray96 hover:text-synthWhite hover:bg-gradient-to-r
                         hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                         transition-all duration-300">
            <FaRegClock className="text-[16px]" />
            <span className="text-[14px] font-medium">Radio</span>
          </li>
        </ul>
      </div>

      {/* Librería */}
      <div className="mb-6">
        <span className="text-synthGray96 text-[12px] uppercase font-semibold mb-2 block">Librería</span>
        <ul className="flex flex-col space-y-2">
          <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                         text-synthGray96 hover:text-synthWhite hover:bg-gradient-to-r
                         hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                         transition-all duration-300">
            <FaRegClock className="text-[16px]" />
            <span className="text-[14px] font-medium">Agregados recientemente</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                         text-synthGray96 hover:text-synthWhite hover:bg-gradient-to-r
                         hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                         transition-all duration-300">
            <FaUser className="text-[16px]" />
            <span className="text-[14px] font-medium">Artistas</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                         text-synthGray96 hover:text-synthWhite hover:bg-gradient-to-r
                         hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                         transition-all duration-300">
            <FaMusic className="text-[16px]" />
            <span className="text-[14px] font-medium">Canciones</span>
          </li>
        </ul>
      </div>

      {/* Para Ti */}
      <div className="mb-6">
        <span className="text-synthGray96 text-[12px] uppercase font-semibold mb-2 block">Para Ti</span>
        <ul className="flex flex-col space-y-2">
          <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                         text-synthGray96 hover:text-synthWhite hover:bg-gradient-to-r
                         hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                         transition-all duration-300">
            <FaRegClock className="text-[16px]" />
            <span className="text-[14px] font-medium">Historial</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                         text-synthGray96 hover:text-synthWhite hover:bg-gradient-to-r
                         hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                         transition-all duration-300">
            <FaMusic className="text-[16px]" />
            <span className="text-[14px] font-medium">Me gusta</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                         text-synthGray96 hover:text-synthWhite hover:bg-gradient-to-r
                         hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                         transition-all duration-300">
            <FaUser className="text-[16px]" />
            <span className="text-[14px] font-medium">Playlist</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                         text-synthGray96 hover:text-synthWhite hover:bg-gradient-to-r
                         hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                         transition-all duration-300">
            <FaRegClock className="text-[16px]" />
            <span className="text-[14px] font-medium">Descargas</span>
          </li>
        </ul>
      </div>

      {/* Seguidores */}
      <div className="mb-6">
        <span className="text-synthGray96 text-[12px] uppercase font-semibold mb-2 block">Seguidores</span>
        <ul className="flex flex-col space-y-2">
          <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                         text-synthGray96 hover:text-synthWhite hover:bg-gradient-to-r
                         hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                         transition-all duration-300">
            <FaUser className="text-[16px]" />
            <span className="text-[14px] font-medium">Artista</span>
          </li>
          <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                         text-synthGray96 hover:text-synthWhite hover:bg-gradient-to-r
                         hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
                         transition-all duration-300">
            <FaUser className="text-[16px]" />
            <span className="text-[14px] font-medium">Artista</span>
          </li>
        </ul>
      </div>

    </aside>
  );
};

export default Sidebar;

