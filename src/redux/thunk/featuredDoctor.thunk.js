import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, headersprops, authUser } from "../constant";

export const fetchFeaturedDoctors = createAsyncThunk("featuredDoctors", async (data) => {
  try {
    const response = await axios.post(`/patient/doctors`, data, {
      headers: headersprops,
      auth: authUser,
    });
    return {
      result: [...response?.data?.data?.result],
      totalCount: response?.data?.data?.total_count,
    };
  } catch (err) {
    return err.message;
  }
});

export const fetchDoctorData = createAsyncThunk("doctorData", async (data) => {
  try {
    const response = await axios.post(`/patient/doctors/${data.url}`, {}, {
      headers: headersprops,
      auth: authUser,
    });
    return response?.data?.data?.result?.[0]
  } catch (err) {
    return err.message;
  }
});
export const fetchDoctorDataById = createAsyncThunk("doctorDataById", async (data) => {
  try {
    const response = await axios.post(`/patient/doctors`, data, {
      headers: headersprops,
      auth: authUser,
    });
    return response?.data?.data?.result?.[0]
  } catch (err) {
    return err.message;
  }
});
export const fetchDoctorSlot = createAsyncThunk("slotAvailability", async (data) => {
  try {
    const response = await axios.post(
      `/patient/slot_availability`,
      {...data},
      {
        headers: headersprops,
        auth: authUser,
      }
    );
    return response?.data?.data?.result
  } catch (err) {
    return err.message;
  }
});
