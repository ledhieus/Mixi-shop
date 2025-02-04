import { createSlice } from "@reduxjs/toolkit";
import { deleteCart, getCart, setCart } from "../../helper/localStorage";

const cartItemList = getCart()

const initialState ={
  cartItemList: cartItemList
}


export const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers: {
    addToCart:(state, action) =>{
      const {id, size, quantity} = action.payload
      const existingCartId = state.cartItemList.findIndex(item=> item.id === id && item.size === size)
      if(existingCartId !== -1 ){
        state.cartItemList[existingCartId].quantity += quantity
      } else{
        state.cartItemList.push(action.payload)
      }
      setCart(state.cartItemList)
    },
    removeCartId:(state, action)=> {
      const id = action.payload.id
      const size = action.payload.size
      console.log(id, size)
      state.cartItemList = state.cartItemList.filter(item => !(item.id === id && item.size === size))
      setCart(state.cartItemList)
    },
    removeAll: (state)=> {
      state.cartItemList = []
      deleteCart()
    }
  }
})

export const {addToCart, removeCartId, removeAll} = cartSlice.actions;
export default cartSlice.reducer;