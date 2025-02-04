import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../../helper/localStorage";

const cartItemList = getCart()
const totalOrder = (cartItems)=> {
  return cartItems.reduce((total, cartItem) => {
    const price = cartItem.price; 
    return total + (price ? price * cartItem.quantity : 0);
  }, 0);
}

const initialState ={
  totalBill: totalOrder(cartItemList)
}


export const totalBillSlice = createSlice({
  name:"totalBill",
  initialState,
  reducers: {
    updateTotalBill:(state, action) =>{
      const cartItems = action.payload;
      state.totalBill = totalOrder(cartItems);
    },
  }
})

export const {updateTotalBill} = totalBillSlice.actions;
export default totalBillSlice.reducer;