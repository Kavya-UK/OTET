import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, headersprops, authUser } from "../constant";

export const fetchBrowseDoctors = createAsyncThunk("browsedoctors", async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/patient/operating/city`,
      {},
      { headers: headersprops, auth: authUser }
    );
    return [...response?.data?.data?.result];
  } catch (err) {
    return err.message;
  }
});
