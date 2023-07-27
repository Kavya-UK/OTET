import { createSlice } from "@reduxjs/toolkit";
import {
  fetchConditions,
  fetchFeaturedConditions,
} from "../thunk/conditions.thunk";

const initialState = {
  conditionsList:[],
  featuredConditionsList:[]
};

export const conditionSlice = createSlice({
  name: "medicalConditions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchConditions.fulfilled, (state, action) => {
      state.conditionsList = [...action.payload];
    });
    builder.addCase(fetchFeaturedConditions.fulfilled, (state, action) => {
      state.featuredConditionsList = [...action.payload];
    });
  },
});

// export const { updateConditions } = conditionSlice.actions;

export default conditionSlice.reducer;
