import { configureStore } from '@reduxjs/toolkit'
import userdetailReducer from './create_slice'

const Store=configureStore({
  reducer: {userdetail:userdetailReducer},
})

export default Store;