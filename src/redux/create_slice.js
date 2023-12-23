import { createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'userdetail',
  initialState: {
    membersList: [],
    groupdetailes:{
      groupname:"",
      admin:{name:"",email:"",phone:0},
      totalmonth:0,
      deadline:0,
      number_of_memeber:0,
      totalamount:0,
      amountpermonth:0,
  },
  registerData:{name:"",
                email:"",
                phone:"",
                password:""},
  loginData:{email:"",
            password:""},
  homeData:[],   
  },
  reducers: {
    addMembers: (state,actions) => {
        state.membersList=actions.payload
    },
    addgroupdata:(state,actions)=>{
      state.groupdetailes=actions.payload
    },
    getRegisterData:(state,action)=>{
      state.registerData=action.payload
    },
    getLoginData:(state,action)=>{
      state.loginData=action.payload
    },
    getHomeData:(state,action)=>{
        state.homeData=action.payload
      },

  }
})

export const { addMembers,addgroupdata,getRegisterData,getLoginData,getHomeData } = counterSlice.actions
export default counterSlice.reducer
