import { createSlice } from "@reduxjs/toolkit";
import { getFavorite, setFavorite } from "../../helper/localStorage";

const favoriteList = getFavorite()
const initialState ={
  favoriteList: favoriteList
}


export const favoriteSlice = createSlice({
  name:"favorite",
  initialState,
  reducers: {
    addFavoriteId:(state, action) =>{
      const id = action.payload.id
      const existingIndex = state.favoriteList.findIndex((item)=> item.id === id)
      if(existingIndex !== -1){
        state.favoriteList.splice(existingIndex, 1)
      } else{
        state.favoriteList.push({id})
      }
      setFavorite(state.favoriteList)
    }
  }
})

export const {addFavoriteId} = favoriteSlice.actions;
export default favoriteSlice.reducer;