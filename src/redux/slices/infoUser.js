import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  infoUser: {
    email: "",
    fullName: "",
    phone: "",
    id: "",
  },
};

export const infoUserSlice = createSlice({
  name: "infoUser",
  initialState,
  reducers: {
    addInforUser: (state, action) => {
      const { email = "", fullName = "", phone = "", id="" } = action.payload;
      state.infoUser = { ...state.infoUser, email, fullName, phone, id };
    },
  },
});

export const {addInforUser} = infoUserSlice.actions;
export default infoUserSlice.reducer;
