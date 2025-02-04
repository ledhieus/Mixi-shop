import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bill: {
    date: "",
    timeCheck: "",
    totalBill: "",
    itemList: "",
    note: "",
    userId:""
  },
};

export const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    addBill: (state, action) => {
      const {date="", timeCheck="", totalBill="", itemList="", note="", userId=""} = action.payload
      state.bill = { ...state.bill, date, timeCheck, totalBill, itemList, note, userId };
    },
    removeBill: (state)=> {
      state.bill = { ...initialState.bill };
    }
  },
});

export const { addBill, removeBill } = billSlice.actions;
export default billSlice.reducer;
