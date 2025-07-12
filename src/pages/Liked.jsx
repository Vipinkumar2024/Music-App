import React from 'react'
import Player from '../Component/Player'
import { useSelector } from 'react-redux'
import Card from '../Component/Card'

const Liked = () => {
   let like=useSelector(state=>state.liked)
  return (
    <div className='w-full min-h-screen bg-black flex flex-col items-center pt-[120px] gap-6'>
      <Player/>
      <h1 className='text-white font-serif text-[15px] md:text-[25px] text-center'>Liked Song </h1>
 {like.length<1?<div className='text-red-500 font-serif   text-[15px] md:text-[20px]'> No liked song is availble</div>:( <div className='w-full md:w-[70%] h-[[65%] md:h-[100%] flex flex-col items-center justify-center gap-3 pb-[120px]'>
       {
        like.map((item)=>(
<Card  key={item.songIndex}  name={item.name}   image={item.image} singer={item.singer} songIndex={item.songIndex}    />
        ))
      }
     </div>
    )}
    </div>
  )
}

export default Liked