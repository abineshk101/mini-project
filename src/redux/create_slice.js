import { createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'userdetail',
  initialState: {
    membersList: [],
    groupdetailes:{
      groupname:"",
      adminid:2,
      deadline:0,
      totalmonth:0,
      amountpermonth:0

  },
  groupdata:{
    members:[]
  },
  eachgroupdata:{}
  },
  reducers: {
    addMembers: (state,actions) => {
        state.membersList=actions.payload
    },
    addgroupdata:(state,actions)=>{
      state.groupdetailes=actions.payload
    },
    groupdata:(state,actions)=>{state.groupdata.members=actions.payload},
    eachgroupdata:(state,actions)=>{state.eachgroupdata=actions.payload}


  }
})

export const { addMembers,addgroupdata ,groupdata,eachgroupdata} = counterSlice.actions
export default counterSlice.reducer
