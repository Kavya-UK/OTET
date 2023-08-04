import { configureStore } from "@reduxjs/toolkit";
import specialitySlice from "./slices/specialitySlice";
import conditionSlice from "./slices/conditionSlice";
import locationSlice from "./slices/locationSlice";
import diseasesSlice from "./slices/diseasesSlice";
import browsedoctorSlice from "./slices/browsedoctorSlice";
import featuredpractionerSlice from "./slices/featuredpractionerSlice";
import doctorfilterSlice from "./slices/doctorfilterSlice";
import  insuranceSlice  from "./slices/insurancefooterSlice";
import MyAppointmentSlice from "./slices/myAppointmentSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    speciality: specialitySlice,
    conditions: conditionSlice,
    locations: locationSlice,
    diseases: diseasesSlice,
    browsedocs: browsedoctorSlice,
    featuredpractioner: featuredpractionerSlice,
    doctorfilter: doctorfilterSlice,
    insurance:insuranceSlice,
    myAppointment:MyAppointmentSlice,
    user:userSlice
  },
});
