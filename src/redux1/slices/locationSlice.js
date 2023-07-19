import { createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "../thunk/location.thunk";

const initialState = {
  areas: [],
};

export const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocation.fulfilled, (state, action) => {
      state.areas = [...action.payload];
    });
  },
});


export default locationSlice.reducer;
