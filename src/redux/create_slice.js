import { createSlice } from '@reduxjs/toolkit'

export const CounterSlice = createSlice({
  name: 'userdetail',
  initialState: {
    individual: [],
    admin: [],
    status: false,
    membersList: [],
    groupdetailes: {
      groupname: "",
      adminid: 2,
      deadline: 0,
      totalmonth: 0,
      amountpermonth: 0

    },
    groupdata: {
      members: []
    },
    eachgroupdata: {},
    registerData: {
      name: "",
      email: "",
      phone: "",
      password: ""
    },
    loginData: {
      email: "",
      password: ""
    },
    loginUserDetails: {},
    groupnames: []
  },
  reducers: {
    individualData: (state, action) => {
      state.individual = action.payload
    },
    adminData: (state, action) => {
      state.admin = action.payload
    },
    statusData: (state, action) => {
      state.status = action.payload
    },
    addMembers: (state, actions) => {
      state.membersList = actions.payload
    },
    addgroupdata: (state, actions) => {
      state.groupdetailes = actions.payload
    },
    groupdata: (state, actions) => { state.groupdata.members = actions.payload },
    eachgroupdata: (state, actions) => { state.eachgroupdata = actions.payload },

    getgroupname: (state, actions) => {
      state.groupnames = actions.payload
    },
    getRegisterData: (state, action) => {
      state.registerData = action.payload
    },
    getLoginData: (state, action) => {
      state.loginData = action.payload
    },
    getloginUser: (state, action) => {
      state.loginUserDetails = action.payload
    },

  }
})







export const { addMembers, addgroupdata, getRegisterData, getLoginData, getloginUser, getgroupname, groupdata, eachgroupdata, individualData, adminData, statusData } = CounterSlice.actions
export default CounterSlice.reducer
