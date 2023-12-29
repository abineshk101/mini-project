import { createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'userdetail',
  initialState: {
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
  eachgroupdata:{},
  registerData:{name:"",
                email:"",
                phone:"",
                password:""},
  loginData:{email:"",
            password:""},
  loginUserDetails:{},
  groupnames:[],
  admingroup:[]
  },
  reducers: {
    addMembers: (state,actions) => {
        state.membersList=actions.payload
    },
    addgroupdata:(state,actions)=>{
      state.groupdetailes=actions.payload
    },
    setadminid:(state,actions)=>{
      state.groupdetailes.adminid=actions.payload
    },
    groupdata:(state,actions)=>{state.groupdata.members=actions.payload},
    eachgroupdata:(state,actions)=>{state.eachgroupdata=actions.payload},
    getadmingroup:(state,actions)=>{state.admingroup=actions.payload},

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


export const { addMembers,addgroupdata,getRegisterData,getLoginData,getadmingroup,getloginUser,setadminid,getgroupname,groupdata,eachgroupdata } = counterSlice.actions
export default counterSlice.reducer
