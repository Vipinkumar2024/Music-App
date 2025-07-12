import React, { useContext, useState } from 'react';
import { songsData } from '../song';
import musicImg from '../assets/musicanim.webp';
import { CgPlayTrackPrev, CgPlayTrackNext } from 'react-icons/cg';
import { IoPlay } from 'react-icons/io5';
import { MdOutlinePause, MdKeyboardArrowDown } from 'react-icons/md';
import { dataContext } from '../context/UserContext';
import Card from '../Component/Card';
import Player from '../Component/Player';


const Home = () => {
  const [arrow, setArrow] = useState(false);
  const {
    playSong,
    pauseSong,
    nextSong,
    prevSong,
    playingSong,
    index,
    setIndex,
  } = useContext(dataContext);

  return (
    <div className="w-full min-h-screen md:h-screen bg-black flex flex-col md:flex-row overflow-y-auto md:overflow-hidden relative ">

      {/* Toggle Button for Song List on Mobile */}
      <MdKeyboardArrowDown
        onClick={() => setArrow(!arrow)}
        className="fixed text-white  top-[15px] left-[10%] text-[30px] md:hidden cursor-pointer z-10"
      />

      {/* Now Playing Section */}
      {!arrow && (
        <div className="w-full md:w-[50%] flex justify-center md:justify-start items-center pt-[30px] md:pt-[100px] flex-col gap-3">
          <h1 className="text-white font-serif text-[20px]">Now Playing</h1>

          <div className="w-[50%] md:w-[200px] md:h-[200px] rounded-md overflow-hidden relative">
            <img src={songsData[index].image} alt="song" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center items-center">
              <img src={musicImg} alt="music animation" className="w-[60%]" />
            </div>
          </div>

          <div className="text-center">
            <div className="text-white text-[15px] md:text-[30px] font-bold font-serif">
              {songsData[index].name}
            </div>
            <div className="text-white text-[10px] md:text-[15px] font-serif">
              {songsData[index].singer}
            </div>
          </div>

          <div className="text-white flex justify-center items-center gap-2">
            <CgPlayTrackPrev onClick={prevSong} className="w-[30px] h-[30px] cursor-pointer" />
            {!playingSong ? (
              <IoPlay
                onClick={playSong}
                className="w-[35px] h-[35px] p-1 rounded-full bg-white text-black hover:bg-gray-500 cursor-pointer"
              />
            ) : (
              <MdOutlinePause
                onClick={pauseSong}
                className="w-[35px] h-[35px] p-1 rounded-full bg-white text-black hover:bg-gray-500 cursor-pointer"
              />
            )}
            <CgPlayTrackNext onClick={nextSong} className="w-[30px] h-[30px] cursor-pointer" />
          </div>
        </div>
      )}

      {/* Song List - Mobile */}
      {arrow && (
        <div className="w-full flex md:hidden flex-col gap-3 pb-[100px] pt-[70px]  overflow-y-auto px-4">

          {songsData.map((item) => (
            <Card
              key={item.id}
              songIndex={item.id}
              name={item.name}
              image={item.image}
              singer={item.singer}
            />
          ))}
        </div>
      )}

      {/* Song List - Desktop */}
      <div className="hidden md:flex w-[50%] h-full flex-col gap-3 pt-5 md:pt-[120px] overflow-y-auto px-4">
        {songsData.map((item) => (
          <Card
            key={item.id}
            songIndex={item.id}
            name={item.name}
            image={item.image}
            singer={item.singer}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
