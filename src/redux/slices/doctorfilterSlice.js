import { createSlice } from '@reduxjs/toolkit'
import { fetchDoctorFilter } from "../thunk/doctorfilter.thunk";

const initialState = {
filteredList:[],
isFilterLoading: true
}

const doctorfilterSlice = createSlice({
  name: "Filterdoctor",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchDoctorFilter.fulfilled, (state, action) => {
      state.filteredList = [...action.payload];
      state.isFilterLoading = false;
    });
    builder.addCase(fetchDoctorFilter.pending, (state, action) => {
      state.isFilterLoading = true
    });
  }
});

// export const {} = filterdoctorSlice.actions

export default doctorfilterSlice.reducer;