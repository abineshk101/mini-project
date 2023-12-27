import { createSlice} from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
  name: 'userdetail',
  initialState: {
    individual:[{
    }],
    admin:{
      members:[]
    },
    status:false
  },
  reducers: {
    individualData: (state,action) => {
      state.individual=action.payload
    },
    adminData: (state,action) => {
      state.admin=action.payload
    },
    statusData: (state,action) => {
      state.status=action.payload
    },
  }
})

export const { individualData,adminData,statusData } = CounterSlice.actions
export default CounterSlice.reducer