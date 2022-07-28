import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  businessDetails: null,
};

export const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    addBusiness: (state, action) => {
      state.businessDetails = action.payload;
    },
  },
});

export const { addBusiness } = businessSlice.actions;
export default businessSlice.reducer;
