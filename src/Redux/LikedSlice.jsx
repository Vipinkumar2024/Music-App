import { createSlice } from "@reduxjs/toolkit";

const LikedSlice=createSlice({
    name:'liked',
    initialState:[],
    reducers:{
        AddLikedSongs:(state,action)=>{
let exit=state.find((item)=>state.songIndex==action.payload.songIndex)
if(exit){
    return 
}
else{
    state.push(action.payload)
}
        },
        removeLikedSongs:(state,action)=>{
return state.filter(item => item.songIndex !== action.payload);
        }
    }
})

export const {AddLikedSongs,removeLikedSongs}=LikedSlice.actions;
export default LikedSlice.reducer