import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Reducers/userSlice';

const Store=configureStore({
  reducer: {
        user:userSlice
  },
})
export default Store;