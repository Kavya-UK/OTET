import { createSlice } from '@reduxjs/toolkit'
import { fetchBrowseDoctors } from '../thunk/browsedoctor.thunk';

const initialState = {
docList:[]
}

const browsedoctorSlice = createSlice({
  name: "browsedoctors",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
builder.addCase(fetchBrowseDoctors.fulfilled,(state,action)=>{
  state.docList=[...action.payload]
});
  }
});

// export const {} = browsedoctorSlice.actions

export default browsedoctorSlice.reducer;