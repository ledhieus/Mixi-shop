import { createSlice } from "@reduxjs/toolkit";
import { getFavorite } from "../../helper/localStorage";


const initialState ={
  countFavorite: getFavorite().length,
  favoriteList: getFavorite(),
}


export const countFavoriteSlice = createSlice({
  name:"countFavorite",
  initialState,
  reducers: {
    updateCount:(state, action) =>{
      const id = action.payload.id
      const existingIndex = state.favoriteList.findIndex((item)=> item.id === id)
      if(existingIndex !== -1){
        state.favoriteList.splice(existingIndex, 1);
        state.countFavorite--
      } else{
        state.favoriteList.push({ id });
        state.countFavorite++
      }
    }
  }
})

export const {updateCount} = countFavoriteSlice.actions;
export default countFavoriteSlice.reducer;