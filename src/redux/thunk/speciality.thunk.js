import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, headersprops, authUser } from "../constant";

export const fetchFeaturedSpeciality = createAsyncThunk(
  "featuresSpeciality",
  async () => {
    var bodyFormData = new FormData();
    bodyFormData.append("featured", "1");
    try {
      const response = await axios.post(
        `${BASE_URL}/patient/master/speciality`,
          bodyFormData,
        { headers: headersprops, auth: authUser }
      );
      return [...response?.data?.data?.result];
    } catch (err) {
      return err.message;
    }
  }
);
export const fetchSpeciality = createAsyncThunk("allSpeciality", async () => {
try {
    const response = await axios.post(
      `${BASE_URL}/patient/master/speciality`,
      {},
      { headers: headersprops, auth: authUser }
    );
    return [...response?.data?.data?.result];
  } catch (err) {
    return err.message;
  }
});

export const fetchFooterSpeciality = createAsyncThunk(
  "footerSpeciality",
  async () => {
    var bodyFormData = new FormData();
    bodyFormData.append("featured", "1");
    bodyFormData.append("paginate", "6");

    try {
      const response = await axios.post(
        `${BASE_URL}/patient/master/speciality`,
        bodyFormData,
        { headers: headersprops, auth: authUser }
      );
      return [...response?.data?.data?.result];
    } catch (err) {
      return err.message;
    }
  }
);
