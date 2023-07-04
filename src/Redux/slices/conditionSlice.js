import { createSlice } from "@reduxjs/toolkit";
import {fetchConditions} from "../thunk/conditions.thunk";

const initialState = {
  conditionsList:[]
};

export const conditionSlice = createSlice({
  name: "medicalConditions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchConditions.fulfilled, (state, action) => {
      state.conditionsList = [...action.payload];
    });
  },
});

// export const { updateConditions } = conditionSlice.actions;

export default conditionSlice.reducer;
