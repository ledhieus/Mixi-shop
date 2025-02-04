import { createSlice } from "@reduxjs/toolkit";
const initialState ={
  productList: []
}

export const productListSlice = createSlice({
  name:"productList",
  initialState,
  reducers: {
    updateProductList:(state, action) =>{
      state.productList = action.payload
    }
  }
})

export const {updateProductList} = productListSlice.actions;
export default productListSlice.reducer;