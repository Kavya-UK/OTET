import { createSlice } from "@reduxjs/toolkit";
import { fetchFeaturedSpeciality, fetchFooterSpeciality, fetchSpeciality } from "../thunk/speciality.thunk";

const initialState = {
  specialityList: [],
  featuredSpecialityList: [],
  footerSpecialityList:[],
};

export const specialitySlice = createSlice({
  name: "specialitySlice",
  initialState,
  reducers: {
    updateSpeciality: (state,action) => {
     state.featuredSpecialityList = action.payload;
    },
  },
  extraReducers: (builder) => {
    
    builder.addCase(fetchFeaturedSpeciality.fulfilled, (state, action) => {
      state.featuredSpecialityList = [...action.payload];
    });
    builder.addCase(fetchSpeciality.fulfilled, (state, action) => {
      state.specialityList = [...action.payload];
    });
    builder.addCase(fetchFooterSpeciality.fulfilled, (state, action) => {
      state.footerSpecialityList = [...action.payload];
    });
  },
});


export const { updateSpeciality } = specialitySlice.actions;

export default specialitySlice.reducer;
