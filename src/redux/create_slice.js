import { createSlice} from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
  name: 'userdetail',
  initialState: {
    individual:[]
  },
  reducers: {
    individualData: (state,action) => {
      state.individual=action.payload
    },
    
  }
})

export const { individualData } = CounterSlice.actions
export default CounterSlice.reducer