import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
                       name:'user',
                       initialState:{
                       registerData:{name:"",
                                   email:"",
                                   phone:"",
                                   password:""},
                       loginData:{email:"",
                                  password:""},
                       homeData:[],           
                       },
                       reducers:{
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
export const{getRegisterData,getLoginData,getHomeData,getUpdateUser,getIdData,getSingleuser}=userSlice.actions
export default userSlice.reducer;
