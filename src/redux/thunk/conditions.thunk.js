import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, headersprops, authUser } from "../constant";

export const fetchConditions = createAsyncThunk(
  "medconditions",
  async () => {
    
    try {
      const response = await axios.post(
        `${BASE_URL}/patient/master/condition`,
        {"paginate":100},
        { headers: headersprops, auth: authUser }
      );
      return [...response?.data?.data?.result];
    } catch (err) {
      return err.message;
    }
  }
);
export const fetchFeaturedConditions = createAsyncThunk(
  "featuredmedconditions",
  async () => {
    
    try {
      const response = await axios.post(
        `${BASE_URL}/patient/master/condition`,
        { paginate: 4, featured: "1" },
        { headers: headersprops, auth: authUser }
      );
      return [...response?.data?.data?.result];
    } catch (err) {
      return err.message;
    }
  }
);

