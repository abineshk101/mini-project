import { configureStore } from '@reduxjs/toolkit'
import userdetailReducer from './counterSlice'

const store=configureStore({
  reducer: {userdetail:userdetailReducer},
})

export default store;