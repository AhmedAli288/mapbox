import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initial: "AE",
};
const selectedCountrySlice = createSlice({
  name: "SET_COUNTRY_CODE",
  initialState,
  reducers: {
    change_country_code: (state, action) => {
      state.initial = action.payload;
    },
  },
});

// console.log(selectedCountrySlice);
export const { change_country_code } = selectedCountrySlice.actions;
export default selectedCountrySlice.reducer;
