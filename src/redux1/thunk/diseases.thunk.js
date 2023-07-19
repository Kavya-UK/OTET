import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, headersprops, authUser } from "../constant";

export const fetchDiseases = createAsyncThunk("diseases", async (data) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/patient/master/mapped`,
      data,
      { headers: headersprops, auth: authUser }
    );
    return {
      id: data.condition_id,
      result: [...response?.data?.data?.result],
    };
  } catch (err) {
    return err.message;
  }
});
