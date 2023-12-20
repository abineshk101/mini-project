import { createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'userdetail',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {

    },
    decremented: state => {

    }
  }
})

export default counterSlice.reducer;
export const { incremented, decremented } = counterSlice.actions
