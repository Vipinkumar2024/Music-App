import React, { createContext, useEffect, useRef, useState } from 'react';
import { songsData } from '../song';

export const dataContext = createContext();

const UserContext = ({ children }) => {
  const audioRef = useRef(new Audio());
  const [index, setIndex] = useState(0);
  const [playingSong, SetPlayingSong] = useState(false);

  useEffect(() => {
    audioRef.current.src = songsData[index].song;
    audioRef.current.load();

    if (playingSong) {
      audioRef.current.play();
    }
  }, [index]);

  const playSong = () => {
    SetPlayingSong(true);
    audioRef.current.play();
  };

  const pauseSong = () => {
    SetPlayingSong(false);
    audioRef.current.pause();
  };

  const nextSong = () => {
    setIndex(prev => (prev === songsData.length - 1 ? 0 : prev + 1));
  };

  const prevSong = () => {
    setIndex(prev => (prev === 0 ? songsData.length - 1 : prev - 1));
  };

  const value = {
    audioRef,
    playSong,
    pauseSong,
    nextSong,
    prevSong,
    playingSong,
    SetPlayingSong,
    setIndex,
    index,
  };

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  );
};

export default UserContext;
