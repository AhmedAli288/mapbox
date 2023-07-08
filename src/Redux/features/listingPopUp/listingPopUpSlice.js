import { createSlice } from "@reduxjs/toolkit";

const listingPopUpSlice = createSlice({
  name: "listingPopUp",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openPopUp: (state) => {
      state.isOpen = true;
    },
    closePopUp: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openPopUp, closePopUp } = listingPopUpSlice.actions;
export default listingPopUpSlice.reducer;
