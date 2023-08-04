import { createSlice } from "@reduxjs/toolkit";
import { fetchAppointments } from "../thunk/listAppointment.thunk";
const initialState = {
  appointmentList: []
};

export const MyAppointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchAppointments.fulfilled, (state, action) => {
    //   state.appointmentList = [...action.payload];
    // });
  },
});


export default MyAppointmentSlice.reducer;

