import { createSlice } from '@reduxjs/toolkit'
import { fetchFeaturedDoctors } from '../thunk/featuredDoctor.thunk';
const initialState = {
featuredDocs:[]
}

const featuredpractionerSlice = createSlice({
  name: "featured-doctors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeaturedDoctors.fulfilled, (state, action) => {
      state.featuredDocs = [...action.payload];
    });
  },
});

// export const {} = featuredpractionerSlice.actions

export default featuredpractionerSlice.reducer