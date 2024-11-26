import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggleIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleIsOpen, setIsOpen } = uiSlice.actions;
export default uiSlice.reducer;
