import { createSlice } from '@reduxjs/toolkit'
import {
  fetchFeaturedDoctors,
  fetchDoctorData,
} from "../thunk/featuredDoctor.thunk";
const initialState = {
featuredDocs:[],
doctorData:{},
totalCount: 0
}

const featuredpractionerSlice = createSlice({
  name: "featured-doctors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeaturedDoctors.fulfilled, (state, action) => {
      state.featuredDocs = [...action.payload.result];
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(fetchDoctorData.fulfilled, (state, action) => {
      state.doctorData = { ...action.payload };
    });
  },
});

// export const {} = featuredpractionerSlice.actions

export default featuredpractionerSlice.reducer