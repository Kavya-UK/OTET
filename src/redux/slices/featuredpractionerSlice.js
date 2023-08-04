import { createSlice } from '@reduxjs/toolkit'
import {
  fetchFeaturedDoctors,
  fetchDoctorData,
  fetchDoctorSlot,
  fetchDoctorDataById,
} from "../thunk/featuredDoctor.thunk";
const initialState = {
isFeaturedDocLoading: true,
featuredDocs:[],
doctorData:{},
doctorDatabyId:{},
doctorSlot:{},
totalCount: 0
}

const featuredpractionerSlice = createSlice({
  name: "featured-doctors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeaturedDoctors.fulfilled, (state, action) => {
      state.featuredDocs = action.payload.result
        ? [...action.payload.result]
        : [];
      state.totalCount = action.payload.totalCount;
      state.isFeaturedDocLoading = false;
    });
    builder.addCase(fetchFeaturedDoctors.pending, (state, action) => {
      state.isFeaturedDocLoading = true;
      state.totalCount=0;
    });
    builder.addCase(fetchDoctorData.fulfilled, (state, action) => {
      state.doctorData = { ...action.payload };
    });
    builder.addCase(fetchDoctorDataById.fulfilled, (state, action) => {
      state.doctorDatabyId = { ...action.payload };
    });
    builder.addCase(fetchDoctorDataById.pending, (state, action) => {
      state.doctorDatabyId = {};
    });
    builder.addCase(fetchDoctorSlot.fulfilled, (state, action) => {
      state.doctorSlot = { ...action.payload };
    });
  },
});

// export const {} = featuredpractionerSlice.actions

export default featuredpractionerSlice.reducer