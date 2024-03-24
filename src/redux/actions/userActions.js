import { createAction } from "@reduxjs/toolkit";


export const logIn = createAction ("logIn",(user)=>{
    return {
        payload:user
    }
})

export const logOut = createAction("logOut",()=>{
    localStorage.removeItem("token");
    return{
        payload:{}
    }
})

export const update = createAction("update",(data)=>{
    return {
        payload:data
    }
})