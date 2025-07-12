import { createSlice } from "@reduxjs/toolkit";

const PlaylistSlice=createSlice({
    name:'playlist',
    initialState:[],
    reducers:{
AddSong:(state,action)=>{
 let exit=   state.find((song)=>song.songIndex==action.payload.songIndex)
 if(exit){
    return
 }
 else{
state.push(action.payload)
 }

},

removeSong: (state, action) => {
  return state.filter(item => item.songIndex !== action.payload);
}




    }
    
    }
)

export const {AddSong,removeSong}=PlaylistSlice.actions;
export default PlaylistSlice.reducer