import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, headersprops, authUser } from "../constant";

export const fetchInsurance = createAsyncThunk("insurance", async (data) => {
  try {
    const response = await axios.post(
      `/patient/master/insurance`,
      data,
      { headers: headersprops, auth: authUser }
    );
    return [...response?.data?.data?.result];
  } catch (err) {
    return err.message;
  }
});
