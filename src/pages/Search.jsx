import React, { useEffect, useState } from 'react'
import Player from '../Component/Player'
import { IoSearch } from 'react-icons/io5'
import { songsData } from '../song'
import Card from '../Component/Card'

const Search = () => {

  const[query,setQuery]=useState('')
  const[filterSong,setFilterSong]=useState(songsData)
 useEffect(()=>{
  const debounce=setTimeout(()=>{
let inputText=query.trim().toLowerCase();
if(inputText.length>3){
  const filterData=filterSong.filter((song)=>song.name.toLowerCase().includes(inputText))
  setFilterSong(filterData)
}
else{
  setFilterSong(songsData)
}
  },300)

  return ()=>clearTimeout(debounce)

 },[query])

  return (
    <div className='w-full min-h-screen bg-black flex flex-col items-center pt-[120px] gap-6'>
      {/* Navbar or player */}
      <Player />

      {/* Search Input */}
      <form className='w-[90%] max-w-[600px] flex items-center gap-2 h-[50px] bg-gray-800 rounded-lg shadow-lg fixed top-[30px] md:top-[75px] px-3'>
        <IoSearch className='text-white text-xl' />
        <input
          type='text'
          value={query}
          placeholder='Search song...'
           onChange={(e) => setQuery(e.target.value)}
          className='w-full h-full bg-gray-800 outline-none border-0 text-white   placeholder-white'
        />

 

      </form>

      {/* Song Cards */}
      {/* If the user has typed 3 or more characters, and no songs matched the input..*/}
      <div className='w-full max-w-[900px] flex flex-col items-center gap-4 mt-4 pb-[160px]'>
        { query.trim().length>=3 && filterSong.length===0?(<p className='text-red-500 text-lg'>
      No songs found for "<span className='font-semibold'>{query}</span>"
    </p>):(filterSong.map((song) => (
          <Card
            key={song.id} 
            name={song.name}
            image={song.image}
            singer={song.singer}
            songIndex={song.id}
          />
        )))}
      </div>
    </div>
  )
}

export default Search