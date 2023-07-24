import { createSlice } from "@reduxjs/toolkit";
import { fetchDiseases } from "../thunk/diseases.thunk";
const initialState = {
  diseases: {
  },
};

const diseasesSlice = createSlice({
  name: "diseases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDiseases.fulfilled, (state, action) => {
      state.diseases[action.payload.id] = action.payload.result ? [...action.payload.result] : [] 
    });
  },
});

// export const {} = diseasesSlice.actions

export default diseasesSlice.reducer;
