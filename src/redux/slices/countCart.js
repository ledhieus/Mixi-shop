import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../../helper/localStorage";


const initialState ={
  countCart: getCart().length,
  // cartList: getCart(),
}


export const countCartSlice = createSlice({
  name:"countCart",
  initialState,
  reducers: {
    updateCart:(state) =>{
      state.countCart++
    },
    downCart:(state)=> {
      state.countCart--
    }
  }
})

export const {updateCart, downCart} = countCartSlice.actions;
export default countCartSlice.reducer;