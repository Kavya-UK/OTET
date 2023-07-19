import { createSlice } from '@reduxjs/toolkit'
import { fetchDoctorFilter } from "../thunk/doctorfilter.thunk";

const initialState = {
filteredList:[]
}

const doctorfilterSlice = createSlice({
  name: "Filterdoctor",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchDoctorFilter.fulfilled, (state, action) => {
      state.filteredList = [...action.payload];
    });
  }
});

// export const {} = filterdoctorSlice.actions

export default doctorfilterSlice.reducer;