import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/Userslice';
import userReduser from '../features/Userslice'

export const store = configureStore({
  reducer: {
    user: userReduser,
  },
});