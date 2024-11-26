// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./Slices/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export default store;
