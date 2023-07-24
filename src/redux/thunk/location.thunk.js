import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, headersprops, authUser } from "../constant";

export const fetchLocation = createAsyncThunk("location", async (data) => {
  try {
    
    const response = await axios.post(
      `${BASE_URL}/patient/master/areas`,
      data,
      { headers: headersprops, auth: authUser }
    );
    return [...response?.data?.data?.result];
  } catch (err) {
    return err.message;
  }
});
