import { configureStore } from '@reduxjs/toolkit'
import userdetailReducer from './create_slice'

const store=configureStore({
  reducer: {
    userdetail:userdetailReducer
  },
})

export default store;