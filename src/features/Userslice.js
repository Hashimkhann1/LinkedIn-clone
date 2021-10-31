import { createSlice } from '@reduxjs/toolkit';


const initialState = {
user:null
};

export const Userslice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state , action) => {

      state.user = action.payload;

    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = Userslice.actions;

export const selectUser = (state) => state.user.user;

export default Userslice.reducer;
