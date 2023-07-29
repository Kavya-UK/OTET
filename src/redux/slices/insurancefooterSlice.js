import { createSlice } from "@reduxjs/toolkit";
import { fetchInsurance } from "../thunk/insurance.thunk";

const initialState = {
  insurance: [],
};

export const insuranceSlice = createSlice({
  name: "insurancefooter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInsurance.fulfilled, (state, action) => {
      state.insurance = [...action.payload];
    });
  },
});

export default insuranceSlice.reducer;
