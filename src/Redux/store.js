import { configureStore } from "@reduxjs/toolkit";
import specialitySlice from "./slices/specialitySlice";

export const store = configureStore({
  reducer: {
    speciality: specialitySlice,
  },
});
