import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBusinessDetails: null,
};

export const allBusinessSlice = createSlice({
  name: "allBusiness",
  initialState,
  reducers: {
    addAllBusiness: (state, action) => {
      state.allBusinessDetails = action.payload;
    },
  },
});

export const { addAllBusiness } = allBusinessSlice.actions;
export default allBusinessSlice.reducer;
