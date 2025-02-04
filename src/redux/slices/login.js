import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  checkLogin: false
}

export const checkLoginSlice = createSlice({
  name:"checkLogin",
  initialState,
  reducers: {
    login: (state) => {
      state.checkLogin = true;
    },
    logout: (state) => {
      state.checkLogin = false; 
    },
  }
})

export const {login, logout} = checkLoginSlice.actions;

export default checkLoginSlice.reducer;