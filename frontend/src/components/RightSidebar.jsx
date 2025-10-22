import React from "react";
import { Music, Plus } from "lucide-react";

const musicButtons = [
  { id: 1, icon: Music },
  { id: 2, icon: Music },
  { id: 3, icon: Music },
  { id: 4, icon: Music },
  { id: 5, icon: Plus },
];

const RightSidebar = () => {
  return (
    <aside
      className="hidden lg:flex fixed top-[67px] right-0 h-[calc(100vh-67px)] w-[48px]
                 bg-gradient-to-b from-gray-800 via-gray-900 to-black
                 flex-col items-center justify-start gap-3 py-4 z-40"
    >
      {musicButtons.map((btn) => {
        const Icon = btn.icon;
        return (
          <button
            key={btn.id}
            className="w-10 h-10 flex items-center justify-center rounded-full
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       hover:brightness-110 transition-all"
          >
            <Icon className="w-5 h-5 text-white" />
          </button>
        );
      })}
    </aside>
  );
};

export default RightSidebar;
























