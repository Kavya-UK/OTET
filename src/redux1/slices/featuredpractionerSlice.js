import { createSlice } from '@reduxjs/toolkit'
import {
  fetchFeaturedDoctors,
  fetchDoctorData,
  fetchDoctorSlot,
} from "../thunk/featuredDoctor.thunk";
const initialState = {
isFeaturedDocLoading: true,
featuredDocs:[],
doctorData:{},
doctorSlot:{},
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
      state.isFeaturedDocLoading = false;
    });
    builder.addCase(fetchFeaturedDoctors.pending, (state, action) => {
      state.isFeaturedDocLoading = true;
    });
    builder.addCase(fetchDoctorData.fulfilled, (state, action) => {
      state.doctorData = { ...action.payload };
    });
    builder.addCase(fetchDoctorSlot.fulfilled, (state, action) => {
      state.doctorSlot = { ...action.payload };
    });
  },
});

// export const {} = featuredpractionerSlice.actions

export default featuredpractionerSlice.reducer