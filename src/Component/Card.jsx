import React, { useContext } from 'react';
import { MdPlaylistAdd, MdOutlinePlaylistRemove } from 'react-icons/md';
import { GoHeart } from 'react-icons/go';
import { AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { dataContext } from '../context/UserContext';
import { AddSong, removeSong } from '../Redux/PlaylistSlice';
import { AddLikedSongs, removeLikedSongs } from '../Redux/LikedSlice';

const Card = ({ name, image, singer, songIndex }) => {
  const { playSong, setIndex } = useContext(dataContext);
  const dispatch = useDispatch();

  const playlist = useSelector(state => state.playlist);
  const liked = useSelector(state => state.liked);

  const SongExists = playlist.some(song => song.songIndex === songIndex);
  const songLiked = liked.some(song => song.songIndex === songIndex);

  const handleAddToPlaylist = () => {
    dispatch(AddSong({ name, image, singer, songIndex }));
    toast.success("🎵 Added to Playlist");
  };

  const handleRemoveFromPlaylist = () => {
    dispatch(removeSong(songIndex));
    toast.error("🗑️ Removed from Playlist");
  };

  const handleLike = () => {
    dispatch(AddLikedSongs({ name, image, singer, songIndex }));
    toast.success("💖 Added to Liked Songs");
  };

  const handleUnlike = () => {
    dispatch(removeLikedSongs(songIndex));
    toast.info("💔 Removed from Liked Songs");
  };

  return (
    <div className="w-full max-w-[95%] mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start bg-gray-800 rounded-md shadow-md cursor-pointer p-2 gap-2 sm:h-[100px]">
      {/* Song Info */}
      <div
        className="flex flex-row items-center gap-2 w-full sm:w-auto"
        onClick={() => {
          setIndex(songIndex);
          playSong();
        }}
      >
        <img
          src={image}
          alt={name}
          className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] object-cover rounded-md"
        />

        <div className="text-white flex flex-col justify-center">
          <span className="font-serif text-[16px] sm:text-[20px]">{name}</span>
          <span className="font-semibold text-gray-400 text-[12px] sm:text-[14px]">
            {singer}
          </span>
        </div>
      </div>

      {/* Playlist + Like/Unlike Icons */}
      <div className="flex justify-center items-center gap-3 text-white">
        {!SongExists ? (
          <MdPlaylistAdd
            className="text-[18px] sm:text-[20px] cursor-pointer"
            onClick={handleAddToPlaylist}
          />
        ) : (
          <MdOutlinePlaylistRemove
            className="text-[18px] sm:text-[20px] cursor-pointer"
            onClick={handleRemoveFromPlaylist}
          />
        )}

        {!songLiked ? (
          <GoHeart
            className="text-[18px] sm:text-[20px] cursor-pointer"
            onClick={handleLike}
          />
        ) : (
          <AiFillHeart
            className="text-[18px] sm:text-[20px] cursor-pointer"
            onClick={handleUnlike}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
