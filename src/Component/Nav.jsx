import React from 'react'
import { TiHome } from 'react-icons/ti'
import { IoSearch } from 'react-icons/io5'
import { RiPlayListLine } from 'react-icons/ri'
import { IoMdHeart } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full h-[80px]  z-50 bg-black bottom-0 md:top-0 text-white  fixed flex justify-center items-center gap-10'>
<Link to='/'><TiHome className='w-7 h-12'/></Link>
 <Link to='/search'><IoSearch className='w-7 h-12' /></Link>
<Link to='/playlist'>< RiPlayListLine className='w-7 h-12'/></Link>
<Link to='/liked'><IoMdHeart className='w-7 h-12'/></Link>
    </div>
  )
}

export default Nav