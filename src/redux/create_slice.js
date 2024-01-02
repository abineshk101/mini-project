import { createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'userdetail',
  initialState: {
    emailsend:"vicki@gmail.com",
    membersList: [],
    groupdetailes:{
      groupname:"",
      adminid:0,
      deadline:0,
      totalmonth:0,
      amountpermonth:0

  },
  groupdata:{
    members:[]
  },
  eachgroupdata:{id:1},
  registerData:{name:"",
                email:"",
                phone:"",
                aadhar:"",
                password:""},
  loginData:{email:"",
            password:""},
  loginUserDetails:{},
  groupnames:[]
  },
  reducers: {
    sendEmails: (state,actions) => {
      state.emailsend=actions.payload
  },
    addMembers: (state,actions) => {
        state.membersList=actions.payload
    },
    addgroupdata:(state,actions)=>{
      state.groupdetailes=actions.payload
    },
    groupdata:(state,actions)=>{state.groupdata.members=actions.payload},
    eachgroupdata:(state,actions)=>{state.eachgroupdata=actions.payload},

    getgroupname:(state,actions)=>{
      state.groupnames=actions.payload
    },
    getRegisterData:(state,action)=>{
      state.registerData=action.payload
    },
    getLoginData:(state,action)=>{
      state.loginData=action.payload
    },
    getloginUser:(state,action)=>{
        state.loginUserDetails=action.payload
      },
      

  }
})


export const { addMembers,addgroupdata,getRegisterData,getLoginData,getloginUser,getgroupname,groupdata,eachgroupdata,sendEmails } = counterSlice.actions
export default counterSlice.reducer
