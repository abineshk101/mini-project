import { createSlice} from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
  name: 'userdetail',
  initialState: {
    emailsend:"",
    individual:[{}],
    admin:{
          members:[]
          },
    status:false,
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
  loginData:{email:"",
            password:""},
  loginUserDetails:{},
  groupnames:[],
  registerData:{name:"",
                email:"",
                phone:"",
                password:""},
  loginData:{email:"",
            password:""},
  loginUserDetails:{},
  user_groupnames:[],
  admin_groupnames:[],
  admingroup:[]
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

    getgroupname:(state,actions)=>{
      state.user_groupnames=actions.payload
    },
    getadmingroup:(state,actions)=>{
      state.admingroup=actions.payload
    },
    set_admin_groupname:(state,actions)=>{
      state.admin_groupnames=actions.payload
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


export const { addMembers,addgroupdata,getRegisterData,getLoginData,getloginUser,getgroupname,getadmingroup,setadminid,set_admin_groupname,individualData,adminData,statusData,groupdata,eachgroupdata,sendEmails} = CounterSlice.actions
export default CounterSlice.reducer


