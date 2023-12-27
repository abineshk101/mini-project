import { createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'userdetail',
  initialState: {
                  membersList: [],
                  groupdetailes:
                                {
                                  groupname:"",
                                  admin:{name:"",email:"",phone:0},
                                  totalmonth:0,
                                  deadline:0,
                                  number_of_memeber:0,
                                  totalamount:0,
                                  amountpermonth:0
                                },
                  loginUserDetails:{user_id:1},
                  groupnames:[],
                  
                },
  reducers: {
    addMembers: (state,actions) => {
        state.membersList=actions.payload
    },
    addgroupdata:(state,actions)=>{
      state.groupdetailes=actions.payload
    },
    getgroupname:(state,actions)=>{
      state.groupnames=actions.payload
    }

  }
})

export const { addMembers,addgroupdata,getgroupname } = counterSlice.actions
export default counterSlice.reducer
