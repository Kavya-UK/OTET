import { createAsyncThunk } from "@reduxjs/toolkit";
import axiostokenInstance from "../../handlers/axiosInterceptors";
import {  headersprops, authUser } from "../constant";

export const fetchAppointments = createAsyncThunk("fetchAppointments", async (data) => {
  try {
    const response = await axiostokenInstance.post(
      `/patient/appointments`,
      data,
      {
        headers: headersprops,
        auth: authUser,
      }
    );
    return [...response?.data?.data?.result];
  } catch (err) {
    return err.message;
  }
});
