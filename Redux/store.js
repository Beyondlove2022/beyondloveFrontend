import { configureStore } from "@reduxjs/toolkit";
import businessReducer from "../Redux/businessSlice";
import allBusinessReducer from "../Redux/allBusinessSlice";

export const store = configureStore({
  reducer: {
    business: businessReducer,
    allBusiness: allBusinessReducer,
  },
});
