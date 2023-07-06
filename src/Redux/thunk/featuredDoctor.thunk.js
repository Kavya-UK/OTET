import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, headersprops, authUser } from "../constant";

export const fetchFeaturedDoctors = createAsyncThunk("featuredDoctors", async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/patient/doctors`,
      { paginate: 3 },
      { headers: headersprops, auth: authUser }
    );
    return [...response?.data?.data?.result];
  } catch (err) {
    return err.message;
  }
});
