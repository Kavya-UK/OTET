import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../thunk/user.thunk';
const initialState = {
user:{}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = {...action.payload};
    });
  },
});

// export const {} = userSlice.actions

export default userSlice.reducer