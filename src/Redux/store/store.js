import { configureStore } from "@reduxjs/toolkit";
import selectedCountrySlice from "../features/selectedCountry/selectedCountrySlice";
import listingPopUpSlice from "../features/listingPopUp/listingPopUpSlice";

export const store = configureStore({
  reducer: {
    selectedCountry: selectedCountrySlice,
    listingPopUp: listingPopUpSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
