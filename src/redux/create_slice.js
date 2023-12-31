import { createSlice } from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
  name: 'userdetail',
  initialState: {
    statustoken:"",
    statuss:[],
    emailsend:{name:"",email:"",message:""},
    individual: [
      
    ],
    admin: {
      members: []
    },
    
    membersList: [],
    groupdetailes: {
      groupname: "",
      adminid: 0,
      deadline: 0,
      totalmonth: 0,
      amountpermonth: 0

    },
    groupdata: {
      members: []
    },
    eachgroupdata: {},
    payment:{
      amount:0,
      month:""
    },
    loginUserDetails: {},
    groupnames: [],
    user_groupnames:[],
    admin_groupnames:[],
  
  loginData:{email:"",
            password:""},
  registerData:{name:"",
                email:"",
                password:"",
                phone:"",
                aadhar:""},
  admingroup:[],
  updateamount:[],
  loader:false
  },
  reducers: {
    statusshow:(state,action)=>{
      state.statuss=action.payload
    },
    statusToken:(state,action)=>{
      state.statustoken=action.payload
    },
    
    updateAmount:(state,action)=>{
      state.updateamount=action.payload
    },
    individualData: (state, action) => {
      state.individual = action.payload
    },
    adminData: (state, action) => {
      state.admin = action.payload
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
    eachgroupdata:(state,actions)=>{state.eachgroupdata=actions.payload},

    getgroupname:(state,actions)=>{
      state.user_groupnames=actions.payload
    },
    getadmingroup:(state,actions)=>{
      state.admingroup=actions.payload
    },
    
    sendEmails: (state, actions) => {
      state.emailsend = actions.payload
    },
    groupdata: (state, actions) => { 
      state.groupdata.members = actions.payload 
    },
    getRegisterData: (state, action) => {
      state.registerData = action.payload
    },
    getLoginData: (state, action) => {
      state.loginData = action.payload
    },
    getloginUser: (state, action) => {
      state.loginUserDetails = action.payload},
    
    payment:(state,action)=>{
      state.payment=action.payload
    },
    set_admin_groupname:(state,actions)=>{
      state.admin_groupnames=actions.payload
  },
  setrefresh:(state,action)=>{
    state.refresh=action.payload

  },
  loader:(state,action)=>{state.loader=action.payload}
}
})

export const { statusToken,statusshow,updateAmount,addMembers, addgroupdata, getRegisterData, loader,getLoginData, getloginUser, getgroupname, individualData, adminData, groupdata, eachgroupdata, sendEmails,payment,set_admin_groupname,getadmingroup,setadminid,statusData,setrefresh } = CounterSlice.actions
export default CounterSlice.reducer