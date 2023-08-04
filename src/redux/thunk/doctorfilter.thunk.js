import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, headersprops, authUser } from "../constant";

export const fetchDoctorFilter = createAsyncThunk("filterdoctor", async (data={}) => {
  try {
    const response = await axios.post(
      `/patient/filters`,
      data,
      { headers: headersprops, auth: authUser }
    );
    return [...response?.data?.data?.result];
  } catch (err) {
    return err.message;
  }
});
