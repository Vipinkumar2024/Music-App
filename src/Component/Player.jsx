
import React, { useContext } from 'react';
import { MdOutlinePause } from 'react-icons/md';
import { IoPlay } from 'react-icons/io5';
import { songsData } from '../song';
import { dataContext } from '../context/UserContext';

const Player = () => {
  const { playingSong, pauseSong, playSong, index } = useContext(dataContext);

  const currentSong = songsData[index];

  return (
    <div className="w-full md:w-[60%] fixed bottom-[80px] md:bottom-[10px] bg-white h-[90px] rounded-t-2xl md:rounded-lg shadow-lg flex items-center justify-between px-4 z-50">
      
      {/* Left: Song Image & Info */}
      <div className="flex items-center gap-3">
        <img
          src={currentSong.image}
          alt={currentSong.name}
          className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-lg object-cover shadow-md"
        />
        <div className="flex flex-col justify-center">
          <div className="text-black font-semibold text-sm md:text-lg">{currentSong.name}</div>
          <div className="text-gray-600 text-xs md:text-sm">{currentSong.singer}</div>
        </div>
      </div>

      {/* Right: Play/Pause */}
      <div>
        {!playingSong ? (
          <IoPlay
            onClick={playSong}
            className="w-[35px] h-[35px] p-1 rounded-full bg-black text-white hover:bg-gray-700 cursor-pointer"
          />
        ) : (
          <MdOutlinePause
            onClick={pauseSong}
            className="w-[35px] h-[35px] p-1 rounded-full bg-black text-white hover:bg-gray-700 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Player;
