import { createReducer } from "@reduxjs/toolkit";
import { logIn, logOut } from "../actions/userActions";

const initialState = {
    user: {}
}
export const userReducer = createReducer(initialState, (builder)=>{
    builder.addCase(logIn, (state, action)=>{
        return {
            ...state, user: action.payload
        }
    })
    builder.addCase(logOut, ()=>{
        return initialState        
    })
})

export default userReducer;