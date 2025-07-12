import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Liked from './pages/Liked'
import Search from './pages/Search'
import Playlist from './pages/Playlist'
import Nav from './Component/Nav'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Nav/>
      <Routes>
<Route  path='/' element={<Home/>} />
<Route  path='/liked'element={<Liked/>}/>
< Route path='/search' element={<Search/>}/>
<Route path='playlist' element={<Playlist/>}/>
      </Routes>
      </BrowserRouter>
            <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  )
}

export default App